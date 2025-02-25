"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Initial check for active section
    checkActiveSection();
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      checkActiveSection();
    };

    function checkActiveSection() {
      const sections = ["home", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      // If at the top of the page, set to home
      if (scrollPosition < 300) {
        setActiveSection("home");
        return;
      }
      
      // Check each section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop - 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "glass shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="relative z-10 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection("home");
          }}
        >
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-sm opacity-70"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg px-3 py-1">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Dev<span className="text-gray-800 dark:text-white">Portfolio</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const sectionId = item.href.substring(1);
                    
                    if (sectionId === "home") {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const element = document.getElementById(sectionId);
                      if (element) {
                        const yOffset = -80; // Adjust for header height
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }
                    setActiveSection(sectionId);
                  }}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
                      layoutId="activeSection"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Theme toggle and resume button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Remy_Ostyn_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden relative z-10 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5">
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block h-0.5 ${mobileMenuOpen ? "w-6" : "w-6"} bg-gray-800 dark:bg-white transition-all duration-300`}
            ></motion.span>
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-4 bg-gray-800 dark:bg-white transition-all duration-300"
            ></motion.span>
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block h-0.5 ${mobileMenuOpen ? "w-6" : "w-5"} bg-gray-800 dark:bg-white transition-all duration-300`}
            ></motion.span>
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass fixed left-0 right-0"
          >
            <div className="container mx-auto px-4 py-4">
              <nav>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 rounded-lg font-medium ${
                          activeSection === item.href.substring(1)
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          const sectionId = item.href.substring(1);
                          
                          if (sectionId === "home") {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else {
                            const element = document.getElementById(sectionId);
                            if (element) {
                              const yOffset = -80; // Adjust for header height
                              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                              window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                          }
                          setActiveSection(sectionId);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Remy_Ostyn_Resume.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
