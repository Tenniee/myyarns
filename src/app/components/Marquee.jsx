// ═══════════════════════════════════════════════════════════════════
// MARQUEE ITEMS — edit text here
// ═══════════════════════════════════════════════════════════════════
const MARQUEE_ITEMS = [
  "Analytics",
  "Instagram DMs",
  "Facebook Messenger",
  "WhatsApp Business",
  "LinkedIn Messages",
  "Twitter / X DMs",
  "Telegram Bot",
];
 
// ═══════════════════════════════════════════════════════════════════
// SEPARATOR — the symbol between each item
// ═══════════════════════════════════════════════════════════════════
const SEPARATOR = "✦";
 
// ═══════════════════════════════════════════════════════════════════
// SPEED — animation duration in seconds (lower = faster)
// ═══════════════════════════════════════════════════════════════════
const SPEED = 30;
 
export default function Marquee() {
  // Double the items so the loop is seamless
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
 
  return (
    <>
      <style>{`
        .item {
          display: flex;
          align-items: center;
          gap: 32px;
          padding: 0 32px;
          white-space: nowrap;
        }

        .text {
          font-family: "Sora", sans-serif;
          font-weight: 700;
          font-size: 22px;
          line-height: 48px;
          letter-spacing: -1px;
          color: white;
        }

        .separator {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .item {
            gap: 16px;
            padding: 0 16px;
          }

          .text {
            font-size: 16px;
            line-height: 32px;
            letter-spacing: -0.5px;
          }

          .separator {
            font-size: 10px;
          }
        }
          
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll ${SPEED}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
 
      <div
        style={{
          background: "#01D17E",
          height:     87,
          width:      "100%",
          overflow:   "hidden",
          display:    "flex",
          alignItems: "center",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display:    "flex",
            alignItems: "center",
            width:      "max-content",
          }}
        >
          {doubled.map((text, i) => (
            <div key={i} className='item'>
              <span className='text'>
                {text}
              </span>

              <span className='separator' aria-hidden>
                {SEPARATOR}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}