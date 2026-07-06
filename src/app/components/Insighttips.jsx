'use client';
 
import Image from "next/image";
import { useState } from "react";
import FirstImage from '../../assets/InsightImage1.svg';
import SecondImage from '../../assets/InsightImage2.svg';
import ThirdImage from '../../assets/InsightImage3.svg';
 
// ═══════════════════════════════════════════════════════════════════
// BLOG CARDS DATA — edit here
// ═══════════════════════════════════════════════════════════════════
const CARDS = [
  {
    image:    FirstImage,
    tag:      "Social Media · 16 May 2026",
    title:    "How To Optimize Your Social Media Response Time For Maximum Efficiency",
    excerpt:  "Learn how Nigerian businesses cut DM response time by 10x using AI-powered social inbox tools.",
    link:     "#",
  },
  {
    image:    SecondImage,
    tag:      "AI & Automation · 10 May 2026",
    title:    "5 Ways AI Chatbots Are Transforming Customer Service For African SMEs",
    excerpt:  "Discover how automated assistants are helping small businesses scale their support without increasing headcount.",
    link:     "#",
  },
  {
    image:    ThirdImage,
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
      className="blog-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 24,
        border: "1px solid rgba(187,203,188,0.30)",
        padding: 32,
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
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
    <section className="insight-section">
      <style>{`
        .insight-section {
          background-color: white;
          padding-top: 80px;
          padding-bottom: 80px;
        }
 
        .insight-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .insight-container {
          width: 100%;
        }
 
        /* ── Header row ── */
        .insight-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
          gap: 32px;
        }
 
        .insight-header-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 872px;
          flex: 1;
        }
 
        .insight-pill {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          background: rgb(230,250,242);
          border: 1px solid rgba(0,109,63,0.1);
          padding: 6px 16px;
          width: fit-content;
        }
 
        .insight-pill-text {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #25D16F;
        }
 
        .insight-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.96px;
          color: #191C1E;
          margin: 0;
        }
 
        .insight-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 9999px;
          background: #E6E8EA;
          border: none;
          padding: 16px 32px;
          cursor: pointer;
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #191C1E;
          white-space: nowrap;
          transition: background 0.15s, transform 0.15s;
          flex-shrink: 0;
          align-self: flex-end;
          margin-bottom: 8px;
        }
 
        .insight-btn:hover {
          background: #d8dadc;
          transform: scale(1.02);
        }
 
        /* ── Cards row ── */
        .insight-cards {
          display: flex;
          flex-direction: row;
          gap: 24px;
          justify-content: center;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
 
        .blog-card {
          width: 398px;
          flex-shrink: 0;
          scroll-snap-align: start;
        }
 
        /* ════════════════════════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════════════════════════ */
 
        /* ── Large desktop: 1200px+ ── */
        @media (max-width: 1400px) {
          .insight-x-pad {
            padding-left: 64px;
            padding-right: 64px;
          }
        }
 
        /* ── Tablet: 1024px and below ── */
        @media (max-width: 1024px) {
          .insight-x-pad {
            padding-left: 48px;
            padding-right: 48px;
          }
 
          .insight-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
 
          .insight-btn {
            align-self: flex-start;
            margin-bottom: 0;
          }
 
          .blog-card {
            width: 350px;
          }
        }
 
        /* ── Mobile: 768px and below ── */
        @media (max-width: 768px) {
          .insight-section {
            padding-top: 56px;
            padding-bottom: 56px;
          }
 
          .insight-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
 
          .insight-header {
            margin-bottom: 32px;
          }
 
          .insight-heading {
            letter-spacing: 0;
          }
 
          .insight-pill-text {
            font-size: 11px;
          }
 
          .insight-btn {
            padding: 14px 24px;
            font-size: 14px;
          }
 
          .blog-card {
            width: 100%;
            max-width: 100%;
          }
 
          .insight-cards {
            gap: 16px;
            scroll-snap-type: none;
          }
 
          /* Stack cards vertically on mobile */
          .insight-cards {
            flex-direction: column;
            overflow-x: unset;
          }
        }
 
        /* ── Small mobile: 480px and below ── */
        @media (max-width: 480px) {
          .insight-section {
            padding-top: 48px;
            padding-bottom: 48px;
          }
 
          .insight-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
 
          .insight-header {
            margin-bottom: 28px;
            gap: 20px;
          }
 
          .insight-heading {
            font-size: clamp(24px, 5vw, 32px);
          }
 
          .insight-pill {
            padding: 5px 12px;
          }
 
          .insight-pill-text {
            font-size: 10px;
          }
 
          .insight-btn {
            padding: 12px 20px;
            font-size: 13px;
            gap: 6px;
          }
 
          .blog-card {
            padding: 20px;
          }
 
          /* Adjust card typography for small screens */
          .blog-card h3 {
            font-size: 18px !important;
            line-height: 24px !important;
          }
 
          .blog-card p {
            font-size: 14px !important;
            line-height: 20px !important;
          }
 
          .insight-cards {
            gap: 12px;
          }
        }
      `}</style>
 
      <div className="insight-x-pad">
        <div className="insight-container">
 
          {/* ── Header row ── */}
          <div className="insight-header">
            {/* Left — pill + heading */}
            <div className="insight-header-left">
              <div className="insight-pill">
                <span className="insight-pill-text">
                  Grow Smarter With Our Blog
                </span>
              </div>
 
              <h2 className="insight-heading">
                Insights &amp; Tips For Social Media
              </h2>
            </div>
 
            {/* Right — View Latest Now button */}
            <button
              className="insight-btn"
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
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
          <div className="insight-cards">
            {CARDS.map((c) => <BlogCard key={c.title} {...c} />)}
          </div>
 
        </div>
      </div>
    </section>
  );
}