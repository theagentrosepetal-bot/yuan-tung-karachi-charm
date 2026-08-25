import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Yuan Tung Restaurant" },
      {
        name: "description",
        content:
          "Terms of use placeholder for the Yuan Tung Restaurant website — to be completed by the restaurant.",
      },
      { property: "og:title", content: "Terms of Use — Yuan Tung Restaurant" },
      { property: "og:description", content: "Terms of use for the Yuan Tung Restaurant website." },
      { property: "og:url", content: "/terms" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" />
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-muted-foreground sm:px-6">
        <p>
          Placeholder page. Menu items, prices and availability shown on this site are indicative and
          may change without notice.
        </p>
        <p>
          Reservation requests made here are requests only and are confirmed only when the restaurant
          contacts you.
        </p>
      </div>
    </>
  ),
});
