import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import heroInterior from "@/assets/hero-interior.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import exterior from "@/assets/exterior.jpg";
import hotpot from "@/assets/hotpot.jpg";
import soup from "@/assets/dish-hot-sour-soup.jpg";
import chowMein from "@/assets/dish-chow-mein.jpg";
import squid from "@/assets/dish-bbq-squid.jpg";
import prawnBalls from "@/assets/dish-prawn-balls.jpg";
import fish from "@/assets/dish-szechuan-fish.jpg";
import rice from "@/assets/dish-egg-fried-rice.jpg";
import dumplings from "@/assets/dish-dumplings.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Yuan Tung Restaurant, Karachi" },
      {
        name: "description",
        content:
          "Photos of Yuan Tung Restaurant in Karachi: the dining room, the exterior on Tariq Road, and dishes including soups, noodles and seafood.",
      },
      { property: "og:title", content: "Gallery — Yuan Tung Restaurant" },
      {
        property: "og:description",
        content: "Interior, exterior and food photography from Yuan Tung Restaurant, Karachi.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Shot = { src: string; alt: string; group: string; w: number; h: number; tall?: boolean };

const shots: Shot[] = [
  {
    src: heroInterior,
    alt: "The dining room set for the evening",
    group: "Interior",
    w: 1920,
    h: 1280,
  },
  {
    src: exterior,
    alt: "Restaurant exterior on Tariq Road at dusk",
    group: "Exterior",
    w: 1536,
    h: 1024,
  },
  {
    src: interiorDetail,
    alt: "Table beside a carved screen with a red lantern above",
    group: "Interior",
    w: 1024,
    h: 1280,
    tall: true,
  },
  { src: soup, alt: "Hot and sour soup in a white bowl", group: "Soups", w: 1024, h: 1024 },
  { src: hotpot, alt: "Steaming hotpot with side dishes", group: "Soups", w: 1280, h: 960 },
  { src: chowMein, alt: "Chow mein noodles served with chopsticks", group: "Noodles", w: 1024, h: 1024 },
  { src: squid, alt: "Barbecued squid rings with lemon", group: "Seafood", w: 1024, h: 1024 },
  { src: prawnBalls, alt: "Fried prawn balls with dipping sauce", group: "Seafood", w: 1024, h: 1024 },
  { src: fish, alt: "Szechuan style fish fillets in chilli sauce", group: "Seafood", w: 1024, h: 1024 },
  { src: rice, alt: "Egg fried rice in a bowl", group: "Food", w: 1024, h: 1024 },
  { src: dumplings, alt: "Steamed dumplings in a bamboo basket", group: "Food", w: 1024, h: 1024 },
];

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Photographs" title="Gallery">
        <p>
          Interior, exterior and food photography. These images are illustrative placeholders and can
          be replaced with the restaurant's own photographs.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <ul className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot) => (
            <li
              key={shot.alt}
              className={`group relative overflow-hidden border border-border ${
                shot.tall ? "row-span-2" : ""
              }`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={shot.w}
                height={shot.h}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-ink/70 px-4 py-2 text-xs tracking-[0.16em] text-ink-foreground uppercase opacity-0 transition-opacity group-hover:opacity-100">
                {shot.group}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
