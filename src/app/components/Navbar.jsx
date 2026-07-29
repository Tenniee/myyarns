// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../assets/myyarnsLogo.svg";

const links = ["Features", "Channels", "Pricing", "Blog", "Developers"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white page-x-pad">
      <div className="page-container flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="logo-link flex items-center gap-2">
          <div className="logo-wrap">
            <Image src={logoImage} alt="Inbox Logo" width={120} height={120} />
          </div>
        </Link>

        {/* Center links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={`/${l.toLowerCase()}`}
                className="nav-link text-sm px-3 py-1.5 rounded-md font-[var(--font-manrope)] font-bold"
                style={{ color: "#3C4A3FCC", opacity: "0.9" }}
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/signin"
            className="login-btn text-sm px-[18px] py-2 bg-transparent font-bold"
            style={{ color: "#3C4A3F", cursor: "pointer" }}
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="
                signup-btn
                inline-flex items-center justify-center
                text-sm text-white
                w-[155.7px] h-[45px]
                rounded-[9999px]
                font-bold
                font-[var(--font-manrope)]
            "
            style={{
              background: "#25D16F",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1 p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block w-5 h-[1.5px] bg-gray-900 rounded transition-transform ${open ? "rotate-45 translate-y-[5.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-gray-900 rounded transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-gray-900 rounded transition-transform ${open ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 pb-5">
          <ul className="list-none mb-4">
            {links.map((l) => (
              <li key={l} className="border-b border-gray-100 last:border-none">
                <Link
                  href={`/${l.toLowerCase()}`}
                  className="nav-link-mobile block text-[15px] text-gray-900 py-2.5"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="block w-full text-center text-[15px] rounded-[7px] px-4 py-2.5 bg-transparent"
              style={{ color: "#2F4E3C", border: "1px solid #2F4E3C" }}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="block w-full text-center text-[15px] text-white rounded-[7px] px-4 py-2.5"
              style={{ background: "#25D16F", boxShadow: "0 3px 0 #9EF3DA" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ---------- Logo ---------- */
        .logo-link {
          transition: transform 0.25s ease-out;
        }

        .logo-wrap {
          transition: transform 0.35s ease-out, filter 0.35s ease-out;
        }

        .logo-link:hover .logo-wrap {
          transform: scale(1.06) rotate(-2deg);
          filter: drop-shadow(0 4px 10px rgba(37, 209, 111, 0.35));
        }

        .logo-link:active .logo-wrap {
          transform: scale(0.97) rotate(0deg);
        }

        /* ---------- Center nav links (desktop) ---------- */
        .nav-link {
          position: relative;
          display: inline-block;
          transition: color 0.25s ease-out, transform 0.25s ease-out;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 2px;
          height: 2px;
          background: #25d16f;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease-out;
        }

        .nav-link:hover {
          color: #25d16f !important;
          transform: translateY(-1px);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        /* ---------- Mobile nav links ---------- */
        .nav-link-mobile {
          transition: color 0.2s ease-out, padding-left 0.2s ease-out;
        }

        .nav-link-mobile:hover,
        .nav-link-mobile:active {
          color: #25d16f;
          padding-left: 6px;
        }

        /* ---------- Log In button ---------- */
        .login-btn {
          position: relative;
          overflow: hidden;
          display: inline-block;
          border-radius: 9999px;
          z-index: 0;
          transition: color 0.25s ease-out;
        }

        .login-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(60, 74, 63, 0.07);
          border-radius: 9999px;
          transform: scale(0);
          transition: transform 0.3s ease-out;
          z-index: -1;
        }

        .login-btn:hover::before {
          transform: scale(1);
        }

        /* ---------- Get Started button ---------- */
        .signup-btn {
          position: relative;
          overflow: hidden;
          transform: translateY(0);
          box-shadow: 0px 8px 10px -8px rgba(0, 209, 126, 0.2),
            0px 20px 25px -5px rgba(0, 209, 126, 0.2);
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .signup-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 80%
          );
          transition: transform 0.7s ease-out;
        }

        .signup-btn:hover::before {
          transform: translateX(100%);
        }

        .signup-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0px 10px 18px -6px rgba(0, 209, 126, 0.4),
            0px 24px 32px -8px rgba(0, 209, 126, 0.3);
        }

        .signup-btn:active {
          transform: translateY(1px) scale(0.98);
        }
      `}</style>
    </nav>
  );
}