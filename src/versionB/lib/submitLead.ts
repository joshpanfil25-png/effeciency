// ─────────────────────────────────────────────────────────────────────────────
// Lead submission — single point of contact between the /audit form and whatever
// destination the client eventually chooses (Formspree, HubSpot, a serverless
// endpoint, etc.). Every field the form collects is passed through here, so
// wiring the real destination is a one-function change.
// ─────────────────────────────────────────────────────────────────────────────

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
 * Submit an audit-request lead.
 *
 * Resolves on success, throws on failure — the caller redirects to the
 * thank-you page on resolve and shows an inline error on throw.
 *
 * TODO: Wire to Formspree/lead destination once confirmed with client —
 * replace this stub with the real POST. Example shape:
 *
 *   const res = await fetch("https://formspree.io/f/XXXXXXXX", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json", Accept: "application/json" },
 *     body: JSON.stringify(data),
 *   });
 *   if (!res.ok) throw new Error(`Lead submit failed: ${res.status}`);
 *
 * Until then this stub logs the payload and resolves so the full form → success
 * flow works end to end.
 */
export async function submitLead(data: LeadPayload): Promise<void> {
  // eslint-disable-next-line no-console
  console.log("[submitLead] stub — payload that will be POSTed once wired:", data);

  // Fire the GTM conversion event on the success path. Roz's GTM container
  // (added in index.html once she provides the ID) listens for 'lead_submit'
  // to trigger her conversion tags.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "lead_submit" });

  // Simulate a resolved network round-trip.
  await new Promise((resolve) => setTimeout(resolve, 400));
}
