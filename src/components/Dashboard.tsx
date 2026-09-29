import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Activity, ArrowUpRight, BarChart3, Check, FileText, MapPin, MousePointerClick, Search, ShieldCheck, Users } from 'lucide-react'

const tabs = {
  SEO: {
    icon: FileText,
    summary: 'Site health and organic discovery signals',
    metrics: [
      { label: 'Organic visibility', value: '42', context: 'Visibility index', icon: Search },
      { label: 'Keywords tracked', value: '86', context: 'Tracked terms', icon: BarChart3 },
      { label: 'Indexed pages', value: '34', context: 'Pages found', icon: FileText },
      { label: 'Technical health', value: '78', context: 'Health score', icon: ShieldCheck },
    ],
    chart: [24, 32, 28, 40, 36, 48, 43, 56, 52, 64, 60, 74, 67, 82],
    events: ['Page structure reviewed', 'Search topic mapped', 'Technical signal recorded'],
  },
  Google: {
    icon: MapPin,
    summary: 'Search and local profile activity',
    metrics: [
      { label: 'Search impressions', value: '12.4k', context: 'Search visibility', icon: Search },
      { label: 'Search clicks', value: '640', context: 'Website visits', icon: MousePointerClick },
      { label: 'Local visibility', value: '55', context: 'Visibility index', icon: MapPin },
      { label: 'Profile interactions', value: '210', context: 'Profile activity', icon: Users },
    ],
    chart: [30, 37, 33, 48, 42, 51, 47, 62, 55, 69, 63, 77, 72, 88],
    events: ['Search appearance reviewed', 'Profile interaction recorded', 'Local signals checked'],
  },
  Traffic: {
    icon: Activity,
    summary: 'Website visits and engagement signals',
    metrics: [
      { label: 'Organic visitors', value: '1,820', context: 'Search visits', icon: Users },
      { label: 'Returning visitors', value: '22%', context: 'Visitor mix', icon: Activity },
      { label: 'Top landing page', value: '/services', context: 'Entry page', icon: FileText },
      { label: 'Avg. engagement', value: '2:14', context: 'Time engaged', icon: MousePointerClick },
    ],
    chart: [22, 29, 26, 38, 35, 44, 41, 53, 49, 61, 57, 68, 63, 79],
    events: ['Landing page opened', 'Engagement signal recorded', 'Returning visit noted'],
  },
  Leads: {
    icon: ArrowUpRight,
    summary: 'Enquiries and customer actions',
    metrics: [
      { label: 'Calls', value: '38', context: 'Contact actions', icon: MousePointerClick },
      { label: 'Forms', value: '17', context: 'Enquiry actions', icon: FileText },
      { label: 'Inquiries', value: '24', context: 'Lead activity', icon: Users },
      { label: 'Direction requests', value: '41', context: 'Local actions', icon: MapPin },
    ],
    chart: [18, 24, 22, 31, 28, 38, 34, 45, 42, 53, 48, 59, 54, 68],
    events: ['Contact path reviewed', 'Enquiry event recorded', 'Next-step interaction noted'],
  },
} as const

type DashboardTab = keyof typeof tabs

