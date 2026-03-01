import { Metadata } from "next";
import { BioSection } from "@/components/about/bio-section";
import { SkillsSection } from "@/components/about/skills-section";
import { ExperienceTimeline } from "@/components/about/experience-timeline";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, skills, and professional experience as a software developer.",
};

export default function AboutPage() {
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Page Header - Left aligned */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground font-mono mb-2">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Background
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A bit about who I am and what I do.
          </p>
        </div>

        <BioSection />
        <SkillsSection />
        <ExperienceTimeline />
      </div>
    </div>
  );
}
