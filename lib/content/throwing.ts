import type { Facet } from "./types";

export const throwing: Facet = {
  slug: "throwing",
  title: "Throwing Technique",
  emoji: "💪",
  accent: "orange",
  summary:
    "Grip, backhand, forehand, and the footwork that turns arm throws into full-body power.",
  topics: [
    {
      slug: "grip",
      title: "Grip",
      tagline: "Where all power and accuracy starts — and where most problems hide.",
      sections: [
        {
          id: "basics",
          title: "The two grips you need",
          depth: 1,
          body: [
            "Backhand drives and forehands each have a standard grip, and getting both right is where all power and accuracy starts.",
          ],
          bullets: [
            "Backhand power grip: all four fingers curled under the rim, pads pressing the inside wall, thumb on top.",
            "The power grip should feel like the disc would have to rip out of your hand — a clean throw ends with the disc pulling itself free at the last moment.",
            "Forehand (sidearm) standard is the two-finger stacked grip: index and middle finger together against the inside rim, thumb on top, like flicking a frisbee with support.",
            "For putting and touch shots, relax to a fan grip — fingers spread under the flight plate for control instead of power.",
          ],
          points: [
            { title: "Firm, not strangled", text: "Grip pressure comes mostly from the last two fingers on backhand. A death grip in the whole hand kills wrist snap." },
            { title: "Clean release beats power", text: "80% of accuracy problems trace back to grip and release angle, not the throwing motion." },
            { title: "Flat wrist", text: "Keep the top of the disc level with your forearm. A cocked wrist adds accidental nose angle." },
          ],
        },
        {
          id: "deeper",
          title: "Grip pressure and the rip",
          depth: 2,
          body: [
            "The disc shouldn't be released so much as ripped out — on a good backhand, the disc's own momentum tears it from your grip at the 'hit', the moment of maximum acceleration.",
          ],
          bullets: [
            "Hold firmly through the pull. If you're consciously letting go, you're leaking power.",
            "If the disc consistently comes out early or late, the fix is almost always grip pressure or a wrist angle problem, not timing willpower.",
            "Throws that flutter or wobble ('off-axis torque') usually mean uneven finger pressure or a loose grip at the hit.",
            "Throws that spike into the ground early often mean nose-down wrist; throws that stall and fall left mean nose-up.",
            "Film one throw in slow motion and the grip story is usually obvious.",
          ],
          drills: [
            "Towel drill: snap a hand towel like a whip with your backhand motion. The 'crack' happens where the disc hit should be — it trains late acceleration.",
            "Grip-only reps: stand still, no run-up, and throw 50% putters focusing only on the disc ripping cleanly out. Ten minutes, twice a week.",
          ],
          videos: [
            { label: "Backhand grip fundamentals", source: "Overthrow Disc Golf", query: "Overthrow disc golf backhand grip" },
          ],
        },
        {
          id: "indepth",
          title: "Nose angle: the invisible distance thief",
          depth: 3,
          body: [
            "Nose angle — whether the front edge of the disc points slightly up or down at release — is the least visible, most costly variable in throwing.",
          ],
          bullets: [
            "A few degrees nose-up makes a disc climb, stall, and drop with a hard fade, costing 50–100 feet.",
            "Slightly nose-down lets the disc knife forward and glide.",
            "Nearly all beginners throw nose-up without knowing it — the natural 'frisbee toss' wrist position points the nose skyward.",
            "The fix lives in the grip and wrist, not the arm: tilt the wrist so your palm faces more downward through the pull, and grip the disc deeper so your hand naturally flattens it.",
            "Pros obsess over nose angle — it's a big part of why their smooth-looking throws outdistance harder-swinging amateurs.",
            "If your discs fade early no matter what you throw, suspect nose angle before you suspect the disc.",
          ],
          videos: [
            { label: "Fixing nose angle", source: "Robbie C Disc Golf", query: "Robbie C disc golf nose angle fix" },
            { label: "Slow-motion pro form study", source: "Gannon Buhr", query: "Gannon Buhr slow motion backhand form" },
          ],
        },
      ],
    },
    {
      slug: "backhand",
      title: "Backhand",
      tagline: "The foundational throw: reach back, pull through, hit.",
      sections: [
        {
          id: "basics",
          title: "The motion, simplified",
          depth: 1,
          body: [
            "The backhand is a flat pull across the chest that ends with the disc ripping out toward the target — and the single most important beginner cue is to throw flat and smooth at 70% effort.",
          ],
          bullets: [
            "Stand sideways to your target, feet shoulder-width.",
            "Reach the disc back away from the target, keeping it flat and close to your chest line.",
            "Pull the disc straight across your chest — like starting a lawnmower — rotating your hips and shoulders through as it rips out toward the target.",
            "Follow through by letting your body finish the spin.",
            "Power without a flat, clean release just sprays throws; smooth and flat at short distance builds the pattern that later becomes effortless distance.",
          ],
          points: [
            { title: "Pull in a straight line", text: "The disc should travel a straight line across your chest, not swing in a wide arc around your body." },
            { title: "Hips lead, arm follows", text: "Power flows from the ground: legs, then hips, then shoulders, then the arm — the disc leaves last." },
            { title: "Spin > effort", text: "Distance comes from spin and clean release, not muscle. Smooth is far." },
          ],
        },
        {
          id: "deeper",
          title: "The x-step and weight shift",
          depth: 2,
          body: [
            "The x-step is the footwork that adds body power to your throw — it turns a standstill arm throw into a full-body kinetic chain.",
          ],
          bullets: [
            "Walking toward the target, cross your trailing foot behind your lead foot on the second-to-last step.",
            "Land sideways with your weight loaded on the back leg, then plant the front foot and rotate through.",
            "Timing beats speed: a slow, rhythmic x-step with a full weight shift from back leg to front leg adds more distance than a sprinting run-up with bad timing.",
            "The best learning sequence for most players: master the standstill throw, then one step, then the full x-step — each stage only after the previous one is clean.",
          ],
          drills: [
            "Standstill practice: throw 20 drives per session with zero footwork. Standstills isolate the upper-body mechanics and are the highest-value form drill that exists.",
            "Walk-up rhythm: practice the x-step with no disc, chanting 'step — cross — plant — throw' until it's automatic.",
          ],
          videos: [
            { label: "The x-step, taught step by step", source: "Overthrow Disc Golf", query: "Overthrow disc golf x step tutorial" },
            { label: "Backhand form from the ground up", source: "Danny Lindahl", query: "Danny Lindahl backhand form basics" },
          ],
        },
        {
          id: "indepth",
          title: "The kinetic chain and modern form",
          depth: 3,
          body: [
            "Elite backhand form is a sequenced kinetic chain, each link accelerating the next — it's how 150-pound pros like Gannon Buhr out-throw gym-strong amateurs by 200 feet.",
          ],
          bullets: [
            "The chain in order: the back leg drives the hips open, the hips yank the still-closed shoulders around, the shoulders whip the upper arm, the elbow leads the forearm, and the forearm slings the disc.",
            "The disc releases through the 'power pocket' — the position where the disc is close to the right pec with the elbow bent 90°.",
            "The brace: the front leg plants firm and stops your forward momentum, converting linear motion into rotation — think of it as the pole in tetherball.",
            "Lag and late acceleration: the disc stays back and slow through most of the motion, then accelerates violently in the last quarter.",
            "If your fastest arm speed happens early in the pull, you've spent your power before the disc could use it.",
          ],
          drills: [
            "Film yourself from behind and from the side at 240fps (any modern phone). Compare against pro slow-motion: check power pocket depth, brace timing, and where peak arm speed occurs.",
            "One-leg drill: throw standstills with all weight on your front leg to feel what a real brace and rotation feel like.",
          ],
          videos: [
            { label: "Gannon Buhr form breakdown", source: "Gannon Buhr", query: "Gannon Buhr backhand form breakdown" },
            { label: "Power pocket and lag explained", source: "Overthrow Disc Golf", query: "Overthrow disc golf power pocket lag" },
            { label: "Simon Lizotte throws 600 feet — how", source: "Simon Lizotte", query: "Simon Lizotte distance form slow motion" },
          ],
        },
      ],
    },
    {
      slug: "forehand",
      title: "Forehand (Sidearm)",
      tagline: "The mirror-image flight that doubles your shot options.",
      sections: [
        {
          id: "basics",
          title: "Why and how",
          depth: 1,
          body: [
            "The forehand (or sidearm or 'flick') is thrown palm-up from your throwing side, like skipping a stone.",
          ],
          bullets: [
            "Its flight mirrors the backhand — for a right-hander, forehands finish right where backhands finish left.",
            "Having both throws means you can shape a shot around either side of an obstacle without ever throwing across your body.",
            "Start short: stand facing slightly toward the target, elbow bent and tucked near your ribs.",
            "Snap the disc forward with wrist spin — the motion is compact, nothing like a baseball throw.",
            "Most of a forehand is wrist; the arm mostly just delivers the wrist to the release point.",
          ],
          points: [
            { title: "It's a flick, not a throw", text: "Wrist snap generates the spin. Big arm swings cause wobble." },
            { title: "Elbow in", text: "Keep the elbow close to your body. A flying elbow is the #1 forehand fault." },
            { title: "Start with stable discs", text: "Forehands put less spin on the disc, so understable discs flip over. Learn with a stable mid or fairway." },
          ],
        },
        {
          id: "deeper",
          title: "Killing the wobble",
          depth: 2,
          body: [
            "Almost every developing forehand wobbles — the disc flutters in the first 50 feet because it left the hand with off-axis torque.",
          ],
          bullets: [
            "The usual causes: too much arm and not enough wrist, a loose grip at the release, or the disc's outside edge dipped at release.",
            "The cure is counterintuitive: slow down, shorten the motion, and let the wrist do everything.",
            "A useful mental model is throwing 'through' the disc's line of flight: the palm and forearm drive straight at the target while the wrist snaps the disc flat.",
            "Practice from a knee or standstill at 100 feet until the disc comes out spinning clean, then add power.",
            "A clean 200-foot forehand is worth more on the course than a wobbling 300-foot one.",
          ],
          drills: [
            "Kneeling flicks: from one knee, flick a putter 50–100 feet focusing purely on clean spin. The kneeling position removes the body and isolates the wrist.",
            "Two-disc test: throw the same line forehand and backhand. If your forehand flight is much shorter or wobblier, spend your next three field sessions at half power.",
          ],
          videos: [
            { label: "Forehand fundamentals", source: "Overthrow Disc Golf", query: "Overthrow disc golf forehand tutorial" },
            { label: "Fix forehand wobble", source: "Robbie C Disc Golf", query: "disc golf forehand wobble fix" },
          ],
        },
        {
          id: "indepth",
          title: "Forehand as a complete game",
          depth: 3,
          body: [
            "At the top level, the forehand is a full toolkit, not a backup throw.",
          ],
          bullets: [
            "The toolkit includes flex forehands that ride a right-to-left-to-right S-curve, touch forehands that land dead under the basket, forehand rollers, and high-power drives.",
            "Players like Ezra Aderhold and Calvin Heimburg drive forehand 450+ feet.",
            "Many pros throw forehand on close to half their tee shots because it lets them keep the disc's finishing direction matched to the hole's shape.",
            "Advanced mechanics center on the 'palm drive': leading with the palm toward the target while the disc lags behind the wrist, then releasing with the shoulder-forearm-wrist snapping in sequence.",
            "Footwork mirrors the backhand's principles — a modest run-up with a firm front-leg brace — but the throwing stance stays more open.",
            "If you're building one, prioritize a dead-straight 250-foot forehand before chasing distance; it unlocks more holes than 350 with a hook.",
          ],
          videos: [
            { label: "Ezra Aderhold forehand slow motion", source: "Ezra Aderhold", query: "Ezra Aderhold forehand slow motion form" },
            { label: "Calvin Heimburg forehand masterclass", source: "Calvin Heimburg", query: "Calvin Heimburg forehand form" },
          ],
        },
      ],
    },
    {
      slug: "distance",
      title: "Throwing Farther",
      tagline: "Where real distance comes from — and the myths that keep players short.",
      sections: [
        {
          id: "basics",
          title: "The distance truths",
          depth: 1,
          body: [
            "Distance myths cost players years — the truth is that distance comes from clean technique and timing, not strength.",
          ],
          bullets: [
            "Slower discs thrown well outdistance fast discs thrown poorly.",
            "Nearly every player under 300 feet has more to gain from fixing nose angle and timing than from any disc purchase or gym program.",
            "The typical progression: a brand-new player throws 150–200 feet, and a player with a season of clean fundamentals reaches 250–300.",
            "A player with a well-timed x-step and good nose control reaches 350+.",
            "Each stage comes from subtracting errors, not adding effort.",
          ],
          points: [
            { title: "Smooth is far", text: "Peak pro throws look effortless because the power is sequencing, not muscle." },
            { title: "Fix the biggest leak first", text: "Nose angle, early release, and no weight shift are the big three. Film yourself to find yours." },
            { title: "Distance is a byproduct", text: "Chase clean flights at 80% power. Distance shows up on its own." },
          ],
        },
        {
          id: "deeper",
          title: "Field work that actually works",
          depth: 2,
          body: [
            "Distance is built in the field, not on the course.",
          ],
          bullets: [
            "A productive session: 10 minutes of standstills with a midrange for form calibration, then 20–30 drives with one fairway driver at 80% power, all on the same line.",
            "Walk down and observe the landing pattern — it's the data: a tight grouping means your form is repeatable, a spray means you're throwing beyond your current mechanics.",
            "Throw with intent on every rep: twenty throws with a specific focus ('flat release', 'full reach-back', 'late acceleration') beat a hundred mindless hucks.",
            "Record a few throws every session — form change you can't see doesn't stick, and phone slow-motion is the cheapest coach in sports.",
          ],
          drills: [
            "80% club: entire field session at 80% effort, judging only flight quality and grouping. Most players unlock 20–40 feet the first week they stop maxing out.",
            "One-disc ladder: throw the same fairway driver on hyzer, flat, and anhyzer lines in rotation — line control converts directly into course distance.",
          ],
          videos: [
            { label: "Field work routine for distance", source: "Overthrow Disc Golf", query: "Overthrow disc golf field work distance routine" },
          ],
        },
        {
          id: "indepth",
          title: "Advanced power: angles, doors, and the 500-foot picture",
          depth: 3,
          body: [
            "Max-distance throws don't fly flat — they're thrown on a hyzer-flip or turnover line, high and slightly right (RHBH), letting an understable driver turn over, ride the wind, and glide through a full S-curve.",
          ],
          bullets: [
            "Understanding release angle versus flight shape — hyzer, flat, anhyzer, and how each interacts with disc stability — separates a 350-foot golf drive from a 450-foot max-distance line.",
            "Watch a distance form breakdown of Simon Lizotte or Gannon Buhr and track four checkpoints, trainable one at a time.",
            "The four checkpoints: full coil (back completely turned to the target at reach-back), deep power pocket, front-leg brace stopping the slide, and the head staying back through the hit.",
            "Each checkpoint is worth more than any 14-speed driver.",
            "The final 10% is genuine athleticism, but 90% of a 500-foot throw is sequencing that a dedicated amateur can build in a couple of seasons.",
          ],
          videos: [
            { label: "Distance form breakdown", source: "Simon Lizotte", query: "Simon Lizotte distance tips form" },
            { label: "How pros throw 500 feet", source: "Overthrow Disc Golf", query: "how pros throw 500 feet disc golf analysis" },
          ],
        },
      ],
    },
  ],
};
