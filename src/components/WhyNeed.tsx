import { ArrowRight, Globe2, MapPin, Megaphone, SearchCheck } from 'lucide-react'

const steps = [
  { title: 'Website', detail: 'Your online home', icon: Globe2 },
  { title: 'SEO', detail: 'Make it easy to understand', icon: SearchCheck },
  { title: 'Google visibility', detail: 'Help customers find you', icon: MapPin },
  { title: 'Marketing', detail: 'Turn discovery into action', icon: Megaphone },
]

export default function WhyNeed() {
  return (
    <section className="border-t border-sage/15 bg-sage/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-9 max-w-2xl md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pine">From site to discovery</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">A website is the start. Visibility is the journey.</h2>
        </div>

        <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-stretch md:gap-0">
          {steps.map((step, index) => {
            const StepIcon = step.icon
            return (
              <div key={step.title} className="flex min-w-0 flex-col items-center md:flex-1 md:flex-row">
                <div className="flex min-h-24 w-full items-center gap-4 border border-black/5 bg-white/75 p-4 md:min-h-44 md:flex-col md:justify-center md:gap-3 md:p-5 md:text-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine text-lime-300 md:h-16 md:w-16">
                    <StepIcon size={25} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink/60">{step.detail}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="flex h-7 shrink-0 items-center justify-center text-pine/60 md:w-9">
                    <ArrowRight className="rotate-90 md:rotate-0" size={18} strokeWidth={1.6} />
                  </span>
                )}
              </div>
            )
          })}
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-pine">
          <SearchCheck size={17} />
          A stronger digital presence, step by step.
        </p>
      </div>
    </section>
  )
}
