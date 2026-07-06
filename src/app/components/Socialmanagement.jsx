"use client";
 
import Image from "next/image";
import { useState } from "react";
import TopImage from '../../assets/6-Great-Tips-to-Become-a-Successful-Social-Media-Consultant1.svg';
import BottomImage from '../../assets/Primary _SmartManagement_Visual(L-Side Bento).svg';
import SocialMediaIcon1 from '../../assets/SocialManagementIcon1.svg';
import SocialMediaIcon2 from '../../assets/SocialManagementIcon2.svg';
import SocialMediaIcon3 from '../../assets/SocialManagementIcon3.svg';
import Lightning from '../../assets/SocialMediaLightning.svg';
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING CARD POSITION — move here
// ═══════════════════════════════════════════════════════════════════
const FLOAT_CARD_POS = { top: -20, right: -20 };
 
// ═══════════════════════════════════════════════════════════════════
// CARDS DATA
// ═══════════════════════════════════════════════════════════════════
const CARDS = [
  {
    icon: SocialMediaIcon1,
    header: "Social Media Schedule",
    para: "Schedule posts across all platforms in one calendar. Plan weeks ahead, publish automatically at the best time.",
  },
  {
    icon: SocialMediaIcon2,
    header: "Social Media Management",
    para: "Manage every customer conversation with AI. Reduce response time from hours to minutes efficiently.",
  },
  {
    icon: SocialMediaIcon3,
    header: "Growth Analytics",
    para: "Track follower growth, engagement, and revenue attributed to social — all in one centralized dashboard.",
  },
];
 
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
 
function LightningIcon({ color = "#25D16F", width = 24, height = 30 }) {
  return (
    <Image src={Lightning} width={width} height={height} alt="" />
  );
}
 
