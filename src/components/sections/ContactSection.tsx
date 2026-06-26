import { ArrowRight, Mail, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container">
        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-teal-dark via-teal to-navy px-8 py-16 text-center text-white sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            Let’s build a media plan that pays for itself.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us about your goals and your budget. We’ll show you where the
            efficiency is hiding.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-navy hover:bg-white/90"
            >
              <a href={`mailto:${site.email}`}>
                <Mail size={18} /> {site.email}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-navy"
            >
              <a href={`tel:${site.phone.replace(/[^0-9]/g, '')}`}>
                <Phone size={18} /> {site.phone}
              </a>
            </Button>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/70">
            Typically respond within one business day <ArrowRight size={15} />
          </p>
        </div>
      </div>
    </section>
  )
}
