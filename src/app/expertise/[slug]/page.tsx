import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ExpertiseDetailPage({ params }: Props) {
  const { slug } = await params;

  const item = portfolioData.professionalExpertise.find((x) => x.slug === slug);
  if (!item) return notFound();

  const c = item.content;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <div className="space-y-3">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ← Back
        </Link>

        <h1 className="text-3xl font-bold">{item.title}</h1>
        {item.subtitle ? <p className="text-muted-foreground">{item.subtitle}</p> : null}

        {/* Links */}
        {item.links?.length ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {item.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm
                  font-medium text-foreground shadow-sm
                  hover:bg-accent hover:text-accent-foreground transition
                "
              >
                <span className="text-base">{l.emoji ?? "🔗"}</span>
                <span>{l.label}</span>
                <span className="text-muted-foreground">↗</span>
              </a>
            ))}
          </div>
        ) : null}

        {/* <div className="flex flex-wrap gap-2 pt-2">
          {item.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div> */}
      </div>

      <Separator />

      {c?.tech?.length ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Tech</h2>
          <div className="flex flex-wrap gap-2">
            {c.tech.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </section>
      ) : null}

      {/* Core Meta */}
      {c?.role || c?.timeline ? (
        <section className="grid gap-2 sm:grid-cols-2">
          {c?.role ? (
            <div className="space-y-1">
              <h2 className="text-sm font-semibold">Role</h2>
              <p className="text-muted-foreground">{c.role}</p>
            </div>
          ) : null}
          {c?.timeline ? (
            <div className="space-y-1">
              <h2 className="text-sm font-semibold">Timeline</h2>
              <p className="text-muted-foreground">{c.timeline}</p>
            </div>
          ) : null}
        </section>
      ) : null}

      {c?.impact ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Impact</h2>
          <p className="text-muted-foreground">{c.impact}</p>
        </section>
      ) : null}

      {c?.overview ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-muted-foreground">{c.overview}</p>
        </section>
      ) : null}

      {c?.highlights?.length ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            {c.highlights.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {c?.challenges?.length ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Challenges</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            {c.challenges.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {c?.learnings?.length ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Learnings</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            {c.learnings.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}