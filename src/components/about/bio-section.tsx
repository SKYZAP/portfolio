"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { personalInfo } from "@/lib/data";

export function BioSection() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {personalInfo.bio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed text-lg mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <Button size="lg" asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <AvailabilityBadge showDescription className="mb-0" />
            </div>

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
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">{personalInfo.yearsOfExperience}+ years</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
