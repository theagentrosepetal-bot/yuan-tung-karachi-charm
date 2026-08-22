import { Clock } from "lucide-react";

import { restaurant } from "@/data/restaurant";

type Variant = "card" | "compact";

/**
 * Editable opening-hours block. The data lives in src/data/restaurant.ts —
 * edit the `hours` array there to change the table everywhere it appears.
 */
export function OpeningHours({ variant = "card" }: { variant?: Variant }) {
  const hours = restaurant.hours;
  const today = new Date().getDay(); // 0 = Sunday
  const todayIndex = today === 0 ? 6 : today - 1;

  if (variant === "compact") {
    return (
      <div className="text-xs text-sidebar-foreground/80">
        <p className="flex items-center gap-1.5 font-medium text-gold">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          Open Daily
        </p>
        <p className="mt-1 leading-relaxed">
          Lunch: 12:00 PM – 3:00 PM
          <br />
          Dinner: 7:00 PM – 11:00 PM
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card p-6">
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
        <h2 className="font-display text-xl">Opening Hours</h2>
      </div>
      <span className="mt-4 block rule-gold" aria-hidden="true" />
      <table className="mt-5 w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="pb-2 font-medium">Day</th>
            <th className="pb-2 font-medium">Lunch</th>
            <th className="pb-2 font-medium">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((h, i) => (
            <tr
              key={h.day}
              className={`border-t border-border ${i === todayIndex ? "bg-secondary/40" : ""}`}
            >
              <td className="py-2.5 font-medium text-foreground">
                {h.day}
                {i === todayIndex && (
                  <span className="ml-2 text-[10px] uppercase tracking-wider text-gold">Today</span>
                )}
              </td>
              <td className="py-2.5 text-muted-foreground">{h.lunch}</td>
              <td className="py-2.5 text-muted-foreground">{h.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-muted-foreground">{restaurant.hoursNote}</p>
    </div>
  );
}
