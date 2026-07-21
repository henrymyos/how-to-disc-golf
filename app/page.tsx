import { FACETS, allKeys, facetKeys } from "@/lib/content";
import { FacetCard } from "@/components/facet-card";
import { OverallProgress } from "@/components/overall-progress";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="pt-4 text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Learn disc golf,{" "}
          <span className="text-emerald-600 dark:text-emerald-400">one facet at a time</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Every part of the game — throwing, putting, discs, strategy, rules, and the mental
          side — explained in three levels of depth, with drills to practice and videos from
          pros like Gannon Buhr. Mark lessons complete as you go and watch each facet fill up.
        </p>
      </div>

      <OverallProgress keys={allKeys()} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FACETS.map((f) => (
          <FacetCard
            key={f.slug}
            slug={f.slug}
            title={f.title}
            emoji={f.emoji}
            accentName={f.accent}
            summary={f.summary}
            topicCount={f.topics.length}
            keys={facetKeys(f)}
          />
        ))}
      </div>
    </div>
  );
}
