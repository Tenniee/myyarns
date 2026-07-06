"use client";
 
import Image from "next/image";
import { useState } from "react";
import SchedulingSection1 from '../../assets/SchedulingSection1.svg';
import SchedulingSection2 from '../../assets/SchedulingSection2.svg';
import SchedulingSection3 from '../../assets/SchedulingSection3.svg';
import SchedulingListIcon from '../../assets/SchedulingListIcon.svg';
import SchedulingRightImage from '../../assets/SchedulingRightImage.svg';
import SchedulingSectionCard1 from '../../assets/SchedulingSectionCard1.svg';
import SchedulingSectionCard2 from '../../assets/SchedulingSectionCard2.svg';
 
import SchedulingCardIcon from '../../assets/SchedulingCard.svg';
import SchedulingCalendarIcon from '../../assets/SchedulingCalendar.svg';
import SchedulingLightningIcon from '../../assets/SchedulingLightning.svg';
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING CARD POSITIONS
// ═══════════════════════════════════════════════════════════════════
const CARD1_POS = { top: 40,  left: -30  };
const CARD2_POS = { top: 120, right: -30 };
const CARD3_POS = { bottom: 60, right: -20 };
 
// ═══════════════════════════════════════════════════════════════════
// SHADOW CIRCLES
// ═══════════════════════════════════════════════════════════════════
const SHADOW_CIRCLE_TOP_RIGHT    = { top: -80,    right: -80   };
const SHADOW_CIRCLE_BOTTOM_LEFT  = { bottom: -80, left: -80    };
 
// ═══════════════════════════════════════════════════════════════════
// SOCIAL STATS DATA
// ═══════════════════════════════════════════════════════════════════
const SOCIALS = [
  { name: "Instagram", color: "#E1306C", pct: "84%", barW: 173 },
  { name: "LinkedIn",  color: "#0A66C2", pct: "58%", barW: 119 },
  { name: "WhatsApp",  color: "#25D16F", pct: "92%", barW: 190 },
  { name: "Facebook",  color: "#191C1E", pct: "71%", barW: 146 },
  { name: "Twitter X", color: "#0088CC", pct: "46%", barW: 95  },
];
 
// ═══════════════════════════════════════════════════════════════════
// TAB DATA
// ═══════════════════════════════════════════════════════════════════
const TABS = [
  { icon: SchedulingCardIcon, label: "Collection" },
  { icon: SchedulingCalendarIcon, label: "Scheduling" },
  { icon: SchedulingLightningIcon, label: "Automation" },
];
 
