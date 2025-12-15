import React from "react";
import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-300 dark:to-slate-400 rounded-full opacity-10 dark:opacity-20 blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-r from-gray-600 to-slate-800 dark:from-gray-300 dark:to-slate-200 rounded-full opacity-10 dark:opacity-20 blur-xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-r from-slate-500 to-gray-600 dark:from-slate-400 dark:to-gray-300 rounded-full opacity-10 dark:opacity-20 blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Vibrant accent shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 bg-vibrant-teal rounded-full opacity-5 blur-lg"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-vibrant-orange rounded-full opacity-5 blur-lg"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-2/3 left-1/4 w-12 h-12 bg-vibrant-purple rounded-full opacity-5 blur-lg"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(5, 29, 46, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(5, 29, 46, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-0 dark:opacity-5 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}