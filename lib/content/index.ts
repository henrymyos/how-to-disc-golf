import type { Facet } from "./types";
import { gettingStarted } from "./getting-started";
import { discsAndGear } from "./discs-and-gear";
import { throwing } from "./throwing";
import { shortGame } from "./short-game";
import { strategy } from "./strategy";
import { rulesAndCompetition } from "./rules-and-competition";
import { practiceAndMental } from "./practice-and-mental";

export * from "./types";

export const FACETS: Facet[] = [
  gettingStarted,
  discsAndGear,
  throwing,
  shortGame,
  strategy,
  rulesAndCompetition,
  practiceAndMental,
];

export function getFacet(slug: string): Facet | undefined {
  return FACETS.find((f) => f.slug === slug);
}

export function getTopic(facetSlug: string, topicSlug: string) {
  const facet = getFacet(facetSlug);
  const topic = facet?.topics.find((t) => t.slug === topicSlug);
  return facet && topic ? { facet, topic } : undefined;
}

/** All completion keys for a facet (facet/topic/section) */
export function facetKeys(facet: Facet): string[] {
  return facet.topics.flatMap((t) =>
    t.sections.map((s) => `${facet.slug}/${t.slug}/${s.id}`)
  );
}

/** All completion keys for a single topic */
export function topicKeys(facet: Facet, topicSlug: string): string[] {
  const topic = facet.topics.find((t) => t.slug === topicSlug);
  if (!topic) return [];
  return topic.sections.map((s) => `${facet.slug}/${topic.slug}/${s.id}`);
}

export function allKeys(): string[] {
  return FACETS.flatMap(facetKeys);
}
