"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import { personalInfo, socialLinks, type SocialLink } from "@/lib/data";
import { AvailabilityBadge } from "@/components/ui/availability-badge";

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function SocialLinks() {
  return (
    <div className="lg:sticky lg:top-24 space-y-8">
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

      <div className="border-t border-border/50" />

      <div>
        <p className="text-sm text-muted-foreground mb-4">Connect</p>
        <div className="space-y-2">
          {socialLinks.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.icon !== "mail" ? "_blank" : undefined}
                rel={item.icon !== "mail" ? "noopener noreferrer" : undefined}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors group"
                aria-label={item.name}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border/50" />

      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
        <AvailabilityBadge showDescription />
      </div>
    </div>
  );
}
