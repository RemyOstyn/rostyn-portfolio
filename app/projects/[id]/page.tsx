import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { projects } from "../../data/projects";
import ProjectDisplay from "@/app/components/ProjectDisplay";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  
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

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20 pb-16">
      <ProjectDisplay project={project} />
    </main>
  );
}
