import { Metadata } from "next";
import { ProjectGrid } from "@/components/works/project-grid";

export const metadata: Metadata = {
  title: "Works | Portfolio",
  description: "Explore my portfolio of web development projects, mobile apps, and open source contributions.",
};

export default function WorksPage() {
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Page Header - Left aligned */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground font-mono mb-2">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Selected Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Projects I&apos;ve built across web, mobile, and open source.
          </p>
        </div>

        {/* Project List */}
        <ProjectGrid />
      </div>
    </div>
  );
}
