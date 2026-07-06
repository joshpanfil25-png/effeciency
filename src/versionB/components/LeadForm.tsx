import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/versionB/components/ui/button";
import { submitLead, type LeadPayload, type MonthlyAdSpend } from "@/versionB/lib/submitLead";

// Free/personal email providers are rejected — this is a B2B audit request.
const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
];

const AD_SPEND_OPTIONS: MonthlyAdSpend[] = [
  "Under $10,000 / month",
  "$10,000 - $50,000 / month",
  "$50,000 - $100,000 / month",
  "$100,000+ / month",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyWebsite: string;
  monthlyAdSpend: string;
  bottleneck: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  workEmail: "",
  companyWebsite: "",
  monthlyAdSpend: "",
  bottleneck: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";

  const email = values.workEmail.trim().toLowerCase();
  if (!email) {
    errors.workEmail = "Work email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.workEmail = "Please enter a valid email address.";
  } else {
    const domain = email.split("@")[1];
    if (FREE_EMAIL_DOMAINS.includes(domain)) {
      errors.workEmail = "Please use your work email.";
    }
  }

  if (!values.companyWebsite.trim()) errors.companyWebsite = "Company website is required.";
  if (!values.monthlyAdSpend) errors.monthlyAdSpend = "Please select an estimated monthly ad spend.";

  return errors;
}

// Shared input styling — matches Version B's teal-ring / warm-surface treatment.
const fieldClass =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-navy placeholder:text-muted-foreground/70 " +
  "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow";
const labelClass = "block text-sm font-medium text-navy mb-1.5";
const errorClass = "mt-1.5 text-sm text-destructive";

const LeadForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear a field's error as soon as the user edits it.
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const payload: LeadPayload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      workEmail: values.workEmail.trim(),
      companyWebsite: values.companyWebsite.trim(),
      monthlyAdSpend: values.monthlyAdSpend as MonthlyAdSpend,
      bottleneck: values.bottleneck.trim(),
    };

    setSubmitting(true);
    try {
      await submitLead(payload);
      navigate("/audit/thank-you");
    } catch {
      setSubmitError(
        "Something went wrong submitting your request. Please try again, or email info@efficiencymedia.com."
      );
      setSubmitting(false);
    }
  };

  return (
    // noValidate: we run our own validation so the free-email rule and inline
    // messaging behave consistently across browsers.
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={values.firstName}
            onChange={update("firstName")}
            className={fieldClass}
            autoComplete="given-name"
          />
          {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={values.lastName}
            onChange={update("lastName")}
            className={fieldClass}
            autoComplete="family-name"
          />
          {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="workEmail" className={labelClass}>
          Work Email
        </label>
        <input
          id="workEmail"
          type="email"
          value={values.workEmail}
          onChange={update("workEmail")}
          className={fieldClass}
          autoComplete="email"
          placeholder="you@yourcompany.com"
        />
        {errors.workEmail && <p className={errorClass}>{errors.workEmail}</p>}
      </div>

      <div>
        <label htmlFor="companyWebsite" className={labelClass}>
          Company Website URL
        </label>
        <input
          id="companyWebsite"
          type="text"
          value={values.companyWebsite}
          onChange={update("companyWebsite")}
          className={fieldClass}
          autoComplete="url"
          placeholder="https://yourcompany.com"
        />
        {errors.companyWebsite && <p className={errorClass}>{errors.companyWebsite}</p>}
      </div>

      <div>
        <label htmlFor="monthlyAdSpend" className={labelClass}>
          Estimated Monthly Ad Spend
        </label>
        <select
          id="monthlyAdSpend"
          value={values.monthlyAdSpend}
          onChange={update("monthlyAdSpend")}
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Select a range…
          </option>
          {AD_SPEND_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.monthlyAdSpend && <p className={errorClass}>{errors.monthlyAdSpend}</p>}
      </div>

      <div>
        <label htmlFor="bottleneck" className={labelClass}>
          What is your primary media bottleneck?
        </label>
        <input
          id="bottleneck"
          type="text"
          value={values.bottleneck}
          onChange={update("bottleneck")}
          className={fieldClass}
          placeholder="e.g. attribution, rising CPAs, agency transparency…"
        />
      </div>

      {submitError && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {submitError}
        </div>
      )}

      <Button type="submit" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Submitting…" : "Request My Audit Now"}
      </Button>
    </form>
  );
};

export default LeadForm;
