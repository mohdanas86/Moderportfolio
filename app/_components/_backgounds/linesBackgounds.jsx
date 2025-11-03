"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position, rayColor }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: rayColor === "white" 
      ? `rgba(255, 255, 255, ${0.1 + i * 0.02})` 
      : `rgba(59, 130, 246, ${0.1 + i * 0.02})`,
    width: 0.05 + i * 0.01,
  }));

  // Use full class names for Tailwind to detect them at build time
  const svgColorClass = rayColor === "white" 
    ? "w-full h-full text-white/20" 
    : "w-full h-full text-blue-400/20";

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full">
      <svg
        className={svgColorClass}
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.8, 0.4],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <FloatingPaths position={-2} rayColor={"white"} />
      <FloatingPaths position={-1} rayColor={"blue"} />
    </div>
  );
}
