import { sanityClient } from "sanity:client";

const { projectId, dataset, stega } = sanityClient.config();

export function createDataAttribute({
  id,
  type,
  path,
}: { id: string; type: string; path: string }) {
  return JSON.stringify({
    projectId,
    dataset,
    baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
    id,
    type,
    path,
  });
}
