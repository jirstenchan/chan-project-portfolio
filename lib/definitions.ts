import "server-only";
import { z } from "zod";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { projects } from "@/db/schema";

export const ProjectPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: "The title needs at least 3 characters." }),
  year: z.coerce
    .number()
    .int({ message: "Year must be a whole number." })
    .min(2000, { message: "Year must be 2000 or later." })
    .max(2100, { message: "Year must be 2100 or earlier." }),
  summary: z
    .string()
    .trim()
    .min(10, { message: "The description needs at least 10 characters." }),
  image: z
    .instanceof(File, { message: "Please upload an image file." })
    .refine((f) => ["image/png", "image/jpeg", "image/webp"].includes(f.type), {
      message: "Use a PNG, JPG, or WEBP image.",
    })
    .refine((f) => f.size <= 10 * 1024 * 1024, {
      message: "Image must be 10MB or smaller.",
    }),
});

export type Project = {
  slug: string;
  title: string;
  year: number;
  summary: string;
  imageUrl: string | null;
};
export type Stats = { total: number; newest: number; oldest: number };

const columns = {
  slug: projects.slug,
  title: projects.title,
  year: projects.year,
  summary: projects.summary,
  imageUrl: projects.imageUrl,
};

export async function readProjects(): Promise<Project[]> {
  return db.select(columns).from(projects).orderBy(desc(projects.createdAt));
}

export async function readProject(slug: string): Promise<Project | null> {
  const [row] = await db
    .select(columns)
    .from(projects)
    .where(eq(projects.slug, slug));
  return row ?? null;
}

export async function readStats(): Promise<Stats> {
  const years = (await db.select({ year: projects.year }).from(projects)).map(
    (p) => p.year,
  );
  return {
    total: years.length,
    newest: years.length ? Math.max(...years) : 0,
    oldest: years.length ? Math.min(...years) : 0,
  };
}
