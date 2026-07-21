// Site-wide content + nav. Single source of truth for chrome.
import {
  Target,
  BarChart3,
  Megaphone,
  Radio,
  Search,
  Share2,
} from 'lucide-react'

// Real team headshots (shared with Version B).
import imgAmy from '@/versionB/assets/team/amy.jpg'
import imgMichelle from '@/versionB/assets/team/michelle.jpg'
import imgMarci from '@/versionB/assets/team/marci.jpg'
import imgTrista from '@/versionB/assets/team/trista.jpg'
import imgRoz from '@/versionB/assets/team/roz.jpg'
import imgMelanie from '@/versionB/assets/team/melanie.jpg'
import imgJordan from '@/versionB/assets/team/jordan.png'
import imgJessica from '@/versionB/assets/team/jessica.jpg'
import imgMegan from '@/versionB/assets/team/megan.jpg'
import imgJeremy from '@/versionB/assets/team/jeremy.jpg'
import imgSuzanne from '@/versionB/assets/team/suzanne.jpg'
import imgAmanda from '@/versionB/assets/team/amanda.jpg'
import imgLaura from '@/versionB/assets/team/laura.jpg'

export const site = {
  name: 'Efficiency Media',
  tagline: 'Strategic Media Planning & Buying',
  description:
    'Efficiency Media is a strategic media planning and buying agency. We build integrated, omnichannel campaigns that make every dollar work harder.',
  email: 'info@efficiencymedia.com',
  phone: '773.463.8801',
  city: 'Chicago, IL',
  linkedin: 'https://www.linkedin.com/company/efficiency-media/',
}

// Section anchors on the home page. Version A intentionally has no Blog link —
// the blog is styled to Version B and linked only from Version B's nav.
export const navLinks = [
  { label: 'About', to: '/', hash: '#about' },
  { label: 'Services', to: '/', hash: '#services' },
  { label: 'Team', to: '/', hash: '#team' },
  { label: 'Results', to: '/', hash: '#testimonials' },
  { label: 'Contact', to: '/', hash: '#contact' },
]

// Client-approved service copy — verbatim; do not reword without approval.
export const services = [
  {
    icon: Target,
    title: 'Media Strategy',
    body: 'Cross-channel planning built on audience intelligence, competitive analysis, and accountable budget allocation.',
  },
  {
    icon: BarChart3,
    title: 'Programmatic',
    body: 'Algorithmic buying across display, video, audio, out-of-home with continuous optimization against verified performance data.',
  },
  {
    icon: Search,
    title: 'Paid Search',
    body: 'Full-funnel search strategy engineered for qualified acquisition, quality score efficiency, and sustainable share of voice.',
  },
  {
    icon: Share2,
    title: 'Paid Social',
    body: 'Precision audience targeting across all platforms backed by structured testing and incrementality measurement.',
  },
  {
    icon: Radio,
    title: 'Local Media',
    body: 'Linear TV, radio, and streaming audio, out-of-home planned and negotiated with decades of buying relationships and market knowledge.',
  },
  {
    icon: Megaphone,
    title: 'Measurement',
    body: 'Unified attribution and reporting frameworks that connect spend to outcomes across every channel.',
  },
]

// Certification badges (shared with Version B).
export { default as badgeGooglePartner } from '@/versionB/assets/google-partner.jpg'
export { default as badgeGoogleCertified } from '@/versionB/assets/google-certified.png'
export { default as badgeWbe } from '@/versionB/assets/wbe-badge.png'

