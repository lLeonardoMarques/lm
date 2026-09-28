import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Friendly prompt balloon */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 rounded-xl bg-white border border-neutral-200 px-3.5 py-2 shadow-lg animate-fade-in text-neutral-800 dark:bg-neutral-900 dark:border-neutral-700/80 dark:text-neutral-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-white"
            aria-label="Fechar aviso"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="text-xs">
            <span className="font-semibold block text-neutral-900 dark:text-white">Dúvidas sobre datas ou valores?</span>
            <span className="text-neutral-500 dark:text-neutral-400 text-[11px]">Atendimento rápido no WhatsApp!</span>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={VENUE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com LM Eventos"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-950/20 transition-all hover:scale-105 hover:bg-emerald-500 active:scale-95 focus-visible:outline-2 focus-visible:outline-emerald-400"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
        </span>
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};