export default function Dashboard() {
  const [tab, setTab] = useState<DashboardTab>('Google')
  const reduceMotion = useReducedMotion()
  const current = tabs[tab]
  const CurrentIcon = current.icon

  return (
    <section id="dashboard" className="border-t border-white/10 bg-ink py-16 text-mist md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">Measurement &amp; insight</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">See what we actually track.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">A clear view of the signals that help guide smarter next steps.</p>
          </div>
          <span className="inline-flex items-center gap-2 self-start border border-lime-300/20 bg-lime-300/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-lime-200 md:self-auto">
            <span className="h-1.5 w-1.5 bg-lime-300" /> Illustrative data · no live connections
          </span>
        </div>

        <div className="mt-7 inline-flex max-w-full gap-1 overflow-x-auto border border-white/10 bg-white/[0.025] p-1" role="tablist" aria-label="Dashboard demo views">
          {(Object.keys(tabs) as DashboardTab[]).map((t) => {
            const TabIcon = tabs[t].icon
            const isActive = tab === t

            return (
            <button
              key={t}
              id={`dashboard-tab-${t.toLowerCase()}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="dashboard-panel"
              onClick={() => setTab(t)}
              className={`inline-flex min-h-9 shrink-0 items-center gap-2 px-3 text-xs transition-colors ${isActive ? 'bg-lime-300 text-ink' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}
            >
              <TabIcon size={14} /> {t}
            </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            id="dashboard-panel"
            role="tabpanel"
            aria-labelledby={`dashboard-tab-${tab.toLowerCase()}`}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="mt-4 overflow-hidden border border-white/10 bg-white/[0.035]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center bg-lime-300/10 text-lime-300"><CurrentIcon size={16} /></span>
                <div>
                  <p className="text-xs font-medium text-white/85">{tab} overview</p>
                  <p className="mt-0.5 text-[9px] text-white/40">{current.summary}</p>
                </div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.12em] text-white/35">Sample period · illustrative</span>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
              <div className="min-w-0 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">Signal activity</p>
                    <p className="mt-1 text-xs text-white/70">A sample trend view, not connected analytics</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[9px] text-lime-200"><Activity size={12} /> Demo view</span>
                </div>

                <div className="mt-5 flex h-32 items-end gap-1 border-b border-l border-white/10 px-2 pb-2 sm:h-40 sm:gap-1.5">
                  {current.chart.map((height, index) => (
                    <motion.div
                      key={`${tab}-${index}`}
                      className="relative h-full flex-1 origin-bottom bg-lime-300/55"
                      initial={reduceMotion ? false : { scaleY: 0.08, opacity: 0.35 }}
                      animate={{ scaleY: height / 100, opacity: 0.4 + index / 28 }}
                      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.025 }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[8px] uppercase tracking-[0.1em] text-white/30">
                  <span>Earlier</span><span>Sample activity</span><span>Later</span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
                  {current.metrics.map((metric) => {
                    const MetricIcon = metric.icon

                    return (
                      <div key={metric.label} className="min-w-0 bg-[#101a17] p-3 sm:p-4">
                        <div className="flex items-start justify-between gap-2">
                          <p className="min-h-8 text-[9px] leading-4 text-white/50">{metric.label}</p>
                          <MetricIcon size={13} className="shrink-0 text-lime-300/70" />
                        </div>
                        <p className="mt-2 truncate font-display text-2xl tabular-nums text-white sm:text-3xl">{metric.value}</p>
                        <p className="mt-1 truncate text-[8px] uppercase tracking-wider text-white/35">{metric.context}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <aside className="border-t border-white/10 p-4 sm:p-5 lg:border-l lg:border-t-0">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">Activity log</p>
                    <p className="mt-1 text-xs text-white/70">Signals, not claims</p>
                  </div>
                  <span className="border border-white/10 px-2 py-1 text-[8px] uppercase tracking-wider text-white/40">Demo feed</span>
                </div>
                <div className="mt-5 space-y-4">
                  {current.events.map((event, index) => (
                    <div key={event} className="flex items-start gap-2.5">
                      <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center ${index === 0 ? 'bg-lime-300/10 text-lime-300' : 'bg-white/5 text-white/40'}`}>
                        {index === 0 ? <Check size={10} /> : <Activity size={10} />}
                      </span>
                      <div>
                        <p className="text-[10px] leading-4 text-white/75">{event}</p>
                        <p className="mt-1 text-[8px] uppercase tracking-wider text-white/30">Illustrative activity</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="flex items-center gap-2 text-[9px] leading-4 text-white/45">
                    <ShieldCheck size={13} className="shrink-0 text-lime-300/70" /> No analytics or advertising platform connected.
                  </p>
                </div>
              </aside>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex items-center gap-2 text-[9px] leading-4 text-white/35">
          <Activity size={12} className="shrink-0" /> All figures and trends shown here are illustrative demo data, not actual client results.
        </div>
      </div>
    </section>
  )
}
