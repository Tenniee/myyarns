"use client";
 
import { useState } from "react";
import Link from "next/link";
 
// ═══════════════════════════════════════════════════════════════════
// SWAP POINTS
// ═══════════════════════════════════════════════════════════════════
const LOGO_TEXT = "MyYarns";
const COMPANY_SIZES = ["Just me", "2–10", "11–50", "51–200", "200+"];
const TIME_SLOTS = ["Morning", "Afternoon", "Evening", "No preference"];
const ON_SUBMIT = async (data) => {
  // ← wire up your real request-a-call submission here
  console.log("request-a-call", data);
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
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function CheckCircle({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// VALUE POINTS (left panel)
// ═══════════════════════════════════════════════════════════════════
const VALUE_POINTS = [
  "See a walkthrough tailored to your platforms and team size",
  "Get a straight answer on pricing for your use case",
  "Ask about migrating your existing content calendar",
];
 
function Field({ label, children, hint }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
      {hint && (
        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12.5, color: "#8A9A8C" }}>
          {hint}
        </span>
      )}
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
  boxSizing: "border-box",
});
 
export default function RequestCall() {
  const [form, setForm] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    company: "",
    companySize: "",
    preferredTime: "",
    message: "",
    consent: false,
  });
  const [focused, setFocused] = useState(null);
  const [btnHov, setBtnHov] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
 
  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target ? e.target.value : e }));
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.fullName.trim() || !form.workEmail.trim() || !form.company.trim()) {
      setError("Name, work email and company are required.");
      return;
    }
    if (!form.consent) {
      setError("Please confirm we can contact you about your request.");
      return;
    }
    setSubmitting(true);
    try {
      await ON_SUBMIT(form);
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };
 
  return (
    <>
      <style>{`
        @keyframes rcFloatA { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes rcFloatB { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        .rc-fa { animation: rcFloatA 5s ease-in-out infinite; }
        .rc-fb { animation: rcFloatB 6s ease-in-out 0.6s infinite; }
 
        .rc-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          background: white;
        }
        .rc-brand-panel {
          flex: 0 0 42%;
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #00D17E 0%, #006D3F 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 56px;
        }
        .rc-form-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          overflow-y: auto;
        }
        .rc-form-inner {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .rc-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .rc-pill-option {
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 13.5px;
          padding: 10px 14px;
          border-radius: 9999px;
          border: 1px solid rgba(60,74,63,0.18);
          background: white;
          color: #3C4A3F;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s, color 0.15s;
        }
        .rc-pill-option.active {
          border-color: #25D16F;
          background: rgba(37,209,111,0.10);
          color: #1A5C38;
        }
        @media (max-width: 900px) {
          .rc-brand-panel { display: none; }
          .rc-form-panel { padding: 32px 20px; }
        }
        @media (max-width: 480px) {
          .rc-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
 
      <div className="rc-shell">
        {/* ══════════════ LEFT — brand panel ══════════════ */}
        <div className="rc-brand-panel">
          <div
            aria-hidden
            className="absolute pointer-events-none rounded-full"
            style={{ width: 480, height: 480, top: -180, right: -160, background: "rgba(255,255,255,0.08)", filter: "blur(80px)" }}
          />
 
          <Link href="/" style={{ position: "relative", zIndex: 1, textDecoration: "none" }}>
            <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: 22,
                color: "white",
                position: "relative",
                zIndex: 1,
            }}>
                {LOGO_TEXT}
            </span>
          </Link>
 
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            <h1 style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.15,
              letterSpacing: "-1px", color: "white", margin: 0, maxWidth: 380,
            }}>
              Talk to us before you commit to anything.
            </h1>
            <p style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: 16,
              lineHeight: "25px", color: "rgba(255,255,255,0.85)", margin: 0, maxWidth: 360,
            }}>
              15 minutes with our team, no pressure. Tell us what you're
              trying to solve and we'll show you exactly how MyYarns fits.
            </p>
 
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 4 }}>
              {VALUE_POINTS.map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "9999px", flexShrink: 0, marginTop: 2,
                    background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <CheckIcon />
                  </span>
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14.5, lineHeight: "21px", color: "rgba(255,255,255,0.92)" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
 
          <div style={{ height: 70, position: "relative", zIndex: 1 }}>
            <div className="absolute rc-fa" style={{
              top: 0, left: 0, borderRadius: 16, border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.10)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              padding: "14px 18px", boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
            }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", margin: "0 0 6px" }}>
                Avg. response time
              </p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 20, color: "white", margin: 0 }}>
                Under 4 hours
              </p>
            </div>
          </div>
        </div>
 
        {/* ══════════════ RIGHT — form ══════════════ */}
        <div className="rc-form-panel">
          {done ? (
            <div style={{ maxWidth: 420, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
              <div style={{
                width: 72, height: 72, borderRadius: "9999px",
                background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 20px 30px -10px rgba(0,109,63,0.35)",
              }}>
                <CheckCircle />
              </div>
              <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 26, color: "#0F0D0A", margin: 0 }}>
                Request received
              </h2>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, color: "#3C4A3F", margin: 0 }}>
                Someone from our team will reach out at {form.workEmail || "your email"} within a few hours to find a time that works.
              </p>
            </div>
          ) : (
            <form className="rc-form-inner" onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 30, letterSpacing: "-0.6px", color: "#0F0D0A", margin: 0 }}>
                  Request a call
                </h2>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, color: "#3C4A3F", margin: 0 }}>
                  Fill in your details and we'll be in touch.
                </p>
              </div>
 
              {error && (
                <div style={{
                  fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "#B3261E",
                  background: "rgba(179,38,30,0.06)", border: "1px solid rgba(179,38,30,0.15)",
                  borderRadius: 10, padding: "10px 14px",
                }}>
                  {error}
                </div>
              )}
 
              <div className="rc-row-2">
                <Field label="Full name">
                  <input
                    value={form.fullName}
                    onChange={update("fullName")}
                    onFocus={() => setFocused("fullName")}
                    onBlur={() => setFocused(null)}
                    placeholder="Ada Obi"
                    style={inputStyle(focused === "fullName")}
                  />
                </Field>
                <Field label="Phone number" hint="Optional">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    placeholder="+234 800 000 0000"
                    style={inputStyle(focused === "phone")}
                  />
                </Field>
              </div>
 
              <Field label="Work email">
                <input
                  type="email"
                  value={form.workEmail}
                  onChange={update("workEmail")}
                  onFocus={() => setFocused("workEmail")}
                  onBlur={() => setFocused(null)}
                  placeholder="you@company.com"
                  style={inputStyle(focused === "workEmail")}
                />
              </Field>
 
              <Field label="Company name">
                <input
                  value={form.company}
                  onChange={update("company")}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  placeholder="Your business name"
                  style={inputStyle(focused === "company")}
                />
              </Field>
 
              <Field label="Company size">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {COMPANY_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`rc-pill-option${form.companySize === size ? " active" : ""}`}
                      onClick={() => setForm((f) => ({ ...f, companySize: size }))}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </Field>
 
              <Field label="Best time to reach you" hint="Optional">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`rc-pill-option${form.preferredTime === slot ? " active" : ""}`}
                      onClick={() => setForm((f) => ({ ...f, preferredTime: slot }))}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </Field>
 
              <Field label="What are you hoping to solve?" hint="Optional">
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us a bit about your team and channels…"
                  rows={4}
                  style={{ ...inputStyle(focused === "message"), height: "auto", padding: 14, resize: "vertical", fontFamily: "'Nunito', sans-serif" }}
                />
              </Field>
 
              <button
                type="button"
                onClick={() => setForm((f) => ({ ...f, consent: !f.consent }))}
                style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
              >
                <span style={{
                  width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 2,
                  border: form.consent ? "none" : "1.5px solid rgba(60,74,63,0.3)",
                  background: form.consent ? "#25D16F" : "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.15s",
                }}>
                  {form.consent && <CheckIcon />}
                </span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13.5, lineHeight: "20px", color: "#3C4A3F" }}>
                  I agree to be contacted by MyYarns about this request.
                </span>
              </button>
 
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
                {submitting ? "Sending…" : "Request my call"}
                {!submitting && <ArrowRight />}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}