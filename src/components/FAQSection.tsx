import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, VENUE_INFO } from '../data/eventData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 lg:py-16 bg-stone-50/50 border-b border-neutral-200/80 transition-colors dark:bg-neutral-950 dark:border-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <HelpCircle className="h-4 w-4" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="mt-1 font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Tudo o que você precisa saber sobre a locação do salão LM Eventos.
          </p>
        </div>

        {/* Harmonious Accordion */}
        <div className="mt-8 space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white pr-3">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Ficou alguma dúvida específica sobre o seu evento?
          </p>
          <a
            href={`https://wa.me/5511966150471?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre a locação do LM Eventos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-2 rounded-xl bg-white border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 hover:border-amber-500/50 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-amber-500/50 dark:hover:text-white transition-colors shadow-xs"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Falar com atendimento: {VENUE_INFO.formattedPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
