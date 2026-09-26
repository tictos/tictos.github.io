/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection, PROJECTS_DATA, type ProjectData } from './components/sections/ProjectsSection';
import { ContactModal } from './components/modals/ContactModal';
import { ParcoursModal } from './components/modals/ParcoursModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { Footer } from './components/ui/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isParcoursOpen, setIsParcoursOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [prefilledSubject, setPrefilledSubject] = useState<string | undefined>(undefined);

  const handleOpenContact = (subject?: string) => {
    setPrefilledSubject(subject);
    setIsContactOpen(true);
  };

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit'] min-h-screen w-full relative"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => handleOpenContact()}
        onOpenParcours={() => setIsParcoursOpen(true)}
      />

      {/* 2. MARQUEE APPS SHOWCASE SECTION */}
      <MarqueeSection
        onSelectProjectById={(id) => {
          const match = PROJECTS_DATA.find((p) => p.id === id || p.id.includes(id) || id.includes(p.id));
          if (match) {
            setSelectedProject(match);
          }
        }}
      />

      {/* 3. ABOUT SECTION */}
      <AboutSection
        onOpenContact={() => handleOpenContact()}
        onOpenParcours={() => setIsParcoursOpen(true)}
      />

      {/* 4. SERVICES / SKILLS SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* FOOTER */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onOpenParcours={() => setIsParcoursOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledSubject={prefilledSubject}
      />

      <ParcoursModal
        isOpen={isParcoursOpen}
        onClose={() => setIsParcoursOpen(false)}
        onOpenContact={() => handleOpenContact('Partenariat / Lancement Entreprise Tech')}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => handleOpenContact(`Projet : ${selectedProject?.name}`)}
      />
    </div>
  );
}
