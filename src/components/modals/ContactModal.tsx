import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, Mail, Phone, MessageSquare, Clock, AlertCircle, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSubject?: string;
}

const SUBJECT_OPTIONS = [
  'Automatisation n8n & Processus PME',
  'Consulting & Audit Digital PME',
  'Projet Application Mobile Android (Kotlin)',
  'Création de Site / Application Web (Django)',
  'Partenariat / Lancement Entreprise Tech',
  'Validation L2 / Collaboration Académique',
  'Autre Collaboration Technique',
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledSubject,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(
    prefilledSubject || SUBJECT_OPTIONS[0]
  );
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/tictos1213@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfolio tictos] ${selectedSubject} - De ${name}`,
          _replyto: email,
          _captcha: 'false',
          _template: 'table',
          sujet: selectedSubject,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setIsSuccess(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#B600A8', '#7621B0', '#BE4C00', '#BBCCD7'],
          });
        } catch {
          // ignore fallback
        }
      } else {
        throw new Error(data.message || "Erreur lors de l'envoi");
      }
    } catch (err) {
      // Fallback: If network fails or is blocked by adblockers, propose mailto fallback
      setErrorMessage(
        "Impossible d'envoyer directement via le serveur. Vous pouvez utiliser le lien direct par email ci-dessous."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`[Portfolio tictos] ${selectedSubject}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\nSujet: ${selectedSubject}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:tictos1213@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour Diallo, j'ai vu votre portfolio (tictos) et je souhaite échanger à propos de : ${selectedSubject}`
    );
    window.open(`https://wa.me/224625672712?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

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
            className="relative w-full max-w-2xl bg-[#111215] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] z-10 overflow-hidden font-['Kanit']"
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#1c1e24] text-[#D7E2EA] hover:bg-[#282b34] hover:text-white transition-colors cursor-pointer"
              aria-label="Fermer la modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#B600A8] to-[#BE4C00] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(182,0,168,0.5)]">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="hero-heading font-black uppercase text-3xl sm:text-4xl tracking-tight mb-3">
                  Message Transmis !
                </h3>
                <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg max-w-md mx-auto mb-8">
                  Merci, <span className="font-semibold text-white">{name}</span>. Diallo prendra connaissance de votre message et vous répondra très rapidement.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="contact-btn-gradient px-8 py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#BBCCD7] text-xs font-semibold uppercase tracking-widest mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                    <span>Contact Direct &bull; Diallo Mamadou Bobo</span>
                  </div>
                  <h3 className="hero-heading font-black uppercase text-3xl sm:text-4xl tracking-tight leading-tight mb-2">
                    Prendre Contact
                  </h3>
                  <p className="text-[#D7E2EA]/70 font-light text-xs sm:text-sm">
                    Pour une proposition de formation en France (BUT2/L2), un projet mobile Android, une collaboration Django ou un échange technique.
                  </p>
                </div>

                {/* Quick WhatsApp / Direct Call banner */}
                <div className="mb-5 p-3.5 rounded-2xl bg-[#181a24] border border-[#2c303f] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 text-xs text-[#D7E2EA]">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">+224 625 67 27 12</p>
                      <p className="text-[11px] text-[#D7E2EA]/60">Disponible sur WhatsApp &amp; Appel</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium mb-1.5">
                        Votre Nom / Organisation *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Responsable des admissions / Recruteur"
                        className="w-full px-4 py-3 rounded-2xl bg-[#1a1c22] border border-[#2d313b] text-white placeholder-[#646973] focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium mb-1.5">
                        Votre Adresse Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contact@organisation.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#1a1c22] border border-[#2d313b] text-white placeholder-[#646973] focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium mb-1.5">
                      Objet de l&apos;échange
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SUBJECT_OPTIONS.map((sub) => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setSelectedSubject(sub)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                            selectedSubject === sub
                              ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md'
                              : 'bg-[#1a1c22] text-[#D7E2EA]/70 border border-[#2d313b] hover:border-[#4b5161]'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium mb-1.5">
                      Votre Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décrivez votre message, les prérequis, les technologies ou les détails de la proposition..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#1a1c22] border border-[#2d313b] text-white placeholder-[#646973] focus:outline-none focus:border-[#B600A8] transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Error banner if any */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleOpenMailto}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-white font-medium text-xs transition-colors cursor-pointer self-start"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Envoyer directement via votre application Mail</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Trust metrics */}
                  <div className="flex flex-wrap items-center justify-between text-xs text-[#D7E2EA]/60 pt-1 pb-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B600A8]" />
                      Réponse garantie &lt; 24h
                    </span>
                    <button
                      type="button"
                      onClick={handleOpenMailto}
                      className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                      <span>tictos1213@gmail.com</span>
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full contact-btn-gradient py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer le Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
