// Signature motif: a jagged ascent line (reads as both a mountain traverse
// and a rising kinetic/momentum chart) that draws itself in on mount.
export default function AscentLine({ className = '', showBlip = true }) {
  return (
    <svg
      viewBox="0 0 1200 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ascentGradient" x1="0" y1="300" x2="1200" y2="0">
          <stop offset="0%" stopColor="#5a6690" />
          <stop offset="35%" stopColor="#1541c4" />
          <stop offset="100%" stopColor="#5fa8ff" />
        </linearGradient>
      </defs>
      <path
        className="ascent-path"
        d="M0 260 L120 220 L200 240 L280 140 L360 190 L440 80 L520 130 L620 40 L720 95 L820 55 L900 100 L980 30 L1080 60 L1160 15"
        stroke="url(#ascentGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showBlip && (
        <circle className="ascent-blip" cx="1160" cy="15" r="8" fill="#5fa8ff" />
      )}
    </svg>
  )
}
