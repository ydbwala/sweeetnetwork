import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  CandyButton,
  COLOR_BG,
  PageHero,
  SectionHeading,
  Sticker,
} from "@/components/ui-sweeet";
import { PRODUCTS, type Product } from "@/data/content";
import { cn } from "@/lib/utils";
import teePhoto from "@/assets/merch-tee.jpg";
import flatlayPhoto from "@/assets/merch-flatlay.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Sweeet Merch | Sweeet Network" },
      {
        name: "description",
        content:
          "Limited-edition Sweeet Network merch: graphic tees, tote bags, dad caps, foodie sticker packs and enamel pins.",
      },
      { property: "og:title", content: "Shop — Sweeet Merch | Sweeet Network" },
      {
        property: "og:description",
        content: "Limited-edition Sweeet merch for Sweeeties who wear the lifestyle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

type CartLine = { id: string; qty: number };

function ShopPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  const count = cart.reduce((n, l) => n + l.qty, 0);
  const total = cart.reduce((n, l) => {
    const p = PRODUCTS.find((x) => x.id === l.id);
    return n + (p ? p.price * l.qty : 0);
  }, 0);

  const add = (id: string) => {
    setCheckedOut(false);
    setCart((c) => {
      const line = c.find((l) => l.id === id);
      return line ? c.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) : [...c, { id, qty: 1 }];
    });
  };

  const setQty = (id: string, qty: number) =>
    setCart((c) => (qty <= 0 ? c.filter((l) => l.id !== id) : c.map((l) => (l.id === id ? { ...l, qty } : l))));

  return (
    <main>
      <PageHero
        emoji="🛍️"
        eyebrow="Merch"
        title="The Sweeet Shop"
        sub="Limited-edition drops for Sweeeties who like their wardrobe the way we like our jollof — loud."
        color="bg-candy-pink"
      />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-muted-foreground">
              {PRODUCTS.length} items · first drop · while stock lasts
            </p>
            <button
              onClick={() => setCartOpen(true)}
              className="pop-btn relative bg-candy-yellow px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
            >
              🛒 Cart
              {count > 0 ? (
                <span className="pop-sm absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-candy-pink px-1 text-xs font-extrabold text-plum">
                  {count}
                </span>
              ) : null}
            </button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => add(p.id)} />
            ))}
          </div>

          <div className="pop-card mt-12 flex flex-col items-center gap-3 bg-candy-lilac px-6 py-8 text-center">
            <span className="text-4xl">🧾</span>
            <p className="font-display text-xl font-extrabold text-plum">
              This is a demo storefront
            </p>
            <p className="max-w-lg text-sm font-semibold text-plum/80">
              Browse, fill your cart, "check out" — it's a simulation of the full Sweeet drop.
              Real payments and shipping arrive with the official launch.
            </p>
          </div>
        </div>
      </section>

      {cartOpen ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-plum/40 backdrop-blur-sm" onClick={() => setCartOpen(false)}>
          <aside
            className="h-full w-full max-w-md overflow-y-auto border-l-[3px] border-plum bg-background p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="heading-display text-2xl text-plum">Your cart 🛒</p>
              <button onClick={() => setCartOpen(false)} className="pop-sm bg-card px-3 py-1.5 font-display text-sm font-extrabold text-plum">
                ✕
              </button>
            </div>

            {checkedOut ? (
              <div className="mt-10 text-center">
                <span className="text-6xl animate-bob">🎉</span>
                <p className="mt-3 font-display text-xl font-extrabold text-plum">Order placed — sweet!</p>
                <p className="mt-2 text-sm font-semibold text-plum/75">
                  (Demo order — nothing was charged.) Your real Sweeet merch journey starts at launch.
                </p>
                <CandyButton
                  className="mt-6 bg-candy-mint"
                  onClick={() => {
                    setCart([]);
                    setCheckedOut(false);
                    setCartOpen(false);
                  }}
                >
                  Keep shopping
                </CandyButton>
              </div>
            ) : cart.length === 0 ? (
              <div className="mt-10 text-center">
                <span className="text-6xl">🧺</span>
                <p className="mt-3 font-display text-lg font-extrabold text-plum">Your cart is empty</p>
                <p className="mt-1 text-sm font-semibold text-plum/70">
                  Tragic, but fixable. Go grab something Sweeet.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-6 space-y-4">
                  {cart.map((l) => {
                    const p = PRODUCTS.find((x) => x.id === l.id)!;
                    return (
                      <div key={l.id} className="pop-sm flex items-center gap-3 bg-card p-3">
                        <span className={cn("flex h-12 w-12 items-center justify-center border-[3px] border-plum text-2xl", COLOR_BG[p.color])}>
                          {p.emoji}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-display text-sm font-extrabold text-plum">{p.name}</p>
                          <p className="text-xs font-bold text-muted-foreground">₦{p.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => setQty(l.id, l.qty - 1)} className="pop-sm bg-background px-2 py-1 font-extrabold text-plum">−</button>
                          <span className="w-6 text-center text-sm font-extrabold text-plum">{l.qty}</span>
                          <button onClick={() => setQty(l.id, l.qty + 1)} className="pop-sm bg-background px-2 py-1 font-extrabold text-plum">+</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pop-sm mt-6 flex items-center justify-between bg-candy-yellow px-4 py-3">
                  <span className="font-display text-sm font-extrabold uppercase text-plum">Total</span>
                  <span className="font-display text-xl font-extrabold text-plum">₦{total.toLocaleString()}</span>
                </div>
                <CandyButton className="mt-5 w-full bg-candy-pink" onClick={() => setCheckedOut(true)}>
                  Check out
                </CandyButton>
              </>
            )}
          </aside>
        </div>
      ) : null}
    </main>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <div className="pop-card flex flex-col overflow-hidden bg-card">
      <div className={cn("relative flex h-52 items-center justify-center border-b-[3px] border-plum", COLOR_BG[product.color])}>
        {product.image === "tee" ? (
          <img src={teePhoto} alt={product.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
        ) : product.image === "flatlay" ? (
          <img src={flatlayPhoto} alt={product.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <span className="text-7xl">{product.emoji}</span>
        )}
        {product.badge ? (
          <Sticker color="bg-plum text-background" className="absolute right-3 top-3 rotate-3 text-[10px]">
            {product.badge}
          </Sticker>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-lg font-extrabold text-plum">{product.name}</p>
        <p className="mt-1 text-sm font-medium text-plum/75">{product.blurb}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-xl font-extrabold text-plum">₦{product.price.toLocaleString()}</p>
          <CandyButton className="bg-candy-yellow px-4 py-2" onClick={onAdd}>
            Add to cart
          </CandyButton>
        </div>
      </div>
    </div>
  );
}
