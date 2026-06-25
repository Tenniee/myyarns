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
    review:   "MyYarns completely transformed how we handle our social media. We went from spending hours every week manually posting to having everything scheduled in advance. The AI suggestions alone saved us a full day of work each month.",
    initials: "AO",
    name:     "Adeola Okafor",
    position: "CEO, Tivio Logistics",
    avatar:   null, // set to "/images/avatar1.png" to use a photo instead
  },
  {
    pill:     "GROW FASTER",
    pillBg:   "#E6FAF2",
    pillColor:"#25D16F",
    review:   "Before MyYarns, our engagement was flat. Within three weeks of using the platform our reach doubled and we started actually getting leads from Instagram. The analytics dashboard makes it so easy to see what's working.",
    initials: "FK",
    name:     "Fatima Kabir",
    position: "Brand Manager, NovaTech NG",
    avatar:   null,
  },
  {
    pill:     "SAVE TIME",
    pillBg:   "#E6FAF2",
    pillColor:"#25D16F",
    review:   "The unified inbox is a game changer. All our DMs and comments from every platform in one place — no more switching between apps. Our response time dropped by 70% and customers actually notice the difference.",
    initials: "EB",
    name:     "Emmanuel Bello",
    position: "Head of Growth, Konga",
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
// QUOTATION MARK (filled, like a 9 with solid top)
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
 
        // size transition
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
      </div>
 
      {/* ── Review text ── */}
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 400, fontSize: 16,
        lineHeight: "24px", color: "#3C4A3F",
        margin: 0, flex: 1,
        // clamp lines when collapsed, show all when hovered
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
      `}</style>
 
      <section
        className="page-x-pad"
        style={{ background: "white", paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="page-container">
 
          {/* ── Header ── */}
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 12,
            marginBottom: 48,
          }}>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400, fontSize: 16,
              lineHeight: "24px", letterSpacing: "1.6px",
              textTransform: "uppercase", color: "#25D16F",
              margin: 0,
            }}>
              Social Proof
            </p>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "52.8px", letterSpacing: "-0.96px",
              color: "#191C1E", textAlign: "center", margin: 0,
            }}>
              Loved by teams across Africa
            </h2>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400, fontSize: 18,
              lineHeight: "28.8px", color: "#3C4A3F",
              textAlign: "center", margin: 0,
            }}>
              Real results. Real people.
            </p>
          </div>
 
          {/* ── Cards row ── */}
          {/* overflow-x hidden on wrapper so expanded card doesn't cause scroll */}
          <div style={{
            display: "flex", flexDirection: "row",
            gap: 24, alignItems: "center",
            justifyContent: "center",
            overflowX: "hidden",
          }}>
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
 
        </div>
      </section>
    </>
  );
}