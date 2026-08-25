import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Yuan Tung Restaurant" },
      {
        name: "description",
        content:
          "Privacy policy placeholder for Yuan Tung Restaurant, Karachi — to be completed by the restaurant.",
      },
      { property: "og:title", content: "Privacy Policy — Yuan Tung Restaurant" },
      { property: "og:description", content: "Privacy policy for Yuan Tung Restaurant, Karachi." },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-muted-foreground sm:px-6">
        <p>
          Placeholder page. Reservation requests submitted through this website are not stored or
          transmitted at present.
        </p>
        <p>
          The restaurant can replace this text with its own privacy policy covering how enquiries,
          phone numbers and reservation details are handled.
        </p>
      </div>
    </>
  ),
});
