import { ArrowRight, Mail, MapPin } from 'lucide-react'

const exploreLinks = [
  ['Home', '#top'],
  ['Our process', '#how'],
  ['Visibility check', '#cta'],
] as const

const serviceLinks = [
  ['SEO Optimization', '#seo'],
  ['Digital marketing', '#marketing'],
  ['Google ranking & visibility', '#rankings'],
] as const

const MAP_QUERY = '225 Reformation Pkwy Ste 200, Canton, GA 30114'
const MAP_SEARCH = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 bg-mist text-ink">
      <div className="border-b border-white/10 bg-pine text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">
              Careflare visibility
            </p>
            <p className="mt-1 font-display text-2xl">Ready to see where you stand?</p>
          </div>
          <a
            href="#cta"
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start bg-lime-400 px-5 text-sm font-semibold text-ink transition-colors hover:bg-lime-300 sm:self-auto"
          >
            Request a visibility check <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1.35fr] lg:gap-8 lg:py-12">
        <div>
          <a href="#top" className="inline-flex items-baseline gap-1 font-display text-3xl text-ink">
            Careflare<span className="text-pine">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-6 text-ink/65">
            SEO, rankings, and digital marketing built to make your business visible.
          </p>
          <a
            href="https://wa.me/12402882006"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-pine hover:text-sage"
          >
            Message us on WhatsApp <ArrowRight size={15} />
          </a>
          <a
            href="mailto:hello@careflare.life"
            className="mt-3 flex items-center gap-2 text-sm text-ink/65 transition-colors hover:text-pine"
          >
            <Mail size={15} /> hello@careflare.life
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {exploreLinks.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-block text-ink/70 transition duration-200 hover:translate-x-1 hover:text-pine"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceLinks.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-block text-ink/70 transition duration-200 hover:translate-x-1 hover:text-pine"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Visit us</h2>
          <a
            href={MAP_SEARCH}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-start gap-2 text-sm leading-5 text-ink/75 hover:text-pine"
          >
            <MapPin size={16} className="mt-0.5 shrink-0 text-pine" />
            <span>
              225 Reformation Pkwy Ste 200
              <br />
              Canton, GA 30114
            </span>
          </a>
          <a
            href={MAP_SEARCH}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Careflare's Canton location in Google Maps"
            className="group mt-4 block overflow-hidden border border-black/10 bg-white"
          >
            <iframe
              title="Map to 225 Reformation Pkwy Ste 200, Canton, GA 30114"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none h-36 w-full border-0 transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </div>
      </div>

      <div className="bg-ink text-white/65">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 text-xs sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {year} Careflare Visibility. Thanks for considering us for your growth.</p>
          <p className="sm:text-right">Canton, Georgia · hello@careflare.life</p>
        </div>
      </div>
    </footer>
  )
}