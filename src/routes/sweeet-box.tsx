import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero, SocialCard, SocialLinks, CandyButton, COLOR_BG } from "@/components/ui-sweeet";
import { SOCIAL_POSTS, SOCIALS, type SocialPost } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sweeet-box")({
  head: () => ({
    meta: [
      { title: "Sweeet Box — Social Hub | Sweeet Network" },
      {
        name: "description",
        content:
          "Sweeet Network's latest YouTube videos, Instagram reels and viral clips — all in one box.",
      },
      { property: "og:title", content: "Sweeet Box — Social Hub | Sweeet Network" },
      {
        property: "og:description",
        content: "Curated feed of Sweeet Network's videos, reels and viral social clips.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SweeetBoxPage,
});

const FILTERS = ["All", "YouTube", "Instagram"] as const;

function SweeetBoxPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<SocialPost | null>(null);

  const posts = SOCIAL_POSTS.filter((p) =>
    filter === "All" ? true : filter === "YouTube" ? p.platform === "youtube" : p.platform === "instagram"
  );

  return (
    <main>
      <PageHero
        emoji="📺"
        eyebrow="Social Hub"
        title="Sweeet Box"
        sub="Every video, reel and viral moment from Sweeet Network — opened, rewatched and argued about in the comments."
        color="bg-candy-orange"
      />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "sticker text-xs transition-transform hover:-translate-y-0.5",
                    filter === f ? "bg-candy-orange" : "bg-card"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className="text-sm font-bold text-muted-foreground">
              {posts.length} posts · {filter === "All" ? "everything" : filter} vibes
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <SocialCard key={p.id} post={p} onOpen={() => setOpen(p)} />
            ))}
          </div>

          <div className="pop-card mt-14 flex flex-col items-center gap-5 bg-candy-pink px-6 py-10 text-center">
            <span className="text-5xl animate-bob">🍿</span>
            <h2 className="heading-display text-3xl text-plum md:text-4xl">
              Want the full, uncut Sweeetness?
            </h2>
            <p className="max-w-xl text-base font-semibold text-plum/80">
              New drops every week on YouTube and Instagram. Subscribe so you never miss a first
              slice, a food game or a celebrity rapid fire.
            </p>
            <SocialLinks className="justify-center" />
            <a
              href={`mailto:${SOCIALS.email}?subject=Featured%20on%20Sweeet%20Box`}
              className="text-sm font-bold text-plum/80 underline"
            >
              Want to be featured? Email us →
            </a>
          </div>
        </div>
      </section>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-plum/50 px-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div
            className="pop-card w-full max-w-xl bg-card p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-1.5 px-1 pb-3">
              <span className="h-3 w-3 rounded-full bg-candy-pink" />
              <span className="h-3 w-3 rounded-full bg-candy-yellow" />
              <span className="h-3 w-3 rounded-full bg-candy-mint" />
              <span className="pop-sm ml-2 flex-1 truncate bg-background px-3 py-1 text-xs font-bold text-plum/70">
                sweeetbox://watch/{open.id}
              </span>
            </div>
            <div className={cn("pop-sm relative flex h-64 items-center justify-center overflow-hidden", COLOR_BG[open.color])}>
              <span className="text-8xl animate-bob">{open.emoji}</span>
              <span className="sticker absolute bottom-4 left-4 animate-wiggle bg-card text-xs">
                ▶ Now playing
              </span>
            </div>
            <div className="mt-4">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground">
                {open.platform === "youtube" ? "▶ YouTube" : "📸 Instagram"} · {open.kind}
              </p>
              <p className="mt-1 font-display text-lg font-extrabold text-plum">{open.title}</p>
              <p className="mt-1 text-sm font-bold text-muted-foreground">👁 {open.views}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={open.platform === "youtube" ? SOCIALS.youtube : SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="pop-btn bg-candy-yellow px-5 py-2.5 font-display text-xs font-extrabold uppercase tracking-wide text-plum"
              >
                Watch on {open.platform === "youtube" ? "YouTube" : "Instagram"} ↗
              </a>
              <CandyButton className="bg-card" onClick={() => setOpen(null)}>
                Close
              </CandyButton>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
