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
      className={`group flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 text-sm font-semibold transition ${
        complete
          ? a.chip
          : "border border-zinc-300 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
      }`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold transition ${
          complete
            ? "bg-emerald-500 text-white"
            : "border-2 border-zinc-300 text-transparent group-hover:border-zinc-400 dark:border-zinc-600 dark:group-hover:border-zinc-500"
        }`}
      >
        ✓
      </span>
      {complete ? "Completed" : "Mark complete"}
    </button>
  );
}
