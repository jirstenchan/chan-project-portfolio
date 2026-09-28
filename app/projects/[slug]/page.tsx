import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchProject } from "../../../lib/api";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  let project;
  try {
    project = await fetchProject(slug);
  } catch (e) {
    if (e instanceof Error && e.message === "404") notFound();
    throw e;
  }

  return (
    <main className="px-16 py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
        <ol className="flex items-center gap-2">
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ].map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {index > 0 && <span>/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 text-neutral-500">{project.year}</p>
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={960}
          height={540}
          className="mt-6 h-80 w-auto rounded border object-contain"
        />
      )}
      <p className="mt-6 text-xl">{project.summary}</p>
    </main>
  );
}
