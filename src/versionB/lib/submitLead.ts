// ─────────────────────────────────────────────────────────────────────────────
// Lead submission — single point of contact between the /audit form and the
// lead destination. Submissions are delivered to info@efficiencymedia.com via
// Formspree. The Formspree form ID comes from VITE_FORMSPREE_ID (see .env.example);
// swapping to a different destination is a one-function change.
// ─────────────────────────────────────────────────────────────────────────────

// Formspree form ID, e.g. "xrgvabcd". Set VITE_FORMSPREE_ID in .env.local.
// The form must be configured (in the Formspree dashboard) to deliver to
// info@efficiencymedia.com. See .env.example for setup steps.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

export type MonthlyAdSpend =
  | "Under $10,000 / month"
  | "$10,000 - $50,000 / month"
  | "$50,000 - $100,000 / month"
  | "$100,000+ / month";

export interface LeadPayload {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyWebsite: string;
  monthlyAdSpend: MonthlyAdSpend;
  bottleneck: string;
}

/**
 * Submit an audit-request lead to Formspree (delivers to info@efficiencymedia.com).
 *
 * Resolves on success, throws on failure — the caller redirects to the
 * thank-you page on resolve and shows an inline error on throw.
 */
export async function submitLead(data: LeadPayload): Promise<void> {
  if (!FORMSPREE_ID) {
    // Fail loudly in dev if the env var is missing, so it never silently no-ops.
    throw new Error(
      "VITE_FORMSPREE_ID is not set — cannot submit lead. Add it to .env.local (see .env.example)."
    );
  }

  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // Readable field names so the notification email is easy to scan. The
    // underscore-prefixed keys are Formspree meta: a clear subject line and a
    // reply-to set to the lead's own email.
    body: JSON.stringify({
      "First Name": data.firstName,
      "Last Name": data.lastName,
      "Work Email": data.workEmail,
      "Company Website": data.companyWebsite,
      "Estimated Monthly Ad Spend": data.monthlyAdSpend,
      "Primary Media Bottleneck": data.bottleneck,
      _subject: `New media audit request — ${data.firstName} ${data.lastName}`,
      _replyto: data.workEmail,
    }),
  });

  if (!res.ok) {
    throw new Error(`Lead submit failed: ${res.status}`);
  }

  // Success → fire the GTM conversion event. GA4, GTM, and this push all share
  // the one window.dataLayer initialized in index.html; Roz's GTM conversion
  // tags listen for 'lead_submit'.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "lead_submit" });
}
