import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Box, Cpu, Eye, ExternalLink, Sparkles, Github, Smartphone, Play } from 'lucide-react';
import type { ProjectData } from '../sections/ProjectsSection';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#0F1014] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[44px] p-5 sm:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.95)] z-10 overflow-hidden font-['Kanit'] max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#1c1e24] text-[#D7E2EA] hover:bg-[#282b34] hover:text-white transition-colors cursor-pointer z-20"
            aria-label="Fermer la modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 pr-10">
            <span className="font-black text-3xl sm:text-4xl text-[#D7E2EA] leading-none">
              {project.number}
            </span>
            <div className="h-6 w-[1px] bg-white/20" />
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#BBCCD7] uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {project.statusBadge}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1e2029] text-[#BBCCD7] border border-[#2d313d]">
              {project.version}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              {project.name}
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left: Main Active Preview (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D7E2EA]/20 bg-black/60 aspect-[16/10] flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-3 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-white border border-white/15">
                  Bannière de présentation &bull; TicHub
                </div>
              </div>

              {/* Quick links bar */}
              <div className="p-3.5 rounded-2xl bg-[#14161d] border border-[#232631] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#B600A8]" />
                  <span className="text-[#D7E2EA]">Dépôt &amp; Package Android</span>
                </div>
                <div className="flex items-center gap-2">
                  {project.optInLink && (
                    <a
                      href={project.optInLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/50 flex items-center gap-1 font-medium transition-colors"
                    >
                      <Play className="w-3 h-3 fill-emerald-300" />
                      <span>Google Play Opt-In</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-[#1f222d] border border-[#303546] text-white hover:border-[#B600A8] flex items-center gap-1 font-medium transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#B600A8]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Project specs & breakdown (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                    À Propos &amp; Objectifs
                  </h4>
                  <p className="text-sm sm:text-base text-[#D7E2EA]/90 font-light leading-relaxed">
                    {project.details}
                  </p>
                </div>

                {/* Tech Stack & Software */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-2.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#B600A8]" />
                    Technologies &amp; Librairies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-[#1a1c24] border border-[#2d313b] text-xs font-medium text-[#BBCCD7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical highlights */}
                <div className="bg-[#14161d] rounded-2xl p-4 border border-[#252833] space-y-2.5 text-xs text-[#D7E2EA]/80">
                  <div className="flex items-center justify-between border-b border-[#252833] pb-2">
                    <span className="flex items-center gap-1.5 text-[#D7E2EA]/60">
                      <Layers className="w-3.5 h-3.5" /> Architecture
                    </span>
                    <span className="font-semibold text-white">MVVM / Clean Architecture</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#252833] pb-2">
                    <span className="flex items-center gap-1.5 text-[#D7E2EA]/60">
                      <Box className="w-3.5 h-3.5" /> Persistance
                    </span>
                    <span className="font-semibold text-white">Room SQLite (100% Local / Offline)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#D7E2EA]/60">
                      <Eye className="w-3.5 h-3.5" /> Programmation
                    </span>
                    <span className="font-semibold text-white">Kotlin Coroutines &amp; StateFlow</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn-gradient py-3.5 px-6 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm flex-1 flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>Dépôt GitHub</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="border border-[#D7E2EA]/40 hover:bg-[#D7E2EA]/10 py-3.5 px-5 rounded-full text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Échanger sur l&apos;app</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
