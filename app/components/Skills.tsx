"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "other";
}

const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "Docker", level: 75, category: "other" },
  { name: "Git", level: 90, category: "other" },
  { name: "AWS", level: 70, category: "other" },
  { name: "CI/CD", level: 75, category: "other" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend Development"
            skills={skills.filter((skill) => skill.category === "frontend")}
          />
          <SkillCategory
            title="Backend Development"
            skills={skills.filter((skill) => skill.category === "backend")}
          />
          <SkillCategory
            title="Other Skills"
            skills={skills.filter((skill) => skill.category === "other")}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
