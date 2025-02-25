import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectDisplay from "@/app/components/ProjectDisplay";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
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
