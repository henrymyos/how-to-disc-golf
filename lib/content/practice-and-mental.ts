import type { Facet } from "./types";

export const practiceAndMental: Facet = {
  slug: "practice-and-mental",
  title: "Practice & Mental Game",
  emoji: "🧘",
  accent: "teal",
  summary:
    "This section decides whether any of the others actually improve. Structured practice is what converts knowledge into skill, and the mental game is what lets that skill show up when the round is on the line.",
  topics: [
    {
      slug: "practice-structure",
      title: "Structuring Practice",
      tagline: "Why 30 focused minutes beats three casual rounds.",
      sections: [
        {
          id: "basics",
          title: "Practice vs. play",
          depth: 1,
          body: [
            "Playing rounds is fun and necessary — but it isn't practice. Practice is repetition with feedback, each throw telling you something the last one didn't.",
          ],
          bullets: [
            "In a round you throw each type of shot only a handful of times, with no repetition.",
            "Real practice looks like twenty putts from the same distance or thirty drives on the same line.",
            "Beginner-friendly split: with four sessions a week, make two of them rounds and two practice — one putting, one field work.",
            "That ratio improves scores faster than any other allocation of the same hours.",
            "Putting practice needs nothing but a basket (or a chair) and ten minutes.",
          ],
          points: [
            { title: "Deliberate beats casual", text: "Practice with a specific focus and a way to measure. 'Throwing around' maintains skill; it doesn't build it." },
            { title: "Putting is the cheapest strokes", text: "Ten minutes daily at home moves your score more than anything else on this site." },
            { title: "Track something", text: "Makes out of 50, fairways hit, C1 percentage — a number that can go up makes practice self-motivating." },
          ],
        },
        {
          id: "deeper",
          title: "A weekly template that works",
          depth: 2,
          body: [
            "A balanced improvement week for a committed player mixes four kinds of sessions, plus a rotating monthly emphasis on one skill.",
          ],
          bullets: [
            "One putting session: 25 minutes of structured drills with scoring.",
            "One field session, 40 minutes: standstill form work, then one-disc line reps, then a few max-effort throws at the end.",
            "One focused round: play seriously, with one skill as the theme.",
            "One social round: just enjoy it — fun is what keeps the volume up.",
            "Rotate a monthly emphasis: four weeks on forehand, then four on C1 putting, then four on distance form beats splitting attention across everything forever.",
            "Skills consolidate with concentrated volume, and the previous month's gains largely stick while you build the next one.",
          ],
          drills: [
            "Theme rounds: play a full round where the only goal is the month's skill — e.g., forehand off every tee where it's viable. Score doesn't matter; reps under course conditions do.",
          ],
          videos: [
            { label: "How to practice disc golf effectively", source: "Overthrow Disc Golf", query: "Overthrow disc golf how to practice effectively" },
          ],
        },
        {
          id: "indepth",
          title: "Feedback loops and measuring improvement",
          depth: 3,
          body: [
            "Improvement stalls without honest feedback, and disc golf offers three cheap sources: stats, video, and benchmarks.",
          ],
          bullets: [
            "Stats: UDisc round stats (fairway %, C1 putting, scramble %) tell you where strokes actually leak — most players guess wrong about their weakest skill.",
            "Video: monthly slow-motion form checks against your previous month, not against pros.",
            "Benchmarks: a standing personal combine (makes from 20/25/30 feet, average drive with one disc), re-tested every four to six weeks.",
            "Structure the loop like an analytics project: baseline, intervention, re-measure.",
            "If C1X putting is your leak, run a six-week putting block and re-test; if the number didn't move, change the drill, not the goal.",
            "This is exactly how touring pros work with coaches in the off-season — and it's fully available to an amateur with a phone, a basket, and a spreadsheet.",
          ],
          videos: [
            { label: "Using stats to find your weakness", source: "UDisc", query: "UDisc stats improve disc golf" },
            { label: "Off-season training like a pro", source: "Gannon Buhr", query: "Gannon Buhr practice routine off season" },
          ],
        },
      ],
    },
    {
      slug: "field-work",
      title: "Field Work",
      tagline: "The empty-field sessions where form is actually built.",
      sections: [
        {
          id: "basics",
          title: "Your first field session",
          depth: 1,
          body: [
            "Field work is throwing in an open space with no scorecard, no basket, and full attention on the flight — it's where every good throw you'll ever own gets built.",
          ],
          bullets: [
            "Bring 5–10 discs of one or two molds; identical discs make patterns visible.",
            "Pick a target line, throw everything at it, walk down, observe the grouping, and throw back. That's the whole ritual.",
            "The magic is seeing ten flights of the same disc side by side: one throw lies to you; ten throws form a pattern you can't argue with.",
            "All landing left? Nose angle or release timing.",
            "Scattered? You're above your mechanical speed limit — slow down.",
          ],
          points: [
            { title: "Same disc, same line", text: "Repetition with one variable isolated is the whole trick. Ten different discs teach you nothing." },
            { title: "80% effort", text: "Field work is form work. Max-power sessions groove max-power mistakes." },
            { title: "Walk and look", text: "The landing pattern is the lesson. Skipping the walk-down throws away the data." },
          ],
        },
        {
          id: "deeper",
          title: "Progression and shot menus",
          depth: 2,
          body: [
            "Structure sessions as a progression from calibration to focused reps to variety — the variety finish is what converts field form into course skill, because courses never ask for the same shot twice.",
          ],
          bullets: [
            "Start with standstills with a midrange to calibrate: 10 throws.",
            "Then the session focus: 20–30 throws on one shot shape with one disc.",
            "Finish with a 'menu': hyzer, flat, and anhyzer with the same disc, three of each.",
            "Every few sessions, dedicate one to distance-specific work: measured landmarks (a soccer field's lines are perfect), a few genuinely max-effort throws while fresh, and honest measurement.",
            "Distance sessions are also when to film — max effort is where form breaks down, and seeing the breakdown teaches the most.",
          ],
          drills: [
            "9-shot menu: hyzer/flat/anhyzer × putter/mid/fairway at one 200-foot target. Score each landing zone hit out of 9. This single drill is a complete short-game curriculum.",
            "Line lock: pick two trees forming a 15-foot gap at 150 feet. Throw until you've hit the gap 10 times with each of three discs.",
          ],
          videos: [
            { label: "Field work session, structured", source: "Danny Lindahl", query: "Danny Lindahl field work routine" },
          ],
        },
        {
          id: "indepth",
          title: "Form changes without losing your game",
          depth: 3,
          body: [
            "Eventually every improving player rebuilds part of their form — and does it wrong the first time.",
          ],
          bullets: [
            "The failure mode: changing three things at once, mid-season, and losing both the old form and the new.",
            "The reliable pattern: one change at a time, in the off-season or a low-stakes month.",
            "Drill the change at short distance (putter standstills) until it's unconscious, then gradually re-add speed, footwork, and finally course play.",
            "Expect the valley: a real form change makes you worse for two to six weeks while the new pattern consolidates.",
            "Players who understand the valley push through it; players who don't retreat to old form at the first bad round and stay stuck.",
            "Film weekly during a rebuild, compare only against your own last month, and judge progress by flight quality at 70% power — distance returns last, then exceeds the old ceiling.",
          ],
          videos: [
            { label: "Rebuilding backhand form, documented", source: "Overthrow Disc Golf", query: "disc golf form rebuild progress documented" },
          ],
        },
      ],
    },
    {
      slug: "mental-game",
      title: "The Mental Game",
      tagline: "Routine, recovery, and focus — the skills that show up when pressure does.",
      sections: [
        {
          id: "basics",
          title: "One shot at a time, literally",
          depth: 1,
          body: [
            "The mental game starts with a simple truth: the only throw you can influence is the next one.",
          ],
          bullets: [
            "The last hole's triple bogey and the scorecard's total are both outside your control the moment they exist.",
            "Players who reset after every throw — good or bad — outperform equally skilled players who carry their last shot with them.",
            "Resetting is a practicable skill, not a personality trait.",
            "The tool is a pre-shot routine: a fixed, short sequence before every throw (see the line, pick the target, one breath, throw).",
            "The routine occupies the mind with process so outcome anxiety has nowhere to sit.",
            "Build it in casual rounds so it's automatic when a tournament makes everything else feel different.",
          ],
          points: [
            { title: "Routine is armor", text: "Same steps before every shot means tournament pressure changes nothing your body notices." },
            { title: "Reset ritual", text: "After any bad shot: one specific gesture (deep breath, adjust cap, whatever) that marks it finished. Then it is." },
            { title: "Process goals only", text: "'Commit to every line' is achievable on demand. 'Shoot -5' isn't. Score goals mid-round actively hurt." },
          ],
        },
        {
          id: "deeper",
          title: "Pressure, nerves, and commitment",
          depth: 2,
          body: [
            "Nerves are arousal, not malfunction — the racing heart on the first tee is the same physiology as excitement.",
          ],
          bullets: [
            "Reframing nerves that way ('I'm ready' vs 'I'm scared') measurably improves performance.",
            "What actually degrades under pressure is decision-making and tempo: players rush, grip tighter, and switch to hero lines.",
            "The countermeasures are mechanical: exhale before the throw, take one extra second in the routine, and pre-commit to conservative lines before the round.",
            "Commitment beats correctness: a fully committed throw on a slightly wrong line outperforms a hesitant throw on the perfect line, because hesitation shows up as decelerating arms and early releases.",
            "If you catch yourself doubting a line mid-routine, step off, re-decide, and start the routine over.",
            "The step-off is what strong players do; throwing anyway 'to keep pace' is what everyone regrets.",
          ],
          drills: [
            "Pressure putting: no warm-ups allowed — one disc, one attempt per station, and a miss restarts the ladder. Simulating scarcity teaches your routine to work cold.",
          ],
          videos: [
            { label: "Mental game routines of pros", source: "Disc Golf Pro Tour", query: "disc golf pro mental game routine pressure" },
          ],
        },
        {
          id: "indepth",
          title: "The long game: identity, plateaus, and enjoying it",
          depth: 3,
          body: [
            "Improvement in disc golf is a stair-step, not a slope: months of plateau punctuated by sudden jumps when some piece of form or judgment consolidates.",
          ],
          bullets: [
            "The players who last treat plateaus as loading phases rather than failure — they keep volume steady, rotate emphasis, and let consolidation happen.",
            "Rating obsession during a plateau is the classic burnout recipe; process metrics (sessions completed, drills scored) are the sustainable fuel.",
            "Watch interviews with players like Gannon Buhr or Kristin Tattar after losses: outcomes reviewed briefly and specifically ('I lost strokes on C2 putts into wind'), then attention returned entirely to process.",
            "That's the endgame of the mental side — a stable identity as someone who trains well and competes fully, where any single round is information rather than judgment.",
            "It's also, not incidentally, what keeps the game fun for decades.",
          ],
          videos: [
            { label: "Pro interviews on mindset", source: "Disc Golf Pro Tour", query: "Gannon Buhr interview mindset improvement" },
          ],
        },
      ],
    },
  ],
};
