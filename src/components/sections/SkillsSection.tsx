import { useEffect, useRef } from 'react';

const skills = [
  {
    name: 'Python',
    level: 90,
    color: 'from-primary to-accent',
  },
  {
    name: 'Java',
    level: 85,
    color: 'from-secondary to-primary',
  },
  {
    name: 'C',
    level: 80,
    color: 'from-primary to-secondary',
  },
  {
    name: 'Data Structures & Algorithms',
    level: 85,
    color: 'from-accent to-primary',
  },
  {
    name: 'Problem Solving',
    level: 90,
    color: 'from-secondary to-accent',
  },
];

const SkillsSection = () => {
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
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="fade-in-section">
          <p className="text-primary font-mono text-sm mb-2">03. Skills</p>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle max-w-2xl">
            Technologies and skills I've developed through learning and practice
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="fade-in-section card-glass p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} opacity-80 mb-4 group-hover:opacity-100 transition-opacity blur-[2px] group-hover:blur-0`} />
              <h3 className="text-foreground font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 fade-in-section">
          {[
            { label: 'Languages', value: '3+' },
            { label: 'Problems Solved', value: '100+' },
            { label: 'Certifications', value: '2+' },
            { label: 'Learning Streak', value: 'Daily' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-glass p-6 text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
