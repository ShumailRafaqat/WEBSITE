'use client'

import { useEffect, useId, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type IconName = 'site' | 'search' | 'maps' | 'analytics' | 'arrow' | 'check'
const chapters = [
  { id: 'site', label: 'Your website', title: 'A beautiful website.\nAn empty waiting room.', caption: 'You built the destination. But the path to it is missing.', note: 'Give every page a clear purpose.', fix: 'SEO optimization', detail: 'Clear page structure and useful answers help people understand what you offer.', tags: ['Page structure', 'Useful content', 'Search intent'] },
  { id: 'search', label: 'The search', title: 'They search for you.\nThey find someone else.', caption: 'At the moment they need a dentist, another practice gets their attention.', note: 'Be there when intent is highest.', fix: 'SEO optimization', detail: 'Connect your pages to the questions your future customers actually ask.', tags: ['Relevant keywords', 'Helpful pages', 'Discoverability'] },
  { id: 'maps', label: 'The neighborhood', title: 'So close to customers.\nSo hard to discover.', caption: 'An incomplete business profile leaves people with reasons to keep looking.', note: 'Make the next step feel easy.', fix: 'Google Business Profile', detail: 'Accurate details, real photos and helpful review responses build a clearer local presence.', tags: ['Accurate hours', 'Real photos', 'Complete details'] },
  { id: 'analytics', label: 'The missed connection', title: 'Clicks look promising.\nConversations stay quiet.', caption: 'More attention only matters when it reaches people who need your business.', note: 'Reach people. Start conversations.', fix: 'Digital marketing', detail: 'Relevant campaigns and a clear next step connect attention with meaningful enquiries.', tags: ['Relevant audience', 'Clear message', 'Useful measurement'] },
] as const

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'site' && <><rect x="3" y="5" width="26" height="22" rx="4"/><path d="M3 11h26M7 8h1m3 0h1"/><circle cx="16" cy="19" r="5"/><path d="M11 19h10m-5-5c-3 3-3 7 0 10 3-3 3-7 0-10Z"/></>}
    {name === 'search' && <><circle cx="14" cy="14" r="9"/><path d="m21 21 8 8M10 14h8m-4-4v8"/></>}
    {name === 'maps' && <><path d="M26 13c0 8-10 16-10 16S6 21 6 13a10 10 0 0 1 20 0Z"/><circle cx="16" cy="13" r="3.5"/></>}
    {name === 'analytics' && <><path d="M4 28h25M7 24v-7h4v7m4 0V12h4v12m4 0V6h4v18M5 12l8-6 5 2 9-6m-6 0h6v6"/></>}
    {name === 'arrow' && <path d="M5 16h22m-8-8 8 8-8 8"/>}
    {name === 'check' && <path d="m7 16 6 6L26 9"/>}
  </svg>
}

