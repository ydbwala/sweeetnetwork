/* Sweeet Network content — pulled from the HEADERS doc and the 2026 business plan. */

export const SOCIALS = {
  instagram: "https://www.instagram.com/sweeetnetwork",
  youtube: "https://www.youtube.com/@sweeetnetwork",
  tiktok: "https://www.tiktok.com/@sweeetnetwork",
  email: "Info.sweeet.ng@gmail.com",
};

export const TICKER_ITEMS = [
  "Sugar, spice, everything nice",
  "New in The Digest: Starrgirl season",
  "Pass the pepper — bring your hot takes",
  "The Playground is open",
  "Sweeet Spot: new Lagos spots weekly",
  "A little culture. A little chaos. A lot of Sweeet",
  "Spill the tea (anonymously)",
  "Certified vendors only",
];

/* ---------------- The Digest ---------------- */

export type Article = {
  id: string;
  section: "first-slice" | "trending";
  category: string;
  title: string;
  dek: string;
  emoji: string;
  color: "pink" | "yellow" | "lilac" | "orange" | "mint";
  minutes: number;
  reactions: number;
  comments: number;
  poll?: { question: string; options: { label: string; votes: number }[] };
  body: string[];
  verdict?: string;
  kicker?: string;
};

export const ARTICLES: Article[] = [
  {
    id: "starrgirl",
    section: "first-slice",
    category: "First Slice",
    title: "Ayra Starr's Starrgirl Album Has Everyone Wearing Purple and Feeling Confident",
    dek: "Purple outfits, pretty-girl energy, and an entire fanbase feeling themselves? Ayra Starr said it's time to step into our confident-girl era, and apparently, we're all clocking in.",
    emoji: "💜",
    color: "lilac",
    minutes: 4,
    reactions: 486,
    comments: 93,
    kicker: "Album first impressions",
    body: [
      "Since Starrgirl dropped, the purple is purpling, the fits are definitely fitting, and the girls are looking like they have absolutely no business stressing over anybody. Suddenly, confidence has a colour, and it's purple.",
      "But beyond the aesthetic, the real magic is how an album can make people feel like they're part of something. Starrgirl isn't just getting people to listen; it's giving them a whole mood to dress up for, post about, and make their own.",
      "And honestly? We love to see it. Give us the purple, the confidence, the playlists, and the excuse to romanticise ourselves a little more.",
    ],
    verdict:
      "We came for the music, caught the confidence bug, and now we're wondering if our wardrobes have enough purple.",
  },
  {
    id: "grammys",
    section: "first-slice",
    category: "First Slice",
    title: "Grammy Season Is Here, and Nigerian Artists Have Entered the Chat",
    dek: "Submissions for the 2027 Grammy Awards are in — Davido, Tems, Asake, Ayra Starr, Victony, Seun Kuti and more have put their music forward. And this time, our people are going for the big rooms.",
    emoji: "🏆",
    color: "yellow",
    minutes: 5,
    reactions: 311,
    comments: 145,
    kicker: "Music & awards",
    body: [
      "Guess who's coming for the Grammys again? Us. Nigerians. Who else?",
      "Submissions for the 2027 Grammy Awards are in, and Davido, Tems, Asake, Ayra Starr, Victony, Seun Kuti and more have put their music forward.",
      "Davido submitted ORIADÉ and B4 B4 (featuring Mayorkun and FOLA). Tems is in with Love Is a Kingdom and What You Need. Asake has M$NEY and Gratitude, and Ayra Starr has Starrgirl and Heaven Baby, her song with Zayn.",
      "And this time, it's not only Best African Music Performance. Some of these songs were also submitted for Album of the Year, Record of the Year, R&B and pop. Our people are going for the big rooms, and I'm here for it.",
      "Now, the name everybody's talking about online is NO11, who reportedly submitted How Far, featuring Monochrome. Of course, the internet has opinions. Some people are debating the song, others are debating its chances of getting a nomination. Let them talk.",
      "We've been here before, Sweeeties! This isn't our first time at the table. Burna Boy won Best Global Music Album for Twice as Tall. Tems has two Grammy wins, including Best African Music Performance for Love Me JeJe. Wizkid won too, alongside Beyoncé and the team behind Brown Skin Girl.",
      "And the nominations go back even further, from King Sunny Adé and Femi Kuti to Davido, Asake and Ayra Starr. Nigerian music has been in this conversation for a long time.",
      "Nominations are out on November 16, 2026. Until then, we wait.",
    ],
    verdict:
      "Which Nigerian artist are you hoping to see on that list? And what's your take on the NO11 submission?",
  },
  {
    id: "spotify-audiobooks",
    section: "first-slice",
    category: "First Slice",
    title: "Spotify Now Has Audiobooks for Nigerians!",
    dek: "Since October 14, Nigerian users can access over 350,000 audiobooks on the app. Romance, thrillers, fantasy, nonfiction — name it. Now let's settle the big question: does listening count as reading?",
    emoji: "🎧",
    color: "mint",
    minutes: 4,
    reactions: 224,
    comments: 188,
    kicker: "Food for your ears",
    poll: {
      question: "Does listening to an audiobook count as reading?",
      options: [
        { label: "Yes, it absolutely counts", votes: 342 },
        { label: "Nope, eyes on a page or nothing", votes: 218 },
      ],
    },
    body: [
      "Sweeeties, Spotify just added one more thing to your ears. Beyond music and podcasts, audiobooks have landed!",
      "Since October 14, Nigerian users can access over 350,000 audiobooks on the app. Romance, thrillers, fantasy, nonfiction, name it.",
      "Imagine this: you're in traffic with your favourite songs on, then you switch to a podcast, then a book, all without leaving the app. And for those of us who keep saying \"I'll read when I have time\" (we know ourselves), this is your chance to finish a book while you're commuting, doing chores, or just lying down doing nothing.",
      "Now, the money part. Spotify's Audiobooks+ subscription in Nigeria is ₦2,300 monthly for 15 hours of listening. If you need more? You can add 10 hours for ₦2,700. You can also buy individual audiobooks. And note: this is separate from Spotify Premium, so having Premium doesn't mean you automatically get audiobooks.",
      "So, two questions: Would you pay extra for audiobooks on Spotify? And the one we need to settle once and for all: does listening to an audiobook count as reading? Drop your answer below.",
    ],
  },
  {
    id: "nfl-halftime",
    section: "trending",
    category: "Trending",
    title: "Ayra Starr Becomes the First African Artist to Headline an NFL International Games Halftime Show",
    dek: "On October 11, our very own Starrgirl took the stage at Tottenham Hotspur Stadium in London — and became the first African artist to headline an NFL International Games halftime show.",
    emoji: "🏈",
    color: "pink",
    minutes: 4,
    reactions: 751,
    comments: 121,
    kicker: "Big firsts",
    body: [
      "Ayra Starr just added another first to the list!",
      "On October 11, our very own Starrgirl took the stage at Tottenham Hotspur Stadium in London for the NFL halftime show during the Philadelphia Eagles vs. Jacksonville Jaguars game. And she wasn't just there to perform. Ayra became the first African artist to headline an NFL International Games halftime show.",
      "FIRST AFRICAN ARTIST. Let's give that a moment.",
      "She opened with Heaven Baby, her collaboration with Zayn Malik, before getting into Rush, Santa and Dangerous. She wrapped up with Hot Body and Ms. Paper, giving the crowd a taste of her Starrgirl era.",
      "Now, if you've been following Ayra's career, you know this girl has been taking her music places. But there's something about seeing an Afrobeats artist headline a show at a major American sporting event that hits differently. The NFL has a massive audience, and this time, Ayra Starr was the one holding the mic.",
      "From Rush going global, to the NFL performance, Ayra's résumé is getting pretty bulky. And we're here for all of it.",
    ],
    verdict: "Have you seen the performance yet? Because Starrgirl has sure been busy outside!",
  },
  {
    id: "prayer-for-wolves",
    section: "trending",
    category: "Trending",
    title: "Renowned Nigerian Author Chimeka Garricks Teases Fans with a New Book Announcement",
    dek: "If you've read A Broken People's Playlist or Tomorrow Died Yesterday, you'd know why book lovers are hyped about A Prayer for Wolves. Published by Masobe Books, expected in the second quarter of 2027.",
    emoji: "📖",
    color: "orange",
    minutes: 4,
    reactions: 189,
    comments: 64,
    kicker: "Books",
    body: [
      "If you've read A Broken People's Playlist, Tomorrow Died Yesterday, or both, you'd know why book lovers are hyped about Chimeka Garricks' upcoming book, A Prayer for Wolves. He doesn't miss!",
      "The man has announced a new novel, and we're already seated. Published by Masobe Books, A Prayer for Wolves is expected in the second quarter of 2027. I know, I know. 2027 is still a whole journey away, but what can we do? We can only wait.",
      "Now, if you haven't read anything by Chimeka Garricks, this is your sign to correct that. Tomorrow Died Yesterday would take you into the world of friendship, kidnapping and the different realities of the Niger Delta.",
      "A Broken People's Playlist gives us 12 interconnected, music-inspired stories set in Port Harcourt. Different stories, different experiences, but the man knows how to make you sit with a book and actually feel something.",
      "With A Prayer for Wolves on the way, naturally, we have questions. What are we getting into this time? Who are these characters? And how emotionally invested are we about to become?",
      "We still have a bit of waiting to do, but one thing is certain: Chimeka Garricks has our attention. And if his previous books are anything to go by, we have good reason to be curious.",
    ],
    verdict:
      "Have you read A Broken People's Playlist or Tomorrow Died Yesterday? Which one are you recommending to someone who hasn't read either?",
  },
  {
    id: "rachel-ojuromi",
    section: "trending",
    category: "Trending",
    title: "Rachel Ojuromi: Who Says You Need Paris to Make a Fashion Statement?",
    dek: "From street-style videos on Lagos streets to walking for CHANEL in Paris — @giverachelashot made her runway debut at Chanel's Spring/Summer 2027 show. Please appreciate the plot!",
    emoji: "👗",
    color: "lilac",
    minutes: 5,
    reactions: 602,
    comments: 87,
    kicker: "Fashion",
    body: [
      "Imagine scrolling through videos of a girl creating fashion content on the streets of Lagos, only to find out that the same girl is now walking for CHANEL in Paris. Yes, Rachel Ojuromi. And honestly, there's something about her journey that deserves more than just a \"she ate\" comment.",
      "Rachel, popularly known as @giverachelashot, built a name for herself with street-style videos that turned everyday Lagos locations into fashion runways. No elaborate studio setup or fancy Parisian backdrop. Just her creativity, her outfits, and the streets she already knew.",
      "And that's what makes her story so interesting. Sometimes, we get so caught up in what we don't have that we forget what we can do with what's already in front of us. Rachel didn't wait until she had access to the fashion world's biggest stages before she started creating. She made her own little stage, and people noticed.",
      "Her Chanel-inspired looks eventually caught the attention of Matthieu Blazy, Chanel's creative director. On October 5, 2026, she made her runway debut at Chanel's Spring/Summer 2027 show in Paris. A girl creating fashion videos in Lagos, walking for CHANEL. Sweeeties, please appreciate the plot!",
      "Beyond her own career, Rachel also founded The Process Africa, a platform focused on documenting and supporting young African creatives.",
      "Her journey is a reminder that where you start doesn't have to determine where you end up. You can begin with the resources available to you, experiment, find your style, and keep putting your work out there. You never really know who might see it.",
      "And no, this doesn't mean every video you post will land you on a Chanel runway. But it does mean that your work deserves a chance to exist before you have everything figured out.",
    ],
    verdict:
      "So, to everyone sitting on an idea because the setup isn't perfect yet — maybe it's time to start with what you have. Rachel did, and look where she ended up.",
  },
];

