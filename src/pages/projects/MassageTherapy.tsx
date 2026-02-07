import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MassageTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Massage Therapy App
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">UI Design</Badge>
            <Badge variant="secondary">App Design</Badge>
            <Badge variant="secondary">Healthcare</Badge>
          </div>

          {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A calming and professional app design for a massage therapy
              service. The design features soothing earth tones, easy service
              booking, and clear information architecture to help users find
              and schedule the therapy they need.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Problem Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Booking massage therapy services often involves phone calls or
              complicated websites. Users need a simple, visually appealing
              platform that reflects the relaxing nature of the service while
              making appointment scheduling effortless.
            </p>
          </section>

          {/* Design Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Design Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The design process started with understanding the target
              audience—people seeking relaxation and wellness services. I
              chose warm, earthy colors to evoke calmness and used clear
              typography for easy readability. The UI was kept minimal to
              reduce cognitive load.
            </p>
          </section>

          {/* Figma Embed */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Design Preview
            </h2>
            <div className="aspect-video bg-secondary/50 rounded-xl overflow-hidden border border-border">
              <iframe
                className="w-full h-full"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F50RdWc3UvfNoV3M5QYB5lz%2FMassage-therapy%3Ft%3DhIYvFMpOvlH3HI7l-1"
                allowFullScreen
              />
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Key Features
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Calming earth-tone color palette
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Service listings with detailed descriptions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Easy appointment booking system
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Location and contact information
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Clean, professional visual design
              </li>
            </ul>
          </section>

          {/* Tools Used */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Tools Used
            </h2>
            <Badge className="bg-primary text-primary-foreground">Figma</Badge>
          </section>

          {/* CTA */}
          <div className="flex gap-4">
            <Button asChild>
              <a
                href="https://www.figma.com/design/50RdWc3UvfNoV3M5QYB5lz/Massage-therapy?t=hIYvFMpOvlH3HI7l-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                View Design
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MassageTherapy;
