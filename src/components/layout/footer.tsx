"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, personalInfo, socialLinks, type SocialLink } from "@/lib/data";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <Link href="/" className="font-semibold text-lg">
              {siteConfig.siteName}
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              {personalInfo.description}
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            {socialLinks.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.icon !== "mail" ? "_blank" : undefined}
                  rel={item.icon !== "mail" ? "noopener noreferrer" : undefined}
                  className="p-1.5 md:p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  aria-label={item.name}
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.siteName}</p>
          <p className="font-mono text-xs">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
