import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import heroCollage from "@/assets/hero-collage.jpg";
import { Ticker } from "@/components/ticker";
import {
  CandyButton,
  CollabBanner,
  COLOR_BG,
  LinkCard,
  NewsletterCard,
  SectionHeading,
  SocialCard,
  Sticker,
} from "@/components/ui-sweeet";
import { ARTICLES, SOCIAL_POSTS, TICKER_ITEMS } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sweeet Network — Sugar, Spice, Everything Nice!" },
      {
        name: "description",
        content:
          "A community-led food and pop-culture media platform from Lagos. Editorials in The Digest, viral clips in Sweeet Box, debates in Community, games in the Playground and limited merch.",
      },
      {
        property: "og:title",
        content: "Sweeet Network — Sugar, Spice, Everything Nice!",
      },
      {
        property: "og:description",
        content:
          "Food, pop culture and community from Lagos. A little culture. A little chaos. A lot of Sweeet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURED = [ARTICLES[3], ARTICLES[0], ARTICLES[5]];

function Index() {
  const [slide, setSlide] = useState(0);
  const featured = FEATURED[slide];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-12 pt-12 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <Sticker color="bg-candy-yellow">
              <span className="text-base">🍒</span> Food × pop culture, from Lagos
            </Sticker>
            <h1 className="heading-display text-5xl text-plum sm:text-6xl lg:text-7xl">
              Sugar, spice, <span className="underline-marker">everything nice!</span>
            </h1>
            <p className="max-w-md text-lg font-semibold text-plum/75">
              A little culture. A little chaos. A lot of Sweeet. Editorials, debates, games, spots
              and treats — made with and for Sweeeties.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/digest"
                className="pop-btn bg-candy-pink px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
              >
                Read The Digest
              </Link>
              <Link
                to="/playground"
                className="pop-btn bg-candy-mint px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
              >
                Hit the Playground
              </Link>
            </div>
            <div className="flex gap-2 text-2xl">
              <span className="animate-bob" style={{ animationDelay: "0s" }}>🍩</span>
              <span className="animate-bob" style={{ animationDelay: "0.3s" }}>🔥</span>
              <span className="animate-bob" style={{ animationDelay: "0.6s" }}>💜</span>
            </div>
          </div>
          <div className="relative">
            <div className="pop-card rotate-2 overflow-hidden bg-card">
              <img
                src={heroCollage}
                alt="A playful collage of Nigerian food and pop culture — jollof rice, suya, puff-puff, a microphone, records and doodles"
                width={1280}
                height={1024}
                className="h-auto w-full"
              />
            </div>
            <span className="sticker absolute -right-3 -top-4 rotate-6 bg-candy-orange text-sm">
              100% Sweeetness
            </span>
            <span className="sticker absolute -bottom-4 -left-3 -rotate-6 bg-candy-mint text-sm">
              Est. Lagos 🇳🇬
            </span>
          </div>
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />

      {/* Featured slider */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="🔥 Hot off the press"
            title="Featured right now"
            sub="Fresh first impressions and trending stories from The Digest."
          />
          <div className="pop-card mt-10 overflow-hidden bg-card">
            <div className={cn("flex items-center gap-4 border-b-[3px] border-plum px-6 py-4", COLOR_BG[featured.color])}>
              <img
                src={featured.image}
                alt=""
                width={1024}
                height={640}
                className="pop-sm h-16 w-24 shrink-0 border-2 border-plum object-cover"
              />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-plum/70">
                  {featured.category} · {featured.minutes} min read
                </p>
                <p className="font-display text-xl font-extrabold leading-tight text-plum">{featured.title}</p>
              </div>
            </div>
            <div className="px-6 py-6">
              <p className="text-base font-medium leading-relaxed text-plum/85">{featured.dek}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/digest"
                  className="pop-btn bg-candy-lilac px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
                >
                  Read the story →
                </Link>
                <div className="ml-auto flex items-center gap-2">
                  <button
                    onClick={() => setSlide((slide - 1 + FEATURED.length) % FEATURED.length)}
                    className="pop-sm bg-background px-3 py-2 font-display font-extrabold text-plum"
                    aria-label="Previous story"
                  >
                    ←
                  </button>
                  {FEATURED.map((f, i) => (
                    <button
                      key={f.id}
                      onClick={() => setSlide(i)}
                      aria-label={`Go to story ${i + 1}`}
                      className={cn(
                        "pop-sm h-4 w-4 border-[3px] border-plum",
                        i === slide ? "bg-candy-pink" : "bg-card"
                      )}
                    />
                  ))}
                  <button
                    onClick={() => setSlide((slide + 1) % FEATURED.length)}
                    className="pop-sm bg-background px-3 py-2 font-display font-extrabold text-plum"
                    aria-label="Next story"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick access categories */}
      <section className="border-y-[3px] border-plum bg-card px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="🍬 Pick your craving"
            title="What are we getting into today?"
            sub="Seven corners of the Sweeet universe — start anywhere."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <LinkCard to="/digest" emoji="📰" title="The Digest" sub="First impressions & trending stories" color="bg-candy-lilac" />
            <LinkCard to="/sweeet-box" emoji="📺" title="Sweeet Box" sub="Our latest videos, reels & clips" color="bg-candy-pink" />
            <LinkCard to="/community" emoji="🫂" title="Community" sub="Hot takes, votes, spots & tea" color="bg-candy-yellow" />
            <LinkCard to="/playground" emoji="🎮" title="Playground" sub="Card games, dilemmas & tic-tac-toe" color="bg-candy-mint" />
            <LinkCard to="/shop" emoji="🛍️" title="Shop" sub="Limited-edition Sweeet merch" color="bg-candy-orange" />
            <LinkCard to="/about" emoji="🩷" title="About" sub="The story behind the Sweeetness" color="bg-candy-lilac" />
          </div>
        </div>
      </section>

      {/* Social highlights */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="📱 Sweeet on the streets"
            title="Straight from the feed"
            sub="Thumbnails, reels and bits and pieces from our YouTube and Instagram."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIAL_POSTS.slice(0, 4).map((p) => (
              <SocialCardTile key={p.id} post={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/sweeet-box"
              className="pop-btn inline-block bg-candy-yellow px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
            >
              Open the Sweeet Box
            </Link>
          </div>
        </div>
      </section>

      <NewsletterCard />

      <CollabBanner />

      {/* Previews of Digest, Community, Playground */}
      <section className="border-t-[3px] border-plum bg-candy-lilac/30 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="👀 A little taste"
            title="Sneak peeks around the network"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <PreviewCard
              to="/digest"
              sticker="📰 The Digest"
              color="bg-card"
              title={ARTICLES[1].title}
              body={ARTICLES[1].dek}
              cta="Read the full story"
              image={ARTICLES[1].image}
            />
            <PreviewCard
              to="/community"
              sticker="🫂 Community"
              color="bg-card"
              title="What's the one snack you'd never ever share?"
              body="127 Sweeeties have answered the Question of the Day — and some of these answers are a whole menace. Add yours, pass the pepper, or spill the tea."
              cta="Join the conversation"
              emoji="🌶️"
            />
            <PreviewCard
              to="/playground"
              sticker="🎮 Playground"
              color="bg-card"
              title="Accept or Decline Cookies?"
              body={'"www.Will making eba by 12 AM make me fat?.com" — accept or decline? Sixty conversation cards, dilemmas and games are waiting.'}
              cta="Enter the Playground"
              emoji="🍪"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialCardTile({ post }: { post: (typeof SOCIAL_POSTS)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SocialCard post={post} onOpen={() => setOpen(true)} />
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-plum/50 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="pop-card w-full max-w-lg bg-card p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className={cn("pop-sm flex h-48 items-center justify-center", COLOR_BG[post.color])}>
              <span className="text-7xl animate-bob">{post.emoji}</span>
            </div>
            <p className="mt-4 font-display text-lg font-extrabold text-plum">{post.title}</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">👁 {post.views} · preview</p>
            <CandyButton className="mt-5 bg-candy-yellow" onClick={() => setOpen(false)}>
              Close
            </CandyButton>
          </div>
        </div>
      ) : null}
    </>
  );
}

function PreviewCard({
  to,
  sticker,
  color,
  title,
  body,
  cta,
  emoji,
  image,
}: {
  to: string;
  sticker: string;
  color: string;
  title: string;
  body: string;
  cta: string;
  emoji?: string;
  image?: string;
}) {
  return (
    <Link
      to={to}
      className={cn("pop-card group flex flex-col gap-4 p-6 transition-transform hover:-translate-y-1", color)}
    >
      <Sticker color="bg-candy-yellow">{sticker}</Sticker>
      <div className="flex items-start gap-3">
        {image ? (
          <img
            src={image}
            alt=""
            width={1024}
            height={640}
            loading="lazy"
            className="pop-sm h-14 w-20 shrink-0 border-2 border-plum object-cover"
          />
        ) : (
          <span className="text-4xl">{emoji}</span>
        )}
        <p className="font-display text-xl font-extrabold leading-snug text-plum">{title}</p>
      </div>
      <p className="text-sm font-medium leading-relaxed text-plum/75">{body}</p>
      <span className="mt-auto font-display text-sm font-extrabold uppercase tracking-wide text-plum">
        {cta} →
      </span>
    </Link>
  );
}