export const DIGEST_CATEGORIES = [
  "All",
  "First Slice",
  "Trending",
  "Music",
  "Books",
  "Fashion",
] as const;

/* ---------------- Sweeet Box ---------------- */

export type SocialPost = {
  id: string;
  platform: "youtube" | "instagram";
  kind: string;
  title: string;
  views: string;
  emoji: string;
  color: "pink" | "yellow" | "lilac" | "orange" | "mint";
};

export const SOCIAL_POSTS: SocialPost[] = [
  { id: "yt1", platform: "youtube", kind: "Celebrity Feature", title: "Rapid fire with Lagos' fastest-rising chef — she cooked, we judged", views: "84K views", emoji: "🎤", color: "pink" },
  { id: "yt2", platform: "youtube", kind: "Food Game", title: "Guess the dish by its ingredients alone (nobody got jollof right)", views: "127K views", emoji: "🍲", color: "orange" },
  { id: "ig1", platform: "instagram", kind: "Reel", title: "POV: you found the best puff-puff in Yaba and gatekeeping failed", views: "212K views", emoji: "🍩", color: "yellow" },
  { id: "yt3", platform: "youtube", kind: "Chef Tutorial", title: "Chef's table: rebuilding party jollof from scratch, smoke point included", views: "58K views", emoji: "🔥", color: "lilac" },
  { id: "ig2", platform: "instagram", kind: "Reel", title: "Sweeet Spot ep. 7: the tiny Ikoyi café that does a 3-layer chin chin cake", views: "96K views", emoji: "🍰", color: "mint" },
  { id: "yt4", platform: "youtube", kind: "Street Show", title: "We asked Lagos: is plantain a main dish or a side? Civility left the chat", views: "143K views", emoji: "🍌", color: "pink" },
  { id: "ig3", platform: "instagram", kind: "Carousel", title: "5 vendors we're putting on this week — you'll thank us later", views: "41K views", emoji: "🏅", color: "orange" },
  { id: "yt5", platform: "youtube", kind: "Celebrity Feature", title: "Dessert peeps only: building the loudest sundae in Lagos with a pastry chef", views: "67K views", emoji: "🍨", color: "yellow" },
  { id: "ig4", platform: "instagram", kind: "Reel", title: "Starrgirl era: purple fits, purple plates, purple everything", views: "158K views", emoji: "💜", color: "lilac" },
];

