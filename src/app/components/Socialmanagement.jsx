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
 
// placeholder icon inside card
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
    <div style={{
      borderRadius: 32,
      border: "1px solid rgba(255,255,255,0.5)",
      padding: 32,
      background: "rgba(255,255,255,0.7)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
    }}>
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
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700, fontSize: 24, lineHeight: "31.2px",
          color: "#191C1E", margin: 0,
        }}>{header}</h3>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400, fontSize: 16, lineHeight: "24px",
          color: "#3C4A3F", margin: 0, maxWidth: 340,
        }}>{para}</p>
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
    <div style={{background: '#ffff'}}>
      <section
        className="page-x-pad"
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
          <div style={{
            display: "flex", flexDirection: "row",
            gap: 48, alignItems: "flex-start",
          }}>
  
            {/* ══ LEFT COLUMN ══ */}
            <div style={{
              flex: "0 0 495px",
              display: "flex", flexDirection: "column", gap: 24,
            }}>
              {/* Headline */}
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 3.5vw, 48px)",
                lineHeight: "68px",
                letterSpacing: "-0.96px",
                color: "#191C1E",
                margin: 0, maxWidth: 507,
              }}>
                Social Media Management:{" "}
                <span style={{ color: "#25D16F" }}>Helping Business All Size</span>
                {" "}Stay Ahead On Social Media
              </h2>
  
              {/* Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {CARDS.map((c) => <FeatureCard key={c.header} {...c} Icon={c.icon}/>)}
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
  
            {/* ══ RIGHT COLUMN ══ */}
            <div style={{
              flex: 1,
              display: "flex", flexDirection: "column", gap: 20,
              position: "relative",
            }}>
  
              {/* Image 1 */}
              <div style={{
                width: "100%", maxWidth: 697, height: 480,
                borderRadius: 16, overflow: "hidden",
                background: "#e8f5f0",
                position: "relative",
              }}>
                <Image src={TopImage} fill style={{ objectFit: "cover" }} alt="" />
              </div>
  
              {/* Image 2 */}
              <div style={{
                width: "100%", maxWidth: 670,
                borderRadius: 40,
                border: "1px solid rgba(187,203,188,0.3)",
                padding: 32,
                minHeight: 540,
                background: "white",
                boxShadow: "0 8px 10px -6px rgba(0,109,63,0.05)",
                position: "relative",
              }}>
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
                {/* Floating stat card — move via FLOAT_CARD_POS */}
                <div style={{
                  position: "absolute",
                  top: FLOAT_CARD_POS.top,
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
                  top: 100,
                }}>
                  {/* Line 1 — dot + label */}
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
  
                  {/* Line 2 — subtext */}
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 400, fontSize: 14,
                    lineHeight: "20px", color: "#3C4A3F",
                    margin: 0,
                  }}>
                    Response Rate
                  </p>
  
                  {/* Line 3 — big number + lightning */}
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
  );
}