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
    <div style={{
      background:     "#25D16F",
      paddingTop:     72,
      paddingBottom:  72,
      paddingLeft:    100,
      paddingRight:   100,
      position:       "relative",
      overflow:       "hidden",
    }}>
 
      {/* Top-left circle — move via CIRCLE_TL */}
      <div aria-hidden style={{
        position:     "absolute",
        top:          CIRCLE_TL.top,
        left:         CIRCLE_TL.left,
        width:        256,
        height:       256,
        borderRadius: "9999px",
        background:   "#9EF3DA",
        pointerEvents:"none",
        zIndex:        0,
      }} />
 
      {/* Bottom-right circle — move via CIRCLE_BR */}
      <div aria-hidden style={{
        position:     "absolute",
        bottom:       CIRCLE_BR.bottom,
        right:        CIRCLE_BR.right,
        width:        256,
        height:       256,
        borderRadius: "9999px",
        background:   "#1A5C38",
        pointerEvents:"none",
        zIndex:        0,
      }} />
 
      {/* ── Inner rectangle ── */}
      <div style={{
        position:      "relative",
        zIndex:         1,
        maxWidth:       1240,
        margin:         "0 auto",
        border:         "1px solid rgba(187,203,188,0.10)",
        padding:        64,
        boxShadow:
          "0 8px 10px -6px rgba(0,109,63,0.05), 0 20px 25px -5px rgba(0,109,63,0.05)",
        display:        "flex",
        flexDirection:  "row",
        justifyContent: "space-between",
        alignItems:     "center",
        gap:             48,
        background: '#00D17E',
      }}>
 
        {/* ── LEFT: heading + subtext ── */}
        <div style={{
          flex:          "0 0 531px",
          display:       "flex",
          flexDirection: "column",
          gap:            16,
        }}>
          <h2 style={{
            fontFamily:    "'Plus Jakarta Sans', sans-serif",
            fontWeight:    700,
            fontSize:      "clamp(28px, 3vw, 40px)",
            lineHeight:    "43.2px",
            letterSpacing: 0,
            color:         "white",
            margin:         0,
          }}>
            Grow Your Brand Faster
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize:   20,
            lineHeight: "28.8px",
            color:      "rgba(255,255,255,0.85)",
            margin:      0,
            maxWidth:   460,
          }}>
            Schedule, analyze, and engage across all social
            channels with the platform built for African market
            dynamics.
          </p>
        </div>
 
        {/* ── RIGHT: input + check row ── */}
        <div style={{
          flex:          1,
          display:       "flex",
          flexDirection: "column",
          gap:            16,
        }}>
 
          {/* Pill-shaped input */}
          <div style={{
            display:             "flex",
            flexDirection:       "row",
            alignItems:          "center",
            borderRadius:        9999,
            border:              "1px solid rgba(187,203,188,0.20)",
            boxShadow:           "inset 0 2px 4px 1px rgba(0,0,0,0.05)",
            backdropFilter:      "blur(12px)",
            WebkitBackdropFilter:"blur(12px)",
            background:          "#FFFFFF",
            padding:              6,
            gap:                  12,
          }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your work email"
              style={{
                flex:        1,
                background:  "transparent",
                border:      "none",
                outline:     "none",
                fontFamily:  "'Manrope', sans-serif",
                fontSize:    16,
                lineHeight:  "24px",
                color:       "#6B7280",
                paddingLeft: 20,
              }}
            />
 
            {/* Subscribe Free button */}
            <button
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                flexShrink:    0,
                borderRadius:  9999,
                background:    "#25D16F",
                paddingTop:    21.5,
                paddingBottom: 22.5,
                paddingLeft:   32,
                paddingRight:  32,
                border:        "none",
                cursor:        "pointer",
                fontFamily:    "'Manrope', sans-serif",
                fontWeight:    700,
                fontSize:      15,
                lineHeight:    "12px",
                letterSpacing: "0.6px",
                color:         "white",
                whiteSpace:    "nowrap",
                transition:    "opacity 0.15s, transform 0.15s",
                opacity:       btnHov ? 0.88 : 1,
                transform:     btnHov ? "scale(1.02)" : "scale(1)",
              }}
            >
              Subscribe Free
            </button>
          </div>
 
          {/* Check items row */}
          <div style={{
            display:      "flex",
            flexDirection:"row",
            gap:           16,
            paddingLeft:   16,
            paddingRight:  16,
          }}>
            {CHECK_ITEMS.map(label => (
              <div key={label} style={{
                display:       "flex",
                flexDirection: "row",
                alignItems:    "center",
                gap:            4,
                paddingBottom:  1,
              }}>
                <WhiteCheck />
                <span style={{
                  fontFamily:    "'Manrope', sans-serif",
                  fontWeight:    400,
                  fontSize:      12,
                  lineHeight:    "15px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color:         "white",
                }}>{label}</span>
              </div>
            ))}
          </div>
 
        </div>
      </div>
    </div>
  );
}