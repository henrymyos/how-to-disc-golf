"use client";

import Link from "next/link";
import { FACETS, sectionKey } from "@/lib/content";
import { useProgress } from "@/lib/progress";

function nextLesson(done: Set<string>) {
  for (const f of FACETS) {
    for (const t of f.topics) {
      for (const s of t.sections) {
        if (!done.has(sectionKey(f.slug, t.slug, s.id))) {
          return { href: `/${f.slug}/${t.slug}/${s.id}`, topic: t.title, section: s.title };
        }
      }
    }
  }
  return null;
}

export function ContinueButton() {
  const { done } = useProgress();
  const next = nextLesson(done);

  if (!next) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2.5 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
        🏆 Path complete — you&apos;ve finished every lesson!
      </span>
    );
  }

  const started = done.size > 0;
  return (
    <Link
      href={next.href}
      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-emerald-500"
    >
      {started ? "Continue" : "Start the path"}: {next.topic} — {next.section} →
    </Link>
  );
}
