import { createFileRoute } from "@tanstack/react-router";

import {
  CandyButton,
  CollabBanner,
  COLOR_BG,
  NewsletterCard,
  PageHero,
  SectionHeading,
  Sticker,
} from "@/components/ui-sweeet";
import { SOCIALS } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Story of Sweeet Network" },
      {
        name: "description",
        content:
          "Sweeet Network is a community-led, food-centric platform blending culinary culture with entertainment — because food is memory, culture and connection.",
      },
      { property: "og:title", content: "About — The Story of Sweeet Network" },
      {
        property: "og:description",
        content: "Food as memory, culture and connection. Meet the network behind the Sweeetness.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    name: "Creativity",
    body: "Innovative and unique approaches in both food and entertainment — everything produced stands out.",
    emoji: "🎨",
    color: "bg-candy-pink",
  },
  {
    name: "Community",
    body: "A strong sense of belonging among creatives, food enthusiasts and audiences.",
    emoji: "🫂",
    color: "bg-candy-yellow",
  },
  {
    name: "Authenticity",
    body: "Genuine connections with the audience and partners — content and collaborations are honest and relatable.",
    emoji: "🪞",
    color: "bg-candy-mint",
  },
  {
    name: "Innovation & Excellence",
    body: "Continuously pushing boundaries in food experiences and entertainment content with high-quality delivery.",
    emoji: "🚀",
    color: "bg-candy-lilac",
  },
];

const AUDIENCES = [
  { emoji: "🍰", label: "Dessert & snack lovers" },
  { emoji: "🍳", label: "Home cooks & chefs" },
  { emoji: "🎥", label: "Food creators & storytellers" },
  { emoji: "👀", label: "Curious eaters & culture lovers" },
  { emoji: "🛒", label: "Food & kitchen vendors" },
];

function AboutPage() {
  return (
    <main>
      <PageHero
        emoji="🩷"
        eyebrow="About us"
        title="About Sweeet Network"
        sub="Where food, pop culture, lifestyle and entertainment come together — with a little extra Sweeetness."
        color="bg-candy-pink"
      />

      {/* Story */}
      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="pop-card bg-card p-8">
            <Sticker color="bg-candy-yellow">Our story</Sticker>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-plum/85">
              <p>
                Sweeet Network is where food, pop culture, lifestyle, and entertainment come
                together, with a little extra Sweeetness.
              </p>
              <p>
                We're a home for the curious, the hungry, and the culture-obsessed. From dessert
                peeps and snack lovers to pop culture girlies, DIY cooks, chefs, and creatives,
                there's a little something for everyone. Think of us as the friend who always knows
                what to watch, where to eat, what to read, what to try, and what everyone's talking
                about.
              </p>
              <p>
                We're big on discovering new things, telling interesting stories, and putting you on
                to people, places, and experiences worth knowing. We spotlight the vendors and
                creators behind the magic, celebrate good ideas, and bring people together through
                content and experiences that make life a little more interesting.
              </p>
              <p>
                And honestly, we want Sweeet to be more than somewhere you come for recommendations.
                We're building a community where people can connect, share experiences, discover
                their next favourite thing, and feel right at home.
              </p>
              <p>
                There's always something happening around here, and you never quite know what you
                might discover next.
              </p>
              <p className="font-display text-xl font-extrabold uppercase text-plum">
                Whatever you're into, there's a little Sweeetness for you. 🍒
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="pop-card bg-candy-pink p-7">
              <Sticker color="bg-card">Executive summary</Sticker>
              <p className="mt-4 text-sm font-medium leading-relaxed text-plum/90">
                Sweeet Network is a community-led, food-centric platform that blends culinary culture
                with entertainment. Founded with the belief that food has always been more than food
                — it is memory, culture, and connection — Sweeet is building a new category of media
                where food becomes the catalyst for belonging and creativity.
              </p>
              <p className="mt-3 text-sm font-semibold text-plum/80">
                Sweeet exists because food brings people together — and community should never feel
                out of reach.
              </p>
            </div>
            <div className="pop-card bg-candy-yellow p-7">
              <p className="text-xs font-extrabold uppercase tracking-widest text-plum/70">Company credentials</p>
              <ul className="mt-3 space-y-2 text-sm font-bold text-plum">
                <li>🏢 Sweeet Network and Media Enterprises</li>
                <li>📜 RC Number: 8938673</li>
                <li>📍 Base: Lagos, Nigeria (with global ambitions)</li>
                <li>🍰 Industry: Food media, community & entertainment</li>
                <li>
                  ✉️{" "}
                  <a href={`mailto:${SOCIALS.email}`} className="underline">
                    {SOCIALS.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y-[3px] border-plum bg-card px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="🎯 Direction" title="Mission & vision" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="pop-card bg-candy-mint p-8">
              <span className="text-5xl">🎯</span>
              <h3 className="heading-display mt-3 text-2xl text-plum">Our mission</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-plum/85">
                To create a vibrant, food-centric platform that blends the culinary world and
                entertainment, connecting creators, food lovers, and culture-driven audiences.
              </p>
            </div>
            <div className="pop-card bg-candy-lilac p-8">
              <span className="text-5xl">🔭</span>
              <h3 className="heading-display mt-3 text-2xl text-plum">Our vision</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-plum/85">
                To build a new category of media where food becomes the catalyst for connection and
                creativity. In the long run, Sweeet will be a production company telling stories
                about culture and food — showing what it means when food meets storytelling and
                entertainment. We'll build and fill the bridge between two worlds, not just in
                Nigeria but also to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="🩷 Brand values"
            title="What we stand on"
            sub="Four things every story, partnership and plate at Sweeet has to answer to."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.name} className={cn("pop-card p-6", COLOR_BG[v.color as keyof typeof COLOR_BG])}>
                <span className="text-4xl">{v.emoji}</span>
                <p className="heading-display mt-3 text-xl text-plum">{v.name}</p>
                <p className="mt-2 text-sm font-medium text-plum/80">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-t-[3px] border-plum bg-candy-orange/20 px-4 py-14">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading eyebrow="🫶 We serve" title="A seat for every Sweeetie" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {AUDIENCES.map((a) => (
              <span key={a.label} className="pop-sm flex items-center gap-2 bg-card px-4 py-2.5 font-display text-sm font-extrabold text-plum">
                <span className="text-xl">{a.emoji}</span> {a.label}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-sm font-semibold text-plum/75">
            Signature content: celebrity features, rapid-fire interviews, food-based games and chef
            tutorials — plus the Sweeet Digest newsletter, The Sweeet Treat giveaways, our vendor
            and event database, and the ticketed Sweeet Festival.
          </p>
          <CandyButton className="mt-8 bg-candy-pink">Come hungry, leave Sweeet 🍩</CandyButton>
        </div>
      </section>

      <NewsletterCard className="pb-0" />
      <CollabBanner />
    </main>
  );
}
