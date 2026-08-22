import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, MapPin, Navigation, Phone, ShoppingBag, Truck, Utensils } from "lucide-react";

import { OpeningHours } from "@/components/site/OpeningHours";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import exterior from "@/assets/exterior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions — Yuan Tung Restaurant, Tariq Road Karachi" },
      {
        name: "description",
        content:
          "Yuan Tung Restaurant, 173 Tariq Rd, Block 2 P.E.C.H.S., Karachi. Call +92 21 34542934 for dine-in, takeout, delivery or to reserve a table. Get directions.",
      },
      { property: "og:title", content: "Contact — Yuan Tung Restaurant, Karachi" },
      {
        property: "og:description",
        content: "Address, phone, directions and service options for Yuan Tung Restaurant.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const services = [
  { icon: Utensils, label: "Dine-in", note: "Casual, quiet and family-friendly." },
  { icon: ShoppingBag, label: "Takeout", note: "Order by phone and collect." },
  { icon: Truck, label: "Delivery", note: "Available — call to check your area." },
  { icon: CalendarCheck, label: "Reservations", note: "Accepted; recommended for dinner." },
];

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Find us" title="Contact & Directions">
        <p>
          We are on Tariq Road in Block 2, P.E.C.H.S. Free street parking is available nearby, and it
          is usually easier at lunch.
        </p>
      </PageHeader>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Yuan Tung Restaurant</h2>
          <span className="mt-4 rule-gold" aria-hidden="true" />
          <address className="mt-6 space-y-4 text-base not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              {restaurant.address}
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={restaurant.phoneHref} className="link-underline">
                {restaurant.phoneDisplay}
              </a>
            </p>
          </address>
          <p className="mt-4 text-sm text-muted-foreground">{restaurant.priceRange}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation aria-hidden="true" /> Get Directions
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={restaurant.phoneHref}>
                <Phone aria-hidden="true" /> Call Restaurant
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.label} className="border border-border bg-card p-5">
                <s.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg">{s.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <OpeningHours />
          </div>
        </div>

        <div>
          {/* Map section — replace with an embedded map when available */}
          <div className="relative overflow-hidden border border-border">
            <img
              src={exterior}
              alt="The restaurant frontage on Tariq Road"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-72 w-full object-cover sm:h-96"
            />
            <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-ink-foreground">
              <MapPin className="h-7 w-7 text-gold" aria-hidden="true" />
              <p className="font-display text-2xl">173 Tariq Rd, Block 2 P.E.C.H.S.</p>
              <p className="text-sm text-ink-foreground/80">
                Map embed placeholder — an interactive map can be added here.
              </p>
              <Button asChild variant="secondary">
                <a href={restaurant.mapsSearchUrl} target="_blank" rel="noopener noreferrer">
                  Open in Maps
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-6 border border-border bg-card p-6">
            <h2 className="font-display text-xl">Atmosphere</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {restaurant.atmosphere.map((a) => (
                <li
                  key={a}
                  className="rounded-sm border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Wheelchair accessible seating, restrooms, high chairs for children, table service, and
              card or cash payments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
