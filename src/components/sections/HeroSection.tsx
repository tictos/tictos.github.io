import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';
import { 
  Github, 
  ExternalLink, 
  Smartphone, 
  GraduationCap, 
  X, 
  Sparkles, 
  FolderGit2, 
  Layers, 
  User, 
  Phone, 
  Mail,
  ArrowRight,
  Code2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenParcours: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenParcours,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenParcours = () => {
    setMobileMenuOpen(false);
    onOpenParcours();
  };

  const handleOpenContact = () => {
    setMobileMenuOpen(false);
    onOpenContact();
  };

  return (
    <section className="min-h-screen min-h-[660px] sm:min-h-[760px] md:min-h-[820px] w-full flex flex-col justify-between overflow-x-clip relative select-none bg-[#0C0C0C] pt-2 pb-6 sm:pb-8 md:pb-10">
      {/* 1. Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="w-full px-4 sm:px-8 md:px-10 pt-4 sm:pt-6 md:pt-8 z-40 flex items-center justify-between gap-4"
      >
        {/* Mobile & Tablet Small Brand Logo */}
        <div className="flex md:hidden items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-[0_0_15px_rgba(182,0,168,0.4)]">
            T
          </div>
          <div>
            <span className="font-['Kanit'] font-black uppercase tracking-wider text-sm sm:text-base text-white block leading-tight">
              tictos
            </span>
            <span className="text-[10px] text-[#D7E2EA]/60 font-light hidden xs:block">
              Diallo M. Bobo
            </span>
          </div>
        </div>

        {/* Desktop & Tablet Wide Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.25rem] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            À Propos
          </button>
          <button
            type="button"
            onClick={onOpenParcours}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.25rem] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Parcours</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#B600A8]/30 border border-[#B600A8]/50 text-white font-semibold">
              L1 / BUT
            </span>
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.25rem] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Compétences
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.25rem] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Projets
          </button>
        </div>

        {/* Desktop TicHub Link */}
        <a
          href="https://tichub.gitbuisnessformulaire.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.25rem] hover:text-[#BBCCD7] transition-colors cursor-pointer items-center gap-1 group whitespace-nowrap shrink-0 ml-auto"
        >
          <span>TicHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#B600A8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Mobile & Tablet Controls: TicHub quick tag + Stylish Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <a
            href="https://tichub.gitbuisnessformulaire.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-[#181a22] border border-[#2d3240] text-[11px] font-semibold uppercase tracking-wider text-[#BBCCD7] flex items-center gap-1.5 hover:border-[#B600A8] transition-colors"
          >
            <span>TicHub</span>
            <ExternalLink className="w-3 h-3 text-[#B600A8]" />
          </a>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="p-2.5 sm:p-3 rounded-2xl bg-[#14161f]/90 border border-[#2c303f] text-[#D7E2EA] hover:text-white hover:border-[#B600A8]/60 backdrop-blur-md transition-all shadow-lg cursor-pointer flex items-center justify-center relative group"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5 items-center">
                <span className="w-5 h-0.5 bg-[#D7E2EA] group-hover:bg-white rounded-full transition-all" />
                <span className="w-3.5 h-0.5 bg-[#B600A8] self-start rounded-full transition-all group-hover:w-5" />
                <span className="w-5 h-0.5 bg-[#D7E2EA] group-hover:bg-white rounded-full transition-all" />
              </div>
            )}
          </button>
        </div>
      </FadeIn>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-black/92 backdrop-blur-xl flex flex-col justify-between p-5 sm:p-8 pt-6 font-['Kanit'] overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white font-black text-sm shadow-[0_0_20px_rgba(182,0,168,0.5)]">
                  T
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-wider text-base text-white leading-none">
                    Diallo M. Bobo
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/60 font-light mt-0.5">
                    tictos &bull; Développeur Mobile &amp; Web
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-[#1c1e26] border border-[#2d3242] text-white hover:bg-[#2a2d3a] transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links Stack */}
            <div className="flex flex-col gap-3 py-6 my-auto max-w-xl mx-auto w-full">
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="w-full p-4 rounded-2xl bg-[#121319] border border-[#222530] text-left hover:border-[#B600A8]/60 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1b1c24] flex items-center justify-center text-[#B600A8]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold uppercase text-base sm:text-lg text-white block">
                      À Propos
                    </span>
                    <span className="text-xs text-[#D7E2EA]/60 font-light">
                      Profil Hybride Droit &amp; Informatique
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#D7E2EA]/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>

              <button
                type="button"
                onClick={handleOpenParcours}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#171120] to-[#121319] border border-[#B600A8]/40 text-left hover:border-[#B600A8] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold uppercase text-base sm:text-lg text-white">
                        Mon Parcours
                      </span>
                      <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-[#B600A8] text-white font-bold uppercase">
                        Diplômes
                      </span>
                    </div>
                    <span className="text-xs text-[#D7E2EA]/60 font-light">
                      L1 Génie Info, 3 ans Droit &amp; Objectif 2027
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#B600A8] group-hover:translate-x-1 transition-all" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="w-full p-4 rounded-2xl bg-[#121319] border border-[#222530] text-left hover:border-[#B600A8]/60 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1b1c24] flex items-center justify-center text-emerald-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold uppercase text-base sm:text-lg text-white block">
                      Compétences &amp; Services
                    </span>
                    <span className="text-xs text-[#D7E2EA]/60 font-light">
                      Android (Kotlin), Django, n8n &amp; Consulting
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#D7E2EA]/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="w-full p-4 rounded-2xl bg-[#121319] border border-[#222530] text-left hover:border-[#B600A8]/60 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1b1c24] flex items-center justify-center text-[#7621B0]">
                    <FolderGit2 className="w-5 h-5 text-[#B600A8]" />
                  </div>
                  <div>
                    <span className="font-semibold uppercase text-base sm:text-lg text-white block">
                      Projets Réalisés
                    </span>
                    <span className="text-xs text-[#D7E2EA]/60 font-light">
                      Mine-Tou (Play Store), Hub d&apos;Apps &amp; Web
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#D7E2EA]/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>

              <a
                href="https://tichub.gitbuisnessformulaire.tech"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full p-4 rounded-2xl bg-[#121319] border border-[#222530] text-left hover:border-[#B600A8]/60 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1b1c24] flex items-center justify-center text-cyan-400">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold uppercase text-base sm:text-lg text-white block">
                      Plateforme TicHub
                    </span>
                    <span className="text-xs text-[#D7E2EA]/60 font-light">
                      7 Applications Mobiles &amp; Outils en ligne
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-[#B600A8]" />
              </a>
            </div>

            {/* Bottom Actions & Contacts */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3 max-w-xl mx-auto w-full">
              <button
                type="button"
                onClick={handleOpenContact}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Me Contacter / Prendre Rendez-vous</span>
              </button>

              <div className="flex items-center justify-around pt-2 text-xs text-[#D7E2EA]/70">
                <a
                  href="https://wa.me/224625819843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-[#B600A8]" />
                  <span>WhatsApp</span>
                </a>
                <span>&bull;</span>
                <a
                  href="mailto:tictos1213@gmail.com"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-[#B600A8]" />
                  <span>Email</span>
                </a>
                <span>&bull;</span>
                <a
                  href="https://github.com/tictos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. UPPER / TOP HERO CONTAINER (Optimized for Mobile, Tablet & Desktop) */}
      <div className="w-full overflow-hidden text-center z-0 px-4 pt-4 sm:pt-6 md:pt-8 lg:pt-10 my-auto sm:my-0">
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col items-center max-w-5xl mx-auto">
            {/* Top Identity & Skill Badges Row (Rich and occupying space on tablet & desktop) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#181a22] border border-[#2c303d] text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-[#BBCCD7] shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span className="truncate">Diallo Mamadou Bobo &bull; Développeur Mobile &amp; Web</span>
              </div>
              
              {/* Tablet & Desktop Extra Highlights (Fills the top space elegantly) */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 sm:py-1.5 rounded-full bg-[#121319] border border-[#B600A8]/30 text-[11px] sm:text-xs text-[#D7E2EA]/80 font-medium uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5 text-[#B600A8]" />
                <span>Kotlin &bull; Compose &bull; Django &bull; n8n</span>
              </div>
            </div>

            {/* Giant Title: Proportionate & bold on mobile, tablet, and desktop (Never cut off) */}
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.2vw] xl:text-[6.5vw] 2xl:text-[5.8vw] max-w-full text-center">
              Hi, i&apos;m tictos
            </h1>
          </div>
        </FadeIn>
      </div>

      {/* 3. MOBILE ONLY (< sm) 3D AVATAR (Centered, in-flow, completely visible) */}
      <div className="flex sm:hidden flex-col items-center justify-center my-2 w-full px-4 z-10">
        <FadeIn delay={0.25} y={20} className="relative flex items-center justify-center w-full max-w-[280px]">
          <div className="relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#B600A8]/20 via-[#7621B0]/15 to-transparent blur-xl rounded-full pointer-events-none" />

            <img
              src="https://github.com/tictos/images_ressources/blob/main/Gemini_Generated_Image_zffhafzffhafzffh-Photoroom.png?raw=true"
              alt="Diallo Mamadou Bobo (tictos) - Développeur Mobile & Web"
              className="w-full h-auto max-h-[36vh] xs:max-h-[40vh] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] select-none pointer-events-none"
              loading="eager"
              draggable={false}
              referrerPolicy="no-referrer"
            />
            
            {/* Badges */}
            <div className="absolute top-2 -left-3 bg-[#121319]/95 border border-[#D7E2EA]/20 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-xl flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#B600A8] shrink-0" />
              <div className="text-left">
                <p className="text-[8px] text-[#D7E2EA]/60 uppercase tracking-widest font-semibold">Play Store</p>
                <p className="text-[10px] font-bold text-white leading-none">1 App en Prod</p>
              </div>
            </div>

            <div className="absolute bottom-2 -right-3 bg-[#121319]/95 border border-[#D7E2EA]/20 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-xl flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-[8px] text-[#D7E2EA]/60 uppercase tracking-widest font-semibold">L1 Génie Info</p>
                <p className="text-[10px] font-bold text-white leading-none">60 ECTS Mention</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 4. TABLET & DESKTOP (sm: and up) 3D AVATAR (Anchored at bottom center with interactive Magnet) */}
      <FadeIn
        delay={0.35}
        y={20}
        className="hidden sm:block absolute left-1/2 -translate-x-1/2 z-10 w-[340px] sm:w-[390px] md:w-[450px] lg:w-[490px] bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={120}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full h-full flex items-end justify-center"
        >
          <div className="relative group flex items-end justify-center">
            <img
              src="https://github.com/tictos/images_ressources/blob/main/Gemini_Generated_Image_zffhafzffhafzffh-Photoroom.png?raw=true"
              alt="Diallo Mamadou Bobo (tictos) - Développeur Mobile & Web"
              className="w-full h-auto max-h-[58vh] sm:max-h-[64vh] md:max-h-[70vh] lg:max-h-[74vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] select-none pointer-events-none"
              loading="eager"
              draggable={false}
              referrerPolicy="no-referrer"
            />
            
            {/* Badges on Tablet & Desktop */}
            <div className="absolute top-1/4 -left-6 sm:-left-8 md:-left-12 bg-[#121319]/95 border border-[#D7E2EA]/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#B600A8] shrink-0" />
              <div className="text-left">
                <p className="text-[10px] text-[#D7E2EA]/60 uppercase tracking-widest font-semibold">Play Store</p>
                <p className="text-xs font-bold text-white leading-none">1 App en Prod</p>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 bg-[#121319]/95 border border-[#D7E2EA]/20 backdrop-blur-md px-3 sm:px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] text-[#D7E2EA]/60 uppercase tracking-widest font-semibold">L1 Génie Info</p>
                <p className="text-xs font-bold text-white leading-none">60 ECTS Mention</p>
              </div>
            </div>
          </div>
        </Magnet>
      </FadeIn>

      {/* 5. Bottom Bar (Responsive across Mobile, Tablet & Desktop) */}
      <div className="w-full px-4 sm:px-8 md:px-10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 sm:gap-4 z-20">
        <FadeIn delay={0.35} y={20} className="w-full sm:w-auto text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[11px] sm:text-xs md:text-sm lg:text-base max-w-[320px] sm:max-w-[280px] md:max-w-[380px]">
              Développement Mobile &amp; Web &bull; Automatisation n8n &bull; Consulting Digital
            </p>
            <a
              href="https://github.com/tictos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1c24] border border-[#2e3240] text-[11px] sm:text-xs text-[#D7E2EA] hover:text-white hover:border-[#B600A8] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span>github.com/tictos</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="shrink-0">
          <ContactButton onClick={onOpenContact} label="Me Contacter" />
        </FadeIn>
      </div>
    </section>
  );
};
