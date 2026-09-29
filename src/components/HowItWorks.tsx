import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Compass,
  Eye,
  SearchCheck,
  Wrench,
} from 'lucide-react'

const stages = [
  {
    id: 'discover',
    title: 'Discover',
    icon: Compass,
    signal: 'Your market',
    work: 'Map customer searches',
    outcome: 'SEO priorities',
  },
  {
    id: 'analyze',
    title: 'Analyze',
    icon: SearchCheck,
    signal: 'Site + competitors',
    work: 'Find visibility gaps',
    outcome: 'Audit findings',
  },
  {
    id: 'optimize',
    title: 'Optimize',
    icon: Wrench,
    signal: 'Pages + profiles',
    work: 'Fix search essentials',
    outcome: 'Search-ready pages',
  },
  {
    id: 'visibility',
    title: 'Improve Visibility',
    icon: Eye,
    signal: 'Google + Maps',
    work: 'Build useful coverage',
    outcome: 'More ways to find you',
  },
  {
    id: 'measure',
    title: 'Measure',
    icon: BarChart3,
    signal: 'Clicks + calls',
    work: 'Track what changes',
    outcome: 'Clear next actions',
  },
]

export default function HowItWorks() {
  const [id, setId] = useState('analyze')
  const s = stages.find((x) => x.id === id)!
  const ActiveIcon = s.icon

  return (
    <section id="how" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-9 flex items-end justify-between gap-6 md:mb-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pine">SEO workflow</p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">SEO, made visible.</h2>
          </div>
          <span className="hidden h-14 w-14 items-center justify-center rounded-full bg-lime-300/50 text-pine sm:flex">
            <SearchCheck size={26} strokeWidth={1.7} />
          </span>
        </div>

        <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-start md:gap-0">
          {stages.map((stage, index) => {
            const StageIcon = stage.icon
            const isActive = id === stage.id

            return (
              <div key={stage.id} className="flex min-w-0 flex-col items-center md:flex-1 md:flex-row">
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setId(stage.id)}
                  className="group flex w-full items-center gap-4 border border-black/10 bg-mist/50 p-3 text-left transition-colors hover:border-pine/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine md:min-h-36 md:flex-col md:justify-center md:gap-3 md:p-4 md:text-center"
                >
                  <span className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors md:h-16 md:w-16 ${isActive ? 'bg-pine text-lime-300' : 'bg-white text-pine group-hover:bg-pine/5'}`}>
                    <StageIcon size={25} strokeWidth={1.7} />
                    <span className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${isActive ? 'bg-lime-300 text-ink' : 'bg-ink/10 text-ink/60'}`}>
                      {index + 1}
                    </span>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink">{stage.title}</span>
                    <span className="mt-1 block text-xs text-ink/50">{stage.signal}</span>
                  </span>
                </button>
                {index < stages.length - 1 && (
                  <span aria-hidden="true" className="flex h-7 shrink-0 items-center justify-center text-pine/50 md:w-8 md:rotate-0">
                    <ArrowRight className="rotate-90 md:rotate-0" size={17} strokeWidth={1.6} />
                  </span>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid gap-4 border-t border-black/10 pt-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-300/50 text-pine">
              <ActiveIcon size={20} strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-pine">{s.title}</p>
              <p className="mt-1 text-sm text-ink/70">{s.work}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-[52px] text-sm font-medium text-ink sm:pl-0">
            <ArrowRight size={16} className="text-pine" />
            {s.outcome}
          </div>
        </div>
      </div>
    </section>
  )
}
