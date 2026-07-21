"use client";

import Link from "next/link";
import { FACETS, getFacet, sectionKey } from "@/lib/content";
import { useProgress } from "@/lib/progress";
import { accent } from "./accents";

export function FacetOutline({
  facetSlug,
  currentTopic,
  currentSection,
}: {
  facetSlug: string;
  currentTopic?: string;
  currentSection?: string;
}) {
  const facet = getFacet(facetSlug);
  const { done } = useProgress();
  if (!facet) return null;
  const a = accent(facet.accent);
  const fi = FACETS.findIndex((f) => f.slug === facet.slug);

  return (
    <nav aria-label="Section outline" className="text-sm">
      <Link href={`/${facet.slug}`} className={`font-bold ${a.text} hover:underline`}>
        {facet.emoji} {facet.title}
      </Link>
      <div className="mt-3 space-y-4">
        {facet.topics.map((t, ti) => {
          const isCurrentTopic = t.slug === currentTopic;
          return (
            <div key={t.slug}>
              <Link
                href={`/${facet.slug}/${t.slug}`}
                className={`block font-semibold hover:underline ${
                  isCurrentTopic
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                <span className="mr-1.5 tabular-nums">
                  {fi + 1}.{ti + 1}
                </span>
                {t.title}
              </Link>
              <ul className="mt-1.5 space-y-0.5 border-l-2 border-zinc-200 pl-2.5 dark:border-zinc-800">
                {t.sections.map((s) => {
                  const k = sectionKey(facet.slug, t.slug, s.id);
                  const isDone = done.has(k);
                  const isCurrent = isCurrentTopic && s.id === currentSection;
                  return (
                    <li key={s.id}>
                      <Link
                        href={`/${facet.slug}/${t.slug}/${s.id}`}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex items-center gap-2 rounded-lg px-2 py-1 transition ${
                          isCurrent
                            ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                            : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                            isDone
                              ? "bg-emerald-500 text-white"
                              : "border-2 border-zinc-300 text-transparent dark:border-zinc-600"
                          }`}
                        >
                          ✓
                        </span>
                        <span className="truncate">{s.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
