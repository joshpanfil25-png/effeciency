import { useVersion } from "@/versionB/VersionContext";

// Neutral dev/preview control — intentionally not styled like either design.
// Fixed bottom-right, above both layouts. Inline styles keep it independent of
// either version's Tailwind tokens so it looks identical on A and B.
export default function VersionToggle() {
  const { version, toggle } = useVersion();
  const target = version === "A" ? "B" : "A";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`View Version ${target}`}
      title={`Currently showing Version ${version} — click to view Version ${target}`}
      style={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        zIndex: 2147483000,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.85rem",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        fontSize: "0.8125rem",
        fontWeight: 600,
        lineHeight: 1,
        color: "#1f2937",
        background: "rgba(255,255,255,0.92)",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: "9999px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        backdropFilter: "blur(6px)",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: "0.5rem",
          height: "0.5rem",
          borderRadius: "9999px",
          background: version === "A" ? "#0f766e" : "#9333ea",
        }}
      />
      View Version {target}
    </button>
  );
}
