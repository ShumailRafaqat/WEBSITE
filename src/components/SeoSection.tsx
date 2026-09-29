import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Eye,
  FileText,
  Globe,
  KeyRound,
  Link2,
  PanelsTopLeft,
  Search,
  SearchCheck,
  Settings2,
  TrendingUp,
} from 'lucide-react'

const scanSteps = [
  'Checking page structure',
  'Reading metadata',
  'Analyzing content',
  'Checking internal links',
  'Reviewing technical SEO',
  'Evaluating search signals',
]

const optimizedItems = [
  'Structured pages',
  'Relevant keywords',
  'Internal linking',
  'Search-ready metadata',
  'Technical improvements',
  'Visibility signals',
]

const areas = [
  {
    id: 'technical',
    name: 'Technical SEO',
    icon: Settings2,
    before: ['Crawl issues', 'Missing metadata'],
    after: ['Improved crawlability', 'Optimized metadata', 'Clear page structure'],
  },
  {
    id: 'content',
    name: 'Content',
    icon: FileText,
    before: ['Thin content', 'Weak search intent alignment'],
    after: ['Search-focused content', 'Clear content hierarchy', 'Intent-aligned pages'],
  },
  {
    id: 'keywords',
    name: 'Keywords',
    icon: KeyRound,
    before: ['Weak keyword targeting', 'Pages competing for the same terms'],
    after: ['Relevant keyword mapping', 'Clear page-to-keyword structure'],
  },
  {
    id: 'structure',
    name: 'Structure',
    icon: PanelsTopLeft,
    before: ['Unclear page hierarchy', 'Important information is hard to find'],
    after: ['Logical page hierarchy', 'Key information easier to navigate'],
  },
  {
    id: 'linking',
    name: 'Internal Linking',
    icon: Link2,
    before: ['Disconnected pages', 'Few contextual links'],
    after: ['Search-friendly internal links', 'Clearer paths between pages'],
  },
  {
    id: 'visibility',
    name: 'Search Visibility',
    icon: Eye,
    before: ['Limited search coverage', 'Low visibility for relevant topics'],
    after: ['More relevant topics covered', 'Visibility signals ready to monitor'],
  },
]

const visibilityBars = [24, 30, 27, 40, 36, 48, 43, 60, 56, 68, 76, 88]

