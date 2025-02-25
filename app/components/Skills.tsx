"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechIcon from "./TechIcon";

type SkillCategory = "frontend" | "backend" | "other";
type CategoryId = SkillCategory | "all";

interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  description?: string;
}

interface CategoryTab {
  id: CategoryId;
  label: string;
}

const skills: Skill[] = [
  { 
    name: "TypeScript", 
    level: 90, 
    category: "frontend",
    description: "Strong TypeScript skills with focus on type safety and scalable application architecture for web and mobile projects."
  },
  { 
    name: "React", 
    level: 95, 
    category: "frontend",
    description: "Advanced React development including hooks, context API, and performance optimization for complex applications."
  },
  { 
    name: "Next.js", 
    level: 90, 
    category: "frontend",
    description: "Building SEO-friendly, server-rendered React applications with optimized performance and modern features."
  },
  { 
    name: "Tailwind CSS", 
    level: 90, 
    category: "frontend",
    description: "Rapid UI development with utility-first approach and custom design systems for responsive interfaces."
  },
  { 
    name: "React Native", 
    level: 85, 
    category: "frontend",
    description: "Developing cross-platform mobile applications with native performance using React paradigms."
  },
  { 
    name: "Expo", 
    level: 85, 
    category: "frontend",
    description: "Streamlining React Native development with powerful tools and services for mobile app creation and deployment."
  },
  { 
    name: "Supabase", 
    level: 85, 
    category: "backend",
    description: "Building applications with this open-source Firebase alternative, leveraging PostgreSQL, authentication, and storage."
  },
  { 
    name: "FastAPI", 
    level: 80, 
    category: "backend",
    description: "Creating high-performance Python APIs with automatic interactive documentation and data validation."
  },
  { 
    name: "LangChain", 
    level: 80, 
    category: "backend",
    description: "Developing AI applications by chaining together large language models with custom logic and external data sources."
  },
  { 
    name: "OpenAI API", 
    level: 85, 
    category: "backend",
    description: "Integrating advanced AI capabilities into applications using OpenAI's powerful language models."
  },
  { 
    name: "PostgreSQL", 
    level: 85, 
    category: "backend",
    description: "Designing and optimizing relational databases for complex data requirements and high performance."
  },
  { 
    name: "Node.js", 
    level: 80, 
    category: "backend",
    description: "Building scalable server-side applications and RESTful APIs with JavaScript runtime."
  },
  { 
    name: "Offline-First", 
    level: 85, 
    category: "other",
    description: "Designing applications that work seamlessly without internet connectivity and sync when connection is restored."
  },
  { 
    name: "Docker", 
    level: 80, 
    category: "other",
    description: "Containerizing applications for consistent development and deployment environments across platforms."
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Detect when the page is scrolling
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      setHoveredSkill(null);
      
      // Clear any existing timer
      clearTimeout(scrollTimer);
      
      // Set a timer to detect when scrolling stops
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories: CategoryTab[] = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend & Mobile" },
    { id: "backend", label: "Backend & AI" },
    { id: "other", label: "DevOps & Tools" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've mastered a diverse range of technologies to deliver exceptional digital experiences.
            Hover over each skill to learn more about my expertise.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group pointer-events-auto"
                onMouseEnter={() => {
                  if (!isScrolling) {
                    setHoveredSkill(skill.name);
                  }
                }}
                onMouseLeave={() => {
                  setHoveredSkill(null);
                }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <TechIcon name={skill.name} size={32} className="mr-3" />
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                        <span className="font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                    
                    {/* Description with fade-in effect */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-gray-600 dark:text-gray-300 overflow-hidden"
                        >
                          {skill.description}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Skill Connections Visualization */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">My Technology Ecosystem</h3>
          <div className="relative h-64 md:h-80 bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500 text-sm">Interactive skill visualization coming soon</p>
            </div> */}
            {/* This is a placeholder for a future interactive visualization */}
            {/* <div className="absolute inset-0 opacity-10 bg-[url('/patterns/tech-pattern.svg')]"></div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
