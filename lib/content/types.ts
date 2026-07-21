export type VideoLink = {
  /** Display label, e.g. "Gannon Buhr breaks down his backhand" */
  label: string;
  /** Who the video features or which channel it comes from */
  source: string;
  /** YouTube search query — resolves to current, working results */
  query: string;
};

export type Section = {
  /** Unique within its topic */
  id: string;
  title: string;
  /** 1 = The Basics, 2 = Going Deeper, 3 = In Depth */
  depth: 1 | 2 | 3;
  body: string[];
  points?: { title: string; text: string }[];
  drills?: string[];
  videos?: VideoLink[];
};

export type Topic = {
  slug: string;
  title: string;
  tagline: string;
  sections: Section[];
};

export type Facet = {
  slug: string;
  title: string;
  emoji: string;
  /** Tailwind-friendly accent, used for cards and rings */
  accent: string;
  summary: string;
  topics: Topic[];
};

export const DEPTH_LABELS: Record<1 | 2 | 3, string> = {
  1: "The Basics",
  2: "Going Deeper",
  3: "In Depth",
};

export function youtubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export function sectionKey(facet: string, topic: string, sectionId: string): string {
  return `${facet}/${topic}/${sectionId}`;
}