export default function SeoSection() {
  const [auditState, setAuditState] = useState<'idle' | 'scanning' | 'optimized'>('idle')
  const [completedScanSteps, setCompletedScanSteps] = useState(0)
  const [activeArea, setActiveArea] = useState(areas[0].id)
  const [score, setScore] = useState(42)
  const reduceMotion = useReducedMotion()
  const selectedArea = areas.find((area) => area.id === activeArea) ?? areas[0]
  const SelectedIcon = selectedArea.icon

  useEffect(() => {
    if (auditState !== 'scanning') return

    const interval = window.setInterval(() => {
      setCompletedScanSteps((current) => {
        const next = current + 1
        if (next >= scanSteps.length) {
          window.clearInterval(interval)
          setAuditState('optimized')
          return scanSteps.length
        }
        return next
      })
    }, 360)

    return () => window.clearInterval(interval)
  }, [auditState])

  useEffect(() => {
    if (auditState !== 'optimized') {
      setScore(42)
      return
    }
    if (reduceMotion) {
      setScore(86)
      return
    }

    let startTime: number | undefined
    let frame = 0
    const animateScore = (time: number) => {
      startTime ??= time
      const progress = Math.min((time - startTime) / 700, 1)
      setScore(Math.round(42 + 44 * progress))
      if (progress < 1) frame = window.requestAnimationFrame(animateScore)
    }

    frame = window.requestAnimationFrame(animateScore)
    return () => window.cancelAnimationFrame(frame)
  }, [auditState, reduceMotion])

  function runAuditDemo() {
    setCompletedScanSteps(0)
    setScore(42)
    setAuditState('scanning')
  }

  const progress = auditState === 'optimized'
    ? 100
    : auditState === 'scanning'
      ? (completedScanSteps / scanSteps.length) * 100
      : 0

  return (
    <section id="seo" className="scroll-mt-16 bg-mist py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <header className="mb-9 max-w-3xl md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pine">SEO Optimization</p>
          <h2 className="font-display text-4xl leading-[1.06] text-ink md:text-6xl">
            Your website exists. Now let’s make it discoverable.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-ink/65 md:text-base md:leading-7">
            From technical foundations to search visibility, we turn your website into something search engines can understand — and customers can find.
          </p>
        </header>

        <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(250px,0.65fr)]">
          <div className="min-w-0 overflow-hidden border border-white/10 bg-ink text-white shadow-xl shadow-ink/10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-6">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center bg-lime-300/10 text-lime-300">
                  <SearchCheck size={17} />
                </span>
                <div>
                  <p className="text-xs font-semibold">Interactive SEO Audit Demo</p>
                  <p className="mt-0.5 text-[10px] text-white/40">SEO optimization process</p>
                </div>
              </div>
              <span className="border border-lime-300/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-lime-200">
                Demo data
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3 md:px-6">
              <div className="flex min-w-0 items-center gap-2 text-xs text-white/75">
                <Globe size={14} className="shrink-0 text-lime-300" />
                <span className="truncate">examplewebsite.com</span>
                <span className="hidden text-white/30 sm:inline">/</span>
                <span className="hidden text-white/40 sm:inline">Sample project</span>
              </div>
              <button
                type="button"
                onClick={runAuditDemo}
                disabled={auditState === 'scanning'}
                className="inline-flex min-h-10 items-center justify-center gap-2 bg-lime-400 px-3 text-xs font-semibold text-ink transition-colors hover:bg-lime-300 disabled:cursor-wait disabled:opacity-80 sm:px-4"
              >
                {auditState === 'scanning' ? 'Scanning demo…' : auditState === 'optimized' ? 'Replay demo' : 'Run SEO Audit Demo'}
                {auditState === 'scanning' ? <Activity size={14} className="animate-pulse" /> : <ArrowRight size={14} />}
              </button>
            </div>

            <div className="grid gap-5 p-4 sm:p-5 md:grid-cols-[152px_minmax(0,1fr)] md:gap-7 md:p-6">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                <div
                  role="img"
                  aria-label={`Demonstration SEO health score: ${score} out of 100`}
                  className="relative flex h-28 w-28 shrink-0 items-center justify-center p-[7px] md:h-36 md:w-36"
                  style={{ background: `conic-gradient(#A7B65E ${score * 3.6}deg, rgba(255,255,255,0.1) 0deg)` }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center bg-ink">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">SEO Health</span>
                    <span className="mt-0.5 font-display text-4xl leading-none tabular-nums text-white md:text-5xl">{score}</span>
                    <span className="mt-1 text-[10px] text-white/45">/ 100</span>
                  </div>
                </div>
                <div>
                  <p className={`text-sm font-semibold ${auditState === 'optimized' ? 'text-lime-300' : 'text-amber-200'}`}>
                    {auditState === 'optimized' ? 'Optimized foundation' : 'Needs improvement'}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-white/40">Illustrative score only</p>
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {auditState === 'scanning' ? 'Live scan sequence' : auditState === 'optimized' ? 'Optimization completed' : 'Issues detected'}
                    </p>
                    <h3 className="mt-1 text-sm font-medium text-white/90">
                      {auditState === 'scanning' ? 'Reviewing sample signals' : auditState === 'optimized' ? 'Sample foundation improved' : 'Sample audit findings'}
                    </h3>
                  </div>
                  {auditState === 'scanning' && (
                    <span className="text-[10px] tabular-nums text-lime-200">{Math.round(progress)}%</span>
                  )}
                </div>

                {auditState === 'idle' && (
                  <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-3">
                    {[
                      ['06', 'Technical issues'],
                      ['04', 'Content gaps'],
                      ['03', 'Visibility issues'],
                    ].map(([value, label]) => (
                      <div key={label} className="px-2 first:pl-0 last:pr-0">
                        <p className="font-display text-2xl text-white">{value}</p>
                        <p className="mt-1 text-[9px] leading-3 text-white/45 sm:text-[10px]">{label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {auditState === 'scanning' && (
                  <div className="mt-3 border-y border-white/10 py-1" role="status" aria-live="polite">
                    {scanSteps.map((step, index) => {
                      const isComplete = index < completedScanSteps
                      const isCurrent = index === completedScanSteps

                      return (
                        <div key={step} className="flex min-h-7 items-center gap-2 text-[11px]">
                          <span className={`flex h-4 w-4 items-center justify-center ${isComplete ? 'text-lime-300' : isCurrent ? 'text-white/70' : 'text-white/25'}`}>
                            {isComplete ? <Check size={13} /> : isCurrent ? <motion.span animate={reduceMotion ? {} : { opacity: [0.35, 1] }} transition={{ duration: 0.7, repeat: reduceMotion ? 0 : Infinity, repeatType: 'reverse' }}>•</motion.span> : <span className="h-1 w-1 bg-current" />}
                          </span>
                          <span className={isComplete ? 'text-white/75' : isCurrent ? 'text-white' : 'text-white/35'}>{step}</span>
                        </div>
                      )
                    })}
                  </div>
                )}

                {auditState === 'optimized' && (
                  <div className="mt-3 grid grid-cols-1 gap-x-4 border-y border-white/10 py-2 sm:grid-cols-2">
                    {optimizedItems.map((item, index) => (
                      <motion.p
                        key={item}
                        initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: 0.2 }}
                        className="flex min-h-7 items-center gap-2 text-[10px] text-white/75"
                      >
                        <Check size={13} className="shrink-0 text-lime-300" /> {item}
                      </motion.p>
                    ))}
                  </div>
                )}

                {auditState === 'scanning' && (
                  <div className="mt-3 h-1 overflow-hidden bg-white/10">
                    <motion.div className="h-full bg-lime-300" animate={{ width: `${progress}%` }} transition={{ duration: reduceMotion ? 0 : 0.25 }} />
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-4 border-t border-white/10 p-4 sm:p-5 md:grid-cols-2 md:p-6">
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-lime-300/10 text-lime-300">
                      <SelectedIcon size={16} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">Selected area</p>
                      <p className="truncate text-xs font-medium text-white">{selectedArea.name}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[9px] uppercase tracking-wider text-lime-200/70">Demo</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="border border-white/10 bg-white/[0.03] p-3">
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-amber-200/80">Before</p>
                    {selectedArea.before.map((item) => (
                      <p key={item} className="mb-1.5 flex items-start gap-1.5 text-[10px] leading-4 text-white/60 last:mb-0">
                        <AlertTriangle size={11} className="mt-0.5 shrink-0 text-amber-200/70" /> {item}
                      </p>
                    ))}
                  </div>
                  <div className="border border-lime-300/15 bg-lime-300/[0.04] p-3">
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-lime-200">After</p>
                    {selectedArea.after.map((item) => (
                      <p key={item} className="mb-1.5 flex items-start gap-1.5 text-[10px] leading-4 text-white/70 last:mb-0">
                        <Check size={11} className="mt-0.5 shrink-0 text-lime-300" /> {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="min-w-0 border border-white/10 bg-white/[0.03] p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="flex items-center gap-2 text-[10px] font-semibold text-white/80">
                    <Search size={13} className="text-lime-300" /> Search preview
                  </p>
                  <span className="text-[8px] uppercase tracking-wider text-white/35">Illustrative</span>
                </div>
                <div className="mt-3 border-t border-white/10 pt-3">
                  <p className="text-[9px] text-white/45">examplewebsite.com <span className="px-1">›</span> Services</p>
                  <p className="mt-1 text-sm font-medium text-sky-200">Local SEO &amp; digital marketing services</p>
                  <p className="mt-1 text-[10px] leading-4 text-white/55">
                    Helpful services, clear information, and a more useful path from search to your website.
                  </p>
                </div>
                <div className="mt-3 flex items-end gap-1 border-t border-white/10 pt-2">
                  <span className="mr-auto text-[8px] uppercase tracking-wider text-white/35">Visibility signals · demo</span>
                  {visibilityBars.map((height, index) => (
                    <motion.span
                      key={index}
                      className="w-1.5 bg-lime-300/70"
                      initial={false}
                      animate={{ height: `${auditState === 'optimized' ? height : Math.max(14, height * 0.38)}%` }}
                      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.025 }}
                    />
                  ))}
                  <TrendingUp size={13} className="ml-1 shrink-0 text-lime-300" />
                </div>
              </div>
            </div>
            <p className="border-t border-white/10 px-4 py-3 text-[9px] leading-4 text-white/40 md:px-6">
              Demo only. No website is scanned, and these scores do not represent client results or predict rankings.
            </p>
          </div>

          <aside className="border border-black/10 bg-white p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pine">What we optimize</p>
                <h3 className="mt-1 font-display text-2xl text-ink">Six connected areas</h3>
              </div>
              <Code2 size={18} className="mt-1 text-pine" />
            </div>
            <p className="mt-2 text-xs leading-5 text-ink/55">Select an area to see an illustrative before-and-after.</p>
            <div className="mt-4 divide-y divide-black/10">
              {areas.map((area, index) => {
                const AreaIcon = area.icon
                const isActive = activeArea === area.id

                return (
                  <button
                    key={area.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="seo-area-detail"
                    onMouseEnter={() => setActiveArea(area.id)}
                    onFocus={() => setActiveArea(area.id)}
                    onClick={() => setActiveArea(area.id)}
                    className={`group flex min-h-12 w-full items-center gap-3 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine ${isActive ? 'text-pine' : 'text-ink/65 hover:text-ink'}`}
                  >
                    <span className={`w-6 text-[10px] tabular-nums ${isActive ? 'text-pine' : 'text-ink/35'}`}>0{index + 1}</span>
                    <AreaIcon size={15} className={isActive ? 'text-pine' : 'text-ink/40'} />
                    <span className="flex-1 text-xs font-medium">{area.name}</span>
                    <ChevronRight size={14} className={`transition-transform ${isActive ? 'translate-x-0.5 text-pine' : 'text-ink/30'}`} />
                  </button>
                )
              })}
            </div>
            <div className="mt-4 flex items-start gap-2 border-t border-black/10 pt-4 text-[10px] leading-4 text-ink/45">
              <Activity size={13} className="mt-0.5 shrink-0 text-pine" />
              <span>Actual recommendations depend on your website, market, and goals.</span>
            </div>
          </aside>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-pine/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl text-ink md:text-3xl">Ready to make your website easier to find?</p>
            <p className="mt-1 text-xs text-ink/55">Start with a real conversation about your website and goals.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex min-h-11 items-center gap-2 bg-pine px-4 text-xs font-semibold text-white transition-colors hover:bg-sage">
              Get an SEO Audit <ArrowRight size={15} />
            </a>
            <a href="mailto:hello@careflare.life?subject=Talk%20to%20an%20SEO%20Specialist" className="inline-flex min-h-11 items-center gap-2 border border-pine/25 px-4 text-xs font-semibold text-pine transition-colors hover:bg-pine/5">
              Talk to an SEO Specialist <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <p id="seo-area-detail" className="sr-only" aria-live="polite">
          {selectedArea.name}. Before: {selectedArea.before.join(', ')}. After: {selectedArea.after.join(', ')}.
        </p>
        <p className="mt-4 text-[10px] leading-4 text-ink/45">
          Illustration of our optimization process — actual SEO recommendations depend on your website.
        </p>
      </div>
    </section>
  )
}