/* ---------------- Community ---------------- */

export type HotTake = {
  id: string;
  text: string;
  agree: number;
  disagree: number;
  topic: string;
};

export const HOT_TAKES: HotTake[] = [
  { id: "ht1", text: "Being broke in your twenties is normal. Being financially irresponsible is not.", agree: 428, disagree: 96, topic: "Money" },
  { id: "ht2", text: "Nigerian parents sometimes confuse providing for their children with having unlimited authority over their lives.", agree: 517, disagree: 88, topic: "Family" },
  { id: "ht3", text: "A woman being beautiful doesn't mean she has an easy life.", agree: 389, disagree: 34, topic: "Beauty" },
  { id: "ht4", text: "Some of you aren't in love. You're just attached to the way someone makes you feel about yourself.", agree: 465, disagree: 121, topic: "Love" },
  { id: "ht5", text: "Marriage is not an achievement if you have to lose yourself to maintain it.", agree: 447, disagree: 72, topic: "Marriage" },
  { id: "ht6", text: "The Nigerian obsession with weddings sometimes overshadows the importance of the marriage itself.", agree: 498, disagree: 103, topic: "Weddings" },
];

export type SourVote = {
  id: string;
  thing: string;
  question: string;
  emoji: string;
  sweetPct: number;
  votes: number;
};

