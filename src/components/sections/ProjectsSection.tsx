import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import groceriesShopImage from "@/assets/groceries-shop.png";
import massageTherapyImage from "@/assets/massage-therapy.png";
import drivingClassImage from "@/assets/driving-class.png";

const projects = [
  {
    id: "groceries-shop",
    title: "Groceries Shop Webpage",
    description:
      "A clean and intuitive grocery shopping website design with product categories, easy navigation, and a modern interface.",
    image: groceriesShopImage,
    link: "/projects/groceries-shop",
  },
  {
    id: "massage-therapy",
    title: "Massage Therapy App",
    description:
      "A calming and professional app design for a massage therapy service, featuring service listings and booking functionality.",
    image: massageTherapyImage,
    link: "/projects/massage-therapy",
  },
  {
    id: "driving-class",
    title: "Driving Class App",
    description:
      "An educational app design for driving classes with course scheduling, instructor information, and progress tracking.",
    image: drivingClassImage,
    link: "/projects/driving-class",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent UI/UX design projects created with Figma
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm">
                  View Case Study
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
