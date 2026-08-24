export function BotanicalCorner({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M20 180 C 40 120, 70 90, 130 70" opacity="0.9" />
      <path d="M60 118 C 55 100, 62 84, 84 78" opacity="0.7" />
      <path d="M84 100 C 82 84, 92 72, 112 70" opacity="0.7" />
      <path d="M108 84 C 110 70, 122 62, 142 64" opacity="0.7" />
      <path d="M20 180 C 30 150, 34 130, 30 108" opacity="0.5" />
    </svg>
  );
}

export function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
