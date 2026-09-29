import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

export default function FinalCta() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const subject = `Free visibility check request: ${formData.get('business')}`
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Business: ${formData.get('business')}`,
      `Website: ${formData.get('website') || 'Not provided'}`,
      `Main focus: ${formData.get('focus')}`,
    ].join('\n')

    window.location.href = `mailto:hello@careflare.life?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="cta" className="bg-pine py-16 text-mist md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div className="min-w-0 md:sticky md:top-28">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300">Free visibility check</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Let’s see where your business stands.
          </h2>
          <p className="mt-4 max-w-md leading-7 text-mist/75">
            Tell us a little about your business. We’ll take a look at how customers can find you online.
          </p>
          <a href="#how" className="mt-6 inline-flex items-center gap-2 text-sm text-mist/80 hover:text-white">
            See how the process works <ArrowRight size={16} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid min-w-0 grid-cols-1 gap-5 bg-white p-5 text-ink sm:p-8 lg:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Your name
            <input
              autoComplete="name"
              className="min-h-12 w-full min-w-0 border border-black/15 bg-mist/40 px-3 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15"
              name="name"
              placeholder="Jane Smith"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Work email
            <input
              autoComplete="email"
              className="min-h-12 w-full min-w-0 border border-black/15 bg-mist/40 px-3 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15"
              name="email"
              placeholder="jane@business.com"
              required
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Business name
            <input
              autoComplete="organization"
              className="min-h-12 w-full min-w-0 border border-black/15 bg-mist/40 px-3 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15"
              name="business"
              placeholder="Your business"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Website
            <input
              autoComplete="url"
              className="min-h-12 w-full min-w-0 border border-black/15 bg-mist/40 px-3 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15"
              name="website"
              placeholder="https://yourbusiness.com"
              type="url"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium lg:col-span-2">
            What would you like help with?
            <select
              className="min-h-12 w-full min-w-0 border border-black/15 bg-mist/40 px-3 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15"
              defaultValue="SEO and search rankings"
              name="focus"
            >
              <option>SEO and search rankings</option>
              <option>Google Business Profile and Maps</option>
              <option>Digital marketing</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-lime-400 px-5 text-sm font-semibold text-ink transition-colors hover:bg-lime-300 lg:col-span-2 lg:justify-between"
            type="submit"
          >
            Request My Free Visibility Check <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </section>
  )
}
