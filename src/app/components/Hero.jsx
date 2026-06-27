"use client";
 
import Image from "next/image";
import mainImage from '../../assets/SaaS-platform-visualization.svg'
import blob1 from '../../assets/Overlay+Border+OverlayBlur1-blob.svg'
import blob2 from '../../assets/Overlay+Border+OverlayBlur-blob.svg'
import blob3 from '../../assets/Overlay+Border+OverlayBlur2-blob.svg'
import blob4 from '../../assets/Overlay+Border+OverlayBlur3-blob.svg'
import blob5 from '../../assets/Telegram-Icon-blob.svg'
import blob6 from '../../assets/Threads-Icon-blob.svg'
import blob7 from '../../assets/WhatsApp-Icon-blob.svg'
import blob8 from '../../assets/X(Twitter)-Icon-blob.svg'
import blob9 from '../../assets/YouTube-Icon-blob.svg'
import TrustAvatars from '../../assets/ContainerTrustAvatars.svg'
// ═══════════════════════════════════════════════════════════════════
// IMAGE SOURCES — swap these paths, nothing else needs to change
// ═══════════════════════════════════════════════════════════════════
const MAIN_IMAGE_SRC     = mainImage;
const TRUST_AVATARS_SRC  = TrustAvatars;
 
// 7 floating square/circle thumbnails
const SQUARE_IMGS = [
  blob1,
  blob9,
  blob7,
  blob4,
  blob5,
  blob3,
  blob6, // ← circle variant
  blob9, // ← circle variant
];
 
// which of the 7 above are rendered as circles (0-based index)
const CIRCLE_SQ_INDICES = [5, 6];
 
// 2 stacked circle images on the right edge
const STACKED_CIRCLE_IMGS = [
  blob8,
  blob2,
];
 
// ═══════════════════════════════════════════════════════════════════
// POSITIONS — change numbers here to move any element
// Each object accepts: top, bottom, left, right (all in px)
// ═══════════════════════════════════════════════════════════════════
const POS = {
  mainImage:     { bottom: -30,  left: -50          },
  cardTopRight:  { top: 100,      right: 20        },
  cardBotLeft:   { bottom: 20,  left: -30         },
  stackCircle1:  { top: 150,    right: -70        },
  stackCircle2:  { top: 240,    right: -70        },
  // 7 square/circle thumbs — add/remove entries freely
  squares: [
    { top: 490, left: 330  },
    { top: 430, left: 190 },
    { top: -60, left: -40 },
    { top: -210, left: -90 },
    { top: -20, left: 580 },
    { top: -220, left: -40  }, // circle
    { top: -200, left: -65 }, // circle
  ],
};
 
// ═══════════════════════════════════════════════════════════════════
// BACKGROUND CIRCLE — move via top/left, size via width/height
// ═══════════════════════════════════════════════════════════════════
const BG_CIRCLE = {
  width:  800,
  height: 800,
  top:    "calc(100% - 560px)",  // ← positive = lower, negative = higher
  left:   "264px",               // ← positive = more right
};
 
// ═══════════════════════════════════════════════════════════════════
// ANIMATIONS — tweak durations/distances here
// ═══════════════════════════════════════════════════════════════════
const KEYFRAMES = `
  @keyframes floatA {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-10px); }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-7px); }
  }
  @keyframes floatC {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-14px); }
  }
  @keyframes floatD {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    50%     { transform: translateY(-8px) rotate(0.6deg); }
  }
  @keyframes spinOnce {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes scaleIn {
    0%   { transform: scale(0.82); opacity: 0; }
    100% { transform: scale(1);    opacity: 1; }
  }
  .fa { animation: floatA 4s   ease-in-out 0s    infinite; }
  .fb { animation: floatB 5s   ease-in-out 0.5s  infinite; }
  .fc { animation: floatC 3.5s ease-in-out 1s    infinite; }
  .fd { animation: floatD 5s   ease-in-out 0s    infinite; }
  .fe { animation: floatB 4.5s ease-in-out 0.8s  infinite; }
  .ff { animation: floatA 6s   ease-in-out 0.3s  infinite; }
  .spin-once { animation: spinOnce 0.7s ease-out forwards; }
  .scale-in  { animation: scaleIn  0.5s ease-out forwards; }
`;
 
// animation class assigned to each of the 7 squares (by index)
const SQ_ANIM = ["fa","fb","fc","fd","fe","spin-once fb","spin-once fc"];
 
