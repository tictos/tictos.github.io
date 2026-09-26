import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tierName: string) => void;
}

interface PriceTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  timeline: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const TIERS: PriceTier[] = [
  {
    id: 'asset',
    name: '3D Asset & Modeling',
    price: '$2,500',
    timeline: '1-2 Weeks',
    description: 'Bespoke high-poly 3D models with production topology, 4K PBR textures, and studio lighting setup.',
    features: [
      'Custom 3D Object / Hero Product Modeling',
      'Cinema 4D / Blender Source Files',
      '4K PBR Materials (Diffuse, Roughness, Normal)',
      '3 High-Resolution Studio Angle Renders',
      'GLB / USDZ Export for AR / Web 3D',
      '2 Iteration Rounds Included',
    ],
  },
  {
    id: 'motion',
    name: 'Commercial Motion & Renders',
    badge: 'MOST REQUESTED',
    popular: true,
    price: '$5,800',
    timeline: '2-3 Weeks',
    description: 'Dynamic 3D animations, particle simulations, and cinematic teaser clips ready for launch campaigns.',
    features: [
      '15-30s Dynamic 4K 60fps 3D Animation',
      'Procedural Shading & Cinematic Lighting',
      'Custom Sound Design & Foley Sync',
      '6 Still Render Keyframes in 4K',
      'Storyboarding & Creative Direction',
      'Social Formats (16:9, 9:16, 1:1)',
      '3 Iteration Rounds Included',
    ],
  },
  {
    id: 'full-brand',
    name: 'Full Spatial & Brand Identity',
    price: '$11,500',
    timeline: '3-5 Weeks',
    description: 'End-to-end 3D visual language, 3D design system, animated web hero experiences, and brand guidelines.',
    features: [
      'Comprehensive 3D Visual Identity System',
      'Multi-Scene Motion Graphics Suite (3 Clips)',
      'Interactive WebGL / Three.js Asset Optimization',
      'Full Brand Guidelines & 3D Art Direction Manual',
      'Source Files in Blender / Octane / After Effects',
      'Direct Slack Channel with Jack',
      'Unlimited Revisions within Scope',
    ],
  },
];

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectTier,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#111215] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] z-10 overflow-hidden font-['Kanit'] max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#1c1e24] text-[#D7E2EA] hover:bg-[#282b34] hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#BBCCD7] text-xs font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                <span>Transparent Collaboration</span>
              </div>
              <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl tracking-tight leading-none mb-3">
                Project Pricing
              </h2>
              <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base">
                Tailored 3D creative packages with fixed scopes, high precision, and direct communication.
              </p>
            </div>

            {/* Tier Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-[28px] p-6 flex flex-col justify-between relative transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-b from-[#1c1426] to-[#121319] border-2 border-[#B600A8] shadow-[0_0_35px_rgba(182,0,168,0.25)]'
                      : 'bg-[#16181f] border border-[#2d313b] hover:border-[#4b5161]'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B600A8] to-[#BE4C00] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-1">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-light">
                        starting / {tier.timeline}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {tier.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85">
                          <Check className="w-4 h-4 text-[#B600A8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectTier(tier.name);
                      onClose();
                    }}
                    className={`w-full py-3 rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      tier.popular
                        ? 'contact-btn-gradient text-white'
                        : 'border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10'
                    }`}
                  >
                    <span>Request Tier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-8 text-center text-xs text-[#D7E2EA]/50 font-light">
              Need custom volume work, retainer contracts, or game asset pipelines? Contact Jack directly for a bespoke quote.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
