import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { popularDishes } from "@/data/dishes";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/popular-dishes")({
  head: () => ({
    meta: [
      { title: "Popular Dishes — Yuan Tung Restaurant Karachi" },
      {
        name: "description",
        content:
          "The dishes guests mention most at Yuan Tung: special hot & sour soup, Thai soup, chicken manchurian, Szechuan fish, BBQ squid, fried prawn balls, egg fried rice and chow mein.",
      },
      { property: "og:title", content: "Popular Dishes — Yuan Tung Restaurant" },
      {
        property: "og:description",
        content: "Guest favourites from decades of Chinese cooking on Tariq Road, Karachi.",
      },
      { property: "og:url", content: "/popular-dishes" },
    ],
    links: [{ rel: "canonical", href: "/popular-dishes" }],
  }),
  component: PopularDishesPage,
});

function PopularDishesPage() {
  return (
    <>
      <PageHeader eyebrow="Guest favourites" title="Popular Dishes">
        <p>
          These are the dishes guests bring up again and again in their reviews. Photography is
          illustrative; please confirm availability when you order.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularDishes.map((dish) => (
            <li key={dish.name} className="group border border-border bg-card">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl">{dish.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{dish.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/menu">View Full Menu</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={restaurant.phoneHref}>Call to Order</a>
          </Button>
        </div>
      </div>
    </>
  );
}
