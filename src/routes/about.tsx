import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import interiorDetail from "@/assets/interior-detail.jpg";
import exterior from "@/assets/exterior.jpg";
import hotpot from "@/assets/hotpot.jpg";
import chowMein from "@/assets/dish-chow-mein.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Yuan Tung — A Chinese Restaurant on Tariq Road, Karachi" },
      {
        name: "description",
        content:
          "About Yuan Tung Restaurant: an established Chinese restaurant in P.E.C.H.S., Karachi, known for classic Chinese-Pakistani cooking, soups and a quiet, family-friendly dining room.",
      },
      { property: "og:title", content: "About Yuan Tung Restaurant" },
      {
        property: "og:description",
        content: "An established Chinese restaurant in P.E.C.H.S., Karachi.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="About Yuan Tung">
        <p>
          {restaurant.localName} — a Chinese restaurant on Tariq Road that many families in Karachi
          have been returning to for years.
        </p>
      </PageHeader>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Established presence"
            title="A familiar table in P.E.C.H.S."
          />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Yuan Tung sits at 173 Tariq Road, in Block 2 of P.E.C.H.S. — a quiet, casual dining
              room in a part of Karachi that has changed a great deal around it. Guests describe the
              atmosphere as cozy and nostalgic, and the kind of place they were first brought to as
              children.
            </p>
            <p>
              The kitchen cooks the Chinese-Pakistani repertoire that Karachi grew up on: soups and
              hotpot, chow mein and fried rice, chicken and beef in gravy, and a broad seafood
              selection. Regulars come back for the consistency more than for anything new.
            </p>
            <p>
              We welcome families, couples, groups and long-time customers, with dine-in, takeout and
              delivery. Reservations are accepted and recommended for dinner.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={interiorDetail}
            alt="A set table beside a carved wooden screen in the dining room"
            loading="lazy"
            width={1024}
            height={1280}
            className="col-span-1 row-span-2 h-full w-full rounded-2xl object-cover"
          />
          <img
            src={hotpot}
            alt="A steaming hotpot served with side dishes"
            loading="lazy"
            width={1280}
            height={960}
            className="h-full w-full rounded-2xl object-cover"
          />
          <img
            src={chowMein}
            alt="A bowl of chow mein noodles"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Editable placeholder for the owner's official history */}
      <section className="mx-auto max-w-4xl px-5 pb-16 sm:px-6">
        <div className="border border-dashed border-gold bg-card p-8 sm:p-10">
          <p className="eyebrow">Our history — to be added</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl">
            This section is reserved for the restaurant's own account
          </h2>
          <p className="mt-4 text-muted-foreground">
            The founding year, the family behind the kitchen and the milestones of the restaurant
            deserve to be told first-hand. Rather than guess at dates or names, we have left this
            space for the owners to fill in — it can be edited at any time.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Placeholder text — replace with the official history.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="A look around"
          intro="Illustrative photography — the restaurant's own photos can replace these."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: exterior, alt: "Restaurant exterior in the evening", w: 1536, h: 1024 },
            { src: interiorDetail, alt: "Dining room corner with a red lantern", w: 1024, h: 1280 },
            { src: hotpot, alt: "Hotpot on the table", w: 1280, h: 960 },
          ].map((img) => (
            <li key={img.alt} className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={img.w}
                height={img.h}
                className="aspect-4/3 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/gallery">Full Gallery</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/reservations">Reserve a Table</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
