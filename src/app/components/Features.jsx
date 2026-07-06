"use client";
 
import Image from "next/image";
import { useState } from "react";
import FeaturesMainImage from '../../assets/Features-image.svg';
import FeaturesIcon1 from '../../assets/FeaturesIcon1.svg';
import FeaturesIcon2 from '../../assets/FeaturesIcon2.svg';
import FeaturesIcon3 from '../../assets/FeaturesIcon3.svg';
import FeaturesStar from '../../assets/FeaturesStar.svg';
import FeaturesMockupVisual from '../../assets/FeaturesMockupVisual.svg';
import TeamCollab from '../../assets/TeamCollab.svg';
import TeamCollabIcon from '../../assets/TeamCollabIcon.svg';
import Robot from '../../assets/Robot.svg';
import AnalyticsIcon from '../../assets/AnalyticsIcon.svg';
import APIIcon from '../../assets/APIIcon.svg';
import APILogo1 from '../../assets/APILogo1.svg';
import APILogo2 from '../../assets/APILogo2.svg';
import APILogo3 from '../../assets/APILogo3.svg';
import APILogo4 from '../../assets/APILogo4.svg';
import APILogo5 from '../../assets/APILogo5.svg';
 
const logos = [APILogo1, APILogo2, APILogo3, APILogo4];
 
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
  { title: "All-In-One Platform", sub: "Every channel unified into a single, high-performance workspace.", icon: FeaturesIcon1 },
  { title: "Advanced AI Analytics", sub: "Real-time insights that help you understand your audience better.", icon: FeaturesIcon2},
  { title: "Time Save Automate", sub: "Intelligent bots handle FAQs 24/7 so your team can focus on growth.", icon: FeaturesIcon3 },
];
 
// ═══════════════════════════════════════════════════════════════════
// SIMPLE PLAIN PILL
// ═══════════════════════════════════════════════════════════════════
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
 
