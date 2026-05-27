type ActionColor = "gold" | "gold-bright" | "white" | "black";

const colorMap: Record<ActionColor, string> = {
  gold: "text-comic-gold",
  "gold-bright": "text-comic-gold-bright",
  white: "text-comic-white",
  black: "text-comic-black",
};

const strokeMap: Record<ActionColor, string> = {
  gold: "#1a1a1a",
  "gold-bright": "#1a1a1a",
  white: "#1a1a1a",
  black: "#d4af37",
};

interface ActionWordProps {
  word: string;
  color?: ActionColor;
  className?: string;
  strokeColor?: string;
}

export default function ActionWord({
  word,
  color = "gold",
  className = "",
  strokeColor,
}: ActionWordProps) {
  const stroke = strokeColor ?? strokeMap[color];

  return (
    <span
      className={`action-text select-none pointer-events-none ${colorMap[color]} ${className}`}
      style={{
        WebkitTextStroke: `2px ${stroke}`,
        paintOrder: "stroke fill",
      }}
      aria-hidden="true"
    >
      {word}
    </span>
  );
}
