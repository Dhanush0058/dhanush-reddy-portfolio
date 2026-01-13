import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'Vidya Jyothi Institute of Technology',
    degree: 'B.Tech Information Technology',
    year: '2024 - 2028 (Current)',
    grade: 'CGPA: 9.33',
    status: 'current',
  },
  {
    institution: 'Sri Vaishnavi Junior College',
    degree: 'Intermediate (MPC)',
    year: '2022 - 2024',
    grade: '96%',
    status: 'completed',
  },
  {
    institution: 'Sri Niketan High School',
    degree: 'Secondary Education',
    year: 'Batch of 2022',
    grade: 'GPA: 9.3',
    status: 'completed',
  },
];

const EducationSection = () => {
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
    <section id="education" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="fade-in-section">
          <p className="text-primary font-mono text-sm mb-2">02. Education</p>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle max-w-2xl">
            My educational path that shaped me into who I am today
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="fade-in-section relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="md:ml-20 card-glass p-6 md:p-8">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background hidden md:flex items-center justify-center">
                    {edu.status === 'current' && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        {edu.status === 'current' && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-secondary font-medium mb-2">{edu.degree}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
