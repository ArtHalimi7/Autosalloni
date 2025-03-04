import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration = 0,
  className,
  alwaysAnimate = false,
  animationSpeed = "normal",
  gradientColors = {
    stop1: "var(--red-500)",
    stop2: "var(--red-600)",
    stop3: "var(--red-700)",
    stop4: "var(--red-800)",
    stop5: "var(--red-900)",
  }
}) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const autoAnimateRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
 
  // Check if on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle cursor position for hover effect - now works even with alwaysAnimate
  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null && hovered) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, hovered]);

  // Automatic slow animation for non-hover states
  useEffect(() => {
    if ((alwaysAnimate || isMobile) && !hovered) {
      let animateX = 50; // Start from center
      let animateY = 50;
      let angle = 0;
      const radius = 40; // Controls how far the effect moves from center
      
      // Speed control
      const getAnimationSpeed = () => {
        switch(animationSpeed) {
          case "slow": return 0.002;
          case "fast": return 0.01;
          case "normal":
          default: return 0.005;
        }
      };
      
      const speed = getAnimationSpeed();
      
      const animate = () => {
        // Only animate if not being hovered
        if (!hovered) {
          // Create a circular/figure-8 motion path
          angle += speed;
          animateX = 50 + Math.sin(angle) * radius;
          animateY = 50 + Math.sin(angle * 0.7) * (radius * 0.6);
          
          setMaskPosition({
            cx: `${animateX}%`,
            cy: `${animateY}%`,
          });
        }
        
        autoAnimateRef.current = requestAnimationFrame(animate);
      };
      
      autoAnimateRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (autoAnimateRef.current) {
          cancelAnimationFrame(autoAnimateRef.current);
        }
      };
    }
  }, [alwaysAnimate, isMobile, animationSpeed, hovered]);
 
  // Font size calculation - larger text
  const textSize = className?.includes("w-") ? "text-[90px]" : "text-[120px] md:text-[120px]";
 
  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${text.length * 80} 160`}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      onTouchStart={() => setHovered(true)}
      className={`select-none ${className || ""}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Base gradient with slightly more visibility */}
        <linearGradient
          id="baseGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={gradientColors.stop1} stopOpacity="0.4" />
          <stop offset="50%" stopColor={gradientColors.stop3} stopOpacity="0.3" />
          <stop offset="100%" stopColor={gradientColors.stop5} stopOpacity="0.4" />
        </linearGradient>
        
        {/* Hover gradient with more vibrant colors */}
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          {(hovered || isMobile || alwaysAnimate) && (
            <>
              <stop offset="0%" stopColor={gradientColors.stop1} />
              <stop offset="25%" stopColor={gradientColors.stop2} />
              <stop offset="50%" stopColor={gradientColors.stop3} />
              <stop offset="75%" stopColor={gradientColors.stop4} />
              <stop offset="100%" stopColor={gradientColors.stop5} />
            </>
          )}
        </linearGradient>
 
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="35%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      
      {/* Base text with subtle gradient even before hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        className={`font-bold stroke-transparent fill-transparent ${textSize}`}
        style={{ stroke: "url(#baseGradient)", opacity: 0.7 }}
      >
        {text}
      </text>
      
      {/* Outline text for better visibility */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className={`font-bold fill-transparent ${textSize} stroke-neutral-200/20 dark:stroke-neutral-800/20`}
        style={{ opacity: hovered ? 0.7 : 0.3 }}
      >
        {text}
      </text>
      
      {/* Animated stroke for effect */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className={`font-bold fill-transparent ${textSize} stroke-neutral-200/20 dark:stroke-neutral-800/20`}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      
      {/* Hover/touch interactive element */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1"
        mask="url(#textMask)"
        className={`font-bold fill-transparent ${textSize}`}
      >
        {text}
      </text>
    </svg>
  );
};