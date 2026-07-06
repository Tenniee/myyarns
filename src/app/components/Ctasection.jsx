"use client";
 
import { useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// CORNER CIRCLES — move here
// negative = pushed further off screen (less visible)
// ═══════════════════════════════════════════════════════════════════
const CIRCLE_TL = { top: -128, left: -128 };   // top-left quadrant
const CIRCLE_BR = { bottom: -128, right: -128 }; // bottom-right quadrant
 
// ═══════════════════════════════════════════════════════════════════
// CHECK ITEMS
// ═══════════════════════════════════════════════════════════════════
const CHECK_ITEMS = ["No credit card", "14-day free", "Cancel anytime"];
 
// ═══════════════════════════════════════════════════════════════════
// WHITE CHECK CIRCLE ICON
// ═══════════════════════════════════════════════════════════════════
function WhiteCheck() {
  return (
    <svg width="11.67" height="11.67" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function CTASection() {
  const [email, setEmail]   = useState("");
  const [btnHov, setBtnHov] = useState(false);
 
  return (
    <div className="cta-outer">
      <style>{`
        .cta-outer {
          background: #25D16F;
          padding: 72px 100px;
          position: relative;
          overflow: hidden;
        }
 
        .cta-circle {
          position: absolute;
          width: 256px;
          height: 256px;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 0;
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
          flex: 0 0 531px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .cta-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.08;
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
          max-width: 460px;
        }
 
        .cta-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
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
          background: #FFFFFF;
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
          line-height: 24px;
          color: #6B7280;
          padding-left: 20px;
        }
 
        .cta-button {
          flex-shrink: 0;
          border-radius: 9999px;
          background: #25D16F;
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
          transition: opacity 0.15s, transform 0.15s;
        }
 
        .cta-button.hover {
          opacity: 0.88;
          transform: scale(1.02);
        }
 
        .cta-checks {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 16px;
          padding-left: 16px;
          padding-right: 16px;
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
 
        /* ── Tablet ── */
        @media (max-width: 900px) {
          .cta-outer {
            padding: 56px 40px;
          }
 
          .cta-inner {
            padding: 40px;
            gap: 32px;
          }
 
          .cta-left {
            flex-basis: 45%;
          }
        }
 
        /* ── Mobile: stack left/right, center everything ── */
        @media (max-width: 700px) {
          .cta-outer {
            padding: 48px 20px;
          }
 
          .cta-inner {
            flex-direction: column;
            align-items: stretch;
            padding: 32px 24px;
            gap: 28px;
            text-align: center;
          }
 
          .cta-left {
            flex-basis: auto;
            align-items: center;
          }
 
          .cta-subtext {
            max-width: none;
          }
 
          .cta-input-row {
            flex-wrap: wrap;
            border-radius: 24px;
            padding: 10px;
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
 
        /* ── Small mobile ── */
        @media (max-width: 400px) {
          .cta-outer {
            padding: 40px 16px;
          }
 
          .cta-inner {
            padding: 24px 16px;
          }
 
          .cta-checks {
            gap: 10px;
          }
 
          .cta-check-label {
            font-size: 10.5px;
          }
        }
      `}</style>
 
      {/* Top-left circle — move via CIRCLE_TL */}
      <div aria-hidden className="cta-circle" style={{
        top:        CIRCLE_TL.top,
        left:       CIRCLE_TL.left,
        background: "#9EF3DA",
      }} />
 
      {/* Bottom-right circle — move via CIRCLE_BR */}
      <div aria-hidden className="cta-circle" style={{
        bottom:     CIRCLE_BR.bottom,
        right:      CIRCLE_BR.right,
        background: "#1A5C38",
      }} />
 
      {/* ── Inner rectangle ── */}
      <div className="cta-inner">
 
        {/* ── LEFT: heading + subtext ── */}
        <div className="cta-left">
          <h2 className="cta-heading">Grow Your Brand Faster</h2>
          <p className="cta-subtext">
            Schedule, analyze, and engage across all social
            channels with the platform built for African market
            dynamics.
          </p>
        </div>
 
        {/* ── RIGHT: input + check row ── */}
        <div className="cta-right">
 
          {/* Pill-shaped input */}
          <div className="cta-input-row">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="cta-input"
            />
 
            {/* Subscribe Free button */}
            <button
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              className={`cta-button${btnHov ? " hover" : ""}`}
            >
              Subscribe Free
            </button>
          </div>
 
          {/* Check items row */}
          <div className="cta-checks">
            {CHECK_ITEMS.map(label => (
              <div key={label} className="cta-check-item">
                <WhiteCheck />
                <span className="cta-check-label">{label}</span>
              </div>
            ))}
          </div>
 
        </div>
      </div>
    </div>
  );
}