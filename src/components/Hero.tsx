import React from "react";
import { Button } from "./ui/button";
import { LinkedinIcon, MailIcon, SparklesIcon, RocketIcon } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "../assets/images/logo-square.png";

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Constellation background */}
      <div className="absolute inset-0 bg-slate-900" />
      
      {/* Animated constellation network */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Organic constellation nodes */}
        <motion.circle
          cx="120" cy="180" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.3, 0.7]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="280" cy="120" r="3"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.4, 0.8]
          }}
          transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.circle
          cx="450" cy="80" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.1, 0.6]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="620" cy="140" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.2, 0.7]
          }}
          transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
        />
        <motion.circle
          cx="780" cy="200" r="3"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.circle
          cx="920" cy="160" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.0, 0.6]
          }}
          transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        />
        
        <motion.circle
          cx="80" cy="320" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.2, 0.7]
          }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.circle
          cx="220" cy="280" r="3"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.4, 0.8]
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.circle
          cx="380" cy="350" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.1, 0.6]
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.circle
          cx="520" cy="320" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.3, 0.7]
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
        />
        <motion.circle
          cx="680" cy="380" r="3"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
        />
        <motion.circle
          cx="820" cy="340" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.0, 0.6]
          }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        />
        
        <motion.circle
          cx="150" cy="480" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.2, 0.7]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        />
        <motion.circle
          cx="320" cy="520" r="3"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.circle
          cx="480" cy="480" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.1, 0.6]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        />
        <motion.circle
          cx="640" cy="520" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.2, 0.7]
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 2.9 }}
        />
        <motion.circle
          cx="800" cy="480" r="3"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.4, 0.8]
          }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        />
        
        <motion.circle
          cx="100" cy="680" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.0, 0.6]
          }}
          transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 3.1 }}
        />
        <motion.circle
          cx="280" cy="720" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.2, 0.7]
          }}
          transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.circle
          cx="460" cy="680" r="3"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 2.3 }}
        />
        <motion.circle
          cx="620" cy="720" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.1, 0.6]
          }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />
        <motion.circle
          cx="780" cy="680" r="2.5"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.2, 0.7]
          }}
          transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
        />
        <motion.circle
          cx="920" cy="720" r="2"
          fill="#d1d5db"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.6, 1.0, 0.6]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Organic constellation connections */}
        <motion.line
          x1="120" y1="180" x2="280" y2="120"
          stroke="#d1d5db"
          strokeWidth="0.8"
          opacity="0.5"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="280" y1="120" x2="450" y2="80"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.line
          x1="450" y1="80" x2="620" y2="140"
          stroke="#d1d5db"
          strokeWidth="0.7"
          opacity="0.45"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.15, 0.6, 0.15]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.line
          x1="620" y1="140" x2="780" y2="200"
          stroke="#d1d5db"
          strokeWidth="0.8"
          opacity="0.5"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        />
        <motion.line
          x1="780" y1="200" x2="920" y2="160"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Vertical connections */}
        <motion.line
          x1="120" y1="180" x2="80" y2="320"
          stroke="#d1d5db"
          strokeWidth="0.7"
          opacity="0.45"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.15, 0.6, 0.15]
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.line
          x1="280" y1="120" x2="220" y2="280"
          stroke="#d1d5db"
          strokeWidth="0.8"
          opacity="0.5"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.line
          x1="450" y1="80" x2="380" y2="350"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
        <motion.line
          x1="620" y1="140" x2="520" y2="320"
          stroke="#d1d5db"
          strokeWidth="0.7"
          opacity="0.45"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.15, 0.6, 0.15]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.line
          x1="780" y1="200" x2="680" y2="380"
          stroke="#d1d5db"
          strokeWidth="0.8"
          opacity="0.5"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.line
          x1="920" y1="160" x2="820" y2="340"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        
        {/* Diagonal cross-connections */}
        <motion.line
          x1="80" y1="320" x2="220" y2="280"
          stroke="#d1d5db"
          strokeWidth="0.5"
          opacity="0.35"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.line
          x1="220" y1="280" x2="380" y2="350"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.15, 0.5, 0.15]
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        />
        <motion.line
          x1="380" y1="350" x2="520" y2="320"
          stroke="#d1d5db"
          strokeWidth="0.5"
          opacity="0.35"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.line
          x1="520" y1="320" x2="680" y2="380"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.15, 0.5, 0.15]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
        <motion.line
          x1="680" y1="380" x2="820" y2="340"
          stroke="#d1d5db"
          strokeWidth="0.5"
          opacity="0.35"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 5.5 }}
        />
        
        {/* Bottom section connections */}
        <motion.line
          x1="150" y1="480" x2="320" y2="520"
          stroke="#d1d5db"
          strokeWidth="0.7"
          opacity="0.45"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.15, 0.6, 0.15]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.line
          x1="320" y1="520" x2="480" y2="480"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.line
          x1="480" y1="480" x2="640" y2="520"
          stroke="#d1d5db"
          strokeWidth="0.7"
          opacity="0.45"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.15, 0.6, 0.15]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.line
          x1="640" y1="520" x2="800" y2="480"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.4"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
        
        {/* Long diagonal connections */}
        <motion.line
          x1="100" y1="680" x2="280" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.5"
          opacity="0.3"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.35, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.line
          x1="280" y1="720" x2="460" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.35"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.line
          x1="460" y1="680" x2="620" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.5"
          opacity="0.3"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.35, 0.05]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        />
        <motion.line
          x1="620" y1="720" x2="780" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.6"
          opacity="0.35"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        />
        <motion.line
          x1="780" y1="680" x2="920" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.5"
          opacity="0.3"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.35, 0.05]
          }}
          transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        
        {/* Additional dense connections - Top to Middle */}
        <motion.line
          x1="120" y1="180" x2="220" y2="280"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
        <motion.line
          x1="280" y1="120" x2="380" y2="350"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 7.5 }}
        />
        <motion.line
          x1="450" y1="80" x2="520" y2="320"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 9 }}
        />
        <motion.line
          x1="620" y1="140" x2="680" y2="380"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5.5 }}
        />
        <motion.line
          x1="780" y1="200" x2="820" y2="340"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 10.5 }}
        />
        
        {/* Cross-connections within rows */}
        <motion.line
          x1="80" y1="320" x2="150" y2="480"
          stroke="#d1d5db"
          strokeWidth="0.3"
          opacity="0.2"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.03, 0.25, 0.03]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 12 }}
        />
        <motion.line
          x1="220" y1="280" x2="320" y2="520"
          stroke="#d1d5db"
          strokeWidth="0.3"
          opacity="0.2"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.03, 0.25, 0.03]
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 13.5 }}
        />
        <motion.line
          x1="380" y1="350" x2="480" y2="480"
          stroke="#d1d5db"
          strokeWidth="0.3"
          opacity="0.2"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.03, 0.25, 0.03]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 15 }}
        />
        <motion.line
          x1="520" y1="320" x2="640" y2="520"
          stroke="#d1d5db"
          strokeWidth="0.3"
          opacity="0.2"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.03, 0.25, 0.03]
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 16.5 }}
        />
        <motion.line
          x1="680" y1="380" x2="800" y2="480"
          stroke="#d1d5db"
          strokeWidth="0.3"
          opacity="0.2"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.03, 0.25, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 18 }}
        />
        <motion.line
          x1="820" y1="340" x2="920" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.3"
          opacity="0.2"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.03, 0.25, 0.03]
          }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 19.5 }}
        />
        
        {/* Long-range connections */}
        <motion.line
          x1="120" y1="180" x2="480" y2="480"
          stroke="#d1d5db"
          strokeWidth="0.2"
          opacity="0.15"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.02, 0.2, 0.02]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 22 }}
        />
        <motion.line
          x1="280" y1="120" x2="640" y2="520"
          stroke="#d1d5db"
          strokeWidth="0.2"
          opacity="0.15"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.02, 0.2, 0.02]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 23.5 }}
        />
        <motion.line
          x1="450" y1="80" x2="800" y2="480"
          stroke="#d1d5db"
          strokeWidth="0.2"
          opacity="0.15"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.02, 0.2, 0.02]
          }}
          transition={{ duration: 27, repeat: Infinity, ease: "easeInOut", delay: 25 }}
        />
        <motion.line
          x1="620" y1="140" x2="100" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.2"
          opacity="0.15"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.02, 0.2, 0.02]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 26.5 }}
        />
        <motion.line
          x1="780" y1="200" x2="280" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.2"
          opacity="0.15"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.02, 0.2, 0.02]
          }}
          transition={{ duration: 29, repeat: Infinity, ease: "easeInOut", delay: 28 }}
        />
        <motion.line
          x1="920" y1="160" x2="460" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.2"
          opacity="0.15"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.02, 0.2, 0.02]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 29.5 }}
        />
        
        {/* Bottom section additional connections */}
        <motion.line
          x1="150" y1="480" x2="100" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
        <motion.line
          x1="320" y1="520" x2="280" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 9.5 }}
        />
        <motion.line
          x1="480" y1="480" x2="460" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 11 }}
        />
        <motion.line
          x1="640" y1="520" x2="620" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 12.5 }}
        />
        <motion.line
          x1="800" y1="480" x2="780" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.4"
          opacity="0.25"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 14 }}
        />
        
        {/* Ultra-long diagonal connections */}
        <motion.line
          x1="80" y1="320" x2="620" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.15"
          opacity="0.1"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.01, 0.15, 0.01]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 31 }}
        />
        <motion.line
          x1="220" y1="280" x2="780" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.15"
          opacity="0.1"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.01, 0.15, 0.01]
          }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", delay: 32.5 }}
        />
        <motion.line
          x1="380" y1="350" x2="920" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.15"
          opacity="0.1"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.01, 0.15, 0.01]
          }}
          transition={{ duration: 37, repeat: Infinity, ease: "easeInOut", delay: 34 }}
        />
        <motion.line
          x1="520" y1="320" x2="100" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.15"
          opacity="0.1"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.01, 0.15, 0.01]
          }}
          transition={{ duration: 38, repeat: Infinity, ease: "easeInOut", delay: 35.5 }}
        />
        <motion.line
          x1="680" y1="380" x2="280" y2="720"
          stroke="#d1d5db"
          strokeWidth="0.15"
          opacity="0.1"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.01, 0.15, 0.01]
          }}
          transition={{ duration: 39, repeat: Infinity, ease: "easeInOut", delay: 37 }}
        />
        <motion.line
          x1="820" y1="340" x2="460" y2="680"
          stroke="#d1d5db"
          strokeWidth="0.15"
          opacity="0.1"
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.01, 0.15, 0.01]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 38.5 }}
        />
      </svg>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <ImageWithFallback
            src={logoImage}
            alt="Peter Unsworth LLC Logo"
            className="w-20 h-20"
          />
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 text-white text-sm mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-vibrant-teal animate-color-shift" />
            Available to Chat
            <SparklesIcon className="w-4 h-4 text-vibrant-orange animate-color-shift" />
          </motion.div>
          
          <div className="p-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold mb-4">
            Peter Unsworth
          </h1>
          <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
              Technical Strategy & Consulting • Talent Recruitment<br />Digital Solutions
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Bridging the gap between business requirements and technical excellence. 
              I help organizations scale through strategic consulting and connect them 
              with top-tier talent across onshore, nearshore, and offshore markets.
          </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={onContactClick}
                className="px-8 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-vibrant-teal hover:to-vibrant-cyan text-white border-0 transition-all duration-300 cursor-pointer"
              >
                <MailIcon className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open('https://www.linkedin.com/in/peterunsworth/', '_blank')}
                className="px-8 border-2 border-slate-300 hover:border-vibrant-purple hover:text-vibrant-purple transition-all duration-300 cursor-pointer"
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating action indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-vibrant-orange to-vibrant-teal flex items-center justify-center animate-vibrant-glow">
            <RocketIcon className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}