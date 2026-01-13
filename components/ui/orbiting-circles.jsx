import React from "react"

import { cn } from "@/lib/utils"

export function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed
  const calculatedDelay = delay / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full">
          <circle
            className="stroke-white/80 roke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none" />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        const itemDelay = (calculatedDelay / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
                animationDelay: `${itemDelay}s`
              }
            }
            className={cn(
              `animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}>
            {child}
          </div>
        );
      })}
    </>
  );
}
