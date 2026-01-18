import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const c = project.content;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <div className="space-y-3">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ← Back
        </Link>

        <h1 className="text-3xl font-bold">{project.title}</h1>
        {project.subtitle ? (
          <p className="text-muted-foreground">{project.subtitle}</p>
        ) : null}

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        {/* Links */}
        {project.links?.length ? (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((l) => (
              <Button key={l.href} variant="outline" asChild>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.emoji ? <span className="mr-2">{l.emoji}</span> : null}
                  {l.label}
                </a>
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <Separator />

      {/* Overview */}
      {c?.overview ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-muted-foreground">{c.overview}</p>
        </section>
      ) : null}

      {/* Highlights */}
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

      {/* Tech */}
      {c?.tech?.length ? (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {c.tech.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}