import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import { balancedReviews, reviews, reviewThemes } from "@/data/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Yuan Tung Restaurant, Karachi" },
      {
        name: "description",
        content:
          "What guests say about Yuan Tung Restaurant in Karachi: 4.1 out of 5 from 1,854 Google reviews, with notes on the hot & sour soup, seafood and family dining.",
      },
      { property: "og:title", content: "Reviews — Yuan Tung Restaurant" },
      {
        property: "og:description",
        content: "4.1 / 5 from 1,854 Google reviews of Yuan Tung Restaurant, Karachi.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

export function RatingSummary() {
  return (
    <div className="flex flex-col items-center gap-3 border border-border bg-card px-8 py-10 text-center panel-frame">
      <p className="font-display text-6xl text-primary">{restaurant.rating}</p>
      <div className="flex gap-1" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((n) => (
          <Star
            key={n}
            className={`h-4 w-4 ${n < 4 ? "fill-gold text-gold" : "text-muted-foreground"}`}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        {restaurant.rating} / 5 · {restaurant.reviewCount.toLocaleString("en-US")} Google reviews
      </p>
      <Button asChild variant="outline" size="sm" className="mt-2">
        <a href={restaurant.mapsSearchUrl} target="_blank" rel="noopener noreferrer">
          See More Reviews
        </a>
      </Button>
    </div>
  );
}

function ReviewCard({
  quote,
  author,
  when,
  theme,
}: {
  quote: string;
  author: string;
  when: string;
  theme: string;
}) {
  return (
    <figure className="flex h-full flex-col card-elevated p-7 sm:p-8 transition-colors hover:border-gold">
      <Quote className="h-5 w-5 text-gold" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span> · {when}
        <span className="mt-1 block text-xs tracking-[0.14em] text-primary uppercase">{theme}</span>
      </figcaption>
    </figure>
  );
}

function ReviewsPage() {
  return (
    <>
      <PageHeader eyebrow="In our guests' words" title="Reviews">
        <p>
          Short excerpts from public Google reviews, kept as written. We include balanced feedback
          too — it is part of an honest picture.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="space-y-6">
            <RatingSummary />
            <div>
              <h2 className="eyebrow">Most mentioned</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {reviewThemes.map((t) => (
                  <li
                    key={t}
                    className="rounded-sm border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {reviews.map((r) => (
              <li key={r.author}>
                <ReviewCard {...r} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="Balanced feedback"
            title="Not every visit is perfect"
            intro="Some guests have raised portions, pricing and the age of the dining room. We keep these visible rather than hidden."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {balancedReviews.map((r) => (
              <li key={r.author}>
                <ReviewCard {...r} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