// Real roster with client-approved bios (verbatim). Titles are the current
// ones the client provided — do not derive titles from bio text. Members whose
// bio is '' render as name + title only (no Read more toggle).
export const team = [
  {
    name: 'Michelle Marlo',
    role: 'President, Chief Client Officer',
    img: imgMichelle,
    bio: 'Michelle brought a unique quality when she joined Efficiency Media in 2012: having expertise on both the planning and buying side for local and national media. Providing strategic analysis on market research, competitive spend and media consumption is something that Michelle enjoys bringing to the table. While managing day to day relationships with clients is currently her main focus, she is also highly experienced in buying all media platforms including print, radio, broadcast TV, cable TV and digital for clients including AMITA Health, Orlando Health, Sport Clips, Terlato Wines, Crate&Barrel, CNA Insurance, Northwestern Hospital, Health Alliance, and DePaul University. Michelle joined Efficiency Media with over 10 years of media planning and buying along with account management experience from SpaceTime. During her tenure with Efficiency Media, her media insights and strategic thinking have proved an asset for every account.',
  },
  {
    name: 'Marci Crane',
    role: 'President, Client Services and Linear & Streaming Platforms',
    img: imgMarci,
    bio: 'Marci is a 20 plus year veteran in the media industry. She has worked in large firms such as J. Walter Thompson & Starcom and boutique firms, GRP Media, Two X Four and now Efficiency Media. She has honed her skills by servicing a broad range of clients from the automotive, pharmaceutical, financial services, quick service food, professional sports, tourism, and legal industries. A sampling of clients include Ford Motor Company, Lexus, Toyota, Fox Movie Studios, Chicago White Sox, Northern Trust, Amita Health and Warner Lambert. By virtue of all this experience Marci is an outstanding negotiator and understands the value of superior customer service to her clients.',
  },
  {
    name: 'Trista Countryman',
    role: 'Chief Financial & Operations Officer',
    img: imgTrista,
    bio: 'With over 11 years of media planning and buying experience, Trista brings a wealth of knowledge to Efficiency Media. During her 10 years with Noble / Gatesman, Trista developed and implemented media campaigns of all sizes, both national and local in scope. She has been involved at every level of the project from managing budgets to overseeing the planners and buyers, from researching industry competitive and new media to trafficking of all traditional media. Trista is also a seasoned negotiator for TV, radio, print, digital, outdoor, and sports sponsorships.',
  },
  {
    name: 'Roz-Linn Finn',
    role: 'Executive, Digital Marketing Strategy & Technology',
    img: imgRoz,
    bio: '',
  },
  {
    name: 'Melanie Ivanov',
    role: 'VP, Director of Media Planning',
    img: imgMelanie,
    bio: 'Melanie comes to Efficiency Media after spending almost 13 years at her former agency, SpaceTime. She provides in-depth knowledge in both local market and national media planning and buying. Her extensive media planning experience includes over 120 DMAs throughout the country after eight years managing the Jimmy John’s account. Melanie has spent many years buying spot radio, television and cable, outdoor and transit, local print media as well as professional and college sports sponsorships. She also has more than 10 years of experience on the healthcare side, having managed the media support for Northwestern Hospital, the Loyola University Health System and Northwest Community Healthcare.',
  },
  {
    name: 'Jordan Louis',
    role: 'Paid Search Manager',
    img: imgJordan,
    bio: '',
  },
  {
    name: 'Jessica Rhea',
    role: 'Manager of Media Planning & Buying',
    img: imgJessica,
    bio: 'Jessica brings more than 10 years of media experience to Efficiency Media. In her most recent role at RPM, Jessica was responsible for overseeing all research and media planning while handling media negotiations on several accounts. Throughout her time, she has honed her skills on both print and outdoor buying working accounts such as Gatorade, Kraft Pizza Co., Horseshoe and Harrah’s Casinos, Tier II and Tier III Automotive, White Hen, 7-Eleven and Field Museum. Jessica began her career at Foot, Cone & Belding in Chicago as an assistant media planner on national accounts.',
  },
  {
    name: 'Megan Michalak',
    role: 'Integrated Media Buyer',
    img: imgMegan,
    bio: '',
  },
  {
    name: 'Jeremy Hulyk',
    role: 'Programmatic Specialist',
    img: imgJeremy,
    bio: 'Jeremy brings over six years of experience in programmatic advertising across a range of DSPs. He supports the execution and optimization of digital campaigns, with a focus on audience targeting, performance analysis, and continuous improvement to drive measurable results. Jeremy enjoys finding ways to connect campaign performance to real business outcomes. He is passionate about staying current with the evolving programmatic landscape and refining strategies to improve efficiency and scale. Outside of work, Jeremy enjoys coaching and playing soccer, spending time outdoors, and hanging out with his family and Australian Shepherd, Tellie.',
  },
  {
    name: 'Suzanne Racz',
    role: 'Senior Media Buyer',
    img: imgSuzanne,
    bio: "Suzanne joins Efficiency Media with 20+ years of experience in the media buying industry. She has predominantly worked in large agencies such as PHD, Zenith, & GroupM where she handled markets of all sizes. Suzanne has experience buying for a wide variety of clients in all major categories such as American Family Insurance, AT&T, Ikea, John Deere, SC Johnson, Universal Pictures, Chase Bank and General Mills. Her automotive roster includes Jaguar, Land Rover, Volvo, Toyota, Lexus, Dodge/Chrysler/Jeep, & Mercedes. Suzanne's focus is to deliver accurate media schedules going above and beyond to produce quality results. She is a fair negotiator who is committed to achieving the individual advertising goals of each client, maximizing return on investment.",
  },
  {
    name: 'Amanda Procter',
    role: 'Traffic Manager / Media Buyer',
    img: imgAmanda,
    bio: '',
  },
  {
    name: 'Laura Liden',
    role: 'Billing Coordinator',
    img: imgLaura,
    bio: 'Laura joined Efficiency Media with over 8 years of industry experience. In her most recent role with SPM Marketing and Communications, Laura served as the Media and Traffic Coordinator. In addition to working with both clients and vendors to traffic radio, TV, cable, print and billboards, Laura also worked in the billing department to coordinate all client invoices.',
  },
  {
    name: 'Amy Abrahams',
    role: 'Founder',
    img: imgAmy,
    bio: 'Before opening the doors at Efficiency Media, Amy spent 12 years selling Chicago radio. Her radio sales career includes nine years at WTMX-FM, The Mix, where she was awarded the Presidential Sales Award by Bonneville International, the station’s owners. The award is given annually to one seller nationwide who excels most in creating and developing success for new advertisers, client service and commitment to the company’s core values. Additionally, Amy was the local sales manager for WLIT-FM where she was responsible for the local sales staff, their budget and many client brainstorming facilitations. While at WLIT, Amy was also given the responsibility of hiring and training all new employees of the six Chicagoland Clear Channel radio stations. Amy started her career selling Spanish radio for WOPA.',
  },
]

