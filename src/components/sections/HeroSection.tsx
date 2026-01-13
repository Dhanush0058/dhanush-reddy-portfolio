import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroData, setHeroData] = useState({
    greeting: "Hello, I'm",
    name: "Dhanush Reddy",
    roles: [
      'B.Tech IT Student',
      'Coder',
      'AI/ML Learner',
      'Problem Solver',
    ]
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const docRef = doc(db, "content", "hero");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setHeroData(docSnap.data() as any);
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  const roles = heroData.roles;

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in-up stagger-1">
          {heroData.greeting}
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up stagger-2">
          <span className="gradient-text glow-text">{heroData.name}</span>
          <span className="inline-block ml-2 animate-float">👋</span>
        </h1>

        {/* Typing Effect */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-6 opacity-0 animate-fade-in-up stagger-3">
          <span className="text-xl md:text-3xl text-muted-foreground font-light">
            {displayText}
          </span>
          <span className="typing-cursor" />
        </div>


        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up stagger-5">
          <a
            href="https://github.com/Dhanush0058"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 glow-green"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhanush-reddy-50551b309/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-secondary/50 hover:bg-card transition-all duration-300 glow-blue"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:dhanushr672@gmail.com"
            className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 glow-green"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up stagger-5">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground transition-colors"
          >
            Know More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
