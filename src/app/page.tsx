import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "../content/portfolio";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const { profile, projects, professionalExpertise } = portfolioData;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-10">
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
          {/* <Link href="/expertise" className="text-sm text-muted-foreground hover:underline">
            View all →
          </Link> */}
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
          {/* <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
            View all →
          </Link> */}
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

      {/* EDUCATION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Education</h2>

        <div className="space-y-4">
          {portfolioData.education.map((e) => (
            <div key={`${e.program}-${e.years}`} className="rounded-xl border p-4">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">{e.program}</p>
                <p className="text-sm text-muted-foreground">
                  {e.school} • {e.years}
                </p>
                {e.notes ? <p className="text-sm text-muted-foreground">{e.notes}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.technicalSkills.map((g) => (
            <div key={g.label} className="rounded-xl border p-4 space-y-3">
              <p className="font-semibold">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <Badge key={x} variant="secondary">
                    {x}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINING & CERTIFICATES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Training & Certificates</h2>

        <div className="space-y-4">
          {portfolioData.trainingAndCertificates.map((c) => (
            <div key={`${c.title}-${c.year}`} className="rounded-xl border p-4 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-semibold">
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        {c.title}
                        <span className="text-muted-foreground">↗</span>
                      </a>
                    ) : (
                      c.title
                    )}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {c.issuer} • {c.year}
                  </p>
                </div>

                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium
                      hover:bg-accent hover:text-accent-foreground transition
                    "
                  >
                    🏅 View
                    <span className="text-muted-foreground">↗</span>
                  </a>
                ) : null}
              </div>

              {c.highlights?.length ? (
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  {c.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
