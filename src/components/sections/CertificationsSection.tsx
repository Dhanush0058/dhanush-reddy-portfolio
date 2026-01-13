import { useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Database Management System',
    issuer: 'NPTEL',
    date: 'September 2025',
    description: 'Comprehensive course covering DBMS concepts, SQL, and database design principles.',
  },
  {
    title: 'Java Intermediate',
    issuer: 'Apna College',
    date: 'Completed',
    description: 'In-depth Java programming covering OOP concepts, collections, and advanced topics.',
  },
];

const CertificationsSection = () => {
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
    <section id="certifications" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="fade-in-section">
          <p className="text-primary font-mono text-sm mb-2">05. Certifications</p>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle max-w-2xl">
            Certifications that validate my knowledge and commitment to learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="fade-in-section card-glass p-6 md:p-8 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <Award className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
                    {cert.title}
                  </h3>
                  <p className="text-secondary font-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
