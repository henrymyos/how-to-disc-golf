import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FACETS, getTopic, sectionKey } from "@/lib/content";
import { accent } from "@/components/accents";
import { SectionView } from "@/components/section-view";
import { CompleteButton } from "@/components/complete-button";
import { FacetOutline } from "@/components/facet-outline";

export function generateStaticParams() {
  return FACETS.flatMap((f) =>
    f.topics.flatMap((t) =>
      t.sections.map((s) => ({ facet: f.slug, topic: t.slug, section: s.id }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ facet: string; topic: string; section: string }>;
}): Promise<Metadata> {
  const { facet, topic, section } = await params;
  const found = getTopic(facet, topic);
  const s = found?.topic.sections.find((x) => x.id === section);
  return {
    title:
      found && s
        ? `${s.title} — ${found.topic.title} — How to Disc Golf`
        : "How to Disc Golf",
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ facet: string; topic: string; section: string }>;
}) {
  const { facet: facetSlug, topic: topicSlug, section: sectionId } = await params;
  const found = getTopic(facetSlug, topicSlug);
  if (!found) notFound();
  const { facet, topic } = found;
  const sIdx = topic.sections.findIndex((x) => x.id === sectionId);
  if (sIdx === -1) notFound();
  const section = topic.sections[sIdx];
  const a = accent(facet.accent);

  const prevSection = sIdx > 0 ? topic.sections[sIdx - 1] : null;
  const nextSection = sIdx < topic.sections.length - 1 ? topic.sections[sIdx + 1] : null;
  const tIdx = facet.topics.findIndex((t) => t.slug === topic.slug);
  const nextTopic =
    !nextSection && tIdx < facet.topics.length - 1 ? facet.topics[tIdx + 1] : null;

  return (
    <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
      <aside className="hidden lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-4 pr-1">
          <FacetOutline
            facetSlug={facet.slug}
            currentTopic={topic.slug}
            currentSection={section.id}
          />
        </div>
      </aside>

      <div className="mx-auto w-full max-w-3xl space-y-6">
        <nav className="text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:underline">
          All facets
        </Link>{" "}
        /{" "}
        <Link href={`/${facet.slug}`} className="hover:underline">
          {facet.title}
        </Link>{" "}
        /{" "}
        <Link href={`/${facet.slug}/${topic.slug}`} className="hover:underline">
          {topic.title}
        </Link>{" "}
        / <span className="text-zinc-800 dark:text-zinc-200">{section.title}</span>
      </nav>

      <div>
        <p className={`text-sm font-semibold ${a.text}`}>
          {topic.title} · lesson {sIdx + 1} of {topic.sections.length}
        </p>
        <h1 className="mt-1 text-3xl font-black tracking-tight">{section.title}</h1>
      </div>

      <SectionView
        section={section}
        sectionKey={sectionKey(facet.slug, topic.slug, section.id)}
        accentName={facet.accent}
      />

      <div className="flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-zinc-800">
        {prevSection ? (
          <Link
            href={`/${facet.slug}/${topic.slug}/${prevSection.id}`}
            className="text-sm font-medium hover:underline"
          >
            ← {prevSection.title}
          </Link>
        ) : (
          <Link
            href={`/${facet.slug}/${topic.slug}`}
            className="text-sm font-medium hover:underline"
          >
            ← {topic.title}
          </Link>
        )}
        <div className="flex items-center gap-4">
          <CompleteButton
            sectionKey={sectionKey(facet.slug, topic.slug, section.id)}
            accentName={facet.accent}
          />
          {nextSection ? (
            <Link
              href={`/${facet.slug}/${topic.slug}/${nextSection.id}`}
              className="text-sm font-medium hover:underline"
            >
              {nextSection.title} →
            </Link>
          ) : nextTopic ? (
            <Link
              href={`/${facet.slug}/${nextTopic.slug}`}
              className="text-sm font-medium hover:underline"
            >
              Next topic: {nextTopic.title} →
            </Link>
          ) : (
            <Link href={`/${facet.slug}`} className="text-sm font-medium hover:underline">
              Back to {facet.title} →
            </Link>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
