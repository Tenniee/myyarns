// components/Navbar.tsx
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
        <Link href="/" className="flex items-center gap-2">
          <div>
            <Image src={logoImage} alt="Inbox Logo" width={120} height={120} />
          </div>
        </Link>

        {/* Center links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={`/${l.toLowerCase()}`}
                className="text-sm px-3 py-1.5 rounded-md transition-colors font-[var(--font-manrope)] font-bold"
                style={{ color: "#3C4A3FCC", opacity: '0.9' }}
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            className="text-sm px-[18px] py-2 bg-transparent transition-colors hover:bg-[#f0f5f2] font-bold"
            style={{ color: "#3C4A3F", cursor: 'pointer' }}
          >
            Log In
          </button>
          <button
            className="
                text-sm text-white
                w-[155.7px] h-[45px]
                rounded-[9999px]

                translate-y-0
                transition-transform duration-200 ease-in-out

                hover:-translate-y-[3px]
                active:translate-y-[2px]

                font-bold
                font-[var(--font-manrope)]

                shadow-[0px_8px_10px_-8px_#00D17E33,0px_20px_25px_-5px_#00D17E33]
            "
            style={{
                background: "#25D16F",
                color: "#ffffff", 
                cursor: 'pointer'
            }}
          >
            Get Started
          </button>
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
                  className="block text-[15px] text-gray-900 py-2.5"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button
              className="w-full text-[15px] rounded-[7px] px-4 py-2.5 bg-transparent"
              style={{ color: "#2F4E3C", border: "1px solid #2F4E3C" }}
            >
              Log in
            </button>
            <button
              className="w-full text-[15px] text-white rounded-[7px] px-4 py-2.5"
              style={{ background: "#25D16F", boxShadow: "0 3px 0 #9EF3DA" }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}