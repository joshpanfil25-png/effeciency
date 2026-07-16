import { team } from '@/data/site'

export default function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our people
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
            Senior practitioners on every account.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="rounded-lg border border-border p-6">
              <img
                src={m.img}
                alt={m.name}
                className="size-16 rounded-full object-cover object-top"
              />
              <h3 className="mt-5 font-serif text-xl text-navy">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
              <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-navy/65">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
