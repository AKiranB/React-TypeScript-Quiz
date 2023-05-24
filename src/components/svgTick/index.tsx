import { useEffect, useState } from "react";
import { colors } from "../../theme";

export default function CircleWithTick({ ...props }) {
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationStart(true);
    }, 250);
  }, []);

  return (
    <div
      className="circle"
      style={{
        width: "32px",
        height: "32px",
        border: "2px solid #ccc",
        position: "relative",
        borderRadius: "50%",
        borderColor: colors.surface.main,
        opacity: animationStart ? 1 : 0,
        transition: "opacity 0.8s ease-out",
        overflow: "hidden",
        ...props,
      }}
    >
      <svg
        viewBox="0 0 20 20"
        style={{
          position: "absolute",
          color: "green",
          width: "24px",
          height: "24px",
          top: "50%",
          left: "50%",
          transform: animationStart
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0)",
          stroke: colors.surface.main,
          strokeDasharray: animationStart ? "25 0" : "0 25",
          strokeWidth: "1",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
          transition:
            "transform 0.6s ease-in, stroke-dasharray 0.6s ease-in-out",
        }}
      >
        <path
          d="M4.25 10.75L8.5 15"
          style={{
            strokeDashoffset: animationStart ? 0 : 10,
            transition: "stroke-dashoffset 0.1s ease-in-out",
          }}
        />
        <path
          d="M8.5 15L16.75 6.75"
          style={{
            strokeDashoffset: animationStart ? 0 : -15,
            transition: "stroke-dashoffset 0.3s ease-in-out",
          }}
        />
      </svg>
    </div>
  );
}
