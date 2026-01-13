import { useEffect, useRef } from 'react';

const tools = [
  { name: 'C', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'VS Code', icon: '💻' },
  { name: 'HackerRank', icon: '💚' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'LeetCode', icon: '🧩' },
];

const ToolsSection = () => {
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
    <section id="tools" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="fade-in-section">
          <p className="text-primary font-mono text-sm mb-2">06. Tools</p>
          <h2 className="section-title">Technologies I Use</h2>
          <p className="section-subtitle max-w-2xl">
            Languages, frameworks, and tools I work with regularly
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="fade-in-section card-glass p-4 text-center group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {tool.icon}
              </div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