export const SWEET_OR_SOUR: SourVote[] = [
  { id: "ss1", thing: "Tele X Zikora", question: "Good watch?", emoji: "📺", sweetPct: 68, votes: 512 },
  { id: "ss2", thing: "Pineapple on pizza", question: "Crime or cuisine?", emoji: "🍕", sweetPct: 41, votes: 1033 },
  { id: "ss3", thing: "Jollof with ketchup", question: "Be honest.", emoji: "🍅", sweetPct: 23, votes: 877 },
  { id: "ss4", thing: "Audiobooks count as reading", question: "Settle it.", emoji: "🎧", sweetPct: 61, votes: 744 },
  { id: "ss5", thing: "Cake with no icing", question: "Point of the cake?", emoji: "🎂", sweetPct: 36, votes: 402 },
  { id: "ss6", thing: "Replying to texts 3 business days later", question: "Sweeet or sour?", emoji: "📵", sweetPct: 18, votes: 690 },
];

export const QOTD = {
  question: "What's the one snack you'd never ever share?",
  initialCount: 127,
};

export type Vendor = { name: string; tag: string; emoji: string; color: "pink" | "yellow" | "lilac" | "orange" | "mint" };

export const CERTIFIED_VENDORS: Vendor[] = [
  { name: "Butterland", tag: "Cakes & buttercream everything", emoji: "🧈", color: "yellow" },
  { name: "Crumb & Co.", tag: "Small-batch cookies & brownies", emoji: "🍪", color: "orange" },
  { name: "Scoop Society", tag: "Small chops & ice cream carts", emoji: "🍨", color: "pink" },
  { name: "Ember Grill House", tag: "Suya, grills & fire", emoji: "🔥", color: "lilac" },
  { name: "Blush Desserts", tag: "Luxury dessert boxes", emoji: "🩷", color: "mint" },
];

