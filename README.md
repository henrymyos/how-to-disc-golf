# 🥏 How to Disc Golf

A learning site that covers every facet of disc golf — from "what is this sport" to
pro-level depth — with progress tracking so you can see how much of the game you've studied.

## How it's organized

Seven **facets** of the game, each with 3–4 **topics**, each topic explained at three
levels of depth:

1. **The Basics** — what you need on day one
2. **Going Deeper** — the intermediate layer: technique, tradeoffs, drills
3. **In Depth** — how touring pros think about it

| Facet | Topics |
| --- | --- |
| 🥏 Getting Started | What is disc golf · Your first round · Etiquette |
| 🎒 Discs & Gear | Disc types · Flight numbers · Plastics & weight · Building a bag |
| 💪 Throwing Technique | Grip · Backhand · Forehand · Throwing farther |
| 🎯 Short Game | Putting · Approaches · Specialty shots |
| 🧠 Course Strategy | Shot selection · Wind & weather · Course management |
| 📋 Rules & Competition | Rules & scoring · OB & penalties · Formats & events |
| 🧘 Practice & Mental Game | Practice structure · Field work · Mental game |

Each depth level is its own page — short lead-in, scannable bullets, key-point cards,
practice drills, and video links featuring pros (Gannon Buhr, Simon Lizotte, Paul McBeth)
and teaching channels (Overthrow Disc Golf, Robbie C, Danny Lindahl) — with prev/next
navigation that walks you through a topic lesson by lesson.

**Video links are curated YouTube searches, not hardcoded video URLs** — so they never
go stale. Swap any of them for exact video URLs in `lib/content/*.ts` if you have favorites.

## Progress tracking

Each of the 69 lessons has a **Mark complete** toggle. Completion is stored in
`localStorage` (no accounts) and drives progress rings per facet, per-topic bars, and an
overall completion meter on the home page.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4. All pages statically
generated; progress is client-side via a `useSyncExternalStore` hook (`lib/progress.ts`).

## Development

```bash
npm install
npm run dev
```

Content lives in `lib/content/` — one file per facet, plain typed data. Add a topic or
section there and every page, ring, and count updates automatically.
