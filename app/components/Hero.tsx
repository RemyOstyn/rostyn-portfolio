"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TechIcon from "./TechIcon";

// Technologies to showcase in the rotating display
const showcaseTechnologies = [
  "React", "Next.js", "TypeScript", "React Native", 
  "Tailwind CSS", "Supabase", "FastAPI", "LangChain"
];

export default function Hero() {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const controls = useAnimation();
  
  // Rotate through technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => 
        prevIndex === showcaseTechnologies.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Animate on scroll
  useEffect(() => {
    let isMounted = true;
    let mounted = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (isMounted && controls && mounted) {
        controls.start({ y: scrollY * 0.1 }).catch(() => {
          // Ignore any animation cancellation errors
        });
      }
    };

    // Ensure component is mounted before starting animations
    const timer = setTimeout(() => {
      mounted = true;
      if (isMounted) {
        handleScroll();
      }
    }, 100);
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      isMounted = false;
      mounted = false;
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5 z-0"></div>
      
      {/* Animated background shapes - increased size and opacity for better visibility */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-40 z-0"
        initial={{ x: 0, y: 0 }}
        whileInView={{ 
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-40 z-0"
        initial={{ x: 0, y: 0 }}
        whileInView={{ 
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Senior Software Engineer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Remy Ostyn</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Crafting digital experiences with <span className="relative">
                <span className="absolute inset-0 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTechIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-600 dark:text-blue-400 font-medium"
                    >
                      {showcaseTechnologies[currentTechIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="invisible">placeholder</span>
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-lg mb-8 max-w-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, efficient, and maintainable solutions to complex problems.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            >
              View My Work
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
          
          {/* Tech stack icons */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-4">
              {showcaseTechnologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <TechIcon name={tech} size={28} />
                </motion.div>
              ))}
            </div>
            
            {/* <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-md mr-2 mb-2">
                <TechIcon name="Offline-First" size={14} className="mr-1" />
                Offline-First
              </span>
              <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-md mr-2 mb-2">
                <TechIcon name="Expo" size={14} className="mr-1" />
                Expo
              </span>
            </div> */}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Profile image with animated border */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Decorative background circle - truly centered on the profile */}
            <motion.div 
              className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Animated border */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Profile image */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
              <Image
                src="/images/profile.jpg"
                alt="Remy Ostyn"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Skill badges - multiple badges positioned around the profile */}
          <motion.div
            className="absolute right-0 md:right-5 top-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 flex items-center z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon name="React" size={20} className="mr-2" />
            <span className="text-sm font-medium">React Expert</span>
          </motion.div>
          
          <motion.div
            className="absolute left-0 md:left-5 bottom-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 flex items-center z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon name="Next.js" size={20} className="mr-2" />
            <span className="text-sm font-medium">Full Stack</span>
          </motion.div>
          
          {/* Additional badges */}
          <motion.div
            className="absolute right-0 md:right-5 bottom-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 flex items-center z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon name="React Native" size={20} className="mr-2" />
            <span className="text-sm font-medium">Mobile Dev</span>
          </motion.div>
          
          <motion.div
            className="absolute left-0 md:left-5 top-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 flex items-center z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon name="Supabase" size={20} className="mr-2" />
            <span className="text-sm font-medium">DB Expert</span>
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 flex items-center z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon name="OpenAI API" size={20} className="mr-2" />
            <span className="text-sm font-medium">AI Engineer</span>
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 flex items-center z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon name="FastAPI" size={20} className="mr-2" />
            <span className="text-sm font-medium">API Builder</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-500 dark:text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
