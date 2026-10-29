import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Ban, Cookie, Crown, Shuffle } from "lucide-react";

import {
  CandyButton,
  COLOR_BG,
  PageHero,
  SectionHeading,
  Sticker,
} from "@/components/ui-sweeet";
import {
  COMING_SOON,
  COOKIE_SITES,
  DECKS,
  LEADERBOARD,
  THIS_OR_THAT,
  type Deck,
} from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground — Games & Arcade | Sweeet Network" },
      {
        name: "description",
        content:
          "Conversation card games, Accept or Decline Cookies, tic-tac-toe with cupcakes vs donuts, This or That and the Sweeet leaderboard.",
      },
      { property: "og:title", content: "Playground — Games & Arcade | Sweeet Network" },
      {
        property: "og:description",
        content: "Card games, dilemmas and quick-fire fun for Sweeeties.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlaygroundPage,
});

function PlaygroundPage() {
  return (
    <main>
      <PageHero
        emoji="🎮"
        eyebrow="Games & Activities"
        title="Welcome to the Playground!"
        sub="Conversation cards, impossible dilemmas, snack-based violence (tic-tac-toe) and more. Bring your friends — or your crush."
        color="bg-candy-mint"
      />
      <CardDecks />
      <CookieGame />
      <TicTacToe />
      <ThisOrThatGame />
      <LeaderboardSection />
    </main>
  );
}

/* ---- Conversation card games ---- */

function CardDecks() {
  const [deckId, setDeckId] = useState(DECKS[0]!.id);
  const [order, setOrder] = useState<number[]>(() => shuffleIndices(DECKS[0]!.prompts.length));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = DECKS.find((d) => d.id === deckId) as Deck;

  const pickDeck = (d: Deck) => {
    setDeckId(d.id);
    setOrder(shuffleIndices(d.prompts.length));
    setPos(0);
    setFlipped(false);
  };

  const prompt = deck.prompts[order[pos]!];

  return (
    <section className="border-b-[3px] border-plum px-4 py-14">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="🃏 Card games"
          title="Conversation card games"
          sub="Pick a deck, flip a card, and let the chaos (or the feelings) begin."
          color="bg-candy-pink"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {DECKS.map((d) => (
            <button
              key={d.id}
              onClick={() => pickDeck(d)}
              className={cn(
                "sticker text-xs transition-transform hover:-translate-y-0.5",
                deckId === d.id ? "bg-candy-pink" : "bg-card"
              )}
            >
              {d.emoji} {d.name}
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-sm font-semibold text-plum/70">{deck.blurb}</p>

        <div className="mt-10 flex flex-col items-center">
          <div className="flip-scene h-80 w-full max-w-md cursor-pointer" onClick={() => setFlipped((f) => !f)}>
            <div className={cn("flip-inner relative h-full w-full", flipped && "flip-inner-flipped")}>
              {/* Front */}
              <div className={cn("pop-card flip-face absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card p-8 text-center", COLOR_BG[deck.color])}>
                <span className="text-7xl animate-bob">{deck.emoji}</span>
                <p className="font-display text-2xl font-extrabold uppercase text-plum">{deck.name}</p>
                <p className="text-xs font-extrabold uppercase tracking-widest text-plum/70">
                  Card {pos + 1} of {deck.prompts.length} — tap to flip
                </p>
              </div>
              {/* Back */}
              <div className="pop-card flip-face flip-back absolute inset-0 flex items-center justify-center bg-card p-8">
                <p className="text-center font-display text-xl font-extrabold leading-snug text-plum">{prompt}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CandyButton className="bg-candy-yellow" onClick={() => setFlipped((f) => !f)}>
              {flipped ? "Hide card" : "Flip card"}
            </CandyButton>
            <CandyButton
              className="bg-candy-mint"
              onClick={() => {
                setFlipped(false);
                setTimeout(() => setPos((p) => (p + 1) % deck.prompts.length), 180);
              }}
            >
              Next card →
            </CandyButton>
            <CandyButton
              className="bg-candy-lilac"
              onClick={() => {
                setFlipped(false);
                setOrder(shuffleIndices(deck.prompts.length));
                setPos(0);
              }}
            >
              <span className="flex items-center gap-2"><Shuffle size={16} strokeWidth={2.5} /> Shuffle</span>
            </CandyButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function shuffleIndices(n: number) {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = arr[i]!;
    const b = arr[j]!;
    [arr[i], arr[j]] = [b, a];
  }
  return arr;
}

/* ---- Accept or Decline Cookies? ---- */

function CookieGame() {
  const [idx, setIdx] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const site = COOKIE_SITES[idx];
  const answer = (accept: boolean) => {
    if (accept) setAccepted((a) => a + 1);
    setLog((l) => [...l, `${accept ? "🍪" : "🚫"} www.${site}.com`]);
    if (idx + 1 >= COOKIE_SITES.length) {
      setDone(true);
    } else {
      setIdx(idx + 1);
    }
  };

  const verdict = useMemo(() => {
    const pct = accepted / COOKIE_SITES.length;
    if (pct >= 0.7) return "You accepted almost everything. Your search history needs prayer. 🙏";
    if (pct >= 0.3) return "A balanced gremlin. You decline some, you accept the interesting ones. 😌";
    return "Certified cookie decliner. Nothing gets past you. 🛡️";
  }, [accepted]);

  return (
    <section className="border-b-[3px] border-plum bg-card px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="🍪 Dilemma game"
          title="Accept or decline cookies?"
          sub="A very real Nigerian search history appears. Accept the cookie and own the question — or decline and claim you were never here."
          color="bg-candy-orange"
        />
        <div className="pop-card mt-10 overflow-hidden bg-card">
          <div className="flex items-center gap-2 border-b-[3px] border-plum bg-candy-yellow px-4 py-3">
            <span className="h-3.5 w-3.5 rounded-full bg-candy-pink" />
            <span className="h-3.5 w-3.5 rounded-full bg-card" />
            <span className="h-3.5 w-3.5 rounded-full bg-candy-mint" />
            <span className="pop-sm ml-2 flex-1 truncate bg-card px-3 py-1.5 text-xs font-bold text-plum">
              🔒 www.{done ? "game-over" : site}.com
            </span>
          </div>
          {done ? (
            <div className="p-8 text-center">
              <span className="text-6xl">🏁</span>
              <p className="mt-3 font-display text-2xl font-extrabold text-plum">
                You accepted {accepted} of {COOKIE_SITES.length} cookies
              </p>
              <p className="mt-2 text-sm font-semibold text-plum/75">{verdict}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {log.map((l, i) => (
                  <span key={i} className="sticker bg-background text-[10px] normal-case">{l}</span>
                ))}
              </div>
              <CandyButton
                className="mt-6 bg-candy-mint"
                onClick={() => {
                  setIdx(0);
                  setAccepted(0);
                  setLog([]);
                  setDone(false);
                }}
              >
                Play again ↺
              </CandyButton>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Search {idx + 1} of {COOKIE_SITES.length}
              </p>
              <p className="mt-3 font-display text-2xl font-extrabold leading-snug text-plum">"{site}"</p>
              <p className="mt-2 text-sm font-bold text-plum/60">This site uses cookies. Do you accept?</p>
              <div className="mt-6 flex justify-center gap-3">
                <CandyButton className="bg-candy-mint" onClick={() => answer(true)}>
                  <span className="flex items-center gap-2"><Cookie size={16} strokeWidth={2.5} /> Accept</span>
                </CandyButton>
                <CandyButton className="bg-candy-pink" onClick={() => answer(false)}>
                  <span className="flex items-center gap-2"><Ban size={16} strokeWidth={2.5} /> Decline</span>
                </CandyButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---- Tic-tac-toe: cupcakes vs donuts ---- */

const LINES: [number, number, number][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

type Cell = "🧁" | "🍩" | null;

function winnerOf(board: Cell[]): Cell | "draw" | null {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return board.every(Boolean) ? "draw" : null;
}

function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [score, setScore] = useState({ you: 0, donut: 0 });
  const result = winnerOf(board);

  const play = (i: number) => {
    if (board[i] || result) return;
    const next = [...board];
    next[i] = "🧁";
    const w1 = winnerOf(next);
    if (!w1) {
      const empty = next.map((v, k) => (v ? null : k)).filter((v): v is number => v !== null);
      if (empty.length) next[empty[Math.floor(Math.random() * empty.length)]!] = "🍩";
    }
    setBoard(next);
  };

  useEffect(() => {
    if (result === "🧁") setScore((s) => ({ ...s, you: s.you + 1 }));
    if (result === "🍩") setScore((s) => ({ ...s, donut: s.donut + 1 }));
  }, [result]);

  return (
    <section className="border-b-[3px] border-plum bg-candy-lilac/30 px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="🧁 vs 🍩"
          title="Sweeet tic-tac-toe"
          sub="You're the cupcake. The donut plays back. First to three in a row takes the bakery."
          color="bg-candy-pink"
        />
        <p className="mt-6 font-display text-sm font-extrabold uppercase tracking-widest text-plum/70">
          You {score.you} — {score.donut} Donut
        </p>
        <div className="pop-card mx-auto mt-4 grid max-w-sm grid-cols-3 gap-2 bg-card p-3">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => play(i)}
              className={cn(
                "pop-sm flex h-24 items-center justify-center bg-background text-4xl transition-transform hover:-translate-y-0.5",
                cell && "bg-candy-yellow/60"
              )}
            >
              {cell}
            </button>
          ))}
        </div>
        <p className="mt-4 font-display text-lg font-extrabold text-plum">
          {result === "draw" ? "It's a draw — split the dessert." : result === "🧁" ? "Cupcakes win! 🎉" : result === "🍩" ? "The donut got you. 🍩" : "Your move, Sweeetie."}
        </p>
        <CandyButton
          className="mt-4 bg-candy-mint"
          onClick={() => setBoard(Array(9).fill(null))}
        >
          New round ↺
        </CandyButton>
      </div>
    </section>
  );
}

/* ---- This or That ---- */

function ThisOrThatGame() {
  const [idx, setIdx] = useState(0);
  const [picks, setPicks] = useState<Array<"a" | "b">>([]);
  const [done, setDone] = useState(false);

  const pair = THIS_OR_THAT[idx]!;
  const pick = (side: "a" | "b") => {
    setPicks((p) => [...p, side]);
    if (idx + 1 >= THIS_OR_THAT.length) setDone(true);
    else setIdx(idx + 1);
  };

  return (
    <section className="border-b-[3px] border-plum bg-card px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="⚡ Quick fire"
          title="This or that"
          sub="No thinking. No hedging. Just pick one."
          color="bg-candy-lilac"
        />
        {done ? (
          <div className="mt-10">
            <p className="font-display text-2xl font-extrabold text-plum">Your vibe report is in: 🧾</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {picks.map((p, i) => (
                <span key={i} className="sticker bg-candy-yellow text-xs normal-case">
                  {p === "a" ? THIS_OR_THAT[i]!.a : THIS_OR_THAT[i]!.b}
                </span>
              ))}
            </div>
            <CandyButton
              className="mt-6 bg-candy-mint"
              onClick={() => {
                setIdx(0);
                setPicks([]);
                setDone(false);
              }}
            >
              Run it back ↺
            </CandyButton>
          </div>
        ) : (
          <>
            <p className="mt-6 font-display text-xs font-extrabold uppercase tracking-widest text-plum/60">
              {idx + 1} / {THIS_OR_THAT.length}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {(["a", "b"] as const).map((side) => (
                <button
                  key={side}
                  onClick={() => pick(side)}
                  className="pop-card bg-background p-8 transition-transform hover:-translate-y-1"
                >
                  <span className="text-5xl">{side === "a" ? pair.ea : pair.eb}</span>
                  <p className="mt-3 font-display text-xl font-extrabold text-plum">
                    {side === "a" ? pair.a : pair.b}
                  </p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ---- Leaderboard + coming soon ---- */

function LeaderboardSection() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="🏆 Rankings"
          title="General leaderboard"
          sub="Play anything in the Playground and climb. The donut is watching."
          color="bg-candy-yellow"
        />
        <div className="pop-card mx-auto mt-10 max-w-xl overflow-hidden bg-card">
          {LEADERBOARD.map((p, i) => (
            <div
              key={p.name}
              className={cn(
                "flex items-center gap-4 border-b-[3px] border-dashed border-plum/40 px-5 py-3.5 last:border-b-0",
                i === 0 && "bg-candy-yellow/60"
              )}
            >
              <span className="font-display text-xl font-extrabold text-plum">{p.rank === 1 ? <Crown size={20} strokeWidth={2.5} className="inline" /> : p.rank}</span>
              <span className="font-display text-base font-extrabold text-plum">{p.name}</span>
              <span className="ml-auto text-sm font-extrabold text-muted-foreground">{p.points} pts</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="flex justify-center">
            <Sticker color="bg-candy-pink">Coming soon</Sticker>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {COMING_SOON.map((g) => (
              <div key={g.name} className={cn("pop-card flex flex-col items-center gap-2 p-6 text-center opacity-90", COLOR_BG[g.color])}>
                <span className="text-5xl animate-bob">{g.emoji}</span>
                <p className="font-display text-lg font-extrabold text-plum">{g.name}</p>
                <p className="text-xs font-bold text-plum/75">{g.blurb}</p>
                <span className="pop-sm bg-card px-3 py-1 text-[10px] font-extrabold uppercase text-plum">In the oven 🧑‍🍳</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
