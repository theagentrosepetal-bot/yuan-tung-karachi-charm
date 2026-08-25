import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { menu } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Yuan Tung Restaurant, Tariq Road Karachi" },
      {
        name: "description",
        content:
          "Browse the Yuan Tung Restaurant menu: soups and hotpot, chicken, beef, fish, prawns, chow mein, fried rice, sizzlers and desserts in P.E.C.H.S., Karachi.",
      },
      { property: "og:title", content: "Menu — Yuan Tung Restaurant" },
      {
        property: "og:description",
        content: "Soups and hotpot, seafood, chow mein, fried rice and classic Chinese dishes.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const first = menu[0]!;
  const [active, setActive] = useState<string>(first.id);
  const category = menu.find((c) => c.id === active) ?? first;

  return (
    <>
      <PageHeader eyebrow="À la carte" title="Our Menu">
        <p>
          A long à-la-carte list built over decades of cooking in Karachi. Prices and availability
          change from time to time — please call {restaurant.phoneDisplay} to confirm.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6">
        {/* Category tabs */}
        <nav aria-label="Menu categories" className="-mx-4 overflow-x-auto px-5 pb-2">
          <ul className="flex min-w-max gap-2">
            {menu.map((c) => {
              const isActive = c.id === active;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setActive(c.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-full border px-4 py-2 text-sm whitespace-nowrap shadow-soft transition-all duration-200 hover:-translate-y-0.5 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground/80 hover:border-gold hover:text-foreground"
                    }`}
                  >
                    {c.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <section aria-live="polite" className="mt-12">
          <header className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">{category.title}</h2>
            <span className="mt-4 rule-gold" aria-hidden="true" />
            {category.note && <p className="mt-4 text-muted-foreground">{category.note}</p>}
          </header>

          <ul className="mt-10 grid gap-x-14 gap-y-7 md:grid-cols-2">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dashed border-border pb-4"
              >
                <div className="min-w-0">
                  <h3 className="font-display text-xl leading-snug">
                    {item.name}
                    {item.popular && (
                      <span className="ml-2 inline-block translate-y-[-2px] rounded-full border border-gold px-2 py-0.5 align-middle text-[0.65rem] tracking-[0.14em] text-primary uppercase">
                        Popular
                      </span>
                    )}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
                <p className="shrink-0 font-display text-lg text-primary">
                  {item.price ?? <span className="text-sm text-muted-foreground">On request</span>}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-col items-start gap-4 border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl">Ordering or dining with us?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Dine-in, takeout and delivery. Reservations recommended for dinner.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={restaurant.phoneHref}>Call {restaurant.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
