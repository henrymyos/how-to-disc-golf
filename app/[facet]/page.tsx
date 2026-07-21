import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FACETS, getFacet, facetKeys, topicKeys } from "@/lib/content";
import { accent } from "@/components/accents";
import { TopicRow } from "@/components/topic-row";
import { FacetProgressHeader } from "@/components/facet-progress-header";

export function generateStaticParams() {
  return FACETS.map((f) => ({ facet: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ facet: string }>;
}): Promise<Metadata> {
  const { facet } = await params;
  const f = getFacet(facet);
  return { title: f ? `${f.title} — How to Disc Golf` : "How to Disc Golf" };
}

export default async function FacetPage({
  params,
}: {
  params: Promise<{ facet: string }>;
}) {
  const { facet: facetSlug } = await params;
  const facet = getFacet(facetSlug);
  if (!facet) notFound();
  const a = accent(facet.accent);

  return (
    <div className="space-y-6">
      <nav className="text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:underline">
          All facets
        </Link>{" "}
        / <span className="text-zinc-800 dark:text-zinc-200">{facet.title}</span>
      </nav>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">
            <span className="mr-2">{facet.emoji}</span>
            <span className={a.text}>{facet.title}</span>
          </h1>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">{facet.summary}</p>
        </div>
        <FacetProgressHeader keys={facetKeys(facet)} accentName={facet.accent} />
      </div>

      <div className="space-y-3">
        {facet.topics.map((t) => (
          <TopicRow
            key={t.slug}
            facetSlug={facet.slug}
            topicSlug={t.slug}
            title={t.title}
            tagline={t.tagline}
            accentName={facet.accent}
            keys={topicKeys(facet, t.slug)}
          />
        ))}
      </div>
    </div>
  );
}
