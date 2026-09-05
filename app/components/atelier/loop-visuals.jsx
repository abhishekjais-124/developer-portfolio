export function OrbitGif({ className = "", size = 140 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="70" cy="70" r="46" stroke="#c9a962" strokeOpacity="0.18" />
      <circle cx="70" cy="70" r="62" stroke="#c9a962" strokeOpacity="0.1" strokeDasharray="4 10" className="spin-slower" />
      <g className="spin-slow origin-center" style={{ transformOrigin: "70px 70px" }}>
        <circle cx="70" cy="8" r="3.5" fill="#c9a962" />
        <circle cx="70" cy="8" r="7" fill="#c9a962" fillOpacity="0.18" />
      </g>
      <g className="spin-reverse origin-center" style={{ transformOrigin: "70px 70px" }}>
        <circle cx="132" cy="70" r="2.4" fill="#e8d5a3" />
      </g>
      <circle cx="70" cy="70" r="5" fill="#c9a962" className="pulse-core" />
    </svg>
  );
}

export function SignalGif({ className = "", bars = 7 }) {
  return (
    <div className={`flex items-end gap-1 ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="eq-bar w-1 rounded-full bg-[#c9a962]"
          style={{ animationDelay: `${i * 0.12}s`, height: `${10 + (i % 4) * 8}px` }}
        />
      ))}
    </div>
  );
}

export function SparkGif({ className = "", count = 18 }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="sparkle absolute h-1 w-1 rounded-full bg-[#e8d5a3]"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 29) % 100}%`,
            animationDelay: `${(i % 8) * 0.35}s`,
            animationDuration: `${2.4 + (i % 5) * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

export function WavesGif({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 600 120" fill="none" aria-hidden="true">
      <path
        className="wave-draw"
        d="M0 60 C 80 20, 140 100, 220 60 S 380 20, 460 60 S 560 100, 600 60"
        stroke="#c9a962"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      <path
        className="wave-draw"
        style={{ animationDelay: "1.2s" }}
        d="M0 72 C 90 40, 150 110, 240 72 S 400 40, 480 72 S 560 110, 600 72"
        stroke="#e8d5a3"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
    </svg>
  );
}

export function GlyphRain({ className = "" }) {
  const glyphs = ["01", "AJ", "GO", "λ", "Σ", "∞", "04", "AI"];
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {glyphs.map((g, i) => (
        <span
          key={`${g}-${i}`}
          className="glyph-fall absolute font-display text-xs text-[#c9a962]/35"
          style={{
            left: `${8 + i * 12}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${7 + (i % 3)}s`,
          }}
        >
          {g}
        </span>
      ))}
    </div>
  );
}

export function MorphBlob({ className = "" }) {
  return (
    <div className={`morph-blob ${className}`} aria-hidden="true" />
  );
}

export function CompassGif({ className = "", size = 72 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <circle cx="36" cy="36" r="28" stroke="#c9a962" strokeOpacity="0.25" />
      <g className="spin-slow" style={{ transformOrigin: "36px 36px" }}>
        <path d="M36 12 L39 36 L36 60 L33 36 Z" fill="#c9a962" fillOpacity="0.85" />
        <path d="M12 36 L36 39 L60 36 L36 33 Z" fill="#e8d5a3" fillOpacity="0.35" />
      </g>
      <circle cx="36" cy="36" r="3" fill="#f3eee4" />
    </svg>
  );
}
