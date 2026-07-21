"use client";

import Link from "next/link";
import { FACETS, sectionKey } from "@/lib/content";
import { DEPTH_LABELS } from "@/lib/content/types";
import { useProgress } from "@/lib/progress";
import { accent } from "./accents";
import { ProgressRing } from "./progress-ring";

export function CurriculumPath() {
  const { done, countDone } = useProgress();

  return (
    <ol>
      {FACETS.map((f, fi) => {
        const a = accent(f.accent);
        const keys = f.topics.flatMap((t) =>
          t.sections.map((s) => sectionKey(f.slug, t.slug, s.id))
        );
        const facetDone = countDone(keys);
        const complete = facetDone === keys.length;
        const last = fi === FACETS.length - 1;

        return (
          <li key={f.slug} className={`relative pl-14 ${last ? "" : "pb-10"}`}>
            {!last && (
              <span
                aria-hidden
                className="absolute bottom-0 left-[19px] top-12 w-0.5 bg-zinc-200 dark:bg-zinc-800"
              />
            )}
            <span
              className={`absolute left-0 top-0.5 flex h-10 w-10 items-center justify-center rounded-full text-base font-black ${
                complete
                  ? a.chip
                  : "border-2 border-zinc-300 bg-white text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
              }`}
            >
              {complete ? "✓" : fi + 1}
            </span>

            <div className="flex items-start justify-between gap-4">
              <Link href={`/${f.slug}`} className="group">
                <h2 className={`text-xl font-bold ${a.text} group-hover:underline`}>
                  {f.emoji} {f.title}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                  {f.summary}
                </p>
              </Link>
              <ProgressRing done={facetDone} total={keys.length} colorHex={a.ringHex} size={48} />
            </div>

            <ol className="mt-4 space-y-2">
              {f.topics.map((t, ti) => {
                const tKeys = t.sections.map((s) => sectionKey(f.slug, t.slug, s.id));
                const tDone = tKeys.reduce((n, k) => n + (done.has(k) ? 1 : 0), 0);
                return (
                  <li
                    key={t.slug}
                    className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <span className="w-8 shrink-0 text-sm font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
                      {fi + 1}.{ti + 1}
                    </span>
                    <Link href={`/${f.slug}/${t.slug}`} className="min-w-0 flex-1 hover:underline">
                      <span className="font-medium">{t.title}</span>
                    </Link>
                    <span className="hidden text-xs text-zinc-400 sm:block dark:text-zinc-500">
                      {tDone}/{t.sections.length}
                    </span>
                    <span className="flex shrink-0 gap-1.5">
                      {t.sections.map((s) => {
                        const k = sectionKey(f.slug, t.slug, s.id);
                        const sDone = done.has(k);
                        return (
                          <Link
                            key={s.id}
                            href={`/${f.slug}/${t.slug}/${s.id}`}
                            title={`${DEPTH_LABELS[s.depth]}: ${s.title}${sDone ? " (completed)" : ""}`}
                            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                              sDone
                                ? a.chip
                                : "border border-zinc-300 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600 dark:border-zinc-700 dark:text-zinc-500 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
                            }`}
                          >
                            {sDone ? "✓" : s.depth}
                          </Link>
                        );
                      })}
                    </span>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
