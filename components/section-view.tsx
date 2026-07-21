"use client";

import type { Section } from "@/lib/content/types";
import { DEPTH_LABELS, youtubeSearchUrl } from "@/lib/content/types";
import { useProgress } from "@/lib/progress";
import { accent } from "./accents";

export function SectionView({
  section,
  sectionKey,
  accentName,
}: {
  section: Section;
  sectionKey: string;
  accentName: string;
}) {
  const { done } = useProgress();
  const a = accent(accentName);
  const complete = done.has(sectionKey);

  return (
    <section
      className={`rounded-2xl border bg-white p-6 shadow-sm transition dark:bg-zinc-900 ${
        complete
          ? "border-zinc-300 opacity-80 dark:border-zinc-700"
          : "border-zinc-200 dark:border-zinc-800"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${a.chip}`}>
          {DEPTH_LABELS[section.depth]}
        </span>
        <h2 className="text-lg font-bold">{section.title}</h2>
        {complete && <span className={`text-sm font-semibold ${a.text}`}>✓</span>}
      </div>

      <div className="mt-5 space-y-4">
        {section.body.map((p, i) => (
          <p key={i} className="text-[1.02rem] leading-7 text-zinc-700 dark:text-zinc-300">
            {p}
          </p>
        ))}
      </div>

      {section.bullets && (
        <ul className="mt-5 space-y-3.5">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 leading-7 text-zinc-700 dark:text-zinc-300">
              <span className={`mt-0.5 select-none font-bold ${a.text}`}>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {section.points && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.points.map((pt) => (
            <li
              key={pt.title}
              className="rounded-xl bg-zinc-50 p-3.5 text-sm dark:bg-zinc-800/60"
            >
              <span className={`font-semibold ${a.text}`}>{pt.title}.</span>{" "}
              <span className="text-zinc-600 dark:text-zinc-400">{pt.text}</span>
            </li>
          ))}
        </ul>
      )}

      {section.drills && (
        <div className="mt-6 rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
          <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            🏋️ Drills
          </h3>
          <ul className="mt-2 space-y-2">
            {section.drills.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className={a.text}>▸</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.videos && (
        <div className="mt-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            🎬 Watch
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {section.videos.map((v) => (
              <a
                key={v.query}
                href={youtubeSearchUrl(v.query)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-zinc-200 px-3.5 py-2 text-sm transition hover:border-red-400 hover:bg-red-50 dark:border-zinc-700 dark:hover:border-red-700 dark:hover:bg-red-950/30"
              >
                <span className="text-red-500">▶</span>
                <span>
                  <span className="font-medium">{v.label}</span>
                  <span className="ml-1.5 text-xs text-zinc-500">{v.source}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
