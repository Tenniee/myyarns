"use client";
 
import { useState } from "react";
import Link from "next/link";
 
// ═══════════════════════════════════════════════════════════════════
// SWAP POINTS — replace with your real assets/logic, nothing else
// needs to change
// ═══════════════════════════════════════════════════════════════════
const LOGO_TEXT = "MyYarns";
const SIGNIN_HREF = "/signin";
const ON_SUBMIT = async ({ fullName, email, password }) => {
  // ← wire up your real signup call here
  console.log("signup", { fullName, email, password });
};
 
// ═══════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════
function ArrowRight({ color = "white", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
 
function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3C4A3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3C4A3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.62 21.62 0 0 1 5.06-6.06M9.9 4.24A10.4 10.4 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.61 3.94M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING BADGE (reused pattern from Hero cards)
// ═══════════════════════════════════════════════════════════════════
function FloatBadge({ style, animClass, children }) {
  return (
    <div
      className={`absolute ${animClass}`}
      style={{
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: 16,
        boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// FORM FIELD
// ═══════════════════════════════════════════════════════════════════
function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: "0.6px",
        textTransform: "uppercase",
        color: "#3C4A3F",
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}
 
const inputStyle = (focused) => ({
  fontFamily: "'Sora', sans-serif",
  fontSize: 16,
  color: "#0F0D0A",
  width: "100%",
  height: 52,
  borderRadius: 12,
  border: focused ? "1.5px solid #25D16F" : "1px solid rgba(60,74,63,0.18)",
  background: "white",
  padding: "0 16px",
  outline: "none",
  boxShadow: focused ? "0 0 0 4px rgba(37,209,111,0.12)" : "none",
  transition: "box-shadow 0.15s, border-color 0.15s",
});
 
export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [focused, setFocused] = useState(null);
  const [btnHov, setBtnHov] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!fullName.trim() || !email.trim() || password.length < 8) {
      setError("Fill in every field — password needs at least 8 characters.");
      return;
    }
    setSubmitting(true);
    try {
      await ON_SUBMIT({ fullName, email, password });
    } finally {
      setSubmitting(false);
    }
  };
 
  return (
    <>
      <style>{`
        @keyframes authFloatA { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes authFloatB { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        .auth-fa { animation: authFloatA 5s ease-in-out infinite; }
        .auth-fb { animation: authFloatB 6s ease-in-out 0.6s infinite; }
 
        .auth-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          background: white;
        }
        .auth-brand-panel {
          flex: 0 0 44%;
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #00D17E 0%, #006D3F 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 56px;
        }
        .auth-form-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
        }
        .auth-form-inner {
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        @media (max-width: 900px) {
          .auth-brand-panel { display: none; }
          .auth-form-panel { padding: 32px 20px; }
        }
      `}</style>
 
      <div className="auth-shell">
        {/* ══════════════ LEFT — brand panel ══════════════ */}
        <div className="auth-brand-panel">
          <div
            aria-hidden
            className="absolute pointer-events-none rounded-full"
            style={{ width: 500, height: 500, top: -180, right: -160, background: "rgba(255,255,255,0.08)", filter: "blur(80px)" }}
          />
 
          <Link href="/" style={{ position: "relative", zIndex: 1, textDecoration: "none" }}>
            <span style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: 22,
                color: "white",
                position: "relative",
                zIndex: 1,
            }}>
                {LOGO_TEXT}
            </span>
          </Link>
 
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              color: "white",
              margin: 0,
              maxWidth: 380,
            }}>
              Grow every channel from one dashboard.
            </h1>
            <p style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 400,
              fontSize: 17,
              lineHeight: "26px",
              color: "rgba(255,255,255,0.85)",
              margin: 0,
              maxWidth: 360,
            }}>
              Join 2,500+ teams scheduling, analyzing and engaging their
              audience across every platform that matters.
            </p>
          </div>
 
          <div style={{ height: 140, position: "relative", zIndex: 1 }}>
            <FloatBadge animClass="auth-fa" style={{ top: 0, left: 0, width: 190 }}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", margin: "0 0 6px" }}>Growth Rate</p>
              <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 22, color: "white", margin: 0 }}>+24.8%</p>
            </FloatBadge>
            <FloatBadge animClass="auth-fb" style={{ top: 20, left: 210, width: 160 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ width: "100%", height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.25)" }} />
                <div style={{ width: "70%", height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.18)" }} />
                <div style={{ width: "85%", height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.18)" }} />
              </div>
            </FloatBadge>
          </div>
        </div>
 
        {/* ══════════════ RIGHT — form ══════════════ */}
        <div className="auth-form-panel">
          <form className="auth-form-inner" onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h2 style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: 32,
                letterSpacing: "-0.6px",
                color: "#0F0D0A",
                margin: 0,
              }}>
                Create your account
              </h2>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, color: "#3C4A3F", margin: 0 }}>
                Start managing every channel in one place.
              </p>
            </div>
 
            {error && (
              <div style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 14,
                color: "#B3261E",
                background: "rgba(179,38,30,0.06)",
                border: "1px solid rgba(179,38,30,0.15)",
                borderRadius: 10,
                padding: "10px 14px",
              }}>
                {error}
              </div>
            )}
 
            <Field label="Full name">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                placeholder="Ada Obi"
                style={inputStyle(focused === "name")}
              />
            </Field>
 
            <Field label="Email address">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                placeholder="you@company.com"
                style={inputStyle(focused === "email")}
              />
            </Field>
 
            <Field label="Password">
              <div style={{ position: "relative" }}>
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  placeholder="At least 8 characters"
                  style={{ ...inputStyle(focused === "password"), paddingRight: 46 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  style={{
                    position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", padding: 4,
                    display: "flex", alignItems: "center",
                  }}
                >
                  <EyeIcon open={showPw} />
                </button>
              </div>
            </Field>
 
            <button
              type="submit"
              disabled={submitting}
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              className="group"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16,
                color: "white", background: submitting ? "#8fdcb4" : "#25D16F",
                borderRadius: 9999, height: 54, border: "none",
                boxShadow: "0 20px 30px -10px rgba(0,109,63,0.35)",
                cursor: submitting ? "default" : "pointer",
                transform: btnHov && !submitting ? "scale(1.02)" : "scale(1)",
                transition: "transform 0.15s, background 0.15s",
                marginTop: 4,
              }}
            >
              {submitting ? "Creating account…" : "Create account"}
              {!submitting && <ArrowRight />}
            </button>
 
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#3C4A3F", textAlign: "center", margin: 0 }}>
              Already have an account?{" "}
              <a href={SIGNIN_HREF} style={{ color: "#25D16F", fontWeight: 700, textDecoration: "none" }}>
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}