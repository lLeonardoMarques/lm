import React from 'react';
import { MessageCircle, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';

interface HeroProps {
  onOpenScheduleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScheduleModal }) => {
  return (
    <section className="relative overflow-hidden bg-stone-50/60 py-10 lg:py-14 border-b border-neutral-200/80 transition-colors dark:bg-neutral-950 dark:border-neutral-900">
      {/* Background radial atmosphere */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl dark:from-amber-600/15 dark:via-amber-900/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top contextual location label */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-amber-700 dark:text-amber-400 mb-4 text-center">
          <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300">
            <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            Jardim Líder · São Paulo - SP
          </span>
          <span className="text-neutral-400 dark:text-neutral-600">|</span>
          <span className="text-neutral-500 dark:text-neutral-400">Rua Bataiporã, 12</span>
          <span className="text-neutral-400 dark:text-neutral-600">|</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Agenda Aberta 2026</span>
        </div>

        {/* Hero Main Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
            O cenário perfeito para celebrar as suas maiores conquistas.
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Salão amplo, climatizado e moderno para <span className="text-amber-700 dark:text-amber-300 font-semibold">aniversários, casamentos, 15 anos e eventos corporativos</span>. 
            Estrutura completa com total liberdade para o seu buffet.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/5511966150471?text=${encodeURIComponent('Olá! Gostaria de consultar datas e solicitar um orçamento para meu evento no LM Eventos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>

            <button
              onClick={onOpenScheduleModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition-all hover:border-amber-500/60 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>Agendar Visita ao Salão</span>
            </button>

            <a
              href="#simulador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-neutral-200 bg-white/60 px-4 py-3 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 dark:border-neutral-800 dark:bg-transparent dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:border-neutral-700 transition-all"
            >
              <span>Simular Valores</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Quick value props list */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Até 150 convidados</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Ar-condicionado e acústica</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Cozinha de apoio com freezer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Liberdade total de buffet</span>
            </div>
          </div>
        </div>

        {/* Visual Showcase Collage - Symmetrical & Harmonious */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          
          {/* Main Hero Card */}
          <div className="relative md:col-span-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 group min-h-[300px] lg:min-h-[380px] dark:border-neutral-800 dark:bg-neutral-900 shadow-sm">
            <img
              src="/src/assets/images/hero_party_venue_1790608046361.jpg"
              alt="Ambiente sofisticado e iluminado para festas no LM Eventos"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Estrutura Completa</span>
              <h2 className="mt-1 text-lg sm:text-xl font-serif-display font-medium text-white">
                Espaço versátil para realizar seu sonho com conforto e elegância
              </h2>
              <p className="mt-1 text-xs text-neutral-300 max-w-lg hidden sm:block">
                Mesas com toalhas, iluminação cênica de destaque e espaço amplo para pista de dança e buffet.
              </p>
            </div>
          </div>

          {/* Secondary Real Space Photos side stack */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            
            {/* Real Space Photo 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 group min-h-[140px] lg:min-h-[180px] dark:border-neutral-800 dark:bg-neutral-900 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QdKHdOmIi8b58MERX2okUo0WzDh99Yo7UKkAQyyn0BXXU1ZXd-SffTCCAUSzmIhZyrShoAZtk6ofrQiXJ_lM6walnQSDbQ43K9HXBIbU60o39mxff294Ao5ds4ggjquvZnFjo4=s1200"
                alt="Salão decorado L&M Eventos com mesas e cortinados"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-amber-400">Foto Real do Espaço</span>
                <p className="text-xs font-medium text-white">Salão amplo decorado para festas</p>
              </div>
            </div>

            {/* Real Space Photo 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 group min-h-[140px] lg:min-h-[180px] dark:border-neutral-800 dark:bg-neutral-900 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SeU0-QIoXNuWANH4Xd2JDrQkGSBB_z_Xir808C0O9jOnvyTlYhUYPo_e1VhJFPAJicMKmSnoJdSD0NcDucnjzXyGvf1wgDqM0ASoMRluT7kkeNjtwuwvX18u3iNRc19jKhoB4=s1200"
                alt="Pista de dança e área de celebração LM Eventos"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-amber-400">Área de Pista</span>
                <p className="text-xs font-medium text-white">Espaço para DJ, lounge e celebração</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
