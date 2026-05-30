import { useEffect, useRef } from 'react';
import { Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'SnapClass - Making Attendance Faster Using AI',
    type: 'Major Project',
    description: 'An AI-powered application designed to streamline and automate the attendance tracking process using facial recognition and machine learning models.',
    link: 'https://github.com/Dhanush0058/SnapClass-Making-Attendance-Faster-Using-AI',
    tags: ['AI', 'Machine Learning', 'Computer Vision', 'Python']
  },
  {
    title: 'Text Summarizer',
    type: 'Minor Project',
    description: 'A tool that leverages Natural Language Processing (NLP) to condense long pieces of text into concise and meaningful summaries.',
    link: 'https://github.com/Dhanush0058/Text-Summarizer',
    tags: ['NLP', 'Python', 'Machine Learning']
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="fade-in-section">
          <p className="text-primary font-mono text-sm mb-2">04. Projects</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl">
            Some things I've built through learning and practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in-section card-glass p-8 relative flex flex-col h-full group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <p className="text-primary font-mono text-xs mb-2">{project.type}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map((tag) => (
                  <li key={tag} className="text-xs font-mono text-secondary px-2 py-1 rounded-md bg-secondary/10">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
