import Image from 'next/image';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, string> = {
  // Frontend
  "JavaScript": "/icons/javascript.svg",
  "TypeScript": "/icons/typescript.svg",
  "React": "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  "HTML/CSS": "/icons/html5.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  "Vue.js": "/icons/vue.svg",
  "Angular": "/icons/angular.svg",
  "Redux": "/icons/redux.svg",
  "Sass": "/icons/sass.svg",
  
  // Backend
  "Node.js": "/icons/nodejs.svg",
  "Express": "/icons/express.svg",
  "MongoDB": "/icons/mongodb.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "GraphQL": "/icons/graphql.svg",
  "MySQL": "/icons/mysql.svg",
  "Firebase": "/icons/firebase.svg",
  "Python": "/icons/python.svg",
  "Django": "/icons/django.svg",
  "Flask": "/icons/flask.svg",
  
  // Other
  "Docker": "/icons/docker.svg",
  "Git": "/icons/git.svg",
  "AWS": "/icons/aws.svg",
  "CI/CD": "/icons/cicd.svg",
  "TensorFlow": "/icons/tensorflow.svg",
  "NLP": "/icons/nlp.svg",
  "OpenAI API": "/icons/openai.svg",
  "Stripe API": "/icons/stripe.svg",
};

export default function TechIcon({ name, size = 24, className = "" }: TechIconProps) {
  const iconPath = iconMap[name] || "/icons/code.svg"; // Fallback icon
  
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <Image 
          src={iconPath} 
          alt={name} 
          width={size} 
          height={size}
          className="object-contain"
        />
      </div>
    </div>
  );
}
