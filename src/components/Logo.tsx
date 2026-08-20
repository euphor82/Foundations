/** The app mark, inlined as SVG so it needs no external file — works in the
 *  hosted build and in a fully self-contained single-file build alike. */
export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="ic" role="img" aria-label="Foundations">
      <rect width="512" height="512" rx="112" fill="#22201C" />
      <rect x="116" y="116" width="280" height="280" rx="20" fill="none" stroke="#F2825E" strokeWidth="24" />
      <rect x="150" y="150" width="38" height="38" rx="7" fill="#F2825E" />
      <rect x="324" y="150" width="38" height="38" rx="7" fill="#F2825E" />
      <rect x="150" y="324" width="38" height="38" rx="7" fill="#F2825E" />
      <rect x="324" y="324" width="38" height="38" rx="7" fill="#F2825E" />
      <rect x="244" y="206" width="24" height="100" rx="6" fill="#F2825E" />
      <rect x="214" y="238" width="84" height="24" rx="6" fill="#F2825E" />
    </svg>
  )
}
