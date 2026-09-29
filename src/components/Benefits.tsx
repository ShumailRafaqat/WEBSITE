import { ArrowUpRight, BarChart3, Megaphone, SearchCheck } from 'lucide-react'

const items = [
  {
    s: 'SEO Optimization',
    w: 'Technical and on-page improvements that align your website with real search intent.',
    benefit: 'Grow organic discovery',
    href: '#seo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=82',
    alt: 'Analytics dashboard used to review website search performance',
    icon: SearchCheck,
  },
  {
    s: 'Marketing',
    w: 'Focused digital campaigns that turn attention into meaningful customer actions.',
    benefit: 'Turn interest into inquiries',
    href: '#marketing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=82',
    alt: 'Marketing team collaborating around a table',
    icon: Megaphone,
  },
  {
    s: 'Google Ranking & Visibility',
    w: 'Improve local search presence so nearby customers can discover your business.',
    benefit: 'Be easier to find nearby',
    href: '#seo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=82',
    alt: 'Digital performance charts used to track online visibility',
    icon: BarChart3,
  },
]

export default function Benefits() {
  return (
    <section id="offerings" className="bg-ink py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-9 flex flex-col justify-between gap-4 md:mb-11 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">What we offer</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">Get seen at every step.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/65">
            Practical services to help the right customers find you, choose you, and take action.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={item.s}
                className="group overflow-hidden border border-white/10 bg-white/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="relative aspect-[1.45] overflow-hidden bg-sand">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
                    0{index + 1} / Service
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center bg-lime-300/10 text-lime-300">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-2xl leading-tight">{item.s}</h3>
                  </div>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-white/70">{item.w}</p>
                  <div className="mt-4 border-t border-white/15 pt-3">
                    <p className="text-xs font-medium text-lime-300">{item.benefit}</p>
                    <a
                      href={item.href}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white transition-colors group-hover:text-lime-300"
                    >
                      Explore service <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
