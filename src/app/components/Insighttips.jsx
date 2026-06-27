'use client';
 
import Image from "next/image";
import { useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// BLOG CARDS DATA — edit here
// ═══════════════════════════════════════════════════════════════════
const CARDS = [
  {
    image:    null, // set to "/images/blog1.png"
    tag:      "Social Media · 16 May 2026",
    title:    "How To Optimize Your Social Media Response Time For Maximum Efficiency",
    excerpt:  "Learn how Nigerian businesses cut DM response time by 10x using AI-powered social inbox tools.",
    link:     "#",
  },
  {
    image:    null,
    tag:      "AI & Automation · 10 May 2026",
    title:    "5 Ways AI Chatbots Are Transforming Customer Service For African SMEs",
    excerpt:  "Discover how automated assistants are helping small businesses scale their support without increasing headcount.",
    link:     "#",
  },
  {
    image:    null,
    tag:      "Analytics · 5 May 2026",
    title:    "Why Nigerian Businesses Are Leaving Freshdesk For Naira-Billed Alternatives",
    excerpt:  "A deep dive into the shifting landscape of SaaS billing and the rise of local customer support platforms.",
    link:     "#",
  },
];
 
// ═══════════════════════════════════════════════════════════════════
// ARROW RIGHT
// ═══════════════════════════════════════════════════════════════════
function ArrowRight({ color = "#191C1E", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// BLOG CARD
// ═══════════════════════════════════════════════════════════════════
function BlogCard({ image, tag, title, excerpt, link }) {
  const [hov, setHov] = useState(false);
  const [readHov, setReadHov] = useState(false);
 
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 398,
        borderRadius: 24,
        border: "1px solid rgba(187,203,188,0.30)",
        padding: 32,
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        flexShrink: 0,
        cursor: "default",
        transform: hov ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hov
          ? "0 24px 48px rgba(0,0,0,0.10)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
      }}
    >
      {/* Image + meta block */}
      <div style={{ paddingBottom: 24 }}>
        {/* Image */}
        <div style={{
          width: "100%", height: 170, borderRadius: 16,
          overflow: "hidden", background: "#e8f5f0",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#bbb", fontSize: 13, marginBottom: 12,
          position: "relative",
        }}>
          {image
            ? <Image src={image} fill style={{ objectFit: "cover" }} alt={title} />
            : "Image goes here"
          }
        </div>
 
        {/* Tag */}
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700, fontSize: 12,
          lineHeight: "12px", letterSpacing: "0.6px",
          color: "#25D16F", margin: 0,
        }}>{tag}</p>
      </div>
 
      {/* Title */}
      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700, fontSize: 24,
        lineHeight: "33px", letterSpacing: 0,
        color: "#191C1E", margin: "0 0 12px",
        textAlign: "left",
      }}>{title}</h3>
 
      {/* Excerpt */}
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 400, fontSize: 16,
        lineHeight: "24px", color: "#3C4A3F",
        margin: "0 0 20px", flex: 1,
      }}>{excerpt}</p>
 
      {/* Read full story */}
      <button
        onMouseEnter={() => setReadHov(true)}
        onMouseLeave={() => setReadHov(false)}
        onClick={() => window.location.href = link}
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "none", border: "none", padding: 0,
          cursor: "pointer",
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700, fontSize: 16,
          lineHeight: "24px", color: "#25D16F",
          alignSelf: "flex-start",
        }}
      >
        Read Full Story
        <span style={{
          display: "inline-flex",
          transform: readHov ? "translateX(4px)" : "translateX(0)",
          transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
          <ArrowRight color="#25D16F" size={16} />
        </span>
      </button>
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function InsightTips() {
  const [btnHov, setBtnHov] = useState(false);
 
  return (
    <section className="page-x-pad" style={{ backgroundColor: "white", paddingTop: 80, paddingBottom: 80 }}>
      <div className="page-container">
 
        {/* ── Header row ── */}
        <div style={{
          display: "flex", flexDirection: "row",
          justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 48,
        }}>
          {/* Left — pill + heading */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 872 }}>
            <div style={{
              display: "inline-flex", alignItems: "center",
              borderRadius: 9999,
              background: "rgb(230,250,242)",
              border: "1px solid rgba(0,109,63,0.1)",
              padding: "6px 16px",
              width: "fit-content",
            }}>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700, fontSize: 12,
                letterSpacing: "0.5px", textTransform: "uppercase",
                color: "#25D16F",
              }}>
                Grow Smarter With Our Blog
              </span>
            </div>
 
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "52.8px", letterSpacing: "-0.96px",
              color: "#191C1E", margin: 0,
            }}>
              Insights &amp; Tips For Social Media
            </h2>
          </div>
 
          {/* Right — View Latest Now button */}
          <button
            onMouseEnter={() => setBtnHov(true)}
            onMouseLeave={() => setBtnHov(false)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 9999,
              background: "#E6E8EA", border: "none",
              paddingTop: 16, paddingBottom: 16,
              paddingLeft: 32, paddingRight: 32,
              cursor: "pointer",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700, fontSize: 16,
              lineHeight: "24px", color: "#191C1E",
              whiteSpace: "nowrap",
              transition: "background 0.15s, transform 0.15s",
              background: btnHov ? "#d8dadc" : "#E6E8EA",
              transform: btnHov ? "scale(1.02)" : "scale(1)",
              flexShrink: 0,
              alignSelf: "flex-end",
              marginBottom: 8,
            }}
          >
            View Latest Now
            <span style={{
              display: "inline-flex",
              transform: btnHov ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
            }}>
              <ArrowRight color="#191C1E" size={16} />
            </span>
          </button>
        </div>
 
        {/* ── Cards row ── */}
        <div style={{
          display: "flex", flexDirection: "row",
          gap: 24, justifyContent: "center",
        }}>
          {CARDS.map((c) => <BlogCard key={c.title} {...c} />)}
        </div>
 
      </div>
    </section>
  );
}
