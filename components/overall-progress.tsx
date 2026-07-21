"use client";

import { useProgress } from "@/lib/progress";

export function OverallProgress({ keys }: { keys: string[] }) {
  const { countDone, resetAll } = useProgress();
  const done = countDone(keys);
  const pct = keys.length === 0 ? 0 : Math.round((done / keys.length) * 100);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-bold">Your learning progress</h2>
          <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
            {done} of {keys.length} lessons completed
            {pct === 100 ? " — you've read the whole course! 🏆" : ""}
          </p>
        </div>
        <span className="text-2xl font-black tabular-nums">{pct}%</span>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      {done > 0 && (
        <button
          onClick={() => {
            if (window.confirm("Reset all progress? This can't be undone.")) resetAll();
          }}
          className="mt-3 text-xs text-zinc-400 underline-offset-2 hover:underline dark:text-zinc-500"
        >
          Reset progress
        </button>
      )}
    </div>
  );
}
