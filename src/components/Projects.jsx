import React from 'react';
import { motion } from 'framer-motion';
import SplitText from './ui/SplitText';

const Projects = () => {
  const projects = [
    {
      title: "Lb Hair Design",
      description: "A minimalist hair salon website is clean, simple, and elegant, emphasizing essential info with a sleek design.",
      image: "https://arthalimi.netlify.app/lb.png",
      link: "#"
    },
    {
      title: "ZahlX",
      description: "AI powered business management system that revolutionizes how companies handle their operations.",
      image: "https://arthalimi.netlify.app/lms.png",
      link: "#"
    },
    {
      title: "Zyra Konsulente Vizioni",
      description: "Professional consulting firm website delivering expert guidance and strategic solutions.",
      image: "https://arthalimi.netlify.app/vizioni.png",
      link: "#"
    },
    {
      title: "Arsa Gipsergeschaft",
      description: "Specialized plastering company showcasing expert craftsmanship and professional building services.",
      image: "https://arthalimi.netlify.app/arsa.png",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-black relative">
      <div className="flex flex-col lg:flex-row">
        {/* Left sticky section */}
        <div className="w-full lg:w-[40%] min-h-screen lg:h-screen lg:sticky top-0 
            flex items-center px-6 lg:px-12 py-12 lg:py-0">
          <div className="max-w-xl space-y-8 w-full relative z-50">
            {/* Title with SplitText */}
            <div className="relative">
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-white to-white/50 rounded-full" />
              
              <SplitText
                text="Featured"
                delay={100}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                textAlign="left"
                className="text-6xl lg:text-[150px] text-white mb-2 leading-none tracking-tighter font-black drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            />
            <SplitText
                text="Projects"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                textAlign="left"
                className="text-6xl lg:text-[150px] text-white leading-none tracking-tighter font-black drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            />
            </div>
          </div>
        </div>

        {/* Right scrollable section */}
        <div className="w-full lg:w-[60%] py-12 lg:py-24 px-4 lg:px-8">
          <div className="space-y-24 max-w-3xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div 
                  className="relative"
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="aspect-[16/9] max-h-[400px] w-full relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700
                        filter brightness-90 group-hover:brightness-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <motion.div 
                    className="mt-6 relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20"
                      >
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-2xl font-bold text-white tracking-wider uppercase"
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-base text-white/80 mb-6 leading-relaxed max-w-2xl"
                    >
                      {project.description}
                    </motion.p>

                    <motion.a
                      href={project.link}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="inline-flex items-center px-5 py-2.5 text-sm text-white 
                        border border-white/20 rounded-lg  font-medium tracking-wide
                        transition-all duration-300 hover:bg-white hover:text-black uppercase
                        group/button"
                    >
                      <span>View Project</span>
                      <svg 
                        className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/button:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Refined glow effect */}
                <motion.div 
                  className="absolute -inset-x-4 -inset-y-4 z-0 opacity-0 bg-gradient-radial 
                            from-white/5 via-white/0 to-transparent blur-2xl transform transition-all 
                            duration-700 group-hover:opacity-100 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;