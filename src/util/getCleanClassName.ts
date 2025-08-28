import { stegaClean } from "@sanity/client/stega";

export function getCleanClassName(className: string) {
  return stegaClean(className);
}
