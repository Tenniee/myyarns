"use client";
 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcon from '../../assets/signin-blob.svg';
import SocialIcon2 from '../../assets/Sign-in-yt.svg';
import SocialIcon3 from '../../assets/signin-tt.svg';
import MainImage from '../../assets/Main-Card(1).svg';
import TrustLogo from '../../assets/signup-trust.svg';
 
// ═══════════════════════════════════════════════════════════════════
// SWAP POINTS
// ═══════════════════════════════════════════════════════════════════
const LOGO_TEXT = "MyYarns";
const SIGNUP_HREF = "/signup";
const FORGOT_HREF = "/forgot-password";
const TERMS_HREF = "/terms";
const PRIVACY_HREF = "/privacy";
const SHOWCASE_IMAGE = MainImage; // ← swap for a real product screenshot
const TRUST_LOGO_IMAGE = TrustLogo; // ← swap for a real avatar/logo strip
const ON_SUBMIT = async ({ email, password, remember }) => {
  // ← wire up your real signin call here
  console.log("signin", { email, password, remember });
};
 
// ═══════════════════════════════════════════════════════════════════
// FLOATING BADGE POSITIONS
// Each badge is positioned absolutely against the (unrotated) wrapper
// that sits behind the rotated showcase image. Tweak `bottom` / `right`
// below to move a badge — increasing `bottom` moves it up, increasing
// `right` moves it further left.
// ═══════════════════════════════════════════════════════════════════
const FLOAT_BADGES = [
  { id: "heart", bottom: -45, right: -34, icon: "heart" },
  { id: "chat", bottom: 185, right: 300, icon: "chat" },
  { id: "star", bottom: 195, right: -27, icon: "star" },
];
 
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
 
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
 
