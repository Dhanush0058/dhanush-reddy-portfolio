import { useEffect, useRef } from 'react';

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
    <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
  </svg>
);

const JavaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
    <path d="M277.7 206.1c12.7-11.5 24.3-30.8 19.3-51.5-12 11-23.7 13.9-34.9 14.8-19.1 1.7-30.3-6.1-38.3-20.4-7.3-13.1-9.6-32.9-10.8-49.3-2.1-28.7-4.2-56-27.2-74-7.6-5.9-19-12-32.1-12-16 0-33.8 8.6-43.1 15.6 13.7 2.1 28.5 9 39 21.6 17.6 21 16.7 49 15.9 74.2-1.2 38.6-2.5 78.4 29.5 98.7 18 11.4 44 14.2 64.9 1.4-15 4.3-29.2.9-40.3-6.5-12.8-8.5-17.7-22.3-23-37-3.9-10.7-8-22-14.7-32.5-30.5 22.3-31 61.3-31.3 83.1-.1 13 0 29.8 8 43.1 14.9 24.5 44 26 59 26.3 35.8 1.1 55.4-23.2 65.5-44.5 3.3-6.9 18.2-39.2 24.5-51.1zM100.8 412c14.7 10 33 13.4 51.5 13.4 27.6 0 54.9-9.9 76.5-24 16.3-10.6 30.5-22.1 41.5-35.3 11-13 18.9-27.8 23-44 5.3-21 4.5-40 4.2-46.7-18.7 21.6-43.4 35.7-72.2 40-10.2 1.5-30.6 3.7-42.3-3.6-11-7-14.5-19.5-18.4-33-3.1-10.9-6.4-22.4-15.5-31.5-9.3-9.3-24.8-15.8-45-12.2-22.1 4-43.3 15-58.3 31.8-15.2 17.1-25.1 39.5-28.7 65.1-4 28.7 1 54.3 10.3 71.9 6.8 12.8 18 21.2 31.6 24.9 22.6 6.1 47.9-1 62-6.5-14.6-2.3-28.7-8.1-41.2-16.5-8.2-5.5-15-11.9-20.7-19.1-5-6.3-8.8-13.3-11.4-20.6 14.5 21.3 38.3 35 66.8 38zM315.6 429c-51.6 44.5-156.4 56.6-231.2 18.9-8.4-4.2-19.5-10.8-24.6-18.4 25.4 34.3 85.9 44.2 147 43.1 36.3-.7 77.8-8.2 110.8-31 7.2-5 13.6-10.7 19.3-17 11.2-12.4 17.2-27.5 17.7-43.7 1.8-1.5 3.3-3.1 4.6-4.9-10.4 23.3-25.9 41.4-43.6 53z"/>
  </svg>
);

const CIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
    <path d="M329.6 176c-18.4-48-64.8-80-116.8-80-69.6 0-128 58.4-128 128s58.4 128 128 128c52 0 98.4-32 116.8-80 4-10.4 15.2-16.8 26.4-15.2 11.2 1.6 20 10.4 21.6 21.6 1.6 11.2-4.8 22.4-15.2 26.4C300 412.8 244 456 181.6 456c-112 0-202.4-90.4-202.4-202.4S69.6 51.2 181.6 51.2c62.4 0 118.4 43.2 140.8 108.8 3.2 9.6-1.6 20-11.2 23.2-9.6 3.2-20-1.6-23.2-11.2l1.6 4z"/>
  </svg>
);

const skills = [
  {
    name: 'Python',
    level: 90,
    color: 'from-primary to-accent',
    icon: <PythonIcon />
  },
  {
    name: 'Java',
    level: 85,
    color: 'from-secondary to-primary',
    icon: <JavaIcon />
  },
  {
    name: 'C',
    level: 80,
    color: 'from-primary to-secondary',
    icon: <CIcon />
  }
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
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center text-white">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} opacity-80 blur-[8px] group-hover:blur-[12px] transition-all`} />
                <div className="relative z-10">
                  {skill.icon}
                </div>
              </div>
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
