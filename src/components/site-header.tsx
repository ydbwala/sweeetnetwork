import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SEARCH_INDEX } from "@/data/content";
import logoAsset from "@/assets/sweeet-logo.png.asset.json";
import { CandyButton, type CandyColor } from "./ui-sweeet";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/digest", label: "The Digest" },
  { to: "/sweeet-box", label: "Sweeet Box" },
  { to: "/community", label: "Community" },
  { to: "/playground", label: "Playground" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
];

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2">
      <span className="pop-sm flex h-11 items-center bg-candy-pink px-3 py-1.5">
        <img
          src={logoAsset.url}
          alt="Sweeet Network"
          className="h-6 w-auto transition-transform group-hover:animate-wiggle"
        />
      </span>
    </Link>
  );
}

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (open) setQ("");
  }, [open]);

  if (!open) return null;

  const results = SEARCH_INDEX.filter((item) =>
    (item.label + " " + item.sub).toLowerCase().includes(q.toLowerCase())
  ).slice(0, 9);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-plum/40 px-4 pt-24 backdrop-blur-sm" onClick={onClose}>
      <div
        className="pop-card w-full max-w-xl bg-card p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">🔍</span>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && results[0]) {
                onClose();
                navigate({ to: results[0].to });
              }
            }}
            placeholder="Search Sweeet… articles, games, vendors"
            className="pop-input w-full px-3 py-2.5 text-sm font-semibold"
          />
        </div>
        <div className="mt-3 max-h-80 space-y-1.5 overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-2 py-6 text-center text-sm font-semibold text-muted-foreground">
              Nothing here. Try "Starrgirl", "suya" or "games".
            </p>
          ) : (
            results.map((r, i) => (
              <Link
                key={i}
                to={r.to}
                onClick={onClose}
                className="pop-sm flex items-center gap-3 bg-background px-3 py-2.5 transition-transform hover:-translate-y-0.5"
              >
                <span className="text-xl">{r.emoji}</span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-extrabold text-plum">{r.label}</span>
                  <span className="block text-xs font-semibold text-muted-foreground">{r.sub}</span>
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function NewsletterOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (open) setDone(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-plum/40 px-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="pop-card w-full max-w-md bg-candy-pink p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl">💌</div>
        <h3 className="heading-display mt-3 text-3xl text-plum">A little Sweeet in your inbox</h3>
        <p className="mt-2 text-sm font-semibold text-plum/80">
          Weekly dose of Sweeetness. Zero spam, all vibes.
        </p>
        {done ? (
          <div className="pop-sm mt-6 bg-card px-5 py-4">
            <p className="font-display font-extrabold uppercase text-plum">You're officially a Sweeetie! 🎉</p>
          </div>
        ) : (
          <form
            className="mt-6 flex flex-col gap-3"
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
              className="pop-input px-4 py-3 text-sm font-semibold"
            />
            <CandyButton type="submit" className="bg-candy-yellow">
              Sign me up
            </CandyButton>
          </form>
        )}
        <button onClick={onClose} className="mt-4 text-xs font-bold uppercase tracking-wide text-plum/70 underline">
          Not now
        </button>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b-[3px] border-plum bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3 py-2 font-display text-[13px] font-extrabold uppercase tracking-wide text-plum transition-colors hover:bg-candy-yellow"
                activeProps={{ className: "underline-marker" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search Sweeet"
              className="pop-sm flex h-10 w-10 items-center justify-center bg-card transition-transform hover:-translate-y-0.5"
            >
              <Search size={18} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setNewsOpen(true)}
              className="pop-btn hidden bg-candy-pink px-4 py-2 font-display text-[13px] font-extrabold uppercase tracking-wide text-plum md:block"
            >
              Get Sweeet
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="pop-sm flex h-10 w-10 items-center justify-center bg-card lg:hidden"
            >
              {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="border-t-[3px] border-plum bg-background px-4 py-3 lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className="pop-sm bg-card px-3 py-2.5 text-center font-display text-sm font-extrabold uppercase tracking-wide text-plum"
                >
                  {n.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                setNewsOpen(true);
              }}
              className={cn("pop-btn mt-3 w-full bg-candy-pink px-4 py-2.5 font-display text-sm font-extrabold uppercase text-plum md:hidden")}
            >
              Get Sweeet
            </button>
          </nav>
        ) : null}
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <NewsletterOverlay open={newsOpen} onClose={() => setNewsOpen(false)} />
    </>
  );
}

export { NAV };
