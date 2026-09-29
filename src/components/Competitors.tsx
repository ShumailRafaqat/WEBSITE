import { useState } from 'react'

const areas = [
  {
    t: 'Content',
    d: 'Relevant content helps search engines understand what you offer and which searches you may match.',
  },
  {
    t: 'Local Presence',
    d: 'Complete, consistent business information improves how you appear in local experiences.',
  },
  {
    t: 'Technical SEO',
    d: 'Technical improvements help search engines crawl and understand the website.',
  },
]

export default function Competitors() {
  const [open, setOpen] = useState<string | null>('Content')
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-4xl md:text-5xl">Competitor visibility, made visible</h2>
        <p className="mt-3 text-ink/60">Query: “Best restaurant in Canton” · educational demo</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['Competitor A', 'High'],
            ['Competitor B', 'Medium'],
            ['Your Business', 'Low'],
          ].map(([n, v]) => (
            <div key={n} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm text-ink/50">{n}</div>
              <div className="mt-2 font-display text-3xl">{v} visibility</div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-2">
          {areas.map((a) => (
            <button
              key={a.t}
              onClick={() => setOpen(open === a.t ? null : a.t)}
              className="block w-full rounded-2xl border border-black/10 bg-white p-4 text-left"
            >
              <div className="font-medium">{a.t}</div>
              {open === a.t && <p className="mt-2 text-sm text-ink/65">{a.d}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
