const flow = [
  'Better visibility',
  'More relevant exposure',
  'More website / profile visits',
  'More opportunities to contact',
  'Potentially more leads',
]

export default function Impact() {
  return (
    <section className="bg-sand/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-4xl">Business impact as a process — not a promise</h2>
        <ol className="mt-10 space-y-3">
          {flow.map((f, i) => (
            <li key={f} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4">
              <span className="text-pine">0{i + 1}</span>
              <span>{f}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-ink/45">No revenue or lead guarantees. Direction of effect only.</p>
      </div>
    </section>
  )
}
