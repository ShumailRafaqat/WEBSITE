import { useEffect, useRef, useState } from 'react'
import { FileText, Link2, Zap, Check, Coffee, Lightbulb, MapPin, MousePointer2, Navigation, Pause, Play, Search, X } from 'lucide-react'
import './RealityCheck.css'

const QUERY = 'best coffee shop near me'
const DURATION = 35000
const beats = [
  { at: 0, lead: 'Someone nearby wants coffee.', accent: 'Your next customer. Maybe.', thought: 'Fresh coffee. A quiet corner?' },
  { at: 5000, lead: 'Google shows three cafés.', accent: 'But yours isn’t on the list.', thought: 'We’re open. Just 0.2 mi away…' },
  { at: 9000, lead: 'One tap. A different café.', accent: 'They never discovered yours.', thought: 'What does their online presence do better?' },
  { at: 12500, lead: 'Stronger SEO can make the difference.', accent: 'Let’s find the gaps in yours.', thought: 'Relevance. Local reach. Authority. Access.' },
  { at: 20500, lead: 'Find the gap. Make the fix.', accent: 'Build stronger local SEO.', thought: 'Make your café easier to understand—and find.' },
  { at: 28500, lead: 'A clearer presence. A better chance.', accent: 'Let’s build your online presence.', thought: 'Local SEO is a plan—not a one-time trick.' },
]
const seoChecks = [
  { Icon: FileText, label: 'On-page SEO', gap: 'Unclear relevance', action: 'Match search intent' },
  { Icon: MapPin, label: 'Local SEO', gap: 'Weak local signals', action: 'Build local relevance' },
  { Icon: Link2, label: 'Off-page SEO', gap: 'Few trusted links', action: 'Earn relevant links' },
  { Icon: Zap, label: 'Technical SEO', gap: 'Crawl barriers', action: 'Clear crawl paths' },
]

function SeoVisual({ kind, improved }: { kind: number; improved: boolean }) {
  return <div className={`rc2-seo-visual ${improved ? 'is-improved' : 'has-gap'}`}>
    <svg viewBox="0 0 240 110" role="img" aria-label={seoChecks[kind].label + ': ' + (improved ? seoChecks[kind].action : seoChecks[kind].gap)}>
      {kind === 0 && <>
        <rect x="54" y="7" width="132" height="96" rx="8" fill="#fffdf6" stroke="#cbd5bd" />
        <path d="M54 24h132" stroke="#dce3d2" /><g fill="#c1cdb5"><circle cx="64" cy="16" r="2"/><circle cx="71" cy="16" r="2"/><circle cx="78" cy="16" r="2"/></g>
        <text x="66" y="42" fontSize="9" fill="#527447">{improved ? 'Coffee Shop · Austin, TX' : 'Welcome to our website'}</text>
        <g stroke="#d5deca" strokeWidth="4" strokeLinecap="round"><path d="M67 54h82m-82 10h103m-103 10h73m-73 10h94"/></g>
        <rect className="rc2-match-box" x="61" y="29" width="118" height="21" rx="4" fill="none" stroke={improved ? '#82a25e' : '#be8667'} strokeWidth="2" strokeDasharray={improved ? undefined : '4 4'}/>
        <circle className="rc2-search-orbit" cx="190" cy="70" r="12" fill="#f3e6bd" stroke="#bda46b"/><path d="m199 79 8 8" stroke="#bda46b" strokeWidth="3"/>
      </>}
      {kind === 1 && <>
        <rect x="24" y="6" width="192" height="98" rx="13" fill="#e6ebdc"/><g stroke="#fffdf6" strokeWidth="9"><path d="M74 8v95m66-95v95M25 39h189M25 78h189"/></g>
        <g fill="#d2dec4"><rect x="37" y="13" width="24" height="16" rx="3"/><rect x="154" y="49" width="45" height="19" rx="3"/></g>
        <circle className="rc2-local-ring" cx="116" cy="57" r="31" fill="none" stroke={improved ? '#7d9c61' : '#c5b390'} strokeWidth="2" strokeDasharray="4 5"/>
        <path d="M116 32c-18 0-22 23 0 42 22-19 18-42 0-42" fill={improved ? '#6c8b54' : '#b4bba9'}/><circle cx="116" cy="46" r="5" fill="#fff9e7"/>
        <rect x="81" y="83" width="76" height="16" rx="8" fill="#fffdf6"/><text x="119" y="94" textAnchor="middle" fontSize="8" fill="#728164">Austin, Texas</text>
        {improved && <g className="rc2-local-dots" fill="#7c9c60"><circle cx="55" cy="55" r="4"/><circle cx="180" cy="30" r="4"/><circle cx="188" cy="86" r="4"/></g>}
      </>}
      {kind === 2 && <>
        <g className="rc2-link-lines" stroke={improved ? '#86a269' : '#d1c5b1'} strokeWidth="2" strokeDasharray={improved ? '5 4' : '2 9'}><path d="m57 26 63 29m64-29-64 29M51 86l69-31m67 31-67-31"/></g>
        {[[36,12],[168,12],[30,74],[170,74]].map(([x,y],i)=><g key={i} className="rc2-link-node" style={{animationDelay:`${i * 180}ms`}}><rect x={x} y={y} width="36" height="24" rx="5" fill="#faf9ef" stroke="#cad6bd"/><path d={`M${x+7} ${y+9}h22m-22 6h14`} stroke="#a8b999" strokeWidth="2"/></g>)}
        <rect x="92" y="37" width="56" height="37" rx="9" fill={improved ? '#718d59' : '#acb69b'}/><text x="120" y="59" textAnchor="middle" fontSize="10" fill="#fffdf1">CAFÉ</text>
      </>}
      {kind === 3 && <>
        <path d="M40 57h161" stroke="#d7dfcc" strokeWidth="3"/>
        {[35,88,141,194].map((x,i)=><g key={x}><rect x={x-15} y="35" width="30" height="41" rx="5" fill="#fafaf1" stroke="#becdac"/><path d={`M${x-8} 46h16m-16 7h12m-12 7h16`} stroke="#c5d3b5" strokeWidth="2"/></g>)}
        {!improved && <g stroke="#c28867" strokeWidth="3"><path d="m107 47 15 20m-15 0 15-20"/></g>}
        <circle className="rc2-crawl-dot" cx="40" cy="88" r="5" fill={improved ? '#789b59' : '#c28b65'}/>
        <text x="120" y="20" textAnchor="middle" fontSize="8" fill="#80926e">{improved ? 'Pages connected' : 'Path interrupted'}</text>
      </>}
    </svg>
  </div>
}

