'use client'

import { useState } from "react";
import Image from "next/image";
import IG from '../../assets/FooterIG.svg';
import FB from '../../assets/FooterFB.svg';
import X from '../../assets/FooterX.svg';
import WA from '../../assets/FooterWA.svg';
import ChatIcon from '../../assets/FooterChatIcon.svg';

// ═══════════════════════════════════════════════════════════════════
// DATA — edit here
// ═══════════════════════════════════════════════════════════════════

// Social logo circles — set src to your image path, or leave null for placeholder
const SOCIAL_LOGOS = [
  { src: IG, alt: "Instagram" },
  { src: FB, alt: "Facebook" },
  { src: X, alt: "Twitter X" },
  { src: WA, alt: "Whatsapp" },
];

const LINK_COLUMNS = [
  {
    heading: "Product",
    links: ["Features", "Integrations", "Pricing", "Enterprise"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Partners", "Blog"],
  },
  {
    heading: "Resources",
    links: ["Help Center", "Community", "API Docs", "Webinars"],
  },
];

const BOTTOM_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "NDPR Compliance",
];

// ═══════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════

// Double chat bubble icon — bottom bubble filled white, top bubble outlined white
// Replace the entire svg with <Image src="..." /> if you prefer
function ChatBubbleIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      style={{ flexShrink: 0 }}>
      {/* Bottom bubble — filled white */}
      <path
        d="M2 16.5C2 17.9 3.1 19 4.5 19H7l2 3 2-3h8.5c1.4 0 2.5-1.1 2.5-2.5v-7C22 8.1 20.9 7 19.5 7H4.5C3.1 7 2 8.1 2 9.5v7z"
        fill="white"
      />
      {/* Top bubble — outlined white */}
      <path
        d="M6 7V5.5C6 4.1 7.1 3 8.5 3h11C20.9 3 22 4.1 22 5.5v6c0 1.4-1.1 2.5-2.5 2.5H18"
        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function PhoneIcon({ color = "#25D16F", size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function Footer() {
  const [chatHov,  setChatHov]  = useState(false);
  const [callHov,  setCallHov]  = useState(false);

  return (
    <footer style={{
      background:   "#F2F4F6",
      borderTop:    "1px solid rgba(187,203,188,0.30)",
      paddingTop:   64,
      paddingBottom: 0,
    }}>

      {/* ── Main grid ── */}
      <div className="page-x-pad">
        <div className="page-container">
          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            columnGap:            48,
            rowGap:               48,
          }}>

            {/* ── Brand column — spans 2 cols ── */}
            <div style={{
              gridColumn:    "1 / span 2",
              display:       "flex",
              flexDirection: "column",
              gap:            24,
              paddingBottom:  14.81,
            }}>
              <h2 style={{
                fontFamily:    "'Plus Jakarta Sans', sans-serif",
                fontWeight:    800,
                fontSize:      38,
                lineHeight:    "31.2px",
                letterSpacing: 0,
                color:         "#25D16F",
                margin:         0,
              }}>
                My Yarns
              </h2>

              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 400,
                fontSize:   18,
                lineHeight: "26px",
                color:      "#3C4A3F",
                margin:      0,
              }}>
                The complete social media management
                platform for African businesses. Empowering 
                creators and teams with localized tools for global impact.
              </p>

              {/* Social logos row */}
              <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
                {SOCIAL_LOGOS.map((logo) => (
                  <div
                    key={logo.alt}
                    style={{
                      width:        40,
                      height:       40,
                      borderRadius: "9999px",
                      border:       "1px solid rgba(187,203,188,0.50)",
                      background:   "white",
                      display:      "flex",
                      alignItems:   "center",
                      justifyContent:"center",
                      overflow:     "hidden",
                      cursor:       "pointer",
                      flexShrink:    0,
                    }}
                  >
                    {logo.src
                      ? <Image src={logo.src} width={20} height={20} alt={logo.alt} />
                      : <span style={{ fontSize: 10, color: "#aaa" }}>{logo.alt[0]}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* ── Link columns — cols 3, 4, 5 ── */}
            {LINK_COLUMNS.map((col, i) => (
              <div
                key={col.heading}
                style={{
                  gridColumn:    `${i + 3} / span 1`,
                  display:       "flex",
                  flexDirection: "column",
                  gap:            24,
                  paddingBottom:  58,
                }}
              >
                <p style={{
                  fontFamily:    "'Manrope', sans-serif",
                  fontWeight:    700,
                  fontSize:      15,
                  lineHeight:    "12px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color:         "#191C1E",
                  margin:         0,
                }}>
                  {col.heading}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontFamily:    "'Manrope', sans-serif",
                        fontWeight:    400,
                        fontSize:      18,
                        lineHeight:    "24px",
                        color:         "#3C4A3F",
                        textDecoration:"none",
                        transition:    "color 0.15s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "#25D16F"}
                      onMouseLeave={e => e.currentTarget.style.color = "#3C4A3F"}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* ── Contact column — col 6 ── */}
            <div style={{
              gridColumn:    "6 / span 1",
              display:       "flex",
              flexDirection: "column",
              gap:            24,
            }}>
              <p style={{
                fontFamily:    "'Manrope', sans-serif",
                fontWeight:    700,
                fontSize:      15,
                lineHeight:    "12px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color:         "#191C1E",
                margin:         0,
              }}>
                Need Support?
              </p>

              {/* White card */}
              <div style={{
                borderRadius: 16,
                border:       "1px solid rgba(187,203,188,0.20)",
                padding:      24,
                background:   "rgba(255,255,255,0.70)",
                display:      "flex",
                flexDirection:"column",
                gap:           16,
              }}>
                <p style={{
                  fontFamily:    "'Manrope', sans-serif",
                  fontWeight:    400,
                  fontSize:      12,
                  lineHeight:    "15px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color:         "#3C4A3F",
                  margin:         0,
                }}>
                  24/7 PRIORITY
                  ASSISTANCE
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>

                  {/* Chat button — green */}
                  <button
                    onMouseEnter={() => setChatHov(true)}
                    onMouseLeave={() => setChatHov(false)}
                    style={{
                      display:       "flex",
                      alignItems:    "center",
                      gap:            14.55,
                      borderRadius:  12,
                      background:    chatHov ? "#1ab35a" : "#25D16F",
                      border:        "none",
                      paddingTop:    12,
                      paddingBottom: 12,
                      paddingLeft:   16,
                      paddingRight:  22.56,
                      cursor:        "pointer",
                      transition:    "background 0.15s",
                    }}
                  >
                    <Image src={ChatIcon} width={15} height={15} alt="" />
                    <span style={{
                      fontFamily:    "'Manrope', sans-serif",
                      fontWeight:    700,
                      fontSize:      14,
                      lineHeight:    "16px",
                      letterSpacing: "0.6px",
                      color:         "white",
                    }}>
                      Chat Now
                    </span>
                  </button>

                  {/* Call button — outlined */}
                  <button
                    onMouseEnter={() => setCallHov(true)}
                    onMouseLeave={() => setCallHov(false)}
                    style={{
                      display:       "flex",
                      alignItems:    "center",
                      gap:            8,
                      borderRadius:  12,
                      background:    callHov ? "rgba(37,209,111,0.05)" : "transparent",
                      border:        "1px solid #25D16F",
                      paddingTop:    12,
                      paddingBottom: 12,
                      paddingLeft:   16,
                      paddingRight:  16,
                      cursor:        "pointer",
                      transition:    "background 0.15s",
                    }}
                  >
                    <PhoneIcon color="#25D16F" size={15} />
                    <span style={{
                      fontFamily:    "'Manrope', sans-serif",
                      fontWeight:    700,
                      fontSize:      14,
                      lineHeight:    "16px",
                      letterSpacing: "0.6px",
                      color:         "#25D16F",
                    }}>
                      Request Call
                    </span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        borderTop:    "1px solid rgba(187,203,188,0.30)",
        marginTop:    96,
      }}>
        <div style={{
          maxWidth:      1280,
          margin:        "0 auto",
          display:       "flex",
          flexDirection: "row",
          justifyContent:"space-between",
          alignItems:    "center",
          paddingTop:    32,
          paddingBottom: 32,
          paddingLeft:   64,
          paddingRight:  64,
        }}>

          {/* Copyright */}
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize:   14,
            lineHeight: "20px",
            color:      "#3C4A3F",
            margin:      0,
          }}>
            © 2026 MyYarns. All rights reserved. Built for the African Digital Economy.
          </p>

          {/* Bottom links */}
          <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
            {BOTTOM_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily:    "'Manrope', sans-serif",
                  fontWeight:    500,
                  fontSize:      16,
                  lineHeight:    "20px",
                  color:         "#3C4A3F",
                  textDecoration:"none",
                  transition:    "color 0.15s",
                  whiteSpace:    "nowrap",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#25D16F"}
                onMouseLeave={e => e.currentTarget.style.color = "#3C4A3F"}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}