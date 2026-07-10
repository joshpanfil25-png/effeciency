import { Helmet } from 'react-helmet-async'

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import { site } from '@/data/site'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          {site.name} — {site.tagline}
        </title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={`${site.name} — ${site.tagline}`} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
