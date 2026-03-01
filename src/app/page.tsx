import { HeroSection } from "@/components/home/hero-section";
import { FeaturedWorks } from "@/components/home/featured-works";

export default function Home() {
  return (
    <div className="page-transition">
      <HeroSection />
      <FeaturedWorks />
    </div>
  );
}
