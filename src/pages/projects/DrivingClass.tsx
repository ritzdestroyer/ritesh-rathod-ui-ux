import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DrivingClass = () => {
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
            Driving Class App
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">UI Design</Badge>
            <Badge variant="secondary">App Design</Badge>
            <Badge variant="secondary">Education</Badge>
          </div>

          {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              An educational app design for driving classes featuring course
              scheduling, lesson tracking, and instructor information. The
              design helps learners manage their driving education journey
              with ease.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Problem Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Learning to drive can be overwhelming, and managing class
              schedules, tracking progress, and communicating with instructors
              through traditional methods is often disorganized. This app
              design provides a centralized platform for all driving class
              needs.
            </p>
          </section>

          {/* Design Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Design Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Research focused on understanding the needs of both learners
              and driving instructors. The design prioritizes clear
              information display, easy date selection for scheduling, and
              visual progress indicators to keep learners motivated.
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
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FVw12d62F5NpLSH4r8Z0TdY%2FDriving-class%3Ft%3DhIYvFMpOvlH3HI7l-1"
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
                Interactive course scheduling with calendar
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Progress tracking and milestones
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Instructor profiles and contact information
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Clear visual instructions and guidance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Clean, professional interface design
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
                href="https://www.figma.com/design/Vw12d62F5NpLSH4r8Z0TdY/Driving-class?t=hIYvFMpOvlH3HI7l-1"
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

export default DrivingClass;
