/// <reference types="vite/client" />

// GTM data layer — Roz's container (added in index.html) reads events pushed here.
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export {};
