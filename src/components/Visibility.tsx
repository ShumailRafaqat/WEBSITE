import { useState } from 'react'

const tabs = ['Search', 'Maps', 'Business Profile', 'Local'] as const

export default function Visibility() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Maps')
  return (
    <section id="visibility" className="border-t border-sage/15 bg-sage/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-4xl md:text-5xl">Google visibility is an ecosystem, not one listing.</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-sm ${tab === t ? 'bg-ink text-mist' : 'border border-black/10'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-black/10 bg-white/70 p-6">
          {tab === 'Search' && <p>Business appears in relevant searches when intent, content, and signals align.</p>}
          {tab === 'Maps' && (
            <div>
              <p className="text-sm text-ink/60">Query: “barber near me”</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                {['North Cut', 'Your Shop (demo)', 'Oak & Razor'].map((n) => (
                  <div key={n} className="rounded-2xl bg-mist p-4">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === 'Business Profile' && (
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              {['Name', 'Category', 'Hours', 'Photos', 'Reviews', 'Phone', 'Website', 'Directions'].map((x) => (
                <li key={x} className="rounded-xl bg-mist px-4 py-3">
                  {x}
                </li>
              ))}
            </ul>
          )}
          {tab === 'Local' && (
            <p>Local optimization helps Google represent the business consistently across nearby intent.</p>
          )}
          <p className="mt-4 text-xs text-ink/40">Illustrative ecosystem — no Maps rank guarantees.</p>
        </div>
      </div>
    </section>
  )
}
