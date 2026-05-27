import type { ReactNode } from "react";

interface SpeechBubbleProps {
  children: ReactNode;
  className?: string;
  tailSide?: "left" | "right";
}

export default function SpeechBubble({
  children,
  className = "",
  tailSide = "left",
}: SpeechBubbleProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="gold-border bg-comic-black p-6 relative">
        {children}
      </div>
      {/* Speech bubble tail */}
      <div
        className={`absolute -bottom-[22px] w-0 h-0 ${
          tailSide === "left" ? "left-10" : "right-10"
        }`}
        style={{
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          borderTop: `22px solid #d4af37`,
        }}
        aria-hidden="true"
      />
      <div
        className={`absolute -bottom-[17px] w-0 h-0 z-10 ${
          tailSide === "left" ? "left-[43px]" : "right-[43px]"
        }`}
        style={{
          borderLeft: "13px solid transparent",
          borderRight: "13px solid transparent",
          borderTop: `18px solid #1a1a1a`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