export type Spot = {
  name: string;
  area: string;
  ambience: string;
  signature: string;
  price: string;
  emoji: string;
};

export const SWEEET_SPOTS: Spot[] = [
  {
    name: "The Smoke Yard",
    area: "Yaba, Lagos",
    ambience: "Open-air courtyard, fairy lights, afrobeats on vinyl. Loud in the best way.",
    signature: "Smoked party jollof with grilled peppered chicken",
    price: "₦₦",
    emoji: "🍗",
  },
  {
    name: "Puff & Pour",
    area: "Lekki Phase 1, Lagos",
    ambience: "Bright pastel interior, dessert-first menu, perfect for girls' night photos.",
    signature: "Puff-puff tower with chocolate dip flight",
    price: "₦₦",
    emoji: "🍩",
  },
  {
    name: "Mama's Fire Grill",
    area: "Surulere, Lagos",
    ambience: "No-frills, all flavour. Wooden benches, evening suya smoke, zero attitude.",
    signature: "Beef suya with extra yaji and raw onions",
    price: "₦",
    emoji: "🍢",
  },
];

/* ---------------- Playground ---------------- */

export type Deck = { id: string; name: string; blurb: string; emoji: string; color: "pink" | "yellow" | "lilac"; prompts: string[] };

export const DECKS: Deck[] = [
  {
    id: "friends",
    name: "Conversation Starters for Friends",
    blurb: "Fun, random conversation starters to share with your friends, uncover secrets, and create unforgettable moments.",
    emoji: "🫂",
    color: "pink",
    prompts: [
      "What's the most unserious reason you've ever stopped liking someone?",
      "What's a lie you've told that somehow became too big to correct?",
      "What's something you pretend to understand but absolutely don't?",
      "Have you ever stalked someone's page so deeply you accidentally liked an old post?",
      "What's the pettiest thing you've ever done?",
      "What's one thing your friends would never let you live down?",
      "What's your most embarrassing almost-romantic experience?",
      "Have you ever disliked someone before they even spoke to you?",
      "What's the wildest assumption someone has made about you?",
      "What's something you would never admit on your main social media account?",
      "If your search history became public for five minutes, how finished would you be?",
      "What's the most ridiculous thing you've cried over?",
      "Have you ever pretended to be busy to avoid someone?",
      "What's your biggest \"I can explain!\" moment?",
      "Which friend would you trust least with your phone, and why?",
      "What's a popular opinion you secretly disagree with?",
      "What's the most dramatic thing you've done over a crush?",
      "What's one thing you judge people for even though you probably shouldn't?",
      "If your life had a disclaimer, what would it say?",
      "What's a secret talent you have that is completely useless?",
    ],
  },
  {
    id: "first-date",
    name: "First Date Questions",
    blurb: "Cute, flirty, and thought-provoking questions to ask your crush or date. Because small talk can only take you so far!",
    emoji: "💌",
    color: "lilac",
    prompts: [
      "What's the first thing you notice about someone you're attracted to?",
      "What's your idea of a perfect first date?",
      "What's an instant green flag for you?",
      "What's an instant ick?",
      "Do you prefer someone who makes the first move or someone who drops hints?",
      "What's your love language, and how do you like to receive it?",
      "Would you rather have someone who makes you laugh or someone who challenges you intellectually?",
      "What's something small someone can do that makes you instantly more attracted to them?",
      "Do you believe in love at first sight, or does attraction need time?",
      "What's your biggest dating dealbreaker?",
      "How do you usually act when you have a crush?",
      "Do you prefer good morning texts, random calls, or thoughtful surprises?",
      "What's something you need in a relationship that you find difficult to ask for?",
      "Would you date someone whose lifestyle is completely different from yours?",
      "What's your opinion on splitting the bill on a first date?",
      "How important is physical attraction to you?",
      "What's something romantic you've always wanted someone to do for you?",
      "When you like someone, do you tell them or wait for them to figure it out?",
      "What's one question you wish people asked before entering a relationship with you?",
      "Be honest: what's your first impression of me so far?",
    ],
  },
  {
    id: "deep",
    name: "Deep Questions",
    blurb: "Questions that go beyond the surface — love, life, fears, dreams, and everything in between.",
    emoji: "🌙",
    color: "yellow",
    prompts: [
      "What's something about yourself you're still learning to accept?",
      "Do you think people see the real you, or just the version you're comfortable showing them?",
      "What's a lesson you learned the hard way?",
      "What scares you more: failure or never trying?",
      "When was the last time you felt genuinely proud of yourself?",
      "What's something you wish you could tell your younger self?",
      "Do you find it easier to forgive others or forgive yourself?",
      "What's a fear that has quietly influenced some of your decisions?",
      "What does feeling loved look like to you?",
      "Have you ever outgrown someone you thought would be in your life forever?",
      "What's something you need to hear more often?",
      "Do you think closure comes from other people or from within yourself?",
      "What's one thing you're trying to unlearn?",
      "When life gets difficult, do you prefer company or solitude?",
      "What's something you wish people understood about you without you having to explain it?",
      "Do you think you're living the life you want or the life people expect of you?",
      "What's a version of yourself you're trying to grow into?",
      "What's something you've forgiven but haven't forgotten?",
      "If you could change one thing about the way you approach relationships, what would it be?",
      "What does a genuinely happy life look like to you?",
    ],
  },
];

