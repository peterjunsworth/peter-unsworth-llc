import React, { useMemo } from "react";
import { motion } from "motion/react";

export type Season = "winter" | "spring" | "summer" | "autumn" | "none";

export function getSeason(): Season {
  const month = new Date().getMonth() + 1; // 1-12
  if (month >= 12 || month <= 2) return "winter"; // Dec-Feb
  if (month >= 3 && month <= 5) return "spring"; // Mar-May
  if (month >= 6 && month <= 8) return "summer"; // Jun-Aug
  return "autumn"; // Sep-Nov
}

// Snowflake component for winter
function Snowflake({ delay, duration, left, size }: { delay: number; duration: number; left: number; size: number }) {
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
  
  return (
    <motion.div
      className="absolute text-white pointer-events-none select-none"
      style={{ 
        left: `${left}%`,
        fontSize: `${size}px`,
      }}
      initial={{ y: -50, opacity: 0, rotate: 0 }}
      animate={{
        y: screenHeight + 100,
        opacity: [0, 1, 1, 0],
        rotate: 360,
        x: [0, Math.random() * 50 - 25, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      ❄
    </motion.div>
  );
}

// Grass blade component for spring - grows from bottom with natural sway
function GrassBlade({ left, delay, height, width }: { left: number; delay: number; height: number; width: number }) {
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
  const bladeHeight = height || (60 + Math.random() * 120); // 60-180px tall
  const baseWidth = width || (3 + Math.random() * 3); // 3-6px wide at bottom
  const baseCurve = (Math.random() - 0.5) * 15; // Random base curve
  const swayAmount = 2 + Math.random() * 4; // Sway amount
  const swaySpeed = 2 + Math.random() * 2; // Sway speed variation
  
  // Bottom is always at screenHeight (bottom of viewport)
  const bottomY = screenHeight;
  const bottomLeft = left - baseWidth / 2;
  const bottomRight = left + baseWidth / 2;
  const topX = left;
  
  // Animate the top Y position from bottom to top
  const finalTopY = screenHeight - bladeHeight;
  const midX = left + baseCurve;
  
  return (
    <motion.g
      style={{
        transformOrigin: `${left}px ${screenHeight}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.1, 0.3, 0.5, 0.7, 0.85, 1],
        rotate: [0, swayAmount, -swayAmount, 0],
      }}
      transition={{
        opacity: {
          duration: 4 + Math.random() * 2,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Very smooth, slow ease-in-out curve
        },
        rotate: {
          duration: swaySpeed,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 4, // Start swaying after growth
        },
      }}
    >
      <motion.path
        fill="#16a34a"
        stroke="#15803d"
        strokeWidth="0.5"
        initial={{
          d: `M ${bottomLeft} ${bottomY} L ${bottomRight} ${bottomY} Z`, // Start as just a line at bottom
        }}
        animate={{
          d: [
            `M ${bottomLeft} ${bottomY} L ${bottomRight} ${bottomY} Z`, // Start: just bottom line
            `M ${bottomLeft} ${bottomY} Q ${midX - baseWidth * 0.3} ${screenHeight - bladeHeight * 0.5} ${topX} ${screenHeight - bladeHeight} Q ${midX + baseWidth * 0.3} ${screenHeight - bladeHeight * 0.5} ${bottomRight} ${bottomY} Z`, // End: full blade
          ],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          delay,
          ease: "easeOut",
        }}
      />
    </motion.g>
  );
}

// Grass component for spring - multiple blades growing from bottom
function Grass() {
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1080;
  const numBlades = Math.floor(screenWidth / 15); // One blade every ~15px
  
  return (
    <svg
      className="fixed inset-0 pointer-events-none select-none"
      style={{ 
        width: '100%', 
        height: '100%', 
        overflow: 'visible',
        viewBox: `0 0 ${screenWidth} ${screenHeight}`,
        preserveAspectRatio: 'none'
      }}
    >
      {Array.from({ length: numBlades }).map((_, i) => {
        const left = (i / numBlades) * screenWidth + (Math.random() - 0.5) * 20;
        const delay = Math.random() * 2;
        const height = 80 + Math.random() * 150;
        const width = 2 + Math.random() * 2;
        
        return (
          <GrassBlade
            key={i}
            left={left}
            delay={delay}
            height={height}
            width={width}
          />
        );
      })}
    </svg>
  );
}

// Large sun component for summer - lights up the page with sunrise curve
function BigSun() {
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1080;
  
  // Calculate curved path for sunrise (arc from bottom-left to top-right)
  // Using a quadratic curve: start at left-bottom, peak in middle-top, end at right-top
  const startX = -200; // Start off-screen left
  const startY = screenHeight + 200; // Start below screen
  const midX = screenWidth / 2; // Peak in middle
  const midY = screenHeight * 0.2; // Peak at 20% from top
  const endX = screenWidth + 200; // End off-screen right
  const endY = screenHeight * 0.1; // End at 10% from top
  
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* Container that moves with the sun - gradient only */}
      <motion.div
        className="absolute"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: [startX, midX, endX],
          y: [startY, midY, endY],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Bright yellow center with radial gradient */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, rgba(255, 235, 59, 0.6) 0%, rgba(255, 193, 7, 0.4) 15%, rgba(255, 152, 0, 0.25) 30%, rgba(255, 235, 59, 0.15) 50%, transparent 70%)`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}
        />
        
        {/* Additional bright glow ring */}
        <div
          className="absolute w-96 h-96 rounded-full bg-yellow-400/30 blur-3xl"
          style={{
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}
        />
      </motion.div>
    </div>
  );
}

// Leaf component for autumn
function Leaf({ delay, duration, left }: { delay: number; duration: number; left: number }) {
  const leaves = ["🍂", "🍁", "🍃"];
  const leaf = leaves[Math.floor(Math.random() * leaves.length)];
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
  
  return (
    <motion.div
      className="absolute text-2xl pointer-events-none select-none"
      style={{ left: `${left}%` }}
      initial={{ y: -50, opacity: 0, rotate: 0 }}
      animate={{
        y: screenHeight + 100,
        opacity: [0, 1, 1, 0],
        rotate: [0, 180, 360, 540],
        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {leaf}
    </motion.div>
  );
}

interface SeasonalEffectsProps {
  season?: Season;
}

export function SeasonalEffects({ season: seasonProp }: SeasonalEffectsProps) {
  const defaultSeason = useMemo(() => getSeason(), []);
  const season = seasonProp ?? defaultSeason;

  if (season === "none") {
    return null;
  }

  if (season === "winter") {
    return (
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          // Create depth perspective: some flakes closer (larger), some farther (smaller)
          // Extremely close: 200-300px, very close: 40-60px, close: 24-40px, medium: 16-24px, far: 10-16px
          const depth = Math.random();
          let size;
          if (depth > 0.9) {
            // Extremely close - 5 times the largest normal size
            size = 200 + Math.random() * 100; // 200-300px
          } else if (depth > 0.75) {
            // Very close
            size = 40 + Math.random() * 20; // 40-60px
          } else if (depth > 0.5) {
            // Close
            size = 24 + Math.random() * 16; // 24-40px
          } else if (depth > 0.25) {
            // Medium
            size = 16 + Math.random() * 8; // 16-24px
          } else {
            // Far
            size = 10 + Math.random() * 6; // 10-16px
          }
          // Closer flakes fall faster, farther flakes fall slower - all slowed down more
          const fallSpeed = depth > 0.9 ? 6 + Math.random() * 4 : depth > 0.75 ? 8 + Math.random() * 4 : depth > 0.5 ? 10 + Math.random() * 5 : depth > 0.25 ? 12 + Math.random() * 6 : 15 + Math.random() * 8;
          
          return (
            <Snowflake
              key={i}
              delay={Math.random() * 5}
              duration={fallSpeed}
              left={Math.random() * 100}
              size={size}
            />
          );
        })}
      </div>
    );
  }

  if (season === "spring") {
    return (
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <Grass />
      </div>
    );
  }

  if (season === "summer") {
    return (
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <BigSun />
      </div>
    );
  }

  // autumn
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => (
        <Leaf
          key={i}
          delay={Math.random() * 5}
          duration={4 + Math.random() * 3}
          left={Math.random() * 100}
        />
      ))}
    </div>
  );
}

