"use client";
 
import Image from "next/image";
import { useState } from "react";
import BackgroundImage from '../../assets/Integration-bg.svg';
import FacebookBlob from '../../assets/Facebook.svg';
import LinkedInBlob from '../../assets/LinkedIn.svg';
import ThreadsBlob from '../../assets/Threads.svg';
import TelegramBlob from '../../assets/Telegram.svg';
import WhatsappBlob from '../../assets/WhatsApp.svg';
import InstagramBlob from '../../assets/Instagram.svg';
import XBlob from '../../assets/Integration-X.svg';
import YoutubBlob from '../../assets/YouTube.svg';
import GirlImage from '../../assets/smiling-young-woman-engaged-with-her-smartphone1.svg';
 
// ═══════════════════════════════════════════════════════════════════
// IMAGE SOURCES — swap paths here
// ═══════════════════════════════════════════════════════════════════
const BG_IMAGE       = BackgroundImage;
const PERSON_IMAGE   = GirlImage;
 
// Left floating images — 4 items
// { src, width, height, radius } — tweak size/radius per image
const LEFT_FLOATS = [
  { src: InstagramBlob, width: 120,  height: 120,  radius: 16 },
  { src: TelegramBlob, width: 80,  height: 80,  radius: 20 },
  { src: WhatsappBlob, width: 100,  height: 100,  radius: 12 },
  { src: XBlob, width: 50,  height: 50,  radius: 16 },
];
 
// Right floating images — 4 items
const RIGHT_FLOATS = [
  { src: ThreadsBlob, width: 80,  height: 80,  radius: 16 },
  { src: FacebookBlob, width: 90,  height: 90,  radius: 20 },
  { src: LinkedInBlob, width: 90,  height: 90,  radius: 12 },
  { src: YoutubBlob, width: 72,  height: 72,  radius: 16 },
];
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING IMAGE POSITIONS — move these to reposition any image
// positions are relative to the person image container
// ═══════════════════════════════════════════════════════════════════
const LEFT_POS = [
  { top:  60,  left: -80  },
  { top: 230,  left: -96  },
  { top: 360,  left: -72  },
  { top: 480,  left: -88  },
];
 
const RIGHT_POS = [
  { top:  80,  right: -80 },
  { top: 210,  right: -76 },
  { top: 350,  right: -92 },
  { top: 520,  right: -88 },
];
 
// ═══════════════════════════════════════════════════════════════════
// GLASS PILL — same final version we agreed on
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
const MASK = "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)";
 
