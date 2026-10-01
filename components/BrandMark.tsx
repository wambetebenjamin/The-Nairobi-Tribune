export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark${compact ? " brand-mark--compact" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" role="presentation">
        <circle cx="24" cy="24" r="23" fill="currentColor" />
        <path d="M14 34V14h5l10 13V14h5v20h-5L19 21v13z" fill="#fffaf2" />
        <circle cx="37" cy="11" r="3" fill="#c7a260" />
      </svg>
    </span>
  );
}
