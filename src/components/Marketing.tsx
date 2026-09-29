'use client'

// Single-file component: all CSS and illustrations are embedded below.
// Dependencies: npm install framer-motion lucide-react
// Replace your existing Marketing.tsx and keep <Marketing />.
// The primary CTA expects your page to contain an element with id="cta".

import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Pause,
  Play,
  Sparkles,
  Globe,
  CheckCircle2,
  ArrowRight,
  AtSign,
  BarChart3,
  Check,
  FileText,
  Lightbulb,
  Mail,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Radio,
  RefreshCw,
  Search,
  ShoppingBag,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
type BrandIconProps = { size?: number; strokeWidth?: number }
function Instagram({ size = 24, strokeWidth = 1.7 }: BrandIconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>
}
function Facebook({ size = 24 }: BrandIconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5c-.8-.2-1.9-.3-3-.3-3 0-5 1.8-5 5.3V9H7v4h3v9Z"/></svg>
}
function Linkedin({ size = 24 }: BrandIconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="5" r="2"/><path d="M3 9h4v12H3zM10 9h4v1.6c.8-1.2 1.9-1.9 3.5-1.9 2.9 0 3.5 1.9 3.5 4.8V21h-4v-6.8c0-1.4-.2-2.4-1.5-2.4s-1.5 1-1.5 2.4V21h-4Z"/></svg>
}

const stages = [
  {
    name: 'Audience',
    funnel: 'Awareness',
    description: 'Identify the people most likely to need your product or service.',
    icon: Users,
  },
  {
    name: 'Reach',
    funnel: 'Consideration',
    description: 'Put your brand in front of the right audience, in the right places.',
    icon: Radio,
  },
  {
    name: 'Engagement',
    funnel: 'Engagement',
    description: 'Create useful content and campaigns that encourage interaction.',
    icon: MessageCircle,
  },
  {
    name: 'Leads',
    funnel: 'Lead',
    description: 'Turn attention into qualified enquiries with a clear next step.',
    icon: AtSign,
  },
  {
    name: 'Conversions',
    funnel: 'Conversion',
    description: 'Help qualified prospects take action and become customers.',
    icon: ShoppingBag,
  },
  {
    name: 'Growth',
    funnel: 'Retention',
    description: 'Use performance data to improve campaigns and nurture relationships.',
    icon: TrendingUp,
  },
]
const channels = [
  {
    name: 'Google Ads',
    icon: Search,
    purpose: 'Capture high-intent searches.',
    strategy: 'Search campaigns + landing page optimization + conversion tracking.',
  },
  {
    name: 'Meta Ads',
    icon: Megaphone,
    purpose: 'Reach and engage relevant audiences.',
    strategy: 'Audience targeting + creative testing + thoughtful retargeting.',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    purpose: 'Build discovery through visual storytelling.',
    strategy: 'Platform-fit creative + useful content + clear paths to action.',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    purpose: 'Stay connected with local and interest-based audiences.',
    strategy: 'Audience research + community content + campaign refinement.',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    purpose: 'Connect with professional and business audiences.',
    strategy: 'Audience definition + expert content + focused campaign testing.',
  },
  {
    name: 'Content',
    icon: FileText,
    purpose: 'Answer useful questions and build brand confidence.',
    strategy: 'Editorial planning + search intent + consistent publishing.',
  },
  {
    name: 'Email',
    icon: Mail,
    purpose: 'Nurture interest beyond the first visit.',
    strategy: 'Relevant segments + helpful messages + considered follow-up.',
  },
  {
    name: 'Retargeting',
    icon: MousePointerClick,
    purpose: 'Reconnect with people who have already shown interest.',
    strategy: 'Audience signals + tailored creative + frequency-aware delivery.',
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    purpose: 'Understand which activity supports business goals.',
    strategy: 'Measurement planning + conversion events + regular interpretation.',
  },
]
const strategySteps = [
  { title: 'Strategy', note: 'Understand the business, audience, and objectives.', stage: 0 },
  { title: 'Targeting', note: 'Reach the people who are most relevant.', stage: 1 },
  { title: 'Creative', note: 'Develop campaigns and content worth engaging with.', stage: 2 },
  { title: 'Optimization', note: 'Monitor signals and improve what is underperforming.', stage: 3 },
  { title: 'Conversion', note: 'Make it clear and easy for prospects to take action.', stage: 4 },
  { title: 'Reporting', note: 'Turn performance data into the next useful decision.', stage: 5 },
]
const services = [
  {
    title: 'Digital Strategy',
    icon: Lightbulb,
    what: 'Plan a connected approach around your business goals and audience.',
    why: 'A clear direction helps every channel work toward the same outcome.',
    approach: 'Business goals → Audience insight → Channel plan → Measurement',
  },
  {
    title: 'Paid Advertising',
    icon: Target,
    what: 'Plan, launch, and refine campaigns across relevant platforms.',
    why: 'Reach relevant audiences and create measurable acquisition opportunities.',
    approach: 'Audience research → Creative testing → Campaign refinement → Tracking',
  },
  {
    title: 'Social Media Marketing',
    icon: Instagram,
    what: 'Build a consistent social presence with platform-appropriate content.',
    why: 'Useful, consistent communication helps your brand stay familiar.',
    approach: 'Platform fit → Content themes → Publishing cadence → Engagement review',
  },
  {
    title: 'Content Marketing',
    icon: FileText,
    what: 'Create content that answers audience questions and supports discovery.',
    why: 'Helpful content gives people a reason to trust and explore your business.',
    approach: 'Search intent → Editorial plan → Useful content → Performance review',
  },
  {
    title: 'Lead Generation',
    icon: AtSign,
    what: 'Improve the path from first interaction to a relevant enquiry.',
    why: 'A clear next step helps turn interest into a conversation.',
    approach: 'Offer clarity → Landing experience → Contact path → Enquiry tracking',
  },
  {
    title: 'Retargeting',
    icon: RefreshCw,
    what: 'Reconnect with interested visitors through considered follow-up campaigns.',
    why: 'People often need more than one interaction before they are ready to act.',
    approach: 'Audience signals → Message relevance → Frequency control → Review',
  },
  {
    title: 'Conversion Optimization',
    icon: MousePointerClick,
    what: 'Find friction in key pages and refine paths to useful actions.',
    why: 'A clearer experience helps visitors take the next step with confidence.',
    approach: 'Journey review → Friction points → Focused tests → Learn and refine',
  },
  {
    title: 'Analytics & Reporting',
    icon: BarChart3,
    what: 'Set up useful measurement and translate results into decisions.',
    why: 'Meaningful measurement helps teams make better-informed choices.',
    approach: 'Goals → Tracking plan → Performance review → Next decisions',
  },
]
const stories = [
  { headline: 'Start with the right people.', sub: 'A neighborhood café. A morning ritual. People who will actually care.', action: 'Define your audience', badge: 'Audience research', words: ['Local regulars', 'Morning commuters', 'Coffee lovers'] },
  { headline: 'Show up in their everyday.', sub: 'Bring one clear message to the places your audience already spends time.', action: 'Find your next favorite coffee.', badge: 'Campaign discovery', words: ['Search', 'Social', 'Relevant reach'] },
  { headline: 'Give them a reason to stop.', sub: 'A story worth watching. A useful answer. A little more connection.', action: 'Freshly brewed. Locally loved.', badge: 'Content & conversation', words: ['Watch', 'Save', 'Ask a question'] },
  { headline: 'Turn curiosity into a hello.', sub: 'Make the next step obvious, from viewing a menu to asking about an event.', action: 'Plan your next coffee break.', badge: 'An interested customer', words: ['Clear offer', 'Useful landing page', 'Easy contact'] },
  { headline: 'Make saying yes feel easy.', sub: 'A simple, reassuring journey helps an interested visitor take action.', action: 'Your table is waiting.', badge: 'A meaningful action', words: ['Less friction', 'Clear next step', 'More confidence'] },
  { headline: 'Learn. Refine. Welcome back.', sub: 'Use the signals that matter to shape the next campaign and keep the connection.', action: 'See you for your usual?', badge: 'The next growth cycle', words: ['Measure', 'Learn', 'Improve'] },
]

