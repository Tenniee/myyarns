const STATS = [
  {
    number:  "10",
    suffix:  "x",
    subtext: "Faster response vs manual",
    pill:    "GROWTH MULTIPLIER",
  },
  {
    number:  "98",
    suffix:  "%",
    subtext: "Customer satisfaction rate",
    pill:    "CLIENT SATISFACTION",
  },
  {
    number:  "80",
    suffix:  "%",
    subtext: "Time saved on DM management",
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
      className="results-stat-col"
      style={{
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        gap:            16,
        flex:           1,
      }}
    >
      {/* Big number — Manrope 800 */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, textAlign: "left" }}>
        <span
          className="results-stat-number"
          style={{
            fontFamily:    "'Manrope', sans-serif",
            fontWeight:    800,
            letterSpacing: "-1.92px",
            color:         "white",
          }}
        >
          {number}
        </span>
        <span
          className="results-stat-suffix"
          style={{
            fontFamily:    "'Manrope', sans-serif",
            fontWeight:    800,
            letterSpacing: "-1.92px",
            color:         "#25D16F",
          }}
        >
          {suffix}
        </span>
      </div>
 
      {/* Subtext — Inter 500 */}
      <p
        className="results-stat-subtext"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize:   16,
          lineHeight: "25.6px",
          color:      "#E6E6E6",
          textAlign:  "center",
          maxWidth:   280,
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
      className="results-stat-divider"
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
      className="page-x-pad results-section"
      style={{
        background:    "#1A5C38",
        position:      "relative",
        overflow:      "hidden",
      }}
    >
      {/* Responsive overrides — inline styles above set the desktop defaults,
          these media queries adjust them for narrower viewports */}
      <style>{`
        .results-section {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .results-heading {
          margin-bottom: 64px;
        }
        .results-stats-row {
          display: flex;
          align-items: stretch;
        }
        .results-stat-divider {
          padding: 16px 0;
        }
        .results-stat-divider > div {
          width: 1px;
          height: 100%;
        }
        .results-stat-number {
          font-size: 96px;
          line-height: 70.4px;
        }
        .results-stat-suffix {
          font-size: 24px;
          line-height: 70.4px;
        }
 
        @media (max-width: 900px) {
          .results-section {
            padding-top: 56px;
            padding-bottom: 56px;
          }
          .results-heading {
            margin-bottom: 40px;
          }
          .results-stats-row {
            flex-direction: column;
            gap: 40px;
          }
          .results-stat-divider {
            display: none;
          }
          .results-stat-col {
            width: 100%;
          }
          .results-stat-subtext {
            max-width: 320px !important;
          }
        }
 
        @media (max-width: 480px) {
          .results-section {
            padding-top: 40px;
            padding-bottom: 40px;
          }
          .results-heading {
            margin-bottom: 32px;
          }
          .results-stat-number {
            font-size: 64px;
            line-height: 1.1;
          }
          .results-stat-suffix {
            font-size: 18px;
            line-height: 1.1;
          }
          .results-stat-subtext {
            font-size: 14px !important;
            line-height: 22px !important;
          }
        }
      `}</style>
 
      {/* ── Big decorative circle — layered over text via zIndex ── */}
      <div
        aria-hidden
        style={{
          position:     "absolute",
          width:        BIG_CIRCLE.width,
          height:       BIG_CIRCLE.height,
          top:          BIG_CIRCLE.top,
          right:        BIG_CIRCLE.right,
          maxWidth:     "80vw",
          maxHeight:    "80vw",
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
          className="results-heading"
          style={{
            fontFamily:    "'Plus Jakarta Sans', sans-serif",
            fontWeight:    700,
            fontSize:      "clamp(32px, 6vw, 60px)",
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
        <div className="results-stats-row">
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