import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "../../data/projects";
import ProjectDisplay from "@/app/components/ProjectDisplay";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20 pb-16">
      <ProjectDisplay project={project} />
    </main>
  );
}