function CampaignScene({ stage, channel }: { stage: number; channel: number }) {
  const ChannelIcon = channels[channel].icon
  return <div className={`mk-campaign mk-scene-${stage}`}>
    <div className="mk-windowbar"><span><i/><i/><i/></span><span>THE DAILY CUP / CAMPAIGN STORY</span><Globe size={13}/></div>
    {stage === 0 ? <div className="mk-audience-scene"><div className="mk-audience-label">A LITTLE LOCAL KNOWLEDGE.</div><div className="mk-people">{Array.from({length:12},(_,i)=><span className={i===2||i===5||i===6||i===9?'mk-person-selected':''} key={i}><Users size={28}/>{[2,5,6,9].includes(i)&&<Check size={12}/>}</span>)}</div><div className="mk-audience-focus"><Target size={19}/><div><strong>People, before platforms.</strong><small>Understand their needs. Find your fit.</small></div></div></div>
    : stage === 3 ? <div className="mk-lead-scene"><span className="mk-scene-kicker">THE DAILY CUP · PRIVATE EVENTS</span><h4>A good conversation<br/>starts over coffee.</h4><div className="mk-fake-input"><Users size={15}/><span>Alex Morgan</span><Check size={14}/></div><div className="mk-fake-input"><Mail size={15}/><span>alex@example.com</span><Check size={14}/></div><div className="mk-fake-submit">Ask about a gathering <ArrowRight size={15}/></div><small>Example enquiry journey</small></div>
    : stage === 4 ? <div className="mk-success-scene"><div className="mk-success-rings"><CheckCircle2 size={48}/></div><span className="mk-scene-kicker">FROM INTEREST TO ACTION</span><h4>Let's make it<br/>a coffee date.</h4><p>Enquiry received.<br/>The café team can take it from here.</p><span className="mk-confirmation"><Check size={14}/> A clear, reassuring next step</span></div>
    : stage === 5 ? <div className="mk-learning-scene"><span className="mk-scene-kicker">BETTER QUESTIONS. BETTER NEXT STEPS.</span><h4>What brought<br/>people closer?</h4><div className="mk-chart" role="img" aria-label="Illustrative campaign activity bars, not measured performance">{[24,37,31,54,46,63,58,72,65,87].map((n,i)=><span key={i} style={{height:`${n}%`,animationDelay:`${i*.065}s`}}/>)}</div><div className="mk-insight"><Lightbulb size={19}/><span>Test more of the stories people find useful.</span></div><small>Conceptual activity · no measured results</small></div>
    : <div className="mk-post"><div className="mk-post-top"><span className="mk-brand-avatar">d.</span><div><strong>The Daily Cup</strong><small>{channels[channel].name} · Example creative</small></div><ChannelIcon size={20}/></div><div className="mk-coffee-art"><span className="mk-poster-note">YOUR DAILY<br/>MOMENT OF GOOD.</span><div className="mk-steam"><i/><i/><i/></div><div className="mk-cup"><span>daily.</span></div><div className="mk-saucer"/><span className="mk-coffee-seal">BREWED<br/>WITH CARE</span></div><div className="mk-post-bottom"><strong>{stories[stage].action}</strong><div><MessageCircle size={16}/><span>{stage===2?'A story that starts a conversation.':'A relevant message. A familiar place.'}</span><ArrowRight size={17}/></div></div></div>}
  </div>
}