function Scene({ chapter, improved }: { chapter: number; improved: boolean }) {
  if (chapter === 0) return <div className="pv-browser">
    <div className="pv-browser-bar"><span>● ● ●</span><span>harborandpine.example</span><Icon name="site"/></div>
    <div className="pv-mini-nav"><b>H&P<span> DENTAL</span></b><span>Care, close to home.</span></div>
    <div className="pv-website-hero"><div><small>A LITTLE CARE. A BIG DIFFERENCE.</small><h4>Your smile.<br/>Our neighborhood.</h4><span className="pv-mock-button">Book a visit ↗</span></div><div className="pv-tooth"><svg viewBox="0 0 100 110" aria-hidden="true"><path d="M50 19C16-6 0 25 17 57c9 17 8 43 20 43 9 0 5-30 13-30s4 30 13 30c12 0 11-26 20-43C100 25 84-6 50 19Z" fill="currentColor"/><path d="M34 35q16 12 32 0" fill="none" stroke="#608574" strokeWidth="3"/></svg></div></div>
    <div className="pv-visitor-line"><span className="pv-status-dot"/>{improved ? 'Clear answers. A visible next step.' : 'Your practice is ready. Where is everyone?'}</div>
    <div className="pv-path"><span>Customer</span><i className={improved ? 'connected' : ''}/><Icon name="site"/><span>{improved ? 'A clearer path' : 'Missing connection'}</span></div>
  </div>
  if (chapter === 1) return <div className="pv-browser pv-search-view">
    <div className="pv-searchbox"><Icon name="search"/><span>family dentist near me</span><span className="pv-cursor"/></div>
    <div className="pv-search-tabs">All <span>Maps</span><span>Images</span><span>Reviews</span></div>
    <div className="pv-results">{(improved ? ['Harbor & Pine Dental', 'Oakwood Family Dentistry', 'Canton Smile Studio'] : ['Oakwood Family Dentistry', 'Canton Smile Studio', 'Harbor & Pine Dental']).map((name, i) => <div className={`pv-result ${name.startsWith('Harbor') ? 'pv-own' : ''}`} key={name}>
      <span className="pv-result-number">0{i + 1}</span><div><small>{name.startsWith('Harbor') ? 'YOUR BUSINESS' : 'ANOTHER LOCAL PRACTICE'}</small><h4>{name}</h4><p>{name.startsWith('Harbor') && !improved ? 'Limited visibility. Easy to overlook.' : 'Family dental care · Canton, GA'}</p><div className="pv-skeleton"/></div>{name.startsWith('Harbor') && <Icon name={improved ? 'check' : 'search'}/>}</div>)}</div>
    <p className="pv-scene-foot">Simplified search illustration · positions are hypothetical</p>
  </div>
  if (chapter === 2) return <div className="pv-map-view">
    <div className="pv-map-grid"/><div className="pv-park pv-park-one"/><div className="pv-park pv-park-two"/><div className="pv-river"/>
    <span className="pv-street">MAIN STREET</span><span className="pv-street second">OAK AVENUE</span>
    <div className="pv-pin pv-pin-one"><Icon name="maps"/></div><div className="pv-pin pv-pin-two"><Icon name="maps"/></div>
    <div className={`pv-pin pv-pin-you ${improved ? 'found' : ''}`}><Icon name="maps"/><span>YOUR PRACTICE</span></div>
    <div className="pv-map-profile"><div className="pv-profile-icon"><Icon name="site"/></div><div><small>HARBOR & PINE DENTAL</small><h4>{improved ? 'Ready for a first visit.' : 'Would you choose this place?'}</h4><p>{improved ? 'Hours updated · Photos added · Details complete' : 'Hours missing · No photos · Incomplete details'}</p></div><span className="pv-profile-status">{improved ? '✓' : '?'}</span></div>
  </div>
  return <div className="pv-traffic-view"><div className="pv-traffic-heading"><Icon name="analytics"/><div><small>ATTENTION → INTENT</small><h4>{improved ? 'Make the right connection.' : 'Busy does not mean effective.'}</h4></div></div>
    <div className="pv-audience">{Array.from({length: 18}, (_, i) => <span key={i} className={i < (improved ? 14 : 3) ? 'relevant' : ''} style={{'--i': i} as CSSProperties}><svg viewBox="0 0 24 30" aria-hidden="true"><circle cx="12" cy="7" r="5"/><path d="M3 29V21a9 9 0 0 1 18 0v8Z"/></svg></span>)}</div>
    <div className="pv-funnel"><span>{improved ? 'Relevant audience + useful message' : 'Broad reach. A weak connection.'}</span><div className="pv-funnel-path"/><div className="pv-enquiry"><Icon name={improved ? 'check' : 'search'}/>{improved ? 'A reason to get in touch' : 'Few reasons to take the next step'}</div></div>
    <div className="pv-legend"><i/> Relevant audience <span>Illustrative people, not measured results</span></div>
  </div>
}

