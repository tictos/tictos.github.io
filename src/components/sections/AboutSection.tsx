import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';
import { ArrowRight, GraduationCap, Code2, Award, BookOpen, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenParcours: () => void;
}

const STATS_DATA = [
  {
    icon: Code2,
    value: '7 Apps',
    label: 'Écosystème Android',
    sub: 'Kotlin, Compose & Room SQLite',
    color: 'text-[#B600A8]',
  },
  {
    icon: Award,
    value: 'Play Store',
    label: 'En Production Réelle',
    sub: 'Mine-Tou & Tests Ouverts',
    color: 'text-[#7621B0]',
  },
  {
    icon: GraduationCap,
    value: '60 ECTS',
    label: 'L1 Génie Info (2025-2026)',
    sub: '7.64 S1 / 8.50 S2 avec Mention',
    color: 'text-emerald-400',
  },
  {
    icon: BookOpen,
    value: '4+ Ans',
    label: 'Autodidacte par Nature',
    sub: 'Android, Python, n8n & Conseil',
    color: 'text-[#BBCCD7]',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact, onOpenParcours }) => {
  const bioText =
    "Alliant la rigueur analytique du droit à l'expertise technique, je développe des applications mobiles Android performantes (Kotlin / Compose), des plateformes web sur mesure (Django / Python) et j'accompagne les PME dans l'automatisation de leurs processus métiers avec n8n et le consulting stratégique.";

  return (
    <section
      id="about"
      className="min-h-screen w-full relative bg-[#0C0C0C] px-4 sm:px-8 md:px-10 py-16 sm:py-24 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* 4 Decorative 3D images - visible on larger screens so they never obstruct mobile text */}
      {/* 1. Top-Left: Image 1 (3D Character with App Orbit) */}
      <FadeIn
        delay={0.1}
        x={-60}
        y={0}
        duration={0.9}
        className="hidden lg:block absolute top-[6%] left-[1.5%] pointer-events-none z-10 w-[180px] xl:w-[220px] opacity-80"
      >
        <img
          src="https://github.com/tictos/images_ressources/blob/main/gemini-2.5-flash-image_3D_stylized_character_of_a_young_African_male_software_developer_friendly_smile_-0-Photoroom.png?raw=true"
          alt="3D Developer Network Orbit"
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          loading="lazy"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 2. Bottom-Left */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute bottom-[5%] left-[2%] pointer-events-none z-10 w-[110px] sm:w-[140px] opacity-70"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Floating Asset"
          className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          loading="lazy"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 3. Top-Right: Image 3 (3D Character with Kotlin/Python phone) */}
      <FadeIn
        delay={0.15}
        x={60}
        y={0}
        duration={0.9}
        className="hidden lg:block absolute top-[6%] right-[1.5%] pointer-events-none z-10 w-[190px] xl:w-[230px] opacity-80"
      >
        <img
          src="https://github.com/tictos/images_ressources/blob/main/Gemini_Generated_Image_28mfvl28mfvl28mf-Photoroom.png?raw=true"
          alt="3D Developer Kotlin & Python Smartphone"
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          loading="lazy"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 4. Bottom-Right */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute bottom-[5%] right-[2%] pointer-events-none z-10 w-[120px] sm:w-[150px] opacity-70"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Geometric Cluster"
          className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          loading="lazy"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Content Center Stack */}
      <div className="flex flex-col items-center justify-center text-center z-20 max-w-4xl px-2 sm:px-4 w-full">
        {/* Subtitle Badge */}
        <FadeIn delay={0} y={20} className="mb-2 sm:mb-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-[#181a22] border border-[#2c303d] text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#BBCCD7]">
            <Sparkles className="w-3 h-3 text-[#B600A8]" />
            <span>Profil Hybride &bull; Droit &amp; Informatique</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.05} y={40} className="w-full">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.4rem,8vw,120px)]">
            About me
          </h2>
        </FadeIn>

        {/* Spacing gap */}
        <div className="h-4 sm:h-6 md:h-8" />

        {/* Scroll-animated Character-by-Character text */}
        <div className="w-full max-w-2xl px-2 sm:px-4">
          <AnimatedText text={bioText} />
        </div>

        {/* Key Metrics / Highlights Grid */}
        <FadeIn delay={0.15} y={30} className="w-full max-w-4xl mt-8 sm:mt-12 mb-8 sm:mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-left">
            {STATS_DATA.map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#121319]/90 border border-[#232631] rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col justify-between backdrop-blur-sm hover:border-[#D7E2EA]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className={`text-xl sm:text-2xl md:text-3xl font-black font-['Kanit'] ${stat.color}`}>
                      {stat.value}
                    </span>
                    <IconComp className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color} shrink-0`} />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-white leading-tight">
                      {stat.label}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#D7E2EA]/60 font-light mt-0.5 sm:mt-1 leading-snug">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.2} y={20} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <ContactButton onClick={onOpenContact} label="Me Contacter" />
          <button
            type="button"
            onClick={onOpenParcours}
            className="px-6 py-2.5 sm:px-9 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 font-medium uppercase tracking-widest text-[11px] sm:text-xs md:text-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2"
          >
            <span>Voir Mon Parcours</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};
