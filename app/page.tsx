import { allKeys } from "@/lib/content";
import { CurriculumPath } from "@/components/curriculum-path";
import { ContinueButton } from "@/components/continue-button";
import { OverallProgress } from "@/components/overall-progress";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="pt-4 text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          The disc golf{" "}
          <span className="text-emerald-600 dark:text-emerald-400">learning path</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Work through the game in order, top to bottom — from your first round to how
          touring pros think. Each numbered step has short lessons at three depths, with
          drills and videos from pros like Gannon Buhr. Mark lessons complete and the path
          fills in as you go.
        </p>
        <div className="mt-6">
          <ContinueButton />
        </div>
      </div>

      <OverallProgress keys={allKeys()} />

      <CurriculumPath />
    </div>
  );
}
