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

        <div className="flex flex-wrap gap-2 pt-2">
          {item.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

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
    </main>
  );
}