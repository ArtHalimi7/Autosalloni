import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VehicleSpotlight = ({ autoPlay = true, interval = 10000 }) => {
  // Sample data - replace with your actual data
  const vehicles = [
    {
      id: 1,
      name: "Porsche 911 GT3 RS",
      tagline: "Track Performance, Road Legality",
      description: "The Porsche 911 GT3 RS is the embodiment of motorsport technology transferred to the road. With its naturally-aspirated engine and racing-derived aerodynamics, it delivers uncompromising performance.",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      price: "$225,000",
      specifications: [
        { label: "Engine", value: "4.0L Flat-6" },
        { label: "Power", value: "518 hp" },
        { label: "0-60 mph", value: "3.0 seconds" },
        { label: "Top Speed", value: "184 mph" },
        { label: "Transmission", value: "7-speed PDK" }
      ]
    },
    {
      id: 2,
      name: "Mercedes-AMG GT Black Series",
      tagline: "The Pinnacle of Performance",
      description: "The Mercedes-AMG GT Black Series represents the absolute peak of AMG engineering. With the most powerful AMG V8 series engine of all time and sophisticated aerodynamics, it's built for the racetrack and beyond.",
      image: "https://bringatrailer.com/wp-content/uploads/2022/09/2021_mercedes-benz_amg-gt-black-series_a-04887.jpg",
      price: "$325,000",
      specifications: [
        { label: "Engine", value: "4.0L Biturbo V8" },
        { label: "Power", value: "720 hp" },
        { label: "0-60 mph", value: "3.1 seconds" },
        { label: "Top Speed", value: "202 mph" },
        { label: "Transmission", value: "7-speed DCT" }
      ]
    },
    {
      id: 3,
      name: "Ferrari Roma",
      tagline: "La Nuova Dolce Vita",
      description: "The Ferrari Roma embodies 'La Nuova Dolce Vita' - the contemporary good life. With its refined design, exceptional performance, and focus on driving enjoyment, it's the perfect Ferrari for everyday indulgence.",
      image: "https://cdn.ferrari.com/cms/network/media/img/resize/5dd3c33ff8fc7b0aa9067377-ferrari-roma-design-focus-3?",
      price: "$245,000",
      specifications: [
        { label: "Engine", value: "3.9L Twin-Turbo V8" },
        { label: "Power", value: "612 hp" },
        { label: "0-60 mph", value: "3.3 seconds" },
        { label: "Top Speed", value: "199 mph" },
        { label: "Transmission", value: "8-speed DCT" }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  }, [vehicles.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length);
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(nextSlide, interval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, nextSlide, interval]);

  const currentVehicle = vehicles[currentIndex];

  return (
    <section id="vehicle-spotlight" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center" // Changed from text-center to lg:w-1/2
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">In the Spotlight</h2>
          <p className="text-gray-400 text-lg">
            Exceptional vehicles that represent the height of automotive engineering and design.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel controls */}
          <div className="absolute z-10 top-1/2 -translate-y-1/2 left-4 md:left-8">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-red-900/70 backdrop-blur-sm rounded-full transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute z-10 top-1/2 -translate-y-1/2 right-4 md:right-8">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-red-900/70 backdrop-blur-sm rounded-full transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel content */}
          <div className="rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:grid lg:grid-cols-2 gap-0" // Changed from grid to flex-col for mobile
              >
                {/* Image with gradient */}
                <div className="relative h-[400px] lg:h-[500px] w-full lg:w-[140%] max-w-none mx-auto lg:mx-0">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentVehicle.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={currentVehicle.image} 
                        alt={currentVehicle.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/95" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/90" />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="relative lg:absolute lg:inset-0 lg:flex lg:items-center">
                  <div className="p-6 md:p-12 lg:ml-[55%] xl:ml-[58%] lg:mt-[380px] lg:max-w-lg"> {/* Adjusted ml and mt values */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <p className="text-red-600 font-medium mb-2 uppercase tracking-wider text-center">Featured Vehicle</p>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{currentVehicle.name}</h3>
                      <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">{currentVehicle.tagline}</p>
                      <p className="text-gray-400 mb-6 hidden md:block">{currentVehicle.description}</p>
                      
                      <div className="text-2xl md:text-3xl font-bold text-red-600 mb-6">{currentVehicle.price}</div>
                      
                      {/* Specifications */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-w-[500px]"> {/* Added max-w and reduced gap */}
                        {currentVehicle.specifications.map((spec, index) => (
                          <div key={index} className="text-center bg-neutral-900/50 backdrop-blur-sm p-2 rounded"> {/* Reduced padding */}
                            <p className="text-xs text-neutral-400">{spec.label}</p>
                            <p className="text-sm text-white font-medium">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30">
                          Schedule a Test Drive
                        </button>
                        <button className="border border-red-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-red-900/20">
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-600 w-4" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-300"
              aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSpotlight;