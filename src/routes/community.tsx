import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  CandyButton,
  COLOR_BG,
  PageHero,
  SectionHeading,
  SocialLinks,
  Sticker,
} from "@/components/ui-sweeet";
import {
  CERTIFIED_VENDORS,
  HOT_TAKES,
  QOTD,
  SWEEET_SPOTS,
  SWEET_OR_SOUR,
  type HotTake,
} from "@/data/content";
import { cn } from "@/lib/utils";
import dishPhoto from "@/assets/sweeet-spot-dish.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Pass the Pepper, Sweeet Spot & More | Sweeet Network" },
      {
        name: "description",
        content:
          "Hot takes at Pass the Pepper, Sweet or Sour votes, the Question of the Day, verified Lagos restaurants, certified vendors and an anonymous tea-spilling box.",
      },
      {
        property: "og:title",
        content: "Community — Pass the Pepper, Sweeet Spot & More | Sweeet Network",
      },
      {
        property: "og:description",
        content: "Debates, votes, verified Lagos spots, certified vendors and anonymous gossip.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <main>
      <PageHero
        emoji="🫂"
        eyebrow="Community"
        title="Where Sweeeties gather"
        sub="Debate it, vote on it, answer it, taste it, spill it. This is the loudest room in the house."
        color="bg-candy-yellow"
      />
      <PassThePepper />
      <SweetOrSour />
      <QuestionOfTheDay />
      <SweeetSpot />
      <SweeetsChoice />
      <SpillTheTea />
      <section className="px-4 pb-16 pt-2 text-center">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
          More of us on the internet
        </p>
        <SocialLinks className="mt-4 justify-center" />
      </section>
    </main>
  );
}

/* ---- Pass the Pepper ---- */

