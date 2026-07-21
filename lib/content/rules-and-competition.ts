import type { Facet } from "./types";

export const rulesAndCompetition: Facet = {
  slug: "rules-and-competition",
  title: "Rules & Competition",
  emoji: "📋",
  accent: "rose",
  summary:
    "Scoring, penalties, formats, and the path from casual rounds to sanctioned tournaments and a PDGA rating.",
  topics: [
    {
      slug: "rules-and-scoring",
      title: "Rules & Scoring",
      tagline: "The handful of rules that cover 95% of situations.",
      sections: [
        {
          id: "basics",
          title: "The core rules",
          depth: 1,
          body: [
            "Count every throw plus any penalty strokes — that's your score. The rest of the essentials fit in a few lines.",
          ],
          bullets: [
            "Tee from within the tee area; after that, throw from directly behind where your disc came to rest — your lie.",
            "The player farthest from the basket throws first.",
            "The hole is finished when your disc comes to rest in the basket's chains or tray.",
            "When throwing, one supporting point (usually your plant foot) must be behind the marker and in contact with the lie.",
            "You can straddle sideways or kneel, but no part of your body may touch beyond the marker until the disc is released, unless you're putting from distance (see falling putts).",
          ],
          points: [
            { title: "The lie", text: "A 20cm-wide line behind your disc (or your mini marker). Your plant foot goes there. Everything else is stance style." },
            { title: "Order of play", text: "Farthest out throws first; previous hole's best score tees first. It's a safety rule as much as a courtesy." },
            { title: "Holing out", text: "Chains or basket — resting on top of the band doesn't count. Yes, everyone has a story about that." },
          ],
        },
        {
          id: "deeper",
          title: "Relief, obstacles, and the falling putt",
          depth: 2,
          body: [
            "You must take your stance as the course gives it — and inside 10 meters of the basket, the falling putt rule adds a balance requirement.",
          ],
          bullets: [
            "No moving branches, bending saplings, or clearing debris between your lie and the basket.",
            "You may move things behind your lie that got there after the round started, like a fallen branch on your disc.",
            "Solid obstacles you can't take a legal stance behind grant relief straight back along the line of play, no penalty.",
            "Inside 10 meters, you must demonstrate balance after releasing a putt — no stepping or falling past your lie toward the basket until the disc settles.",
            "Outside 10 meters, jump putts and follow-throughs past the lie are legal.",
            "The falling putt is the most-called rule in casual-competitive play, so groove a balanced finish now.",
          ],
          videos: [
            { label: "Stance and lie rules explained", source: "PDGA", query: "PDGA stance rules explained disc golf" },
            { label: "Falling putt rule demonstrations", source: "Robbie C Disc Golf", query: "disc golf falling putt rule 10 meters" },
          ],
        },
        {
          id: "indepth",
          title: "Provisionals, rulings, and self-officiating",
          depth: 3,
          body: [
            "Disc golf is self-officiated: your card makes rulings by majority, and you're expected to call penalties on yourself.",
          ],
          bullets: [
            "When a ruling is genuinely uncertain — is that disc OB, was that stance legal — declare a provisional and play both versions of the hole; the tournament director sorts it out after the round.",
            "A provisional costs a few minutes and protects you from an incorrect ruling either way.",
            "A lost disc (3 minutes of searching) costs a stroke, and you replay from the previous lie.",
            "A disc above the ground in a tree is marked directly below.",
            "Interference from another player's disc or a spectator has specific no-penalty procedures, and the 30-second clock starts when it's your turn with a clear fairway.",
            "Skimming the PDGA rulebook once — it's short — settles years of card arguments.",
          ],
          videos: [
            { label: "Rules pros get called on", source: "Disc Golf Pro Tour", query: "disc golf pro rules violations explained" },
          ],
        },
      ],
    },
    {
      slug: "ob-and-penalties",
      title: "OB & Penalties",
      tagline: "Out-of-bounds, hazards, mandos, and relief — where strokes leak.",
      sections: [
        {
          id: "basics",
          title: "Out-of-bounds, plainly",
          depth: 1,
          body: [
            "Out-of-bounds (OB) is any area the course defines as off-limits — usually roads, water, fences, or painted/roped lines.",
          ],
          bullets: [
            "If your disc comes to rest completely surrounded by OB, you add one penalty stroke.",
            "Play from where the disc last crossed the OB line (up to a meter in-bounds from that point), or replay from your previous lie.",
            "The disc must be completely OB to be OB — a disc touching the in-bounds side of a line is safe.",
            "It's where the disc rests, not where it lands — a disc that rolls into the pond is just as wet as one that splashes in directly.",
          ],
          points: [
            { title: "1 stroke + position", text: "OB costs the stroke and usually good position — which is why it deserves double respect in your planning." },
            { title: "Last-crossed point", text: "You play from where the disc crossed the line, not where it ended up. Watch your throws all the way down." },
            { title: "Completely surrounded", text: "Touching in-bounds = in-bounds. The line itself is usually OB — check the caddie book or ask." },
          ],
        },
        {
          id: "deeper",
          title: "Hazards, mandos, and drop zones",
          depth: 2,
          body: [
            "Courses use more markings than plain OB, and tournament caddie books define all of them per hole.",
          ],
          bullets: [
            "A hazard (common for bunkers or nasty rough) costs a penalty stroke, but you play from where the disc lies — no repositioning.",
            "A mandatory ('mando') is an obstacle your disc must pass on a specific side, usually marked with an arrow; missing it costs a stroke and sends you to a drop zone.",
            "Drop zones are marked areas you play from after specific penalties or missed mandos.",
            "Islands — greens or fairway segments surrounded by OB — are the highest-drama version: land in, or take the penalty and play from the drop zone.",
            "Reading the caddie book carefully is free strokes; more penalties come from not knowing a line was OB than from bad throws.",
          ],
          videos: [
            { label: "OB, hazard, and mando rules", source: "PDGA", query: "disc golf OB hazard mando rules explained" },
          ],
        },
        {
          id: "indepth",
          title: "Playing penalty situations like a pro",
          depth: 3,
          body: [
            "Once a penalty happens, the skill is damage control — and OB should reshape your aim before the throw, not just your recovery after.",
          ],
          bullets: [
            "After a penalty you always have options — the last-crossed point, the previous lie, sometimes a drop zone — and pros explicitly compare them.",
            "Replaying a comfortable drive can beat pitching from a terrible OB-edge lie.",
            "The same logic applies to unplayable lies: take a stroke for relief rather than attempt a circus stance in a bush.",
            "On OB-lined holes, the pro pattern is aiming at the safe edge of the fairway, sized so that their average miss stays dry.",
            "They concede five feet of position on every throw to avoid conceding two strokes on some throws.",
            "Watching tournament water holes (DeLaveaga, Winthrop's famous roped finishing holes, Ledgestone's island) with this lens is a strategy masterclass.",
          ],
          videos: [
            { label: "Famous OB holes on tour", source: "JomezPro", query: "disc golf hardest OB holes tour Winthrop" },
          ],
        },
      ],
    },
    {
      slug: "formats-and-events",
      title: "Formats, Leagues & Tournaments",
      tagline: "From casual doubles night to your first sanctioned event and a PDGA number.",
      sections: [
        {
          id: "basics",
          title: "How organized play works",
          depth: 1,
          body: [
            "The on-ramp to competition is gentler than most sports — weekly leagues at local courses run casual, beginner-friendly formats.",
          ],
          bullets: [
            "The most common league format is random doubles: you're paired with a stranger and play best-shot — both throw, pick the better one, repeat.",
            "Random doubles is cheap and the fastest possible way to learn from better players, since you literally play their shots.",
            "Other formats you'll meet: singles stroke play (standard), best-shot doubles, alternate-shot, and match play (win holes, not strokes).",
            "Flex starts let you play your round anytime in a window.",
            "League nights usually cost $5–10 with payouts in discs or pro-shop credit.",
          ],
          points: [
            { title: "Random doubles is the door", text: "Bad shots get erased by your partner's. There is no lower-pressure way to start competing." },
            { title: "Divisions exist for you", text: "Events split by skill (novice, recreational, intermediate, advanced) and often age. You compete against your peers, not the local pro." },
            { title: "Just show up", text: "Find league nights on UDisc, local club socials, or the course kiosk. Every club's answer to 'can beginners come?' is yes." },
          ],
        },
        {
          id: "deeper",
          title: "Your first sanctioned tournament",
          depth: 2,
          body: [
            "PDGA-sanctioned tournaments are tiered: C-tiers are relaxed local events perfect for a first tournament, B-tiers are bigger regional ones, and A-tiers and Majors are serious business.",
          ],
          bullets: [
            "Register on Disc Golf Scene and pick the division matching your skill — recreational or intermediate for most first-timers.",
            "Expect two rounds in a day with a lunch break, a players' meeting, and a card of three or four strangers who will almost certainly be friendly.",
            "Every rule is live (stance, order, 30-second clock), and scores are double-kept and signed.",
            "Nerves are real for everyone — first-tournament jitters that vanish by hole four are a universal experience.",
            "Preparation that actually helps: play the course beforehand, arrive an hour early, and bring water and food.",
            "Decide your conservative lines in advance so adrenaline doesn't pick them for you.",
          ],
          videos: [
            { label: "First tournament guide", source: "Overthrow Disc Golf", query: "first disc golf tournament tips what to expect" },
          ],
        },
        {
          id: "indepth",
          title: "Ratings, divisions, and the path upward",
          depth: 3,
          body: [
            "Join the PDGA (~$50/year) and you get a number and, after a few events, a player rating recalculated from every rated round you play.",
          ],
          bullets: [
            "Rating benchmarks: roughly 700 = newer player, 850 = strong club player, 935+ = touring-caliber, 1050 = world's best.",
            "Ratings make improvement measurable across courses and years.",
            "Ratings also gate divisions: amateur divisions have rating caps, so you compete against your actual peers.",
            "The competitive ladder: local C-tiers, then state/regional B and A-tiers, then am Majors like Am Worlds.",
            "Players who go pro chase the Disc Golf Pro Tour, where Gannon Buhr became one of the youngest elite champions in the sport's history.",
            "Even if you never leave weekend C-tiers, the rating system gives every round a stake — watching your number climb from 780 to 850 over two seasons is one of the most motivating feedback loops in amateur sports.",
          ],
          videos: [
            { label: "How PDGA ratings work", source: "PDGA", query: "how PDGA ratings work explained" },
            { label: "Gannon Buhr tournament highlights", source: "JomezPro", query: "Gannon Buhr tournament win highlights" },
          ],
        },
      ],
    },
  ],
};
