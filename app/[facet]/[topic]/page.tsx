import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FACETS, getTopic, sectionKey } from "@/lib/content";
import { accent } from "@/components/accents";
import { SectionView } from "@/components/section-view";

export function generateStaticParams() {
  return FACETS.flatMap((f) =>
    f.topics.map((t) => ({ facet: f.slug, topic: t.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ facet: string; topic: string }>;
}): Promise<Metadata> {
  const { facet, topic } = await params;
  const found = getTopic(facet, topic);
  return {
    title: found
      ? `${found.topic.title} — ${found.facet.title} — How to Disc Golf`
      : "How to Disc Golf",
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ facet: string; topic: string }>;
}) {
  const { facet: facetSlug, topic: topicSlug } = await params;
  const found = getTopic(facetSlug, topicSlug);
  if (!found) notFound();
  const { facet, topic } = found;
  const a = accent(facet.accent);

  const idx = facet.topics.findIndex((t) => t.slug === topic.slug);
  const prev = idx > 0 ? facet.topics[idx - 1] : null;
  const next = idx < facet.topics.length - 1 ? facet.topics[idx + 1] : null;
  const facetIdx = FACETS.findIndex((f) => f.slug === facet.slug);
  const nextFacet = !next && facetIdx < FACETS.length - 1 ? FACETS[facetIdx + 1] : null;

  return (
    <div className="space-y-6">
      <nav className="text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:underline">
          All facets
        </Link>{" "}
        /{" "}
        <Link href={`/${facet.slug}`} className="hover:underline">
          {facet.title}
        </Link>{" "}
        / <span className="text-zinc-800 dark:text-zinc-200">{topic.title}</span>
      </nav>

      <div>
        <h1 className="text-3xl font-black tracking-tight">{topic.title}</h1>
        <p className={`mt-1.5 font-medium ${a.text}`}>{topic.tagline}</p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Read as deep as you like — each level stands on its own. Mark a level complete to
          track it on your progress rings.
        </p>
      </div>

      <div className="space-y-5">
        {topic.sections.map((s) => (
          <SectionView
            key={s.id}
            section={s}
            sectionKey={sectionKey(facet.slug, topic.slug, s.id)}
            accentName={facet.accent}
          />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-zinc-800">
        {prev ? (
          <Link href={`/${facet.slug}/${prev.slug}`} className="text-sm font-medium hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <Link href={`/${facet.slug}`} className="text-sm font-medium hover:underline">
            ← {facet.title}
          </Link>
        )}
        {next ? (
          <Link href={`/${facet.slug}/${next.slug}`} className="text-sm font-medium hover:underline">
            {next.title} →
          </Link>
        ) : nextFacet ? (
          <Link href={`/${nextFacet.slug}`} className="text-sm font-medium hover:underline">
            Next facet: {nextFacet.emoji} {nextFacet.title} →
          </Link>
        ) : (
          <Link href="/" className="text-sm font-medium hover:underline">
            Back to all facets →
          </Link>
        )}
      </div>
    </div>
  );
}
