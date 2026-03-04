import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jorianom/", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/jorianom", icon: FaGithub },
  { label: "WhatsApp", href: "https://wa.me/573205802499", icon: FaWhatsapp },
  { label: "Email", href: "mailto:jjrianom@unal.edu.co", icon: FaEnvelope },
];

export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/5 py-10">
      <div className="flex flex-col items-center gap-5">
        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/5
                         text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/10
                         transition-all"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <span>&copy; {new Date().getFullYear()} John Riaño · Bogotá, Colombia</span>
        </div>
      </div>
    </footer>
  );
};