"use client";
 
import Image from "next/image";
import { useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// BACKGROUND BLOBS — move via these constants
// ═══════════════════════════════════════════════════════════════════
const BLOB_CENTER = { top: 1746, left: 57, width: 1432, height: 800 };   // mid-page gradient blob
const BLOB_BOTTOM_LEFT = { bottom: -300, left: -180, width: 600, height: 600 }; // bottom-left green
 
// ═══════════════════════════════════════════════════════════════════
// AI AUTO-REPLIES CIRCLES — protruding out of card 3
// ═══════════════════════════════════════════════════════════════════
const CIRCLE_RIGHT_SIDE = { right: -40, bottom: 80, size: 120 };   // right edge, ~40% visible
const CIRCLE_BOTTOM_RIGHT = { right: -30, bottom: -50, size: 100 }; // bottom-right, ~60% visible
 
// ═══════════════════════════════════════════════════════════════════
// FEATURE CARDS DATA
// ═══════════════════════════════════════════════════════════════════
const TOP_FEATURES = [
  { title: "Unified Inbox", sub: "Every message, every channel. One clean place to respond." },
  { title: "Smart Scheduling", sub: "Queue posts across platforms and let automation handle the rest." },
  { title: "Deep Analytics", sub: "Track reach, engagement and growth with clear visual reports." },
];
 
// ═══════════════════════════════════════════════════════════════════
// GLASS PILL (from Results component)
// ═══════════════════════════════════════════════════════════════════
const GLIMMER = `conic-gradient(from 270deg,rgba(255,255,255,.7) 0deg,rgba(255,255,255,.7) 120deg,rgba(0,0,0,.22) 150deg,rgba(0,0,0,.22) 180deg,rgba(255,255,255,.55) 210deg,rgba(255,255,255,.55) 330deg,rgba(0,0,0,.22) 360deg,rgba(255,255,255,.7) 400deg)`;
const MASK = "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)";
 
// Simple plain pill (not the liquid glass one)
function PlainPill({ children, bg, border, style = {} }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      borderRadius: 9999, background: bg, border, padding: "4px 12px",
      ...style
    }}>
      {children}
    </div>
  );
}
 
// Star icon inside a circle border that touches all star points
function StarInCircle({ size = 11.67, color = "#1A5C38" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
      <circle cx="12" cy="12" r="11" fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points="12,4 14.5,9.5 21,10.5 16.5,15 17.5,21.5 12,18.5 6.5,21.5 7.5,15 3,10.5 9.5,9.5" />
    </svg>
  );
}
 
