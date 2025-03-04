import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel = () => {
  // Update the testimonials data with Albanian translations
  const testimonials = [
    {
      id: 1,
      name: "Aleksandër Gashi",
      position: "CEO, Investimet Gashi",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=80",
      quote: "Procesi i blerjes së veturës ishte i përkryer. Ata gjetën një Ferrari të edicionit të limituar që e kisha kërkuar globalisht. Vëmendja e tyre ndaj detajeve dhe shërbimi ndaj klientit është i pakrahasueshëm në hapësirën e automjeteve luksoze.",
      rating: 5,
      car: "Ferrari LaFerrari Aperta"
    },
    {
      id: 2,
      name: "Elena Berisha",
      position: "Dizajnere Mode",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=80",
      quote: "Kur zgjedh një veturë të re, estetika dhe performanca duhet të jenë në harmoni të përkryer. Ekipi i tyre e kuptoi menjëherë vizionin tim dhe më prezantoi me opsione që i tejkaluan pritjet e mia.",
      rating: 5,
      car: "Bentley Continental GT"
    },
    {
      id: 3,
      name: "Dritan Krasniqi",
      position: "Sipërmarrës në Teknologji",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      quote: "Si dikush që vlerëson teknologjinë moderne dhe përsosmërinë automobilistike, u impresionova nga njohuritë e tyre të thella dhe përvoja e personalizuar që më ofruan gjatë personalizimit të Porsche-it tim.",
      rating: 5,
      car: "Porsche 911 GT3 RS"
    },
    {
      id: 4,
      name: "Valbona Hoxha",
      position: "Pronare e Galerisë së Artit",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=80",
      quote: "Salloni ekspozues vetë është një kryevepër artistike. Mënyra se si prezantojnë çdo veturë si një vepër arti rezonoi thellë me mua. Aston Martin-i im nuk është thjesht një veturë, është një deklaratë stili.",
      rating: 5,
      car: "Aston Martin DBS Superleggera"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay logic
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-red-600' : 'text-gray-400'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Dot indicators
  const renderDotIndicators = () => {
    return testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => {
          setDirection(index > currentIndex ? 1 : -1);
          setCurrentIndex(index);
        }}
        className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
          index === currentIndex ? 'bg-red-600 w-6' : 'bg-gray-400'
        }`}
        aria-label={`Go to testimonial ${index + 1}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
        {/* Nardo Gray gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950"></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-red-600/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-neutral-700/30 blur-3xl"></div>
        {/* Add subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#4a4a4a_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover what our distinguished clients have to say about their experience with our exceptional service and extraordinary vehicles.
          </p>
        </motion.div>
        
        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial slider */}
          <div className="relative h-[500px] md:h-[400px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={testimonials[currentIndex].id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 backdrop-blur-lg rounded-2xl p-6 md:p-10 
    shadow-xl shadow-red-900/5 border border-neutral-700/50 hover:border-neutral-600/50 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Client image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-red-700/20 shadow-lg shadow-red-900/10">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-3">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      
                      <blockquote className="text-gray-200 text-lg md:text-xl italic mb-6 leading-relaxed">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      
                      <div className="mt-auto">
                        <div className="flex flex-col items-center md:items-start">
                          <h4 className="text-white font-semibold text-lg">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {testimonials[currentIndex].position}
                          </p>
                          <div className="mt-3 text-red-500 text-sm font-medium">
                            <span className="inline-block mr-2">
                              <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 10-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                              </svg>
                            </span>
                            Purchased: {testimonials[currentIndex].car}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="bg-red-900/30 hover:bg-red-800/40 text-white rounded-full p-3 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <div className="flex items-center">
              {renderDotIndicators()}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="bg-red-900/30 hover:bg-red-800/40 text-white rounded-full p-3 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;