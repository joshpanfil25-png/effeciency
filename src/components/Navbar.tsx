import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { navLinks, site } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-serif text-xl font-bold text-navy"
          aria-label={`${site.name} — home`}
        >
          Efficiency<span className="text-gradient"> Media</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={{ pathname: item.to, hash: item.hash }}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to={{ pathname: '/', hash: '#contact' }}>Get in touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col py-3" aria-label="Mobile">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={{ pathname: item.to, hash: item.hash }}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-navy/80 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                onClick={() => setOpen(false)}
              >
                Get in touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
