"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  showLabels = true,
  labelClassName = "text-sm",
  animationDuration = 2,
  loop = true,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  const mapSrc = resolvedTheme === "dark" ? "/world-map-dark.svg" : "/world-map-light.svg";

  // Equirectangular projection matching d3-geo generated SVGs
  // viewBox: 0 0 960 480
  const MAP_WIDTH = 960;
  const MAP_HEIGHT = 480;

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (MAP_WIDTH / 360);
    const y = (90 - lat) * (MAP_HEIGHT / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // India outline from d3-geo equirectangular projection (960x480)
  const indiaPath = "M739.543,164.637L739.735,165.648L738.804,166.135L739.025,167.778L737.115,167.295L733.668,169.137L733.745,170.662L732.276,172.901L732.142,174.201L730.951,176.399L728.868,175.79L728.762,178.552L728.158,179.459L728.446,180.592L727.13,181.224L725.719,176.995L724.99,177.004L724.548,178.705L723.089,177.324L723.914,175.808L725.105,175.654L726.334,173.397L724.798,172.942L722.33,172.978L719.786,172.612L719.556,170.762L718.279,170.626L716.167,169.475L715.226,171.285L717.146,172.698L715.486,173.691L714.89,174.661L716.532,175.379L716.081,176.986L717.002,178.99L717.415,181.183L717.041,182.158L715.226,182.126L711.934,182.677L712.087,184.686L710.666,186.261L706.826,188.057L703.841,191.194L701.834,192.878L699.185,194.624L699.175,195.848L697.85,196.506L695.441,197.463L694.202,197.603L693.396,199.634L693.953,203.105L694.097,205.317L692.964,207.849L692.954,212.38L691.572,212.511L690.362,214.542L691.169,215.423L688.74,216.181L687.847,217.991L686.772,218.758L684.247,216.267L683.018,212.534L681.991,209.844L681.06,208.585L679.639,206.021L678.976,202.685L678.516,201.02L676.087,197.36L674.983,192.192L674.186,188.779L674.196,185.548L673.677,183.052L669.799,184.645L667.917,184.329L664.442,181.097L665.719,180.132L664.931,179.084L661.802,176.823L663.578,175.04L669.453,175.049L668.915,172.761L667.418,171.407L667.12,169.353L665.373,168.157L668.311,165.363L671.412,165.567L674.196,162.768L675.866,160.065L678.458,157.388L678.42,155.488L680.685,153.944L678.535,152.626L677.613,150.821L676.663,148.487L677.978,147.337L682.02,147.986L684.996,147.589L687.568,145.351L690.429,148.474L690.161,150.649L691.226,152.017L691.14,153.376L689.22,153.019L689.968,155.957L692.589,157.645L696.295,159.509L694.605,160.719L693.569,163.215L696.151,164.226L698.666,165.53L702.141,167.029L705.799,167.372L707.335,168.73L709.399,168.983L712.606,169.606L714.823,169.561L715.13,168.505L714.785,166.812L714.986,165.661L716.618,165.102L716.839,167.2L716.897,167.737L719.316,168.749L720.996,168.333L723.242,168.509L725.422,168.433L725.614,166.794L724.529,165.941L726.679,165.607L729.098,163.626L732.18,161.929L734.417,162.583L736.318,161.459L737.566,163.116L736.663,164.235Z";

  // Calculate animation timing
  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans overflow-hidden">
      <Image
        src={mapSrc}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
        alt="world map"
        height={480}
        width={960}
        draggable={false}
        priority
      />
      <svg
        ref={svgRef}
        viewBox="0 0 960 480"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feMorphology operator="dilate" radius="1" />
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="india-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* India Outline */}
        <path
          d={indiaPath}
          fill="rgba(197,160,89,0.12)"
          stroke="#c5a059"
          strokeWidth="1.5"
          strokeLinejoin="round"
          filter="url(#india-glow)"
          className="pointer-events-none"
        />

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          const startTime = (i * staggerDelay) / fullCycleDuration;
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
          const resetTime = totalAnimationTime / fullCycleDuration;

          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={
                  loop
                    ? {
                        pathLength: [0, 0, 1, 1, 0],
                      }
                    : {
                        pathLength: 1,
                      }
                }
                transition={
                  loop
                    ? {
                        duration: fullCycleDuration,
                        times: [0, startTime, endTime, resetTime, 1],
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0,
                      }
                    : {
                        duration: animationDuration,
                        delay: i * staggerDelay,
                        ease: "easeInOut",
                      }
                }
              />

              {loop && (
                <motion.circle
                  r="4"
                  fill={lineColor}
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: [null, "0%", "100%", "100%", "100%"],
                    opacity: [0, 0, 1, 0, 0],
                  }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                  style={{
                    offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')`,
                  }}
                />
              )}
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g key={`start-${i}`}>
                <motion.g
                  onHoverStart={() => setHoveredLocation(dot.start.label || `Location ${i}`)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="4"
                    fill={lineColor}
                    filter="url(#glow)"
                    className="drop-shadow-lg"
                  />
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="4"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="14"
                      dur="2s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>

                {showLabels && dot.start.label && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 * i + 0.3, duration: 0.5 }}
                    className="pointer-events-none"
                  >
                    <foreignObject
                      x={startPoint.x - 50}
                      y={startPoint.y - 30}
                      width="100"
                      height="24"
                      className="block overflow-visible"
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-[10px] font-medium whitespace-nowrap px-1.5 py-0.5 rounded bg-white/95 dark:bg-black/95 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm">
                          {dot.start.label}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}
              </g>

              {/* End Point */}
              <g key={`end-${i}`}>
                <motion.g
                  onHoverStart={() => setHoveredLocation(dot.end.label || `Destination ${i}`)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="4"
                    fill={lineColor}
                    filter="url(#glow)"
                    className="drop-shadow-lg"
                  />
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="4"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="14"
                      dur="2s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>

                {showLabels && dot.end.label && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 * i + 0.5, duration: 0.5 }}
                    className="pointer-events-none"
                  >
                    <foreignObject
                      x={endPoint.x - 50}
                      y={endPoint.y - 30}
                      width="100"
                      height="24"
                      className="block overflow-visible"
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-[10px] font-medium whitespace-nowrap px-1.5 py-0.5 rounded bg-white/95 dark:bg-black/95 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-sm">
                          {dot.end.label}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}
              </g>
            </g>
          );
        })}
      </svg>

      {/* Mobile Tooltip */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 text-black dark:text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-gray-200 dark:border-gray-700"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
