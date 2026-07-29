"use client";
 
import { useEffect, useRef, useState } from "react";
 
// ═══════════════════════════════════════════════════════════════════
// SWAP POINTS
// ═══════════════════════════════════════════════════════════════════
const ASSISTANT_NAME = "Assistant";
const ASSISTANT_TAGLINE = "Your social media co-pilot";
const WELCOME_MESSAGE =
  "Hi! I can help you draft captions, plan your posting schedule, or dig into your channel performance. What are we working on?";
const SUGGESTED_PROMPTS = [
  "Write a caption for a product launch",
  "What's my best-performing platform this week?",
  "Plan next week's content calendar",
  "Suggest hashtags for a fashion post",
];
 
// ← replace with your real send call. Return the assistant's reply text.
async function sendMessage(history, text) {
  await new Promise((r) => setTimeout(r, 900));
  return "Got it — here's a draft based on what you shared. (Wire this up to your real API in `sendMessage`.)";
}
 
// ═══════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
 
function SparkleIcon({ size = 18, color = "white" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l1.8 5.6L19.4 9.4 13.8 11.2 12 17l-1.8-5.8L4.6 9.4l5.6-1.8L12 2z" />
    </svg>
  );
}
 
function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "4px 2px" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6, height: 6, borderRadius: "9999px",
            background: "#25D16F",
            animation: `chatDot 1.2s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
 
// ═══════════════════════════════════════════════════════════════════
// MESSAGE BUBBLE
// ═══════════════════════════════════════════════════════════════════
function Bubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", gap: 10 }}>
      {!isUser && (
        <div style={{
          width: 32, height: 32, borderRadius: "9999px", flexShrink: 0,
          background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <SparkleIcon size={15} />
        </div>
      )}
      <div
        style={{
          maxWidth: "72%",
          fontFamily: "'Sora', sans-serif",
          fontSize: 15.5,
          lineHeight: "24px",
          padding: "14px 18px",
          borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          background: isUser ? "#25D16F" : "white",
          color: isUser ? "white" : "#191C1E",
          border: isUser ? "none" : "1px solid rgba(187,203,188,0.30)",
          boxShadow: isUser ? "0 8px 16px -6px rgba(0,109,63,0.30)" : "0 2px 8px rgba(0,0,0,0.04)",
          whiteSpace: "pre-wrap",
        }}
      >
        {text}
      </div>
    </div>
  );
}
 
export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState(false);
  const scrollRef = useRef(null);
 
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);
 
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
      setMessages((cur) => [...cur, { role: "assistant", text: "Something went wrong reaching the assistant — please try again." }]);
    } finally {
      setSending(false);
    }
  };
 
  const isEmpty = messages.length === 0;
 
  return (
    <>
      <style>{`
        @keyframes chatDot { 0%,60%,100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-4px); opacity: 1; } }
 
        .chatpage-shell {
          min-height: 100vh;
          background: white;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .chatpage-thread {
          flex: 1;
          overflow-y: auto;
          padding: 32px 24px 12px;
        }
        .chatpage-thread-inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .chatpage-composer {
          padding: 16px 24px 28px;
        }
        .chatpage-composer-inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .chatpage-chip {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #191C1E;
          background: white;
          border: 1px solid rgba(187,203,188,0.40);
          border-radius: 9999px;
          padding: 10px 18px;
          cursor: pointer;
          transition: border-color 0.15s, transform 0.15s;
          text-align: left;
        }
        .chatpage-chip:hover {
          border-color: #25D16F;
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .chatpage-thread { padding: 20px 16px 8px; }
          .chatpage-composer { padding: 12px 16px 20px; }
        }
      `}</style>
 
      <div className="chatpage-shell">
        {/* ambient background glow — same treatment as Hero */}
        <div
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{ width: 700, height: 700, top: -260, left: "50%", transform: "translateX(-50%)", background: "rgba(0,209,126,0.05)", filter: "blur(120px)" }}
        />
 
        {/* header */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", alignItems: "center", gap: 12,
          padding: "20px 24px", borderBottom: "1px solid rgba(187,203,188,0.30)",
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: "9999px",
            background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <SparkleIcon size={18} />
          </div>
          <div>
            <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16, color: "#191C1E", margin: 0 }}>
              {ASSISTANT_NAME}
            </p>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#3C4A3F", margin: 0 }}>
              {ASSISTANT_TAGLINE}
            </p>
          </div>
        </div>
 
        {/* thread */}
        <div className="chatpage-thread" ref={scrollRef} style={{ position: "relative", zIndex: 1 }}>
          <div className="chatpage-thread-inner">
            {isEmpty ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24, paddingTop: 48 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "9999px",
                  background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 20px 30px -10px rgba(0,109,63,0.30)",
                }}>
                  <SparkleIcon size={26} />
                </div>
                <h1 style={{
                  fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 28,
                  letterSpacing: "-0.6px", color: "#0F0D0A", margin: 0, maxWidth: 480,
                }}>
                  {WELCOME_MESSAGE}
                </h1>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%", maxWidth: 560 }}>
                  {SUGGESTED_PROMPTS.map((p) => (
                    <button key={p} className="chatpage-chip" onClick={() => handleSend(p)}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, i) => <Bubble key={i} role={m.role} text={m.text} />)
            )}
 
            {sending && (
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "9999px", flexShrink: 0,
                  background: "linear-gradient(135deg, #00D17E 0%, #006D3F 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <SparkleIcon size={15} />
                </div>
                <div style={{
                  borderRadius: "18px 18px 18px 4px", background: "white",
                  border: "1px solid rgba(187,203,188,0.30)", padding: "12px 16px",
                }}>
                  <TypingDots />
                </div>
              </div>
            )}
          </div>
        </div>
 
        {/* composer */}
        <div className="chatpage-composer" style={{ position: "relative", zIndex: 1 }}>
          <div className="chatpage-composer-inner">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                border: focused ? "1.5px solid #25D16F" : "1px solid rgba(60,74,63,0.18)",
                borderRadius: 9999, background: "white", padding: "6px 6px 6px 22px",
                boxShadow: focused ? "0 0 0 4px rgba(37,209,111,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.15s, border-color 0.15s",
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Ask about captions, scheduling, performance…"
                style={{
                  flex: 1, border: "none", outline: "none", background: "transparent",
                  fontFamily: "'Sora', sans-serif", fontSize: 15.5, color: "#0F0D0A", height: 40,
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || sending}
                style={{
                  width: 42, height: 42, borderRadius: "9999px", border: "none",
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
        </div>
      </div>
    </>
  );
}