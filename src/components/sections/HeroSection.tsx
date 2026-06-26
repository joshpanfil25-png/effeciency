import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { stats } from '@/data/site'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-warm pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Strategic Media Planning &amp; Buying
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-navy sm:text-6xl">
            Media that makes every dollar{' '}
            <span className="text-gradient">work harder.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
            We plan and buy integrated, omnichannel campaigns engineered around
            one thing: measurable business outcomes. No vanity metrics — just
            efficient growth.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to={{ pathname: '/', hash: '#contact' }}>
                Start a conversation <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to={{ pathname: '/', hash: '#services' }}>
                See what we do
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-navy/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
