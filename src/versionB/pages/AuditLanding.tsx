import { Helmet } from "react-helmet-async";
import {
  Target,
  Gauge,
  SearchCheck,
  BadgeDollarSign,
  Check,
} from "lucide-react";

import CampaignHeader from "@/versionB/components/CampaignHeader";
import LeadForm from "@/versionB/components/LeadForm";
import { Button } from "@/versionB/components/ui/button";
import { Card, CardContent } from "@/versionB/components/ui/card";

// Smooth-scroll to the anchored lead form. Used by both CTAs.
function scrollToForm() {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const PROOF_POINTS = [
  {
    icon: Target,
    title: "Structure for Business Outcomes",
    body: "Connecting media outcomes directly to tangible business results — like patient bookings or software sign-ups.",
  },
  {
    icon: Gauge,
    title: "Platform Mastery",
    body: "Maximizing platform performance without hidden agency margins.",
  },
  {
    icon: SearchCheck,
    title: "Deep Technical Auditing",
    body: "Verifying pixel accuracy, tag health, and data cleanliness.",
  },
  {
    icon: BadgeDollarSign,
    title: "No Hidden Fees",
    body: "Always transparent — one set fee on all media.",
  },
];

const PILLARS = [
  {
    title: "The Efficiency Advantage",
    body: "We build and optimize enterprise-level programmatic frameworks without hidden agency margins. You own your data; we maximize its precision.",
  },
  {
    title: "Media Performance Framework",
    body: "We don't guess with broad match keywords that waste capital. We engineer tight, highly targeted search campaigns focused on lower-funnel acquisition and immediate business intent.",
  },
  {
    title: "How We Engineer Better Media Outcomes",
    body: "With over 100 combined years of media buying and strategy, Efficiency Media brings the relationships and know-how to get the most effective media purchased, from Out of Home to TV.",
  },
];

const REASONS = [
  "We map clean, compliant data pipelines that connect digital touchpoints directly to tangible business outcomes.",
  "Transparency across every element of the media buying process and outcomes.",
  "Fast-to-market executions without the red tape.",
  "The team that onboards you is the team that stays with you.",
];

const PHILOSOPHY = [
  "Employee-owned, highly accountable culture",
  "Deeply experienced in healthcare, franchise, home services, and regional brands",
  "Strong negotiation and buying experts",
  "Focused on connecting media investment to business outcomes",
];

const AuditLanding = () => {
  return (
    <div className="version-b-root min-h-screen bg-background">
      <Helmet>
        <title>Request a Media Audit — Efficiency Media</title>
        <meta
          name="description"
          content="Senior-level media strategy, omnichannel expertise, and transparent execution. Request a free media audit from Efficiency Media."
        />
        {/* Campaign landing page — keep out of the index. */}
        <meta name="robots" content="noindex" />
      </Helmet>

      <CampaignHeader />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,hsl(var(--teal))_0,transparent_40%),radial-gradient(circle_at_80%_60%,hsl(var(--teal-light))_0,transparent_45%)]" />
        <div className="container relative mx-auto px-6 py-24 md:py-32 max-w-4xl text-center">
          <p className="text-teal-light font-medium text-sm tracking-widest uppercase mb-5">
            Efficiency Media
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            The Media Agency Built for What's Next.
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-navy-foreground/75 max-w-3xl mx-auto">
            Efficiency Media brings senior-level strategy, omnichannel media expertise, and
            transparent execution to help growing brands turn media investment into measurable
            business outcomes.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-base px-8 h-12 bg-teal hover:bg-teal-dark text-primary-foreground"
            >
              Request a Media Audit
            </Button>
          </div>
        </div>
      </section>

      {/* ── Proof — four columns ─────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF_POINTS.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="h-full border-border shadow-sm">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-teal/10 flex items-center justify-center mb-5">
                    <Icon className="text-teal" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why growth-stage brands hit a wall ───────────────────────────── */}
      <section className="py-20 md:py-24 bg-warm">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
            The Problem
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Growth-Stage Brands Hit a Wall With Traditional Agencies
          </h2>
          <div className="w-16 h-1 bg-teal rounded-full mb-8" />
          <p className="text-lg leading-relaxed text-navy/80 mb-6">
            Most media agencies scale their overhead, not your performance. They mask poor campaign
            return behind vanity metrics, complex dashboards, and untraceable attribution models.
          </p>
          <p className="text-lg leading-relaxed text-navy/80">
            At Efficiency Media, we don't believe in agency bloat. We believe in clean data
            structures and giving you absolute visibility into every dollar spent.
          </p>
        </div>
      </section>

      {/* ── Core pillars of execution ────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
              How We Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Core Pillars of Execution
            </h2>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {PILLARS.map(({ title, body }, i) => (
              <div key={title} className="relative">
                <span className="font-display text-5xl font-bold text-teal/15">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-navy mt-3 mb-3">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Four reasons brands switch ───────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-teal-light font-medium text-sm tracking-widest uppercase mb-3">
              Why Switch
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Four Reasons Brands Switch to Efficiency Media
            </h2>
            <div className="w-16 h-1 bg-teal mx-auto rounded-full mt-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-navy-foreground/10 bg-navy-foreground/5 p-6"
              >
                <span className="shrink-0 font-display text-2xl font-bold text-teal-light">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-navy-foreground/85">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy + closing CTA ─────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-warm">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
            Efficiency Media Philosophy
          </h2>
          <p className="text-lg leading-relaxed text-navy/80 mb-10">
            Efficiency Media is not another media agency. We are unique in our culture and precise
            skills in media buying and management. We are:
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 text-left mb-12">
            {PHILOSOPHY.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15">
                  <Check className="text-teal" size={14} />
                </span>
                <span className="text-navy/85">{item}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="text-base px-8 h-12 bg-teal hover:bg-teal-dark text-primary-foreground"
          >
            Meet Us Today
          </Button>
        </div>
      </section>

      {/* ── Lead form ────────────────────────────────────────────────────── */}
      <section id="lead-form" className="py-20 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
              Request Your Audit
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Let's Find Your Wasted Spend
            </h2>
            <p className="text-muted-foreground">
              Tell us where you're at. A senior strategist will review your digital footprint and
              come back within 24 hours.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditLanding;
