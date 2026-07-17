import { useState } from 'react'

import { team } from '@/data/site'

function TeamCard({ member }: { member: (typeof team)[number] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-lg border border-border p-6">
      <img
        src={member.img}
        alt={member.name}
        className="size-16 rounded-full object-cover object-top"
      />
      <h3 className="mt-5 font-serif text-xl text-navy">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
      <p
        className={`mt-3 text-sm leading-relaxed text-navy/65 ${
          expanded ? 'whitespace-pre-line' : 'line-clamp-5'
        }`}
      >
        {member.bio}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="mt-2 text-sm font-medium text-primary hover:underline"
      >
        {expanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  )
}

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
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
