import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { restaurant } from "@/data/restaurant";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Yuan Tung Restaurant, Karachi" },
      {
        name: "description",
        content:
          "Request a table at Yuan Tung Restaurant, 173 Tariq Rd, P.E.C.H.S., Karachi. Reservations are accepted and recommended for dinner — call +92 21 34542934 to confirm.",
      },
      { property: "og:title", content: "Reservations — Yuan Tung Restaurant" },
      {
        property: "og:description",
        content: "Send a table request, or call the restaurant directly to confirm.",
      },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: ReservationsPage,
});

function ReservationsPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Table requests" title="Reserve a Table">
        <p>
          Reservations are accepted and recommended for dinner. This form sends a{" "}
          <strong>request</strong> — it is not a confirmed booking until the restaurant confirms it
          with you.
        </p>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section aria-labelledby="form-heading" className="border border-border bg-card p-6 sm:p-10">
          <h2 id="form-heading" className="font-display text-2xl">
            Reservation request
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fields marked with * are required. For same-day or large bookings, please call{" "}
            <a href={restaurant.phoneHref} className="text-primary underline">
              {restaurant.phoneDisplay}
            </a>
            .
          </p>

          <form
            className="mt-8 grid gap-6 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Request noted", {
                description:
                  "This demo form does not send messages yet. Please call the restaurant to confirm your table.",
              });
            }}
          >
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="name">Full name *</Label>
              <Input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone number *</Label>
              <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="guests">Number of guests *</Label>
              <Input id="guests" name="guests" type="number" min={1} max={40} defaultValue={2} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date *</Label>
              <Input id="date" name="date" type="date" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time *</Label>
              <Input id="time" name="time" type="time" required />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="request">Special request</Label>
              <Textarea
                id="request"
                name="request"
                rows={4}
                placeholder="Seating preference, celebration, high chairs, dietary notes…"
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Reservation Request
              </Button>
              <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                {sent
                  ? "Thank you — your request has been noted on this page only. No booking is confirmed yet; please call the restaurant to confirm."
                  : "Your table is confirmed only once the restaurant contacts you."}
              </p>
            </div>
          </form>
        </section>

        <aside className="space-y-6">
          <div className="border border-border bg-card p-6">
            <h2 className="font-display text-xl">Good to know</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Dinner reservations recommended.</li>
              <li>Groups and families welcome; high chairs available.</li>
              <li>Dine-in, takeout and delivery.</li>
              <li>{restaurant.priceRange}</li>
              <li>{restaurant.hoursNote}</li>
            </ul>
          </div>
          <div className="border border-border bg-ink p-6 text-ink-foreground">
            <h2 className="font-display text-xl">Prefer to call?</h2>
            <p className="mt-2 text-sm text-ink-foreground/75">
              The quickest way to confirm a table is by phone.
            </p>
            <Button asChild variant="secondary" className="mt-4 w-full">
              <a href={restaurant.phoneHref}>Call {restaurant.phoneDisplay}</a>
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
