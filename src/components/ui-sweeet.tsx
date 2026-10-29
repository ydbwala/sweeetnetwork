import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eye, Instagram, Music2, Play, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { SOCIALS, type SocialPost } from "@/data/content";

export type CandyColor = "pink" | "yellow" | "lilac" | "orange" | "mint";

export const COLOR_BG: Record<CandyColor, string> = {
  pink: "bg-candy-pink",
  yellow: "bg-candy-yellow",
  lilac: "bg-candy-lilac",
  orange: "bg-candy-orange",
  mint: "bg-candy-mint",
};

export function Sticker({
  children,
  className,
  color = "bg-card",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span className={cn("sticker -rotate-2 text-xs uppercase tracking-wide text-plum", color, className)}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  color = "bg-candy-yellow",
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  color?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start")}>
      <Sticker color={color}>{eyebrow}</Sticker>
      <h2 className="heading-display max-w-3xl text-4xl text-plum md:text-5xl">{title}</h2>
      {sub ? <p className="max-w-2xl text-base font-medium text-plum/75">{sub}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  color,
  emoji,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  color: string;
  emoji: string;
}) {
  return (
    <section className="border-b-[3px] border-plum bg-background px-4 py-14 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <Sticker color={color}>
          <span className="text-base">{emoji}</span> {eyebrow}
        </Sticker>
        <h1 className="heading-display max-w-4xl text-5xl text-plum md:text-7xl">{title}</h1>
        {sub ? <p className="max-w-2xl text-lg font-medium text-plum/75">{sub}</p> : null}
      </div>
    </section>
  );
}

export function CandyButton({
  children,
  className,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn("pop-btn px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum", className)}
    >
      {children}
    </button>
  );
}

export function NewsletterCard({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className={cn("px-4 py-14 md:py-20", className)} id="newsletter">
      <div className="pop-card relative mx-auto max-w-4xl overflow-hidden bg-candy-pink px-6 py-12 text-center md:px-12">
        <span className="absolute -left-6 -top-6 text-7xl animate-bob">💌</span>
        <span className="absolute -bottom-5 -right-4 text-7xl rotate-12">🍭</span>
        <h2 className="heading-display text-4xl text-plum md:text-5xl">
          A little Sweeet in your inbox
        </h2>
        <p className="mt-3 text-base font-semibold text-plum/80">
          Get your weekly dose of Sweeetness — stories, spots, games and first dibs on drops.
        </p>
        {done ? (
          <div className="pop-sm mx-auto mt-8 max-w-md bg-card px-6 py-5">
            <p className="font-display text-lg font-extrabold uppercase text-plum">You're officially a Sweeetie! 🎉</p>
            <p className="mt-1 text-sm font-medium text-plum/75">
              First dose of Sweeetness lands in your inbox this week.
            </p>
          </div>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="pop-input w-full px-4 py-3 text-sm font-semibold"
            />
            <CandyButton type="submit" className="shrink-0 bg-candy-yellow">
              Sign me up
            </CandyButton>
          </form>
        )}
      </div>
    </section>
  );
}

export function CollabBanner() {
  return (
    <section className="px-4 pb-16">
      <div className="pop-card mx-auto flex max-w-5xl flex-col items-center gap-6 bg-candy-yellow px-6 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-plum/70">
            Collabs & partnerships
          </p>
          <h2 className="heading-display mt-2 text-3xl text-plum md:text-4xl">
            Love the stuff we do at Sweeet?
          </h2>
          <p className="mt-2 text-base font-semibold text-plum/80">
            Partner with us today — restaurants, brands, creatives and events.
          </p>
        </div>
        <a
          href={`mailto:${SOCIALS.email}?subject=Partnership%20with%20Sweeet%20Network`}
          className="pop-btn shrink-0 bg-candy-orange px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
        >
          Partner with us
        </a>
      </div>
    </section>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={SOCIALS.youtube}
        target="_blank"
        rel="noreferrer"
        className="pop-btn flex items-center gap-2 bg-candy-orange px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
      >
        <Youtube size={16} strokeWidth={2.5} /> YouTube
      </a>
      <a
        href={SOCIALS.instagram}
        target="_blank"
        rel="noreferrer"
        className="pop-btn flex items-center gap-2 bg-candy-pink px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
      >
        <Instagram size={16} strokeWidth={2.5} /> Instagram
      </a>
      <a
        href={SOCIALS.tiktok}
        target="_blank"
        rel="noreferrer"
        className="pop-btn flex items-center gap-2 bg-candy-lilac px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
      >
        <Music2 size={16} strokeWidth={2.5} /> TikTok
      </a>
    </div>
  );
}

export function SocialCard({ post, onOpen }: { post: SocialPost; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="pop-card group w-full overflow-hidden bg-card text-left transition-transform hover:-translate-y-1"
    >
      <div className={cn("relative flex h-44 items-center justify-center border-b-[3px] border-plum", COLOR_BG[post.color])}>
        <span className="text-6xl drop-shadow-sm transition-transform group-hover:scale-110">{post.emoji}</span>
        <span className="sticker absolute left-3 top-3 flex items-center gap-1 rotate-2 bg-card text-[10px] uppercase">
          {post.platform === "youtube" ? <Youtube size={10} strokeWidth={3} /> : <Instagram size={10} strokeWidth={3} />}
          {post.platform === "youtube" ? "YouTube" : "Instagram"}
        </span>
        <span className="pop-sm absolute bottom-3 right-3 flex items-center gap-1 bg-plum px-2.5 py-1 text-xs font-bold text-background">
          <Play size={11} strokeWidth={3} /> Play
        </span>
      </div>
      <div className="px-4 py-4">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground">{post.kind}</p>
        <p className="mt-1 line-clamp-2 font-display text-base font-extrabold leading-snug text-plum">{post.title}</p>
        <p className="mt-2 flex items-center gap-1 text-xs font-bold text-muted-foreground">
          <Eye size={12} strokeWidth={2.5} /> {post.views}
        </p>
      </div>
    </button>
  );
}

export function LinkCard({
  to,
  emoji,
  title,
  sub,
  color,
}: {
  to: string;
  emoji: string;
  title: string;
  sub: string;
  color: string;
}) {
  return (
    <Link
      to={to}
      className={cn("pop-card group flex flex-col gap-3 p-6 transition-transform hover:-translate-y-1", color)}
    >
      <span className="text-5xl transition-transform group-hover:animate-wiggle">{emoji}</span>
      <div>
        <p className="heading-display text-2xl text-plum">{title}</p>
        <p className="mt-1 text-sm font-semibold text-plum/75">{sub}</p>
      </div>
      <span className="mt-auto font-display text-sm font-extrabold uppercase tracking-wide text-plum">
        Take me there →
      </span>
    </Link>
  );
}
