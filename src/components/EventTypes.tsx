import React from 'react';
import { Cake, Heart, Briefcase, Users, Check, ArrowRight } from 'lucide-react';
import { EVENT_TYPES } from '../data/eventData';

interface EventTypesProps {
  onSelectEventType: (typeId: string) => void;
}

export const EventTypes: React.FC<EventTypesProps> = ({ onSelectEventType }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cake':
        return <Cake className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
      case 'Heart':
        return <Heart className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
      case 'Users':
      default:
        return <Users className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="eventos" className="py-12 lg:py-16 bg-white border-b border-neutral-200/80 transition-colors dark:bg-neutral-900/40 dark:border-neutral-900 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
            Versatilidade & Celebração
          </span>
          <h2 className="mt-1 font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
            Perfeito para qualquer tipo de comemoração
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            O salão do LM Eventos adapta-se perfeitamente às necessidades e ao estilo da sua celebração.
          </p>
        </div>

        {/* Symmetrical 2x2 Grid with Equal Heights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {EVENT_TYPES.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between h-full rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6 transition-all hover:border-amber-500/50 hover:bg-white hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:bg-neutral-900 dark:hover:shadow-xl dark:hover:shadow-black/30"
            >
              <div>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 shrink-0 shadow-sm">
                    {getIcon(event.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif-display font-medium text-neutral-900 group-hover:text-amber-700 transition-colors dark:text-white dark:group-hover:text-amber-300">
                      {event.title}
                    </h3>
                    <p className="text-xs text-amber-700/90 dark:text-amber-400/90 font-medium">
                      {event.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-1.5 border-t border-neutral-200/80 pt-3.5 dark:border-neutral-800/80">
                  {event.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <Check className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="mt-5 pt-3.5 border-t border-neutral-200/80 dark:border-neutral-800/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectEventType(event.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
                >
                  <span>Simular orçamento para {event.title}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
