import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { Github, ExternalLink, Smartphone, CheckCircle, Play, ShieldAlert, Sparkles } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  statusBadge: string;
  version: string;
  summary: string;
  details: string;
  githubUrl: string;
  optInLink?: string;
  imageUrl: string;
  tags: string[];
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'project-minetou',
    number: '01',
    name: 'Mine-Tou',
    category: 'Accessibilité & Social',
    statusBadge: 'Production • Play Store',
    version: 'v1.0.0',
    summary:
      'Application d\'assistance aux personnes illettrées leur permettant de passer des appels de façon 100% autonome grâce à un calpin visuel basé sur des photos pré-enregistrées.',
    details:
      'Mine-Tou transforme le carnet d\'adresses traditionnel en un calpin électronique visuel où chaque contact est associé à une photo explicite. En un seul clic sur l\'image, l\'appel est déclenché. Développée en Kotlin avec Jetpack Compose, architecture MVVM, persistance Room SQLite locale et gestion sécurisée des permissions d\'appels.',
    githubUrl: 'https://github.com/tictos/Mine-Tou/',
    optInLink: 'https://play.google.com/apps/testing/com.tictechdigital.minetou',
    imageUrl:
      'https://github.com/tictos/Mine-Tou/blob/main/asset/modify_the_existing_presentation_banner_data_image_image_2_to_include_the_app.png?raw=true',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room SQLite', 'Accessibilité', 'Android SDK'],
  },
  {
    id: 'project-postboy',
    number: '02',
    name: 'PostBoy (APIFlow)',
    category: 'Outils Dev & Networking',
    statusBadge: 'Phase de Test Active',
    version: 'v1.0.0',
    summary:
      'Client API REST mobile puissant et élégant pour tester, déboguer, inspecter les en-têtes et organiser des requêtes HTTP directement depuis son smartphone (alternative mobile à Postman & Insomnia).',
    details:
      'Conçu selon les principes de la Clean Architecture. PostBoy supporte toutes les méthodes HTTP (GET, POST, PUT, DELETE, PATCH), l\'injection dynamique de headers/tokens Bearer, le formatage JSON syntaxique et la sérialisation asynchrone performante via Retrofit 2, OkHttp et Coroutines Kotlin.',
    githubUrl: 'https://github.com/tictos/APIFlow/',
    optInLink: 'https://play.google.com/apps/testing/com.tictechdigital.postboy',
    imageUrl:
      'https://github.com/tictos/APIFlow/blob/main/asset/screen.png?raw=true',
    tags: ['Kotlin', 'Retrofit 2', 'Clean Architecture', 'Coroutines', 'REST API', 'JSON Inspector'],
  },
  {
    id: 'project-manguys',
    number: '03',
    name: 'Manguys (Otakulist)',
    category: 'Divertissement & Suivi',
    statusBadge: 'Phase de Test Active',
    version: 'v1.0.0',
    summary:
      'Application Android intuitive dédiée aux passionnés de mangas, d\'animés, séries TV, films et comics pour suivre l\'avancement de leurs lectures et visionnages avec stockage 100% local.',
    details:
      'Manguys (Otakulist) offre une interface moderne et personnalisable pour répertorier des chapitres/épisodes, noter ses œuvres et catégoriser ses listes (En cours, Terminé, À voir) sans dépendance cloud ni latence, garantissant une confidentialité totale.',
    githubUrl: 'https://github.com/tictos/Manguys-2/',
    optInLink: 'https://play.google.com/apps/testing/com.tictechdigital.manguys',
    imageUrl:
      'https://github.com/tictos/Manguys-2/blob/main/docs/screenshots/banner.png?raw=true',
    tags: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Offline First', 'UI/UX', 'StateFlow'],
  },
  {
    id: 'project-bedoupro',
    number: '04',
    name: 'Bedou Pro',
    category: 'Fintech & Gestion Commerciale',
    statusBadge: 'Phase de Test Active',
    version: 'v1.0.1',
    summary:
      'Solution de gestion commerciale, comptable et d\'importation open source (Apache 2.0) spécialement conçue pour les commerçants et importateurs d\'Afrique de l\'Ouest (Guinée, Sénégal, Côte d\'Ivoire, Mali).',
    details:
      'Bedou Pro intègre la gestion des stocks en multidevises (GNF, XOF, EUR, USD), le suivi des containers et des expéditions maritimes/aériennes, la facturation hors-ligne et l\'édition de bilans journaliers optimisés pour les contextes réseau d\'Afrique de l\'Ouest.',
    githubUrl: 'https://github.com/tictos/BedouPro/',
    optInLink: 'https://play.google.com/apps/testing/com.tictechdigital.bedoupro',
    imageUrl:
      'https://github.com/tictos/BedouPro/blob/main/screenshots/banner.png?raw=true',
    tags: ['Kotlin', 'Gestion Commerciale', 'Multi-Devises', 'Afrique de l\'Ouest', 'Open Source', 'SQLite'],
  },
  {
    id: 'project-cambeflow',
    number: '05',
    name: 'CambeFlow',
    category: 'Finance & Marchés',
    statusBadge: 'Phase de Test Active',
    version: 'v1.0.2',
    summary:
      'Convertisseur de devises en temps réel et analyse des tendances des marchés financiers avec graphiques interactifs et mode hors-ligne.',
    details:
      'CambeFlow permet de suivre les taux de change mondiaux et régionaux en direct, de convertir instantanément plusieurs devises en simultané et de consulter l\'historique des fluctuations grâce à un moteur de requêtes asynchrone ultra-léger.',
    githubUrl: 'https://github.com/tictos/CambeFlow',
    optInLink: 'https://play.google.com/apps/testing/com.tictechdigital.cambeflow',
    imageUrl:
      'https://github.com/tictos/CambeFlow/blob/main/assets/banner.png?raw=true',
    tags: ['Kotlin', 'Finance API', 'Devises', 'Flow', 'Jetpack Compose', 'Graphiques'],
  },
  {
    id: 'project-asciiart',
    number: '06',
    name: 'AsciiArt',
    category: 'Outils Dev & Créativité',
    statusBadge: 'Phase de Test Active',
    version: 'v1.0.3',
    summary:
      'Convertisseur d\'images et de texte en ASCII Art haute fidélité avec export de code source multi-langages (CLI, terminaux) et partage HD.',
    details:
      'Application en mode sombre natif permettant de transformer n\'importe quelle photo en matrice de caractères ASCII avec réglage du contraste, de la densité et de la résolution. Offre des exports directs en code source (Python, C, Bash, HTML) pour les développeurs et bannières de terminaux.',
    githubUrl: 'https://github.com/tictos/AsciiArt',
    optInLink: 'https://play.google.com/apps/testing/com.tictechdigital.asciiart',
    imageUrl:
      'https://github.com/tictos/AsciiArt/blob/main/docs/screenshots/hero_banner.png?raw=true',
    tags: ['Kotlin', 'Traitement d\'Image', 'ASCII Art', 'Export Code CLI', 'Dark UI', 'Compose'],
  },
  {
    id: 'project-pomofocus',
    number: '07',
    name: 'PomoFocus',
    category: 'Productivité & Focus',
    statusBadge: 'Phase de Test Active',
    version: 'v1.0.0',
    summary:
      'Application de productivité basée sur la méthode Pomodoro avec sablier fluide animé en temps réel, ambiances sonores génératives et statistiques approfondies.',
    details:
      'PomoFocus combine un design ergonomique minimaliste, un sablier vectoriel synchronisé à la seconde, des sessions d\'intervalles personnalisées (Travail, Pause courte, Pause longue) et un suivi de la régularité pour maximiser la concentration des étudiants et développeurs.',
    githubUrl: 'https://github.com/tictos/PomoFocus',
    optInLink: 'https://play.google.com/apps/testing/com.tictechdigital.pomofocus',
    imageUrl:
      'https://github.com/tictos/PomoFocus/blob/main/docs/screenshots/hero_banner.png?raw=true',
    tags: ['Kotlin', 'Pomodoro', 'Sablier Animé', 'Ambiances Sonores', 'Room SQLite', 'Statistiques'],
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[620px] flex items-start justify-center sticky top-20 sm:top-24 md:top-28 w-full select-none"
      style={{
        top: `calc(4.5rem + ${index * 22}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full rounded-[28px] sm:rounded-[44px] md:rounded-[60px] border border-[#D7E2EA]/40 sm:border-2 sm:border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_30px_100px_rgba(0,0,0,0.95)] max-w-6xl mx-auto overflow-hidden"
      >
        {/* Top Row: Number, Category, Project Name, Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            <span className="font-black text-[#D7E2EA] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none font-['Kanit'] tracking-tighter shrink-0">
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[9px] sm:text-[11px] font-bold tracking-widest text-[#B600A8] uppercase">
                  {project.category}
                </span>
                <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  {project.statusBadge}
                </span>
                <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-[#1b1d26] text-[#BBCCD7] border border-[#2d3242]">
                  {project.version}
                </span>
              </div>
              <h3 className="text-[#D7E2EA] font-semibold uppercase text-lg sm:text-2xl md:text-3xl tracking-wide font-['Kanit'] leading-tight mt-0.5">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
            {project.optInLink && (
              <a
                href={project.optInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 text-[11px] sm:text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                title="Tester sur Google Play"
              >
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-emerald-300 text-emerald-300" />
                <span>Play Store</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors"
              title="Voir sur GitHub"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <LiveProjectButton onClick={() => onSelectProject(project)} label="Détails" />
          </div>
        </div>

        {/* Bottom Row: 2-Column Presentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-6">
          {/* Left Column (5 cols) - Presentation Summary & Techs */}
          <div className="md:col-span-5 flex flex-col justify-between gap-3 sm:gap-4 bg-[#121319] border border-[#232631] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] p-4 sm:p-6 md:p-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#B600A8] block mb-1.5 sm:mb-2">
                Description de l&apos;Application
              </span>
              <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/90 font-light leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]/60 block mb-2">
                Technologies &amp; Architecture
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg bg-[#1a1c24] border border-[#2e3240] text-[#BBCCD7]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-t border-white/10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:text-[#B600A8] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {project.optInLink && (
                <a
                  href={project.optInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Play className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                  <span>Opt-in Testing</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column (7 cols) - Real Image Banner */}
          <div
            onClick={() => onSelectProject(project)}
            className="md:col-span-7 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden border border-[#D7E2EA]/20 cursor-pointer group relative min-h-[180px] sm:min-h-[280px] md:min-h-[340px] bg-black/80 flex items-center justify-center"
          >
            <img
              src={project.imageUrl}
              alt={`${project.name} Banner`}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-black/85 backdrop-blur-md text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest border border-white/20 text-white shadow-2xl">
                Ouvrir la Fiche Technique
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181a22] border border-[#2c303d] text-xs font-semibold uppercase tracking-widest text-[#BBCCD7] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Applications du Hub (tichub.gitbuisnessformulaire.tech)</span>
          </div>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.8rem,10vw,140px)] font-['Kanit']">
            Projets
          </h2>
          <p className="text-[#D7E2EA]/70 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light">
            7 applications Android natives conçues avec rigueur et passion (Kotlin, Compose, Room, MVVM, Clean Architecture).
          </p>
        </FadeIn>

        {/* Sticky-Stacking Project Cards */}
        <div className="flex flex-col gap-12 sm:gap-16 pb-12">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
