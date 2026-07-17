import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

// Minimal header for the ad-campaign pages (/audit, /audit/thank-you).
// The EFFICIENCY Media wordmark plus a click-to-call number — no site nav,
// since these pages are reached only via ad links. Matches Version B's logo treatment.
const CampaignHeader = () => (
  <header className="border-b border-border bg-card/95 backdrop-blur-md">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-1" aria-label="Efficiency Media home">
        <span className="text-teal text-2xl font-mono">⟨</span>
        <span className="font-bold text-lg tracking-wider text-navy">EFFICIENCY</span>
        <span className="text-teal text-2xl font-mono">⟩</span>
        <span className="text-sm font-medium ml-1 text-teal">Media</span>
      </Link>
      <a
        href="tel:7734638801"
        className="flex items-center gap-2 text-sm sm:text-base font-semibold text-navy hover:text-teal transition-colors"
        aria-label="Call Efficiency Media at 773.463.8801"
      >
        <Phone size={18} className="text-teal" />
        <span>773.463.8801</span>
      </a>
    </div>
  </header>
);

export default CampaignHeader;