export const COOKIE_SITES: string[] = [
  "What does the boil on my bum bum mean?",
  "Should I get back with my ex?",
  "I'm in love with my best friend's brother/sister. What should I do?",
  "Should I unblock my ex?",
  "Will making eba by 12 AM make me fat?",
  "How to lose 50 pounds but still eat pounded yam?",
  "How to make $50 million in the way that pleases God?",
  "I accidentally liked their post on Instagram from 2018, what do I do?",
  "I told them I'm five minutes away, but I'm still at home",
  "Can I eat rice at 1 AM and still have abs?",
  "I haven't seen my period yet, is it too late for plan b?",
  "Someone caught me talking to myself, what do I do?",
  "I have a crush on Zuko in Avatar",
  "How to stalk my crush without them noticing?",
  "What do my friends really think about me?",
  "www.What is my purpose.com (we had to)",
];

export const THIS_OR_THAT: { a: string; b: string; ea: string; eb: string }[] = [
  { a: "Jollof rice", b: "Fried rice", ea: "🍚", eb: "🍛" },
  { a: "Puff-puff", b: "Chin chin", ea: "🍩", eb: "🍪" },
  { a: "Early morning texts", b: "Random voice notes", ea: "🌅", eb: "🎙️" },
  { a: "Beach hangout", b: "Indoor movie night", ea: "🏖️", eb: "🍿" },
  { a: "Suya at midnight", b: "Shawarma at 2 AM", ea: "🍢", eb: "🌯" },
  { a: "Aya Starr's Rush", b: "Tems' Free Mind", ea: "🎶", eb: "🎵" },
  { a: "Home cooked", b: "Eating out", ea: "🏠", eb: "🛎️" },
  { a: "Boring but rich", b: "Exciting but broke", ea: "💰", eb: "🎢" },
];

