// Portfolio data - Replace with your own information

export const personalInfo = {
  name: "Izzat Zaib",
  role: "Full Stack Developer",
  tagline: "Crafting digital experiences with code",
  email: "izzat.jehan@gmail.com",
  location: "Kuala Lumpur, Malaysia",
  bio: `I'm a passionate full-stack developer with 4+ years of experience building 
  modern web applications. I specialize in Java, React, Node.js, and cloud technologies.`,
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/SKYZAP",
  linkedin: "https://www.linkedin.com/in/izzat-zaib-7564351a0",
  email: "mailto:izzat.jehan@gmail.com",
};

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
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "other";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 80, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Angular", level: 80, category: "frontend" },
  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Java", level: 90, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 90, category: "backend" },
  { name: "MongoDB", level: 90, category: "backend" },
  { name: "GraphQL", level: 90, category: "backend" },
  // Tools
  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "Docker", level: 82, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "CI/CD", level: 85, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
];

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

export const techStack = [
  { name: "Java", icon: "java" },
  { name: "React / Next.js", icon: "react" },
  { name: "Node.js / NestJS", icon: "nodejs" },
  { name: "Go", icon: "go" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
];
