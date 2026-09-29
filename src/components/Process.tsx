import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Activity, ArrowRight, ClipboardCheck, Compass, Lightbulb, RefreshCw, Wrench } from 'lucide-react'

const steps = [
  {
    title: 'Discovery',
    summary: 'First, we learn what makes your business different.',
    detail: 'We get to know your goals, customers, service area, and the searches that matter most.',
    outcome: 'A clear picture of your market and priorities.',
    icon: Compass,
  },
  {
    title: 'Audit',
    summary: 'We find what is helping and what is holding you back.',
    detail: 'Your website, local listings, search presence, and key competitors are reviewed together.',
    outcome: 'A focused view of your strongest opportunities.',
    icon: ClipboardCheck,
  },
  {
    title: 'Strategy',
    summary: 'You get a plan shaped around your business.',
    detail: 'We prioritize SEO, local visibility, content, and campaign work around your goals.',
    outcome: 'A practical roadmap with clear next steps.',
    icon: Lightbulb,
  },
  {
    title: 'Implementation',
    summary: 'The plan becomes real improvements.',
    detail: 'We make agreed website and profile updates, publish useful content, and launch campaigns.',
    outcome: 'Relevant improvements put into action.',
    icon: Wrench,
  },
  {
    title: 'Monitoring',
    summary: 'We keep track of the signals that matter.',
    detail: 'Search visibility, site activity, and customer actions are reviewed over time.',
    outcome: 'A clearer view of what is changing.',
    icon: Activity,
  },
  {
    title: 'Optimization',
    summary: 'We learn, adjust, and keep improving.',
    detail: 'Performance insights help guide the next set of refinements and opportunities.',
    outcome: 'Ongoing improvements informed by data.',
    icon: RefreshCw,
  },
]

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeStep = steps[activeIndex]
  const ActiveIcon = activeStep.icon
  const progress = ((activeIndex + 1) / steps.length) * 100

  return (
    <section id="process" className="bg-mist py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pine">How we work</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">A clear process. Measurable progress.</h2>
          <p className="mt-4 text-sm leading-6 text-ink/65">
            Every stage builds on the last, so you know what is happening and why.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 xl:grid-cols-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon
            const isActive = activeIndex === index

            return (
              <button
                key={step.title}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`group flex min-h-24 min-w-0 items-center gap-3 border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 md:min-h-28 md:flex-col md:items-start md:p-4 ${
                  isActive
                    ? 'border-pine bg-pine text-white'
                    : 'border-black/10 bg-mist/55 text-ink hover:border-pine/40 hover:bg-white'
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center ${
                    isActive ? 'bg-lime-300 text-ink' : 'bg-pine/10 text-pine'
                  }`}
                >
                  <StepIcon size={18} strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-[10px] font-semibold tracking-[0.12em] ${isActive ? 'text-lime-200' : 'text-ink/40'}`}>
                    0{index + 1}
                  </span>
                  <span className="mt-1 block break-words text-sm font-medium leading-tight">{step.title}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 h-1 overflow-hidden bg-pine/10" role="progressbar" aria-label="Process stage" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={activeIndex + 1}>
          <motion.div
            className="h-full bg-lime-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeStep.title}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="mt-4 grid gap-6 bg-ink p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">
                  Step 0{activeIndex + 1} <span className="text-white/35">/ 0{steps.length}</span>
                </span>
                <span className="h-px w-10 bg-lime-300/50" />
                <span className="text-xs text-white/55">{Math.round(progress)}% through the process</span>
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl">{activeStep.summary}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">{activeStep.detail}</p>
              <p className="mt-5 flex items-start gap-2 text-sm font-medium text-lime-200">
                <ArrowRight size={16} className="mt-0.5 shrink-0" />
                {activeStep.outcome}
              </p>
            </div>
            <div className="hidden h-28 w-28 items-center justify-center border border-white/15 bg-white/[0.04] text-lime-300 md:flex">
              <ActiveIcon size={44} strokeWidth={1.2} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
