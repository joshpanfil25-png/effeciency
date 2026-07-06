import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";

import CampaignHeader from "@/versionB/components/CampaignHeader";
import { Button } from "@/versionB/components/ui/button";

// TODO: Insert Michelle Marlo's Calendly link here once provided.
const CALENDLY_URL = "";

const AuditThankYou = () => {
  return (
    <div className="version-b-root min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Audit Request Confirmed — Efficiency Media</title>
        <meta
          name="description"
          content="Your media audit request is confirmed. A senior Efficiency Media strategist will be in touch within 24 hours."
        />
        {/* Campaign page — keep out of the index. */}
        <meta name="robots" content="noindex" />
      </Helmet>

      <CampaignHeader />

      <section className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
            <CheckCircle2 className="text-teal" size={36} />
          </span>
          <h1 className="mt-8 font-display text-4xl md:text-5xl font-bold text-navy">
            Your Audit Request is Confirmed.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            A senior strategist from Efficiency Media will review your digital footprint within the
            next 24 hours. Your introductory call will be directly with an executive who handles
            live media deployment every day. Expect a calendar invite shortly.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="text-base px-8 h-12 bg-teal hover:bg-teal-dark text-primary-foreground"
            >
              {/* TODO: Insert Michelle Marlo's Calendly link here once provided. */}
              <a
                href={CALENDLY_URL || "#"}
                target={CALENDLY_URL ? "_blank" : undefined}
                rel={CALENDLY_URL ? "noopener noreferrer" : undefined}
              >
                Book Your Call
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditThankYou;
