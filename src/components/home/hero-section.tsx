"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks, techStack } from "@/lib/data";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] pt-24 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Main Name Block - Large */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 row-span-2 p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 flex flex-col justify-between min-h-[300px] md:min-h-[400px]"
          >
            <div>
              <p className="text-muted-foreground mb-4 font-mono text-sm">
                {personalInfo.role}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                {personalInfo.name.split(" ")[0]}
                <br />
                <span className="gradient-text">
                  {personalInfo.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                {personalInfo.tagline}. Building digital products with attention
                to detail and a focus on what matters.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/works">View Work</Link>
              </Button>
            </div>
          </motion.div>

          {/* Status Block */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Available for work</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Based in</p>
              <p className="font-medium flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {personalInfo.location}
              </p>
            </div>
          </motion.div>

          {/* Quick Stats Block */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-card/50 border border-border/50"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div>
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Block - Resume */}
          <motion.a
            variants={itemVariants}
            href={personalInfo.resumeUrl}
            download="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors group cursor-pointer flex flex-col justify-between"
          >
            <Download className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <div className="mt-4">
              <p className="font-medium group-hover:text-primary transition-colors">
                Resume
              </p>
              <p className="text-sm text-muted-foreground">Download PDF</p>
            </div>
          </motion.a>

          {/* Social Block */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-card/50 border border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">Connect</p>
            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.email}
                className="p-3 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Tech Marquee Block - Wide */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 p-6 rounded-2xl bg-card/50 border border-border/50 overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mb-3">Technologies</p>
            <div className="flex gap-3 flex-wrap">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1.5 rounded-lg bg-muted text-sm font-mono"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
