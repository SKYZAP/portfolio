"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialItems = [
  { href: socialLinks.github, icon: Github, label: "GitHub" },
  { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: socialLinks.twitter, icon: Twitter, label: "Twitter" },
  { href: socialLinks.email, icon: Mail, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Left - Brand */}
          <div>
            <Link href="/" className="font-semibold text-lg">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Building digital products with attention to detail.
            </p>
          </div>

          {/* Middle - Links */}
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

          {/* Right - Social */}
          <div className="flex items-center gap-1 md:gap-2">
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear}</p>
          <p className="font-mono text-xs">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
