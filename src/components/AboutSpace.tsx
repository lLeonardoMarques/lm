import React from 'react';
import { Sparkles, CheckCircle2, Shield, HeartHandshake, MapPin } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';

export const AboutSpace: React.FC = () => {
  return (
    <section id="sobre" className="py-12 lg:py-16 bg-white border-b border-neutral-200/80 transition-colors dark:bg-neutral-950 dark:border-neutral-900 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Story & Value proposition (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <Sparkles className="h-4 w-4" />
              <span>O Espaço LM Eventos</span>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white leading-tight">
              Um ambiente limpo, aconchegante e pensado para celebrar a vida.
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              No <strong className="text-amber-700 dark:text-amber-400 font-semibold">{VENUE_INFO.legalName}</strong>, cada detalhe é preparado para que você e seus convidados tenham uma experiência memorável. Localizado no bairro Jardim Líder em São Paulo, nosso salão oferece toda a estrutura necessária para que sua festa aconteça com total conforto, segurança e estilo.
            </p>

            <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Diferente de espaços que limitam suas escolhas, no LM Eventos você tem total liberdade para trazer o buffet dos seus sonhos, decoradores de sua preferência, bebidas e atrações musicais, contando sempre com nosso apoio para que a montagem seja perfeita.
            </p>

            {/* Symmetrical 2x2 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900/60">
                <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">Liberdade Total</h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Traga seu buffet, churrasqueiro ou decoração sem taxas extras.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900/60">
                <Shield className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">Privacidade & Conforto</h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Salão exclusivo para você e seus convidados, 100% climatizado.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900/60">
                <HeartHandshake className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">Atendimento Próximo</h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Acompanhamento transparente antes, durante e após o evento.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 dark:border-neutral-800 dark:bg-neutral-900/60">
                <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">Localização Tranquila</h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Rua calma com facilidade de parada e desembarque no Jardim Líder.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Symmetrical Image Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md group aspect-[16/11] dark:border-neutral-800 dark:bg-neutral-900">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TVk3NSNhkn8fW5He3Ij8O35ncRBsZ92lJ1kaLUzTrapMokZ1d-Cc2npMYu2t2ia8-KOg6mRdwVckaribd1yGBLfw7vS5aPtrXaYWnxbkCgxFJMieitf_VWwiCnk8wNCXvv9adiq1tbgNmX=s1200"
                alt="Fachada e recepção do salão L&M Eventos"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Rua Bataiporã, 12 - Jardim Líder</span>
                <p className="text-sm font-serif-display text-white mt-0.5">
                  Fachada ampla e entrada preparada para receber seus convidados com carinho
                </p>
              </div>
            </div>

            {/* Symmetrical Stats Pair */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 text-center dark:border-neutral-800 dark:bg-neutral-900/60">
                <span className="text-xl sm:text-2xl font-bold font-serif-display text-amber-700 dark:text-amber-400 tabular-nums">150</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 block mt-0.5">Capacidade Máxima de Pessoas</span>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 text-center dark:border-neutral-800 dark:bg-neutral-900/60">
                <span className="text-xl sm:text-2xl font-bold font-serif-display text-amber-700 dark:text-amber-400">100%</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 block mt-0.5">Climatizado & Confortável</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
