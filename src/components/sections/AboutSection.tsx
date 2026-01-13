import { useEffect, useRef } from 'react';
import { Code2, Brain, Shield, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Passionate Coder',
    description: 'Writing clean, efficient code in Python, Java, and C',
  },
  {
    icon: Brain,
    title: 'AI/ML Explorer',
    description: 'Currently diving deep into artificial intelligence',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Hands-on experience protecting digital assets',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Strong foundation in DSA using Java',
  },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="fade-in-section">
          <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="fade-in-section card-glass p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">B.Tech Information Technology</span> student
                at <span className="text-primary">Vidya Jyothi Institute of Technology</span>,
                currently in my 2nd year. My journey in tech started with a curiosity about how
                things work, which quickly evolved into a passion for building them.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground font-medium">Python, Java, and C</span>,
                with a strong foundation in Data Structures and Algorithms.
                I love tackling complex problems and turning ideas into reality through code.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm expanding my horizons by learning{' '}
                <span className="text-secondary">Artificial Intelligence and Machine Learning</span>,
                while gaining practical experience as a{' '}
                <span className="text-primary">Cybersecurity Intern at Supraja Technologies</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always eager to learn, collaborate, and take on new challenges that push
                my boundaries and help me grow as a developer.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section >
  );
};

export default AboutSection;
