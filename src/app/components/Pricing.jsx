"use client";
 
import { useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// PLAN DATA
// ═══════════════════════════════════════════════════════════════════
const PLANS = [
  {
    id: "starter",
    comparison: "FRESHWORKS STARTER: ₦28,500/AGENT",
    savingsTag: null,
    name: "Starter",
    price: "₦9,500",
    period: "/mo",
    btnLabel: "Get Started Free",
    accentColor: "#006D3F",
    iconColor: "#006D3F",
    features: [
      { type: "check", text: "5 social media accounts" },
      { type: "check", text: "Unified inbox" },
      { type: "check", text: "Basic scheduling" },
      { type: "check", text: "Standard analytics" },
      { type: "x",     text: "AI auto-replies", dim: true },
      { type: "x",     text: "Team collaboration", dim: true },
      { type: "x",     text: "Priority support", dim: true },
    ],
  },
  {
    id: "growth",
    comparison: "FRESHWORKS GROWTH: ₦73,500/AGENT",
    savingsTag: null,
    name: "Growth",
    price: "₦24,500",
    period: "/mo",
    btnLabel: "Start Free Trial",
    accentColor: "#25D16F",
    iconColor: "#25D16F",
    isMiddle: true,
    features: [
      { type: "star",  text: "Everything in Starter" },
      { type: "check", text: "25 social media accounts" },
      { type: "check", text: "AI auto-replies" },
      { type: "check", text: "Team collaboration" },
      { type: "check", text: "Advanced analytics" },
      { type: "check", text: "Bulk scheduling" },
      { type: "check", text: "Priority support" },
    ],
  },
  {
    id: "pro",
    comparison: "FRESHWORKS PRO: ₦148,500/AGENT",
    savingsTag: "Save ₦49,000/agent/mo vs Freshworks",
    name: "Pro",
    price: "₦49,500",
    period: "/mo",
    btnLabel: "Contact Sales",
    accentColor: "#006D3F",
    iconColor: "#006D3F",
    features: [
      { type: "star",  text: "Everything in Growth" },
      { type: "check", text: "Unlimited accounts" },
      { type: "check", text: "Custom AI training" },
      { type: "check", text: "White-label reports" },
      { type: "check", text: "API access" },
      { type: "check", text: "Dedicated account manager" },
      { type: "check", text: "SLA guarantee" },
    ],
  },
];
 
// ═══════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════
function CheckCircleIcon({ color = "#006D3F", size = 16.67 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
 
function XCircleIcon({ color = "#BA1A1A", size = 16.67 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}
 
function StarCircleIcon({ color = "#006D3F", size = 16.67 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill={color} />
      <polygon points="12,5.5 13.5,9.5 17.5,9.8 14.5,12.5 15.5,16.5 12,14.2 8.5,16.5 9.5,12.5 6.5,9.8 10.5,9.5"
        fill="white" />
    </svg>
  );
}
 
function ArrowRight({ color = "#191C1E", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
function FeatureIcon({ type, color }) {
  if (type === "star")  return <StarCircleIcon color={color} />;
  if (type === "x")     return <XCircleIcon color="#BA1A1A" />;
  return <CheckCircleIcon color={color} />;
}
 
// ═══════════════════════════════════════════════════════════════════
// PRICING CARD
// ═══════════════════════════════════════════════════════════════════
function PricingCard({ plan }) {
  const [hov, setHov] = useState(false);
  const [btnHov, setBtnHov] = useState(false);
  const isMiddle = !!plan.isMiddle;
 
  if (isMiddle) {
    return (
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="pricing-card-middle"
        style={{
          borderRadius: 40,
          background: "white",
          flexShrink: 0,
          transform: hov ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
          boxShadow: hov
            ? "0 32px 64px rgba(0,109,63,0.30)"
            : "0 8px 32px rgba(0,109,63,0.18)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
          position: "relative",
          zIndex: hov ? 10 : 2,
          overflow: "visible",
        }}
      >
        {/* Most Popular pill */}
        <div style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          borderRadius: 9999, background: "#25D16F",
          padding: "6px 24px", display: "inline-flex",
          whiteSpace: "nowrap",
        }}>
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700, fontSize: 12, lineHeight: "16px",
            letterSpacing: "1.2px", textTransform: "uppercase", color: "white",
          }}>Most Popular</span>
        </div>
 
        {/* Inner border box */}
        <div style={{
          margin: "24px 16px",
          borderRadius: 32,
          border: "2px solid #25D16F",
          padding: "36px 32px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          minHeight: 648,
        }}>
 
          {/* Comparison */}
          <p style={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 10,
            lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase",
            color: "rgba(0,109,63,0.70)", margin: "0 0 8px",
          }}>{plan.comparison}</p>
 
          {/* Plan name */}
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
            fontSize: 24, lineHeight: "31.2px", color: "#191C1E", margin: "0 0 4px",
          }}>{plan.name}</p>
 
          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
            <span style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 800,
              fontSize: 36, lineHeight: "40px", color: "#25D16F",
            }}>{plan.price}</span>
            <span style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 500,
              fontSize: 16, lineHeight: "24px", color: "#3C4A3F",
            }}>{plan.period}</span>
          </div>
 
          {/* Button */}
          <div style={{
            borderRadius: 9999,
            background: "rgba(255,255,255,0.20)",
            padding: 4,
            marginBottom: 24,
            boxShadow: "0 4px 6px -4px rgba(0,109,63,0.20), 0 10px 15px -3px rgba(0,109,63,0.20)",
          }}>
            <button
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                width: "100%", borderRadius: 9999, border: "none",
                padding: "16px 0", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#25D16F",
                fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                fontSize: 16, color: "white",
                transform: btnHov ? "scale(1.01)" : "scale(1)",
                transition: "transform 0.15s",
              }}
            >
              {plan.btnLabel}
              <span style={{
                transform: btnHov ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                display: "inline-flex",
              }}>
                <ArrowRight color="white" />
              </span>
            </button>
          </div>
 
          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {plan.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FeatureIcon type={f.type} color={plan.iconColor} />
                <span style={{
                  fontFamily: "'Manrope', sans-serif", fontWeight: 400,
                  fontSize: 16, lineHeight: "24px",
                  color: f.dim ? "rgba(255,255,255,0.45)" : "#191C1E",
                }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
 
  // Standard card
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="pricing-card-standard"
      style={{
        borderRadius: 40,
        border: "1px solid white",
        padding: 32,
        background: "rgba(255,255,255,0.70)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: hov
          ? "0 24px 48px rgba(0,109,63,0.12)"
          : "0 8px 32px rgba(0,109,63,0.05)",
        display: "flex", flexDirection: "column",
        flexShrink: 0,
        transform: hov ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
        overflow: "hidden",
      }}
    >
      {/* Comparison line(s) */}
      <p style={{
        fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 10,
        lineHeight: "15px", letterSpacing: "0.5px", textTransform: "uppercase",
        color: "rgba(60,74,63,0.60)", margin: "0 0 4px",
      }}>{plan.comparison}</p>
 
      {plan.savingsTag && (
        <p style={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 10,
          lineHeight: "15px", letterSpacing: "-0.25px",
          color: "#006D3F", margin: "0 0 8px",
        }}>{plan.savingsTag}</p>
      )}
 
      {/* Plan name */}
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
        fontSize: 24, lineHeight: "31.2px", color: "#191C1E", margin: "0 0 4px",
      }}>{plan.name}</p>
 
      {/* Price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
        <span style={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 800,
          fontSize: 30, lineHeight: "36px", color: "#191C1E",
        }}>{plan.price}</span>
        <span style={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 500,
          fontSize: 16, lineHeight: "24px", color: "#3C4A3F",
        }}>{plan.period}</span>
      </div>
 
      {/* Button */}
      <button
        onMouseEnter={() => setBtnHov(true)}
        onMouseLeave={() => setBtnHov(false)}
        style={{
          width: "100%", borderRadius: 9999,
          border: "2px solid rgba(108,123,110,0.20)",
          padding: "16px 0", cursor: "pointer", marginBottom: 24,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          background: btnHov ? "#25D16F" : "transparent",
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: 16,
          color: btnHov ? "white" : "#191C1E",
          transition: "background 0.2s, color 0.2s, transform 0.15s",
          transform: btnHov ? "scale(1.01)" : "scale(1)",
        }}
      >
        {plan.btnLabel}
        <span style={{
          transform: btnHov ? "translateX(4px)" : "translateX(0)",
          transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
          display: "inline-flex",
        }}>
          <ArrowRight color={btnHov ? "white" : "#191C1E"} />
        </span>
      </button>
 
      {/* Feature list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {plan.features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FeatureIcon type={f.type} color={plan.iconColor} />
            <span style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 400,
              fontSize: 16, lineHeight: "24px",
              color: f.dim ? "rgba(60,74,63,0.45)" : "#3C4A3F",
            }}>{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function Pricing() {
  return (
    <>
      <style>{`
        .pricing-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .pricing-container {
          width: 100%;
        }
 
        /* ── Top section ── */
        .pricing-top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 64px;
          gap: 48px;
        }
 
        .pricing-top-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }
 
        .pricing-top-right {
          max-width: 690px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
          text-align: right;
          min-width: 60%;
        }
 
        .pricing-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 52.8px;
          letter-spacing: -0.96px;
          margin: 0;
          text-align: right;
        }
 
        .pricing-subtext {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 31.2px;
          color: #3C4A3F;
          margin: 0;
          text-align: right;
        }
 
        .pricing-desc {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 28.8px;
          color: #3C4A3F;
          margin: 0;
        }
 
        /* ── Cards row ── */
        .pricing-cards {
          display: flex;
          flex-direction: row;
          gap: 24px;
          justify-content: center;
          align-items: center;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
 
        .pricing-card-standard,
        .pricing-card-middle {
          width: 396px;
          height: 628px;
          scroll-snap-align: start;
        }
 
        .pricing-card-middle {
          width: 434px;
          height: auto;
        }
 
        /* ════════════════════════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════════════════════════ */
 
        /* ── Tablet: 1024px and below ── */
        @media (max-width: 1024px) {
          .pricing-x-pad {
            padding-left: 48px;
            padding-right: 48px;
          }
 
          .pricing-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
 
          .pricing-top-right {
            align-items: flex-start;
            text-align: left;
            min-width: auto;
            max-width: 100%;
          }
 
          .pricing-heading,
          .pricing-subtext {
            text-align: left;
          }
 
          .pricing-card-standard,
          .pricing-card-middle {
            width: 350px;
          }
        }
 
        /* ── Mobile: 768px and below ── */
        @media (max-width: 768px) {
          .pricing-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
 
          .pricing-top {
            margin-bottom: 40px;
          }
 
          .pricing-top-left {
            width: 100%;
          }
 
          .pricing-heading {
            font-size: clamp(24px, 5vw, 32px);
            line-height: 1.2;
            letter-spacing: 0;
          }
 
          .pricing-subtext {
            font-size: 18px;
            line-height: 24px;
          }
 
          .pricing-desc {
            font-size: 14px;
            line-height: 20px;
          }
 
          .pricing-cards {
            flex-direction: column;
            gap: 20px;
            overflow-x: unset;
            scroll-snap-type: none;
          }
 
          .pricing-card-standard,
          .pricing-card-middle {
            width: 100%;
            height: auto;
            scroll-snap-align: unset;
          }
        }
 
        /* ── Small mobile: 480px and below ── */
        @media (max-width: 480px) {
          .pricing-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
 
          .pricing-heading {
            font-size: clamp(20px, 5vw, 28px);
          }
 
          .pricing-subtext {
            font-size: 16px;
          }
 
          .pricing-desc {
            font-size: 13px;
          }
 
          .pricing-card-standard,
          .pricing-card-middle {
            padding: 20px;
          }
        }
      `}</style>
 
      <section className="pricing-x-pad" style={{ background: "white", paddingTop: 80, paddingBottom: 80 }}>
        <div className="pricing-container">
 
          {/* ── Top div ── */}
          <div className="pricing-top">
 
            {/* Left — price comparison */}
            <div className="pricing-top-left">
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700, fontSize: 24, lineHeight: "31.2px",
                color: "#1A5C38", margin: 0,
              }}>MyYarns Growth = ₦24,500/agent.</p>
              <div style={{
                borderRadius: 8, background: "#25D16F",
                padding: "2px 12px", display: "inline-flex", alignItems: "center",
                width: "fit-content",
              }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700, fontSize: 24, lineHeight: "31.2px", color: "white",
                }}>67% cheaper.</span>
              </div>
            </div>
 
            {/* Right — heading block */}
            <div className="pricing-top-right">
              <h2 className="pricing-heading">
                <span style={{ color: "#191C1E" }}>Simple </span>
                <span style={{ color: "#25D16F" }}>Pricing</span>
              </h2>
              <p className="pricing-subtext">Grow Your Brand Faster With Our All-in-One Platform</p>
              <p className="pricing-desc">No FX headaches. No per-agent pricing. One flat Naira price covers your whole team.</p>
            </div>
          </div>
 
          {/* ── Pricing cards ── */}
          <div className="pricing-cards">
            {PLANS.map((plan) => <PricingCard key={plan.id} plan={plan} />)}
          </div>
 
        </div>
      </section>
    </>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════════
 
const CTA_CIRCLE_TL = { top: -100, left: -100 };
const CTA_CIRCLE_BR = { bottom: -100, right: -100 };
const CHECK_ITEMS = ["No credit card", "14-day free", "Cancel anytime"];
 
function WhiteCheckCircle({ size = 11.67 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" stroke="white" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
 
export function CTASection() {
  const [email, setEmail] = useState("");
  const [btnHov, setBtnHov] = useState(false);
 
  return (
    <>
      <style>{`
        .cta-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .cta-outer {
          background: #25D16F;
          padding-top: 72px;
          padding-bottom: 72px;
          position: relative;
          overflow: hidden;
        }
 
        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
          border: 1px solid rgba(187,203,188,0.10);
          padding: 64px;
          box-shadow: 0 8px 10px -6px rgba(0,109,63,0.05), 0 20px 25px -5px rgba(0,109,63,0.05);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 48px;
          background: #00D17E;
        }
 
        .cta-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 531px;
          flex-shrink: 0;
        }
 
        .cta-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 3.5vw, 40px);
          line-height: 43.2px;
          letter-spacing: 0;
          color: white;
          margin: 0;
        }
 
        .cta-subtext {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 28.8px;
          color: rgba(255,255,255,0.85);
          margin: 0;
        }
 
        .cta-right {
          flex: 1;
          max-width: 531px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .cta-input-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 9999px;
          border: 1px solid rgba(187,203,188,0.20);
          box-shadow: inset 0 2px 4px 1px rgba(0,0,0,0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.15);
          padding: 6px;
          gap: 12px;
        }
 
        .cta-input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          color: white;
          padding-left: 20px;
        }
 
        .cta-input::placeholder {
          color: rgba(255,255,255,0.7);
        }
 
        .cta-button {
          flex-shrink: 0;
          border-radius: 9999px;
          background: #006D3F;
          padding: 21.5px 32px 22.5px;
          border: none;
          cursor: pointer;
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 15px;
          line-height: 12px;
          letter-spacing: 0.6px;
          color: white;
          white-space: nowrap;
          transition: background 0.15s, transform 0.15s;
          transform: var(--cta-btn-transform, scale(1));
        }
 
        .cta-button:hover {
          background: #1ab35a;
          transform: scale(1.03);
        }
 
        .cta-checks {
          display: flex;
          flex-direction: row;
          gap: 16px;
          padding-left: 16px;
          padding-right: 16px;
          flex-wrap: wrap;
        }
 
        .cta-check-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          padding-bottom: 1px;
        }
 
        .cta-check-label {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: white;
        }
 
        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cta-x-pad {
            padding-left: 48px;
            padding-right: 48px;
          }
 
          .cta-inner {
            padding: 48px;
            gap: 32px;
          }
        }
 
        @media (max-width: 768px) {
          .cta-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
 
          .cta-outer {
            padding-top: 48px;
            padding-bottom: 48px;
          }
 
          .cta-inner {
            flex-direction: column;
            align-items: stretch;
            padding: 32px;
            gap: 24px;
            text-align: center;
          }
 
          .cta-left {
            align-items: center;
            max-width: none;
            flex-shrink: unset;
          }
 
          .cta-right {
            max-width: none;
          }
 
          .cta-input-row {
            flex-wrap: wrap;
          }
 
          .cta-input {
            flex: 1 1 100%;
            padding: 10px 12px;
            text-align: center;
          }
 
          .cta-button {
            flex: 1 1 100%;
            padding: 16px 24px;
          }
 
          .cta-checks {
            justify-content: center;
            padding-left: 0;
            padding-right: 0;
          }
        }
 
        @media (max-width: 480px) {
          .cta-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
 
          .cta-outer {
            padding-top: 40px;
            padding-bottom: 40px;
          }
 
          .cta-inner {
            padding: 24px;
          }
 
          .cta-heading {
            font-size: clamp(20px, 5vw, 28px);
            line-height: 1.2;
          }
 
          .cta-subtext {
            font-size: 16px;
            line-height: 24px;
          }
 
          .cta-checks {
            gap: 10px;
          }
 
          .cta-check-label {
            font-size: 10px;
          }
        }
      `}</style>
 
      <div className="cta-outer">
        {/* Top-left circle */}
        <div aria-hidden style={{
          position: "absolute",
          top: CTA_CIRCLE_TL.top, left: CTA_CIRCLE_TL.left,
          width: 256, height: 256, borderRadius: "9999px",
          background: "#9EF3DA", pointerEvents: "none", zIndex: 0,
        }} />
 
        {/* Bottom-right circle */}
        <div aria-hidden style={{
          position: "absolute",
          bottom: CTA_CIRCLE_BR.bottom, right: CTA_CIRCLE_BR.right,
          width: 256, height: 256, borderRadius: "9999px",
          background: "#9EF3DA", pointerEvents: "none", zIndex: 0,
        }} />
 
        {/* Inner content */}
        <div className="cta-x-pad">
          <div className="cta-inner">
 
            {/* Left */}
            <div className="cta-left">
              <h2 className="cta-heading">
                Start Growing Your Brand on Social Media Today
              </h2>
              <p className="cta-subtext">
                Join 2,500+ teams already using MyYarns to manage, engage and grow across every platform from one place.
              </p>
            </div>
 
            {/* Right */}
            <div className="cta-right">
              {/* Email input */}
              <div className="cta-input-row">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="cta-input"
                />
                <button
                  className="cta-button"
                  onMouseEnter={() => setBtnHov(true)}
                  onMouseLeave={() => setBtnHov(false)}
                >
                  Subscribe Free
                </button>
              </div>
 
              {/* Check items */}
              <div className="cta-checks">
                {CHECK_ITEMS.map(label => (
                  <div key={label} className="cta-check-item">
                    <WhiteCheckCircle />
                    <span className="cta-check-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </>
  );
}