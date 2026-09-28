import React from 'react';
import { UsersRound, AirVent, UtensilsCrossed, Sparkles, Armchair, ShieldCheck } from 'lucide-react';

export const VenueAmenities: React.FC = () => {
  const amenitiesList = [
    {
      title: "Capacidade Ideal",
      subtitle: "Até 150 convidados",
      description: "Salão amplo e arejado sem colunas obstrutivas, garantindo visibilidade e conforto para mesas, pista de dança e buffet.",
      icon: <UsersRound className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Climatização Eficiente",
      subtitle: "100% Ar-Condicionado",
      description: "Sistema de climatização e ventilação projetado para manter temperatura sempre agradável em qualquer época do ano.",
      icon: <AirVent className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Cozinha de Apoio Completa",
      subtitle: "Freezer, Fogão & Bancadas",
      description: "Infraestrutura pronta para receber buffet, churrasqueiro ou equipe própria com pias em inox e área de manuseio higiênica.",
      icon: <UtensilsCrossed className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Iluminação Cênica & Pista",
      subtitle: "Destaque para fotos e DJ",
      description: "Pontos de energia dedicados, estrutura de luzes decorativas e espaço central para pista de dança vibrante.",
      icon: <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Mesas e Cadeiras Inclusas",
      subtitle: "Mobiliário confortável",
      description: "Mobiliário resistente e moderno incluso na locação, permitindo compor o layout ideal para o seu estilo de celebração.",
      icon: <Armchair className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Banheiros & Acessibilidade",
      subtitle: "Higiene e comodidade",
      description: "Sanitários individuais limpos, higienizados e adaptados para receber todos os seus convidados com total dignidade.",
      icon: <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    }
  ];

  return (
    <section id="estrutura" className="py-12 lg:py-16 bg-stone-50/50 border-b border-neutral-200/80 transition-colors dark:bg-neutral-950 dark:border-neutral-900 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
            Conforto & Infraestrutura
          </span>
          <h2 className="mt-1 font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
            Tudo o que sua festa precisa em um só lugar
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Estrutura simétrica e pensada nos mínimos detalhes para garantir a tranquilidade dos anfitriões e o conforto dos convidados.
          </p>
        </div>

        {/* Perfectly Symmetrical 3x2 Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenitiesList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between h-full rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 transition-all hover:border-amber-500/50 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700 dark:hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-serif-display font-medium text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-medium text-amber-700 dark:text-amber-400">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] text-neutral-500 dark:text-neutral-400">
                Incluso na locação do salão LM Eventos
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
