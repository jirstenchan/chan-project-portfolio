import Link from "next/link";
import { readProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await readProjects();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-black">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-black ">Projects</h1>
        <Link href="/" className="text-sm underline">
          Home
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="text-neutral-600">No projects yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />
              ) : (
                <div className="flex h-52 items-center justify-center bg-neutral-100 text-sm text-neutral-500">
                  No image
                </div>
              )}

              <div className="p-4">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <span className="text-sm text-neutral-500">
                    {project.year}
                  </span>
                </div>
                <p className="line-clamp-3 text-sm text-neutral-700">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
