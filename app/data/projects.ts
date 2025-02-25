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
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with payment processing",
    longDescription: "Built a complete e-commerce platform with product catalog, shopping cart, user authentication, and Stripe payment integration. The application features a responsive design and optimized performance.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redux"],
    imageUrl: "/images/ecommerce.jpg",
    screenshots: ["/images/ecommerce-1.jpg", "/images/ecommerce-2.jpg"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://yourecommerce.com",
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
