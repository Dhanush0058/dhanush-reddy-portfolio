import { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
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
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="fade-in-section">
          <p className="text-primary font-mono text-sm mb-2">04. Experience</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle max-w-2xl">
            Professional experience that's shaping my career
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="fade-in-section card-glass p-8 md:p-10 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      Cybersecurity Intern
                    </h3>
                    <p className="text-xl text-secondary font-medium">
                      Supraja Technologies
                    </p>
                  </div>
                  <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    Current
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    India
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Present
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Working as a Cybersecurity Intern, gaining hands-on experience in 
                    protecting digital assets and understanding security protocols. 
                    Learning about vulnerability assessment, security best practices, 
                    and threat analysis.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Cybersecurity', 'Security Analysis', 'Network Security', 'Learning'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