// ═══════════════════════════════════════════════════════════════════
// LIST ITEMS
// ═══════════════════════════════════════════════════════════════════
const LIST_ITEMS = [
  "Multi-Platform Posting",
  "Hashtag & Caption Manager",
  "Content Calendar View",
  "Mobile & Desktop Access",
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
 
function TabIcon({ label }) {
  const icons = 
  { Scheduling: 
    (
      <Image
        src={SchedulingCalendarIcon}
        alt="Scheduling"
        width={15}
        height={15}
      />
    ), 
    Collection: 
    (
      <Image
        src={SchedulingCardIcon}
        alt="Collection"
        width={15}
        height={15}
      />
    ), 
    Automation: (
      <Image
        src={SchedulingLightningIcon}
        alt="Automation"
        width={15}
        height={15}
      />
    ), 
  };
  return <span style={{ fontSize: 13 }}>{icons[label]}</span>;
}
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING CARD WRAPPER
// ═══════════════════════════════════════════════════════════════════
function FloatCard({ children, pos, animClass, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={animClass}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "absolute",
        ...pos,
        borderRadius: 12,
        border: "1px solid rgba(187,203,188,0.3)",
        background: "transparent",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: hov
          ? "0 20px 40px rgba(0,0,0,0.14)"
          : "0 8px 24px rgba(0,0,0,0.07)",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.25s, transform 0.25s",
        zIndex: 10,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function SchedulingSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [btnHov, setBtnHov] = useState(false);
 
  return (
    <>
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
        .fA { animation: floatA 5s ease-in-out infinite; }
        .fB { animation: floatB 6s ease-in-out 0.8s infinite; }
        .fC { animation: floatC 4.5s ease-in-out 1.4s infinite; }
 
        .scheduling-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .scheduling-container {
          width: 100%;
        }
 
        .scheduling-wrapper {
          display: flex;
          flex-direction: row;
          gap: 24px;
          align-items: flex-start;
        }
 
        .scheduling-left {
          flex: 0 0 514px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
 
        .scheduling-label {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 12px;
          line-height: 12px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #25D16F;
          margin: 0;
        }
 
        .scheduling-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(32px, 3.5vw, 48px);
          line-height: 52.8px;
          letter-spacing: -0.96px;
          color: #191C1E;
          margin: 0;
          max-width: 466px;
        }
 
        .scheduling-subhead {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 31.2px;
          color: #006B58;
          margin: 0;
          max-width: 466px;
        }
 
        .scheduling-text {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 28.8px;
          color: #3C4A3F;
          margin: 0;
          max-width: 466px;
        }
 
        .scheduling-tabs {
          display: flex;
          flex-direction: row;
          gap: 8px;
        }
 
        .scheduling-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 9999px;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          transition: background 0.2s;
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 12px;
          line-height: 12px;
          letter-spacing: 0.6px;
          white-space: nowrap;
        }
 
        .scheduling-right {
          flex: 1;
          position: relative;
          min-height: 698px;
          border: 1px solid #BBCBBC4D;
          background: #ffffff4d;
          padding: 15px;
          border-radius: 16px;
        }
 
        .scheduling-image {
          width: 100%;
          height: 698px;
          border-radius: 16px;
          overflow: hidden;
          background: #e8f5f0;
          position: relative;
          padding: 5px;
        }
 
        .scheduling-float {
          display: block;
        }
 
        .scheduling-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
 
        /* ════════════════════════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════════════════════════ */
 
        /* ── Tablet: 1024px and below ── */
        @media (max-width: 1024px) {
          .scheduling-x-pad {
            padding-left: 48px;
            padding-right: 48px;
          }
 
          .scheduling-wrapper {
            gap: 20px;
          }
 
          .scheduling-left {
            flex: 0 0 auto;
          }
 
          .scheduling-heading {
            max-width: 100%;
          }
 
          .scheduling-right {
            min-height: 500px;
          }
 
          .scheduling-image {
            height: 500px;
          }
 
          .scheduling-float {
            display: none;
          }
        }
 
        /* ── Mobile: 768px and below ── */
        @media (max-width: 768px) {
          .scheduling-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
 
          .scheduling-wrapper {
            flex-direction: column;
            gap: 28px;
            align-items: stretch;
          }
 
          .scheduling-left {
            flex: 1;
            gap: 24px;
          }
 
          .scheduling-heading {
            font-size: clamp(24px, 5vw, 32px);
            line-height: 1.2;
            letter-spacing: 0;
            max-width: none;
          }
 
          .scheduling-subhead {
            font-size: 18px;
            line-height: 26px;
            max-width: none;
          }
 
          .scheduling-text {
            font-size: 14px;
            line-height: 20px;
            max-width: none;
          }
 
          .scheduling-tabs {
            flex-wrap: wrap;
            gap: 8px;
          }
 
          .scheduling-tab {
            padding: 8px 12px;
            font-size: 11px;
          }
 
          .scheduling-right {
            min-height: auto;
            padding: 0;
            border: none;
            background: transparent;
          }
 
          .scheduling-image {
            height: 300px;
            border: 1px solid #BBCBBC4D;
            background: #f5f5f5;
            border-radius: 12px;
          }
 
          .scheduling-float {
            display: none;
          }
 
          .scheduling-list {
            gap: 12px;
          }
        }
 
        /* ── Small mobile: 480px and below ── */
        @media (max-width: 480px) {
          .scheduling-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
 
          .scheduling-heading {
            font-size: clamp(20px, 5vw, 28px);
          }
 
          .scheduling-label {
            font-size: 10px;
          }
 
          .scheduling-text {
            font-size: 13px;
            line-height: 18px;
          }
 
          .scheduling-left {
            gap: 20px;
          }
 
          .scheduling-tab {
            padding: 6px 10px;
            font-size: 10px;
          }
 
          .scheduling-image {
            height: 250px;
          }
        }
      `}</style>
 
      <section className="scheduling-x-pad" style={{ background: "white", paddingTop: 80, paddingBottom: 80 }}>
        <div className="scheduling-container">
          <div className="scheduling-wrapper">
 
            {/* ══════════════ LEFT COLUMN ══════════════ */}
            <div className="scheduling-left">
 
              {/* Category label */}
              <p className="scheduling-label">
                OPTIMIZE, AUTOMATE AND SUCCEED
              </p>
 
              {/* Tabs row */}
              <div className="scheduling-tabs">
                {TABS.map((t, i) => {
                  const active = activeTab === i;
                  return (
                    <button
                      key={t.label}
                      onClick={() => setActiveTab(i)}
                      className="scheduling-tab"
                      style={{
                        background: active ? "#25D16F" : "#ECEEF0",
                        color: active ? "white" : "#3C4A3F",
                      }}
                    >
                      <TabIcon label={t.label} />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
 
              {/* Main headline */}
              <h2 className="scheduling-heading">
                Unlock Powerful<br />Social Media Tool
              </h2>
 
              {/* Sub-header */}
              <p className="scheduling-subhead">
                Social Media Scheduling Solution
              </p>
 
              {/* Paragraph */}
              <p className="scheduling-text">
                Plan, create, schedule and publish across all
                platforms from one dashboard. Effortlessly manage
                weeks of content in hours.
              </p>
 
              {/* List */}
              <div className="scheduling-list">
                {LIST_ITEMS.map((item) => (
                  <div key={item} style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "center" }}>
                    <div style={{
                      width: 24.67, height: 24.67, borderRadius: "9999px",
                      padding: 0, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Image src={SchedulingListIcon} alt="" style={{width: '150%'}}/>
                    </div>
                    <span style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400, fontSize: 16,
                      lineHeight: "24px", color: "#191C1E",
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
 
              {/* CTA button */}
              <button
                onMouseEnter={() => setBtnHov(true)}
                onMouseLeave={() => setBtnHov(false)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  alignSelf: "flex-start",
                  borderRadius: 9999, border: "none",
                  paddingTop: 20, paddingBottom: 20,
                  paddingLeft: 40, paddingRight: 40,
                  background: "#25D16F", cursor: "pointer",
                  boxShadow: "0 8px 10px -6px rgba(0,109,63,0.30), 0 20px 25px -5px rgba(0,109,63,0.30)",
                  transition: "opacity 0.15s, transform 0.15s",
                  opacity: btnHov ? 0.88 : 1,
                  transform: btnHov ? "scale(1.02)" : "scale(1)",
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
                  transform: btnHov ? "translateX(5px)" : "translateX(0)",
                  transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                }}>
                  <ArrowRight />
                </span>
              </button>
            </div>
 
            {/* ══════════════ RIGHT COLUMN ══════════════ */}
            <div className="scheduling-right">
 
              {/* Main image */}
              <div className="scheduling-image">
                {/* Shadow circle — top right */}
                <div aria-hidden style={{
                  position: "absolute",
                  ...SHADOW_CIRCLE_TOP_RIGHT,
                  width: 320, height: 320, borderRadius: "9999px",
                  background: "rgba(0,107,88,0.05)",
                  filter: "blur(64px)",
                  pointerEvents: "none", zIndex: 1,
                }} />
                {/* Shadow circle — bottom left */}
                <div aria-hidden style={{
                  position: "absolute",
                  ...SHADOW_CIRCLE_BOTTOM_LEFT,
                  width: 320, height: 320, borderRadius: "9999px",
                  background: "rgba(0,107,88,0.05)",
                  filter: "blur(64px)",
                  pointerEvents: "none", zIndex: 1,
                }} />
                <Image src={SchedulingRightImage} fill style={{ objectFit: "cover" }} alt="" />
              </div>
 
              {/* ── Floating card 1 — upper left ── */}
              <FloatCard pos={CARD1_POS} animClass="fA scheduling-float" style={{ padding: 16, minWidth: 212 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: "rgba(0,109,63,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Image src={SchedulingSectionCard1} alt="" style={{width: '60%'}}/>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 700, fontSize: 12,
                      lineHeight: "12px", letterSpacing: "0.6px",
                      color: "#3C4A3F", textTransform: "uppercase",
                    }}>Instagram Growth</span>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700, fontSize: 24,
                      lineHeight: "31.2px", color: "#191C1E",
                    }}>+24.8%</span>
                  </div>
                </div>
              </FloatCard>
 
              {/* ── Floating card 2 — social stats ── */}
              <FloatCard
                pos={CARD2_POS}
                animClass="fB scheduling-float"
                style={{ padding: 24, width: 256, borderRadius: 16 }}
              >
                {/* Header */}
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700, fontSize: 12,
                  lineHeight: "12px", letterSpacing: "0.6px",
                  textTransform: "uppercase", color: "#3C4A3F",
                  margin: "0 0 16px",
                }}>
                  CHANNEL PERFORMANCE
                </p>
 
                {/* Social bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {SOCIALS.map((s) => (
                    <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {/* Name + pct */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700, fontSize: 12,
                          lineHeight: "12px", letterSpacing: "0.6px",
                          color: s.color,
                        }}>{s.name}</span>
                        <span style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 700, fontSize: 12,
                          lineHeight: "12px", letterSpacing: "0.6px",
                          color: "#191C1E",
                        }}>{s.pct}</span>
                      </div>
                      {/* Bar track */}
                      <div style={{
                        width: "100%", height: 6, borderRadius: 9999,
                        background: "rgba(60,74,63,0.10)", position: "relative",
                      }}>
                        <div style={{
                          width: s.barW, height: 6,
                          borderRadius: 9999, background: s.color,
                          position: "absolute", top: 0, left: 0,
                          maxWidth: "100%",
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </FloatCard>
 
              {/* ── Floating card 3 — lower right ── */}
              <FloatCard
                pos={CARD3_POS}
                animClass="fC scheduling-float"
                style={{ padding: 16, minWidth: 206 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Icon box */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Image src={SchedulingSectionCard2} width={50} height={50} alt="" />
                  </div>
                  {/* Text */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 700, fontSize: 12,
                      lineHeight: "12px", letterSpacing: "0.6px",
                      color: "#3C4A3F", textTransform: "uppercase",
                    }}>Scheduled Today</span>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700, fontSize: 24,
                      lineHeight: "31.2px", color: "#191C1E",
                    }}>12 Posts</span>
                  </div>
                </div>
              </FloatCard>
 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}