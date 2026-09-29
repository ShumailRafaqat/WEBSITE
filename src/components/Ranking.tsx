import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin, Search, Sparkles } from 'lucide-react'

const queries = [
  {
    label: 'marketing agency near me',
    results: [
      { rank: 1, name: 'Northside Creative Co.', domain: 'northsidecreative.example', title: 'Marketing that moves local businesses forward', description: 'Brand strategy, digital campaigns, and practical growth support for local teams.' },
      { rank: 2, name: 'Canton Growth Studio', domain: 'cantongrowth.example', title: 'A smarter digital marketing partner', description: 'Digital strategy and creative services for ambitious businesses in Canton.' },
      { rank: 3, name: 'Market House Digital', domain: 'markethousedigital.example', title: 'Digital campaigns built around your goals', description: 'Plan, launch, and improve your next digital marketing campaign.' },
      { rank: 5, name: 'Careflare Visibility', domain: 'careflare.example', title: 'SEO and digital marketing for local businesses', description: 'Make your business easier to find with a considered visibility strategy.', own: true },
    ],
  },
  {
    label: 'local SEO services',
    results: [
      { rank: 1, name: 'Canton Search Partners', domain: 'cantonsearch.example', title: 'Local SEO with a clear plan', description: 'Technical, content, and local search improvements for growing teams.' },
      { rank: 2, name: 'North Georgia Search Co.', domain: 'ngsearch.example', title: 'Be more visible in local search', description: 'SEO services, search strategy, and local business support.' },
      { rank: 3, name: 'Careflare Visibility', domain: 'careflare.example', title: 'Local SEO and search visibility', description: 'A practical approach to help customers discover your business.', own: true },
      { rank: 6, name: 'Brightpath Digital', domain: 'brightpathdigital.example', title: 'Search marketing for local brands', description: 'Build a stronger search presence with expert digital support.' },
    ],
  },
  {
    label: 'digital marketing Canton GA',
    results: [
      { rank: 1, name: 'Canton Growth Studio', domain: 'cantongrowth.example', title: 'Digital marketing in Canton, Georgia', description: 'Thoughtful digital marketing for local service businesses.' },
      { rank: 2, name: 'Market House Digital', domain: 'markethousedigital.example', title: 'Digital strategy for business growth', description: 'Campaign planning and digital services for your next stage.' },
      { rank: 5, name: 'Northside Creative Co.', domain: 'northsidecreative.example', title: 'Creative marketing for local businesses', description: 'Content and campaigns that make your brand easier to find.' },
      { rank: 8, name: 'Careflare Visibility', domain: 'careflare.example', title: 'SEO, rankings, and digital marketing', description: 'Connect your business with customers searching for what you offer.', own: true },
    ],
  },
]

