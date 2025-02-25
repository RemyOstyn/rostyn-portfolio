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
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/portfolio.jpg`,
    screenshots: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/portfolio-1.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/portfolio-2.jpg`
    ],
    // githubUrl: "https://github.com/yourusername/portfolio",
    // liveUrl: "https://yourportfolio.com",
    // featured: true,
  },
  {
    id: "narator-ai",
    title: "Narator.ai",
    description: "AI-powered platform for writing books and video scripts",
    longDescription: "Developed an innovative web application that leverages AI to help users write books and video scripts. The platform uses a system of four specialized AI agents working together: a writing framework agent, an outline agent, a paragraph generator, and a critique agent to produce high-quality content.",
    technologies: ["Next.js", "Supabase", "FastAPI", "LangChain", "OpenAI API", "TypeScript"],
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/narator.jpg`,
    screenshots: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/narator-1.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/narator-2.jpg`
    ],
    // githubUrl: "https://github.com/yourusername/narator-ai",
    // liveUrl: "https://narator.ai",
    // featured: true,
  },
  {
    id: "inspection-app",
    title: "Field Inspection Mobile App",
    description: "Offline-first mobile application for on-site inspections in remote locations",
    longDescription: "Built for an Australian company, this mobile application allows field inspectors to conduct comprehensive on-site inspections without internet connectivity. Inspectors can capture text notes, images, and videos during their work. The app automatically synchronizes all data when internet connectivity is restored. Managers can then review inspections through a web dashboard and generate professional PDF reports with a single click.",
    technologies: ["React Native", "Expo", "Next.js", "Supabase", "TypeScript", "Offline-First"],
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/inspection-app.jpg`,
    screenshots: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/inspection-app-1.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/inspection-app-2.jpg`
    ],
    // githubUrl: "https://github.com/yourusername/inspection-app",
    // liveUrl: "https://inspection-app-demo.com",
    // featured: true,
  },
];
