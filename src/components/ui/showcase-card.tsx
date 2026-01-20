import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import { Children } from "react";

type Props = {
  href: string;
  title: string;
  subtitle?: string;
  description: string[];
  tags?: string[];
};

export function ShowcaseCard({ href, title, subtitle, description, tags = [] }: Props) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-3">
            <span>{title}</span>
          </CardTitle>
          {subtitle ? (
            <CardDescription className="text-sm">{subtitle}</CardDescription>
          ) : null}
        </CardHeader>

        <CardContent className="space-y-4">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
            {description.map((d, i) => (
              <li key={i}>
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <>{children}</>,
                    strong: ({ children}) => (
                      <strong className="font-semibold text-foreground">{children}</strong>
                    ),
                  }}
                >
                  {d}
                </ReactMarkdown>
              </li>
            ))}
          </ul>

          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
}