export default function Problem() {
  const [active, setActive] = useState(0)
  const [improved, setImproved] = useState(false)
  const [paused, setPaused] = useState(false)
  const root = useRef<HTMLElement>(null)
  const uid = useId()
  const chapter = chapters[active]

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (!root.current || window.matchMedia('(max-width: 760px), (max-height: 610px), (prefers-reduced-motion: reduce)').matches) return
      const rect = root.current.getBoundingClientRect()
      if (rect.top > 0 || rect.bottom < window.innerHeight) return
      const progress = Math.max(0, Math.min(.999, -rect.top / (rect.height - window.innerHeight)))
      setActive(Math.floor(progress * chapters.length))
    }
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  const select = (index: number) => {
    setActive(index)
    if (!window.matchMedia('(max-width: 760px), (max-height: 610px), (prefers-reduced-motion: reduce)').matches && root.current) {
      const top = root.current.getBoundingClientRect().top + window.scrollY
      const travel = root.current.offsetHeight - window.innerHeight
      window.scrollTo({ top: top + travel * ((index + .35) / chapters.length), behavior: 'instant' as ScrollBehavior })
    }
  }

  return <section ref={root} id="problem" className={`pv-story ${improved ? 'pv-improved' : ''} ${paused ? 'pv-paused' : ''}`} aria-labelledby={`${uid}-heading`}>
    <style>{problemStyles}</style>
    <style>{`
      @media (min-width: 761px) {
        .pv-story { height: 320vh; }
      }
      @media (max-width: 760px) {
        .pv-inner { padding: 24px 16px 18px; }
        .pv-copy { padding: 23px 0 2px; }
        .pv-chapter { margin-bottom: 13px; }
        .pv-caption { margin-top: 14px !important; }
        .pv-comparison { margin-top: 17px; }
        .pv-takeaway { margin-top: 17px; min-height: 76px; }
        .pv-art { height: 380px; }
        .pv-footer { margin-top: 16px; }
      }
      @media (max-width: 380px) {
        .pv-art { height: 360px; }
      }
      @media (min-width: 761px) and (max-height: 610px), (prefers-reduced-motion: reduce) {
        .pv-story { height: auto; }
      }
    `}</style>
    <div className="pv-sticky"><div className="pv-inner">
      <header className="pv-header"><span className="pv-eyebrow"><i/> THE VISIBILITY GAP</span><span className="pv-example">An illustrative local business story</span><button className="pv-pause" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? 'Resume motion' : 'Pause motion'}</button></header>
      <div className="pv-layout">
        <div className="pv-copy"><span className="pv-chapter">0{active + 1} <i/> 04</span><h2 id={`${uid}-heading`} key={chapter.id}>{chapter.title.split('\n').map((line, i) => <span key={line} className={i === 1 ? 'pv-accent' : ''}>{line}</span>)}</h2><p className="pv-caption">{chapter.caption}</p>
          <div className="pv-comparison" role="group" aria-label="Compare the visibility gap with an improved example"><button aria-pressed={!improved} onClick={() => setImproved(false)}>The problem</button><button aria-pressed={improved} onClick={() => setImproved(true)}>See the difference <span>↗</span></button></div>
          <div className="pv-takeaway" aria-live="polite"><span>{improved ? 'WHAT WE WORK ON' : 'THE MISSED OPPORTUNITY'}</span><p>{improved ? chapter.detail : chapter.note}</p>{improved && <b>{chapter.fix} <Icon name="arrow"/></b>}</div>
        </div>
        <div className="pv-art"><div className="pv-orbit"/><svg className="pv-connections" viewBox="0 0 700 550" fill="none" aria-hidden="true"><path d="M115 112Q270 5 352 125M563 110Q690 230 568 330M579 402Q396 566 309 429M112 410Q-15 250 145 224"/><path d="m337 114 17 12 2-21m199 210 10 19 18-9m-258 96-21-4 9 19m-183-233 18-2-3 21"/></svg>
          <span className="pv-scribble">{improved ? 'Make the connection.' : 'Good business. Hidden potential.'}</span>
          <div className="pv-stage" id={`${uid}-scene`} role="region" aria-label={`${chapter.label}: ${improved ? 'improved example' : 'visibility problem'}`}><div key={`${active}-${improved}`} className="pv-scene"><Scene chapter={active} improved={improved}/></div></div>
          {chapters.map((item, i) => <button key={item.id} className={`pv-orbit-button pv-orbit-${i} ${active === i ? 'is-active' : ''}`} aria-pressed={active === i} aria-controls={`${uid}-scene`} onClick={() => select(i)}><span className="pv-icon-bubble"><Icon name={item.id}/></span><span>{['Website', 'Search', 'Maps', 'Traffic'][i]}</span></button>)}
          <div className="pv-art-footer"><span className="pv-status-dot"/>{improved ? 'A stronger foundation for visibility' : 'Open for business. Hard to find.'}</div>
        </div>
      </div>
      <footer className="pv-footer"><nav aria-label="Story chapters">{chapters.map((item, i) => <button key={item.id} aria-current={active === i ? 'step' : undefined} onClick={() => select(i)}><span>0{i + 1}</span>{item.label}<i/></button>)}</nav><p><span className="pv-scroll-label">Scroll to explore</span><span className="pv-tap-label">Tap to explore</span> ↓</p></footer>
      <p className="pv-disclaimer">Fictional business. Illustrative scenarios only; rankings, traffic and enquiries are not promised outcomes.</p>
    </div></div>
  </section>
}