function GoogleWord({ small = false }: { small?: boolean }) {
  return <span className={`rc2-google ${small ? 'rc2-google--small' : ''}`} aria-label="Google">{'Google'.split('').map((letter, i) => <span key={i} style={{ color: ['#4285f4', '#ea4335', '#fbbc05', '#4285f4', '#34a853', '#ea4335'][i] }}>{letter}</span>)}</span>
}
function Focus({ round = false }: { round?: boolean }) {
  return <svg className={`rc2-focus ${round ? 'rc2-focus--round' : ''}`} viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">{round ? <ellipse cx="150" cy="50" rx="144" ry="44" /> : <rect x="4" y="4" width="292" height="92" rx="10" />}</svg>
}

/* Inline artwork stays sharp and self-contained: no image downloads. */
function CafeScene({ leaving }: { leaving: boolean }) {
  return <div className={`rc2-cafe ${leaving ? 'rc2-cafe--leaving' : ''}`}>
    <svg viewBox="0 0 330 207" role="img" aria-label="Your Corner Café with a warm window, an empty outdoor chair, and freshly brewed coffee">
      <ellipse cx="168" cy="192" rx="144" ry="9" fill="#c4c4ad" opacity=".3" />
      <circle cx="278" cy="38" r="24" fill="#edcf8d" opacity=".55" />
      <path d="M25 181V144m0 16-9-14m9 7 10-14" stroke="#788969" strokeWidth="3" fill="none" />
      <ellipse cx="17" cy="141" rx="8" ry="16" fill="#81916d" transform="rotate(-25 17 141)" /><ellipse cx="34" cy="137" rx="8" ry="16" fill="#9cab81" transform="rotate(28 34 137)" />
      <path d="M14 175h25l-4 17H18Z" fill="#bd8e6f" />
      <path d="M58 56h200v132H58Z" fill="#dfcaae" /><path d="M258 56l12 7v125h-12Z" fill="#b9a689" />
      <rect x="65" y="26" width="186" height="36" rx="5" fill="#34564a" /><text x="158" y="49" textAnchor="middle" fill="#faf2d9" fontFamily="Georgia,serif" fontSize="17" letterSpacing="2">CORNER CAFÉ</text>
      <path d="M61 65h193l13 25H48Z" fill="#f8edcf" />
      <g fill="#527465"><path d="m61 65-13 25h27l9-25Z" /><path d="m108 65-5 25h28l1-25Z" /><path d="m157 65 2 25h28l-6-25Z" /><path d="m207 65 10 25h27l-13-25Z" /></g>
      <path d="M48 90h219v9q-14 9-27 0-14 9-27 0-14 9-27 0-14 9-27 0-14 9-27 0-14 9-27 0-14 9-27 0-14 9-30 0Z" fill="#668777" />
      <rect x="72" y="108" width="106" height="65" rx="2" fill="#5c7569" /><rect x="77" y="112" width="96" height="57" fill="#eccf91" />
      <path d="M80 113h35l-35 42m54-42h18l-39 56H94Z" fill="#fff9e9" opacity=".3" />
      <path d="M125 111v59" stroke="#5c7569" strokeWidth="4" />
      <path d="M98 150h14v9q-7 6-14 0Zm14 1h5v6h-5" fill="#fff8e4" />
      <g className="rc2-steam" stroke="#fff8e4" strokeWidth="1.6" fill="none" strokeLinecap="round"><path d="M101 143q-4-4 0-8m7 8q-4-4 0-8" /></g>
      <rect x="191" y="105" width="49" height="83" fill="#3c5b4d" /><rect x="196" y="110" width="39" height="56" fill="#96ac91" /><path d="m198 113 22 0-22 27" fill="#f7efd5" opacity=".3" /><circle cx="232" cy="150" r="2" fill="#ead7ab" />
      <g className="rc2-open-sign"><rect x="198" y="128" width="35" height="17" rx="2" fill="#fff3d4" /><text x="215.5" y="139" textAnchor="middle" fill="#44634c" fontSize="8" fontFamily="sans-serif" fontWeight="700">OPEN</text></g>
      <path d="M57 187h213" stroke="#978d75" strokeWidth="4" />
      <g stroke="#6e7762" strokeWidth="2.5" fill="none"><path d="M278 175v17m-13-17h26m-12-14v14m-3 0-9 17m12-17 9 17" /><path d="M295 170v13h16v-18m-16 17-2 11m16-11 2 11" /></g>
      <ellipse cx="278" cy="160" rx="16" ry="3" fill="#a48f6c" />
      <g className="rc2-walker"><circle cx="43" cy="137" r="6" fill="#c99e7d" /><path d="M36 145q7-6 14 0l-2 22H37Z" fill="#bd765b" /><path d="m40 166-5 20m10-20 7 18" stroke="#4e635b" strokeWidth="4" strokeLinecap="round" /></g>
    </svg>
    <span className="rc2-cafe-label"><MapPin size={11} /> Your café · 0.2 mi away</span>
  </div>
}

