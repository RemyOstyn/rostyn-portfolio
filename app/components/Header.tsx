"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-600">Dev</span>Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="#about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-blue-600 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