export default function Marketing() {
  const [activeStage, setActiveStage] = useState(0)
  const [activeChannel, setActiveChannel] = useState(0)
  const [openService, setOpenService] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [inView, setInView] = useState(false)
  const reduceMotion = useReducedMotion()
  const root = useRef<HTMLElement>(null)
  const id = useId()
  const active = stories[activeStage]
  const channel = channels[activeChannel]
  const service = services[openService]
  const ServiceIcon = service.icon
  const move = !reduceMotion
  useEffect(() => {
    if(!root.current) return
    const observer = new IntersectionObserver(([entry])=>setInView(entry.isIntersecting), {threshold:.08})
    observer.observe(root.current)
    return ()=>observer.disconnect()
  }, [])
  useEffect(() => {
    if(!playing || !inView || reduceMotion) return
    const timer = window.setInterval(()=>{if(!document.hidden)setActiveStage(s=>(s+1)%stages.length)}, 5500)
    return ()=>window.clearInterval(timer)
  }, [playing,inView,reduceMotion,activeStage])
  const chooseStage = (index: number) => {setPlaying(false);setActiveStage(index)}
  const enter = {initial:move?{opacity:0,y:18}:{opacity:1},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.15},transition:{duration:.65}}
  return <section id="marketing" ref={root} className={`mk-root ${!playing ? 'mk-story-paused':''} ${reduceMotion?'mk-reduced':''}`} aria-labelledby={`${id}-title`}>
    <style>{marketingStyles}</style>
    <div className="mk-shell">
      <motion.header className="mk-header" {...enter}><div><p className="mk-eyebrow"><span/> DIGITAL MARKETING, CONNECTED.</p><h2 id={`${id}-title`}>Don't just get seen.<br/><em>Give people a reason.</em></h2></div><div className="mk-header-aside"><span className="mk-handwritten">A little attention.<br/>A meaningful connection.</span><p>From the first impression<br/>to the next “see you soon.”</p></div></motion.header>
      <motion.div className="mk-story" {...enter}>
        <div className="mk-story-top"><span><i/> THE DAILY CUP <b>— A LOCAL BUSINESS STORY</b></span><span className="mk-demo">INTERACTIVE EXAMPLE</span></div>
        <div className="mk-story-body">
          <div className="mk-narrative"><div className="mk-step-count"><span>0{activeStage+1}</span><i/>06 — {stages[activeStage].funnel}</div>
            <AnimatePresence mode="wait" initial={false}><motion.div key={activeStage} initial={move?{opacity:0,y:14}:false} animate={{opacity:1,y:0}} exit={{opacity:0,y:move?-8:0}} transition={{duration:move?.28:0}}><h3>{active.headline}</h3><p>{active.sub}</p><div className="mk-tags">{active.words.map(word=><span key={word}>{word}</span>)}</div></motion.div></AnimatePresence>
            <div className="mk-story-controls"><button type="button" className="mk-play" disabled={!!reduceMotion} onClick={()=>setPlaying(p=>!p)} aria-pressed={playing} aria-label={playing?'Pause story':'Play story'}>{playing?<Pause size={15}/>:<Play size={15}/>} {playing?'Pause story':'Play the story'}</button><button type="button" className="mk-next" onClick={()=>chooseStage((activeStage+1)%6)} aria-label="Next stage"><ArrowRight size={19}/></button></div><p className="mk-story-hint">{reduceMotion?'Motion reduced · use Next or select a stage':'Six moments. One connected journey.'}</p>
          </div>
          <div className="mk-visual"><div className="mk-orbit-ring"/><div className="mk-orbit-ring mk-ring-two"/><svg className="mk-flow-lines" viewBox="0 0 620 540" aria-hidden="true"><path d="M105 125Q310-20 518 139M536 194Q621 329 507 415M455 458Q294 535 110 405M76 354Q-15 201 105 125"/></svg>
            <span className="mk-floating-icon mk-float-1"><Search size={25}/></span><span className="mk-floating-icon mk-float-2"><Instagram size={26}/></span><span className="mk-floating-icon mk-float-3"><Mail size={24}/></span><span className="mk-floating-icon mk-float-4"><TrendingUp size={25}/></span>
            <div className="mk-scene-wrap"><AnimatePresence mode="wait" initial={false}><motion.div className="mk-scene-inner" key={activeStage} initial={move?{opacity:0,scale:.94,rotate:-3}:false} animate={{opacity:1,scale:1,rotate:0}} exit={{opacity:0,scale:move?.97:1}} transition={{duration:move?.35:0}}><CampaignScene stage={activeStage} channel={activeChannel}/></motion.div></AnimatePresence></div>
            <div className="mk-scene-badge"><Sparkles size={14}/>{active.badge}</div><span className="mk-side-note">Make every<br/>touchpoint count.</span>
          </div>
        </div>
        <nav className="mk-stage-nav" aria-label="Campaign story stages">{stages.map((item,index)=>{const Icon=item.icon;return <button type="button" key={item.name} aria-pressed={activeStage===index} onClick={()=>chooseStage(index)}><span className="mk-stage-icon"><Icon size={21}/></span><span className="mk-stage-label"><small>0{index+1}</small>{item.name}</span><span className="mk-stage-progress">{activeStage===index&&<i key={`${activeStage}-${playing}`} className={playing&&inView&&move?'is-playing':''}/>}</span></button>})}</nav>
      </motion.div>
      <motion.div className="mk-channel-section" {...enter}><div className="mk-section-intro"><p className="mk-eyebrow">THE RIGHT PLACES</p><h3>One brand.<br/><em>Many ways to connect.</em></h3><p>Choose a channel. See the role it plays.</p></div><div className="mk-channel-explorer"><div className="mk-channel-buttons" role="group" aria-label="Marketing channels">{channels.map((item,index)=>{const Icon=item.icon;return <button type="button" key={item.name} aria-pressed={activeChannel===index} onClick={()=>setActiveChannel(index)}><Icon size={20}/><span>{item.name}</span></button>})}</div><AnimatePresence mode="wait" initial={false}><motion.div key={activeChannel} className="mk-channel-detail" initial={{opacity:0,y:move?8:0}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:move?.2:0}}><div><small>THE PURPOSE</small><h4>{channel.purpose}</h4></div><div><small>THE APPROACH</small><p>{channel.strategy}</p></div></motion.div></AnimatePresence></div></motion.div>
      <motion.div className="mk-method" {...enter}><div className="mk-method-heading"><p className="mk-eyebrow">BEHIND EVERY TOUCHPOINT</p><h3>Good outcomes start<br/>with <em>better decisions.</em></h3><p>Select a step to revisit that part of the story.</p></div><div className="mk-method-steps">{strategySteps.map((step,index)=><button type="button" key={step.title} aria-pressed={activeStage===index} onClick={()=>chooseStage(index)}><span>0{index+1}</span><div><strong>{step.title}</strong><p>{step.note}</p></div><ArrowRight size={18}/></button>)}</div></motion.div>
      <motion.div className="mk-services" {...enter}><div className="mk-service-heading"><div><p className="mk-eyebrow">WHAT WE ACTUALLY DO</p><h3>A thoughtful system.<br/><em>Built around your business.</em></h3></div><span>Explore the disciplines ↘</span></div><div className="mk-service-layout"><div className="mk-service-list" role="group" aria-label="Marketing disciplines">{services.map((item,index)=>{const Icon=item.icon;return <button type="button" key={item.title} aria-pressed={openService===index} aria-controls={`${id}-service`} onClick={()=>setOpenService(index)}><span>0{index+1}</span><Icon size={18}/><strong>{item.title}</strong><ArrowRight size={16}/></button>})}</div><div id={`${id}-service`} className="mk-service-panel" aria-live="polite"><AnimatePresence mode="wait" initial={false}><motion.div key={openService} initial={{opacity:0,y:move?12:0}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:move?.23:0}}><span className="mk-service-big-icon"><ServiceIcon size={42} strokeWidth={1.4}/></span><h4>{service.title}</h4><p>{service.what}</p><div className="mk-why"><Lightbulb size={19}/><p>{service.why}</p></div><small>HOW WE GET THERE</small><ol className="mk-approach">{service.approach.split(' → ').map((text,index)=><li key={text}><span>{index+1}</span>{text}</li>)}</ol></motion.div></AnimatePresence></div></div></motion.div>
      <motion.footer className="mk-cta" {...enter}><div><p className="mk-eyebrow">YOUR NEXT CHAPTER</p><h3>Let's give your business<br/><em>a reason to be remembered.</em></h3></div><div><a className="mk-primary-link" href="#cta">Build my strategy <ArrowRight size={18}/></a><a className="mk-secondary-link" href="mailto:hello@careflare.life?subject=Talk%20to%20the%20Careflare%20team">Talk to our team <ArrowRight size={16}/></a></div></motion.footer>
      <p className="mk-disclaimer">Fictional business and illustrative campaign journey. No ad platforms connected. Visuals are not client results or performance guarantees.</p>
    </div>
  </section>
}