function PassThePepper() {
  const [takes, setTakes] = useState<HotTake[]>(HOT_TAKES);
  const [voted, setVoted] = useState<Record<string, "agree" | "disagree">>({});

  const vote = (id: string, side: "agree" | "disagree") => {
    if (voted[id]) return;
    setVoted((v) => ({ ...v, [id]: side }));
    setTakes((ts) =>
      ts.map((t) =>
        t.id === id ? { ...t, [side === "agree" ? "agree" : "disagree"]: t[side === "agree" ? "agree" : "disagree"] + 1 } : t
      )
    );
  };

  return (
    <section className="border-b-[3px] border-plum px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="🌶️ Hot takes"
          title="Pass the pepper"
          sub="Pop culture, money, love, family — nothing is too spicy. Agree or disagree, no chilling out allowed."
          color="bg-candy-orange"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {takes.map((t, i) => {
            const total = t.agree + t.disagree;
            const agreePct = Math.round((t.agree / total) * 100);
            const my = voted[t.id];
            return (
              <div key={t.id} className={cn("pop-card flex flex-col gap-4 p-6", COLOR_BG[(["pink", "mint", "lilac", "yellow", "orange", "pink"] as const)[i % 6]])}>
                <Sticker color="bg-card">{t.topic}</Sticker>
                <p className="font-display text-lg font-extrabold leading-snug text-plum">"{t.text}"</p>
                <div className="mt-auto">
                  <div className="h-4 overflow-hidden rounded-full border-[3px] border-plum bg-card">
                    <div className="h-full bg-candy-mint transition-all" style={{ width: `${agreePct}%` }} />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs font-extrabold text-plum/80">
                    <span>👍 {t.agree} agree · {agreePct}%</span>
                    <span>👎 {t.disagree} disagree</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => vote(t.id, "agree")}
                      disabled={!!my}
                      className={cn(
                        "pop-btn flex-1 py-2 font-display text-xs font-extrabold uppercase text-plum",
                        my === "agree" ? "bg-candy-mint" : my ? "bg-card opacity-50" : "bg-card"
                      )}
                    >
                      {my === "agree" ? "You agreed ✓" : "Agree 👍"}
                    </button>
                    <button
                      onClick={() => vote(t.id, "disagree")}
                      disabled={!!my}
                      className={cn(
                        "pop-btn flex-1 py-2 font-display text-xs font-extrabold uppercase text-plum",
                        my === "disagree" ? "bg-candy-pink" : my ? "bg-card opacity-50" : "bg-card"
                      )}
                    >
                      {my === "disagree" ? "You disagreed ✓" : "Disagree 👎"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Sweet or Sour? ---- */

function SweetOrSour() {
  const [voted, setVoted] = useState<Record<string, "sweet" | "sour">>({});

  return (
    <section className="border-b-[3px] border-plum bg-card px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="🍋 Sweet or sour?"
          title="Give us your verdict"
          sub="Sweeeties vote on whether something gets the co-sign or the side-eye. Pick a side to reveal the room."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SWEET_OR_SOUR.map((s) => {
            const my = voted[s.id];
            const sourPct = 100 - s.sweetPct;
            return (
              <div key={s.id} className="pop-card flex flex-col items-center gap-3 bg-background p-6 text-center">
                <span className="text-5xl">{s.emoji}</span>
                <p className="font-display text-xl font-extrabold text-plum">{s.thing}</p>
                <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">{s.question}</p>
                {my ? (
                  <div className="w-full">
                    <div className="flex h-5 overflow-hidden rounded-full border-[3px] border-plum">
                      <div className="flex items-center justify-center bg-candy-mint text-[10px] font-extrabold text-plum" style={{ width: `${s.sweetPct}%` }}>
                        {s.sweetPct >= 18 ? `${s.sweetPct}%` : ""}
                      </div>
                      <div className="flex items-center justify-center bg-candy-orange text-[10px] font-extrabold text-plum" style={{ width: `${sourPct}%` }}>
                        {sourPct >= 18 ? `${sourPct}%` : ""}
                      </div>
                    </div>
                    <p className="mt-2 text-xs font-bold text-plum/70">
                      🍯 Sweet {s.sweetPct}% · 🍋 Sour {sourPct}% · you said {my}
                    </p>
                  </div>
                ) : (
                  <div className="mt-auto flex w-full gap-2">
                    <button
                      onClick={() => setVoted((v) => ({ ...v, [s.id]: "sweet" }))}
                      className="pop-btn flex-1 bg-candy-mint py-2 font-display text-xs font-extrabold uppercase text-plum"
                    >
                      🍯 Sweet
                    </button>
                    <button
                      onClick={() => setVoted((v) => ({ ...v, [s.id]: "sour" }))}
                      className="pop-btn flex-1 bg-candy-orange py-2 font-display text-xs font-extrabold uppercase text-plum"
                    >
                      🍋 Sour
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Question of the Day ---- */

function QuestionOfTheDay() {
  const [count, setCount] = useState(QOTD.initialCount);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <section className="border-b-[3px] border-plum bg-candy-lilac/40 px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <div className="pop-card relative overflow-hidden bg-card p-8 text-center md:p-10">
          <span className="absolute -right-5 -top-5 text-6xl rotate-12">🔥</span>
          <Sticker color="bg-candy-yellow">Question of the day</Sticker>
          <h2 className="heading-display mt-4 text-3xl text-plum md:text-4xl">{QOTD.question}</h2>
          <p className="pop-sm mx-auto mt-5 inline-block bg-candy-pink px-4 py-2 font-display text-sm font-extrabold uppercase tracking-wide text-plum">
            {count} Sweeeties have answered
          </p>
          {submitted ? (
            <div className="mt-6">
              <div className="pop-sm bg-candy-mint px-4 py-3">
                <p className="text-xs font-extrabold uppercase tracking-widest text-plum/70">Your answer</p>
                <p className="mt-1 font-display text-lg font-extrabold text-plum">"{submitted}"</p>
              </div>
              <p className="mt-3 text-sm font-bold text-plum/70">
                Noted and protected. Sharing snacks is a trust exercise and you just passed. 🛡️
              </p>
            </div>
          ) : (
            <form
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (!answer.trim()) return;
                setSubmitted(answer.trim());
                setCount((c) => c + 1);
              }}
            >
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Your answer (we won't judge… much)"
                className="pop-input flex-1 px-4 py-3 text-sm font-semibold"
              />
              <CandyButton type="submit" className="shrink-0 bg-candy-yellow">
                Answer it
              </CandyButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---- Sweeet Spot ---- */

function SweeetSpot() {
  return (
    <section className="border-b-[3px] border-plum px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="📍 Verified spots"
          title="Sweeet Spot"
          sub="Handpicked Lagos restaurant recommendations, refreshed every week. Photos, menus, ambience notes — we do the chewing so you don't have to gamble."
          color="bg-candy-mint"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SWEEET_SPOTS.map((s, i) => (
            <div key={s.name} className="pop-card flex flex-col overflow-hidden bg-card">
              {i === 0 ? (
                <img
                  src={dishPhoto}
                  alt={`A vibrant spread at ${s.name}: jollof rice, grilled chicken, suya skewers, puff-puff and drinks`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-44 w-full border-b-[3px] border-plum object-cover"
                />
              ) : (
                <div className={cn("flex h-44 items-center justify-center border-b-[3px] border-plum", i === 1 ? "bg-candy-yellow" : "bg-candy-orange")}>
                  <span className="text-6xl">{s.emoji}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl font-extrabold text-plum">{s.name}</p>
                  <Sticker color="bg-candy-mint" className="rotate-2 text-[10px]">Verified ✓</Sticker>
                </div>
                <p className="mt-1 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  {s.area} · {s.price}
                </p>
                <p className="mt-3 text-sm font-medium text-plum/80">{s.ambience}</p>
                <div className="pop-sm mt-4 bg-candy-pink/30 px-3 py-2.5">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-plum/70">Signature order</p>
                  <p className="text-sm font-bold text-plum">{s.signature} {s.emoji}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Sweeet's Choice + vendor form ---- */

function SweeetsChoice() {
  const [form, setForm] = useState({ name: "", business: "", category: "Food vendor", social: "", email: "" });
  const [sent, setSent] = useState(false);

  return (
    <section className="border-b-[3px] border-plum bg-card px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="🏅 Certified vendors"
          title="Sweeet's Choice"
          sub="Food and dessert vendors we've tasted, tested and personally cosigned. No pay-to-play — just really good things."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CERTIFIED_VENDORS.map((v, i) => (
            <div key={v.name} className={cn("pop-card flex flex-col items-center gap-2 p-6 text-center", COLOR_BG[(["yellow", "orange", "pink", "lilac", "mint"] as const)[i]])}>
              <span className="text-5xl">{v.emoji}</span>
              <p className="font-display text-lg font-extrabold text-plum">{v.name}</p>
              <p className="text-xs font-bold text-plum/75">{v.tag}</p>
              <Sticker color="bg-card" className="rotate-2 text-[10px]">Certified ✓</Sticker>
            </div>
          ))}
        </div>

        <div className="pop-card mx-auto mt-12 max-w-2xl bg-candy-yellow p-8">
          <h3 className="heading-display text-2xl text-plum">Want to be one of our certified vendors?</h3>
          <p className="mt-2 text-sm font-semibold text-plum/80">
            Apply here — tell us what you make and where to find you. If it's Sweeet, it's in.
          </p>
          {sent ? (
            <div className="pop-sm mt-6 bg-card px-5 py-4 text-center">
              <p className="font-display text-lg font-extrabold text-plum">Application received! 🎉</p>
              <p className="mt-1 text-sm font-semibold text-plum/75">
                Our taste-testing team will reach out. Keep those ovens hot.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 grid gap-3 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="pop-input px-4 py-3 text-sm font-semibold" />
              <input required value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Business name" className="pop-input px-4 py-3 text-sm font-semibold" />
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="pop-input px-4 py-3 text-sm font-semibold">
                <option>Food vendor</option>
                <option>Dessert vendor</option>
                <option>Drinks & small chops</option>
                <option>Caterer</option>
                <option>Something deliciously else</option>
              </select>
              <input value={form.social} onChange={(e) => setForm({ ...form, social: e.target.value })} placeholder="Instagram handle" className="pop-input px-4 py-3 text-sm font-semibold" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="pop-input px-4 py-3 text-sm font-semibold sm:col-span-2" />
              <CandyButton type="submit" className="bg-candy-orange sm:col-span-2 sm:justify-self-start">
                Apply now 🧾
              </CandyButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---- Spill the Tea ---- */

function SpillTheTea() {
  const [tea, setTea] = useState("");
  const [cups, setCups] = useState(312);

  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <div className="pop-card relative overflow-hidden bg-candy-pink p-8 text-center md:p-10">
          <span className="absolute -left-4 -bottom-6 text-7xl -rotate-12">🫖</span>
          <Sticker color="bg-card">Anonymous · zero judgement</Sticker>
          <h2 className="heading-display mt-4 text-3xl text-plum md:text-4xl">Spill the tea</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm font-semibold text-plum/85">
            Sweeeties, anything to share? Funny moments, crazy experiences, embarrassing encounters,
            random gist — whatever it is, we want to hear it!
          </p>
          <p className="mt-4 inline-block font-display text-xs font-extrabold uppercase tracking-widest text-plum/70">
            {cups} cups of tea spilled this week 🍵
          </p>
          <form
            className="mt-6 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (!tea.trim()) return;
              setTea("");
              setCups((c) => c + 1);
            }}
          >
            <textarea
              value={tea}
              onChange={(e) => setTea(e.target.value)}
              rows={4}
              placeholder="The floor is yours. No names needed — the tea is safe here…"
              className="pop-input px-4 py-3 text-sm font-medium"
            />
            <CandyButton type="submit" className="self-center bg-candy-yellow">
              Spill it 🍵
            </CandyButton>
          </form>
        </div>
      </div>
    </section>
  );
}
