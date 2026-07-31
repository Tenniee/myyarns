"use client";
 
import { useEffect, useRef, useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// SWAP POINTS
// ═══════════════════════════════════════════════════════════════════
const ASSISTANT_NAME = "Yarn Assistant";
const WELCOME_MESSAGE = "Hi! Need a hand with captions, scheduling, or your analytics?";
 
// ← replace with your real send call. Return the assistant's reply text.
async function sendMessage(history, text) {
  await new Promise((r) => setTimeout(r, 900));
  return "Thanks for the message! Wire this widget up to your real API in `sendMessage`.";
}
 
// ═══════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════
function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
function SparkleIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M12 2l1.8 5.6L19.4 9.4 13.8 11.2 12 17l-1.8-5.8L4.6 9.4l5.6-1.8L12 2z" />
    </svg>
  );
}
function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "2px" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: 5, height: 5, borderRadius: "9999px", background: "#25D16F",
          animation: `widgetDot 1.2s ease-in-out ${i * 0.15}s infinite`,
        }} />
      ))}
    </div>
  );
}
 
function Bubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", gap: 8 }}>
      {!isUser && (
        <div style={{
          width: 26, height: 26, borderRadius: "9999px", flexShrink: 0,
          background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <SparkleIcon size={12} />
        </div>
      )}
      <div style={{
        maxWidth: "78%",
        fontFamily: "'Nunito', sans-serif",
        fontSize: 14,
        lineHeight: "21px",
        padding: "10px 14px",
        borderRadius: isUser ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
        background: isUser ? "#25D16F" : "white",
        color: isUser ? "white" : "#191C1E",
        border: isUser ? "none" : "1px solid rgba(187,203,188,0.35)",
        whiteSpace: "pre-wrap",
      }}>
        {text}
      </div>
    </div>
  );
}
 
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState(false);
  const [launcherHov, setLauncherHov] = useState(false);
  const scrollRef = useRef(null);
 
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending, open]);
 
  const handleSend = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || sending) return;
    const next = [...messages, { role: "user", text: trimmed }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const reply = await sendMessage(next, trimmed);
      setMessages((cur) => [...cur, { role: "assistant", text: reply }]);
    } catch {
      setMessages((cur) => [...cur, { role: "assistant", text: "Something went wrong — please try again." }]);
    } finally {
      setSending(false);
    }
  };
 
  return (
    <>
      <style>{`
        @keyframes widgetDot { 0%,60%,100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-3px); opacity: 1; } }
        @keyframes widgetPulse { 0% { box-shadow: 0 0 0 0 rgba(37,209,111,0.35); } 100% { box-shadow: 0 0 0 14px rgba(37,209,111,0); } }
        @keyframes widgetPanelIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
 
        .cw-launcher {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 9999px;
          border: none;
          background: linear-gradient(135deg, #00D17E 0%, #006D3F 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 16px 30px -8px rgba(0,109,63,0.45);
          z-index: 9999;
          transition: transform 0.18s ease;
        }
        .cw-launcher.pulse { animation: widgetPulse 2.2s ease-out infinite; }
        .cw-launcher:hover { transform: scale(1.06); }
 
        .cw-panel {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 368px;
          height: 520px;
          max-height: calc(100vh - 140px);
          border-radius: 24px;
          border: 1px solid rgba(187,203,188,0.35);
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9999;
          box-sizing: border-box;
          animation: widgetPanelIn 0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
 
        .cw-thread { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 14px; }
        .cw-chip {
          font-family: 'Nunito', sans-serif; font-weight: 600; font-size: 13px;
          color: #191C1E; background: white; border: 1px solid rgba(187,203,188,0.4);
          border-radius: 9999px; padding: 8px 14px; cursor: pointer; text-align: left;
          transition: border-color 0.15s;
        }
        .cw-chip:hover { border-color: #25D16F; }
 
        @media (max-width: 480px) {
          .cw-panel {
            left: 0px;
            right: 0px;
            width: auto;
            bottom: 88px;
            height: min(520px, calc(100dvh - 240px));
          }
          .cw-launcher { right: 16px; bottom: 16px; }
        }
      `}</style>
 
      {/* ── Launcher bubble ── */}
      <button
        className={`cw-launcher ${!open && messages.length === 0 ? "pulse" : ""}`}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setLauncherHov(true)}
        onMouseLeave={() => setLauncherHov(false)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
 
      {/* ── Expanded panel ── */}
      {open && (
        <div className="cw-panel">
          {/* header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10, padding: "16px 18px",
            borderBottom: "1px solid rgba(187,203,188,0.30)", flexShrink: 0,
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: "9999px",
              background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <SparkleIcon size={15} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14.5, color: "#191C1E", margin: 0 }}>
                {ASSISTANT_NAME}
              </p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11.5, color: "#25D16F", margin: 0, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "9999px", background: "#25D16F", display: "inline-block" }} />
                Online
              </p>
            </div>
          </div>
 
          {/* thread */}
          <div className="cw-thread" ref={scrollRef}>
            {messages.length === 0 && (
              <>
                <Bubble role="assistant" text={WELCOME_MESSAGE} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                  <button className="cw-chip" onClick={() => handleSend("Draft a caption for today's post")}>
                    Draft a caption for today's post
                  </button>
                  <button className="cw-chip" onClick={() => handleSend("How did my last post perform?")}>
                    How did my last post perform?
                  </button>
                </div>
              </>
            )}
            {messages.map((m, i) => <Bubble key={i} role={m.role} text={m.text} />)}
            {sending && (
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "9999px", flexShrink: 0,
                  background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <SparkleIcon size={12} />
                </div>
                <div style={{ borderRadius: "14px 14px 14px 4px", background: "white", border: "1px solid rgba(187,203,188,0.35)", padding: "10px 12px" }}>
                  <TypingDots />
                </div>
              </div>
            )}
          </div>
 
          {/* composer */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            style={{
              display: "flex", alignItems: "center", gap: 6, margin: 12, marginTop: 0,
              border: focused ? "1.5px solid #25D16F" : "1px solid rgba(60,74,63,0.18)",
              borderRadius: 9999, background: "white", padding: "4px 4px 4px 16px",
              boxShadow: focused ? "0 0 0 3px rgba(37,209,111,0.12)" : "none",
              transition: "box-shadow 0.15s, border-color 0.15s",
              flexShrink: 0,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Type a message…"
              style={{
                flex: 1, border: "none", outline: "none", background: "transparent",
                fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "#0F0D0A", height: 36,
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || sending}
              style={{
                width: 34, height: 34, borderRadius: "9999px", border: "none",
                background: input.trim() && !sending ? "#25D16F" : "#BBCBBC",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: input.trim() && !sending ? "pointer" : "default",
                flexShrink: 0, transition: "background 0.15s",
              }}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </>
  );
}