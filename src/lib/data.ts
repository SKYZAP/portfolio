export const siteConfig = {
  name: "Izzat Zaib",
  siteName: "Izzat Zaib",
  url: "https://izzatzaib.dev",
  description:
    "Crafting digital experiences with code. Building digital products with attention to detail and a focus on what matters.",
};

export const personalInfo = {
  name: "Izzat Zaib",
  firstName: "Izzat",
  lastName: "Zaib",
  role: "Full Stack Developer",
  tagline: "Crafting digital experiences with code",
  description:
    "Building digital products with attention to detail and a focus on what matters.",
  email: "izzat.jehan@gmail.com",
  location: "Kuala Lumpur, Malaysia",
  yearsOfExperience: 4,
  projectCount: 50,
  bio: `I'm a passionate full-stack developer with 4+ years of experience building modern web applications. I specialize in Java, React, Node.js, and cloud technologies.`,
  resumeUrl: "/resume.pdf",
  availability: {
    status: "available" as const,
    label: "Available for work",
    description: "Open to freelance projects and full-time opportunities.",
  },
};

export interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/SKYZAP", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/izzat-zaib-7564351a0",
    icon: "linkedin",
  },
  { name: "Email", href: `mailto:${personalInfo.email}`, icon: "mail" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "opensource";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    longDescription:
      "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, Stripe payment integration, and admin dashboard. Implemented real-time inventory updates using WebSockets.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    longDescription:
      "Developed a Trello-like task management app with drag-and-drop functionality, team collaboration features, and real-time sync across devices.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Fitness Tracking Mobile App",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "TypeScript", "Firebase", "HealthKit"],
    category: "mobile",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "Open Source CLI Tool",
    description:
      "A developer productivity CLI for automating common development tasks.",
    image: "/projects/cli.jpg",
    tags: ["Rust", "CLI", "GitHub Actions"],
    category: "opensource",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-5",
    title: "AI Chat Interface",
    description:
      "A modern chat interface for interacting with AI models with streaming responses.",
    image: "/projects/aichat.jpg",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts and interactive maps.",
    image: "/projects/weather.jpg",
    tags: ["Vue.js", "Weather API", "Mapbox", "D3.js"],
    category: "web",
    liveUrl: "https://example.com",
    featured: false,
  },
];

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
  featured?: boolean;
}

export const skills: Skill[] = [
  { name: "React / Next.js", level: 80, category: "frontend", featured: true },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Angular", level: 80, category: "frontend" },
  { name: "Node.js / NestJS", level: 90, category: "backend", featured: true },
  { name: "Java", level: 90, category: "backend", featured: true },
  { name: "Python", level: 80, category: "backend" },
  { name: "Go", level: 75, category: "backend", featured: true },
  { name: "PostgreSQL", level: 90, category: "backend", featured: true },
  { name: "MongoDB", level: 90, category: "backend", featured: true },
  { name: "GraphQL", level: 90, category: "backend" },
  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "Docker", level: 82, category: "tools", featured: true },
  { name: "AWS", level: 75, category: "tools", featured: true },
  { name: "CI/CD", level: 85, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
];

export const techStack = skills.filter((s) => s.featured);

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Backend Engineer",
    company: "MoneyLion",
    location: "Kuala Lumpur, Malaysia",
    startDate: "Jun 2024",
    endDate: "Present",
    description: [
      "Lead development of the main product using Next.js and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines and DevOps best practices",
    ],
  },
  {
    id: "exp-2",
    title: "Software Engineer",
    company: "PETRONAS Digital Sdn Bhd",
    location: "Kuala Lumpur, Malaysia",
    startDate: "Mar 2023",
    endDate: "Jun 2024",
    description: [
      "Sub-contracted as a Full Stack Developer from FPT Software",
      "Developed responsive web applications for various clients",
      "Built RESTful APIs and integrated third-party services",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Maintained and optimized existing codebase",
    ],
  },
  {
    id: "exp-3",
    title: "Software Engineer",
    company: "Mindworks Interactive",
    location: "Remote",
    startDate: "Oct 2022",
    endDate: "Feb 2023",
    description: [
      "Created interactive UI components using React",
      "Implemented responsive designs and accessibility features",
      "Participated in agile development processes",
      "Wrote unit and integration tests for frontend code",
    ],
  },
  {
    id: "exp-4",
    title: "Backend Developer",
    company: "Big Corridor Sdn Bhd",
    location: "Remote",
    startDate: "Mar 2022",
    endDate: "Oct 2022",
    description: [
      "Created interactive UI components using React",
      "Implemented responsive designs and accessibility features",
      "Participated in agile development processes",
      "Wrote unit and integration tests for frontend code",
    ],
  },
];
