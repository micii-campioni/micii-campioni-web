type WaveColor = "white" | "sand" | "lagoon" | "lagoon-dark";

interface WaveDividerProps {
  color?: WaveColor;
  flip?: boolean;
}

const colorClasses: Record<WaveColor, string> = {
  white: "text-white",
  sand: "text-sand-50",
  lagoon: "text-lagoon-50",
  "lagoon-dark": "text-lagoon-600",
};

export function WaveDivider({ color = "white", flip = false }: WaveDividerProps) {
  return (
    <div
      className={`${colorClasses[color]} ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="block h-10 w-full md:h-[60px]"
        viewBox="0 0 1440 60"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0V30Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
