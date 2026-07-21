"use client";

import Link from "next/link";
import { DEPTH_LABELS } from "@/lib/content/types";
import { useProgress } from "@/lib/progress";
import { accent } from "./accents";

export function SectionRow({
  href,
  title,
  depth,
  sectionKey,
  accentName,
  preview,
}: {
  href: string;
  title: string;
  depth: 1 | 2 | 3;
  sectionKey: string;
  accentName: string;
  preview: string;
}) {
  const { done } = useProgress();
  const a = accent(accentName);
  const complete = done.has(sectionKey);

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition dark:border-zinc-800 dark:bg-zinc-900 ${a.cardHover}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
          complete
            ? a.chip
            : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500"
        }`}
      >
        {complete ? "✓" : depth}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${a.chip}`}>
            {DEPTH_LABELS[depth]}
          </span>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="mt-1 truncate text-sm text-zinc-500 dark:text-zinc-400">{preview}</p>
      </div>
      <span className="shrink-0 text-zinc-400">→</span>
    </Link>
  );
}
