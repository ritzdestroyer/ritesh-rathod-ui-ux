import {
  Palette,
  Users,
  Layout,
  Layers,
  GitBranch,
  Smartphone,
  Monitor,
  Figma,
} from "lucide-react";

const skills = [
  { name: "UI Design", icon: Palette },
  { name: "UX Design", icon: Users },
  { name: "Wireframing", icon: Layout },
  { name: "Prototyping", icon: Layers },
  { name: "User Flow Design", icon: GitBranch },
  { name: "Mobile App Design", icon: Smartphone },
  { name: "Web Design", icon: Monitor },
  { name: "Figma", icon: Figma },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Tools and methodologies I use to create beautiful user experiences
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-medium text-foreground">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
