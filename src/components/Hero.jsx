import React, { useState, useEffect } from 'react';
import Particles from './ui/Particles';
import { motion } from 'framer-motion';
import SplitText from './ui/SplitText';
import Magnet from './ui/Magnet'


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAnimationComplete = () => {
    console.log('Text animation completed!');
  };

  return (
    <div style={{ width: '100%', height: '75vh', position: 'relative', overflow: 'hidden' }}>
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
        left: '5%',
        transform: 'translate(0, -50%)',
        zIndex: 10,
        textAlign: 'left',
        width: '90%',
        maxWidth: '700px'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: '900',
            letterSpacing: '0.1em',
            margin: '0 0 1.5rem',
            color: '#ffffff',
            textTransform: 'uppercase',
            fontFamily: '"Orbitron", sans-serif',
            filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))',
            lineHeight: '1.1',
          }}>
            <SplitText
              text="Redefining"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="Expectations"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
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
            marginLeft: 0
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
        <Magnet padding={50} disabled={false} magnetStrength={80} className="magnet" style={{ display: 'flex', gap: '1.5rem' }}>
          <a href='#' className='text-white text-2xl border-white rounded-xl px-4 py-4 font-bold border-2'>Contact me now!</a>
        </Magnet>

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
  );
};

export default Hero;