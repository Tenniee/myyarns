const STATS = [
  {
    number:  "10",
    suffix:  "x",
    subtext: "Average engagement increase across all managed accounts",
    pill:    "GROWTH MULTIPLIER",
  },
  {
    number:  "98",
    suffix:  "%",
    subtext: "Of clients report improved brand visibility within 30 days",
    pill:    "CLIENT SATISFACTION",
  },
  {
    number:  "80",
    suffix:  "%",
    subtext: "Reduction in time spent on manual content scheduling tasks",
    pill:    "TIME SAVED",
  },
];
 
// ═══════════════════════════════════════════════════════════════════
// BIG DECORATIVE CIRCLE — move/resize here
// ═══════════════════════════════════════════════════════════════════
const BIG_CIRCLE = {
  width:   600,
  height:  600,
  top:     -60,
  right:   -100,
  zIndex:  2,   // above text — set to 0 to put behind
};
 
// ═══════════════════════════════════════════════════════════════════
// GLASS PILL
// ═══════════════════════════════════════════════════════════════════
const GLIMMER_BORDER = `conic-gradient(
  from 270deg,
  rgba(255,255,255,0.70)  0deg,
  rgba(255,255,255,0.70)  120deg,
  rgba(0,0,0,0.22)        150deg,
  rgba(0,0,0,0.22)        180deg,
  rgba(255,255,255,0.55)  210deg,
  rgba(255,255,255,0.55)  330deg,
  rgba(0,0,0,0.22)        360deg,
  rgba(255,255,255,0.70)  400deg
)`;
 
const MASK =
  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)";
 
function GlassPill({ children, hasDot = false, size = "lg" }) {
  const pad = size === "lg"
    ? { paddingTop: 5, paddingBottom: 5, paddingLeft: 8,  paddingRight: 12 }
    : { paddingTop: 5, paddingBottom: 6, paddingLeft: 16, paddingRight: 16 };
 
  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      {/* Glimmering border ring */}
      <div
        aria-hidden
        style={{
          position:              "absolute",
          inset:                 -1.5,
          borderRadius:          9999,
          background:            GLIMMER_BORDER,
          WebkitMask:            MASK,
          WebkitMaskComposite:   "xor",
          maskComposite:         "exclude",
          padding:               1.5,
          pointerEvents:         "none",
        }}
      />
      {/* Pill body */}
      <div
        style={{
          display:      "inline-flex",
          alignItems:   "center",
          gap:           hasDot ? 8 : 0,
          borderRadius: 9999,
          background:   "rgba(255,255,255,0.20)",
          border:       "none",
          position:     "relative",
          zIndex:        1,
          ...pad,
        }}
      >
        {hasDot && (
          <span
            style={{
              width:        7,
              height:       7,
              borderRadius: "9999px",
              background:   "#00D17E",
              flexShrink:   0,
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
 
function StatCol({ number, suffix, subtext, pill }) {
  return (
    <div
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:            16,
        flex:           1,
      }}
    >
      {/* Big number — Manrope 800 */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span
          style={{
            fontFamily:    "'Manrope', sans-serif",
            fontWeight:    800,
            fontSize:      96,
            lineHeight:    "70.4px",
            letterSpacing: "-1.92px",
            color:         "white",
          }}
        >
          {number}
        </span>
        <span
          style={{
            fontFamily:    "'Manrope', sans-serif",
            fontWeight:    800,
            fontSize:      24,
            lineHeight:    "70.4px",
            letterSpacing: "-1.92px",
            color:         "#25D16F",
          }}
        >
          {suffix}
        </span>
      </div>
 
      {/* Subtext — Inter 500 */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize:   16,
          lineHeight: "25.6px",
          color:      "#E6E6E6",
          textAlign:  "center",
          maxWidth:   220,
          margin:     0,
        }}
      >
        {subtext}
      </p>
 
      {/* Small pill — Manrope 500 */}
      <GlassPill size="sm">
        <span
          style={{
            fontFamily:    "'Manrope', sans-serif",
            fontWeight:    500,
            fontSize:      11,
            lineHeight:    "16.5px",
            letterSpacing: "1.1px",
            color:         "#25D16F",
            textTransform: "uppercase",
          }}
        >
          {pill}
        </span>
      </GlassPill>
    </div>
  );
}
 
function StatDivider() {
  return (
    <div
      style={{
        display:    "flex",
        alignItems: "center",
        alignSelf:  "stretch",
        padding:    "16px 0",
      }}
    >
      <div style={{ width: 1, height: "100%", background: "rgba(0,209,126,0.15)" }} />
    </div>
  );
}
 
export default function Results() {
  return (
    <section
      className="page-x-pad"
      style={{
        background:    "#1A5C38",
        paddingTop:    80,
        paddingBottom: 80,
        position:      "relative",
        overflow:      "hidden",
      }}
    >
      {/* ── Big decorative circle — layered over text via zIndex ── */}
      <div
        aria-hidden
        style={{
          position:     "absolute",
          width:        BIG_CIRCLE.width,
          height:       BIG_CIRCLE.height,
          top:          BIG_CIRCLE.top,
          right:        BIG_CIRCLE.right,
          borderRadius: "9999px",
          background:   "rgba(0,209,126,0.20)",
          opacity:      0.15,
          zIndex:       BIG_CIRCLE.zIndex,
          pointerEvents:"none",
        }}
      />
 
      <div className="page-container" style={{ position: "relative", zIndex: 1 }}>
 
        {/* ── Top pill — left aligned ── */}
        <div style={{ marginBottom: 20 }}>
          <GlassPill hasDot size="lg">
            <span
              style={{
                fontFamily:    "'Manrope', sans-serif",
                fontWeight:    600,
                fontSize:      13,
                letterSpacing: "0.5px",
                color:         "white",
                textTransform: "uppercase",
              }}
            >
              Results That Speaks
            </span>
          </GlassPill>
        </div>
 
        {/* ── Heading — left aligned ── */}
        <h2
          style={{
            fontFamily:    "'Plus Jakarta Sans', sans-serif",
            fontWeight:    700,
            fontSize:      "clamp(36px, 5vw, 60px)",
            lineHeight:    1.1,
            letterSpacing: "-1px",
            color:         "white",
            textAlign:     "left",
            margin:        "0 0 64px",
          }}
        >
          Powering Your{" "}
          <span style={{ color: "#01D17E" }}>Social Growth</span>
        </h2>
 
        {/* ── Stats row ── */}
        <div style={{ display: "flex", alignItems: "stretch" }}>
          {STATS.map((stat, i) => (
            <>
              <StatCol key={stat.pill} {...stat} />
              {i < STATS.length - 1 && <StatDivider key={`div-${i}`} />}
            </>
          ))}
        </div>
 
      </div>
    </section>
  );
}
