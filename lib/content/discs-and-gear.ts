import type { Facet } from "./types";

export const discsAndGear: Facet = {
  slug: "discs-and-gear",
  title: "Discs & Gear",
  emoji: "🎒",
  accent: "sky",
  summary:
    "Disc types, flight numbers, plastics, and how to build a bag that actually fits your arm.",
  topics: [
    {
      slug: "disc-types",
      title: "Types of Discs",
      tagline: "Putters, midranges, and drivers — what each is actually for.",
      sections: [
        {
          id: "basics",
          title: "The four categories",
          depth: 1,
          body: [
            "Discs come in four broad types, defined mostly by the shape of their rim. Putters have a blunt, deep rim and fly slow and straight — they're for putting and short, precise shots. Midranges have a slightly sharper edge and are the all-purpose discs for controlled shots up to ~250 feet.",
            "Fairway drivers have a sharper rim for more speed and glide, covering controlled drives in the 250–350 foot range. Distance drivers have the widest, sharpest rims and the most speed potential — but they demand arm speed most new players don't have yet.",
          ],
          points: [
            { title: "Putter", text: "Slow, straight, predictable. The disc you'll use on more throws than any other." },
            { title: "Midrange", text: "The workhorse. If you could only own one disc, it should be a midrange." },
            { title: "Fairway driver", text: "Controlled distance. The 'longest disc most players should throw' for their first year." },
            { title: "Distance driver", text: "Maximum speed and distance — once your form can feed it. Earn it, don't start with it." },
          ],
        },
        {
          id: "deeper",
          title: "Rim shape and why it matters",
          depth: 2,
          body: [
            "A disc's rim is its wing. Wider, sharper rims cut through air faster and convert arm speed into distance, but they need that speed to generate lift and fly their designed path. Throw a wide-rim distance driver at putter speed and it doesn't fly slower and straight — it dives left (for a right-hand backhand) almost immediately.",
            "This is why 'downspeeding' is the classic beginner mistake and why experienced players tell every new player the same thing: master slow discs first. A putter thrown with clean form flies farther than a distance driver thrown with poor form, and it teaches you the feedback loop — you can see your form errors in a slow disc's flight, while a fast disc just hides them in an early fade.",
          ],
          videos: [
            { label: "Putter vs mid vs driver, demonstrated", source: "Overthrow Disc Golf", query: "Overthrow disc golf putter midrange driver difference" },
          ],
        },
        {
          id: "indepth",
          title: "Molds, runs, and why players carry duplicates",
          depth: 3,
          body: [
            "Each disc model is called a mold, and the same mold can fly differently between production runs and plastic types. Serious players exploit this: they carry several copies of one mold in different plastics and wear states, giving them a family of flights from one familiar feel. A beat-in old copy turns over easily; a fresh premium copy fades hard.",
            "Discs also 'season' with use — hitting trees and ground gradually makes a disc less stable (more prone to turning right for a right-hand backhand). Many players' favorite disc is a years-old, beat-in copy they can no longer buy off the shelf. This is why you'll hear pros talk about protecting a specific disc: flight character is earned, not purchased.",
          ],
          videos: [
            { label: "What's in a pro's bag and why", source: "Gannon Buhr", query: "Gannon Buhr in the bag" },
          ],
        },
      ],
    },
    {
      slug: "flight-numbers",
      title: "Flight Numbers",
      tagline: "Speed, glide, turn, fade — the four-number code on every disc.",
      sections: [
        {
          id: "basics",
          title: "Decoding the four numbers",
          depth: 1,
          body: [
            "Most discs are printed with four numbers, like 9 / 5 / -1 / 2. In order they are Speed, Glide, Turn, and Fade. Speed (1–14) is how fast you must throw the disc for it to fly as designed. Glide (1–7) is how long it stays aloft. Turn (+1 to -5) is how much it drifts right early in the flight (for a right-hand backhand). Fade (0–5) is how hard it hooks left at the end.",
            "Read flight numbers as a story of one throw: the disc leaves your hand (speed), carries (glide), maybe drifts right mid-flight (turn), then finishes left (fade). A 9/5/-1/2 fairway driver flies fast, carries well, turns slightly right, and finishes with a modest left hook.",
          ],
          points: [
            { title: "Speed", text: "A requirement, not a reward. High speed only helps if your arm can supply it." },
            { title: "Glide", text: "More glide = more distance and more forgiveness. Great for beginners." },
            { title: "Turn", text: "Negative numbers turn right (RHBH). -2 and beyond is beginner-friendly." },
            { title: "Fade", text: "The left finish. Low fade flies straight; high fade is for reliable hooks and wind." },
          ],
        },
        {
          id: "deeper",
          title: "Stability: putting it all together",
          depth: 2,
          body: [
            "Turn and fade combine into a disc's overall stability. An overstable disc (little turn, big fade — e.g. 0/3) resists turning right and always finishes hard left; it's reliable in wind and for shaping left-hooking shots. An understable disc (big turn, little fade — e.g. -3/1) turns right readily at moderate power; it's how newer players get right-moving flights and extra distance.",
            "Stable or neutral discs (around -1/1) fly straightest. Crucially, stability is relative to your power: a disc that's neutral for a pro is overstable for a beginner. When someone says a disc is 'flippy' (turns over too easily) or 'a meathook' (fades immediately), they're describing stability at their power level, not an absolute truth.",
          ],
          videos: [
            { label: "Understable vs overstable, visualized", source: "Robbie C Disc Golf", query: "Robbie C understable vs overstable explained" },
          ],
        },
        {
          id: "indepth",
          title: "Reading flights like a fitter",
          depth: 3,
          body: [
            "Flight numbers are a manufacturer's estimate, not physics — the same numbers from two brands can fly differently, and numbers can't capture how a disc responds to nose angle, hyzer release, or headwind. The deeper skill is calibrating numbers against your own throws: find one disc you know well and use its flight as your personal baseline for judging everything else.",
            "Wind shifts effective stability: a headwind makes every disc act more understable (more turn), a tailwind makes discs act more overstable (earlier fade). This is why players carry an overstable 'utility' disc for headwinds even if they rarely throw it otherwise. Elevation matters too — discs are noticeably more stable in dense low-altitude air and flippier at altitude.",
          ],
          drills: [
            "Take three discs with different stability to a field. Throw each ten times at the same target line and sketch the average flight of each — you've just built your own flight chart.",
          ],
          videos: [
            { label: "Flight numbers deep dive", source: "Best Disc Golf Discs", query: "disc golf flight numbers explained deep dive" },
          ],
        },
      ],
    },
    {
      slug: "plastics-and-weight",
      title: "Plastics & Weight",
      tagline: "Why the same disc comes in five plastics and thirty grams of range.",
      sections: [
        {
          id: "basics",
          title: "Base vs premium plastic",
          depth: 1,
          body: [
            "Every brand sells its discs in multiple plastic blends. Base plastics (like Innova DX or Discraft Pro-D) are cheap, grippy, and wear quickly — great for putters, where grip and feel matter most. Premium plastics (like Star, ESP, or Neutron) are durable, hold their flight for years, and shrug off tree hits, which is why most players buy drivers and mids in premium blends.",
            "Weight matters too: most discs run 150–180 grams. Lighter discs are easier to throw far with a slower arm; heavier discs are more stable and handle wind better. Beginners generally do best in the 150–170g range, moving heavier as arm speed develops.",
          ],
          points: [
            { title: "Base plastic", text: "Cheap and grippy, beats in fast. Ideal for putters; fine for learning." },
            { title: "Premium plastic", text: "Durable and consistent. Worth it for any disc you want to fly the same next year." },
            { title: "Lighter = easier", text: "10 fewer grams can add real distance for a developing arm." },
          ],
        },
        {
          id: "deeper",
          title: "Feel, grip, and conditions",
          depth: 2,
          body: [
            "Plastic choice is also about your hand. Blends vary in stiffness and surface texture, and what feels locked-in for one player feels soapy to another. Cold weather stiffens plastic and rain makes some blends slick, which is why many players carry a grippier backup putter for winter and wet rounds, plus a towel and chalk bag.",
            "The same mold in different plastics also flies differently — typically, premium versions of a mold are a touch more overstable than base versions, and some special blends sit in between. Once you love a mold, trying it across plastics is a cheap way to get a small flight family with identical feel.",
          ],
          videos: [
            { label: "Disc golf plastics compared", source: "Overthrow Disc Golf", query: "disc golf plastic types explained comparison" },
          ],
        },
        {
          id: "indepth",
          title: "The gear beyond discs",
          depth: 3,
          body: [
            "A small kit makes rounds better: a bag or backpack (start small — a 6-disc starter bag is fine for a year), a towel for wet hands, a mini marker disc, and a pencil. As you play more, a retriever pole pays for itself the first time it saves a $20 disc from a pond, and a sturdy pair of trail shoes matters more than any disc for wooded, hilly courses.",
            "Resist gear escalation early. A $200 cart and 25 discs won't lower your score at the six-month mark — reps with a few discs will. The players who improve fastest almost universally kept a simple bag and spent their money on nothing more exotic than field-work time and a putting basket for the yard.",
          ],
          videos: [
            { label: "What to actually buy as a new player", source: "UDisc", query: "disc golf gear beginners actually need" },
          ],
        },
      ],
    },
    {
      slug: "building-a-bag",
      title: "Building Your Bag",
      tagline: "From three discs to a full quiver — without wasting money.",
      sections: [
        {
          id: "basics",
          title: "The starter bag",
          depth: 1,
          body: [
            "A great first bag is three or four discs: a putter you like the feel of, a neutral midrange, an understable fairway driver, and optionally a second putter for practice. That covers putting, approaches, straight drives, and turning drives — every shot a first-year player needs.",
            "Buy one disc at a time and learn what it does before adding the next. Every disc in your bag should have a job you can name. 'It looked cool' is how bags end up with twenty discs and no answers.",
          ],
          points: [
            { title: "2 putters", text: "One to putt with, one to throw. Same mold, so practice transfers." },
            { title: "1–2 midranges", text: "A neutral one first; add an overstable one when you need a reliable left finish." },
            { title: "1–2 fairway drivers", text: "Understable first for distance, then something more stable for wind." },
          ],
        },
        {
          id: "deeper",
          title: "Filling the gaps",
          depth: 2,
          body: [
            "Grow your bag by shot, not by disc. After the starter core, the usual additions in order: an overstable midrange (reliable hooks and headwinds), a stable fairway driver (your new go-to off the tee), an overstable utility disc (escape shots and big wind), and eventually distance drivers as your form matures past ~300 feet of fairway-driver distance.",
            "A well-built intermediate bag of 8–12 discs covers a flight chart: for each distance band, you want something that finishes left, something straight, and something that works right. When you can name the gap ('I have nothing that flies 275 and finishes right'), you're bag-building like an experienced player.",
          ],
          videos: [
            { label: "How to build a bag the smart way", source: "Danny Lindahl", query: "Danny Lindahl how to build disc golf bag" },
          ],
        },
        {
          id: "indepth",
          title: "Cycling molds like the pros",
          depth: 3,
          body: [
            "Watch a pro's 'in the bag' video and you'll see a pattern: fewer molds than you'd expect, in multiple copies. Pros cycle molds — new overstable copies become neutral with wear, then understable, and each stage keeps a slot in the bag. One familiar mold covering three flights beats three unfamiliar molds, because the grip, weight distribution, and release feel stay identical.",
            "The other pro habit worth copying is ruthless removal. If a disc hasn't been thrown in five rounds, it comes out. Every disc that stays must answer a specific question the course asks. Gannon Buhr, Paul McBeth, and most touring pros carry 20+ discs — but a typical round uses eight of them, and their bags are the product of subtraction, not collection.",
          ],
          videos: [
            { label: "Gannon Buhr: in the bag", source: "Gannon Buhr", query: "Gannon Buhr in the bag latest" },
            { label: "Paul McBeth: in the bag", source: "Paul McBeth", query: "Paul McBeth in the bag latest" },
          ],
        },
      ],
    },
  ],
};
