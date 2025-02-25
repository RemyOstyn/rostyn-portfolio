import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "../../data/projects";
import ProjectDisplay from "@/app/components/ProjectDisplay";

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
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

export default function ProjectPage({ params }: Props) {
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
