// Site-wide content + nav. Single source of truth for chrome.
import {
  Target,
  BarChart3,
  Megaphone,
  Radio,
  Search,
  Share2,
} from 'lucide-react'

export const site = {
  name: 'Efficiency Media',
  tagline: 'Strategic Media Planning & Buying',
  description:
    'Efficiency Media is a strategic media planning and buying agency. We build integrated, omnichannel campaigns that make every dollar work harder.',
  email: 'hello@efficiencymedia.com',
  phone: '(312) 555-0142',
  city: 'Chicago, IL',
  linkedin: 'https://www.linkedin.com/company/efficiency-media/',
}

// Section anchors live on the home page; Blog is its own route.
export const navLinks = [
  { label: 'About', to: '/', hash: '#about' },
  { label: 'Services', to: '/', hash: '#services' },
  { label: 'Team', to: '/', hash: '#team' },
  { label: 'Results', to: '/', hash: '#testimonials' },
  { label: 'Blog', to: '/blog', hash: '' }, // ← blog addition
  { label: 'Contact', to: '/', hash: '#contact' },
]

export const services = [
  {
    icon: Target,
    title: 'Media Strategy',
    body: 'Audience-first planning that maps every channel to a measurable business outcome — not vanity reach.',
  },
  {
    icon: BarChart3,
    title: 'Programmatic',
    body: 'Real-time bidding across display, video, and CTV, optimized continuously against your KPIs.',
  },
  {
    icon: Search,
    title: 'Paid Search',
    body: 'Intent-driven search programs engineered for efficient acquisition and durable share of voice.',
  },
  {
    icon: Share2,
    title: 'Paid Social',
    body: 'Creative-led social buying across Meta, TikTok, and LinkedIn with rigorous incrementality testing.',
  },
  {
    icon: Radio,
    title: 'Broadcast & Audio',
    body: 'TV, radio, and streaming audio negotiated with the leverage of two decades of buying relationships.',
  },
  {
    icon: Megaphone,
    title: 'Measurement',
    body: 'Clean-room attribution and media-mix modeling so you always know what is actually working.',
  },
]

export const team = [
  {
    name: 'Amy Abrahams',
    role: 'Founder & President',
    bio: '25 years planning and buying media for brands that place real budgets behind growth.',
  },
  {
    name: 'Trista Coleman',
    role: 'VP, Media Strategy',
    bio: 'Leads integrated planning across digital and traditional, obsessed with measurable outcomes.',
  },
  {
    name: 'Marcus Reed',
    role: 'Director, Programmatic',
    bio: 'Builds the bidding and optimization engine behind every performance campaign.',
  },
  {
    name: 'Priya Nair',
    role: 'Director, Analytics',
    bio: 'Turns messy cross-channel data into the clean signal that guides every dollar.',
  },
]

export const testimonials = [
  {
    quote:
      'Efficiency Media rebuilt our entire media plan and cut our cost per acquisition by 38% in one quarter. They treat our budget like it is their own.',
    name: 'Rosemary Bowers',
    title: 'VP Marketing, Northbrook Health',
  },
  {
    quote:
      'The most rigorous, least hand-wavy agency we have worked with. Every recommendation comes with the math behind it.',
    name: 'Daniel Cho',
    title: 'CMO, Lakeshore Retail Group',
  },
  {
    quote:
      'They found efficiency in places three previous agencies missed. Genuinely strategic partners.',
    name: 'Elena Vasquez',
    title: 'Founder, Vasquez & Co.',
  },
]

export const stats = [
  { value: '$120M+', label: 'Media managed' },
  { value: '38%', label: 'Avg. CPA reduction' },
  { value: '20 yrs', label: 'Buying relationships' },
  { value: '40+', label: 'Brands served' },
]
