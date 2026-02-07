import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a fresher UI/UX Designer passionate about creating intuitive, 
            user-friendly digital experiences. I specialize in designing apps 
            and websites using Figma, focusing on usability, clean layouts, 
            and user-centered design.
          </p>
          <p>
            My approach combines research-driven design with creative problem-solving. 
            I believe that great design should not only look beautiful but also 
            solve real problems and enhance user satisfaction.
          </p>
          <p>
            I'm constantly learning and staying updated with the latest design 
            trends and best practices. I'm eager to contribute my skills to 
            meaningful projects and grow as a designer.
          </p>

          <div className="pt-4">
            <Button asChild>
              <a href="/ritesh_UI_UX_CV.pdf" download="Ritesh_Rathod_Resume.pdf">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
