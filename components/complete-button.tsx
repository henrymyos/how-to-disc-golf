"use client";

import { useProgress } from "@/lib/progress";
import { accent } from "./accents";

export function CompleteButton({
  sectionKey,
  accentName,
}: {
  sectionKey: string;
  accentName: string;
}) {
  const { done, toggle } = useProgress();
  const a = accent(accentName);
  const complete = done.has(sectionKey);

  return (
    <button
      onClick={() => toggle(sectionKey)}
      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
        complete
          ? a.chip
          : "border border-zinc-300 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
      }`}
    >
      {complete ? "✓ Completed" : "Mark complete"}
    </button>
  );
}
