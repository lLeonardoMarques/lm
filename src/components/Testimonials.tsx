import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/eventData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-stone-50/50 border-b border-neutral-200/80 transition-colors dark:bg-neutral-900/30 dark:border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
            Experiências Reais
          </span>
          <h2 className="mt-1 font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
            Quem celebra no LM Eventos recomenda
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Depoimentos de famílias e anfitriões que realizaram momentos memoráveis em nosso salão.
          </p>
        </div>

        {/* Symmetrical 3-Column Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between h-full rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">5.0</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">{rev.author}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400/90 font-medium">
                    <span>{rev.eventType}</span>
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span className="text-neutral-500 text-[11px]">{rev.date}</span>
                  </div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" title="Avaliação Verificada">
                  <CheckCircle className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
