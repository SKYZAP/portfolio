"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Clock } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const socialItems = [
  { name: "GitHub", href: socialLinks.github, icon: Github },
  { name: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { name: "Twitter", href: socialLinks.twitter, icon: Twitter },
  { name: "Email", href: socialLinks.email, icon: Mail },
];

export function SocialLinks() {
  return (
    <div className="lg:sticky lg:top-24 space-y-8">
      {/* Quick Info */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-muted">
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">{personalInfo.location}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-muted">
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Response time</p>
            <p className="font-medium">Within 24 hours</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border/50" />

      {/* Social Links */}
      <div>
        <p className="text-sm text-muted-foreground mb-4">Connect</p>
        <div className="space-y-2">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.name !== "Email" ? "_blank" : undefined}
                rel={item.name !== "Email" ? "noopener noreferrer" : undefined}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border/50" />

      {/* Availability */}
      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">Available for work</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Open to freelance and full-time opportunities.
        </p>
      </div>
    </div>
  );
}