export const LEADERBOARD = [
  { rank: 1, name: "Puff-Puff Princess 🍩", points: 4820 },
  { rank: 2, name: "SuyaSovereign 🍢", points: 4510 },
  { rank: 3, name: "JollofBaddie 🍚", points: 4277 },
  { rank: 4, name: "ChinChinChief 🍪", points: 3940 },
  { rank: 5, name: "EbaEmergency 🥣", points: 3601 },
];

export const COMING_SOON: { name: string; blurb: string; emoji: string; color: "pink" | "lilac" | "mint" }[] = [
  { name: "Would You Rather…", blurb: "Impossible choices, zero mercy.", emoji: "🤔", color: "pink" },
  { name: "Imposter Game", blurb: "Find the fake before the round ends.", emoji: "🕵️", color: "lilac" },
  { name: "Your Ultimate Snack", blurb: "A personality test, but make it edible.", emoji: "🧁", color: "mint" },
];

/* ---------------- Shop ---------------- */

export type Product = {
  id: string;
  name: string;
  blurb: string;
  price: number;
  emoji: string;
  color: "pink" | "yellow" | "lilac" | "orange" | "mint";
  badge?: string;
  image?: "tee" | "flatlay";
};

export const PRODUCTS: Product[] = [
  { id: "tee", name: "Sugar, Spice & Everything Nice Tee", blurb: "Oversized bubblegum-pink tee with chunky plum print. Limited first drop.", price: 18500, emoji: "🍒", color: "pink", badge: "Limited edition", image: "tee" },
  { id: "tote", name: "SWEEET Tote Bag", blurb: "Buttercup yellow canvas tote that carries groceries and gossip equally well.", price: 9500, emoji: "🍋", color: "yellow" },
  { id: "cap", name: "SWEEET Dad Cap", blurb: "Tangerine embroidered dad cap. For bad hair days and good food days.", price: 12000, emoji: "🧢", color: "orange" },
  { id: "stickers", name: "Foodie Sticker Pack", blurb: "12 die-cut Sweeeties: donuts, cherries, pepper, stars and friends.", price: 4500, emoji: "✨", color: "lilac" },
  { id: "pins", name: "Enamel Pin Duo", blurb: "Cherry smiley + jollof plate pins. Pin them where people will ask.", price: 6000, emoji: "🍒", color: "mint" },
  { id: "bundle", name: "The Sweeet Starter Pack", blurb: "Tee + tote + cap + stickers + pins in one box. The full Sweeetness.", price: 35000, emoji: "🎁", color: "pink", badge: "Best value", image: "flatlay" },
];

/* ---------------- Search index ---------------- */

export const SEARCH_INDEX = [
  { label: "Home", sub: "Sugar, spice, everything nice", to: "/", emoji: "🏠" },
  { label: "The Digest", sub: "Editorials & magazine", to: "/digest", emoji: "📰" },
  { label: "Sweeet Box", sub: "Social hub", to: "/sweeet-box", emoji: "📺" },
  { label: "Community", sub: "Debates, votes & spots", to: "/community", emoji: "🫂" },
  { label: "Playground", sub: "Games & arcade", to: "/playground", emoji: "🎮" },
  { label: "Shop", sub: "Sweeet merch", to: "/shop", emoji: "🛍️" },
  { label: "About", sub: "Our story & values", to: "/about", emoji: "🩷" },
  ...ARTICLES.map((a) => ({ label: a.title, sub: `${a.category} · The Digest`, to: `/digest`, emoji: a.emoji })),
  ...CERTIFIED_VENDORS.map((v) => ({ label: v.name, sub: "Certified vendor · Community", to: "/community", emoji: v.emoji })),
  ...DECKS.map((d) => ({ label: d.name, sub: "Card game · Playground", to: "/playground", emoji: d.emoji })),
];
