import React, { useEffect, useRef, useState } from 'react';
import { 
  Github, 
  Sparkles, 
  ArrowUpRight,
  Play,
  ExternalLink
} from 'lucide-react';
import { PROJECTS_DATA, type ProjectData } from './ProjectsSection';

interface MarqueeSectionProps {
  onSelectProjectById?: (id: string) => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ onSelectProjectById }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const appsList = PROJECTS_DATA;
  const row1Apps = [...appsList, ...appsList];
  const row2Apps = [...appsList.slice().reverse(), ...appsList.slice().reverse()];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.28;
            setOffset(calculatedOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 pb-12 overflow-hidden select-none"
    >
      {/* Section Subtitle */}
      <div className="max-w-6xl mx-auto px-6 mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#B600A8]" />
          <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
            7 Applications Disponibles sur TicHub &bull; Google Play &amp; GitHub
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://tichub.gitbuisnessformulaire.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-[#B600A8] hover:text-[#e052d5] flex items-center gap-1 transition-colors"
          >
            <span>Accéder à TicHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/tictos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white flex items-center gap-1 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub (tictos)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B600A8]" />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-7">
        {/* Row 1 - Moves Right */}
        <div
          className="flex gap-4 sm:gap-6 w-max transition-transform ease-out duration-75"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1Apps.map((app, idx) => (
            <div
              key={`app-r1-${idx}`}
              onClick={() => onSelectProjectById && onSelectProjectById(app.id)}
              className="w-[320px] sm:w-[420px] md:w-[480px] h-[250px] sm:h-[280px] shrink-0 rounded-[28px] overflow-hidden bg-[#13141a] border border-[#232631] hover:border-[#B600A8] transition-all duration-300 group flex flex-col justify-between p-4 sm:p-5 relative cursor-pointer shadow-2xl"
            >
              {/* Background preview image */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-black/80">
                <img
                  src={app.imageUrl}
                  alt={app.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-black/30" />
              </div>

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#181a24]/90 border border-[#303546] text-[#D7E2EA] backdrop-blur-md">
                  {app.category}
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  {app.statusBadge}
                </span>
              </div>

              {/* Card Body */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-wide group-hover:text-[#BBCCD7] transition-colors leading-tight">
                    {app.name}
                  </h4>
                  <span className="text-[10px] text-white/80 font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10">
                    {app.version}
                  </span>
                </div>
                <p className="text-xs text-[#D7E2EA]/90 font-light line-clamp-2 leading-relaxed mb-3 drop-shadow-md">
                  {app.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.slice(0, 4).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#0C0C0C]/80 border border-white/20 text-white backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div
          className="flex gap-4 sm:gap-6 w-max transition-transform ease-out duration-75"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Apps.map((app, idx) => (
            <div
              key={`app-r2-${idx}`}
              onClick={() => onSelectProjectById && onSelectProjectById(app.id)}
              className="w-[320px] sm:w-[420px] md:w-[480px] h-[250px] sm:h-[280px] shrink-0 rounded-[28px] overflow-hidden bg-[#13141a] border border-[#232631] hover:border-[#7621B0] transition-all duration-300 group flex flex-col justify-between p-4 sm:p-5 relative cursor-pointer shadow-2xl"
            >
              {/* Background preview image */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-black/80">
                <img
                  src={app.imageUrl}
                  alt={app.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-black/30" />
              </div>

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#181a24]/90 border border-[#303546] text-[#D7E2EA] backdrop-blur-md">
                  {app.category}
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  {app.statusBadge}
                </span>
              </div>

              {/* Card Body */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-wide group-hover:text-[#BBCCD7] transition-colors leading-tight">
                    {app.name}
                  </h4>
                  <span className="text-[10px] text-white/80 font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10">
                    {app.version}
                  </span>
                </div>
                <p className="text-xs text-[#D7E2EA]/90 font-light line-clamp-2 leading-relaxed mb-3 drop-shadow-md">
                  {app.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.slice(0, 4).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#0C0C0C]/80 border border-white/20 text-white backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
