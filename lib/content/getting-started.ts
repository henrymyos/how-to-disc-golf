import type { Facet } from "./types";

export const gettingStarted: Facet = {
  slug: "getting-started",
  title: "Getting Started",
  emoji: "🥏",
  accent: "emerald",
  summary:
    "Everything else builds on this. Understanding how the game works — and being comfortable on any course, with any group — is what gets you playing enough rounds for the rest of your game to grow.",
  topics: [
    {
      slug: "what-is-disc-golf",
      title: "What Is Disc Golf?",
      tagline: "The game in a nutshell — and why it hooks people fast.",
      sections: [
        {
          id: "basics",
          title: "The game in one paragraph",
          depth: 1,
          body: [
            "Disc golf is golf played with flying discs instead of balls and clubs. You throw from a tee area toward an elevated metal basket with hanging chains, and lowest total score wins.",
          ],
          bullets: [
            "Every throw counts as a stroke. Finish the hole by landing your disc in the basket, then move to the next tee.",
            "Most courses have 9 or 18 holes, each with a par of 3, 4, or 5.",
            "A typical hole is 200–450 feet long and winds through trees, over hills, or around water.",
            "A casual round takes about 90 minutes to two hours.",
          ],
          points: [
            { title: "It's cheap to start", text: "One $15 disc and a free public course is genuinely all you need for your first round." },
            { title: "It's everywhere", text: "There are over 10,000 courses worldwide, most of them free to play in public parks." },
            { title: "Easy to learn, deep to master", text: "Anyone can play on day one, but disc flight, form, and strategy give you years of skill ceiling." },
          ],
        },
        {
          id: "deeper",
          title: "How a disc flies",
          depth: 2,
          body: [
            "The core skill of disc golf is understanding that discs don't fly straight — they curve, and each disc curves in a predictable way.",
          ],
          bullets: [
            "For a right-handed backhand throw, most discs drift left at the end of their flight.",
            "That end-of-flight drift is called fade, and playing with (or against) it is the heart of the game.",
            "Drivers are thin-edged and fast, designed for distance.",
            "Midranges are the all-purpose workhorses; putters are blunt and stable for accuracy near the basket.",
            "Learning what one disc does before buying ten of them is the single best shortcut for a new player.",
          ],
          videos: [
            { label: "Beginner's guide to disc golf", source: "Overthrow Disc Golf", query: "Overthrow Disc Golf beginner guide" },
            { label: "How discs fly, explained", source: "Robbie C Disc Golf", query: "Robbie C disc golf how discs fly" },
          ],
        },
        {
          id: "indepth",
          title: "The sport beyond the park",
          depth: 3,
          body: [
            "Disc golf has a full professional scene, and watching pro coverage is one of the fastest ways to absorb strategy and shot-shaping ideas.",
          ],
          bullets: [
            "The Disc Golf Pro Tour (DGPT) runs televised events with six-figure purses.",
            "Pros like Gannon Buhr, Paul McBeth, Kristin Tattar, and Simon Lizotte throw drives well past 500 feet with astonishing accuracy.",
            "The Professional Disc Golf Association (PDGA) sanctions tournaments at every skill level, from casual weekly leagues to world championships.",
            "The PDGA maintains a player rating system so you can measure your improvement against a global standard.",
            "Most towns with a course also have a local club running cheap weekly rounds that welcome beginners.",
          ],
          videos: [
            { label: "Watch a pro round with commentary", source: "JomezPro", query: "JomezPro final round Gannon Buhr" },
            { label: "What is the Disc Golf Pro Tour?", source: "Disc Golf Pro Tour", query: "Disc Golf Pro Tour highlights" },
          ],
        },
      ],
    },
    {
      slug: "your-first-round",
      title: "Your First Round",
      tagline: "What to bring, where to stand, and how to keep score.",
      sections: [
        {
          id: "basics",
          title: "What you need and what to do",
          depth: 1,
          body: [
            "Bring one to three discs (a putter and a midrange are plenty), water, and shoes you can walk a couple of miles in.",
          ],
          bullets: [
            "Find the first tee — usually a concrete or rubber pad — and throw toward the basket.",
            "Wherever your disc lands, that's where you throw from next. Repeat until the disc is in the basket.",
            "Count your throws — that total is your score for the hole.",
            "Don't worry about throwing far. New players score better throwing a midrange or putter straight for 150 feet than launching a driver sideways into the woods.",
            "Distance comes from technique, and technique comes later.",
          ],
          points: [
            { title: "Tee, then lie", text: "Your first throw is from the tee pad. After that you throw from just behind where your previous throw landed — that spot is called your lie." },
            { title: "Count everything", text: "Every throw counts, including the short tap-ins. Most scorekeeping happens in a free app like UDisc." },
            { title: "Par is a guide", text: "Par 3 means an expert expects three throws. Beginners average 5–6 per hole, and that's completely normal." },
          ],
        },
        {
          id: "deeper",
          title: "Choosing your first discs",
          depth: 2,
          body: [
            "Start with slow, neutral discs — they'll outperform any fast driver in a new player's hand.",
          ],
          bullets: [
            "Speed ratings run from 1 to 14, and beginner arms can't make discs above speed 9 fly the way they're designed to — they just veer off early.",
            "A putter (speed 2–3), a midrange (speed 4–5), and at most a fairway driver (speed 6–7) in the 150–170 gram range is all you need.",
            "Look for discs marketed as understable or neutral — they'll hold a straighter line at lower power.",
            "Classic beginner picks that stay useful for years include putters like the Aviar or Judge, and midranges like the Buzzz or Mako3.",
            "A three-disc starter set from any major brand is a safe first purchase.",
          ],
          videos: [
            { label: "Best discs for beginners", source: "Overthrow Disc Golf", query: "Overthrow disc golf best beginner discs" },
            { label: "Why slow discs beat fast discs early", source: "Danny Lindahl", query: "Danny Lindahl beginner disc speed" },
          ],
        },
        {
          id: "indepth",
          title: "Reading a hole before you throw",
          depth: 3,
          body: [
            "Before every tee shot, take ten seconds to plan. Picking a specific landing spot, rather than just throwing at the basket, is the first real strategic habit to build.",
          ],
          bullets: [
            "Ask where the basket is and what shape the fairway takes — straight, curving left, or curving right.",
            "Spot the trouble (water, out-of-bounds, thick woods) and decide which side of the fairway leaves the easiest next shot.",
            "Tee signs show the hole layout, distance, and par.",
            "On a par 4 or 5, break the hole into segments: a comfortable drive to a safe zone, then an approach.",
            "Three controlled 150-foot throws beat one wild 250-foot throw followed by two recovery shots — a lesson that stays true at every skill level.",
          ],
          drills: [
            "On each tee of your next round, say your target landing spot out loud before throwing. Score a point every time you land within 30 feet of it.",
            "Play a round with only a putter and a midrange. You'll learn hole shapes and placement faster than with a full bag.",
          ],
        },
      ],
    },
    {
      slug: "etiquette",
      title: "Etiquette & Culture",
      tagline: "The unwritten rules that make you welcome in any group.",
      sections: [
        {
          id: "basics",
          title: "The golden rules",
          depth: 1,
          body: [
            "Disc golf etiquette boils down to safety and courtesy.",
          ],
          bullets: [
            "Never throw when there's any chance of hitting someone — wait until the group ahead is well out of range.",
            "Shout a loud warning if a disc ever heads toward people.",
            "Stand still and stay quiet while others throw, just like ball golf.",
            "The player farthest from the basket always throws next.",
            "On the tee, the player with the best score on the previous hole throws first.",
            "Keep pace with the course: if a faster group is behind you, wave them through.",
          ],
          points: [
            { title: "Safety first, always", text: "A driver leaves your hand at 60+ mph. Never throw into a blind area without checking it." },
            { title: "Away player throws", text: "Farthest from the basket goes next — it keeps the round orderly and safe." },
            { title: "Leave no trace", text: "Pack out your trash, don't damage trees, and treat the park better than you found it." },
          ],
        },
        {
          id: "deeper",
          title: "Casual round culture",
          depth: 2,
          body: [
            "Disc golf has an unusually friendly culture, and joining a random group or a local league round is the fastest way to improve.",
          ],
          bullets: [
            "Strangers routinely invite solo players to join their group and help each other search for lost discs.",
            "Found discs get returned via the phone number written on the underside — write yours on every disc, because most do come back.",
            "Playing with others teaches you local course knowledge, lets you watch better players' form, and helps you learn rules organically.",
            "Weekly league nights almost always have a casual or beginner division, and nobody cares what you score.",
          ],
          videos: [
            { label: "Disc golf etiquette explained", source: "UDisc", query: "disc golf etiquette for beginners" },
          ],
        },
        {
          id: "indepth",
          title: "Card culture and tournament norms",
          depth: 3,
          body: [
            "In organized play, your group is called a card, and tournament norms are stricter versions of casual courtesy. None of it is complicated, but knowing it beforehand makes your first sanctioned event relaxed instead of stressful.",
          ],
          bullets: [
            "Scores are kept by two people on the card to cross-check.",
            "No talking or moving in a player's line of sight during a throw. Agree as a card on rulings, and call your own penalties.",
            "The integrity culture — players officiating themselves — is a defining feature of the sport.",
            "You have 30 seconds to throw once it's your turn and the fairway is clear.",
            "Mark your lie with a mini marker disc or leave your thrown disc in place.",
            "Cell phones stay silent.",
          ],
          videos: [
            { label: "Your first tournament: what to expect", source: "Robbie C Disc Golf", query: "first disc golf tournament what to expect" },
          ],
        },
      ],
    },
  ],
};
