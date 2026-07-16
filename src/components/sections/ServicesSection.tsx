import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  badgeGoogleCertified,
  badgeGooglePartner,
  badgeWbe,
  services,
} from '@/data/site'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-warm py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What we do
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
            Full-funnel media, <span className="text-gradient">one team.</span>
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Strategy, activation, and measurement across every channel that
            matters to your audience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="transition-shadow duration-300 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-xl text-navy">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-navy/70">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          <img
            src={badgeGooglePartner}
            alt="Google Partner"
            className="h-28 rounded-lg border border-border bg-white object-contain p-3"
          />
          <img
            src={badgeGoogleCertified}
            alt="Google Certified"
            className="h-28 rounded-lg border border-border bg-white object-contain p-3"
          />
          <img
            src={badgeWbe}
            alt="Certified WBE - Women Business Enterprise"
            className="h-28 rounded-lg border border-border bg-white object-contain p-3"
          />
        </div>
      </div>
    </section>
  )
}
