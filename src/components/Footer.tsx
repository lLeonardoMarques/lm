import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';

interface FooterProps {
  onOpenScheduleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenScheduleModal }) => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 text-neutral-600 transition-colors dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <a 
              href="#" 
              className="flex items-center gap-2 text-xl font-bold tracking-wider text-neutral-900 dark:text-neutral-100"
            >
              <span className="font-serif-display text-2xl text-amber-600 dark:text-amber-400 font-normal">LM</span>
              <span className="tracking-widest uppercase text-sm font-semibold text-neutral-800 dark:text-neutral-200">Eventos</span>
            </a>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              O espaço ideal em São Paulo para comemorar aniversários, festas de 15 anos, casamentos, reuniões de família e eventos corporativos.
            </p>

            <div className="pt-1 text-xs space-y-1.5 text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{VENUE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{VENUE_INFO.formattedPhone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-200">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#sobre" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">O Espaço</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Galeria de Fotos</a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Tipos de Festas</a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Estrutura & Comodidades</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Simulador de Valores</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Como Chegar</a>
              </li>
            </ul>
          </div>

          {/* Direct Actions (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-200">
              Atendimento & Visitas
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Agende uma visita para conhecer pessoalmente o salão no Jardim Líder.
            </p>

            <div className="flex flex-col gap-2 pt-0.5">
              <button
                onClick={onOpenScheduleModal}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 hover:border-amber-500/50 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors"
              >
                <Calendar className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                <span>Agendar Visita ao Salão</span>
              </button>

              <a
                href={VENUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-xs"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp: {VENUE_INFO.formattedPhone}</span>
              </a>

              <a
                href={VENUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 text-xs text-neutral-600 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400 transition-colors"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-neutral-200 dark:border-neutral-900 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} {VENUE_INFO.legalName}. Todos os direitos reservados.</p>
          <p>
            Rua Bataiporã, 12 - Jardim Líder, São Paulo - SP
          </p>
        </div>

      </div>
    </footer>
  );
};