function GlassPill({ children }) {
  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      {/* Glimmer border ring — slightly thinner (1px) */}
      <div
        aria-hidden
        style={{
          position:            "absolute",
          inset:               -1,
          borderRadius:        9999,
          background:          GLIMMER_BORDER,
          WebkitMask:          MASK,
          WebkitMaskComposite: "xor",
          maskComposite:       "exclude",
          padding:             1,
          pointerEvents:       "none",
          width:               "48%",
        }}
      />
      {/* Pill body */}
      <div style={{
        display:      "inline-flex",
        alignItems:   "center",
        borderRadius: 9999,
        background:   "rgba(255,255,255,0.20)",
        border:       "none",
        position:     "relative",
        zIndex:        1,
        paddingTop:    5,
        paddingBottom: 5,
        paddingLeft:   16,
        paddingRight:  16,
      }}>
        {children}
      </div>
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// ARROW RIGHT
// ═══════════════════════════════════════════════════════════════════
function ArrowRight({ color = "white", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING IMAGE — resonates left↔right toward the person image
// side: "left" pulses right (toward center), "right" pulses left
// ═══════════════════════════════════════════════════════════════════
function FloatImg({ src, width, height, radius, pos, side, delay = 0 }) {
  const animName = side === "left" ? "resL" : "resR";
  return (
    <div
      style={{
        position:     "absolute",
        ...pos,
        width,
        height,
        borderRadius: radius,
        overflow:     "hidden",
        animation:    `${animName} 3s ease-in-out ${delay}s infinite`,
        zIndex:        10,
      }}
    >
      {/* swap with your image — placeholder shown if src missing */}
        {src && (
          <Image
            src={src}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        )}
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function Integration() {
  const [btnHov, setBtnHov] = useState(false);
 
  return (
    <>
      <style>{`
        /* Left floats pulse rightward (toward the person) */
        @keyframes resL {
          0%,100% { transform: translateX(0px); }
          50%      { transform: translateX(8px); }
        }
        /* Right floats pulse leftward (toward the person) */
        @keyframes resR {
          0%,100% { transform: translateX(0px); }
          50%      { transform: translateX(-8px); }
        }
      `}</style>
 
      <section style={{
        position:   "relative",
        width:      "100%",
        maxHeight:   700,
        overflow:   "hidden",
        padding:     10,
      }}>
 
        {/* ── Background image ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
        }}>
          {/* swap src with BG_IMAGE when ready */}
          <Image src={BG_IMAGE} fill style={{ objectFit: "cover" }} alt="" />
        </div>
 
        {/* ── Content ── */}
        <div
          className="page-x-pad"
          style={{ position: "relative", zIndex: 1, paddingTop: 80, paddingBottom: 80 }}
        >
          <div className="page-container">
            <div style={{
              display:        "flex",
              flexDirection:  "row",
              alignItems:     "center",
              justifyContent: "space-between",
              gap:             48,
            }}>
 
              {/* ══ LEFT TEXT ══ */}
              <div style={{
                width:         478,
                flexShrink:    0,
                display:       "flex",
                flexDirection: "column",
                gap:            31.4,
              }}>
                {/* Glass pill */}
                <GlassPill>
                  <span style={{
                    fontFamily:    "'Manrope', sans-serif",
                    fontWeight:    600,
                    fontSize:      13,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color:         "white",
                  }}>
                    Our Seamless Integration
                  </span>
                </GlassPill>
 
                {/* Headline */}
                <h2 style={{
                  fontFamily:    "'Plus Jakarta Sans', sans-serif",
                  fontWeight:    700,
                  fontSize:      40,
                  lineHeight:    "48px",
                  letterSpacing: 0,
                  color:         "white",
                  margin:         0,
                  whiteSpace:    "pre-line",
                }}>
                  {"Seamless Integration\nOf Effortless\nManagement"}
                </h2>
 
                {/* Paragraph */}
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize:   19,
                  lineHeight: "30.88px",
                  color:      "rgba(255,255,255,0.80)",
                  margin:      0,
                }}>
                  Connect all your favourite social platforms in one place for smooth team management and seamlessly integrate your tools.
                </p>
 
                {/* CTA button */}
                <button
                  onMouseEnter={() => setBtnHov(true)}
                  onMouseLeave={() => setBtnHov(false)}
                  style={{
                    display:       "inline-flex",
                    alignItems:    "center",
                    gap:            12,
                    alignSelf:     "flex-start",
                    borderRadius:  9999,
                    background:    "#25D16F",
                    border:        "none",
                    paddingTop:    20,
                    paddingBottom: 20,
                    paddingLeft:   40,
                    paddingRight:  40,
                    cursor:        "pointer",
                    transition:    "opacity 0.15s, transform 0.15s",
                    opacity:       btnHov ? 0.88 : 1,
                    transform:     btnHov ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <span style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize:   16,
                    lineHeight: "24px",
                    color:      "white",
                  }}>
                    One-Click Integration
                  </span>
                  <span style={{
                    display:   "inline-flex",
                    transform: btnHov ? "translateX(4px)" : "translateX(0)",
                    transition:"transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                  }}>
                    <ArrowRight />
                  </span>
                </button>
              </div>
 
              {/* ══ RIGHT: person image + floating images ══ */}
              <div style={{
                position: "relative",
                width:     425,
                height:    638,
                flexShrink:0,
                marginRight: '120px',
              }}>
 
                {/* Left floating images */}
                {LEFT_FLOATS.map((img, i) => (
                  <FloatImg
                    key={`lf-${i}`}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    radius={img.radius}
                    pos={LEFT_POS[i]}
                    side="left"
                    delay={i * 0.4}
                  />
                ))}
 
                {/* Person image */}
                <div style={{
                  position:     "relative",
                  width:        "100%",
                  height:       "100%",
                  borderRadius: 24,
                  overflow:     "hidden",
                }}>
                  <Image src={PERSON_IMAGE} fill style={{ objectFit: "cover" }} alt="Integration" />
                </div>
 
                {/* Right floating images */}
                {RIGHT_FLOATS.map((img, i) => (
                  <FloatImg
                    key={`rf-${i}`}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    radius={img.radius}
                    pos={RIGHT_POS[i]}
                    side="right"
                    delay={i * 0.4}
                  />
                ))}
 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}