import React from 'react';
import { FadeIn } from '../ui/FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  techs: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    name: 'Développement Mobile Android Natif',
    subtitle: 'Kotlin & Jetpack Compose',
    description:
      'Conception d\'applications mobiles performantes, ergonomiques et réactives sous Android SDK. Maîtrise de l\'architecture MVVM, des Coroutines Kotlin, de StateFlow et de la persistance locale Room SQLite (7 applications conçues, dont Mine-Tou sur le Play Store).',
    techs: ['Kotlin', 'Jetpack Compose', 'Room SQLite', 'MVVM', 'Coroutines / Flow', 'Play Store Deploy'],
  },
  {
    id: '02',
    name: 'Création de Sites & Applications Web',
    subtitle: 'Python, Django & Frontend',
    description:
      'Développement de sites web vitrines, portails interactifs et plateformes dynamiques robustes. Modélisation relationnelle de bases de données, ORM Django, authentification sécurisée, formulaires avancés et logique métier sur mesure.',
    techs: ['Python 3', 'Django Framework', 'Bases de Données Relationnelles', 'Architecture MVC', 'REST APIs', 'Sécurité Web'],
  },
  {
    id: '03',
    name: 'Automatisation de Processus Métier (n8n)',
    subtitle: 'Workflows & Productivité PME',
    description:
      'Aide aux PME et entrepreneurs pour automatiser leurs processus opérationnels et supprimer les tâches manuelles chronophages : synchronisation CRM/ERP, routage de leads, webhooks, notifications intelligentes et pipelines de données personnalisés avec n8n.',
    techs: ['n8n Workflow Automation', 'Webhooks & APIs', 'Intégration CRM / Notion / Airtable', 'Traitement de Données', 'Gain de Temps PME'],
  },
  {
    id: '04',
    name: 'Consulting Digital & Stratégie PME',
    subtitle: 'Audit, Accompagnement & Rigueur Juridique',
    description:
      'Conseil stratégique et technique pour entreprises et porteurs de projet. Audit des besoins numériques, choix des briques technologiques, conformité, modélisation des processus et feuille de route pragmatique pour booster votre croissance.',
    techs: ['Audit Digital PME', 'Cahier des Charges', 'Rigueur Juridique & Synthèse', 'Méthodes Agiles / Scrum', 'Optimisation des Coûts'],
  },
  {
    id: '05',
    name: 'Architecture Logicielle & Intégration API',
    subtitle: 'Clean Architecture, Cloud & SQL',
    description:
      'Structuration de code modulaire et découplée (Domain, Data, Presentation) pour assurer une maintenance aisée et une scalabilité maximale. Consommation asynchrone d\'APIs REST (Retrofit 2), bases PostgreSQL, Firebase Firestore et scripts Linux.',
    techs: ['Clean Architecture', 'Retrofit 2', 'PostgreSQL / SQLite', 'Firebase Firestore', 'Linux & Bash', 'Git / GitHub'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 w-full relative z-0 select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Subtitle */}
        <FadeIn delay={0} y={20} className="mb-2">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0C0C0C]/70 bg-[#0C0C0C]/5 px-3 sm:px-4 py-1.5 rounded-full border border-[#0C0C0C]/10 text-center block">
            Services &bull; Développement, Automatisation &amp; Conseil
          </span>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.05} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-[clamp(2.4rem,8vw,120px)]">
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.06}
              y={30}
              className="w-full border-b border-[#0C0C0C]/15 py-6 sm:py-9 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-6 md:gap-10 group transition-colors duration-300 hover:bg-[#0C0C0C]/[0.02] px-1 sm:px-4 rounded-2xl"
            >
              {/* Number Left */}
              <div className="shrink-0 w-full md:w-[160px] lg:w-[200px]">
                <span className="font-black text-[#0C0C0C] leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl block font-['Kanit'] tracking-tighter transition-transform duration-300 group-hover:translate-x-2">
                  {service.id}
                </span>
              </div>

              {/* Name + Description Right */}
              <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[#0C0C0C] font-semibold uppercase text-base sm:text-xl md:text-2xl tracking-wide font-['Kanit']">
                    {service.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0C0C0C] text-white">
                    {service.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#0C0C0C]/75 font-normal leading-relaxed">
                  {service.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-[#0C0C0C]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
