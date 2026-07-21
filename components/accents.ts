/**
 * Static accent class maps — Tailwind can't see dynamically built class names,
 * so every accent used in lib/content must have an entry here.
 */
export type AccentClasses = {
  text: string;
  chip: string;
  bar: string;
  ringHex: string;
  cardHover: string;
};

export const ACCENTS: Record<string, AccentClasses> = {
  emerald: {
    text: "text-emerald-600 dark:text-emerald-400",
    chip: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
    bar: "bg-emerald-500",
    ringHex: "#10b981",
    cardHover: "hover:border-emerald-400 dark:hover:border-emerald-600",
  },
  sky: {
    text: "text-sky-600 dark:text-sky-400",
    chip: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
    bar: "bg-sky-500",
    ringHex: "#0ea5e9",
    cardHover: "hover:border-sky-400 dark:hover:border-sky-600",
  },
  orange: {
    text: "text-orange-600 dark:text-orange-400",
    chip: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
    bar: "bg-orange-500",
    ringHex: "#f97316",
    cardHover: "hover:border-orange-400 dark:hover:border-orange-600",
  },
  violet: {
    text: "text-violet-600 dark:text-violet-400",
    chip: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300",
    bar: "bg-violet-500",
    ringHex: "#8b5cf6",
    cardHover: "hover:border-violet-400 dark:hover:border-violet-600",
  },
  amber: {
    text: "text-amber-600 dark:text-amber-400",
    chip: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
    bar: "bg-amber-500",
    ringHex: "#f59e0b",
    cardHover: "hover:border-amber-400 dark:hover:border-amber-600",
  },
  rose: {
    text: "text-rose-600 dark:text-rose-400",
    chip: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
    bar: "bg-rose-500",
    ringHex: "#f43f5e",
    cardHover: "hover:border-rose-400 dark:hover:border-rose-600",
  },
  teal: {
    text: "text-teal-600 dark:text-teal-400",
    chip: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
    bar: "bg-teal-500",
    ringHex: "#14b8a6",
    cardHover: "hover:border-teal-400 dark:hover:border-teal-600",
  },
};

export function accent(name: string): AccentClasses {
  return ACCENTS[name] ?? ACCENTS.emerald;
}
