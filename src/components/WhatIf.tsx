import { useState } from 'react'

const problems: Record<string, string> = {
  "My website isn't getting traffic":
    'We examine intent coverage, indexation, internal links, and whether pages answer real searches.',
  'My competitors appear above me':
    'Search query → competitor result → your result → analysis → optimization areas → visibility monitoring.',
  "My Google Business Profile isn't getting attention":
    'Categories, photos, reviews, posts, NAP consistency, and local relevance are reviewed together.',
  "Customers can't find me locally":
    'Maps presence, proximity signals, and on-site local pages are mapped against nearby demand.',
  'I get visitors but few inquiries':
    'We look at landing relevance, proof, contact paths, and whether traffic matches offer.',
  "I don't know what is hurting my SEO":
    'A structured audit separates technical, content, authority, and local issues so work is sequenced.',
}

export default function WhatIf() {
  const keys = Object.keys(problems)
  const [sel, setSel] = useState(keys[1])
  return (
    <section className="border-t border-black/5 bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-4xl md:text-5xl">What happens when you fix the right things?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            {keys.map((k) => (
              <button
                key={k}
                onClick={() => setSel(k)}
                className={`block w-full rounded-xl border px-4 py-3 text-left text-sm ${
                  sel === k ? 'border-pine bg-pine/5' : 'border-black/10'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6">
            <p className="text-xs uppercase tracking-widest text-pine">Investigation path</p>
            <p className="mt-4 text-ink/75">{problems[sel]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