export default function RealityCheck({ onComplete, homeUrl = '/' }: { onComplete?: () => void; homeUrl?: string }) {
  const completed = useRef(false)
  const destination = useRef({ onComplete, homeUrl })
  destination.current = { onComplete, homeUrl }
  const root = useRef<HTMLElement>(null)
  const [time, setTime] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)
  const scene = beats.reduce((n, beat, i) => time >= beat.at ? i : n, 0)
  const typed = QUERY.slice(0, Math.max(0, Math.floor((time - 650) / 115)))
  const detail = time - beats[scene].at > 3500
  const auditIndex = Math.min(3, Math.max(0, Math.floor((time - beats[scene].at) / 2000)))
  const activeCheck = seoChecks[auditIndex]

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => { setReduced(preference.matches); if (preference.matches) { setTime(28500) } }
    sync(); preference.addEventListener('change', sync)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 })
    if (root.current) observer.observe(root.current)
    return () => { observer.disconnect(); preference.removeEventListener('change', sync) }
  }, [])
  useEffect(() => {
    if (!playing || !visible || time >= DURATION) return
    let previous = performance.now()
    const timer = window.setInterval(() => {
      const now = performance.now(); const delta = now - previous; previous = now
      if (!document.hidden) setTime(t => Math.min(DURATION, t + Math.min(delta, 200)))
    }, 50)
    return () => window.clearInterval(timer)
  }, [playing, visible, time >= DURATION])
  useEffect(() => {
    if (time < DURATION || completed.current) return
    completed.current = true
    if (destination.current.onComplete) destination.current.onComplete()
    else window.location.assign(destination.current.homeUrl)
  }, [time])

  return <section ref={root} className={`rc2 rc2--scene-${scene} ${!playing ? 'rc2--paused' : ''} ${reduced ? 'rc2--reduced' : ''}`} aria-label="Reality check: an animated café search story">
    <div className="rc2-shell">
      <header className="rc2-top"><span className="rc2-kicker"><i /> THE INVISIBLE CAFÉ</span><div className="rc2-header-actions"><button className="rc2-pause-control" type="button" aria-label={playing ? 'Pause story' : 'Resume story'} onClick={() => setPlaying(p => !p)}>{playing ? <Pause size={13} /> : <Play size={13} />}</button>{onComplete && <button type="button" className="rc2-close" onClick={onComplete} aria-label="Close reality check"><X size={17} /></button>}</div></header>
      <div className="rc2-stage">
        <div className="rc2-grain" aria-hidden="true" />
        <div className="rc2-scene-meta"><span>ILLUSTRATIVE SEO STORY</span><span>0{scene + 1} / 06</span></div>
        <div key={scene} className="rc2-panel rc2-enter">
          {scene === 0 && <div className="rc2-search-scene"><GoogleWord /><p className="rc2-local"><MapPin size={11} /> Austin, Texas · Your neighborhood</p><div className="rc2-search-field"><Search size={17} /><span>{typed}<i className="rc2-caret" /></span></div>{typed.length > 6 && <div className="rc2-suggestion"><Search size={13} /><span>best coffee shop <b>near me</b></span>{detail && <Focus round />}</div>}{detail && <MousePointer2 className="rc2-search-pointer" size={24} fill="currentColor" />}</div>}
          {(scene === 1 || scene === 2) && <div className="rc2-results-scene"><div className="rc2-google-bar"><GoogleWord small /><span>{QUERY}</span></div><div className="rc2-results-head">Places <small>Open now · Nearby</small></div>{['Roast & Ritual', 'Juniper Coffee', 'The Daily Grind'].map((name, i) => <div key={name} className={`rc2-result ${scene === 2 && i === 0 ? 'is-chosen' : ''} ${scene === 2 && i > 0 ? 'is-dimmed' : ''}`}><div className={`rc2-thumb rc2-thumb-${i}`}><Coffee size={18} /></div><div><h3>{name}</h3><p><b>{i === 1 ? '4.7' : '4.8'} ★★★★★</b> · {['1.1', '1.5', '1.9'][i]} mi</p></div>{scene === 2 && i === 0 && <><Focus /><MousePointer2 className="rc2-tap" size={24} fill="currentColor" /></>}</div>)}<div className={`rc2-result-note ${scene === 2 ? 'is-blue' : ''}`}>{scene === 1 ? <><X size={13} /> Your café isn’t in these results</> : <><Navigation size={13} /> On their way to Roast & Ritual</>}</div></div>}
          {(scene === 3 || scene === 4) && <div className="rc2-seo-story">
            <span className="rc2-tag">{scene === 3 ? 'FIND THE SEO GAPS' : 'BUILD A STRONGER PRESENCE'}</span>
            <div key={`${scene}-${auditIndex}`} className="rc2-seo-shot"><h3>{activeCheck.label}</h3><SeoVisual kind={auditIndex} improved={scene === 4} /><strong>{scene === 3 ? activeCheck.gap : activeCheck.action}</strong></div>
          </div>}
          {scene === 5 && <div className="rc2-seo-finale"><span className="rc2-tag">ONE CONNECTED SEO STRATEGY</span><div className="rc2-seo-petals">{seoChecks.map(({ Icon, label },i) => <div key={label} style={{ animationDelay: `${i * 200}ms` }}><Icon size={21} /><span>{label}</span></div>)}<i><Coffee size={23} /></i></div><h3>Great coffee.<br /><em>Ready to be discovered.</em></h3></div>}

        </div>
        <div key={`bubble-${scene}`} className="rc2-thought"><span className="rc2-idea"><Lightbulb size={16} /></span><p>{beats[scene].thought}</p><i /><i /></div>
        <CafeScene leaving={scene === 2} />
      </div>
      <div className="rc2-caption" aria-live="polite" aria-atomic="true"><h2 key={scene}><span>{beats[scene].lead}</span><strong>{beats[scene].accent}</strong></h2></div>

    </div>
  </section>
}
