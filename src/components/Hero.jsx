import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TextHoverEffect } from './ui/text-hover-effect';
import { WavyBackground } from './ui/wavy-background';

const Hero = () => {
  const canvasRef = useRef(null);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.75; 
    
    // Rest of the canvas code remains unchanged
    // ...
  }, []);

  return (
    <section id='hero' className="relative h-[75vh] overflow-hidden bg-black">
      {/* Animated particles background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>

      {/* Wavy background with red accents */}
      <WavyBackground
        colors={[
          "#c01e1e",  // Red
          "#a30f0f",  // Darker red
          "#e82c2c",  // Brighter red
          "#8b0000",  // Dark red
          "#d13030",  // Medium red
        ]}
        waveWidth={40}
        backgroundFill="black"
        blur={12}
        speed="slow"
        waveOpacity={0.2}
        containerClassName="h-[75vh]"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-1 md:mb-2" // Even smaller margin to allow for bigger text
          >
            <p className="text-red-600 font-semibold text-lg md:text-xl tracking-wider uppercase">
              Exceptional Luxury Automotive Experience
            </p>
          </motion.div>
          
          {/* Larger header with increased height */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-4 md:mb-6 h-56 lg:h-60 relative" // Increased height significantly
          >
            <TextHoverEffect 
              text="AUTO ART"
              alwaysAnimate={true} // New prop to enable constant animation
              animationSpeed="slow" // New prop to control animation speed
              gradientColors={{
                stop1: "var(--red-500)",
                stop2: "var(--red-600)",
                stop3: "var(--red-700)",
                stop4: "var(--red-800)",
                stop5: "var(--red-900)"
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 mb-8" // Reduced margins to fit larger text
          >
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Discover the pinnacle of automotive excellence with our curated collection
              of the world's most prestigious vehicles.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
          >
            <button className="bg-gradient-to-r from-red-700 to-red-900 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-900/30">
              Explore Collection
            </button>
            <button className="border border-red-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-900/20">
              Book a Viewing
            </button>
          </motion.div>
        </div>

        {/* Featured brands - with gradient hover effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-16 w-full"
        >
          <div className="flex justify-center items-center gap-10 sm:gap-16 md:gap-24">
            <div className="h-10">
              <TextHoverEffect 
                text="FERRARI" 
                className="w-28"
              />
            </div>
            <div className="h-10">
              <TextHoverEffect 
                text="LAMBORGHINI" 
                className="w-40"
              />
            </div>
            <div className="h-10">
              <TextHoverEffect 
                text="ROLLS ROYCE" 
                className="w-36"
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;