const marketingStyles = `
.mk-root{--mk-pine:var(--color-pine,#234e40);--mk-ink:var(--color-ink,#233d33);--mk-mist:var(--color-mist,#f5f5ed);--mk-sage:#abbc9e;--mk-lime:#dce8b5;background:var(--mk-mist);color:var(--mk-ink);padding:90px 24px 32px;scroll-margin-top:70px;font-family:inherit;overflow:hidden}.mk-root *{box-sizing:border-box}.mk-root button,.mk-root a{-webkit-tap-highlight-color:transparent;font:inherit}.mk-root button{cursor:pointer;color:inherit}.mk-root button:focus-visible,.mk-root a:focus-visible{outline:3px solid #7d9857;outline-offset:5px}.mk-root button:disabled{cursor:default;opacity:.55}.mk-root h2,.mk-root h3,.mk-root h4,.mk-root p{margin:0}.mk-root svg{flex-shrink:0}.mk-shell{max-width:1220px;margin:auto}.mk-eyebrow{display:flex;align-items:center;gap:9px;font-size:10px!important;font-weight:600;letter-spacing:2px;line-height:1.6}.mk-eyebrow>span{width:6px;height:6px;background:var(--mk-pine);border-radius:50%}.mk-root h2,.mk-root h3,.mk-root h4{font-family:var(--font-display,Georgia,serif);font-weight:400}.mk-root em{font-weight:400;color:#7e906f}.mk-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:46px;gap:35px}.mk-header h2{font-size:clamp(42px,5.6vw,76px);letter-spacing:-2.5px;line-height:1.04;margin-top:22px}.mk-header-aside{padding:0 35px 9px 0}.mk-handwritten{display:block;font:italic 23px/1.3 Georgia,serif;transform:rotate(-7deg);color:#7e906f;margin-bottom:27px}.mk-header-aside p{font-size:12px;line-height:1.8;color:#7c8878}.mk-story{border:1px solid #234e4028;background:#eeefe5;border-radius:26px;overflow:hidden}.mk-story-top{display:flex;justify-content:space-between;align-items:center;padding:21px 31px;border-bottom:1px solid #234e4018;font-size:9px;letter-spacing:1.5px;gap:15px}.mk-story-top>span:first-child{display:flex;align-items:center;gap:9px}.mk-story-top b{font-weight:400;color:#83917a}.mk-story-top i{width:5px;height:5px;background:#839869;border-radius:50%}.mk-demo{color:#768466;font-size:8px;white-space:nowrap}.mk-story-body{display:grid;grid-template-columns:.86fr 1.14fr;gap:12px;align-items:center;padding:15px 38px 10px;min-height:540px}.mk-narrative{padding:30px 0;max-width:385px}.mk-step-count{display:flex;align-items:center;gap:10px;font-size:9px;letter-spacing:1px;color:#889578;margin-bottom:30px}.mk-step-count>span{font-size:14px;color:var(--mk-pine)}.mk-step-count i{width:36px;height:1px;background:#acb79a}.mk-narrative h3{font-size:clamp(34px,3.8vw,51px);line-height:1.09;letter-spacing:-1.7px;min-height:112px}.mk-narrative>div>p{font-size:13px;line-height:1.9;color:#75816c;max-width:330px;min-height:76px;margin-top:18px}.mk-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:20px;min-height:32px}.mk-tags span{border:1px solid #acba963d;border-radius:20px;padding:7px 10px;font-size:9px;color:#697d56}.mk-story-controls{display:flex;align-items:center;gap:10px;margin-top:32px}.mk-play,.mk-next{border:0;background:var(--mk-pine);color:#f4f7e5!important;display:flex;align-items:center;justify-content:center;gap:9px;height:42px;border-radius:30px;font-size:11px!important;padding:0 21px}.mk-next{width:42px;padding:0;background:transparent;border:1px solid #234e4040;color:var(--mk-pine)!important;transition:transform .25s}.mk-next:hover{transform:translateX(3px)}.mk-story-hint{font-size:9px;color:#909a82;margin-top:14px!important}.mk-visual{position:relative;height:525px;min-width:0}.mk-orbit-ring{position:absolute;inset:20px 1px;border:1px solid #a4b5943b;border-radius:50%;transform:rotate(-22deg);background:radial-gradient(ellipse,#c8d5b875,transparent 69%)}.mk-ring-two{inset:46px -13px 44px;transform:rotate(30deg);background:transparent}.mk-flow-lines{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:#90a178;stroke-width:1;stroke-dasharray:4 9;animation:mk-flow 30s linear infinite}.mk-floating-icon{position:absolute;z-index:3;width:60px;height:60px;display:grid;place-items:center;background:#f7f8eb;border:1px solid #b5c6a4;border-radius:20px;box-shadow:4px 6px 0 #b4c4a22e;animation:mk-float 5s ease-in-out infinite}.mk-float-1{left:5%;top:38px;transform:rotate(-12deg)}.mk-float-2{right:3%;top:79px;transform:rotate(9deg);background:var(--mk-pine);color:#dce8b5;animation-delay:-1s}.mk-float-3{left:3%;bottom:85px;transform:rotate(9deg);animation-delay:-2s}.mk-float-4{right:7%;bottom:47px;transform:rotate(-8deg);background:#dce8b5;animation-delay:-3s}.mk-scene-wrap{position:absolute;inset:86px 66px 79px;z-index:2;perspective:900px}.mk-scene-inner{height:100%}.mk-campaign{height:100%;background:#fffef8;border:1px solid #b5c4a5;border-radius:14px;overflow:hidden;box-shadow:0 25px 45px #3c573221;transform:rotate(-3deg)}.mk-windowbar{height:33px;display:flex;justify-content:space-between;align-items:center;padding:0 12px;background:#e5eadb;border-bottom:1px solid #acba963a;font-size:6px;color:#7b8b69;letter-spacing:.6px}.mk-windowbar>span:first-child{display:flex;gap:3px}.mk-windowbar i{height:4px;width:4px;border-radius:50%;background:#9aad86}.mk-scene-badge{position:absolute;bottom:34px;left:23%;z-index:4;background:#fffdf2;border:1px solid #c1cdb1;border-radius:22px;padding:10px 15px;display:flex;gap:7px;align-items:center;font-size:9px;box-shadow:0 7px 15px #3d55240a;transform:rotate(-3deg)}.mk-side-note{position:absolute;right:18%;top:24px;font:italic 15px/1.3 Georgia,serif;transform:rotate(9deg);color:#83956d}.mk-post-top{display:flex;align-items:center;gap:9px;padding:12px 17px}.mk-brand-avatar{display:grid;place-items:center;background:var(--mk-pine);color:#e2edbe;width:28px;height:28px;border-radius:50%;font:italic 20px Georgia,serif}.mk-post-top strong{font-size:10px;display:block}.mk-post-top small{font-size:7px;display:block;margin-top:3px;color:#8a947c}.mk-post-top>svg{margin-left:auto;color:#8a997a}.mk-coffee-art{height:180px;background:#d2dcbf;position:relative;overflow:hidden;margin:0 13px;border-radius:7px}.mk-poster-note{position:absolute;top:18px;left:18px;font:21px/.95 Georgia,serif;letter-spacing:-.7px;color:#395231}.mk-cup{position:absolute;width:96px;height:81px;background:linear-gradient(100deg,#faf9e4,#f4eed4 65%,#d8d4b4);border-radius:8px 8px 37px 37px;left:46%;bottom:23px;z-index:2;display:grid;place-items:center;transform:rotate(-9deg);box-shadow:5px 7px 11px #46543626}.mk-cup:before{content:'';position:absolute;inset:0 0 auto;height:14px;border-radius:50%;background:#7b5840;border:5px solid #faf8e3}.mk-cup:after{content:'';position:absolute;width:26px;height:34px;right:-25px;top:17px;border:9px solid #eeead0;border-left:0;border-radius:0 22px 24px 0}.mk-cup span{font:italic 20px Georgia,serif;color:#708362}.mk-saucer{position:absolute;width:146px;height:26px;background:#f5f1d9;border-radius:50%;left:38%;bottom:14px;box-shadow:0 7px 10px #576a3220;transform:rotate(-6deg)}.mk-steam{position:absolute;left:56%;top:37px;display:flex;gap:9px}.mk-steam i{height:30px;width:8px;border-left:2px solid #fff9;border-radius:50%;animation:mk-steam 3s ease-in-out infinite}.mk-steam i:nth-child(2){animation-delay:-1s}.mk-steam i:nth-child(3){animation-delay:-2s}.mk-coffee-seal{position:absolute;bottom:18px;left:17px;font-size:7px;letter-spacing:1px;border:1px solid #82966b;border-radius:50%;height:48px;width:48px;display:grid;place-content:center;text-align:center;transform:rotate(-14deg)}.mk-post-bottom{padding:13px 16px}.mk-post-bottom strong{font-size:11px}.mk-post-bottom>div{display:flex;align-items:center;gap:7px;font-size:8px;color:#879177;margin-top:10px}.mk-post-bottom>div>svg:last-child{margin-left:auto}.mk-audience-scene{padding:25px 22px}.mk-audience-label,.mk-scene-kicker{font-size:7px;letter-spacing:1.4px;color:#8b987d}.mk-people{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin:21px 0}.mk-people>span{height:46px;border-radius:13px;background:#ecefe5;color:#bbc5ae;display:grid;place-items:center;position:relative;animation:mk-appear .5s both}.mk-people .mk-person-selected{background:#dce8b5;color:var(--mk-pine);box-shadow:0 0 0 1px #b2c594}.mk-people>span>svg+svg{position:absolute;right:-4px;top:-4px;background:var(--mk-pine);color:white;border-radius:50%;padding:2px;width:17px;height:17px}.mk-audience-focus{display:flex;gap:10px;border-top:1px solid #d8dfcd;padding-top:18px;align-items:center}.mk-audience-focus strong{display:block;font-size:12px}.mk-audience-focus small{display:block;font-size:8px;color:#8c977f;margin-top:6px}.mk-lead-scene{padding:24px}.mk-lead-scene h4,.mk-learning-scene h4{font-size:27px;line-height:1.1;margin:12px 0 17px}.mk-fake-input{display:flex;align-items:center;gap:8px;border:1px solid #d4deca;border-radius:7px;padding:10px;margin-top:8px;font-size:9px;color:#8a9878}.mk-fake-input>svg:last-child{margin-left:auto}.mk-fake-submit{display:flex;align-items:center;justify-content:space-between;background:var(--mk-pine);color:#eaf1d8;padding:12px;border-radius:7px;margin-top:11px;font-size:10px}.mk-lead-scene>small,.mk-learning-scene>small{display:block;text-align:center;font-size:7px;color:#9aa58e;margin-top:11px}.mk-success-scene{text-align:center;padding:21px}.mk-success-rings{display:grid;place-items:center;height:78px;width:78px;background:#edf2dd;border:1px solid #c4d2b1;border-radius:50%;margin:0 auto 17px;box-shadow:0 0 0 9px #e7eddf50;color:#5d7a48}.mk-success-scene h4{font-size:30px;line-height:1.05;margin:12px 0}.mk-success-scene p{font-size:10px;line-height:1.7;color:#869379}.mk-confirmation{display:inline-flex;gap:6px;align-items:center;margin-top:18px;font-size:8px;color:#69854e}.mk-learning-scene{padding:22px}.mk-chart{display:flex;gap:8px;align-items:flex-end;height:94px;border-bottom:1px solid #bdcba9;padding:0 7px 5px}.mk-chart>span{flex:1;background:#a7bc8f;border-radius:4px 4px 0 0;transform-origin:bottom;animation:mk-bar .7s both}.mk-chart>span:nth-last-child(-n+3){background:var(--mk-pine)}.mk-insight{display:flex;gap:9px;align-items:center;background:#eef2e3;border-radius:7px;margin-top:15px;padding:10px;font-size:9px;color:#6c8057}.mk-stage-nav{display:grid;grid-template-columns:repeat(6,1fr);background:#e7ecdf;border-top:1px solid #bdcaae66;padding:23px 26px 18px;gap:12px}.mk-stage-nav button{border:0;background:none;padding:0 3px;color:#8e9b80!important;text-align:left}.mk-stage-nav button[aria-pressed=true]{color:var(--mk-pine)!important}.mk-stage-icon{display:block;margin-bottom:10px;transition:transform .3s}.mk-stage-nav button:hover .mk-stage-icon{transform:translateY(-4px)}.mk-stage-label{display:flex;align-items:center;gap:7px;font-size:10px}.mk-stage-label small{font-size:8px;opacity:.6}.mk-stage-progress{display:block;height:2px;background:#cbd5bf;margin-top:13px;overflow:hidden}.mk-stage-progress i{display:block;height:100%;background:var(--mk-pine)}.mk-stage-progress i.is-playing{animation:mk-progress 5.5s linear both}.mk-channel-section{display:grid;grid-template-columns:.8fr 1.2fr;gap:65px;padding:85px 0}.mk-section-intro h3,.mk-method h3,.mk-service-heading h3,.mk-cta h3{font-size:clamp(30px,3.2vw,43px);line-height:1.13;letter-spacing:-1.2px;margin-top:16px}.mk-section-intro>p:last-child,.mk-method-heading>p:last-child{font-size:12px;color:#88947b;margin-top:19px;line-height:1.7}.mk-channel-buttons{display:grid;grid-template-columns:repeat(5,1fr);gap:18px 10px}.mk-channel-buttons button{display:flex;align-items:center;flex-direction:column;gap:9px;border:0;background:none;padding:0;font-size:9px;white-space:nowrap}.mk-channel-buttons button svg{width:47px;height:47px;padding:12px;border:1px solid #c4d0b4;border-radius:16px;background:#e9eedf;transition:background .3s,transform .3s}.mk-channel-buttons button[aria-pressed=true] svg{background:var(--mk-pine);color:#e8efce;border-color:var(--mk-pine);transform:translateY(-3px);box-shadow:0 6px 0 #d0d9bd}.mk-channel-buttons button:hover svg{transform:translateY(-4px)}.mk-channel-detail{display:grid;grid-template-columns:1fr 1fr;gap:20px;border-top:1px solid #ccd6c0;margin-top:24px;padding-top:22px;min-height:116px}.mk-channel-detail small,.mk-service-panel>div>small{font-size:8px;letter-spacing:1.6px;color:#8a987b}.mk-channel-detail h4{font-size:20px;line-height:1.25;margin-top:9px}.mk-channel-detail p{font-size:11px;line-height:1.8;color:#7f8d70;margin-top:9px}.mk-method{display:grid;grid-template-columns:.9fr 1.1fr;gap:65px;padding:48px;border-radius:24px;background:var(--mk-pine);color:#eef2df}.mk-method .mk-eyebrow{color:#b8ce98}.mk-method em{color:#b9cf9a}.mk-method-heading>p:last-child{color:#b2c0a4;max-width:235px}.mk-method-steps{display:grid;gap:0}.mk-method-steps button{display:flex;align-items:center;gap:14px;text-align:left;border:0;border-bottom:1px solid #edf3d322;background:transparent;color:#c2cfb4;padding:13px 0;transition:color .3s}.mk-method-steps button:first-child{padding-top:0}.mk-method-steps button:last-child{border-bottom:0}.mk-method-steps button>span{font-size:9px;opacity:.6}.mk-method-steps button strong{font-size:12px;font-weight:500}.mk-method-steps button p{font-size:10px;color:#9fb393;line-height:1.6;margin-top:4px}.mk-method-steps button>svg{margin-left:auto;opacity:.4}.mk-method-steps button[aria-pressed=true]{color:#e4f3ad}.mk-method-steps button[aria-pressed=true]>svg{opacity:1;transform:rotate(-30deg)}.mk-services{padding:80px 0 65px}.mk-service-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:25px;margin-bottom:35px}.mk-service-heading>span{font:italic 15px Georgia,serif;color:#8d997f}.mk-service-layout{display:grid;grid-template-columns:1fr 1fr;gap:60px}.mk-service-list{border-top:1px solid #cbd4c0}.mk-service-list button{width:100%;display:flex;align-items:center;gap:14px;min-height:57px;background:none;border:0;border-bottom:1px solid #d3dac9;text-align:left;transition:padding .3s,color .3s}.mk-service-list button>span{font-size:9px;color:#98a38c}.mk-service-list button strong{font-size:12px;font-weight:400;flex:1}.mk-service-list button[aria-pressed=true]{padding-left:16px;color:#4b6b3b;background:#e8edde}.mk-service-panel{background:#e9eedf;border:1px solid #d4dec8;border-radius:21px;padding:32px;min-height:460px}.mk-service-big-icon{display:grid;place-items:center;width:79px;height:79px;background:#d3dfbe;border-radius:25px;transform:rotate(-7deg);margin-bottom:23px}.mk-service-panel h4{font-size:31px;letter-spacing:-.7px}.mk-service-panel>div>p{font-size:12px;line-height:1.8;color:#7f8c72;margin-top:13px}.mk-why{display:flex;align-items:flex-start;gap:10px;border-left:1px solid #a5b98c;padding-left:14px;margin:22px 0}.mk-why p{font-size:11px;line-height:1.7;color:#7c8e68}.mk-approach{padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:17px}.mk-approach li{display:flex;align-items:center;gap:8px;font-size:9px;line-height:1.5;color:#72865c}.mk-approach span{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#d6e1c5;font-size:9px;flex-shrink:0}.mk-cta{display:flex;align-items:center;justify-content:space-between;gap:30px;border-top:1px solid #c6d1b7;padding:38px 0}.mk-cta>div:last-child{display:flex;flex-direction:column;align-items:center;gap:18px}.mk-primary-link,.mk-secondary-link{display:inline-flex;align-items:center;gap:20px;text-decoration:none;font-size:11px!important;transition:transform .25s}.mk-primary-link{padding:17px 25px;background:var(--mk-pine);color:#eaf0dc;border-radius:30px}.mk-primary-link:hover{transform:translateY(-3px)}.mk-secondary-link{color:var(--mk-pine);font-size:10px!important}.mk-disclaimer{font-size:8px;line-height:1.7;color:#97a08c}.mk-story-paused .mk-flow-lines,.mk-story-paused .mk-floating-icon,.mk-story-paused .mk-steam i{animation-play-state:paused}
@keyframes mk-float{0%,100%{translate:0 0}50%{translate:0 -10px}}@keyframes mk-flow{to{stroke-dashoffset:-200}}@keyframes mk-steam{0%{opacity:0;translate:0 5px}50%{opacity:.7}100%{opacity:0;translate:0 -13px}}@keyframes mk-bar{from{transform:scaleY(.1)}to{transform:scaleY(1)}}@keyframes mk-appear{from{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes mk-progress{from{width:0}to{width:100%}}
@media(max-width:1000px){.mk-header h2{font-size:57px}.mk-story-body{padding:10px 25px;grid-template-columns:.85fr 1.15fr}.mk-narrative h3{font-size:39px}.mk-scene-wrap{left:36px;right:36px}.mk-floating-icon{width:48px;height:48px;border-radius:16px}.mk-visual{height:510px}.mk-scene-badge{left:18%;font-size:8px}.mk-channel-section,.mk-service-layout{gap:35px}.mk-method{padding:34px;gap:35px}.mk-channel-buttons{grid-template-columns:repeat(3,1fr)}.mk-channel-section{align-items:center}.mk-stage-label{font-size:9px;gap:5px}.mk-stage-nav{padding-left:20px;padding-right:20px}}
@media(max-width:760px){.mk-root{padding:48px 20px 25px}.mk-header{margin-bottom:30px}.mk-header h2{font-size:clamp(39px,8vw,58px);letter-spacing:-1.8px}.mk-header-aside{display:none}.mk-eyebrow{font-size:8px!important;letter-spacing:1.6px}.mk-story{border-radius:20px}.mk-story-top{padding:17px 20px;font-size:8px;letter-spacing:1px}.mk-story-top b{display:none}.mk-demo{font-size:6px;letter-spacing:.8px}.mk-story-body{grid-template-columns:1fr;padding:0 21px;gap:0}.mk-narrative{padding:28px 0 0;max-width:none}.mk-step-count{margin-bottom:20px}.mk-narrative h3{font-size:37px;min-height:80px;max-width:420px}.mk-narrative>div>p{font-size:12px;min-height:67px;max-width:430px;margin-top:12px}.mk-tags{margin-top:12px;min-height:30px}.mk-tags span{font-size:8px;padding:6px 9px}.mk-story-controls{margin-top:20px}.mk-story-hint{font-size:8px;margin-top:11px!important}.mk-visual{height:454px;max-width:470px;width:100%;margin:auto}.mk-scene-wrap{inset:73px 21px 47px}.mk-float-1{left:-7px;top:29px}.mk-float-2{right:-8px;top:47px}.mk-float-3{left:-11px;bottom:49px}.mk-float-4{right:-7px;bottom:29px}.mk-side-note{top:21px;right:24%;font-size:12px}.mk-orbit-ring{inset:35px -17px}.mk-ring-two{inset:55px -12px}.mk-scene-badge{bottom:14px;left:18%;font-size:8px;padding:8px 10px}.mk-stage-nav{grid-template-columns:repeat(3,1fr);padding:21px 18px;gap:19px 13px}.mk-stage-icon{margin-bottom:8px}.mk-stage-label{font-size:9px}.mk-stage-progress{margin-top:9px}.mk-channel-section{grid-template-columns:1fr;padding:55px 0;gap:28px}.mk-section-intro h3,.mk-method h3,.mk-service-heading h3,.mk-cta h3{font-size:33px}.mk-channel-buttons{grid-template-columns:repeat(3,1fr);gap:22px 13px}.mk-channel-buttons button{font-size:10px}.mk-channel-buttons button svg{width:52px;height:52px;padding:14px}.mk-channel-detail{min-height:135px;gap:19px}.mk-channel-detail h4{font-size:20px}.mk-channel-detail p{font-size:11px}.mk-method{grid-template-columns:1fr;padding:28px 24px;gap:30px}.mk-method-heading>p:last-child{max-width:100%}.mk-method-steps button{padding:15px 0}.mk-method-steps button strong{font-size:13px}.mk-method-steps button p{font-size:11px}.mk-services{padding:55px 0 40px}.mk-service-heading{display:block;margin-bottom:26px}.mk-service-heading>span{display:block;margin-top:17px;font-size:13px}.mk-service-layout{grid-template-columns:1fr;gap:24px}.mk-service-list button{min-height:53px}.mk-service-panel{padding:25px;min-height:455px}.mk-cta{display:block;padding:29px 0}.mk-cta>div:last-child{flex-direction:row;justify-content:flex-start;gap:20px;margin-top:25px}.mk-primary-link{font-size:10px!important;padding:14px 19px;gap:12px}.mk-secondary-link{font-size:9px!important;gap:8px}.mk-disclaimer{font-size:7px}.mk-coffee-art{height:177px}.mk-post-bottom strong{font-size:10px}.mk-post-bottom>div{font-size:7px}.mk-learning-scene{padding:20px}.mk-audience-scene{padding:23px 19px}.mk-lead-scene{padding:21px}.mk-people{gap:11px}.mk-people>span{height:43px}.mk-audience-focus strong{font-size:11px}}
@media(max-width:380px){.mk-root{padding-left:13px;padding-right:13px}.mk-story-body{padding-left:17px;padding-right:17px}.mk-scene-wrap{left:10px;right:10px}.mk-windowbar{font-size:5px}.mk-narrative h3{font-size:34px}.mk-stage-label{font-size:8px}.mk-tags{gap:4px}.mk-tags span{padding:6px 7px}}
@media(prefers-reduced-motion:reduce){.mk-root *,.mk-root *:before,.mk-root *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`