// Chat icon (unfilled)
function ChatIcon({ color = "#1A5C38", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
 
// Check-in-circle icon
function CheckCircle({ color = "#1A5C38", size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
 
// Trend down icon
function TrendDown({ color = "#25D16F", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
    </svg>
  );
}
 
// Trend up icon
function TrendUp({ color = "#25D16F", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
 
// Arrow right icon
function ArrowRight({ size = 14, color = "#1A5C38" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// FEATURE ROW ITEM (top section left column)
// ═══════════════════════════════════════════════════════════════════
function FeatureItem({ title, sub }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "row", gap: 24,
        padding: 24, borderRadius: 16,
        border: hovered ? "1px solid #52BD95" : "1px solid rgba(187,203,188,0.3)",
        background: "white",
        transition: "border-color 0.2s",
        cursor: "default",
        alignItems: "flex-start",
      }}
    >
      {/* Icon — sits a little higher than header */}
      <div style={{ paddingTop: 0, flexShrink: 0 }}>
        {/* Replace with your <Image> */}
        <div style={{
          width: 56, height: 56, borderRadius: 24,
          background: "rgba(0,209,126,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* <Image src="/icons/feature.svg" width={56} height={56} alt="" /> */}
          <ChatIcon size={22} />
        </div>
      </div>
 
      {/* Text — aligned so icon top is above header top */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400,
          fontSize: 20, lineHeight: "30px", color: "#191C1E", margin: 0,
        }}>{title}</p>
        <p style={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 400,
          fontSize: 16, lineHeight: "24px",
          color: "rgba(60,74,63,0.70)", margin: 0,
        }}>{sub}</p>
      </div>
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function Features() {
  const [learnHovered, setLearnHovered] = useState(false);
 
  return (
    <section style={{ background: "white", position: "relative", overflow: "hidden", paddingBottom: 80 }}>
 
      {/* ── Background blobs ── */}
      {/* Center gradient blob */}
      <div aria-hidden style={{
        position: "absolute",
        top: BLOB_CENTER.top, left: BLOB_CENTER.left,
        width: BLOB_CENTER.width, height: BLOB_CENTER.height,
        borderRadius: 9999,
        background: "linear-gradient(135deg, #00ABD1 0%, #E2E2E2 100%)",
        filter: "blur(120px)",
        opacity: 0.18, pointerEvents: "none", zIndex: 0,
      }} />
      {/* Bottom-left green blob — ~30% off right edge */}
      <div aria-hidden style={{
        position: "absolute",
        bottom: BLOB_BOTTOM_LEFT.bottom, left: BLOB_BOTTOM_LEFT.left,
        width: BLOB_BOTTOM_LEFT.width, height: BLOB_BOTTOM_LEFT.height,
        borderRadius: 9999,
        background: "#25D16F",
        filter: "blur(120px)",
        opacity: 0.15, pointerEvents: "none", zIndex: 0,
      }} />
 
      {/* ════════════════════════════════════════════════════════
          SECTION 1 — Feature items (left) + hero image (right)
      ════════════════════════════════════════════════════════ */}
      <div className="page-x-pad" style={{ paddingTop: 80, position: "relative", zIndex: 1 }}>
        <div className="page-container">
          <div style={{ display: "flex", flexDirection: "row", gap: 48, alignItems: "flex-start" }}>
 
            {/* Left — 3 stacked feature items */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
              {TOP_FEATURES.map((f) => <FeatureItem key={f.title} {...f} />)}
            </div>
 
            {/* Right — hero image */}
            <div style={{ flexShrink: 0 }}>
              <div
                style={{
                  width: 751, height: 419, borderRadius: 24, overflow: "hidden",
                  position: "relative", cursor: "pointer",
                  transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "perspective(900px) rotateY(-4deg) rotateX(2deg) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.16)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                }}
              >
                {/* Replace with your image */}
                <div style={{ width: "100%", height: "100%", background: "#e8f5f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa", fontSize: 14 }}>
                  {/* <Image src="/images/features-hero.png" fill style={{ objectFit: "cover" }} alt="" /> */}
                  Image goes here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* ════════════════════════════════════════════════════════
          SECTION 2 — Pill + Header + Subtext
      ════════════════════════════════════════════════════════ */}
      <div className="page-x-pad" style={{ paddingTop: 96, paddingBottom: 48, position: "relative", zIndex: 1 }}>
        <div className="page-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
 
          {/* Plain pill */}
          <PlainPill bg="#E6FAF2" border="1px solid rgba(0,109,63,0.10)">
            <StarInCircle />
            <span style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14,
              lineHeight: "12px", letterSpacing: "0.6px", textTransform: "uppercase",
              color: "#1A5C38",
            }}>All-in-One Platform</span>
          </PlainPill>
 
          {/* Heading */}
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)", lineHeight: "52.8px", letterSpacing: "-0.96px",
            color: "#191C1E", textAlign: "center", margin: 0,
          }}>
            Everything to manage{" "}
            <span style={{ color: "#25D16F" }}>social media at scale</span>
          </h2>
 
          {/* Subtext */}
          <p style={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 400,
            fontSize: 22, lineHeight: "30px", color: "#3C4A3F",
            textAlign: "center", maxWidth: 741, margin: 0,
          }}>
            Connect, automate and grow — all from one beautifully simple dashboard.
            MyYarns bridges the gap between your brand and your global community.
          </p>
        </div>
      </div>
 
      {/* ════════════════════════════════════════════════════════
          SECTION 3 — Feature cards grid
      ════════════════════════════════════════════════════════ */}
      <div className="page-x-pad" style={{ position: "relative", zIndex: 1 }}>
        <div className="page-container" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
 
          {/* ── Row 1: Card 1 (805px) + Card 2 (402px) ── */}
          <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
 
            {/* Card 1 — Unified Inbox */}
            <div style={{
              flex: "0 0 805px", borderRadius: 24, border: "1px solid rgba(187,203,188,0.3)",
              padding: 32, background: "white", display: "flex", flexDirection: "row",
              gap: 32, overflow: "hidden",
            }}>
              {/* Left text */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Icon + pill row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "rgba(0,209,126,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <ChatIcon size={22} />
                  </div>
                  <PlainPill bg="#9EF3DA" border="none">
                    <span style={{
                      fontFamily: "'ABeeZee', sans-serif", fontWeight: 700, fontSize: 10,
                      lineHeight: "15px", letterSpacing: "-0.5px", textTransform: "uppercase",
                      color: "#10715E",
                    }}>Most Loved</span>
                  </PlainPill>
                </div>
 
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                  fontSize: 24, lineHeight: "31.2px", color: "#191C1E", margin: 0,
                }}>Unified Social Inbox</h3>
 
                <p style={{
                  fontFamily: "'Manrope', sans-serif", fontWeight: 400,
                  fontSize: 18, lineHeight: "24px", color: "#3C4A3F", margin: 0,
                }}>
                  Every DM, comment and mention from Instagram, Facebook, WhatsApp,
                  LinkedIn and Twitter lands in one place. No more switching tabs.
                </p>
 
                {/* Learn more */}
                <button
                  onMouseEnter={() => setLearnHovered(true)}
                  onMouseLeave={() => setLearnHovered(false)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "none", border: "none", padding: 0, cursor: "pointer",
                    fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                    fontSize: 16, lineHeight: "24px", color: "#1A5C38",
                    marginTop: "auto",
                  }}
                >
                  Learn more
                  <span style={{
                    display: "inline-flex",
                    transform: learnHovered ? "translateX(4px)" : "translateX(0)",
                    transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                  }}>
                    <ArrowRight />
                  </span>
                </button>
              </div>
 
              {/* Right image slot */}
              <div style={{
                width: 346, minHeight: 220, borderRadius: 12,
                border: "1px solid rgba(187,203,188,0.3)",
                padding: 16, flexShrink: 0, background: "#f6faf8",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#aaa", fontSize: 13,
              }}>
                {/* <Image src="/images/inbox-preview.png" fill style={{ objectFit: "cover", borderRadius: 12 }} alt="" /> */}
                Image goes here
              </div>
            </div>
 
            {/* Card 2 — Team Collaboration */}
            <div style={{
              flex: 1, borderRadius: 24, border: "1px solid rgba(187,203,188,0.3)",
              padding: 32, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.7)",
              display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16,
            }}>
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(0,209,126,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* <Image src="/icons/team.svg" width={48} height={48} alt="" /> */}
                <ChatIcon size={22} />
              </div>
 
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                fontSize: 24, lineHeight: "31.2px", color: "#191C1E", margin: 0,
              }}>Team Collaboration</h3>
 
              <p style={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 400,
                fontSize: 18, lineHeight: "24px", color: "#3C4A3F", margin: 0, flex: 1,
              }}>
                Assign conversations, set roles and keep your whole team in sync without chaos.
              </p>
 
              {/* Image slot */}
              <div style={{
                width: "100%", height: 40, borderRadius: 8,
                background: "#f0f4f1", border: "1px solid rgba(187,203,188,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#aaa", fontSize: 12,
              }}>
                {/* <Image src="/images/team-avatars.png" width={336} height={40} alt="" /> */}
                Image goes here
              </div>
            </div>
          </div>
 
          {/* ── Row 2: Card 3 (609px) + Card 4 (609px) ── */}
          <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
 
            {/* Card 3 — AI Auto-Replies */}
            <div style={{
              flex: 1, borderRadius: 24, border: "1px solid rgba(187,203,188,0.3)",
              padding: 32, background: "white",
              display: "flex", flexDirection: "column", gap: 16,
              position: "relative", overflow: "hidden",
            }}>
              {/* Decorative circles — move via CIRCLE_RIGHT_SIDE / CIRCLE_BOTTOM_RIGHT */}
              <div aria-hidden style={{
                position: "absolute",
                right: CIRCLE_RIGHT_SIDE.right,
                bottom: CIRCLE_RIGHT_SIDE.bottom,
                width: CIRCLE_RIGHT_SIDE.size,
                height: CIRCLE_RIGHT_SIDE.size,
                borderRadius: "9999px",
                background: "#191C1E", opacity: 0.08,
                pointerEvents: "none",
              }} />
              <div aria-hidden style={{
                position: "absolute",
                right: CIRCLE_BOTTOM_RIGHT.right,
                bottom: CIRCLE_BOTTOM_RIGHT.bottom,
                width: CIRCLE_BOTTOM_RIGHT.size,
                height: CIRCLE_BOTTOM_RIGHT.size,
                borderRadius: "9999px",
                background: "#191C1E", opacity: 0.06,
                pointerEvents: "none",
              }} />
 
              {/* Icon + pill row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(0,209,126,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ChatIcon size={22} />
                </div>
                <PlainPill bg="rgba(0,209,126,0.1)" border="none">
                  <span style={{
                    fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 10,
                    lineHeight: "15px", letterSpacing: "-0.5px", textTransform: "uppercase",
                    color: "#1A5C38",
                  }}>Saves 10hrs/week</span>
                </PlainPill>
              </div>
 
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                fontSize: 24, lineHeight: "31.2px", color: "#191C1E", margin: 0,
              }}>AI Auto-Replies</h3>
 
              <p style={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 400,
                fontSize: 18, lineHeight: "24px", color: "#3C4A3F", margin: 0,
              }}>
                Train your bot on FAQs, prices and policies. It handles 70%+ of
                enquiries automatically around the clock, with human handover for complex queries.
              </p>
 
              {/* Feature tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Instant replies", "Human handover"].map((tag) => (
                  <div key={tag} style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    borderRadius: 8, border: "1px solid rgba(187,203,188,0.3)",
                    padding: "8px 16px", background: "white",
                  }}>
                    <CheckCircle />
                    <span style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                      fontSize: 15, lineHeight: "16px", color: "#191C1E",
                    }}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Card 4 — Analytics (with dark stat card) */}
            <div style={{
              flex: 1, borderRadius: 24, border: "1px solid rgba(187,203,188,0.3)",
              padding: 32, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.7)",
              display: "flex", flexDirection: "row", gap: 24,
            }}>
              {/* Left text */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(0,209,126,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ChatIcon size={22} />
                </div>
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                  fontSize: 24, lineHeight: "31.2px", color: "#191C1E", margin: 0,
                }}>Analytics Dashboard</h3>
                <p style={{
                  fontFamily: "'Manrope', sans-serif", fontWeight: 400,
                  fontSize: 18, lineHeight: "24px", color: "#3C4A3F", margin: 0,
                }}>
                  Track every metric that matters. Spot trends early and make
                  data-driven decisions that grow your brand faster.
                </p>
              </div>
 
              {/* Dark stat card */}
              <div style={{
                flexShrink: 0, width: 255, borderRadius: 12, background: "#2D3133",
                padding: "44px 24px", display: "flex", flexDirection: "column", gap: 24,
              }}>
                {/* Response time */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 12,
                    lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)", margin: 0,
                  }}>Response Time</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                      fontSize: 30, lineHeight: "36px", color: "white",
                    }}>1.2s</span>
                    <TrendDown />
                    <span style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                      fontSize: 14, color: "#25D16F",
                    }}>-12%</span>
                  </div>
                  {/* Bar */}
                  <div style={{ width: 207, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.1)", position: "relative" }}>
                    <div style={{ width: 162, height: 6, borderRadius: 9999, background: "#25D16F", position: "absolute", top: 0, left: 0 }} />
                  </div>
                </div>
 
                {/* Satisfactory score */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 12,
                    lineHeight: "15px", letterSpacing: "1px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)", margin: 0,
                  }}>Satisfactory Score</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                      fontSize: 30, lineHeight: "36px", color: "white",
                    }}>94%</span>
                    <TrendUp />
                    <span style={{
                      fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                      fontSize: 14, color: "#25D16F",
                    }}>+3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* ── Row 3: Card 5 — Integrations (full width) ── */}
          <div style={{
            borderRadius: 24, border: "1px solid rgba(187,203,188,0.3)",
            padding: 32, display: "flex", flexDirection: "row",
            gap: 48, justifyContent: "space-between", alignItems: "stretch",
          }}>
            {/* Left */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 15, maxWidth: 563 }}>
              {/* Icon + pill */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(0,209,126,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ChatIcon size={22} />
                </div>
                <PlainPill bg="#E6E8EA" border="none">
                  <span style={{
                    fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 12,
                    lineHeight: "15px", letterSpacing: "-0.5px", textTransform: "uppercase",
                    color: "#3C4A3F",
                  }}>24/7 Support</span>
                </PlainPill>
              </div>
 
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                fontSize: 24, lineHeight: "31.2px", color: "#191C1E", margin: 0,
              }}>Seamless Integrations</h3>
 
              <p style={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 400,
                fontSize: 18, lineHeight: "24px", color: "#3C4A3F", margin: 0,
              }}>
                Works with Shopify, WooCommerce, SendBaba, your CRM and any
                custom tool via API. Our open ecosystem ensures your data flows
                exactly where you need it most.
              </p>
 
              {/* Buttons */}
              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <button style={{
                  borderRadius: 9999, background: "#25D16F", border: "none",
                  padding: "10.5px 24px 11.5px", cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15,
                  lineHeight: "12px", letterSpacing: "0.6px", textAlign: "center", color: "white",
                  transition: "opacity 0.15s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >Explore API</button>
                <button style={{
                  borderRadius: 9999, background: "transparent",
                  border: "1px solid #BBCBBC",
                  padding: "10px 24px", cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15,
                  lineHeight: "12px", letterSpacing: "0.6px", textAlign: "center", color: "#191C1E",
                  transition: "background 0.15s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.03)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >Documentation</button>
              </div>
            </div>
 
            {/* Right — 2×3 grid of integration images */}
            <div style={{
              flex: 1, maxWidth: 563, display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, auto)",
              gap: 16, alignContent: "start",
            }}>
              {/* 4 small image slots — first row (3) + second row first col (1) */}
              {[0,1,2,3].map(i => (
                <div key={i} style={{
                  height: 80, borderRadius: 24, padding: 24,
                  background: "#f6faf8", border: "1px solid rgba(187,203,188,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#ccc", fontSize: 12,
                  ...(i === 3 ? { gridColumn: "1" } : {}),
                }}>
                  {/* <Image src={`/images/integration-${i+1}.png`} fill style={{ objectFit: "contain" }} alt="" /> */}
                  img
                </div>
              ))}
              {/* Last wide dashed slot */}
              <div style={{
                gridColumn: "2 / span 2", gridRow: 2,
                height: 88, borderRadius: 24, padding: 16,
                background: "transparent",
                border: "1px dashed rgba(187,203,188,0.6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#ccc", fontSize: 12,
              }}>
                {/* <Image src="/images/integration-5.png" fill style={{ objectFit: "contain" }} alt="" /> */}
                img
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}