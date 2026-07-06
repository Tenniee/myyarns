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
    <footer className="footer">
      <style>{`
        .footer {
          background: #F2F4F6;
          border-top: 1px solid rgba(187,203,188,0.30);
          padding-top: 64px;
          padding-bottom: 0;
        }
 
        .footer-main-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          column-gap: 48px;
          row-gap: 48px;
          width: 100%;
        }
 
        .footer-brand {
          grid-column: 1 / span 2;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-bottom: 14.81px;
        }
 
        .footer-brand-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 38px;
          line-height: 31.2px;
          letter-spacing: 0;
          color: #25D16F;
          margin: 0;
        }
 
        .footer-brand-text {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          color: #3C4A3F;
          margin: 0;
        }
 
        .footer-social {
          display: flex;
          flex-direction: row;
          gap: 16px;
        }
 
        .footer-social-icon {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          border: 1px solid rgba(187,203,188,0.50);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.15s, border-color 0.15s;
        }
 
        .footer-social-icon:hover {
          background: #25D16F;
          border-color: #25D16F;
        }
 
        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-bottom: 58px;
        }
 
        .footer-col-heading {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 15px;
          line-height: 12px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #191C1E;
          margin: 0;
        }
 
        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .footer-link {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          color: #3C4A3F;
          text-decoration: none;
          transition: color 0.15s;
        }
 
        .footer-link:hover {
          color: #25D16F;
        }
 
        .footer-contact {
          grid-column: 6 / span 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
 
        .footer-support-card {
          border-radius: 16px;
          border: 1px solid rgba(187,203,188,0.20);
          padding: 24px;
          background: rgba(255,255,255,0.70);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
 
        .footer-support-label {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #3C4A3F;
          margin: 0;
        }
 
        .footer-button-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
 
        .footer-btn {
          display: flex;
          align-items: center;
          gap: 14.55px;
          border-radius: 12px;
          border: none;
          padding: 12px 16px;
          cursor: pointer;
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.6px;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          white-space: nowrap;
        }
 
        .footer-btn-chat {
          background: #25D16F;
          color: white;
          padding-right: 22.56px;
        }
 
        .footer-btn-chat:hover {
          background: #1ab35a;
        }
 
        .footer-btn-call {
          background: transparent;
          border: 1px solid #25D16F;
          color: #25D16F;
          padding-left: 16px;
          padding-right: 16px;
        }
 
        .footer-btn-call:hover {
          background: rgba(37,209,111,0.05);
        }
 
        .footer-bottom {
          border-top: 1px solid rgba(187,203,188,0.30);
          margin-top: 96px;
        }
 
        .footer-bottom-content {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 32px 64px;
        }
 
        .footer-copyright {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #3C4A3F;
          margin: 0;
          flex-shrink: 0;
        }
 
        .footer-bottom-links {
          display: flex;
          flex-direction: row;
          gap: 24px;
        }
 
        .footer-bottom-link {
          font-family: 'Manrope', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #3C4A3F;
          text-decoration: none;
          transition: color 0.15s;
          white-space: nowrap;
        }
 
        .footer-bottom-link:hover {
          color: #25D16F;
        }
 
        /* ── Padding wrapper ── */
        .footer-x-pad {
          padding-left: 100px;
          padding-right: 100px;
        }
 
        .footer-container {
          width: 100%;
        }
 
        /* ════════════════════════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════════════════════════ */
 
        /* ── Large desktop: no change ── */
        @media (max-width: 1400px) {
          .footer-x-pad {
            padding-left: 64px;
            padding-right: 64px;
          }
        }
 
        /* ── Tablet: 1024px and below ── */
        @media (max-width: 1024px) {
          .footer-x-pad {
            padding-left: 40px;
            padding-right: 40px;
          }
 
          .footer-main-grid {
            grid-template-columns: repeat(4, 1fr);
            column-gap: 32px;
            row-gap: 40px;
          }
 
          .footer-brand {
            grid-column: 1 / span 2;
          }
 
          .footer-links-col:nth-child(3) {
            grid-column: 3;
          }
 
          .footer-links-col:nth-child(4) {
            grid-column: 4;
          }
 
          .footer-links-col:nth-child(5) {
            grid-column: 1;
          }
 
          .footer-contact {
            grid-column: 2 / span 3;
          }
 
          .footer-brand-title {
            font-size: 32px;
          }
 
          .footer-brand-text {
            font-size: 16px;
          }
        }
 
        /* ── Mobile: 768px and below ── */
        @media (max-width: 768px) {
          .footer-x-pad {
            padding-left: 24px;
            padding-right: 24px;
          }
 
          .footer-main-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 32px;
          }
 
          .footer-brand,
          .footer-links-col,
          .footer-contact {
            grid-column: 1 !important;
            padding-bottom: 0 !important;
          }
 
          .footer-brand-title {
            font-size: 28px;
          }
 
          .footer-brand-text {
            font-size: 14px;
            line-height: 20px;
          }
 
          .footer-col-heading {
            font-size: 13px;
          }
 
          .footer-link {
            font-size: 16px;
            line-height: 22px;
          }
 
          .footer-support-card {
            padding: 20px;
          }
 
          .footer-btn {
            padding: 14px;
            gap: 12px;
            font-size: 13px;
          }
 
          .footer-bottom {
            margin-top: 56px;
          }
 
          .footer-bottom-content {
            flex-direction: column;
            gap: 20px;
            padding: 24px;
            text-align: center;
          }
 
          .footer-copyright {
            font-size: 12px;
            line-height: 18px;
          }
 
          .footer-bottom-links {
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }
 
          .footer-bottom-link {
            font-size: 13px;
            line-height: 18px;
          }
        }
 
        /* ── Small mobile: 480px and below ── */
        @media (max-width: 480px) {
          .footer-x-pad {
            padding-left: 16px;
            padding-right: 16px;
          }
 
          .footer-main-grid {
            row-gap: 28px;
          }
 
          .footer-brand-title {
            font-size: 24px;
            line-height: 28px;
          }
 
          .footer-brand-text {
            font-size: 13px;
            line-height: 18px;
          }
 
          .footer-social {
            gap: 12px;
          }
 
          .footer-social-icon {
            width: 36px;
            height: 36px;
          }
 
          .footer-col-heading {
            font-size: 12px;
            letter-spacing: 0.8px;
          }
 
          .footer-links-list {
            gap: 12px;
          }
 
          .footer-link {
            font-size: 14px;
            line-height: 20px;
          }
 
          .footer-support-label {
            font-size: 11px;
          }
 
          .footer-btn {
            padding: 12px;
            font-size: 12px;
          }
 
          .footer-bottom-content {
            padding: 20px 16px;
            gap: 16px;
          }
 
          .footer-copyright {
            font-size: 11px;
          }
 
          .footer-bottom-link {
            font-size: 12px;
          }
        }
      `}</style>
 
      {/* ── Main grid ── */}
      <div className="footer-x-pad">
        <div className="footer-container">
          <div className="footer-main-grid">
 
            {/* ── Brand column ── */}
            <div className="footer-brand">
              <h2 className="footer-brand-title">My Yarns</h2>
 
              <p className="footer-brand-text">
                The complete social media management
                platform for African businesses. Empowering 
                creators and teams with localized tools for global impact.
              </p>
 
              {/* Social logos row */}
              <div className="footer-social">
                {SOCIAL_LOGOS.map((logo) => (
                  <div
                    key={logo.alt}
                    className="footer-social-icon"
                    title={logo.alt}
                  >
                    {logo.src
                      ? <Image src={logo.src} width={20} height={20} alt={logo.alt} />
                      : <span style={{ fontSize: 10, color: "#aaa" }}>{logo.alt[0]}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
 
            {/* ── Link columns ── */}
            {LINK_COLUMNS.map((col, i) => (
              <div
                key={col.heading}
                className="footer-links-col"
                style={{ gridColumn: `${i + 3} / span 1` }}
              >
                <p className="footer-col-heading">
                  {col.heading}
                </p>
 
                <div className="footer-links-list">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="footer-link"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
 
            {/* ── Contact column ── */}
            <div className="footer-contact">
              <p className="footer-col-heading">
                Need Support?
              </p>
 
              {/* White card */}
              <div className="footer-support-card">
                <p className="footer-support-label">
                  24/7 PRIORITY
                  ASSISTANCE
                </p>
 
                {/* Buttons */}
                <div className="footer-button-group">
 
                  {/* Chat button */}
                  <button
                    className="footer-btn footer-btn-chat"
                    onMouseEnter={() => setChatHov(true)}
                    onMouseLeave={() => setChatHov(false)}
                  >
                    <Image src={ChatIcon} width={15} height={15} alt="" />
                    <span>Chat Now</span>
                  </button>
 
                  {/* Call button */}
                  <button
                    className="footer-btn footer-btn-call"
                    onMouseEnter={() => setCallHov(true)}
                    onMouseLeave={() => setCallHov(false)}
                  >
                    <PhoneIcon color="#25D16F" size={15} />
                    <span>Request Call</span>
                  </button>
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </div>
 
      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
 
          {/* Copyright */}
          <p className="footer-copyright">
            © 2026 MyYarns. All rights reserved. Built for the African Digital Economy.
          </p>
 
          {/* Bottom links */}
          <div className="footer-bottom-links">
            {BOTTOM_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="footer-bottom-link"
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