export default function Ranking() {
  const [activeQuery, setActiveQuery] = useState(0)
  const [activeResult, setActiveResult] = useState(3)
  const reduceMotion = useReducedMotion()
  const query = queries[activeQuery]
  const result = query.results[activeResult]

  function selectQuery(index: number) {
    setActiveQuery(index)
    setActiveResult(queries[index].results.findIndex((item) => item.own))
  }

  return (
    <section id="ranking" className="bg-sage/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <header className="mb-8 max-w-3xl md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-pine">Search visibility</p>
          <h2 className="font-display text-4xl leading-[1.06] text-ink md:text-6xl">
            When customers search, where do they find you?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink/65 md:text-base">
            Search results change with the query, location, and context. Explore this fictional example to see how visibility can vary.
          </p>
        </header>

        <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
          <div className="overflow-hidden border border-black/10 bg-white/85">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2 text-xs font-medium text-ink/70">
                <Search size={15} className="text-pine" /> Search preview
              </div>
              <span className="border border-pine/20 bg-pine/5 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-pine">
                Illustrative results
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex min-h-11 items-center gap-3 border border-black/10 bg-mist/60 px-3">
                <Search size={15} className="shrink-0 text-ink/40" />
                <span className="min-w-0 flex-1 truncate text-xs text-ink/80">{query.label}</span>
                <span className="hidden border-l border-black/10 pl-3 text-[9px] uppercase tracking-wider text-ink/40 sm:block">Sample query</span>
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Sample search queries">
                {queries.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    aria-pressed={activeQuery === index}
                    onClick={() => selectQuery(index)}
                    className={`min-h-8 shrink-0 border px-3 text-[10px] transition-colors ${activeQuery === index ? 'border-pine bg-pine text-white' : 'border-black/10 bg-white text-ink/65 hover:border-pine/40 hover:text-pine'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-b border-black/10 pb-2">
                <p className="text-[10px] text-ink/50">Organic results <span className="px-1 text-ink/25">/</span> demo environment</p>
                <p className="hidden items-center gap-1 text-[9px] text-ink/40 sm:flex"><MapPin size={11} /> Example location</p>
              </div>

              <ol className="divide-y divide-black/5">
                {query.results.map((item, index) => {
                  const isActive = activeResult === index

                  return (
                    <li key={`${query.label}-${item.name}`}>
                      <button
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveResult(index)}
                        className={`relative flex w-full gap-3 py-4 text-left transition-colors ${isActive ? 'bg-pine/[0.035]' : 'hover:bg-mist/45'}`}
                      >
                        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-[10px] font-semibold tabular-nums ${item.own ? 'bg-pine text-white' : 'bg-mist text-ink/45'}`}>
                          {String(item.rank).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-[10px] text-ink/55">{item.domain}</span>
                            {item.own && <span className="border border-pine/15 bg-pine/5 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-pine">Sample listing</span>}
                          </span>
                          <span className="mt-1 block text-sm font-medium leading-5 text-[#245f43]">{item.title}</span>
                          <span className="mt-1 block text-[10px] leading-4 text-ink/55">{item.description}</span>
                        </span>
                        <span className={`hidden shrink-0 items-center self-center text-[9px] font-medium sm:flex ${isActive ? 'text-pine' : 'text-ink/30'}`}>
                          {isActive ? 'Selected' : <ArrowRight size={13} />}
                        </span>
                        {isActive && <motion.span layoutId="ranking-active-result" className="absolute inset-y-3 left-0 w-0.5 bg-lime-600" />}
                      </button>
                    </li>
                  )
                })}
              </ol>

              <p className="mt-3 text-[9px] leading-4 text-ink/40">
                Fictional businesses and positions for demonstration. This preview is not a live Google result.
              </p>
            </div>
          </div>

          <div className="border border-pine/20 bg-ink p-5 text-white sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">Selected result</p>
              <span className="flex items-center gap-1 text-[9px] text-lime-200"><Sparkles size={12} /> Demo only</span>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${query.label}-${result.name}`}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              >
                <p className="mt-6 text-[9px] font-medium uppercase tracking-[0.15em] text-lime-200/75">Sample position</p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="font-display text-6xl leading-none tabular-nums">#{String(result.rank).padStart(2, '0')}</span>
                  <span className="pb-1 text-xs text-white/45">for this query</span>
                </div>
                <h3 className="mt-5 text-sm font-semibold">{result.name}</h3>
                <p className="mt-1 text-[10px] text-white/45">{result.domain}</p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-white/40">Visibility range</p>
                  <div className="mt-3 grid grid-cols-10 gap-1" aria-label={`Illustrative position ${result.rank} out of 10`}>
                    {Array.from({ length: 10 }, (_, index) => (
                      <motion.span
                        key={index}
                        className={`h-1.5 ${index + 1 === result.rank ? 'bg-lime-300' : index + 1 < result.rank ? 'bg-white/35' : 'bg-white/10'}`}
                        animate={index + 1 === result.rank && !reduceMotion ? { opacity: [0.55, 1] } : { opacity: 1 }}
                        transition={{ duration: 1.2, repeat: index + 1 === result.rank && !reduceMotion ? Infinity : 0, repeatType: 'reverse' }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[8px] uppercase tracking-wider text-white/35">
                    <span>More visible</span><span>Further down</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {[
                    ['Search relevance', 'How closely the page fits the query'],
                    ['Page quality', 'How useful and clear the content is'],
                    ['Local context', 'How location can shape results'],
                  ].map(([title, detail]) => (
                    <div key={title} className="flex items-start gap-2 text-[10px]">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-lime-300/80" />
                      <span><span className="font-medium text-white/80">{title}</span><span className="text-white/40"> · {detail}</span></span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="mt-5 border-t border-white/10 pt-3 text-[9px] leading-4 text-white/40">
              Rankings vary by query, location, and time. SEO work cannot guarantee a position.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-pine/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-ink/55">Better visibility starts with the right pages, useful content, and a consistent local presence.</p>
          <a href="#seo" className="inline-flex min-h-10 items-center gap-2 self-start text-xs font-semibold text-pine transition-colors hover:text-sage">
            Explore SEO optimization <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
