import type { Facet } from "./types";

export const strategy: Facet = {
  slug: "strategy",
  title: "Course Strategy",
  emoji: "🧠",
  accent: "amber",
  summary:
    "Shot selection, wind, terrain, and risk management — how to score better without throwing better.",
  topics: [
    {
      slug: "shot-selection",
      title: "Shot Selection",
      tagline: "The right disc on the right line — most strokes are lost before the throw.",
      sections: [
        {
          id: "basics",
          title: "Play your shot, not the hole's",
          depth: 1,
          body: [
            "Every hole suggests a shot — and it's often not one you have. The core discipline of strategy is playing the best shot you own, not the shot the hole advertises. If the fairway curves right and you don't have a reliable right-finishing throw, the play is a controlled straight shot to the corner, not a forced flight you hit one time in five.",
            "Before every throw, answer three questions: Where do I want to putt from? What flight reliably gets there? What happens if this shot comes out 80% as good as planned? If the 80% version of the shot leaves you in trouble, pick a different shot.",
          ],
          points: [
            { title: "Throw your 90% shot", text: "A shot you execute 9 times in 10 beats a perfect-looking shot you hit half the time. Every time." },
            { title: "Position > distance", text: "The best drive is the one that makes the next shot easy, not the one that goes farthest." },
            { title: "Know your real distances", text: "Most players overestimate by 15%. Field-measure your comfortable (not maximum) distance with each disc." },
          ],
        },
        {
          id: "deeper",
          title: "Shaping shots to the hole",
          depth: 2,
          body: [
            "Intermediate strategy is matching flight shape to fairway shape with margin. On a left-curving hole (RHBH-friendly), a hyzer with an overstable disc gives the widest error window — released a bit off, it still curves home. On a right-curving hole, choose between an anhyzer, a forehand hyzer, or an understable turnover — and pick the one whose failure mode is safest, not the prettiest one.",
            "Think in landing zones, not lines. A 'gap' is a place your disc passes through; a 'zone' is where it stops. Amateurs aim at gaps; strong players aim at zones and choose whatever flight passes safely en route. On wooded courses this inverts the usual instinct: the widest gap early in the flight matters less than the flattest, most open ground at the end of it.",
          ],
          drills: [
            "Play a practice round where you must name the landing zone before every shot and score yourself on zones hit, not strokes.",
          ],
          videos: [
            { label: "Course strategy fundamentals", source: "Overthrow Disc Golf", query: "Overthrow disc golf course management strategy" },
          ],
        },
        {
          id: "indepth",
          title: "Thinking like a touring pro",
          depth: 3,
          body: [
            "Watch tournament coverage with the sound on and you'll hear the pro decision framework: par is determined on the tee. Pros classify each hole as a birdie hole (attack), a par hole (place and putt), or a danger hole (defend), and their aggression budget follows. On danger holes they deliberately play for the middle of the green or even short of it — taking the 3 every time instead of the 2.7 average that sometimes prints a 5.",
            "The other pro habit is planning backward from the putt: they decide which side of the basket they want to putt from (flat stance, no low ceiling, uphill rather than downhill comebacks) and choose the drive that produces that putt. Watch a Gannon Buhr or Paul McBeth round and count how rarely they leave themselves downhill putts over trouble — that's not luck, it's the whole plan.",
          ],
          videos: [
            { label: "Pro round with strategy commentary", source: "JomezPro", query: "JomezPro Gannon Buhr final round commentary" },
            { label: "How pros pick lines", source: "Disc Golf Pro Tour", query: "disc golf pro tour course strategy breakdown" },
          ],
        },
      ],
    },
    {
      slug: "wind-and-weather",
      title: "Wind & Weather",
      tagline: "The invisible opponent — and how to make it throw for you.",
      sections: [
        {
          id: "basics",
          title: "The wind rules",
          depth: 1,
          body: [
            "Wind changes how every disc flies, and the rules are learnable. Headwind makes discs act more understable: they turn over more and lift. Tailwind makes them act more overstable: they fade earlier and drop. Left-to-right and right-to-left crosswinds push flights sideways and exaggerate or fight your disc's natural curve.",
            "The practical response: into a headwind, throw a more overstable disc, lower and with less power than instinct says. With a tailwind, more understable and a touch higher. When it's really blowing, everything gets thrown lower — altitude is exposure.",
          ],
          points: [
            { title: "Headwind = more stable disc", text: "The wind adds effective airspeed, which adds turn. Compensate with stability." },
            { title: "Tailwind = less stable disc", text: "The wind subtracts airspeed; discs fade early and fall. Compensate with glide and turn." },
            { title: "When in doubt, throw low", text: "Wind strength doubles with altitude on open ground. Low flights are honest flights." },
          ],
        },
        {
          id: "deeper",
          title: "Crosswinds and touch shots",
          depth: 2,
          body: [
            "Crosswinds are subtler than head/tail. A wind pushing into the top of a tilted disc (e.g., left-to-right wind on a RHBH hyzer) flattens and lifts it, extending the flight; wind getting under the disc's edge slams it down. The skill is presenting the disc's top to the wind — choosing release angles so the wind presses down on the flight plate rather than lifting under it.",
            "Putting and approaches suffer most in wind because slow discs give wind more time to act. Firm, low, spin-heavy putts beat floaty ones in every wind direction. On blustery days, pros visibly change their short game: shorter run-ups, flatter releases, putters swapped for more overstable throwing putters, and a bias toward leaving the disc below the basket.",
          ],
          drills: [
            "On a windy day, spend 30 minutes in a field throwing the same disc across, into, and with the wind. Note where each flight ends versus a calm day — this calibration is worth strokes for a full season.",
          ],
          videos: [
            { label: "Playing in wind", source: "Overthrow Disc Golf", query: "Overthrow disc golf how to play in wind" },
          ],
        },
        {
          id: "indepth",
          title: "Weather as a competitive edge",
          depth: 3,
          body: [
            "Rounds are won in bad weather. Rain changes grip (towels, chalk, base-plastic backups), softens ground (no skips — flights must fly the full distance), and tightens everyone's game; the players who've practiced wet-hand throws gain strokes without throwing better. Cold stiffens plastic (discs act more overstable) and bodies (less snap — club up half a disc). Heat and altitude thin the air, making everything flippier and longer.",
            "Elite players scout conditions like a variable of the course: they check the forecast for their tee time, note which holes run with or against the prevailing wind, and pre-decide club and line changes. On tour, watch how differently the same hole plays across three rounds of coverage as the wind shifts — then notice the leaders were the ones whose discs and plans changed with it.",
          ],
          videos: [
            { label: "Pros in brutal conditions", source: "JomezPro", query: "disc golf pro tour windy round highlights" },
          ],
        },
      ],
    },
    {
      slug: "course-management",
      title: "Course Management",
      tagline: "Risk, terrain, and scoring math — the strokes you save by deciding well.",
      sections: [
        {
          id: "basics",
          title: "Risk and the scorecard",
          depth: 1,
          body: [
            "Course management is the discipline of trading tiny upside for huge downside protection. The math is simple and brutal: a heroic line that saves one stroke when it works but costs two when it fails needs to succeed 67% of the time just to break even — and most hero shots don't. Bogeys are fine; the round-killers are the doubles and triples that follow a bad decision compounded by a desperate one.",
            "The everyday rules: play away from out-of-bounds even at the cost of distance, take your medicine after a bad drive (pitch out, don't thread), and never follow a mistake with a low-percentage recovery. One boring stroke spent returning to position is almost always the cheapest stroke on the card.",
          ],
          points: [
            { title: "Avoid the big number", text: "Eliminating double bogeys lowers scores faster than adding birdies. Audit your last five rounds and see." },
            { title: "OB is worth two", text: "A penalty stroke plus lost position. Give out-of-bounds twice the respect a tree line gets." },
            { title: "Take your medicine", text: "After trouble, the first job is getting back to normal golf — not undoing the mistake in one throw." },
          ],
        },
        {
          id: "deeper",
          title: "Elevation and terrain",
          depth: 2,
          body: [
            "Elevation bends every flight. Throwing downhill, the disc has more time in the air — it will finish its full fade and more, so aim more conservatively and consider less stable discs; downhill shots also make distance judgment hard (most players throw long). Uphill, flights die early — club up, throw flatter into the slope, and expect the landing to stick.",
            "Ground game matters as much as air game: hardpan and dirt skip discs violently (plan the skip or kill it with a spike hyzer), thick grass swallows rollers, slopes kick discs downhill after landing. Reading where the disc goes after touchdown — the 'second flight' — is a stroke-per-round skill on hilly courses, and it's learned by deliberately watching every landing, yours and your cardmates'.",
          ],
          drills: [
            "On your home course, note the actual resting spot vs. landing spot for every drive in one round. The gaps you find are your terrain-reading syllabus.",
          ],
          videos: [
            { label: "Playing elevation", source: "Robbie C Disc Golf", query: "disc golf uphill downhill shots tips" },
          ],
        },
        {
          id: "indepth",
          title: "Scoring strategy across a round",
          depth: 3,
          body: [
            "Zoom out from holes to the round. Strong players budget aggression: they identify the three or four genuinely gettable holes and attack there, play the danger holes for par from the tee, and refuse to let the state of their round change their process — chasing after a bad stretch is how a +2 becomes a +7. The scorecard is an output; the process is the input you control.",
            "Know the format's math, too. In stroke play, variance is the enemy — steady pars win. In match play or doubles, variance can be a weapon — a risky birdie run costs the same whether you lose the hole by one or by three. And in multi-round events, course knowledge compounds: pros walk courses before tournaments noting wind lanes, skip zones, and pin positions. Your home-course version: keep one note per hole about what actually works, and reread it before league night.",
          ],
          videos: [
            { label: "Tournament strategy and mindset", source: "Disc Golf Pro Tour", query: "disc golf tournament strategy pros" },
          ],
        },
      ],
    },
  ],
};