function CardIcon() {
  return (
    <svg width="26.67" height="16" viewBox="0 0 27 16" fill="none"
      stroke="#1A5C38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="25" height="14" rx="3" />
      <line x1="6" y1="5" x2="21" y2="5" />
      <line x1="6" y1="8" x2="16" y2="8" />
      <line x1="6" y1="11" x2="19" y2="11" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// FEATURE CARD
// ═══════════════════════════════════════════════════════════════════
function FeatureCard({ header, para, Icon }) {
  return (
    <div className="sm-feature-card">
      {/* Icon box */}
      <div style={{
        flexShrink: 0,
        width: 58.67,
        paddingTop: 16, paddingRight: 16, paddingBottom: 22, paddingLeft: 16,
        borderRadius: 16,
        background: "rgba(48,226,141,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Image src={Icon} width={26.67} height={16} alt="" />
        <CardIcon />
      </div>
 
      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 className="sm-card-heading">{header}</h3>
        <p className="sm-card-text">{para}</p>
      </div>
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function SocialManagement() {
  const [btnHovered, setBtnHovered] = useState(false);
 
  return (
    <>
      <style>{`
        .sm-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .sm-wrapper {
          display: flex;
          flex-direction: row;
          gap: 48px;
          align-items: flex-start;
        }
 
        .sm-left {
          flex: 0 0 495px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
 
        .sm-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(32px, 3.5vw, 48px);
          line-height: 68px;
          letter-spacing: -0.96px;
          color: #191C1E;
          margin: 0;
          max-width: 507px;
        }
 
        .sm-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }
 
        .sm-image-1 {
          width: 100%;
          max-width: 697px;
          height: 480px;
          border-radius: 16px;
          overflow: hidden;
          background: #e8f5f0;
          position: relative;
        }
 
        .sm-image-2 {
          width: 100%;
          max-width: 670px;
          border-radius: 40px;
          border: 1px solid rgba(187,203,188,0.3);
          padding: 32px;
          min-height: 540px;
          background: white;
          box-shadow: 0 8px 10px -6px rgba(0,109,63,0.05);
          position: relative;
        }
 
        .sm-feature-card {
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.5);
          padding: 32px;
          background: rgba(255,255,255,0.7);
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: flex-start;
        }
 
        .sm-card-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 31.2px;
          color: #191C1E;
          margin: 0;
        }
 
        .sm-card-text {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #3C4A3F;
          margin: 0;
          max-width: 340px;
        }
 
        /* ════════════════════════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════════════════════════ */
 
        /* ── Tablet: 1024px and below ── */
        @media (max-width: 1024px) {
          .sm-x-pad {
            padding-left: 48px;
            padding-right: 48px;
          }
 
          .sm-wrapper {
            gap: 32px;
          }
 
          .sm-left {
            flex: 0 0 420px;
          }
 
          .sm-heading {
            font-size: clamp(28px, 3.5vw, 40px);
            line-height: 1.2;
            max-width: 100%;
          }
 
          .sm-image-1 {
            height: 360px;
          }
 
          .sm-image-2 {
            min-height: 420px;
          }
        }
 
        /* ── Mobile: 768px and below ── */
        @media (max-width: 768px) {
          .sm-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
 
          .sm-wrapper {
            flex-direction: column;
            gap: 28px;
            align-items: stretch;
          }
 
          .sm-left {
            flex: 1;
            gap: 20px;
          }
 
          .sm-heading {
            font-size: clamp(24px, 5vw, 32px);
            line-height: 1.2;
            letter-spacing: 0;
            max-width: none;
          }
 
          /* Hide both right-column images on mobile */
          .sm-right {
            display: none;
          }
 
          .sm-feature-card {
            padding: 20px;
            border-radius: 20px;
            gap: 16px;
          }
 
          .sm-card-heading {
            font-size: 18px;
            line-height: 24px;
          }
 
          .sm-card-text {
            font-size: 14px;
            line-height: 20px;
            max-width: none;
          }
        }
 
        /* ── Small mobile: 480px and below ── */
        @media (max-width: 480px) {
          .sm-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
 
          .sm-heading {
            font-size: clamp(20px, 5vw, 26px);
          }
 
          .sm-feature-card {
            padding: 16px;
            border-radius: 16px;
          }
 
          .sm-card-heading {
            font-size: 16px;
            line-height: 22px;
          }
 
          .sm-card-text {
            font-size: 13px;
            line-height: 18px;
          }
        }
      `}</style>
 
      <div style={{ background: '#ffff' }}>
        <section
          className="sm-x-pad"
          style={{
            background: "#00D17E0D",
            paddingTop: 80, paddingBottom: 80,
            position: "relative", overflow: "hidden",
          }}
        >
          <div className="page-container">
 
            {/* ── Top pill ── */}
            <div style={{ marginBottom: 40 }}>
              <div style={{
                display: "inline-flex", alignItems: "center",
                borderRadius: 9999,
                background: "rgba(0,109,63,0.10)",
                paddingTop: 6, paddingBottom: 6,
                paddingLeft: 16, paddingRight: 16,
              }}>
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600, fontSize: 13,
                  letterSpacing: "0.5px", textTransform: "uppercase",
                  color: "#25D16F",
                }}>
                  PREMIUM SOLUTIONS
                </span>
              </div>
            </div>
 
            {/* ── Two column layout ── */}
            <div className="sm-wrapper">
 
              {/* ══ LEFT COLUMN ══ */}
              <div className="sm-left">
 
                {/* Headline */}
                <h2 className="sm-heading">
                  Social Media Management:{" "}
                  <span style={{ color: "#25D16F" }}>Helping Business All Size</span>
                  {" "}Stay Ahead On Social Media
                </h2>
 
                {/* Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {CARDS.map((c) => <FeatureCard key={c.header} {...c} Icon={c.icon} />)}
                </div>
 
                {/* CTA button */}
                <button
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                  style={{
                    display: "inline-flex", alignItems: "center",
                    gap: 12, alignSelf: "flex-start",
                    borderRadius: 9999,
                    background: "#25D16F",
                    border: "none",
                    paddingTop: 20, paddingBottom: 20,
                    paddingLeft: 40, paddingRight: 40,
                    cursor: "pointer",
                    transition: "opacity 0.15s, transform 0.15s",
                    opacity: btnHovered ? 0.88 : 1,
                    transform: btnHovered ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <span style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700, fontSize: 18,
                    lineHeight: "24px", color: "white",
                  }}>
                    Try Smart Scheduling
                  </span>
                  <span style={{
                    display: "inline-flex",
                    transform: btnHovered ? "translateX(4px)" : "translateX(0)",
                    transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                  }}>
                    <ArrowRight />
                  </span>
                </button>
              </div>
 
              {/* ══ RIGHT COLUMN — hidden on mobile ══ */}
              <div className="sm-right">
 
                {/* Image 1 */}
                <div className="sm-image-1">
                  <Image src={TopImage} fill style={{ objectFit: "cover" }} alt="" />
                </div>
 
                {/* Image 2 */}
                <div className="sm-image-2">
                  <Image src={BottomImage} fill style={{ objectFit: "cover", borderRadius: 40 }} alt="" />
                  <div style={{
                    width: "100%", height: 440,
                    borderRadius: 16,
                    background: "#f0f8f4",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#aaa", fontSize: 14,
                  }}>
                    Image 2
                  </div>
 
                  {/* Floating stat card */}
                  <div style={{
                    position: "absolute",
                    top: 100,
                    right: FLOAT_CARD_POS.right,
                    width: 171.7,
                    borderRadius: 24,
                    border: "1px solid rgba(255,255,255,0.4)",
                    padding: 24,
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    display: "flex", flexDirection: "column", gap: 12,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: "9999px",
                        background: "#25D16F", flexShrink: 0,
                        boxShadow: "0 0 6px rgba(37,209,111,0.7)",
                      }} />
                      <span style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700, fontSize: 12,
                        lineHeight: "12px", letterSpacing: "1.2px",
                        textTransform: "uppercase", color: "#3C4A3F",
                      }}>
                        Live Tracking
                      </span>
                    </div>
 
                    <p style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400, fontSize: 14,
                      lineHeight: "20px", color: "#3C4A3F",
                      margin: 0,
                    }}>
                      Response Rate
                    </p>
 
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700, fontSize: 30,
                        lineHeight: "36px", color: "#191C1E",
                        flex: 1,
                      }}>
                        99.8%
                      </span>
                      <LightningIcon />
                    </div>
                  </div>
                </div>
 
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}