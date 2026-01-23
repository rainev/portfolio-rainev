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
    description: string[];       // short preview
    tags: Tag[];               // tech/skills badges
    links?: { label: string; href: string; emoji?: string }[];
    featured?: boolean;
    coverImage?: string;       
    content?: {
        impact?: string;
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
    education: EducationItem[];
    technicalSkills: SkillGroup[];
    trainingAndCertificates: CertificateItem[];

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

export type EducationItem = {
  program: string;
  school: string;
  years: string;
  notes?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  href?: string;
  year: string;
  highlights?: string[];
};

export const portfolioData: PortfolioContent = {
    education: [
      {
        program: "BS Computer Science Major in Software Technology",
        years: "2022 - Present (4th Year, 2nd Term)",
        school: "De La Salle University",
      },
      {
        program: "Humanities and Social Sciences",
        years: "2020 - 2022",
        school: "De La Salle University",
      },
    ],

    technicalSkills: [
      {
        label: "Languages",
        items: ["Java", "Python", "JavaScript", "C", "C++", "TypeScript", "SQL", "HTML", "CSS"],
      },
      {
        label: "Frameworks/Tools",
        items: ["React", "Node.js", "Express.js", "NestJS", "Docker", "Kafka", "Vite", "Next.js", "Tailwind CSS"],
      },
      {
        label: "Databases",
        items: ["MongoDB", "MySQL", "MariaDB"],
      },
      {
        label: "Libraries",
        items: ["scikit-learn", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      },
      {
        label: "Others",
        items: ["Git", "Agile (Scrum)", "JSON Forms", "Material-UI"],
      },
    ],

    trainingAndCertificates: [
      {
        title: "AWS Academy Graduate – Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        href: "https://www.credly.com/badges/0ad99d33-3798-40c9-aa90-c0aead1a1f60/public_url",
        year: "2025",
        highlights: [
          "AWS cloud fundamentals & global infrastructure",
          "Core services: EC2, S3, RDS, Lambda, VPC",
          "Cloud architecture & pricing models",
          "AWS support plans and shared responsibility model",
        ],
      },
    ],

    profile: {
        name: "Raine Villaver",
        role: "Full-Stack Developer",
        location: "Philippines",
        photo: {
        src: "/images/me.jpg",
        alt: "Portrait of Raine Villaver",
        },
        about: "A **forward-thinking builder** who leads with a **help-first mindset**, turning complex problems into practical, **people-centered solutions** through empathy, technical skill, and creative thinking. Thrives in **collaborative teams** that value iteration, clarity, and honest feedback.",
        socials: [
        { label: "GitHub", href: "https://github.com/rainev", emoji: "💻" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/raine-villaver-51195a314", emoji: "🔗" },
        { label: "Email", href: "mailto:villaver.raine@gmail.com", emoji: "📩" }
        ],
        areaOfExpertise: ["React", "Node.js", "Next.js", "MongoDB", "Docker", "UI Systems"],
    },

    professionalExpertise: [
      {
        slug: "tech-team-lead",
        title: "Tech Team Lead - Apprenticeship",
        subtitle: "Led a 6-member Agile team to build a real-time logistics communications platform used in production.",
        description: [
          "Led a 6-person Agile team, strengthening delivery through code reviews, sprint execution, and Git-based issue tracking.",
          "Built a communications platform used by shipping and trucking companies, improving dispatch coordination through real-time alerts and customizable notification channels.",
          "Designed end-to-end architecture and optimized MySQL + UI workflows using Node.js, NestJS, and React, improving reliability and scalability.",
        ],
        tags: ["Node.js", "NestJS", "React", "MySQL", "WebSockets", "Agile (Scrum)"],
        links: [{ label: "Abiso.app", href: "https://abiso.app/", emoji: "🚛" }],
        featured: true,
        coverImage: "/images/Abiso.png",
        content: {
          impact:
            "Delivered a production-ready pre-advise booking and monitoring platform for logistics operations, improving dispatch responsiveness through real-time alerts and configurable notification workflows.",
          role:
            "Tech Team Lead (Apprenticeship) — led sprint execution, owned architectural decisions, implemented core features, and partnered with BA/stakeholders to translate operational needs into deliverable requirements.",
          timeline: "Apprenticeship • 2024 (Production deployment ongoing)",

          overview:
            "Abiso Logistics Pre-Advise Booking and Monitoring Platform is a real-time communications layer for shipping and trucking teams. I integrated and extended an existing API framework, built key front-end interfaces, and helped shape system design to improve usability, performance, and operational clarity for dispatch workflows.",

          highlights: [
            "Coordinated sprint planning, task breakdown, and delivery across a 6-person team",
            "Implemented real-time alerts via WebSockets and event-driven notifications",
            "Built role-based UI workflows for booking, monitoring, and operational status tracking",
            "Improved API reliability through validation, consistent response contracts, and edge-case handling",
            "Optimized MySQL queries and indexing for key monitoring and lookup paths",
          ],

          tech: [
            "Node.js",
            "NestJS",
            "React",
            "MySQL",
            "WebSockets (real-time events)",
            "Agile Scrum (sprint ceremonies, planning, retro)",
            "Git-based issue tracking + code reviews",
          ],

          challenges: [
            "Aligning operational requirements (dispatch/monitoring) into clear UI workflows and backend contracts",
            "Designing notification rules that remain configurable without making the UI complex",
            "Maintaining performance and stability under real-time event updates and frequent status changes",
            "Integrating with an existing API framework while keeping implementations consistent and maintainable",
          ],

          learnings: [
            "How to lead delivery through small, testable increments and reliable review cycles",
            "Building real-time systems with predictable event flows and resilient UI state handling",
            "Balancing stakeholder requests with maintainable architecture and scoped milestones",
            "Designing for observability: logs, edge cases, and operational feedback loops",
          ],
        },
      },
    ],

    projects: [
      {
        slug: "lab-booking-system",
        title: "Lab Booking / Scheduling Reservation System",
        subtitle:
          "Full-stack reservation platform that lets students view and reserve lab seats in real time with secure authentication and smooth workflows.",
        description: [
          "Built front-end + back-end workflows for seat availability, real-time reservations, and admin management.",
          "Implemented authentication and streamlined booking UX to reduce scheduling conflicts.",
          "Containerized the stack with Docker for consistent deployment and development environments.",
        ],
        tags: ["React", "Node.js", "Express", "MongoDB", "Docker", "Material UI"],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/rainev/Computer_Lab_Reservation",
            emoji: "💻",
          },
        ],
        featured: true,
        content: {
          impact:
            "Improved lab reservation experience by reducing scheduling conflicts and enabling a clear seat availability workflow for both students and admins.",
          overview:
            "A full-stack web application designed to manage laboratory seat availability and reservations. Students can browse seat availability, reserve time slots, and manage bookings, while admins can track usage and handle scheduling.",
          highlights: [
            "Real-time seat availability and reservation workflow",
            "User authentication to prevent duplicate/reserved seat conflicts",
            "Admin-facing booking management and visibility",
            "Containerized deployment workflow using Docker",
          ],
          tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Material UI",
            "JSON Forms",
            "Docker",
          ],
          role: "Full-stack Developer",
          timeline: "Academic Project",
          challenges: [
            "Designing clean reservation rules to avoid collisions and inconsistent bookings",
            "Keeping UI state consistent with changing seat availability",
            "Building predictable backend validation and error handling for booking flows",
          ],
          learnings: [
            "End-to-end ownership of front-end + backend workflows",
            "Practical MongoDB schema design for booking/reservation systems",
            "Improving UX for multi-step reservation flows (validation + feedback)",
          ],
        },
      },

      {
        slug: "pokemon-sim",
        title: "Object-Oriented Game Development: Pokémon Sim",
        subtitle:
          "Java desktop game built with strong OOP principles and a reusable custom UI abstraction layer (UIEngine).",
        description: [
          "Built a full turn-based Pokémon simulation using Java with modular architecture and strong OOP design.",
          "Designed a custom UI abstraction layer (UIEngine) on top of javax.swing to simplify component rendering and events.",
          "Enabled faster iteration by building reusable UI components and clean separation of gameplay logic.",
        ],
        tags: ["Java", "OOP", "javax.swing", "UI Framework"],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/rainev/Pokemon_Game",
            emoji: "🎮",
          },
        ],
        content: {
          impact:
            "Demonstrated strong software design by building a modular game architecture and a reusable UI framework that reduces repetitive Swing code and speeds up iteration.",
          overview:
            "A turn-based desktop game where players explore a grid (3×3, 4×4, or 5×1), encounter wild Pokémon, and initiate battles. The project emphasizes OOP best practices and clean modular design.",
          highlights: [
            "Custom UIEngine framework to abstract Swing UI building and event handling",
            "Modular game architecture for exploration, encounters, and battle flow",
            "Reusable components and consistent rendering patterns",
          ],
          tech: ["Java", "OOP", "javax.swing", "Custom UI framework (UIEngine)"],
          role: "Developer",
          timeline: "Academic Project",
          challenges: [
            "Abstracting Swing into reusable rendering + event patterns",
            "Maintaining clean separation between UI layer and game logic",
            "Designing modular systems to support different grid sizes and gameplay flow",
          ],
          learnings: [
            "How to build UI abstraction layers to reduce repetitive code",
            "Structuring game systems using OOP for extensibility",
            "Improving maintainability via modular code organization",
          ],
        },
      },

      {
        slug: "lfs-employment-prediction",
        title: "ML Labor Force Employment Status Prediction Model",
        subtitle:
          "Machine learning model predicting employment status using socio-economic data (Philippine LFS), optimized for minority-class recall.",
        description: [
          "Led KNN model development and tuning using GridSearchCV and class balancing to improve minority-class performance.",
          "Contributed to data cleaning and EDA to uncover key trends in socio-economic predictors.",
          "Benchmarked KNN performance alongside Logistic Regression and Neural Network baselines.",
        ],
        tags: ["Python", "scikit-learn", "Pandas", "KNN", "GridSearchCV"],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/rainev/Employment_Status_Prediction",
            emoji: "📈",
          },
        ],
        featured: true,
        content: {
          impact:
            "Reached 98.6% model accuracy while improving sensitivity for the 'Unemployed' minority class, helping reduce bias in classification performance.",
          overview:
            "A group machine learning project predicting employment status using socio-economic indicators from the Philippine Labor Force Survey (LFS). Focused on improving model performance across imbalanced classes.",
          highlights: [
            "KNN model tuning via GridSearchCV for optimal parameters",
            "Class balancing methods to improve minority-class recall",
            "Performance benchmarking against Logistic Regression and Neural Network models",
            "EDA and feature inspection to validate predictors",
          ],
          tech: [
            "Python",
            "scikit-learn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
          ],
          role: "ML Developer (KNN Lead) + Data Support",
          timeline: "Group Academic Project",
          challenges: [
            "Handling class imbalance and avoiding accuracy-only evaluation traps",
            "Selecting evaluation metrics appropriate for minority class performance",
            "Tuning parameters while controlling overfitting risk",
          ],
          learnings: [
            "Choosing metrics that match real-world fairness goals (recall, precision, F1)",
            "Model tuning workflow using GridSearchCV and controlled experiments",
            "How preprocessing + balancing changes decision boundaries",
          ],
        },
      },

      {
        slug: "prompt-engineered-cbt-chatbot",
        title: "Prompt-Engineered Mental Health Chatbot",
        subtitle:
          "CBT-guided chatbot using layered prompt engineering with safety guardrails, deployed as a production-ready web app.",
        description: [
          "Built an AI-powered chatbot to provide CBT-based support using structured prompt-engineering layers.",
          "Integrated ChatGPT API for generation and added safety guardrails to reduce harmful outputs.",
          "Deployed on Vercel with optimized routing and production builds using Next.js.",
        ],
        tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Prompt Engineering"],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/rainev/MentalHealthChatbot_Group4",
            emoji: "🧠",
          },
        ],
        featured: true,
        content: {
          impact:
            "Delivered a production-deployed CBT chatbot prototype that supports structured conversation flow while prioritizing safety and responsible AI behavior.",
          overview:
            "A web chatbot application designed to provide CBT-aligned support through prompt engineering. Uses layered prompting techniques for intent detection, structured CBT stages, and safe response generation.",
          highlights: [
            "Layered prompting structure (intent + CBT stage progression)",
            "Safety guardrails to filter risky content and reduce harmful outputs",
            "Clean UI chat experience with fast deployment on Vercel",
          ],
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "ChatGPT API"],
          role: "Developer (Prompt Engineering + Frontend Integration)",
          timeline: "Group Academic Project",
          challenges: [
            "Maintaining safe and helpful responses across sensitive conversations",
            "Designing layered prompts that remain consistent and controllable",
            "Building a clean conversational UI for multi-stage interactions",
          ],
          learnings: [
            "How layered prompt design improves controllability and conversation structure",
            "Importance of safety and validation in mental-health adjacent tools",
            "Deployment patterns for reliable Next.js production builds",
          ],
        },
      },

      {
        slug: "aws-ticket-webapp",
        title: "AWS Ticket WebApp",
        subtitle:
          "Full-stack ticketing web app for creating, tracking, and managing support requests with a clean React (Vite) UI and MongoDB persistence.",
        description: [
          "Built a ticketing system UI for creating and managing tickets with clear status and workflow handling.",
          "Implemented backend CRUD operations using Node.js + Mongoose with MongoDB for persistence.",
          "Structured the project for local development and deployment-ready builds using Vite.",
        ],
        tags: ["React", "Vite", "Node.js", "MongoDB", "Mongoose"],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/villaverraine/AWS-Ticket-WebApp",
            emoji: "🎫",
          },
        ],
        content: {
          impact:
            "Delivered a working ticket management flow that centralizes requests and improves visibility into status, ownership, and resolution progress.",
          overview:
            "A full-stack ticketing web application that supports creating, viewing, updating, and tracking tickets through a simple workflow. The app focuses on usability, clear ticket states, and reliable persistence.",
          highlights: [
            "Ticket creation, listing, and detail views with workflow-friendly UI",
            "CRUD backend using Mongoose models and validation",
            "Consistent data flow between client and API for predictable state updates",
            "Vite-based setup for fast development builds and production bundling",
          ],
          tech: ["React", "Vite", "Node.js", "MongoDB", "Mongoose"],
          role: "Full-stack Developer",
          timeline: "Academic / Personal Project",
          challenges: [
            "Designing a clean ticket workflow (status changes, updates, and views)",
            "Keeping UI state consistent with API mutations and error handling",
            "Structuring schemas and validation to prevent invalid ticket states",
          ],
          learnings: [
            "Building practical CRUD flows with predictable UI state management",
            "Schema-first thinking with Mongoose models and validation",
            "Organizing a React + Vite project for maintainable feature growth",
          ],
        },
      },

      {
        slug: "kafka-message-streaming-demo",
        title: "Kafka Producer & Consumer Demo",
        subtitle: "A simple event-streaming prototype using Kafka topics for message publishing and consumption.",
        description: [
          "Built a Kafka producer that publishes messages to a topic and a consumer that subscribes and processes them.",
          "Demonstrated event-driven communication and pub/sub messaging fundamentals using Kafka.",
          "Implemented a lightweight streaming flow to simulate real-time message delivery and processing.",
        ],
        tags: ["Kafka", "Event Streaming", "Producer/Consumer", "Messaging Systems"],
        links: [
          { label: "GitHub Repo", href: "https://github.com/rainev/kafka-message-streaming-demo", emoji: "📦" },
        ],
        featured: false,
        content: {
          impact: "Demonstrated foundational knowledge of event-driven architectures by implementing a working Kafka message pipeline.",
          overview:
            "This mini-project explores Apache Kafka fundamentals by implementing a producer that sends messages into a Kafka topic and a consumer that reads and processes those messages. It showcases how distributed systems can communicate asynchronously through event streams.",
          highlights: [
            "Kafka producer publishes events/messages to a topic",
            "Kafka consumer subscribes to the topic and processes incoming messages",
            "Demonstrates pub/sub workflow and asynchronous message handling",
          ],
          tech: [
            "Apache Kafka",
            "Producer API",
            "Consumer API",
            "Topic-based pub/sub messaging",
          ],
          role: "Developer (Solo Project)",
          timeline: "2024",
          challenges: [
            "Understanding Kafka concepts such as brokers, topics, partitions, and offsets",
            "Ensuring correct producer → topic → consumer message flow",
          ],
          learnings: [
            "How Kafka enables asynchronous communication through event streams",
            "Core producer/consumer workflow and topic-based messaging design",
            "Practical understanding of messaging fundamentals used in distributed systems",
          ],
        },
      }
    ],
};