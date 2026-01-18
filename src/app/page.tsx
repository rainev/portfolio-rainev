import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "../content/portfolio";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const { profile, projects, professionalExpertise } = portfolioData;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      <section className="grid gap-8 md:grid-cols-[220px_1fr] items-start">
        <div className="flex justify-center md:justify-start">
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={220}
            height={220}
            className="rounded-3xl object-cover border shadow-sm scale-105"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h1 className="text-4xl font-bold tracking-tight">
              {profile.name}
            </h1>

            <p className="text-lg text-muted-foreground">
              {profile.role} • {profile.location}
            </p>
          </div>

          <div className="max-w-2xl text-base leading-relaxed text-foreground/90">
            <ReactMarkdown
              components={{
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                p: ({ children }) => <p>{children}</p>,
              }}
            >
              {profile.about}
            </ReactMarkdown>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {profile.socials.map((s) => (
              <Button key={s.label} variant="outline" asChild>
                <a href={s.href} target="_blank" rel="noreferrer">
                  <span className="mr-2">{s.emoji}</span>
                  {s.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Professional Expertise</h2>
          <Link href="/expertise" className="text-sm text-muted-foreground hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {professionalExpertise.map((item) => (
            <ShowcaseCard
              key={item.slug}
              href={`/expertise/${item.slug}`}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ShowcaseCard
              key={p.slug}
              href={`/projects/${p.slug}`}
              title={p.title}
              subtitle={p.subtitle}
              description={p.description}
              tags={p.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
