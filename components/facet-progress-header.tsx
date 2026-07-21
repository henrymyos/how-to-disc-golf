"use client";

import { useProgress } from "@/lib/progress";
import { accent } from "./accents";
import { ProgressRing } from "./progress-ring";

export function FacetProgressHeader({
  keys,
  accentName,
}: {
  keys: string[];
  accentName: string;
}) {
  const { countDone } = useProgress();
  const a = accent(accentName);
  return <ProgressRing done={countDone(keys)} total={keys.length} colorHex={a.ringHex} size={64} />;
}
