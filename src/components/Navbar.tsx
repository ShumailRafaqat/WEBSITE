import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['Home', '#top'],
    ['Services', '#offerings'],
    ['Problem', '#problem'],
    ['Process', '#how'],
    ['SEO', '#seo'],
    ['Marketing', '#marketing'],
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
        <a href="#top" className="shrink-0 font-display text-2xl tracking-tight">
          Careflare
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-white/70 transition-colors hover:text-lime-300">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="ml-auto shrink-0 bg-lime-400 px-2.5 py-2 text-[11px] font-medium text-ink hover:bg-lime-300 sm:px-4 sm:text-sm md:ml-0"
        >
          Visibility Check
        </a>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${menuOpen ? 'block' : 'hidden'} border-t border-white/10 bg-ink px-4 py-3 md:hidden`}
      >
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1">
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center border-b border-white/10 px-2 text-sm text-white/75 transition-colors hover:text-lime-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
