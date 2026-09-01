"use client";
 
import { useState } from "react";
import IntegrationPhoto from "../../assets/Integrations-photo(2).svg";
import Image from "next/image";
import social from "../../assets/Social-Icons.svg";
import social1 from "../../assets/Social-Icons(1).svg";
import social2 from "../../assets/Social-Icons(2).svg";
import social3 from "../../assets/Social-Icons(3).svg";
import social4 from "../../assets/Social-Icons(4).svg";
import social5 from "../../assets/Social-Icons(5).svg";
import social6 from "../../assets/Social-Icons(6).svg";
import social7 from "../../assets/Social-Icons(7).svg";
 
// ═══════════════════════════════════════════════════════════════════
// SWAP POINTS — replace with your real assets/copy, nothing else
// needs to change
// ═══════════════════════════════════════════════════════════════════
const MAIN_IMAGE_SRC = IntegrationPhoto; // ← swap for the real left-side photo
const BUTTON_HREF = "#integrate";
 
// The 8 platform icons in the row. Swap `Icon` for your real logo
// components/SVGs — these are generic placeholder glyphs so nothing
// trademarked is baked in by default.
const PLATFORM_ICONS = [
  { id: "chat",   bg: "#25D16F", icon: "chat"   },
  { id: "camera", bg: "#006D3F", icon: "camera" },
  { id: "play",   bg: "#00A859", icon: "play"   },
  { id: "send",   bg: "#25D16F", icon: "send"   },
  { id: "at",     bg: "#006D3F", icon: "at"     },
  { id: "hash",   bg: "#00A859", icon: "hash"   },
  { id: "heart",  bg: "#25D16F", icon: "heart"  },
  { id: "share",  bg: "#006D3F", icon: "share"  },
];
 
// ═══════════════════════════════════════════════════════════════════
// TRUST BADGE POSITION — move via top/left, resize via the card's own
// width/height rules further down (it's a "hug" box, so it grows with
// its content — these just anchor it over the image).
// ═══════════════════════════════════════════════════════════════════
const TRUST_BADGE_POS = { top: 380, left: 32 };
 
// ═══════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════
function ArrowRight({ color = "white", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
// simple two-person glyph for the trust badge's circular icon
function PeopleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
 
// generic placeholder glyphs for the platform icon row — swap for real logos
function PlatformGlyph({ type, size = 24 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "chat":
      return <Image src={social} alt="chat" width={size} height={size} />;
    case "camera":
      return <Image src={social1} alt="camera" width={size} height={size} />;
    case "play":
      return <Image src={social2} alt="play" width={size} height={size} />;
    case "send":
      return <Image src={social3} alt="send" width={size} height={size} />;
    case "at":
      return <Image src={social4} alt="at" width={size} height={size} />;
    case "hash":
      return <Image src={social5} alt="hash" width={size} height={size} />;
    case "heart":
      return <Image src={social6} alt="heart" width={size} height={size} />;
    case "share":
      return <Image src={social7} alt="share" width={size} height={size} />;
    default:
      return null;
  }
}
 
export default function IntegrationSplit() {
  const [btnHov, setBtnHov] = useState(false);
 
  return (
    <>
      <style>{`
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        .icon-bounce {
          animation: iconBounce 1.8s ease-in-out infinite;
        }
 
        .split-shell {
          display: flex;
          flex-direction: row;
          max-height: 80vh;
          background: white;
        }
 
        .split-image-col {
          flex: 0 0 50%;
          position: relative;
          overflow: hidden;
        }
 
        .split-content-col {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 80px;
          box-sizing: border-box;
        }
 
        .split-headline {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.15;
          letter-spacing: -1px;
          margin: 0;
        }
 
        @media (max-width: 900px) {
          .split-image-col { display: none; }
          .split-content-col { padding: 40px 24px; }
        }
      `}</style>
 
      <div className="split-shell" id="developers">
 
        {/* ══════════════ LEFT — full-bleed image ══════════════ */}
        <div className="split-image-col">
          {/*<Image
            src={IntegrationPhoto}
            alt="Team using MyYarns"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            width={100}
            height={100}
            loading="eager"
          />*/}

          <Image
            src={MAIN_IMAGE_SRC}
            alt="Team using MyYarns"
            style={{
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
 
          {/* gradient overlay — #00261199 (60% alpha) on the left fading to 0% on the right */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, #00261199 0%, rgba(0,38,17,0) 100%)",
            }}
          />
 
          {/* Trust badge card */}
          <div style={{
            position: "absolute",
            top: TRUST_BADGE_POS.top,
            left: TRUST_BADGE_POS.left,
            maxWidth: 320,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            padding: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 9999,
              background: "#25D16F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <PeopleIcon size={20} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                lineHeight: "20px",
                color: "white",
              }}>
                2,500+ teams
              </span>
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "18px",
                color: "rgba(255,255,255,0.85)",
              }}>
                growing with MyYarns
              </span>
            </div>
          </div>
        </div>
 
        {/* ══════════════ RIGHT — content ══════════════ */}
        <div className="split-content-col">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 28, textAlign: "left", maxWidth: 560 }}>
 
            {/* Pill */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 9999,
              border: "1px solid #006D3F1A",
              background: "#E6FAF2",
              padding: "6px 16px",
            }}>
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#25D16F",
              }}>
                One Seamless Integration
              </span>
            </div>
 
            {/* Headline — exact 3-line break on desktop, wraps naturally on mobile */}
            <h1 className="split-headline">
              <span style={{ color: "#595959" }}>Grow </span>
              <span style={{ color: "#25D16F" }}>every</span>
              <br className="lg-only-break" />{" "}
              <span style={{ color: "#25D16F" }}>channel</span>
              <span style={{ color: "#595959" }}> from</span>
              <br className="lg-only-break" />{" "}
              <span style={{ color: "#595959" }}>one dashboard.</span>
            </h1>
 
            {/* Subtext */}
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "28px",
              color: "#131927",
              margin: 0,
              maxWidth: 480,
            }}>
              Connect all your favourite social platforms in one place for smooth team management and seamlessly integrate your tools.
            </p>
 
            {/* Platform icon row — bounce animation, staggered delay per icon */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16 }}>
              {PLATFORM_ICONS.map((p, i) => (
                <div
                  key={p.id}
                  className="icon-bounce"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "9999px",
                    background: 'transparent',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animationDelay: `${i * 120}ms`,
                  }}
                >
                  <PlatformGlyph type={p.icon} size={19} />
                </div>
              ))}
            </div>
 
            {/* CTA button */}
            <a
              href={BUTTON_HREF}
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                borderRadius: 9999,
                padding: "20px 40px",
                background: "#25D16F",
                textDecoration: "none",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "white",
                boxShadow: btnHov
                  ? "0 24px 40px -8px rgba(37,209,111,0.50)"
                  : "0 16px 32px -10px rgba(37,209,111,0.35)",
                transform: btnHov ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease",
                filter: btnHov ? "brightness(1.06)" : "brightness(1)",
              }}
            >
              One-Click Integration
              <span style={{
                display: "inline-flex",
                transform: btnHov ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
              }}>
                <ArrowRight />
              </span>
            </a>
 
          </div>
        </div>
      </div>
 
      <style>{`
        .lg-only-break { display: block; }
        @media (max-width: 900px) {
          .lg-only-break { display: none; }
        }
      `}</style>
    </>
  );
}