import React from 'react';
import { ArrowUp, Sparkles, Globe, Phone, Mail, ExternalLink, GraduationCap } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';

interface FooterProps {
  onOpenContact: () => void;
  onOpenParcours: () => void;
}

const SOCIAL_LINKS = [
  { name: 'GitHub (tictos)', url: 'https://github.com/tictos' },
  { name: 'TicHub Plateforme', url: 'https://tichub.gitbuisnessformulaire.tech' },
  { name: 'WhatsApp', url: 'https://wa.me/224625819843' },
];

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenParcours }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 md:px-10 py-14 sm:py-20 border-t border-[#D7E2EA]/10 relative z-20 font-['Kanit'] select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        <FadeIn delay={0} y={20} className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#181a20] border border-[#2d313b] text-[10px] sm:text-xs uppercase tracking-widest text-[#BBCCD7] max-w-[94vw] text-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate sm:whitespace-normal">Objectifs 2027 : Validation L2 &amp; Entreprise Tech</span>
          </div>
        </FadeIn>

        {/* Big CTA */}
        <FadeIn delay={0.1} y={30} className="max-w-3xl mb-6 sm:mb-8">
          <h2 className="hero-heading font-black uppercase tracking-tight leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Construisons ensemble vos prochains projets
          </h2>
          <p className="text-[#D7E2EA]/75 font-light text-xs sm:text-base md:text-lg max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Développeur Mobile &amp; Web alliant rigueur juridique et expertise logicielle (Kotlin, Android, Django, Python, n8n).
          </p>
        </FadeIn>

        {/* Action Button */}
        <FadeIn delay={0.2} y={20} className="mb-10 sm:mb-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <ContactButton onClick={onOpenContact} label="Prendre Contact" />
          <button
            type="button"
            onClick={onOpenParcours}
            className="px-6 py-2.5 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 font-medium uppercase tracking-widest text-[11px] sm:text-xs md:text-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2"
          >
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B600A8]" />
            <span>Mon Parcours &amp; Diplômes</span>
          </button>
        </FadeIn>

        {/* Quick Nav Links */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 py-6 sm:py-8 border-y border-[#D7E2EA]/15 text-xs sm:text-sm font-medium uppercase tracking-wider">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#D7E2EA] hover:text-white transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="text-[#D7E2EA] hover:text-white transition-colors cursor-pointer"
            >
              À Propos
            </button>
            <button
              type="button"
              onClick={onOpenParcours}
              className="text-[#D7E2EA] hover:text-white transition-colors cursor-pointer"
            >
              Parcours
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="text-[#D7E2EA] hover:text-white transition-colors cursor-pointer"
            >
              Compétences
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="text-[#D7E2EA] hover:text-white transition-colors cursor-pointer"
            >
              Projets
            </button>
          </div>

          {/* Socials & Hub */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA]/70 hover:text-white transition-colors text-[11px] sm:text-xs flex items-center gap-1"
              >
                <span>{s.name}</span>
                <ExternalLink className="w-3 h-3 text-[#B600A8]" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 text-[11px] sm:text-xs text-[#D7E2EA]/60 font-light">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B600A8]" />
              <span>&copy; {new Date().getFullYear()} Diallo Mamadou Bobo (tictos)</span>
            </div>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#B600A8]" />
              +224 625 819 843
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#B600A8]" />
              tictos1213@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#BBCCD7]" /> Guinée (Conakry)
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-full bg-[#16181f] border border-[#2d313b] text-[#D7E2EA] hover:bg-[#282b34] hover:text-white transition-all cursor-pointer flex items-center gap-1.5 group"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
