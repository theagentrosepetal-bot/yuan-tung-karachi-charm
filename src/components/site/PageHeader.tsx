import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-4xl px-5 section-y text-center sm:px-6">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <span className="mx-auto mt-6 rule-gold" aria-hidden="true" />
        {children && (
          <div className="mt-6 text-base text-ink-foreground/75 [&_p]:mx-auto [&_p]:max-w-2xl">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl">{title}</h2>
      <span className={`mt-5 rule-gold ${centered ? "mx-auto" : ""}`} aria-hidden="true" />
      {intro && <p className="mt-5 text-muted-foreground">{intro}</p>}
    </div>
  );
}
