"use client";
 
import Image from "next/image";
import { useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING CARD POSITIONS — move via these constants
// ═══════════════════════════════════════════════════════════════════
const CARD1_POS = { top: 40,  left: -30  }; // upper-left of image
const CARD2_POS = { top: 120, right: -30 }; // upper-right of image
const CARD3_POS = { bottom: 60, right: -20 }; // lower-right of image
 
// ═══════════════════════════════════════════════════════════════════
// SHADOW CIRCLES — move via these constants
// top-right and bottom-left of the image
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
  { icon: "", label: "Scheduling" },
  { icon: "", label: "Analytics" },
  { icon: "", label: "Engagement" },
];
 
// ═══════════════════════════════════════════════════════════════════
// LIST ITEMS
// ═══════════════════════════════════════════════════════════════════
const LIST_ITEMS = [
  "Schedule posts across all platforms",
  "AI-powered caption suggestions",
  "Bulk upload and calendar view",
  "Auto-publish at peak times",
];
 
// ═══════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════
function CheckCircle({ color = "#25D16F", size = 24.67 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
 
function ArrowRight({ color = "white", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
function CalendarIcon({ size = 20, color = "#3C4A3F" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
 
function TabIcon({ label }) {
  const icons = { Scheduling: "📅", Analytics: "📊", Engagement: "💬" };
  return <span style={{ fontSize: 13 }}>{icons[label]}</span>;
}
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING CARD WRAPPER — handles float + hover lift animation
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
      `}</style>
 
      <section className="page-x-pad" style={{ background: "white", paddingTop: 80, paddingBottom: 80 }}>
        <div className="page-container">
          <div style={{ display: "flex", flexDirection: "row", gap: 24, alignItems: "flex-start" }}>
 
            {/* ══════════════ LEFT COLUMN ══════════════ */}
            <div style={{
              flex: "0 0 514px",
              display: "flex", flexDirection: "column", gap: 32,
              paddingTop: 16, paddingBottom: 16,
              paddingLeft: 24, paddingRight: 24,
            }}>
 
              {/* Category label */}
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700, fontSize: 12,
                lineHeight: "12px", letterSpacing: "1.2px",
                textTransform: "uppercase", color: "#25D16F",
                margin: 0,
              }}>
                Smart Scheduling
              </p>
 
              {/* Tabs row */}
              <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                {TABS.map((t, i) => {
                  const active = activeTab === i;
                  return (
                    <button
                      key={t.label}
                      onClick={() => setActiveTab(i)}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        borderRadius: 9999, border: "none",
                        paddingTop: 8, paddingBottom: 8,
                        paddingLeft: 16, paddingRight: 16,
                        background: active ? "#25D16F" : "#ECEEF0",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      <TabIcon label={t.label} />
                      <span style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700, fontSize: 12,
                        lineHeight: "12px", letterSpacing: "0.6px",
                        color: active ? "white" : "#3C4A3F",
                        whiteSpace: "nowrap",
                      }}>
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>
 
              {/* Main headline */}
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800, fontSize: "clamp(32px, 3.5vw, 48px)",
                lineHeight: "52.8px", letterSpacing: "-0.96px",
                color: "#191C1E", margin: 0, maxWidth: 466,
              }}>
                Schedule Smarter,<br />Grow Faster
              </h2>
 
              {/* Sub-header */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700, fontSize: 24,
                lineHeight: "31.2px", color: "#006B58",
                margin: 0, maxWidth: 466,
              }}>
                One calendar. Every channel. Zero stress.
              </p>
 
              {/* Paragraph */}
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 400, fontSize: 18,
                lineHeight: "28.8px", color: "#3C4A3F",
                margin: 0, maxWidth: 466,
              }}>
                Plan weeks of content in minutes. MyYarns lets you queue, reschedule
                and auto-publish across every platform from a single drag-and-drop calendar.
              </p>
 
              {/* List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {LIST_ITEMS.map((item) => (
                  <div key={item} style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "center" }}>
                    <div style={{
                      width: 24.67, height: 24.67, borderRadius: "9999px",
                      padding: 4, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <CheckCircle size={24.67} />
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
            <div style={{
              flex: 1, position: "relative",
              minHeight: 698,
            }}>
 
              {/* Main image */}
              <div style={{
                width: "100%", height: 698, borderRadius: 16, overflow: "hidden",
                background: "#e8f5f0", position: "relative",
              }}>
                {/* Shadow circle — top right. Move via SHADOW_CIRCLE_TOP_RIGHT */}
                <div aria-hidden style={{
                  position: "absolute",
                  ...SHADOW_CIRCLE_TOP_RIGHT,
                  width: 320, height: 320, borderRadius: "9999px",
                  background: "rgba(0,107,88,0.05)",
                  filter: "blur(64px)",
                  pointerEvents: "none", zIndex: 1,
                }} />
                {/* Shadow circle — bottom left. Move via SHADOW_CIRCLE_BOTTOM_LEFT */}
                <div aria-hidden style={{
                  position: "absolute",
                  ...SHADOW_CIRCLE_BOTTOM_LEFT,
                  width: 320, height: 320, borderRadius: "9999px",
                  background: "rgba(0,107,88,0.05)",
                  filter: "blur(64px)",
                  pointerEvents: "none", zIndex: 1,
                }} />
                {/* <Image src="/images/scheduling-preview.png" fill style={{ objectFit: "cover" }} alt="" /> */}
                <div style={{
                  width: "100%", height: "100%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#aaa", fontSize: 14,
                }}>Image goes here</div>
              </div>
 
              {/* ── Floating card 1 — upper left (simple card) ── */}
              <FloatCard pos={CARD1_POS} animClass="fA" style={{ padding: 16, minWidth: 212 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: "rgba(0,109,63,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <CalendarIcon size={22} color="#1A5C38" />
                  </div>
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
 
              {/* ── Floating card 2 — social stats ── */}
              <FloatCard
                pos={CARD2_POS}
                animClass="fB"
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
                  Platform Reach
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
 
              {/* ── Floating card 3 — lower right (posts scheduled) ── */}
              <FloatCard
                pos={CARD3_POS}
                animClass="fC"
                style={{ padding: 16, minWidth: 206 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Icon box */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: "rgba(0,109,63,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {/* <Image src="/icons/posts.svg" width={24} height={24} alt="" /> */}
                    <CalendarIcon size={20} color="#1A5C38" />
                  </div>
                  {/* Text */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 700, fontSize: 12,
                      lineHeight: "12px", letterSpacing: "0.6px",
                      color: "#3C4A3F", textTransform: "uppercase",
                    }}>Posts This Week</span>
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