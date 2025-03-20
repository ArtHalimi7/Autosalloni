import React, { useState, useEffect } from 'react'
import Particles from './ui/Particles';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={400}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      
      <div className="hero-content" style={{
        position: 'absolute',
        top: '50%',
        left: '15%', // Changed from 50% to 15%
        transform: 'translate(0, -50%)', // Removed X translation
        zIndex: 10,
        textAlign: 'left', // Changed from center to left
        width: '90%',
        maxWidth: '700px'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title" style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            margin: '0 0 1.5rem',
            background: 'linear-gradient(45deg, #fff, #aaa, #fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            fontFamily: '"Orbitron", sans-serif',
            textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)',
            lineHeight: '1.1'
          }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            >
              Redefining <br/>
              Expectations
            </motion.span>
          </h1>
        </motion.div>

        <motion.div 
          className="accent-line"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? '80px' : 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            height: '4px',
            background: 'linear-gradient(to right, #fff, transparent)',
            marginBottom: '2rem',
            borderRadius: '10px',
            marginLeft: 0 // Added to align with text
          }}
        />

        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: '#e0e0e0',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            fontFamily: '"Rajdhani", sans-serif',
            letterSpacing: '0.05em',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Where innovation meets excellence. Step into a world where boundaries are meant to be pushed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{ display: 'flex', gap: '1.5rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '0.8rem 2.5rem',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '2px solid white',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              position: 'relative',
              overflow: 'hidden',
              fontFamily: '"Rajdhani", sans-serif',
              backdropFilter: 'blur(4px)'
            }}
            className="cta-button"
          >
            Explore Now
            <span style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '30%',
              height: '100%',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)',
              transform: 'skewX(-20deg)',
              animation: 'shimmer 2s infinite'
            }}></span>
          </motion.button>
          
          <motion.button
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '0.8rem 2.5rem',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)',
              backgroundColor: 'transparent',
              color: 'rgba(255,255,255,0.8)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: '"Rajdhani", sans-serif',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-150%) skewX(-20deg); }
            100% { transform: translateX(400%) skewX(-20deg); }
          }
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap');

          @media (max-width: 768px) {
            .hero-content {
              left: 50% !important;
              transform: translate(-50%, -50%) !important;
              text-align: center !important;
              padding: 0 20px;
            }
            
            .accent-line {
              margin-left: auto !important;
              margin-right: auto !important;
            }
          }

          @media (max-width: 480px) {
            .hero-content {
              width: 95%;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Hero