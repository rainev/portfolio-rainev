export type SocialLink = {
    label: string;
    href: string;
    emoji: string;
};

export type Tag = string;

export type ShowcaseItem = {
    slug: string;              // used in URL e.g. /projects/lab-reservation
    title: string;
    subtitle?: string;         // one-liner
    description: string;       // short preview
    tags: Tag[];               // tech/skills badges
    links?: { label: string; href: string; emoji?: string }[];
    featured?: boolean;
    coverImage?: string;       
    content?: {
        overview?: string;
        highlights?: string[];
        tech?: string[];
        role?: string;
        timeline?: string;
        challenges?: string[];
        learnings?: string[];
    };
};

export type PortfolioContent = {
    profile: {
        name: string;
        role: string;
        location?: string;
        photo: {
        src: string;           
        alt: string;
        };
        about: string;
        socials: SocialLink[];
        areaOfExpertise: string[];
    };

    professionalExpertise: ShowcaseItem[];
    projects: ShowcaseItem[];
};

export const portfolioData: PortfolioContent = {
    profile: {
        name: "Raine Villaver",
        role: "Full-Stack Developer",
        location: "Philippines",
        photo: {
        src: "/images/me.jpg",
        alt: "Portrait of Raine Villaver",
        },
        about: "A **forward-thinking builder** who leads with a **help-first principle**—transforming problems into **actionable strategies** through **empathy**, **technical skill**, and **creative thinking**. Thrives in **collaborative environments** focused on **iterative learning** and **honest feedback**, with a strong ability to identify **pain points**, define **core problems**, and craft **practical**, **people-centered solutions**.",
        socials: [
        { label: "GitHub", href: "https://github.com/rainev", emoji: "💻" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/<your-handle>", emoji: "🔗" },
        { label: "Email", href: "mailto:villaver.raine@gmail.com", emoji: "📩" }
        ],
        areaOfExpertise: ["React", "Node.js", "Next.js", "MongoDB", "Docker", "UI Systems"],
    },

    professionalExpertise: [
        {
        slug: "full-stack-web-dev",
        title: "Full-Stack Web Development",
        subtitle: "React / Next.js + Node.js APIs",
        description:
            "Build end-to-end web applications with clean UI, secure auth flows, and scalable backend patterns.",
        tags: ["React", "Next.js", "Node.js", "REST APIs"],
        featured: true,
        content: {
            overview: "I focus on building practical systems: auth, dashboards, workflows, and reliable CRUD with validation.",
            highlights: [
                "Reusable UI components (shadcn + Tailwind)",
                "API design and validation",
                "Deployment-ready structure",
            ],
        },
        },
    ],

    projects: [
    {
      slug: "computer-lab-reservation",
      title: "Computer Lab Reservation System",
      subtitle: "Real-time lab seat scheduling",
      description: "A full-stack web app for viewing and reserving lab seats with smooth booking workflows.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Docker"],
      links: [
        { label: "GitHub", href: "https://github.com/rainev/Computer_Lab_Reservation", emoji: "💻" },
      ],
      featured: true,
      content: {
        overview:
          "Built a reservation platform for students and admins to manage seat availability and reduce conflicts.",
        highlights: [
          "Reservation workflows with validation to prevent conflicts",
          "Role-based access (student/admin)",
          "Dockerized local setup",
        ],
        tech: ["React", "Express.js", "MongoDB", "Material UI", "JSON Forms", "Docker"],
      },
    },
    {
      slug: "mental-health-chatbot",
      title: "Prompt-Engineered CBT Chatbot",
      subtitle: "Layered prompt design + safety guardrails",
      description:
        "A CBT-inspired chatbot that guides users through structured reflection using prompt engineering.",
      tags: ["Next.js", "TypeScript", "Tailwind", "ChatGPT"],
      links: [
        { label: "GitHub", href: "https://github.com/rainev/MentalHealthChatbot_Group4", emoji: "💻" },
      ],
      content: {
        overview:
          "Designed layered prompts to support CBT flows while maintaining safety guardrails and responsible UX.",
        highlights: [
          "Structured CBT flow prompts",
          "Guardrails to avoid unsafe outputs",
          "Deployed with Vercel-friendly architecture",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    },
  ],
};