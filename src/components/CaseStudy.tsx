import { useState } from 'react'

const steps = [
  { t: 'The Problem', d: 'Low visibility and weak search presence for a local service brand.' },
  { t: 'The Analysis', d: 'SEO + Google + competitor analysis to sequence work.' },
  { t: 'The Optimization', d: 'Website, content, local presence, and technical improvements.' },
  { t: 'Monitoring', d: 'Search visibility and engagement tracked over time.' },
  { t: 'Business Impact', d: 'Sample metrics only — labeled illustrative example.' },
]

export default function CaseStudy() {
  const [i, setI] = useState(0)
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-4xl">From low visibility to a stronger online presence</h2>
        <p className="mt-2 text-xs uppercase tracking-widest text-pine">Illustrative example · fictional business</p>
        <div className="mt-8 flex gap-2 overflow-x-auto">
          {steps.map((s, idx) => (
            <button
              key={s.t}
              onClick={() => setI(idx)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
                i === idx ? 'bg-ink text-mist' : 'border border-black/10 bg-white'
              }`}
            >
              {idx + 1}. {s.t}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-black/10 bg-white p-8">
          <h3 className="font-display text-3xl">{steps[i].t}</h3>
          <p className="mt-3 text-ink/70">{steps[i].d}</p>
        </div>
      </div>
    </section>
  )
}
