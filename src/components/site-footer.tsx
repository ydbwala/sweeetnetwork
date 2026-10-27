import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { NAV } from "./site-header";
import { SOCIALS } from "@/data/content";
import { CandyButton } from "./ui-sweeet";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t-[3px] border-plum bg-plum text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <span className="pop-sm inline-flex items-center gap-1 bg-candy-pink px-3 py-1.5 font-display text-2xl font-extrabold uppercase tracking-tight text-plum">
            Sweeet <span className="text-xl">🍒</span>
          </span>
          <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-background/80">
            Where food, pop culture, lifestyle and entertainment come together — with a little
            extra Sweeetness. Lagos, Nigeria, with global ambitions.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              className="pop-sm bg-candy-pink px-3 py-1.5 text-xs font-extrabold uppercase text-plum"
            >
              📸 @sweeetnetwork
            </a>
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noreferrer"
              className="pop-sm bg-candy-orange px-3 py-1.5 text-xs font-extrabold uppercase text-plum"
            >
              ▶ @sweeetnetwork
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-candy-yellow">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-sm font-semibold text-background/80 transition-colors hover:text-candy-yellow"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-candy-yellow">
            A little Sweeet in your inbox
          </p>
          {done ? (
            <div className="pop-sm mt-4 bg-card px-4 py-3 text-sm font-bold text-plum">
              You're officially a Sweeetie! 🎉
            </div>
          ) : (
            <form
              className="mt-4 flex gap-2"
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
                className="pop-input min-w-0 flex-1 px-3 py-2.5 text-sm font-semibold"
              />
              <CandyButton type="submit" className="shrink-0 bg-candy-yellow">
                Join
              </CandyButton>
            </form>
          )}
          <div className="mt-5 space-y-1 text-sm font-medium text-background/80">
            <p>
              Collaborations:{" "}
              <a className="underline hover:text-candy-yellow" href={`mailto:${SOCIALS.email}`}>
                {SOCIALS.email}
              </a>
            </p>
            <p>Sweeet Network and Media Enterprises · RC 8938673</p>
            <p>Lagos, Nigeria 🇳🇬</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 py-5 text-center text-xs font-semibold text-background/70">
        © {new Date().getFullYear()} Sweeet Network — A little culture. A little chaos. A lot of Sweeet.
      </div>
    </footer>
  );
}
