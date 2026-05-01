import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopSections from "@/components/ShopSections";
import SocialSections from "@/components/SocialSections";

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const id = (entry.target as HTMLElement).dataset.section;
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <ShopSections scrollTo={scrollTo} />
      <SocialSections scrollTo={scrollTo} />
    </div>
  );
}
