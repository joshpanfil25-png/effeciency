import { CheckCircle2 } from 'lucide-react'

const points = [
  'Independent and senior — no junior hand-offs',
  'Channel-agnostic recommendations, always',
  'Transparent fees and media costs',
  'Measurement built in from day one',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Who we are
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
            A senior team that treats your budget like our own.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Efficiency Media was built on a simple frustration: too many agencies
            sell reach and call it strategy. We do the opposite. Every plan starts
            with the outcome you need and works backward to the most efficient mix
            of channels to get there.
          </p>
          <p className="mt-4 leading-relaxed text-navy/70">
            The result is media that is accountable, transparent, and relentlessly
            optimized — backed by two decades of buying relationships.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-lg bg-warm p-5 text-navy/80"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="text-sm font-medium leading-snug">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