const problemStyles = `
/* Scoped styles. Map these four variables to your existing theme if needed. */
.pv-story{--pv-pine:var(--color-pine,#234e40);--pv-sage:var(--color-sage,#a4b69a);--pv-mist:var(--color-mist,#f5f5ed);--pv-ink:var(--color-ink,#203b32);--pv-muted:#718076;position:relative;height:380vh;background:var(--pv-mist);color:var(--pv-ink);font-family:inherit;border-top:1px solid #234e4020;isolation:isolate}
.pv-story *{box-sizing:border-box}.pv-story button{font:inherit;cursor:pointer;color:inherit}.pv-story button:focus-visible{outline:3px solid var(--pv-pine);outline-offset:5px}.pv-story svg{width:28px;height:28px;flex-shrink:0}.pv-story p,.pv-story h2,.pv-story h4{margin:0}.pv-sticky{position:sticky;top:0;min-height:100svh;display:flex;align-items:center;overflow:hidden}.pv-inner{width:min(1320px,100%);padding:38px 44px 20px;margin:auto}.pv-header{display:flex;align-items:center;gap:20px;font-size:10px;letter-spacing:1.7px}.pv-eyebrow{display:flex;align-items:center;gap:9px;font-weight:700}.pv-eyebrow i,.pv-status-dot{width:6px;height:6px;background:var(--pv-pine);border-radius:50%;display:inline-block;flex-shrink:0}.pv-example{margin-left:auto;color:var(--pv-muted);letter-spacing:.3px}.pv-pause{border:0;background:none;text-decoration:underline;text-underline-offset:4px;font-size:10px!important;letter-spacing:0}.pv-layout{display:grid;grid-template-columns:.85fr 1.15fr;align-items:center;gap:28px;min-height:570px}.pv-copy{padding:20px 0 30px;position:relative;z-index:2}.pv-chapter{display:flex;align-items:center;gap:10px;font-size:11px;letter-spacing:2px;margin-bottom:26px;color:var(--pv-muted)}.pv-chapter i{display:inline-block;width:40px;height:1px;background:#a4b69a}.pv-copy h2{font-family:var(--font-display,Georgia,'Times New Roman',serif);font-weight:400;font-size:clamp(35px,3.55vw,53px);line-height:1.09;letter-spacing:-1.9px;animation:pv-reveal .65s ease both}.pv-copy h2 span{display:block}.pv-copy h2 .pv-accent{color:#71856c;font-style:italic;margin-top:5px}.pv-caption{color:#637469;font-size:14px;line-height:1.8;max-width:355px;margin-top:23px!important}.pv-comparison{display:inline-flex;gap:3px;padding:4px;background:#e4e9dd;border-radius:40px;margin-top:28px}.pv-comparison button{border:0;background:transparent;border-radius:30px;padding:11px 16px;font-size:11px;font-weight:600;transition:background .3s,color .3s}.pv-comparison button[aria-pressed=true]{background:var(--pv-pine);color:#fff}.pv-comparison button span{margin-left:8px}.pv-takeaway{border-left:1px solid #9bac8f;margin-top:30px;padding-left:17px;min-height:102px;max-width:360px}.pv-takeaway>span{font-size:9px;letter-spacing:1.7px;color:var(--pv-muted)}.pv-takeaway p{font-size:13px;line-height:1.65;margin-top:8px}.pv-takeaway b{display:flex;align-items:center;gap:10px;font-size:11px;margin-top:10px}.pv-takeaway svg{width:20px;height:20px}.pv-art{height:535px;position:relative;min-width:0}.pv-orbit{position:absolute;inset:34px 15px 24px;border:1px solid #234e4010;border-radius:50%;background:radial-gradient(ellipse,#dce4d9 0%,#eaf0e360 50%,transparent 71%)}.pv-connections{position:absolute;inset:0;width:100%!important;height:100%!important;stroke:#73836c;stroke-width:1.4;stroke-dasharray:5 7;opacity:.5}.pv-connections path:first-child{animation:pv-dash 35s linear infinite}.pv-connections path+path{stroke-dasharray:none}.pv-scribble{position:absolute;top:29px;left:30%;font-family:Georgia,serif;font-style:italic;font-size:15px;transform:rotate(-7deg);color:#7c8a6e}.pv-stage{position:absolute;inset:115px 49px 93px;z-index:2;filter:drop-shadow(0 22px 23px #25493612)}.pv-scene{height:100%;animation:pv-reveal .65s cubic-bezier(.22,.7,.3,1) both}.pv-browser{height:100%;border:1px solid #234e4025;border-radius:13px;overflow:hidden;background:#fffef8;transform:rotate(-2deg);display:flex;flex-direction:column}.pv-browser-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;background:#edf0e6;border-bottom:1px solid #234e4015;padding:9px 13px;font-size:8px;color:#86917d}.pv-browser-bar svg{width:12px;height:12px}.pv-browser-bar>span:first-child{letter-spacing:3px}.pv-mini-nav{display:flex;justify-content:space-between;align-items:center;padding:16px 19px;font-size:8px}.pv-mini-nav b{font-family:Georgia,serif;font-size:15px}.pv-mini-nav b span{font-size:7px;font-family:Arial,sans-serif;letter-spacing:2px}.pv-website-hero{display:flex;gap:12px;padding:10px 23px 20px;background:#eef1e7;align-items:center;flex:1}.pv-website-hero small{font-size:6px;letter-spacing:1.3px}.pv-website-hero h4{font-family:Georgia,serif;font-weight:400;font-size:28px;line-height:1.08;margin:10px 0 15px}.pv-mock-button{background:var(--pv-pine);color:#fff;padding:8px 13px;border-radius:20px;font-size:8px;display:inline-block}.pv-tooth{margin-left:auto;width:112px;height:132px;display:grid;place-items:center;border-radius:50% 50% 13px 13px;background:#bdcbb1;transform:rotate(7deg)}.pv-tooth svg{width:79px;height:91px;color:#ffffef;filter:drop-shadow(3px 5px 0 #244c3b20)}.pv-visitor-line{display:flex;align-items:center;gap:7px;font-size:9px;padding:12px 18px}.pv-visitor-line .pv-status-dot{background:#b68c5d}.pv-path{display:flex;align-items:center;gap:10px;font-size:8px;padding:0 18px 13px}.pv-path i{flex:1;border-top:2px dashed #beaf90}.pv-path i.connected{border-top:2px solid var(--pv-pine)}.pv-path svg{width:17px;height:17px}.pv-orbit-button{position:absolute;display:flex;flex-direction:column;align-items:center;gap:8px;z-index:3;background:none;border:0;font-size:10px!important;font-weight:600!important;letter-spacing:.6px}.pv-icon-bubble{width:65px;height:65px;border-radius:45% 55% 52% 48%;display:grid;place-items:center;background:#e6ebde;border:1px solid #9dad8d70;box-shadow:4px 5px 0 #a4b69a35;transition:transform .4s,background .4s,color .4s;animation:pv-float 5s ease-in-out infinite}.pv-icon-bubble svg{width:31px;height:31px}.pv-orbit-button:hover .pv-icon-bubble{transform:translateY(-5px) rotate(-8deg)}.pv-orbit-button.is-active .pv-icon-bubble{background:var(--pv-pine);color:#f5f5e9;box-shadow:0 0 0 7px #234e400c,5px 6px 0 #a4b69a60}.pv-orbit-0{top:38px;left:7%}.pv-orbit-1{right:4%;top:49px}.pv-orbit-2{bottom:24px;right:8%}.pv-orbit-3{bottom:25px;left:5%}.pv-orbit-1 .pv-icon-bubble{animation-delay:-1s}.pv-orbit-2 .pv-icon-bubble{animation-delay:-2s}.pv-orbit-3 .pv-icon-bubble{animation-delay:-3s}.pv-art-footer{position:absolute;bottom:20px;left:27%;right:20%;text-align:center;line-height:1.6;font-size:9px;color:#6e7f70}.pv-art-footer .pv-status-dot{margin-right:6px}.pv-search-view{transform:rotate(1deg);padding:19px 21px 12px}.pv-searchbox{display:flex;gap:10px;align-items:center;border:1px solid #bcc9b2;border-radius:30px;padding:10px 12px;font-size:11px;box-shadow:0 3px 7px #223d3006}.pv-searchbox svg{width:17px;height:17px}.pv-cursor{height:13px;width:1px;background:#607664;animation:pv-blink 1.4s infinite}.pv-search-tabs{display:flex;gap:22px;margin:13px 5px 8px;font-size:8px;color:var(--pv-pine)}.pv-search-tabs span{color:#84917e}.pv-results{flex:1;display:flex;flex-direction:column;justify-content:space-around;gap:4px}.pv-result{display:flex;gap:12px;align-items:center;padding:8px 10px;border-radius:9px}.pv-result>div{flex:1}.pv-result-number{font-size:10px;color:#96a18c}.pv-result small{font-size:6px;letter-spacing:1px;color:#7b8972}.pv-result h4{font-size:13px;font-weight:500;margin:4px 0;color:var(--pv-pine)}.pv-result p{font-size:8px;color:#7b8774}.pv-result>svg{width:20px;height:20px}.pv-own{background:#f0eddf;border:1px dashed #b5a97c}.pv-improved .pv-own{background:#e9efe2;border:1px solid #a5b493}.pv-skeleton{width:73%;height:3px;background:#d5ddcd;margin-top:6px;border-radius:10px}.pv-scene-foot{font-size:6px;color:#8d957e;margin-top:9px!important;text-align:center}.pv-map-view{position:relative;height:100%;border:1px solid #b8c5ad;border-radius:15px;overflow:hidden;background:#e7ebdf;transform:rotate(-2deg)}.pv-map-grid{position:absolute;inset:-60px;background:repeating-linear-gradient(0deg,transparent 0 53px,#fffef6 54px 66px,transparent 67px 98px),repeating-linear-gradient(90deg,transparent 0 79px,#fffef6 80px 93px,transparent 94px 139px);transform:rotate(-24deg)}.pv-park{position:absolute;background:#bdcfa9;border-radius:40%;width:85px;height:68px;transform:rotate(-24deg)}.pv-park-one{left:35px;top:27px}.pv-park-two{right:8px;top:146px}.pv-river{width:65px;height:420px;border:16px solid #b4cecb;border-top:0;border-bottom:0;transform:rotate(32deg);position:absolute;left:61%;top:-85px;border-radius:50%}.pv-street{position:absolute;left:24%;top:95px;font-size:7px;letter-spacing:2px;transform:rotate(-24deg);color:#8a967f}.pv-street.second{top:183px;left:10%;transform:rotate(66deg)}.pv-pin{position:absolute;display:grid;place-items:center;color:#799663}.pv-pin svg{width:40px;height:40px;fill:#d3dfc3;filter:drop-shadow(2px 3px 1px #234e4020)}.pv-pin-one{left:24%;top:32px}.pv-pin-two{right:13%;top:95px}.pv-pin-you{left:44%;top:139px;opacity:.5}.pv-pin-you span{font-size:7px;margin-top:6px;background:#fffef5;padding:4px 6px;border-radius:4px;letter-spacing:1px}.pv-pin-you.found{opacity:1;animation:pv-float 4s ease-in-out infinite}.pv-pin-you.found svg{fill:var(--pv-pine);color:#fff;width:49px;height:49px;filter:drop-shadow(0 0 8px #234e4050)}.pv-map-profile{position:absolute;bottom:13px;left:13px;right:13px;display:flex;align-items:center;gap:11px;background:#fffef6;padding:14px 12px;border-radius:10px;box-shadow:0 5px 20px #25493615}.pv-profile-icon{background:#e4e9dc;border-radius:8px;padding:9px}.pv-profile-icon svg{width:23px;height:23px}.pv-map-profile small{font-size:6px;letter-spacing:1px}.pv-map-profile h4{font-size:11px;font-weight:500;margin:5px 0}.pv-map-profile p{font-size:7px;color:#7b846f}.pv-profile-status{margin-left:auto;font-size:22px;font-family:Georgia,serif}.pv-traffic-view{background:#fffef8;height:100%;padding:24px;border:1px solid #b7c4a9;border-radius:14px;transform:rotate(1.5deg)}.pv-traffic-heading{display:flex;align-items:center;gap:13px}.pv-traffic-heading>svg{width:35px;height:35px}.pv-traffic-heading small{font-size:7px;letter-spacing:2px;color:#748569}.pv-traffic-heading h4{font-size:14px;font-family:Georgia,serif;font-weight:400;margin-top:4px}.pv-audience{display:grid;grid-template-columns:repeat(9,1fr);gap:8px;margin:25px 14px 16px}.pv-audience span{color:#d8ddd0;animation:pv-person .6s both;animation-delay:calc(var(--i)*35ms)}.pv-audience svg{fill:currentColor;width:100%;height:27px}.pv-audience .relevant{color:var(--pv-pine)}.pv-funnel{text-align:center;font-size:9px;color:#859075}.pv-funnel-path{height:38px;background:linear-gradient(#dde7d340,#b6c7a590);clip-path:polygon(0 0,100% 0,57% 100%,43% 100%);margin:8px 30px}.pv-enquiry{display:inline-flex;align-items:center;gap:8px;color:var(--pv-pine);border:1px solid #cad5bf;padding:9px 15px;border-radius:30px;font-size:10px}.pv-enquiry svg{width:16px;height:16px}.pv-legend{display:flex;align-items:center;gap:5px;font-size:6px;margin-top:15px;color:#8a957e}.pv-legend i{width:5px;height:5px;background:var(--pv-pine);border-radius:50%}.pv-legend>span{margin-left:auto}.pv-footer{display:flex;gap:30px;align-items:center;border-top:1px solid #234e401a;padding-top:22px}.pv-footer nav{display:grid;grid-template-columns:repeat(4,1fr);flex:1;gap:16px}.pv-footer nav button{position:relative;background:none;border:0;text-align:left;font-size:10px;padding:0 0 14px;color:#8c9685;white-space:nowrap}.pv-footer nav button>span{font-size:9px;margin-right:9px}.pv-footer nav button i{position:absolute;bottom:0;left:0;right:0;height:2px;background:#d9dfd0;overflow:hidden}.pv-footer nav button i:after{content:'';position:absolute;inset:0;background:var(--pv-pine);transform:scaleX(0);transform-origin:left;transition:transform .6s}.pv-footer nav button[aria-current=step]{color:var(--pv-pine)}.pv-footer nav button[aria-current=step] i:after{transform:scaleX(1)}.pv-footer>p{font-size:9px;color:#88957b;white-space:nowrap}.pv-disclaimer{font-size:8px;color:#8c9684;margin-top:18px!important}.pv-markers{display:none}.pv-tap-label{display:none}.pv-paused *,.pv-paused *:before,.pv-paused *:after{animation-play-state:paused!important}.pv-paused *{transition:none!important}
@keyframes pv-reveal{from{opacity:0;translate:0 12px}to{opacity:1;translate:0 0}}@keyframes pv-float{0%,100%{translate:0 0;rotate:-2deg}50%{translate:0 -7px;rotate:2deg}}@keyframes pv-dash{to{stroke-dashoffset:-200}}@keyframes pv-blink{50%{opacity:0}}@keyframes pv-person{from{opacity:.2;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
@media(min-width:761px) and (max-height:760px){.pv-inner{padding-top:20px;padding-bottom:12px}.pv-layout{min-height:470px}.pv-art{height:470px}.pv-stage{inset:87px 35px 65px}.pv-scribble{top:11px}.pv-orbit-0{top:9px}.pv-orbit-1{top:12px}.pv-orbit-2,.pv-orbit-3{bottom:0}.pv-icon-bubble{width:53px;height:53px}.pv-art-footer{bottom:0}.pv-copy h2{font-size:40px}.pv-copy{padding:16px 0}.pv-chapter{margin-bottom:16px}.pv-takeaway{margin-top:20px}.pv-caption{margin-top:16px!important}.pv-comparison{margin-top:19px}}
@media(max-width:1050px){.pv-inner{padding-left:25px;padding-right:25px}.pv-layout{gap:10px;grid-template-columns:.85fr 1.15fr}.pv-stage{left:25px;right:25px}.pv-copy h2{font-size:38px}.pv-tooth{width:85px}.pv-website-hero{padding-left:16px;padding-right:16px}.pv-website-hero h4{font-size:25px}.pv-footer nav button{font-size:9px}}
@media(max-width:760px){.pv-story{height:auto}.pv-sticky{position:relative;min-height:0}.pv-inner{padding:30px 20px 22px}.pv-header{flex-wrap:wrap;gap:12px;font-size:9px}.pv-example{display:none}.pv-pause{margin-left:auto}.pv-layout{grid-template-columns:1fr;gap:0;min-height:0}.pv-copy{padding:32px 0 5px}.pv-chapter{margin-bottom:17px}.pv-copy h2{font-size:clamp(35px,7vw,48px);letter-spacing:-1.2px}.pv-caption{font-size:13px;max-width:440px;margin-top:18px!important}.pv-comparison{margin-top:21px}.pv-takeaway{margin-top:22px;min-height:91px;max-width:470px}.pv-art{height:480px;max-width:570px;width:100%;margin:0 auto}.pv-stage{inset:95px 27px 75px}.pv-icon-bubble{width:53px;height:53px}.pv-icon-bubble svg{width:27px;height:27px}.pv-orbit-0{top:16px;left:5%}.pv-orbit-1{top:21px;right:5%}.pv-orbit-2{bottom:8px}.pv-orbit-3{bottom:8px}.pv-art-footer{bottom:8px;left:28%;right:27%;font-size:8px}.pv-scribble{top:36px;left:28%;font-size:12px;max-width:140px}.pv-footer{margin-top:22px;gap:10px;display:block}.pv-footer nav{gap:9px;grid-template-columns:repeat(2,1fr);row-gap:17px}.pv-footer nav button{font-size:10px}.pv-footer>p{margin-top:15px}.pv-scroll-label{display:none}.pv-tap-label{display:inline}.pv-disclaimer{line-height:1.6;font-size:8px}.pv-website-hero h4{font-size:25px}.pv-tooth{width:88px;height:117px}.pv-map-profile{gap:7px;padding:10px}.pv-profile-icon{padding:5px}.pv-map-profile h4{font-size:10px}.pv-map-profile p{font-size:6px}.pv-search-view{padding:15px}.pv-result{gap:8px}.pv-result h4{font-size:12px}.pv-traffic-view{padding:19px}.pv-traffic-heading h4{font-size:13px}}
@media(max-width:380px){.pv-inner{padding-left:15px;padding-right:15px}.pv-stage{left:10px;right:10px}.pv-art{height:470px}.pv-tooth{width:70px}.pv-tooth svg{width:62px}.pv-comparison button{padding:11px 13px}.pv-result h4{font-size:11px}}
@media(prefers-reduced-motion:reduce){.pv-story{height:auto}.pv-sticky{position:relative;min-height:0}.pv-story *,.pv-story *:before,.pv-story *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.pv-scroll-label{display:none}.pv-tap-label{display:inline}}
/* Pausing ambience must not hide newly selected content. */
.pv-paused .pv-scene,.pv-paused .pv-copy h2,.pv-paused .pv-audience span{animation:none!important}
@media(min-width:761px) and (max-height:610px){.pv-story{height:auto}.pv-sticky{position:relative}.pv-scroll-label{display:none}.pv-tap-label{display:inline}}

`
