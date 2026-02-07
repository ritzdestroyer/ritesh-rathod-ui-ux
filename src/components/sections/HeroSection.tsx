import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <p className="text-primary font-medium mb-4">Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
          Ritesh Rathod
        </h1>
        <h2 className="text-2xl sm:text-3xl text-muted-foreground font-medium mb-6">
          UI/UX Designer
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm a passionate UI/UX designer dedicated to creating intuitive, 
          user-friendly digital experiences. I transform ideas into beautiful, 
          functional designs that make a difference.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={scrollToProjects}>
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce hidden md:block"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
