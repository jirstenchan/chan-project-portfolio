import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

async function seed() {
  const { db } = await import("./index");
  const { projects } = await import("./schema");
  await db.insert(projects).values([]).onConflictDoNothing();
  console.log("Seeded projects");
  process.exit(0);
}

seed();
