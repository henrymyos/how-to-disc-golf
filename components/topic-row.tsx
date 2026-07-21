"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { accent } from "./accents";

export function TopicRow({
  facetSlug,
  topicSlug,
  title,
  tagline,
  accentName,
  keys,
  num,
}: {
  facetSlug: string;
  topicSlug: string;
  title: string;
  tagline: string;
  accentName: string;
  keys: string[];
  num?: string;
}) {
  const { countDone } = useProgress();
  const a = accent(accentName);
  const done = countDone(keys);
  const pct = keys.length === 0 ? 0 : Math.round((done / keys.length) * 100);

  return (
    <Link
      href={`/${facetSlug}/${topicSlug}`}
      className={`block rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition dark:border-zinc-800 dark:bg-zinc-900 ${a.cardHover}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-semibold">
            {num && (
              <span className="mr-2 font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
                {num}
              </span>
            )}
            {title}
          </h3>
          <p className="mt-0.5 truncate text-sm text-zinc-600 dark:text-zinc-400">{tagline}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ${
            done === keys.length && keys.length > 0
              ? a.chip
              : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          {done}/{keys.length}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className={`h-full rounded-full ${a.bar} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </Link>
  );
}