function BadgeIcon({ type }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
  if (type === "heart") {
    return (
      <Image src={SocialIcon} alt="Heart icon" width={70} height={70} />
    );
  }
  if (type === "chat") {
    return (
      <Image src={SocialIcon2} alt="Chat icon" width={70} height={70} />
    );
  }
  return (
    <Image src={SocialIcon3} alt="Star icon" width={70} height={70} />
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// SMALL BUILDING BLOCKS
// ═══════════════════════════════════════════════════════════════════
function FloatBadgeSm({ bottom, right, icon }) {
  return (
    <div
      className="auth-fb"
      style={{
        position: "absolute",
        bottom,
        right,
        width: 100,
        height: 100,
        borderRadius: 12,
        //border: "1px solid rgba(255,255,255,0.18)",
        //background: "rgba(255,255,255,0.14)",
        //backdropFilter: "blur(12px)",
        //WebkitBackdropFilter: "blur(12px)",
        //boxShadow: "0 12px 24px rgba(0,0,0,0.20)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
        paddingBottom: 9,
      }}
    >
      <BadgeIcon type={icon} />
    </div>
  );
}
 
function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{
        fontFamily: "'Nunito', sans-serif",
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
  fontFamily: "'Nunito', sans-serif",
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
 
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [focused, setFocused] = useState(null);
  const [btnHov, setBtnHov] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      setError("Enter your email and password to continue.");
      return;
    }
    setSubmitting(true);
    try {
      await ON_SUBMIT({ email, password, remember });
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
          height: 100vh;
          display: flex;
          flex-direction: row;
          background: white;
          overflow: hidden;
        }
        .auth-brand-panel {
          flex: 0 0 44%;
          position: relative;
          overflow: hidden;
          background: radial-gradient(120% 120% at 20% 0%, #135B36 0%, #06301D 100%);
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          padding: 4vh 3.5vw 3vh;
        }
        .auth-brand-top {
          flex: 0 1 38%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2vh;
          min-height: 0;
        }
        .auth-brand-image {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 0;
          overflow: hidden;
        }
        .auth-brand-trust {
          flex: 0 0 auto;
          margin-top: 2vh;
          margin-bottom: 1vh;
        }
        .auth-form-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          background: #FAFAF4;
          height: 100%;
          box-sizing: border-box;
          overflow-y: auto;
        }
        .auth-form-inner {
          width: 448px;
          max-width: 448px;
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
            style={{ position: "absolute", width: 500, height: 500, bottom: -200, left: -160, background: "rgba(255,255,255,0.08)", filter: "blur(80px)" }}
          />
 
          {/* Top ~38%: logo + header + subtext */}
          <div className="auth-brand-top" style={{ position: "relative", zIndex: 1 }}>
            <Link href="/" style={{ textDecoration: "none", marginBottom: "1vh" }}>
              <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "white",
              }}>
                  {LOGO_TEXT}
              </span>
            </Link>
 
            <h1 style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(24px, 2.6vw, 34px)",
              lineHeight: 1.15,
              letterSpacing: "-0.8px",
              color: "white",
              margin: 0,
              maxWidth: 420,
            }}>
              Welcome back!
              <br />
              Let's get you back to your
              <br />
              <span style={{ color: "#00A859" }}>dashboard.</span>
            </h1>
 
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgba(255,255,255,0.85)",
              margin: 0,
              maxWidth: 380,
            }}>
              Pick up your scheduled posts, automations and analytics right where you left off.
            </p>
          </div>
 
          {/* Middle: showcase image + floating badges — fills remaining space, never overflows */}
          <div className="auth-brand-image" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative", height: "88%", maxHeight: 300, aspectRatio: "4 / 3" }}>
              <div
                className="auth-fa"
                style={{
                  width: "110%",
                  height: "120%",
                  borderRadius: 16,
                  //border: "1px solid rgba(255,255,255,0.18)",
                  //background: "rgba(255,255,255,0.06)",
                  padding: 18,
                  display: "flex",
                  flexDirection: "column",
                  transform: "rotate(3deg)",
                  //boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                  boxSizing: "border-box",
                }}
              >
                <Image
                  src={SHOWCASE_IMAGE}
                  alt="Dashboard preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }}
                  width={100}
                  height={100}
                />
              </div>
 
              {/* Floating badges — see FLOAT_BADGES above to reposition */}
              {FLOAT_BADGES.map((b) => (
                <FloatBadgeSm key={b.id} bottom={b.bottom} right={b.right} icon={b.icon} />
              ))}
            </div>
          </div>
 
          {/* Bottom: trust bar, with padding beneath it (auth-brand-panel bottom padding) */}
          <div className="auth-brand-trust" style={{
            position: "relative",
            zIndex: 1,
            width: 560,
            maxWidth: "100%",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "14px 18px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 3.84,
            boxSizing: "border-box",
          }}>
            <Image
              src={TRUST_LOGO_IMAGE}
              alt="Teams using MyYarns"
              style={{ width: 96, height: 36, objectFit: "contain", flexShrink: 0 }}
            />
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 14,
              lineHeight: "20px",
              color: "white",
              margin: 0,
              display: "flex",
              alignItems: "center",
            }}>
              <span style={{ fontWeight: 800 }}>2,500+&nbsp;teams&nbsp;</span>
              <span style={{ fontWeight: 400 }}>trust MyYarns to grow their audience</span>
            </p>
          </div>
        </div>
 
        {/* ══════════════ RIGHT — form ══════════════ */}
        <div className="auth-form-panel">
          <form className="auth-form-inner" onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
              <h2 style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: 32,
                letterSpacing: "-0.6px",
                color: "#0F0D0A",
                margin: 0,
              }}>
                Sign in
              </h2>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, color: "#3C4A3F", margin: 0 }}>
                Enter your details to access your dashboard
              </p>
            </div>
 
            {error && (
              <div style={{
                fontFamily: "'Nunito', sans-serif",
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
                  placeholder="Your password"
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
 
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button
                type="button"
                onClick={() => setRemember((r) => !r)}
                style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                <span style={{
                  width: 18, height: 18, borderRadius: 5,
                  border: remember ? "none" : "1.5px solid rgba(60,74,63,0.3)",
                  background: remember ? "#25D16F" : "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.15s",
                }}>
                  {remember && <CheckIcon />}
                </span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "#3C4A3F" }}>Remember me</span>
              </button>
 
              <a href={FORGOT_HREF} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#25D16F", textDecoration: "none" }}>
                Forgot password?
              </a>
            </div>
 
            <button
              type="submit"
              disabled={submitting}
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16,
                color: "white", background: submitting ? "#8fdcb4" : "#25D16F",
                borderRadius: 9999, height: 54, border: "none",
                boxShadow: "0 20px 30px -10px rgba(0,109,63,0.35)",
                cursor: submitting ? "default" : "pointer",
                transform: btnHov && !submitting ? "scale(1.02)" : "scale(1)",
                transition: "transform 0.15s, background 0.15s",
              }}
            >
              {submitting ? "Signing in…" : "Sign in"}
              {!submitting && <ArrowRight />}
            </button>
 
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "#3C4A3F", textAlign: "center", margin: 0 }}>
              Don't have an account?{" "}
              <a href={SIGNUP_HREF} style={{ color: "#25D16F", fontWeight: 700, textDecoration: "none" }}>
                Create one
              </a>
            </p>
 
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 12,
              lineHeight: "18px",
              color: "#8A948C",
              textAlign: "center",
              margin: 0,
            }}>
              By clicking "Create account", you agree to our{" "}
              <a href={TERMS_HREF} style={{ color: "#8A948C", textDecoration: "underline" }}>Terms of Service</a>{" "}
              and{" "}
              <a href={PRIVACY_HREF} style={{ color: "#8A948C", textDecoration: "underline" }}>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}