// ═══════════════════════════════════════════════════════════════════
// ICON COMPONENTS
// ═══════════════════════════════════════════════════════════════════
function ChatIcon({ color = "#1A5C38", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
 
function CheckCircle({ color = "#1A5C38", size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
 
function TrendDown({ color = "#25D16F", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
    </svg>
  );
}
 
function TrendUp({ color = "#25D16F", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
 
function ArrowRight({ size = 14, color = "#1A5C38" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// FEATURE ROW ITEM
// ═══════════════════════════════════════════════════════════════════
function FeatureItem({ title, sub, Icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="feature-item"
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
      {/* Icon */}
      <div style={{ paddingTop: 0, flexShrink: 0 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 24,
          background: "rgba(0,209,126,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Image src={Icon} width={26} height={26} alt="" />
        </div>
      </div>
 
      {/* Text */}
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
    <section className="features-section">
      <style>{`
        .features-section {
          background: white;
          position: relative;
          overflow: hidden;
          padding-bottom: 80px;
        }
 
        .page-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .page-container {
          width: 100%;
        }
 
        /* ── Responsive padding ── */
        @media (max-width: 1200px) {
          .page-x-pad {
            padding-left: 48px;
            padding-right: 48px;
          }
        }
 
        @media (max-width: 768px) {
          .page-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
 
        @media (max-width: 480px) {
          .page-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
 
        /* ── Feature item responsive ── */
        .feature-item {
          gap: 16px;
          padding: 20px;
        }
 
        @media (max-width: 640px) {
          .feature-item {
            flex-direction: column;
            text-align: center;
            gap: 12px;
            padding: 16px;
          }
 
          .feature-item > div:first-child {
            align-self: center;
          }
        }
 
        /* ── Section 1: Hero + Features ── */
        .section1-container {
          display: flex;
          flex-direction: row;
          gap: 48px;
          align-items: flex-start;
          padding-top: 80px;
          position: relative;
          z-index: 1;
        }
 
        .section1-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .section1-right {
          flex-shrink: 0;
          width: 751px;
          height: 419px;
        }
 
        @media (max-width: 1200px) {
          .section1-container {
            gap: 32px;
          }
 
          .section1-right {
            width: 500px;
            height: 280px;
          }
        }
 
        @media (max-width: 900px) {
          .section1-container {
            flex-direction: column;
            gap: 32px;
            align-items: stretch;
          }
 
          .section1-left {
            max-width: none;
          }
 
          .section1-right {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
          }
        }
 
        /* ── Section 2: Heading section ── */
        .section2-container {
          padding-top: 96px;
          padding-bottom: 48px;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
 
        .section2-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 5vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.96px;
          color: #191C1E;
          text-align: center;
          margin: 0;
          max-width: 900px;
        }
 
        .section2-subtext {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.35;
          color: #3C4A3F;
          text-align: center;
          max-width: 741px;
          margin: 0;
        }
 
        @media (max-width: 640px) {
          .section2-container {
            padding-top: 56px;
            padding-bottom: 32px;
          }
 
          .section2-heading {
            letter-spacing: 0;
          }
        }
 
        /* ── Section 3: Cards grid ── */
        .section3-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .cards-row {
          display: flex;
          gap: 16px;
          align-items: stretch;
        }
 
        .card-1 {
          flex: 0 0 805px;
          border-radius: 24px;
          border: 1px solid rgba(187,203,188,0.3);
          padding: 32px;
          background: white;
          display: flex;
          flex-direction: row;
          gap: 32px;
          overflow: hidden;
        }
 
        .card-2 {
          flex: 1;
          border-radius: 24px;
          border: 1px solid rgba(187,203,188,0.3);
          padding: 32px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.7);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }
 
        .card-3 {
          flex: 1;
          border-radius: 24px;
          border: 1px solid rgba(187,203,188,0.3);
          padding: 32px;
          background: white;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          overflow: hidden;
        }
 
        .card-4 {
          flex: 1;
          border-radius: 24px;
          border: 1px solid rgba(187,203,188,0.3);
          padding: 32px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.7);
          display: flex;
          flex-direction: row;
          gap: 24px;
        }
 
        .card-5 {
          border-radius: 24px;
          border: 1px solid rgba(187,203,188,0.3);
          padding: 32px;
          display: flex;
          flex-direction: row;
          gap: 48px;
          justify-content: space-between;
          align-items: stretch;
        }
 
        .card-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .card-right {
          width: 346px;
          min-height: 220px;
          border-radius: 12px;
          flex-shrink: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
 
        .card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 31.2px;
          color: #191C1E;
          margin: 0;
        }
 
        .card-text {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          color: #3C4A3F;
          margin: 0;
        }
 
        /* ── Tablet: 900px and down ── */
        @media (max-width: 900px) {
          .card-1 {
            flex: 0 0 100%;
            flex-direction: column;
            gap: 20px;
          }
 
          .card-right {
            width: 100%;
            height: 250px;
          }
 
          .cards-row {
            flex-direction: column;
          }
 
          .card-2,
          .card-3,
          .card-4 {
            flex: 1;
          }
 
          .card-4 {
            flex-direction: column;
          }
 
          .dark-stat-card {
            width: 100%;
            flex-shrink: 1;
          }
 
          .card-5 {
            flex-direction: column;
            gap: 28px;
          }
 
          .logos-grid {
            max-width: 100% !important;
            width: 100%;
          }
        }
 
        /* ── Mobile: 768px and down ── */
        @media (max-width: 768px) {
          .card-1 {
            padding: 24px;
          }
 
          .card-2,
          .card-3,
          .card-4,
          .card-5 {
            padding: 24px;
          }
 
          .card-title {
            font-size: 20px;
            line-height: 26px;
          }
 
          .card-text {
            font-size: 16px;
          }
 
          .card-right {
            height: 200px;
          }
 
          .section3-container {
            gap: 12px;
          }
 
          .cards-row {
            gap: 12px;
          }
 
          /* Hide images on smaller tablets */
          .card-2-image,
          .card-4-image {
            display: none;
          }
 
          .card-2,
          .card-4 {
            flex-direction: column;
          }
        }
 
        /* ── Small phones: 480px and down ── */
        @media (max-width: 480px) {
          .card-1,
          .card-2,
          .card-3,
          .card-4,
          .card-5 {
            padding: 20px;
            border-radius: 16px;
          }
 
          .card-title {
            font-size: 18px;
            line-height: 24px;
          }
 
          .card-text {
            font-size: 14px;
            line-height: 20px;
          }
 
          .card-right {
            height: 160px;
          }
 
          .card-icon {
            width: 40px;
            height: 40px;
          }
 
          .feature-tag {
            flex: 1 1 100%;
            padding: 8px 12px;
          }
 
          .card-5-buttons {
            flex-direction: column;
          }
 
          .card-5-button {
            flex: 1;
          }
 
          .logos-grid {
            gap: 12px !important;
          }
 
          .logo-item {
            height: 60px !important;
          }
        }
 
        /* ── Blob adjustments for mobile ── */
        @media (max-width: 768px) {
          .blob-center {
            opacity: 0.08 !important;
          }
 
          .blob-bottom-left {
            opacity: 0.08 !important;
          }
        }
      `}</style>
 
      {/* ── Background blobs ── */}
      <div aria-hidden className="blob-center" style={{
        position: "absolute",
        top: BLOB_CENTER.top, left: BLOB_CENTER.left,
        width: BLOB_CENTER.width, height: BLOB_CENTER.height,
        borderRadius: 9999,
        background: "linear-gradient(135deg, #00ABD1 0%, #E2E2E2 100%)",
        filter: "blur(120px)",
        opacity: 0.18, pointerEvents: "none", zIndex: 0,
      }} />
 
      <div aria-hidden className="blob-bottom-left" style={{
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
      <div className="page-x-pad">
        <div className="page-container">
          <div className="section1-container">
            {/* Left — 3 stacked feature items */}
            <div className="section1-left">
              {TOP_FEATURES.map((f) => <FeatureItem key={f.title} {...f} Icon={f.icon} />)}
            </div>
 
            {/* Right — hero image */}
            <div className="section1-right" style={{
              borderRadius: 24, overflow: "hidden",
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
              <Image src={FeaturesMainImage} fill style={{ objectFit: "cover" }} alt="" />
            </div>
          </div>
        </div>
      </div>
 
      {/* ════════════════════════════════════════════════════════
          SECTION 2 — Pill + Header + Subtext
      ════════════════════════════════════════════════════════ */}
      <div className="page-x-pad">
        <div className="page-container section2-container">
          {/* Plain pill */}
          <PlainPill bg="#E6FAF2" border="1px solid rgba(0,109,63,0.10)">
            <Image src={FeaturesStar} alt="star" style={{ width: '6%' }} />
            <span style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14,
              lineHeight: "12px", letterSpacing: "0.6px", textTransform: "uppercase",
              color: "#1A5C38",
            }}>All-in-One Platform</span>
          </PlainPill>
 
          {/* Heading */}
          <h2 className="section2-heading">
            Everything to manage{" "}
            <span style={{ color: "#25D16F" }}>social media at scale</span>
          </h2>
 
          {/* Subtext */}
          <p className="section2-subtext">
            Connect, automate and grow — all from one beautifully simple dashboard.
            MyYarns bridges the gap between your brand and your global community.
          </p>
        </div>
      </div>
 
      {/* ════════════════════════════════════════════════════════
          SECTION 3 — Feature cards grid
      ════════════════════════════════════════════════════════ */}
      <div className="page-x-pad">
        <div className="page-container section3-container">
 
          {/* ── Row 1: Card 1 + Card 2 ── */}
          <div className="cards-row">
            {/* Card 1 — Unified Inbox */}
            <div className="card-1">
              {/* Left text */}
              <div className="card-left">
                {/* Icon + pill row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="card-icon" style={{
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
 
                <h3 className="card-title">Unified Social Inbox</h3>
 
                <p className="card-text">
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
              <div className="card-right">
                <Image src={FeaturesMockupVisual} style={{ objectFit: "cover", borderRadius: 12, width: '120%' }} alt="" />
              </div>
            </div>
 
            {/* Card 2 — Team Collaboration */}
            <div className="card-2">
              {/* Icon */}
              <div className="card-icon" style={{
                width: 48, height: 48, borderRadius: 12,
                background: "#A7B8D533",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Image src={TeamCollabIcon} width={30} height={30} alt="" />
              </div>
 
              <h3 className="card-title">Team Collaboration</h3>
 
              <p className="card-text">
                Assign conversations, add internal
                notes, and set SLA timers. Everyone
                works from the same live environment.
              </p>
 
              {/* Image slot — hidden on tablets/mobile */}
              <div className="card-2-image">
                <Image src={TeamCollab} width={300} height={300} alt="" />
              </div>
            </div>
          </div>
 
          {/* ── Row 2: Card 3 + Card 4 ── */}
          <div className="cards-row">
            {/* Card 3 — AI Auto-Replies */}
            <div className="card-3">
              {/* Decorative circles */}
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
                <div className="card-icon" style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(0,209,126,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Image src={Robot} width={30} height={30} alt="" />
                </div>
                <PlainPill bg="rgba(0,209,126,0.1)" border="none">
                  <span style={{
                    fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 10,
                    lineHeight: "15px", letterSpacing: "-0.5px", textTransform: "uppercase",
                    color: "#1A5C38",
                  }}>Saves 10hrs/week</span>
                </PlainPill>
              </div>
 
              <h3 className="card-title">AI Auto-Replies</h3>
 
              <p className="card-text">
                Train your bot on FAQs, prices and policies. It handles 70%+ of
                enquiries automatically around the clock, with human handover for complex queries.
              </p>
 
              {/* Feature tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["24/7 Availability", "FAQ Ready"].map((tag) => (
                  <div key={tag} className="feature-tag" style={{
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
 
            {/* Card 4 — Analytics */}
            <div className="card-4">
              {/* Left text */}
              <div className="card-left">
                <div className="card-icon" style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(0,209,126,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Image src={AnalyticsIcon} width={30} height={30} alt="" />
                </div>
                <h3 className="card-title">Advanced AI Analytics</h3>
                <p className="card-text">
                  Response times, satisfaction
                  scores, agent performance —
                  all in real-time.
                </p>
              </div>
 
              {/* Dark stat card — hidden on tablets/mobile */}
              <div className="card-4-image dark-stat-card" style={{
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
                    }}>1.4m</span>
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
                    }}>4.9/5</span>
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
          <div className="card-5">
            {/* Left */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 15, maxWidth: 563 }}>
              {/* Icon + pill */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="card-icon" style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "#BBCBBC33",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Image src={APIIcon} width={30} height={30} alt="" />
                </div>
                <PlainPill bg="#E6E8EA" border="none">
                  <span style={{
                    fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 12,
                    lineHeight: "15px", letterSpacing: "-0.5px", textTransform: "uppercase",
                    color: "#3C4A3F",
                  }}>24/7 Support</span>
                </PlainPill>
              </div>
 
              <h3 className="card-title">API & Integrations</h3>
 
              <p className="card-text">
                Works with Shopify, WooCommerce, SendBaba, your CRM and any
                custom tool via API. Our open ecosystem ensures your data flows
                exactly where you need it most.
              </p>
 
              {/* Buttons */}
              <div className="card-5-buttons" style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <button className="card-5-button" style={{
                  borderRadius: 9999, background: "#25D16F", border: "none",
                  padding: "10.5px 24px 11.5px", cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15,
                  lineHeight: "12px", letterSpacing: "0.6px", textAlign: "center", color: "white",
                  transition: "opacity 0.15s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >Explore API</button>
                <button className="card-5-button" style={{
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
            <div className="logos-grid" style={{
              flex: 1, maxWidth: 563, display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, auto)",
              gap: 16, alignContent: "start",
            }}>
              {/* 4 small image slots */}
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="logo-item"
                  style={{
                    height: 80,
                    borderRadius: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...(i === 3 ? { gridColumn: "1" } : {}),
                  }}
                >
                  <Image
                    src={logo}
                    width={200}
                    height={200}
                    style={{ objectFit: "contain", maxHeight: 80, width: "auto" }}
                    alt={`API Logo ${i + 1}`}
                  />
                </div>
              ))}
              {/* Last wide slot */}
              <div style={{
                gridColumn: "2 / span 2", gridRow: 2,
                height: 88, borderRadius: 24, padding: 0,
                background: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Image src={APILogo5} width={500} height={500} style={{ objectFit: "contain" }} alt="" />
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}
