export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    longDescription: "This portfolio website showcases my projects and skills as a developer. It features a clean, responsive design with smooth animations and a dark/light mode toggle.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/portfolio.jpg",
    screenshots: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    featured: true,
  },
  {
    id: "narator-ai",
    title: "Narator.ai",
    description: "AI-powered platform for writing books and video scripts",
    longDescription: "Developed an innovative web application that leverages AI to help users write books and video scripts. The platform uses a system of four specialized AI agents working together: a writing framework agent, an outline agent, a paragraph generator, and a critique agent to produce high-quality content.",
    technologies: ["Next.js", "Supabase", "FastAPI", "LangChain", "OpenAI API", "TypeScript"],
    imageUrl: "/images/narator.jpg",
    screenshots: ["/images/narator-ai-1.jpg", "/images/narator-ai-2.jpg"],
    githubUrl: "https://github.com/yourusername/narator-ai",
    liveUrl: "https://narator.ai",
    featured: true,
  },
  {
    id: "ai-assistant",
    title: "AI Writing Assistant",
    description: "An AI-powered writing tool that helps improve content quality",
    longDescription: "Developed an AI writing assistant that analyzes text for grammar, style, and readability. The tool provides suggestions for improvements and can rewrite paragraphs to match a desired tone.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "NLP", "OpenAI API"],
    imageUrl: "/images/ai-assistant.jpg",
    githubUrl: "https://github.com/yourusername/ai-assistant",
    featured: false,
  },
];
