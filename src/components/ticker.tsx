import { cn } from "@/lib/utils";

export function Ticker({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn("overflow-hidden border-y-[3px] border-plum bg-candy-yellow py-2.5", className)}>
      <div className="animate-ticker flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((t, i) => (
              <span
                key={i}
                className="mx-5 flex items-center gap-5 font-display text-sm font-extrabold uppercase tracking-widest text-plum"
              >
                {t} <span className="text-base">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
