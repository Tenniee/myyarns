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
        style={{
          width: 434,
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
          // pill sits on the top border, so we need overflow visible
          overflow: "visible",
        }}
      >
        {/* Most Popular pill — sits ON the border, centred at the top */}
        <div style={{
          position: "absolute",
          top: 10,          // half the pill height so border bisects it
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
 
        {/* Inner border box — slightly inset top/bottom so border is shorter than card */}
        <div style={{
          margin: "24px 16px",          // inset from card edges → border shorter than card height
          borderRadius: 32,
          border: "2px solid #25D16F",
          padding: "36px 32px 32px",   // extra top pad to clear the pill
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
 
          {/* Button — outer shell (white 20% opacity) */}
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
      style={{
        width: 396, height: 628,
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
    <section className="page-x-pad" style={{ background: "white", paddingTop: 80, paddingBottom: 80 }}>
      <div className="page-container">
 
        {/* ── Top div ── */}
        <div style={{
          display: "flex", flexDirection: "row",
          justifyContent: "space-between", alignItems: "center",
          marginBottom: 64,
        }}>
 
          {/* Left — price comparison */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
          <div style={{
            maxWidth: 690, display: "flex", flexDirection: "column",
            gap: 12, alignItems: "flex-end", textAlign: "right", minWidth: '60%'
          }}>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "52.8px", letterSpacing: "-0.96px",
              margin: 0, textAlign: 'right',
            }}>
              <span style={{ color: "#191C1E" }}>Simple </span>
              <span style={{ color: "#25D16F" }}>Pricing</span>
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500, fontSize: 24, lineHeight: "31.2px",
              color: "#3C4A3F", margin: 0, textAlign: 'right'
            }}>Grow Your Brand Faster With Our All-in-One Platform</p>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400, fontSize: 18, lineHeight: "28.8px",
              color: "#3C4A3F", margin: 0,
            }}>No FX headaches. No per-agent pricing. One flat Naira price covers your whole team.</p>
          </div>
        </div>
 
        {/* ── Pricing cards ── */}
        <div style={{
          display: "flex", flexDirection: "row",
          gap: 24, justifyContent: "center", alignItems: "center",
        }}>
          {PLANS.map((plan) => <PricingCard key={plan.id} plan={plan} />)}
        </div>
 
      </div>
    </section>
  );
}
 
 
// ═══════════════════════════════════════════════════════════════════
// CTA SECTION
// ═══════════════════════════════════════════════════════════════════
 
// ── position constants for the corner circles ──
const CTA_CIRCLE_TL = { top: -100, left: -100 };   // top-left: ~quadrant visible
const CTA_CIRCLE_BR = { bottom: -100, right: -100 }; // bottom-right: ~quadrant visible
 
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
    <div
      style={{
        background: "#25D16F",
        paddingTop: 72, paddingBottom: 72,
        paddingLeft: 100, paddingRight: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top-left circle — move via CTA_CIRCLE_TL */}
      <div aria-hidden style={{
        position: "absolute",
        top: CTA_CIRCLE_TL.top, left: CTA_CIRCLE_TL.left,
        width: 256, height: 256, borderRadius: "9999px",
        background: "#9EF3DA", pointerEvents: "none",
      }} />
 
      {/* Bottom-right circle — move via CTA_CIRCLE_BR */}
      <div aria-hidden style={{
        position: "absolute",
        bottom: CTA_CIRCLE_BR.bottom, right: CTA_CIRCLE_BR.right,
        width: 256, height: 256, borderRadius: "9999px",
        background: "#9EF3DA", pointerEvents: "none",
      }} />
 
      {/* Inner rectangle */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1240, margin: "0 auto",
        border: "1px solid rgba(187,203,188,0.10)",
        borderRadius: 0,
        padding: 64,
        boxShadow: "0 8px 10px -6px rgba(0,109,63,0.05), 0 20px 25px -5px rgba(0,109,63,0.05)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 48,
      }}>
 
        {/* Left — heading + subtext */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 531 }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 40px)",
            lineHeight: "43.2px", letterSpacing: 0,
            color: "white", margin: 0,
          }}>
            Start Growing Your Brand on Social Media Today
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400, fontSize: 20,
            lineHeight: "28.8px", color: "rgba(255,255,255,0.85)",
            margin: 0,
          }}>
            Join 2,500+ teams already using MyYarns to manage, engage and grow across every platform from one place.
          </p>
        </div>
 
        {/* Right — input + check items */}
        <div style={{
          flex: 1, maxWidth: 531,
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {/* Pill input */}
          <div style={{
            display: "flex", flexDirection: "row", alignItems: "center",
            borderRadius: 9999,
            border: "1px solid rgba(187,203,188,0.20)",
            boxShadow: "inset 0 2px 4px 1px rgba(0,0,0,0.05)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.15)",
            padding: 6, gap: 12,
          }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your work email"
              style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                fontFamily: "'Manrope', sans-serif", fontSize: 16,
                color: "white", paddingLeft: 20,
              }}
            />
            <button
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                borderRadius: 9999, background: "#25D16F",
                paddingTop: 21.5, paddingBottom: 22.5,
                paddingLeft: 32, paddingRight: 32,
                border: "none", cursor: "pointer",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700, fontSize: 15,
                lineHeight: "12px", letterSpacing: "0.6px",
                color: "white", whiteSpace: "nowrap",
                transform: btnHov ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.15s, opacity 0.15s",
                opacity: btnHov ? 0.88 : 1,
                background: btnHov ? "#1ab35a" : "#006D3F",
              }}
            >
              Subscribe Free
            </button>
          </div>
 
          {/* Check items row */}
          <div style={{
            display: "flex", flexDirection: "row",
            gap: 16, paddingLeft: 16, paddingRight: 16,
          }}>
            {CHECK_ITEMS.map(label => (
              <div key={label} style={{
                display: "flex", flexDirection: "row",
                alignItems: "center", gap: 4,
                paddingBottom: 1,
              }}>
                <WhiteCheckCircle />
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400, fontSize: 12,
                  lineHeight: "15px", letterSpacing: "0.5px",
                  textTransform: "uppercase", color: "white",
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
 
      </div>
    </div>
  );
}