import { Quote } from 'lucide-react'

import { testimonials } from '@/data/site'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-navy py-24 text-white sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
            Results
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Clients who place real budgets.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg border border-white/10 bg-white/5 p-7"
            >
              <Quote className="size-7 text-teal-light" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-white/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="font-serif text-lg">{t.name}</div>
                <div className="text-sm text-white/55">{t.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
