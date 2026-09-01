"use client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";

import Image from "next/image";

import logoImage from "../../assets/myyarnsLogo.svg";



const links = [

  { label: "Features",    href: "/#features"    },

  { label: "Channels",    href: "/#channels"    },

  { label: "Pricing",     href: "/#pricing"     },

  { label: "Blog",        href: "/#blog"        },

  { label: "Developers",  href: "/#developers"  },

];



export default function Navbar() {

  const [open,      setOpen]      = useState(false);

  const [scrolled,  setScrolled]  = useState(false);

  const [active,    setActive]    = useState(null);  // hovered link label

  const [btnRipple, setBtnRipple] = useState(false); // CTA ripple



  /* Shrink navbar on scroll */

  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);

  }, []);



  /* Lock body scroll when mobile menu open */

  useEffect(() => {

    document.body.style.overflow = open ? "hidden" : "";

    return () => { document.body.style.overflow = ""; };

  }, [open]);



  const fireRipple = () => {

    setBtnRipple(true);

    setTimeout(() => setBtnRipple(false), 600);

  };



  return (

    <>

      <style>{`

        /* ── Transitions ── */

        .navbar {

          position: sticky;

          top: 0;

          z-index: 50;

          background: rgba(255,255,255,0.92);

          backdrop-filter: blur(16px);

          -webkit-backdrop-filter: blur(16px);

          border-bottom: 1px solid transparent;

          transition: border-color 0.3s, box-shadow 0.3s, padding 0.3s;

          will-change: transform;

        }

        .navbar.scrolled {

          border-color: rgba(187,203,188,0.25);

          box-shadow: 0 4px 24px rgba(0,0,0,0.06);

        }



        .nav-inner {

          display: flex;

          align-items: center;

          justify-content: space-between;

          transition: padding 0.3s;

          padding-top: 20px;

          padding-bottom: 20px;

        }

        .navbar.scrolled .nav-inner {

          padding-top: 12px;

          padding-bottom: 12px;

        }



        /* ── Logo ── */

        .logo-link { display: inline-flex; transition: transform 0.25s; }

        .logo-link:hover { transform: scale(1.05) rotate(-1.5deg); }

        .logo-link:active { transform: scale(0.96); }

        .logo-wrap {

          transition: filter 0.3s;

        }

        .logo-link:hover .logo-wrap {

          filter: drop-shadow(0 4px 12px rgba(37,209,111,0.40));

        }



        /* ── Nav links ── */

        .nav-link {

          position: relative;

          display: inline-flex;

          align-items: center;

          padding: 6px 14px;

          border-radius: 8px;

          font-family: var(--font-nunito), Nunito, sans-serif;

          font-size: 14px;

          font-weight: 600;

          color: rgba(60,74,63,0.80);

          text-decoration: none;

          transition: color 0.2s, background 0.2s, transform 0.2s;

          white-space: nowrap;

        }

        .nav-link::after {

          content: "";

          position: absolute;

          bottom: 3px;

          left: 14px;

          right: 14px;

          height: 2px;

          background: #25D16F;

          border-radius: 2px;

          transform: scaleX(0);

          transform-origin: center;

          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);

        }

        .nav-link:hover {

          color: #1A5C38;

          background: rgba(37,209,111,0.07);

          transform: translateY(-1px);

        }

        .nav-link:hover::after { transform: scaleX(1); }

        .nav-link:active { transform: translateY(0) scale(0.97); }



        /* Magnetic dot indicator */

        .nav-dot {

          position: absolute;

          top: 5px;

          right: 6px;

          width: 5px;

          height: 5px;

          border-radius: 9999px;

          background: #25D16F;

          opacity: 0;

          transform: scale(0);

          transition: opacity 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);

        }

        .nav-link:hover .nav-dot {

          opacity: 1;

          transform: scale(1);

        }



        /* ── Log In ── */

        .login-btn {

          position: relative;

          padding: 8px 18px;

          border-radius: 9999px;

          font-family: var(--font-nunito), Nunito, sans-serif;

          font-size: 14px;

          font-weight: 700;

          color: #3C4A3F;

          text-decoration: none;

          overflow: hidden;

          transition: color 0.2s, transform 0.2s;

        }

        .login-btn::before {

          content: "";

          position: absolute;

          inset: 0;

          border-radius: 9999px;

          background: rgba(60,74,63,0.07);

          transform: scale(0);

          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);

        }

        .login-btn:hover::before { transform: scale(1); }

        .login-btn:hover { color: #1A5C38; transform: translateY(-1px); }

        .login-btn:active { transform: scale(0.96); }



        /* ── Get Started CTA ── */

        .cta-btn {

          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          height: 44px;

          padding: 0 24px;

          border-radius: 9999px;

          border: none;

          background: #25D16F;

          color: white;

          font-family: var(--font-nunito), Nunito, sans-serif;

          font-size: 14px;

          font-weight: 700;

          text-decoration: none;

          overflow: hidden;

          cursor: pointer;

          box-shadow: 0 4px 14px rgba(37,209,111,0.35);

          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1),

                      box-shadow 0.22s ease,

                      background 0.2s;

        }

        /* Shimmer sweep */

        .cta-btn::before {

          content: "";

          position: absolute;

          inset: 0;

          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.40) 50%, transparent 75%);

          transform: translateX(-100%);

          transition: transform 0.65s ease;

        }

        .cta-btn:hover::before { transform: translateX(100%); }

        .cta-btn:hover {

          transform: translateY(-3px) scale(1.02);

          box-shadow: 0 10px 28px rgba(37,209,111,0.42);

          background: #1fc262;

        }

        .cta-btn:active { transform: scale(0.97) translateY(0); }

        /* Ripple */

        .cta-btn .ripple {

          position: absolute;

          inset: 0;

          border-radius: 9999px;

          background: rgba(255,255,255,0.30);

          transform: scale(0);

          opacity: 1;

          animation: none;

        }

        .cta-btn .ripple.go {

          animation: rippleGo 0.55s ease-out forwards;

        }

        @keyframes rippleGo {

          to { transform: scale(2.4); opacity: 0; }

        }



        /* Arrow icon in CTA */

        .cta-arrow {

          display: inline-flex;

          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);

        }

        .cta-btn:hover .cta-arrow { transform: translateX(3px); }



        /* ── Mobile hamburger ── */

        .ham-bar {

          display: block;

          width: 20px;

          height: 1.5px;

          background: #191C1E;

          border-radius: 2px;

          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s;

        }



        /* ── Mobile drawer ── */

        .mobile-drawer {

          position: fixed;

          inset: 0;

          top: 0;

          z-index: 49;

          background: white;

          display: flex;

          flex-direction: column;

          padding: 100px 24px 40px;

          gap: 8px;

          animation: drawerIn 0.32s cubic-bezier(0.34,1.56,0.64,1) forwards;

        }

        @keyframes drawerIn {

          from { opacity: 0; transform: translateY(-16px); }

          to   { opacity: 1; transform: translateY(0); }

        }

        .mobile-nav-link {

          display: block;

          padding: 14px 16px;

          border-radius: 12px;

          font-family: var(--font-nunito), Nunito, sans-serif;

          font-size: 18px;

          font-weight: 600;

          color: #191C1E;

          text-decoration: none;

          border: 1px solid transparent;

          transition: background 0.2s, border-color 0.2s, transform 0.2s, color 0.2s;

        }

        .mobile-nav-link:hover {

          background: rgba(37,209,111,0.07);

          border-color: rgba(37,209,111,0.20);

          color: #1A5C38;

          transform: translateX(4px);

        }

        .mobile-divider {

          height: 1px;

          background: rgba(187,203,188,0.30);

          margin: 12px 0;

        }

        .mobile-cta {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding: 16px;

          border-radius: 14px;

          background: #25D16F;

          color: white;

          font-family: var(--font-nunito), Nunito, sans-serif;

          font-size: 16px;

          font-weight: 700;

          text-decoration: none;

          box-shadow: 0 4px 16px rgba(37,209,111,0.35);

          transition: transform 0.2s, box-shadow 0.2s;

        }

        .mobile-cta:active { transform: scale(0.97); }

        .mobile-login {

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 14px;

          border-radius: 14px;

          border: 1.5px solid rgba(60,74,63,0.25);

          color: #3C4A3F;

          font-family: var(--font-nunito), Nunito, sans-serif;

          font-size: 16px;

          font-weight: 600;

          text-decoration: none;

          transition: border-color 0.2s, color 0.2s;

        }

        .mobile-login:hover {

          border-color: #25D16F;

          color: #1A5C38;

        }

      `}</style>



      <nav className={`navbar page-x-pad${scrolled ? " scrolled" : ""}`}>

        <div className="page-container nav-inner">



          {/* Logo */}

          <Link href="/" className="logo-link">

            <div className="logo-wrap">

              <Image src={logoImage} alt="MyYarns" width={120} height={40} priority />

            </div>

          </Link>



          {/* Desktop center links */}

          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="nav-link"
                  onMouseEnter={() => setActive(l.label)}
                  onMouseLeave={() => setActive(null)}
                >
                  <span className="nav-dot" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>



          {/* Desktop right actions */}

          <div className="hidden lg:flex items-center gap-2">

            <Link href="/signin" className="login-btn">

              Log In

            </Link>



            <Link

              href="/signup"

              className="cta-btn"

              onClick={fireRipple}

            >

              <span className={`ripple${btnRipple ? " go" : ""}`} />

              Get Started

              <span className="cta-arrow">

                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"

                  stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

                  <line x1="5" y1="12" x2="19" y2="12"/>

                  <polyline points="12 5 19 12 12 19"/>

                </svg>

              </span>

            </Link>

          </div>



          {/* Hamburger */}

          <button

            className="lg:hidden flex flex-col gap-[5px] p-2"

            onClick={() => setOpen(!open)}

            aria-label={open ? "Close menu" : "Open menu"}

            style={{ background: "none", border: "none", cursor: "pointer" }}

          >

            <span className="ham-bar" style={{ transform: open ? "rotate(45deg) translate(4.5px, 4.5px)" : "" }} />

            <span className="ham-bar" style={{ opacity: open ? 0 : 1 }} />

            <span className="ham-bar" style={{ transform: open ? "rotate(-45deg) translate(4.5px, -4.5px)" : "" }} />

          </button>

        </div>

      </nav>



      {/* Mobile drawer */}

      {open && (

        <div className="mobile-drawer lg:hidden">

          {links.map((l) => (

            <Link key={l.label} href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>

              {l.label}

            </Link>

          ))}

          <div className="mobile-divider" />

          <Link href="/signin" className="mobile-login" onClick={() => setOpen(false)}>

            Log In

          </Link>

          <Link href="/signup" className="mobile-cta" onClick={() => setOpen(false)}>

            Get Started

            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"

              stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

              <line x1="5" y1="12" x2="19" y2="12"/>

              <polyline points="12 5 19 12 12 19"/>

            </svg>

          </Link>

        </div>

      )}

    </>

  );

}