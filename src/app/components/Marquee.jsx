// ═══════════════════════════════════════════════════════════════════
// MARQUEE ITEMS — edit text here
// ═══════════════════════════════════════════════════════════════════
const MARQUEE_ITEMS = [
  "Manage your content",
  "Engage your audience",
  "Grow your brand",
  "Schedule with ease",
  "Analyze performance",
  "All in one place",
];
 
// ═══════════════════════════════════════════════════════════════════
// SEPARATOR — the symbol between each item
// ═══════════════════════════════════════════════════════════════════
const SEPARATOR = "✦";
 
// ═══════════════════════════════════════════════════════════════════
// SPEED — animation duration in seconds (lower = faster)
// ═══════════════════════════════════════════════════════════════════
const SPEED = 30;
 
export default function Marquee() {
  // Double the items so the loop is seamless
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
 
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll ${SPEED}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
 
      <div
        style={{
          background: "#01D17E",
          height:     87,
          width:      "100%",
          overflow:   "hidden",
          display:    "flex",
          alignItems: "center",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display:    "flex",
            alignItems: "center",
            width:      "max-content",
          }}
        >
          {doubled.map((text, i) => (
            <div
              key={i}
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        32,
                padding:    "0 32px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily:    "'Plus Jakarta Sans', sans-serif",
                  fontWeight:    700,
                  fontSize:      22,
                  lineHeight:    "48px",
                  letterSpacing: "-1px",
                  color:         "white",
                }}
              >
                {text}
              </span>
              <span
                style={{
                  color:    "rgba(255,255,255,0.5)",
                  fontSize: 14,
                }}
                aria-hidden
              >
                {SEPARATOR}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}