// Real client testimonials only — the section lays itself out for any count
// (1 centered, 2 or 3+ in a grid). To add one the client approves, paste an
// entry below Paul's following the same shape:
//   {
//     quote: '…approved quote, verbatim…',
//     name: 'First Last',
//     title: 'Role, Company',
//   },
// Seven more real quotes await approval in
// src/versionB/components/TestimonialsSection.tsx (Orlando Magazine, Orlando
// Health, Oberweis, Sport Clips, MNI, Conversant, WMAQ-TV).
export const testimonials = [
  {
    quote:
      'Over the past 9 years we have worked with Efficiency Media and they always have our best interests in mind. One of the things I love about Efficiency Media is the tough negotiation skills and they never miss a deadline. I have recommended Efficiency Media to all my franchisees.',
    name: 'Paul Trecarichi',
    title: 'EverDry / Ohio State Waterproofing',
  },
  {
    quote:
      'The team at Efficiency Media has proven to be much more than a media planning and buying service for Orlando Health. We consider the team partners in our organization. On the heels of a new brand campaign, Efficiency Media jumped in to properly execute the campaign in the most relevant outlets. Not only was the planning strategic, I was most impressed by the negotiations that took place on behalf of Orlando Health. It is with confidence of proper placement and the best price, we go to market with our messages.',
    name: 'Rod C. James',
    title: 'Orlando Health',
  },
  {
    quote:
      "Expertise, value and integrity—sometimes rarities in our industry, they are in overflow at Efficiency Media! I've had the good fortune to work with the team for a decade. It's incredibly impressive the way Efficiency Media navigates the changing media landscape—blending traditional and digital buying proficiencies—while single-mindedly looking out for the best interests of our brand. Efficiency Media would bring value to any client.",
    name: 'Danielle Linden',
    title: 'Sport Clips',
  },
]

export const stats = [
  { value: '$1B+', label: 'Media managed' },
  { value: '38%', label: 'Avg. CPA reduction' },
  { value: '100+ yrs', label: 'Buying relationships' },
  { value: '50+', label: 'Brands served' },
]
