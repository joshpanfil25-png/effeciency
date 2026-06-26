import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

// lucide-react dropped brand glyphs, so we inline a small LinkedIn mark.
function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  )
}

import { navLinks, site } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/80">
      <div className="container grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="font-serif text-2xl font-bold text-white">
            Efficiency<span className="text-teal-light"> Media</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={{ pathname: item.to, hash: item.hash }}
                  className="text-white/70 transition-colors hover:text-teal-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Reach us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-white/70 hover:text-teal-light"
              >
                <Mail size={15} /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-2 text-white/70 hover:text-teal-light"
              >
                <Phone size={15} /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-teal-light"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
            </li>
            <li className="text-white/50">{site.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
