import type { Facet } from "./types";

export const shortGame: Facet = {
  slug: "short-game",
  title: "Short Game",
  emoji: "🎯",
  accent: "violet",
  summary:
    "Putting, approaches, and the touch shots that turn threes into twos — where scores are actually made.",
  topics: [
    {
      slug: "putting",
      title: "Putting",
      tagline: "The most practiced, most personal, most score-defining skill in the game.",
      sections: [
        {
          id: "basics",
          title: "A putt that repeats",
          depth: 1,
          body: [
            "A putt is a push, not a throw. Stand with your throwing-side foot forward, weight rocking from back foot to front, and push the disc toward the chains with your arm extending straight at the target, adding a light wrist spin at the end. The whole body moves together — legs, core, arm — in one smooth forward motion.",
            "Aim small: pick a single link of chain, not 'the basket'. And commit to one style early — the fundamentals of a spin putt (more wrist, flatter flight) or a push putt (more body, loftier flight) both work; switching constantly between them is what doesn't.",
          ],
          points: [
            { title: "Legs first", text: "Power comes from the weight shift. Arms-only putting collapses under pressure and range." },
            { title: "Follow through at the target", text: "Your hand should finish pointing at the chain link you picked." },
            { title: "Same routine, every time", text: "A consistent pre-putt routine (stance, breath, look, putt) is worth more than any technique tweak." },
          ],
        },
        {
          id: "deeper",
          title: "Practice that transfers to the course",
          depth: 2,
          body: [
            "Everyone practices putting; few practice it well. Standing at one distance and lobbing 30 putts grooves lazy reps. Better: game-like structure. Putt in sets from varying distances, count makes, keep score session to session, and always finish on a make. Pressure transfer comes from consequence — games where a miss resets your progress teach your body to putt while caring.",
            "Distance control is the real skill from 25 feet and beyond. Practice 'dying' putts that would land soft below the basket if they miss, versus firm putts that attack the chains — and know which one each course situation calls for (a firm miss past an out-of-bounds road is a disaster; a soft miss short of it is a tap-in).",
          ],
          drills: [
            "Around the world: 5 stations circling the basket at 20 feet. Make all 5 to advance to 25, miss any and restart the ring. Builds pressure tolerance fast.",
            "101 putts: 11 stations from 10 to 30 feet; track your total makes weekly. Improvement you can graph is improvement that continues.",
            "10 in a row from 15 feet before you leave. Miss the ninth? Start over. This is the drill that makes short putts automatic.",
          ],
          videos: [
            { label: "Putting fundamentals", source: "Overthrow Disc Golf", query: "Overthrow disc golf putting fundamentals" },
            { label: "Ricky Wysocki putting routine", source: "Ricky Wysocki", query: "Ricky Wysocki putting tutorial" },
          ],
        },
        {
          id: "indepth",
          title: "Circle 2, wind, and the mental putt",
          depth: 3,
          body: [
            "Competitive putting splits into zones. Circle 1 (inside 33 feet) is the make zone — pros convert ~85%+ here, and every miss is a stroke handed away. Circle 2 (33–66 feet) is the opportunity zone — pros make ~25%, and the real skill is the comeback distance when you miss. Great C2 putters aren't just accurate; they choose lines (straight spin, hyzer float, jump putt) whose misses leave tap-ins.",
            "Wind changes putt selection more than any other shot: headwinds lift putts (aim lower, putt firmer with less loft), tailwinds push them down (aim higher, more loft), and crosswinds demand nose-angle discipline. Beyond 33 feet you may jump putt — but your momentum can't carry you past your lie until the disc arrives when inside that range. And at every distance, the mental routine is the technique: the pros you watch draining pressure putts have practiced the routine as deliberately as the stroke.",
          ],
          videos: [
            { label: "Jump putt technique", source: "Robbie C Disc Golf", query: "disc golf jump putt technique" },
            { label: "Putting in wind", source: "Danny Lindahl", query: "disc golf putting in wind tips" },
          ],
        },
      ],
    },
    {
      slug: "approaches",
      title: "Approaches & Upshots",
      tagline: "The 100–250 foot shots that decide whether your putt is 15 feet or 50.",
      sections: [
        {
          id: "basics",
          title: "Get inside the circle",
          depth: 1,
          body: [
            "An approach (or upshot) is any shot meant to set up a short putt rather than go in. The goal is boring: land inside 20 feet, every time. Use your putter or midrange — their slow, straight flight is far more predictable at this range than any driver — and throw a smooth, controlled shot with minimal footwork.",
            "Aim below and short of the basket unless something forces otherwise. A disc that lands 15 feet short is a tap-in; a disc that flies 15 feet long may be down a hill, behind a bush, or out of bounds. Short-and-safe is the approach player's default religion.",
          ],
          points: [
            { title: "Putters approach best", text: "They fly straight, land soft, and don't skip away. Most approach errors are 'too much disc'." },
            { title: "Land it, don't fly it", text: "Plan where the disc touches down and what it does after — not where it looks pretty in the air." },
            { title: "Take the stress off the putt", text: "Every foot closer is putting percentage. A great approach game beats a great putting game." },
          ],
        },
        {
          id: "deeper",
          title: "Hyzer, anhyzer, and picking a flight",
          depth: 2,
          body: [
            "Three release angles cover nearly every approach. Hyzer (outside edge tilted down) flies a reliable left-curving arc (RHBH) and lands with a soft skip-less bite — the most repeatable shot in disc golf. Flat is straight but demands a clean release. Anhyzer (outside edge up) curves right, but adds glide and lands hotter — useful, riskier.",
            "Match the angle to the landing zone, not just the flight path. Hyzer finishes die leftward and stop; anhyzer finishes carry and can slide. On firm ground, plan for the skip; into a slope, land the disc flat on the upslope so it kills. The players who seem to always be 'lucky' near the basket are just choosing flights whose endings are predictable.",
          ],
          drills: [
            "Circle game: pick a target 150 feet out and throw 5 putters, 5 mids. Score points for inside-20-feet. Track weekly.",
            "Three-angle reps: same 120-foot target — hyzer, flat, anhyzer, repeat. Being able to hit one distance three ways is real course skill.",
          ],
          videos: [
            { label: "Upshot fundamentals", source: "Overthrow Disc Golf", query: "Overthrow disc golf upshots approach tutorial" },
          ],
        },
        {
          id: "indepth",
          title: "Touch, spike hyzers, and scramble approaches",
          depth: 3,
          body: [
            "The advanced approach game is about killing the disc's energy on purpose. The spike hyzer flies high and steep and slams down nearly vertically — zero skip, perfect for landing tight to a basket guarded by trouble behind. The flex shot rides an S-curve to reach around obstacles. Low 'worm-burner' throws under branches, stand-still pitches from awkward stances, and deliberate skip shots off hardpan complete the toolkit.",
            "Watch how pros approach from trouble: the priority order is (1) guarantee the next shot is a putt, (2) keep the disc in bounds, (3) get close. Distance to the basket is third. Paul McBeth's scramble percentage — how often he saves par after a bad drive — is as responsible for his titles as his distance, and scramble skill is nearly all approach-shot craft.",
          ],
          videos: [
            { label: "Spike hyzer and flex approaches", source: "Robbie C Disc Golf", query: "disc golf spike hyzer flex shot tutorial" },
            { label: "Paul McBeth around the green", source: "Paul McBeth", query: "Paul McBeth approach shots highlights" },
          ],
        },
      ],
    },
    {
      slug: "specialty-shots",
      title: "Specialty Shots",
      tagline: "Rollers, overhands, and escapes — for when the fairway says no.",
      sections: [
        {
          id: "basics",
          title: "The utility shots",
          depth: 1,
          body: [
            "Sometimes no flight works: the ceiling is too low, the gap too narrow, the angle impossible. That's when specialty shots earn their keep. The main ones: the roller (disc lands on edge and rolls, covering huge distance along the ground), the overhand (thrown like a baseball — 'thumber' or 'tomahawk' depending on grip — flying an over-the-top corkscrew), and the scoober (an upside-down flick that floats over short obstacles).",
            "You don't need these on day one. But knowing they exist changes how you read trouble — almost no lie in disc golf is truly dead, and the difference between a bogey and a triple is usually one escape shot you either have or don't.",
          ],
          points: [
            { title: "Roller", text: "Ground game. When the air is blocked, the ground is usually open." },
            { title: "Thumber / Tomahawk", text: "Over the top. When there's no gap through, there's often a gap above." },
            { title: "Pitch-out", text: "The humble sideways toss back to the fairway — statistically the best escape shot in the game." },
          ],
        },
        {
          id: "deeper",
          title: "Learning the roller",
          depth: 2,
          body: [
            "A backhand roller is thrown on a steep anhyzer with an understable disc so it lands on its edge and stands up into a roll. The angle at which it lands determines the path: landing more vertical rolls straight and long, more tilted curves it. Practice on flat, mowed grass — the shot is genuinely fun to learn and can cover 300+ feet along the ground for players who can't yet fly a disc that far.",
            "Rollers shine in specific spots: low ceilings, long open par 5s, and firm terrain. They're chaos on rough ground, and they're banned from nobody's bag by anything but practice time. Start with a beat-in understable fairway driver, aim the landing 50–100 feet out, and expect comedy for the first two sessions.",
          ],
          drills: [
            "Roller ladder: on a soccer field, try to roll past markers at 150, 200, 250 feet. Note which release angle produced each distance.",
          ],
          videos: [
            { label: "How to throw a roller", source: "Overthrow Disc Golf", query: "Overthrow disc golf roller tutorial" },
          ],
        },
        {
          id: "indepth",
          title: "Overhands and the full escape toolkit",
          depth: 3,
          body: [
            "Overhand throws use an overstable disc thrown vertically: a thumber (thumb inside the rim) corkscrews left-then-down, a tomahawk (forehand grip) mirrors it right-then-down. Their flight is immune to most wind and most obstacles — the disc goes up, over, and drops steeply — making them the shot of choice for high guardian trees and cut-through escape lines. Distance overhands reach 300+ feet for practiced arms.",
            "The complete escape decision tree, in pro order: Can I pitch out sideways to a putt? Can I roll it under? Can I throw over the top? Only then: can I thread the gap? Threading feels heroic but compounds mistakes — coverage stats consistently show the double-bogeys that wreck rounds come from failed hero gaps, not from conservative pitch-outs. Watch how rarely pros take the low-percentage line when scrambling, and how good their 'boring' escapes leave them.",
          ],
          videos: [
            { label: "Thumber vs tomahawk tutorial", source: "Robbie C Disc Golf", query: "disc golf thumber tomahawk tutorial" },
            { label: "Pro scramble escapes compilation", source: "JomezPro", query: "disc golf best scramble shots pro" },
          ],
        },
      ],
    },
  ],
};
