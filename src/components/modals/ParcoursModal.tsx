import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  GraduationCap, 
  Scale, 
  Code2, 
  Award, 
  PlaneTakeoff, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  FileText
} from 'lucide-react';

interface ParcoursModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

const TIMELINE_STEPS = [
  {
    year: '2027 (Objectif)',
    title: 'Validation de la 2ème Année & Lancement de mon Entreprise Tech',
    badge: 'Études L2/BUT2 & Entrepreneuriat',
    desc: 'Double ambition claire et stratégique : valider ma deuxième année en Informatique (Licence 2 / BUT2) tout en lançant officiellement ma propre boîte / entreprise tech dédiée à la création d\'applications mobiles innovantes, d\'architectures web robustes et de solutions logicielles à fort impact.',
    icon: Rocket,
    highlight: true,
  },
  {
    year: '2025 - 2026',
    title: 'Licence 1 Génie Informatique (Validée avec Mention)',
    badge: '60 ECTS • Guinée',
    desc: 'Validation de la première année de Génie Informatique avec d\'excellentes moyennes académiques : 7,64/10 au Semestre 1 et 8,50/10 au Semestre 2. Solides compétences en algorithmique, C/Java, structures de données, bases de données et mathématiques appliquées.',
    icon: GraduationCap,
  },
  {
    year: '2022 - 2025 (Continu)',
    title: 'Autodidacte & Spécialisation Mobile / Web',
    badge: 'Autodidacte par Nature & Certifications',
    desc: 'Apprentissage passionné et autonome continu : maîtrise approfondie de Kotlin, Jetpack Compose, Python, Django et SQLite/PostgreSQL. Conception de projets concrets et publication d\'applications sur le Google Play Store.',
    icon: Code2,
  },
  {
    year: '2018 - 2021',
    title: 'Études en Droit & Sciences Juridiques',
    badge: '3 Ans d\'Université',
    desc: 'Acquisition d\'une rigueur logique et méthodique stricte, d\'un esprit de synthèse affûté, de capacités d\'argumentation et d\'une excellente aisance rédactionnelle indispensables à l\'ingénierie logicielle.',
    icon: Scale,
  },
  {
    year: '2018',
    title: 'Baccalauréat Sciences Sociales',
    badge: 'Diplôme d\'État',
    desc: 'Formation secondaire axée sur les sciences humaines, la sociologie, la logique formelle et la communication.',
    icon: Award,
  },
];

export const ParcoursModal: React.FC<ParcoursModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#111216] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] z-10 overflow-hidden font-['Kanit'] max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#1c1e24] text-[#D7E2EA] hover:bg-[#282b34] hover:text-white transition-colors cursor-pointer"
              aria-label="Fermer la modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#BBCCD7] text-xs font-semibold uppercase tracking-widest mb-3">
                  <GraduationCap className="w-4 h-4 text-[#B600A8]" />
                  <span>Double Compétence &bull; Parcours &amp; Objectifs</span>
                </div>
                <h2 className="hero-heading font-black uppercase text-3xl sm:text-4xl tracking-tight leading-tight">
                  De la Rigueur Juridique à la Passion du Code
                </h2>
                <p className="text-[#D7E2EA]/75 font-light text-sm sm:text-base mt-2 max-w-2xl">
                  Découvrez le parcours structuré de Diallo Mamadou Bobo (tictos), combinant 3 ans de formation juridique et une solide maîtrise du développement informatique.
                </p>
              </div>

              <div className="w-24 sm:w-28 shrink-0 hidden sm:flex items-center justify-center">
                <img
                  src="https://github.com/tictos/images_ressources/blob/main/gemini-2.5-flash-image_3D_stylized_character_of_a_young_African_male_software_developer_friendly_smile_-0-Photoroom.png?raw=true"
                  alt="3D Developer Avatar"
                  className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#D7E2EA]/20">
              {TIMELINE_STEPS.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <div key={idx} className="relative group">
                    {/* Bullet icon */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center -translate-x-1/2 shadow-md ${
                        step.highlight
                          ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white ring-4 ring-[#B600A8]/20'
                          : 'bg-[#1b1c24] border border-[#D7E2EA]/30 text-[#D7E2EA]'
                      }`}
                    >
                      <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                        step.highlight
                          ? 'bg-gradient-to-br from-[#1a1324] to-[#121319] border-[#B600A8]/60 shadow-[0_0_25px_rgba(182,0,168,0.2)]'
                          : 'bg-[#15171e] border-[#252833] hover:border-[#3a3f50]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-[#B600A8] uppercase tracking-wider">
                          {step.year}
                        </span>
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#0C0C0C] text-[#BBCCD7] border border-[#2b2f3d]">
                          {step.badge}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-[#D7E2EA]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-[#D7E2EA]/70">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#B600A8]" />
                  +224 625 819 843
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                  tictos1213@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="contact-btn-gradient w-full sm:w-auto px-7 py-3 rounded-full text-white font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Prendre Contact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