export default function Hero() {
  return (
    <>
      <style>{KEYFRAMES}</style>
 
      <section className="page-x-pad bg-white relative overflow-hidden py-16 lg:py-24">
 
        {/* ── Background glow circle ── */}
        <div
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            width:      BG_CIRCLE.width,
            height:     BG_CIRCLE.height,
            top:        BG_CIRCLE.top,
            left:       BG_CIRCLE.left,
            background: "rgba(0,209,126,0.05)",
            filter:     "blur(120px)",
            zIndex:     0,
          }}
        />
 
        <div className="page-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
 
            {/* ══════════════════ LEFT ══════════════════ */}
            <div className="flex-1 flex flex-col gap-6 max-w-[580px]">
 
              {/* Headline */}
              <h1
                style={{
                  fontFamily:    "'Inter', sans-serif",
                  fontWeight:    800,
                  fontSize:      "clamp(36px, 5.5vw, 64px)",
                  lineHeight:    1.1,
                  letterSpacing: "-1.92px",
                  color:         "#0F0D0A",
                  margin:        0,
                }}
              >
                Manage.
                <br />
                <span
                  style={{
                    background:             "linear-gradient(90deg, #00D17E 0%, #006D3F 100%)",
                    WebkitBackgroundClip:   "text",
                    WebkitTextFillColor:    "transparent",
                    backgroundClip:        "text",
                  }}
                >
                  Engage.
                </span>
                <br />
                Grow.
                <br />
                All In One Place.
              </h1>
 
              {/* Subtext */}
              <p
                style={{
                  fontFamily:  "'Inter', sans-serif",
                  fontWeight:  400,
                  fontSize:    22,
                  lineHeight:  "30.88px",
                  color:       "#0F0D0A",
                  maxWidth:    480,
                  margin:      0,
                }}
              >
                Analyze performance, engage your audience
                <br />
                and grow your brand from one powerful platform.
              </p>
 
              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
 
                {/* Start Scheduling Now */}
                <button
                  className="group flex items-center gap-3 text-white font-semibold
                             transition-all duration-200
                             hover:scale-[1.03] hover:brightness-110
                             active:scale-[0.97]"
                  style={{
                    fontFamily:  "'Inter', sans-serif",
                    fontSize:    16,
                    background:  "#25D16F",
                    borderRadius: 9999,
                    height:      55,
                    paddingLeft:  32,
                    paddingRight: 32,
                    border:      "none",
                    boxShadow:   "0 25px 50px -12px rgba(0,209,126,0.30)",
                    cursor:      "pointer",
                    whiteSpace:  "nowrap",
                  }}
                >
                  Start Scheduling Now
                  <svg
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="white" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
 
                {/* Watch Demo */}
                <button
                  className="group flex items-center gap-3 font-medium
                             transition-all duration-200
                             hover:bg-gray-50 hover:scale-[1.02]
                             active:scale-[0.97]"
                  style={{
                    fontFamily:   "'Inter', sans-serif",
                    fontSize:     16,
                    color:        "#0F0D0A",
                    background:   "white",
                    borderRadius: 9999,
                    paddingTop:    20,
                    paddingBottom: 20,
                    paddingLeft:   40,
                    paddingRight:  40,
                    border:       "1px solid #e5e7eb",
                    cursor:       "pointer",
                    whiteSpace:   "nowrap",
                  }}
                >
                  <span
                    className="flex items-center justify-center shrink-0
                               transition-transform duration-200 group-hover:scale-110"
                    style={{
                      width:        26,
                      height:       26,
                      borderRadius: "9999px",
                      background:   "#3C4A3F",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </span>
                  Watch Demo
                </button>
              </div>
 
              {/* Trusted by strip */}
              <div className="flex items-center gap-4 mt-2">
                <div className="relative shrink-0" style={{ width: 112, height: 48 }}>
                  <Image
                    src={TRUST_AVATARS_SRC}
                    alt="Trusted team avatars"
                    
                    className="object-contain"
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize:   16,
                    lineHeight: "25.6px",
                    color:      "#0F0D0A",
                    margin:     0,
                  }}
                >
                  Trusted by{" "}
                  <strong style={{ fontWeight: 700 }}>2,500+</strong>
                  {" "}teams worldwide
                </p>
              </div>
            </div>
 
            {/* ══════════════════ RIGHT ══════════════════
                All positions controlled by the POS object at the top of the file.
                Outer div height = bounding box. Increase if images overflow.
            ════════════════════════════════════════════ */}
            <div
              className="relative hidden lg:block flex-1 w-full"
              style={{ height: 560, minWidth: 0 }}
            >
 
              {/* ── Main large image ── */}
              <div
                className="absolute fa scale-in"
                style={{
                  width:        730,
                  height:       474,
                  borderRadius: 24,
                  ...POS.mainImage,
                }}
              >
                <Image
                  src={MAIN_IMAGE_SRC}
                  alt="Platform preview"
                  fill
                  className="object-cover"
                  style={{
                    borderRadius: 24,
                    filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.1)) drop-shadow(0 20px 25px rgba(0,0,0,0.1))",
                  }}
                />
              </div>
 
              {/* ── Top-right growth rate card ── */}
              <div
                className="absolute fd"
                style={{
                  width:        211,
                  borderRadius: 16,
                  border:       "1px solid rgba(0,0,0,0.08)",
                  padding:      20,
                  background:   "white",
                  boxShadow:    "0 8px 10px -6px rgba(0,0,0,0.1), 0 20px 25px -5px rgba(0,0,0,0.1)",
                  display:      "flex",
                  flexDirection:"column",
                  gap:           7,
                  ...POS.cardTopRight,
                }}
              >
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#25D16F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  <span style={{
                    fontFamily:    "'Manrope', sans-serif",
                    fontWeight:    700,
                    fontSize:      10,
                    lineHeight:    "15px",
                    letterSpacing: "1px",
                    color:         "#3C4A3F",
                    textTransform: "uppercase",
                  }}>
                    Growth Rate
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize:   28,
                  lineHeight: "36.4px",
                  color:      "#25D16F",
                  margin:     0,
                }}>
                  +24.8%
                </p>
              </div>
 
              {/* ── Bottom-left AI response card ── */}
              <div
                className="absolute fb"
                style={{
                  width:         246,
                  borderRadius:  16,
                  border:        "1px solid rgba(0,0,0,0.08)",
                  padding:       20,
                  background:    "white",
                  boxShadow:     "0 8px 10px -6px rgba(0,0,0,0.1), 0 20px 25px -5px rgba(0,0,0,0.1)",
                  display:       "flex",
                  flexDirection: "column",
                  gap:            12,
                  ...POS.cardBotLeft,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width:        28,
                      height:       28,
                      borderRadius: "9999px",
                      background:   "rgba(0,209,126,0.1)",
                      border:       "1px solid rgba(0,209,126,0.1)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="#00D17E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </span>
                  <span style={{
                    fontFamily:    "'Manrope', sans-serif",
                    fontWeight:    700,
                    fontSize:      10,
                    letterSpacing: "1px",
                    color:         "#3C4A3F",
                    textTransform: "uppercase",
                  }}>
                    AI Response
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div style={{ width: 200, height: 6.6, borderRadius: 9999, background: "rgba(0,209,126,0.2)" }} />
                  <div style={{ width: 133, height: 6.6, borderRadius: 9999, background: "rgba(0,209,126,0.1)" }} />
                </div>
              </div>
 
              {/* ── 7 square / circle thumbnails ── */}
              {SQUARE_IMGS.map((src, i) => {
                const isCircle = CIRCLE_SQ_INDICES.includes(i);
                const size     = isCircle ? 78 : 97;
                const pos      = POS.squares[i] ?? { top: 440, left: i * 90 };
                const anim     = SQ_ANIM[i] ?? "fa";
                return (
                  <div
                    key={`sq-${i}`}
                    className={`absolute ${anim}`}
                    style={{
                      width:        size,
                      height:       size,
                      borderRadius: isCircle ? "9999px" : 16,
                      background:   "transparent",
                      position:     "relative",   // ← needed for fill to work
                      overflow:     "hidden",     // ← clips image to the rounded corners
                      ...pos,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      style={{ objectFit: "cover", 
                        padding: 0,
                        transformOrigin: "center center" , 
                        objectPosition: "center" ,
                        filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.1)) drop-shadow(0 20px 25px rgba(0,0,0,0.1))",
                      }} 
                    />
                  </div>
                );
              })}
 
              {/* ── 2 stacked circle images (right edge) ── */}
              {STACKED_CIRCLE_IMGS.map((src, i) => {
                const pos  = i === 0 ? POS.stackCircle1 : POS.stackCircle2;
                const anim = i === 0 ? "fc" : "ff";
                return (
                  <div
                    key={`stk-${i}`}
                    className={`absolute ${anim}`}
                    style={{
                      width:  62.8,
                      height: 62.8,
                      background: 'transparent',
                      ...pos,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Circle ${i + 1}`}
                      fill
                      style={{
                        objectFit:    "cover",
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                );
              })}
 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}