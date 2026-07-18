// Structural device: a faint topographic contour line, echoing "altitude"
// as a running motif between sections instead of a generic hairline rule.
export default function ContourDivider({ label }) {
  return (
    <div className="flex items-center gap-4 max-w-7xl mx-auto px-6 md:px-10">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--slate-dim)] to-[var(--slate-dim)]" />
      {label && (
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--slate)] shrink-0">
          {label}
        </span>
      )}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--slate-dim)] to-[var(--slate-dim)]" />
    </div>
  )
}
