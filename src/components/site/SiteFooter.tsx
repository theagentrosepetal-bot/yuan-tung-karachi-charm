import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

import { OpeningHours } from "@/components/site/OpeningHours";
import { restaurant } from "@/data/restaurant";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-sidebar text-sidebar-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl">Yuan Tung Restaurant</h2>
          <p className="mt-1 text-sm text-sidebar-foreground/70">
            {restaurant.localName} · {restaurant.tagline}
          </p>
          <address className="mt-5 space-y-2 text-sm not-italic text-sidebar-foreground/80">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {restaurant.address}
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={restaurant.phoneHref} className="hover:text-gold">
                {restaurant.phoneDisplay}
              </a>
            </p>
          </address>
          <p className="mt-4 text-xs text-sidebar-foreground/60">{restaurant.hoursNote}</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs tracking-[0.2em] text-gold uppercase">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/popular-dishes", label: "Popular Dishes" },
              { to: "/reservations", label: "Reservations" },
              { to: "/gallery", label: "Gallery" },
              { to: "/reviews", label: "Reviews" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sidebar-foreground/80 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs tracking-[0.2em] text-gold uppercase">Follow</h3>
          <p className="mt-4 text-sm text-sidebar-foreground/70">
            Social profiles can be linked here once available.
          </p>
          <div className="mt-3 flex gap-3">
            <span
              className="grid h-9 w-9 place-items-center rounded-sm border border-sidebar-border text-sidebar-foreground/60"
              aria-hidden="true"
            >
              <Facebook className="h-4 w-4" />
            </span>
            <span
              className="grid h-9 w-9 place-items-center rounded-sm border border-sidebar-border text-sidebar-foreground/60"
              aria-hidden="true"
            >
              <Instagram className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-6 text-sm text-sidebar-foreground/70">
            Dine-in · Takeout · Delivery
            <br />
            {restaurant.priceRange}
          </p>
        </div>
      </div>

      <div className="border-t border-sidebar-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-sidebar-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Yuan Tung Restaurant, Karachi. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
