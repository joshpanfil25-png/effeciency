import { Link } from "react-router-dom";

// Minimal header for the ad-campaign pages (/audit, /audit/thank-you).
// Just the EFFICIENCY Media wordmark — no site nav, since these pages are
// reached only via ad links. Matches Version B's logo treatment.
const CampaignHeader = () => (
  <header className="border-b border-border bg-card/95 backdrop-blur-md">
    <div className="container mx-auto px-6 h-16 flex items-center">
      <Link to="/" className="flex items-center gap-1" aria-label="Efficiency Media home">
        <span className="text-teal text-2xl font-mono">⟨</span>
        <span className="font-bold text-lg tracking-wider text-navy">EFFICIENCY</span>
        <span className="text-teal text-2xl font-mono">⟩</span>
        <span className="text-sm font-medium ml-1 text-teal">Media</span>
      </Link>
    </div>
  </header>
);

export default CampaignHeader;
