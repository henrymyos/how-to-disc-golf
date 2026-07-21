"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { accent } from "./accents";
import { ProgressRing } from "./progress-ring";

export function FacetCard({
  slug,
  title,
  emoji,
  accentName,
  summary,
  topicCount,
  keys,
}: {
  slug: string;
  title: string;
  emoji: string;
  accentName: string;
  summary: string;
  topicCount: number;
  keys: string[];
}) {
  const { countDone } = useProgress();
  const a = accent(accentName);
  const done = countDone(keys);

  return (
    <Link
      href={`/${slug}`}
      className={`group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition dark:border-zinc-800 dark:bg-zinc-900 ${a.cardHover}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-3xl">{emoji}</div>
          <h2 className={`mt-2 text-lg font-bold ${a.text}`}>{title}</h2>
        </div>
        <ProgressRing done={done} total={keys.length} colorHex={a.ringHex} />
      </div>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{summary}</p>
      <div className="mt-auto flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
        <span>
          {topicCount} topics · {keys.length} lessons
        </span>
        <span className="font-medium opacity-0 transition group-hover:opacity-100">
          Dive in →
        </span>
      </div>
    </Link>
  );
}
