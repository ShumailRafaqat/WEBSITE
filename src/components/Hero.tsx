import { useEffect, useState } from 'react'
import { ArrowDown, Eye, Megaphone, Search, SearchCheck, Trophy, TrendingUp } from 'lucide-react'

const heroSlides = [
  {
    label: 'Team collaboration',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=80',
  },
  {
    label: 'Creative planning',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80',
  },
  {
    label: 'Business partnership',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-ink text-white md:min-h-[660px]"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.label}
              className="h-full w-full shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,17,19,0.94)_0%,rgba(8,17,19,0.82)_42%,rgba(8,17,19,0.38)_100%)]"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl -translate-y-12 items-center gap-10 px-5 pb-16 pt-24 md:-translate-y-24 md:grid-cols-[1fr_0.9fr] md:px-8 md:pb-20 md:pt-28">
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 border border-white/20 bg-black/20 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            Local search visibility
          </p>
          <h1 className="font-display text-4xl leading-[1.06] md:text-6xl">
            Get Found. Get Noticed. Get More Customers.
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium italic leading-7 text-white/85 md:text-lg">
            SEO, rankings, and digital marketing built to make your business visible.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-lime-400 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-lime-300"
            >
              Get Your Free Visibility Check <TrendingUp size={16} />
            </a>
            <a
              href="#how"
              className="border border-white/35 bg-white/5 px-5 py-3 text-sm text-white transition-colors hover:bg-white/15"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-5 flex items-center gap-2" role="group" aria-label="Hero background images">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                aria-label={`Show ${slide.label} background`}
                aria-pressed={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                className="flex h-5 items-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    activeSlide === index ? 'w-8 bg-lime-400' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              </button>
            ))}
            <span className="ml-1 text-[10px] tabular-nums text-white/55">
              {String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center">
          <div className="absolute inset-[7%] rounded-full border border-white/20" />
          <div className="absolute inset-[19%] rounded-full border border-white/15" />
          <div className="absolute inset-[29%] rounded-full bg-lime-400/20 shadow-[0_0_90px_rgba(163,230,53,0.22)] backdrop-blur-sm" />
          <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-lime-200/70 bg-lime-400 text-ink shadow-[0_0_55px_rgba(163,230,53,0.35)] md:h-36 md:w-36">
            <Search size={30} strokeWidth={1.7} />
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em]">Be seen</span>
          </div>
          <div className="absolute left-[4%] top-[18%] flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/90 text-pine shadow-lg md:h-14 md:w-14">
              <SearchCheck size={21} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/85">SEO</span>
          </div>
          <div className="absolute right-[4%] top-[22%] flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/90 text-pine shadow-lg md:h-14 md:w-14">
              <Trophy size={21} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/85">Ranking</span>
          </div>
          <div className="absolute bottom-[10%] left-[12%] flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/90 text-pine shadow-lg md:h-14 md:w-14">
              <Eye size={21} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/85">Visibility</span>
          </div>
          <div className="absolute bottom-[6%] right-[11%] flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/90 text-pine shadow-lg md:h-14 md:w-14">
              <Megaphone size={21} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/85">Marketing</span>
          </div>
          <span className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/65 md:flex">
            Built for local growth <ArrowDown size={14} />
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
    </section>
  )
}
