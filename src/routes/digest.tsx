import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageHero, Sticker, COLOR_BG, type CandyColor } from "@/components/ui-sweeet";
import { ARTICLES, DIGEST_CATEGORIES, type Article } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/digest")({
  head: () => ({
    meta: [
      { title: "The Digest — Editorials & Magazine | Sweeet Network" },
      {
        name: "description",
        content:
          "First Slice first impressions and trending stories from Sweeet Network — albums, books, fashion, food tech and everything in between.",
      },
      { property: "og:title", content: "The Digest — Editorials & Magazine | Sweeet Network" },
      {
        property: "og:description",
        content:
          "First impressions of albums, movies, books and restaurants, plus trending pop-culture stories.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DigestPage,
});

const REACTIONS = [
  { emoji: "🍓", label: "Sweet" },
  { emoji: "😂", label: "Funny" },
  { emoji: "🔥", label: "Hot" },
];

const SEED_COMMENTS = [
  { name: "Sweeetie_01", text: "Okay but why is this exactly what I was thinking this morning?? 😭" },
  { name: "PuffPuffPrincess", text: "Sweeet Network never misses. I have opinions and I'm using them here." },
  { name: "LagosLoudMouth", text: "Came for the headline, stayed for the comments section honestly." },
];

function DigestPage() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchesCat =
        category === "All" ||
        a.category === category ||
        (category === "Music" && /grammys|starrgirl|nfl/i.test(a.id)) ||
        (category === "Books" && /wolves|spotify/i.test(a.id)) ||
        (category === "Fashion" && /rachel/i.test(a.id));
      const matchesQuery = (a.title + " " + a.dek).toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  const open = ARTICLES.find((a) => a.id === openId) ?? null;

  return (
    <main>
      <PageHero
        emoji="📰"
        eyebrow="Editorials & Magazine"
        title="The Digest"
        sub="First impressions of albums, movies, books, restaurants and other noteworthy releases — plus the stories everybody is talking about."
        color="bg-candy-lilac"
      />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Filters */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {DIGEST_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    "sticker text-xs transition-transform hover:-translate-y-0.5",
                    category === c ? "bg-candy-pink" : "bg-card"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔍 Search stories…"
              className="pop-input w-full px-4 py-2.5 text-sm font-semibold md:w-72"
            />
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <ArticleCard key={a.id} article={a} onOpen={() => setOpenId(a.id)} />
            ))}
            {filtered.length === 0 ? (
              <p className="col-span-full py-16 text-center font-display text-lg font-extrabold text-plum/60">
                No stories match that filter… yet. Try "All". 🍩
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {open ? <ArticleReader article={open} onClose={() => setOpenId(null)} /> : null}
    </main>
  );
}

function ArticleCard({ article, onOpen }: { article: Article; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="pop-card group flex flex-col overflow-hidden bg-card text-left transition-transform hover:-translate-y-1"
    >
      <div className="relative h-40 border-b-[3px] border-plum">
        <img
          src={article.image}
          alt={article.title}
          width={1024}
          height={640}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="sticker absolute left-3 top-3 rotate-2 bg-card text-[10px] uppercase">{article.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground">
          {article.kicker} · {article.minutes} min read
        </p>
        <p className="mt-2 font-display text-lg font-extrabold leading-snug text-plum">{article.title}</p>
        <p className="mt-2 line-clamp-3 text-sm font-medium text-plum/75">{article.dek}</p>
        <div className="mt-4 flex items-center gap-3 text-xs font-bold text-muted-foreground">
          <span>🍓 {article.reactions}</span>
          <span>💬 {article.comments}</span>
          <span className="ml-auto font-display uppercase text-plum">Read →</span>
        </div>
      </div>
    </button>
  );
}

function ArticleReader({ article, onClose }: { article: Article; onClose: () => void }) {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [myComments, setMyComments] = useState<{ name: string; text: string }[]>([]);
  const [draft, setDraft] = useState("");
  const [pollVotes, setPollVotes] = useState<number[] | null>(
    article.poll ? article.poll.options.map((o) => o.votes) : null
  );

  const totalVotes = pollVotes ? pollVotes.reduce((a, b) => a + b, 0) : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-plum/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="pop-card mx-auto my-8 max-w-3xl bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn("flex items-center gap-4 border-b-[3px] border-plum px-6 py-6 md:px-10", COLOR_BG[article.color])}>
            <img
              src={article.image}
              alt=""
              width={1024}
              height={640}
              className="pop-sm h-16 w-24 shrink-0 border-2 border-plum object-cover"
            />
          <div>
            <Sticker color="bg-card">{article.category}</Sticker>
            <h2 className="mt-2 font-display text-2xl font-extrabold leading-tight text-plum md:text-3xl">
              {article.title}
            </h2>
          </div>
        </div>

        <div className="px-6 py-8 md:px-10">
          <p className="text-lg font-bold leading-relaxed text-plum/90">{article.dek}</p>
          <div className="mt-6 space-y-5">
            {article.body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-plum/85">
                {p}
              </p>
            ))}
          </div>

          {article.verdict ? (
            <div className="pop-sm mt-8 bg-candy-yellow p-5">
              <p className="text-xs font-extrabold uppercase tracking-widest text-plum/70">The First Slice verdict</p>
              <p className="mt-2 font-display text-lg font-extrabold text-plum">{article.verdict}</p>
            </div>
          ) : null}

          {article.poll ? (
            <div className="pop-sm mt-8 bg-candy-mint p-5">
              <p className="text-xs font-extrabold uppercase tracking-widest text-plum/70">Sweeeties, settle it</p>
              <p className="mt-2 font-display text-xl font-extrabold text-plum">{article.poll.question}</p>
              <div className="mt-4 space-y-3">
                {article.poll.options.map((o, i) => {
                  const pct = pollVotes && totalVotes ? Math.round((pollVotes[i] / totalVotes) * 100) : 0;
                  return (
                    <button
                      key={o.label}
                      onClick={() => {
                        if (!pollVotes) {
                          const next = article.poll!.options.map((x) => x.votes);
                          next[i] += 1;
                          setPollVotes(next);
                        }
                      }}
                      className={cn(
                        "pop-sm block w-full bg-card px-4 py-3 text-left text-sm font-bold text-plum transition-transform hover:-translate-y-0.5",
                        pollVotes && "cursor-default"
                      )}
                    >
                      <span className="flex justify-between">
                        <span>{o.label}</span>
                        {pollVotes ? <span>{pct}%</span> : <span>vote</span>}
                      </span>
                      {pollVotes ? (
                        <span className="mt-2 block h-3 rounded-full border-2 border-plum bg-background">
                          <span className="block h-full rounded-full bg-candy-pink" style={{ width: `${pct}%` }} />
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
              {pollVotes ? (
                <p className="mt-3 text-xs font-bold text-plum/70">{totalVotes} Sweeeties have voted.</p>
              ) : null}
            </div>
          ) : null}

          {/* Reactions */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t-[3px] border-dashed border-plum/40 pt-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">React:</span>
            {REACTIONS.map((r) => (
              <button
                key={r.emoji}
                onClick={() => setCounts((c) => ({ ...c, [r.emoji]: (c[r.emoji] ?? 0) + 1 }))}
                className="pop-sm bg-background px-3 py-2 text-sm font-bold text-plum transition-transform hover:-translate-y-0.5"
              >
                {r.emoji} {(counts[r.emoji] ?? 0) + (r.emoji === "🍓" ? article.reactions : 0)}
              </button>
            ))}
            <span className="ml-auto text-xs font-bold text-muted-foreground">💬 {article.comments + myComments.length} comments</span>
          </div>

          {/* Comments */}
          <div className="mt-6 space-y-3">
            {[...SEED_COMMENTS, ...myComments].map((c, i) => (
              <div key={i} className="pop-sm bg-background px-4 py-3">
                <p className="text-xs font-extrabold uppercase tracking-wide text-candy-orange">
                  {c.name}
                </p>
                <p className="mt-1 text-sm font-medium text-plum/85">{c.text}</p>
              </div>
            ))}
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!draft.trim()) return;
                setMyComments((m) => [...m, { name: "You", text: draft.trim() }]);
                setDraft("");
              }}
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Drop your take, Sweeetie…"
                className="pop-input flex-1 px-4 py-2.5 text-sm font-semibold"
              />
              <button
                type="submit"
                className="pop-btn shrink-0 bg-candy-pink px-4 py-2.5 font-display text-xs font-extrabold uppercase tracking-wide text-plum"
              >
                Post
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="pop-btn bg-candy-lilac px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
            >
              ← Back to The Digest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
