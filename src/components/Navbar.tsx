import React, { useState } from 'react';
import { MessageCircle, Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenScheduleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScheduleModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/90 bg-white/95 backdrop-blur-md transition-colors dark:border-neutral-800/80 dark:bg-neutral-950/95">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl font-bold tracking-wider text-neutral-900 transition-colors hover:text-amber-600 dark:text-neutral-100 dark:hover:text-amber-400"
          aria-label="LM Eventos início"
        >
          <span className="font-serif-display text-2xl tracking-normal text-amber-600 dark:text-amber-400 font-normal">LM</span>
          <span className="tracking-widest uppercase text-sm font-semibold text-neutral-800 dark:text-neutral-200">Eventos</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <a href="#sobre" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">Espaço</a>
          <a href="#galeria" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">Fotos</a>
          <a href="#eventos" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">Tipos de Festa</a>
          <a href="#estrutura" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">Estrutura</a>
          <a href="#simulador" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">Simulador</a>
          <a href="#localizacao" className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">Localização</a>
        </nav>

        {/* Zone 3: Actions + Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100/80 text-neutral-700 transition-all hover:border-amber-500/50 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:bg-neutral-800"
            title={theme === 'dark' ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
            aria-label={theme === 'dark' ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-neutral-700" />
            )}
          </button>

          <button
            onClick={onOpenScheduleModal}
            className="rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 transition-all hover:border-amber-500/50 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            Agendar Visita
          </button>
          
          <a
            href={VENUE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            <MessageCircle className="h-4 w-4" />
            <span>(11) 96615-0471</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            aria-label="Alternar tema claro e escuro"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white px-4 py-5 md:hidden dark:border-neutral-800 dark:bg-neutral-950">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-amber-400"
            >
              O Espaço
            </a>
            <a 
              href="#galeria" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-amber-400"
            >
              Galeria de Fotos
            </a>
            <a 
              href="#eventos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-amber-400"
            >
              Tipos de Festa & Eventos
            </a>
            <a 
              href="#estrutura" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-amber-400"
            >
              Estrutura & Comodidades
            </a>
            <a 
              href="#simulador" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-amber-400"
            >
              Simulador de Orçamento
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-amber-400"
            >
              Localização & Mapa
            </a>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScheduleModal();
                }}
                className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-center text-xs font-semibold text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
              >
                Agendar Visita ao Salão
              </button>
              <a
                href={VENUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-center text-xs font-semibold text-white hover:bg-emerald-500"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: (11) 96615-0471</span>
              </a>
              <a
                href="tel:011966150471"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-center text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Ligar: {VENUE_INFO.formattedPhone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
