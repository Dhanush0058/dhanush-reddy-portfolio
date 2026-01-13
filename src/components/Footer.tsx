import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Dhanush0058',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhanush-reddy-50551b309/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:dhanushr672@gmail.com',
    icon: Mail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text mb-2">Dhanush Reddy</p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Built With */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Dhanush Reddy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
