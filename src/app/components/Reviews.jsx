"use client";
 
import Image from "next/image";
import { useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// REVIEWS DATA — edit here
// ═══════════════════════════════════════════════════════════════════
const REVIEWS = [
  {
    pill:     "SAVE MONEY",
    pillBg:   "#E6FAF2",
    pillColor:"#25D16F",
    review:   "We switched from Freshdesk which cost us $180/month in dollars. MyYarns does everything and more for ₦25,000/month. Support is actually fast —the  team is Nigerian.",
    initials: "KA",
    name:     "Kunle Adeyemi",
    position: "Founder, TechBridge Abuja",
    avatar:   null,
  },
  {
    pill:     "",
    pillBg:   "#E6FAF2",
    pillColor:"#25D16F",
    review:   "Before MyYarns, managing our social media was overwhelming. Now we plan and schedule weeks of content in just a few hours. The AI replies handle 70% of our customer enquiries automatically.",
    initials: "AO",
    name:     "Amanda Okafor",
    position: "Owner, FasterGov Lagos",
    avatar:   null,
  },
  {
    pill:     "",
    pillBg:   "#E6FAF2",
    pillColor:"#25D16F",
    review:   "Our response time dropped from 4 hours to under 5 minutes. The unified inbox means I no longer jump between 6 apps. MyYarns paid for itself in the firstweek.",
    initials: "FN",
    name:     "Funmi Nwoye",
    position: "Marketing Lead",
    avatar:   null,
  },
];
 
// ═══════════════════════════════════════════════════════════════════
// STAR ICON
// ═══════════════════════════════════════════════════════════════════
function Star() {
  return (
    <svg width="15" height="14.25" viewBox="0 0 20 19" fill="#25D16F">
      <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// QUOTATION MARK
// ═══════════════════════════════════════════════════════════════════
function QuoteMark() {
  return (
    <svg width="45.33" height="32" viewBox="0 0 46 32" fill="rgba(25,28,30,0.18)">
      <path d="M0 32V19.2C0 13.6 1.6 9.2 4.8 6C8 2.8 12.4 0.8 18 0L20 4.4C16.4 5.2 13.6 6.8 11.6 9.2C9.6 11.6 8.6 14.4 8.6 17.6H16V32H0ZM26 32V19.2C26 13.6 27.6 9.2 30.8 6C34 2.8 38.4 0.8 44 0L46 4.4C42.4 5.2 39.6 6.8 37.6 9.2C35.6 11.6 34.6 14.4 34.6 17.6H42V32H26Z" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// REVIEW CARD
// ═══════════════════════════════════════════════════════════════════
function ReviewCard({ pill, pillBg, pillColor, review, initials, name, position, avatar }) {
  const [hov, setHov] = useState(false);
 
  return (
    <div
      className="review-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 32,
        border: "1px solid rgba(187,203,188,0.30)",
        padding: hov ? 40 : 32,
        gap: hov ? 56 : 24,
        background: hov ? "rgba(0,109,63,0.05)" : "rgba(255,255,255,0.70)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: hov ? 460 : 366,
        transition: [
          "width 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          "padding 0.35s ease",
          "gap 0.35s ease",
          "background 0.3s ease",
          "box-shadow 0.3s ease",
        ].join(", "),
        boxShadow: hov
          ? "0 20px 48px rgba(0,109,63,0.10)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        cursor: "default",
        flexShrink: 0,
        zIndex: hov ? 10 : 1,
        position: "relative",
      }}
    >
      {/* ── Top row: stars + pill ── */}
      <div style={{
        display: "flex", flexDirection: "row",
        justifyContent: "space-between", alignItems: "center",
      }}>
        {/* 5 stars */}
        <div style={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {[0,1,2,3,4].map(i => <Star key={i} />)}
        </div>
 
        {/* Pill */}
        {pill && (
          <div style={{
            display: "inline-flex", alignItems: "center",
            borderRadius: 9999, padding: "4px 12px",
            background: pillBg,
          }}>
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700, fontSize: 10,
              lineHeight: "15px", letterSpacing: "0.5px",
              textTransform: "uppercase", color: pillColor,
            }}>{pill}</span>
          </div>
        )}
      </div>
 
      {/* ── Review text ── */}
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 400, fontSize: 16,
        lineHeight: "24px", color: "#3C4A3F",
        margin: 0, flex: 1,
        display: "-webkit-box",
        WebkitLineClamp: hov ? "unset" : 5,
        WebkitBoxOrient: "vertical",
        overflow: hov ? "visible" : "hidden",
        transition: "all 0.3s ease",
      }}>
        "{review}"
      </p>
 
      {/* ── Reviewer info ── */}
      <div style={{
        display: "flex", flexDirection: "row",
        alignItems: "center", gap: 12,
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
          {/* Avatar or initials box */}
          {avatar ? (
            <div style={{
              width: hov ? 56 : 48,
              height: hov ? 56 : 48,
              borderRadius: hov ? "9999px" : 16,
              overflow: "hidden",
              border: hov ? "1px solid rgba(0,109,63,0.20)" : "none",
              flexShrink: 0,
              transition: "all 0.3s ease",
            }}>
              <Image src={avatar} width={56} height={56} alt={name} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          ) : (
            <div style={{
              width: hov ? 56 : 48,
              height: hov ? 56 : 48,
              borderRadius: hov ? "9999px" : 16,
              background: hov ? "#E6FAF2" : "rgba(158,243,218,0.30)",
              border: hov ? "1px solid rgba(0,109,63,0.20)" : "none",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.3s ease",
            }}>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700, fontSize: 16,
                lineHeight: "24px", color: "#006B58",
                textTransform: "uppercase",
              }}>{initials}</span>
            </div>
          )}
 
          {/* Name + position */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{
              fontFamily: hov ? "'Plus Jakarta Sans', sans-serif" : "'Manrope', sans-serif",
              fontWeight: hov ? 400 : 700,
              fontSize: 16, lineHeight: "24px",
              color: hov ? "#25D16F" : "#191C1E",
              transition: "color 0.3s, font-family 0.3s",
            }}>{name}</span>
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400, fontSize: hov ? 16 : 13,
              lineHeight: hov ? "24px" : "19.5px",
              color: "#3C4A3F",
              transition: "font-size 0.3s",
            }}>{position}</span>
          </div>
        </div>
 
        {/* Quote mark — only on hover */}
        {hov && (
          <div style={{
            animation: "fadeIn 0.25s ease forwards",
            flexShrink: 0,
          }}>
            <QuoteMark />
          </div>
        )}
      </div>
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function Reviews() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
 
        .reviews-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .reviews-container {
          width: 100%;
        }
 
        .reviews-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 48px;
        }
 
        .reviews-label {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: #25D16F;
          margin: 0;
        }
 
        .reviews-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 52.8px;
          letter-spacing: -0.96px;
          color: #191C1E;
          text-align: center;
          margin: 0;
        }
 
        .reviews-subtext {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 28.8px;
          color: #3C4A3F;
          text-align: center;
          margin: 0;
        }
 
        .reviews-cards {
          display: flex;
          flex-direction: row;
          gap: 24px;
          align-items: center;
          justify-content: center;
          overflow-x: hidden;
          overflow-y: visible;
        }
 
        .review-card {
          flex-shrink: 0;
        }
 
        /* ════════════════════════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════════════════════════ */
 
        /* ── Tablet: 1024px and below ── */
        @media (max-width: 1024px) {
          .reviews-x-pad {
            padding-left: 48px;
            padding-right: 48px;
          }
 
          .reviews-header {
            margin-bottom: 40px;
          }
 
          .reviews-heading {
            font-size: clamp(28px, 4vw, 40px);
            letter-spacing: 0;
          }
 
          .reviews-subtext {
            font-size: 16px;
            line-height: 24px;
          }
 
          .review-card {
            width: 320px !important;
          }
        }
 
        /* ── Mobile: 768px and below ── */
        @media (max-width: 768px) {
          .reviews-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
 
          .reviews-header {
            margin-bottom: 32px;
          }
 
          .reviews-heading {
            font-size: clamp(24px, 5vw, 32px);
            letter-spacing: 0;
            line-height: 1.2;
          }
 
          .reviews-subtext {
            font-size: 14px;
            line-height: 20px;
          }
 
          .reviews-cards {
            flex-direction: column;
            gap: 20px;
            overflow-x: unset;
            align-items: stretch;
          }
 
          .review-card {
            width: 100% !important;
            max-width: 100%;
          }
        }
 
        /* ── Small mobile: 480px and below ── */
        @media (max-width: 480px) {
          .reviews-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
 
          .reviews-heading {
            font-size: clamp(20px, 5vw, 28px);
          }
 
          .reviews-label {
            font-size: 12px;
          }
 
          .reviews-subtext {
            font-size: 13px;
          }
 
          .review-card {
            padding: 20px !important;
          }
        }
      `}</style>
 
      <section
        className="reviews-x-pad"
        style={{ background: "white", paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="reviews-container">
 
          {/* ── Header ── */}
          <div className="reviews-header">
            <p className="reviews-label">
              Social Proof
            </p>
            <h2 className="reviews-heading">
              Our Customers Are Saying
            </h2>
            <p className="reviews-subtext">
              Success Stories From Users
            </p>
          </div>
 
          {/* ── Cards row ── */}
          <div className="reviews-cards">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
 
        </div>
      </section>
    </>
  );
}