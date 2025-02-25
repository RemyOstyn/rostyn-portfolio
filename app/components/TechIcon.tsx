import { IconType } from 'react-icons';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5,
  SiTailwindcss, SiVuedotjs, SiAngular, SiRedux, SiSass,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql,
  SiMysql, SiFirebase, SiPython, SiDjango, SiFlask,
  SiDocker, SiGit, SiAmazon, SiGithubactions, SiTensorflow,
  SiOpenai, SiStripe, SiSupabase, SiFastapi, SiExpo, SiFramer, SiLangchain
} from 'react-icons/si';
import { FaCode, FaBrain, FaMobileAlt, FaReact } from 'react-icons/fa';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, IconType> = {
  // Frontend
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "HTML/CSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Vue.js": SiVuedotjs,
  "Angular": SiAngular,
  "Redux": SiRedux,
  "Sass": SiSass,
  
  // Backend
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "GraphQL": SiGraphql,
  "MySQL": SiMysql,
  "Firebase": SiFirebase,
  "Python": SiPython,
  "Django": SiDjango,
  "Flask": SiFlask,
  "FastAPI": SiFastapi,
  "Supabase": SiSupabase,
  
  // Mobile
  "React Native": FaReact,
  "Expo": SiExpo,
  "Offline-First": FaMobileAlt,
  
  // Other
  "Docker": SiDocker,
  "Git": SiGit,
  "AWS": SiAmazon,
  "CI/CD": SiGithubactions,
  "TensorFlow": SiTensorflow,
  "NLP": FaBrain,
  "OpenAI API": SiOpenai,
  "Stripe API": SiStripe,
  "LangChain": SiLangchain,
  "Framer Motion": SiFramer,
};

export default function TechIcon({ name, size = 24, className = "" }: TechIconProps) {
  const Icon = iconMap[name] || FaCode; // Fallback icon
  
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Icon size={size} className="text-blue-600 dark:text-blue-400" />
    </div>
  );
}
