import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Star, Utensils } from "lucide-react";

import { SectionHeading } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { featuredDishes } from "@/data/dishes";
import { restaurant } from "@/data/restaurant";
import { reviews } from "@/data/reviews";
import heroInterior from "@/assets/hero-interior.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import exterior from "@/assets/exterior.jpg";
import hotpot from "@/assets/hotpot.jpg";
import squid from "@/assets/dish-bbq-squid.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yuan Tung Restaurant — Classic Chinese Cuisine in Karachi" },
      {
        name: "description",
        content:
          "Yuan Tung Restaurant on Tariq Road, P.E.C.H.S. Karachi — an established Chinese restaurant known for its special hot & sour soup, hotpot, seafood, chow mein and fried rice. Dine-in, takeout and delivery.",
      },
      { property: "og:title", content: "Yuan Tung Restaurant — Classic Chinese Cuisine in Karachi" },
      {
        property: "og:description",
        content:
          "Classic Chinese-Pakistani cooking on Tariq Road, Karachi. Soups, hotpot, seafood and noodles. Reservations recommended for dinner.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <img
          src={heroInterior}
          alt="The Yuan Tung dining room set for the evening"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/72" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-5 py-24 text-center text-ink-foreground sm:px-6 lg:py-36">
          <p className="eyebrow text-gold">Tariq Road · P.E.C.H.S. · Karachi</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Yuan Tung Restaurant
          </h1>
          <p className="mt-4 font-display text-2xl text-gold-soft">{restaurant.localName}</p>
          <span className="mx-auto mt-8 rule-gold" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg text-ink-foreground/85">
            Classic Chinese Cuisine in Karachi — soups and hotpot, seafood, noodles and the dishes
            families here have been ordering for years.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl gap-6 text-sm sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
              <dt className="sr-only">Address</dt>
              <dd className="text-ink-foreground/80">173 Tariq Rd, Block 2 P.E.C.H.S.</dd>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
              <dt className="sr-only">Phone</dt>
              <dd>
                <a href={restaurant.phoneHref} className="link-underline text-ink-foreground/80">
                  {restaurant.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Utensils className="h-5 w-5 text-gold" aria-hidden="true" />
              <dt className="sr-only">Services</dt>
              <dd className="text-ink-foreground/80">Dine-in · Takeout · Delivery</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* RATING STRIP */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-5 text-center text-sm sm:flex-row sm:justify-between sm:px-6 sm:text-left">
          <p className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
            <span className="font-medium">
              {restaurant.rating} / 5
            </span>
            <span className="text-muted-foreground">
              from {restaurant.reviewCount.toLocaleString("en-US")} Google reviews
            </span>
          </p>
          <p className="text-muted-foreground">{restaurant.priceRange}</p>
          <p className="text-muted-foreground">{restaurant.reservations}</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 section-y sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="A familiar name in Karachi"
            title="Old-school Chinese cooking, kept the same"
            intro="Yuan Tung is a quiet, casual dining room on Tariq Road where many guests were first brought as children — and still return with their own families."
          />
          <p className="mt-5 text-muted-foreground">
            The kitchen keeps to the Chinese-Pakistani repertoire the city grew up on: hot and sour
            soup, steamboat hotpot, chow mein and fried rice, chicken and beef in gravy, and a wide
            seafood selection. Guests come back for consistency rather than novelty.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/about">Our Story</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/popular-dishes">Guest Favourites</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <img
            src={interiorDetail}
            alt="A set table beside a carved wooden screen"
            loading="lazy"
            width={1024}
            height={1280}
            className="row-span-2 h-full w-full rounded-2xl object-cover"
          />
          <img
            src={hotpot}
            alt="A steaming hotpot on the table"
            loading="lazy"
            width={1280}
            height={960}
            className="h-full w-full rounded-2xl object-cover"
          />
          <img
            src={squid}
            alt="Barbecued squid on a white plate"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="bg-ink-gradient section-y text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold">Most talked about</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Featured Dishes</h2>
            <span className="mx-auto mt-5 rule-gold" aria-hidden="true" />
            <p className="mt-5 text-ink-foreground/75">
              The plates guests name most often in their reviews. Please confirm availability when
              ordering.
            </p>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDishes.map((dish) => (
              <li key={dish.name} className="group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl">{dish.name}</h3>
                <p className="mt-2 text-sm text-ink-foreground/70">{dish.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14 text-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/menu">View the Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-5 section-y sm:px-6">
        <SectionHeading
          eyebrow={`${restaurant.rating} / 5 · ${restaurant.reviewCount.toLocaleString("en-US")} Google reviews`}
          title="What guests say"
          intro="Short excerpts from public reviews, kept as written."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <li key={r.author}>
              <figure className="flex h-full flex-col card-elevated p-7 sm:p-8 transition-colors hover:border-gold">
                <div className="flex gap-1" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{r.author}</span> · {r.when}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline">
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section className="border-y border-border bg-secondary section-y">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="The room"
            title="Casual, cozy and quiet"
            intro="A dining room suited to family dinners, couples and larger groups — with table service, high chairs and street parking nearby."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: heroInterior, alt: "The dining room in the evening", w: 1920, h: 1280 },
              { src: exterior, alt: "Restaurant frontage on Tariq Road", w: 1536, h: 1024 },
              { src: hotpot, alt: "Hotpot served at the table", w: 1280, h: 960 },
              { src: interiorDetail, alt: "Lantern above a set table", w: 1024, h: 1280 },
            ].map((img) => (
              <li key={img.alt} className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.w}
                  height={img.h}
                  className="aspect-3/4 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.05]"
                />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/gallery">Browse the Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-5 section-y text-center sm:px-6">
        <p className="eyebrow">Join us for dinner</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">
          Reserve a table, call us, or simply drop in
        </h2>
        <span className="mx-auto mt-6 rule-gold" aria-hidden="true" />
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          {restaurant.address} · {restaurant.hoursNote}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/reservations">Reserve a Table</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={restaurant.phoneHref}>Call {restaurant.phoneDisplay}</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
