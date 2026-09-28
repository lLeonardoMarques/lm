import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle, Sparkles, Camera } from 'lucide-react';
import { GALLERY_ITEMS, VENUE_INFO } from '../data/eventData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (idx !== -1) setActiveLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [activeLightboxIndex]);

  const prevPhoto = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  }, [activeLightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, nextPhoto, prevPhoto]);

  return (
    <section id="galeria" className="py-12 lg:py-16 bg-stone-50/50 border-b border-neutral-200/80 transition-colors dark:bg-neutral-950 dark:border-neutral-900 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <Camera className="h-4 w-4" />
              <span>Ambientes & Estrutura</span>
            </div>
            <h2 className="mt-1 font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
              Galeria do Espaço LM Eventos
            </h2>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-xl">
              Confira os detalhes reais do salão, decorações já realizadas, iluminação e a estrutura para o seu evento.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-200/70 dark:bg-neutral-900 rounded-xl border border-neutral-300 dark:border-neutral-800 shrink-0">
            {[
              { id: 'todos', label: 'Todas as Fotos' },
              { id: 'salao', label: 'Salão Principal' },
              { id: 'decoracao', label: 'Pista & Decoração' },
              { id: 'buffet', label: 'Buffet & Cozinha' },
              { id: 'fachada', label: 'Entrada & Fachada' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Symmetrical 3 Columns */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-amber-500/50 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-500/40 dark:hover:shadow-xl dark:hover:shadow-black/40"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Real location tag */}
              {item.isRealLocationPhoto && (
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-amber-400 border border-amber-500/30">
                  <Sparkles className="h-3 w-3" />
                  <span>Foto Real do Espaço</span>
                </div>
              )}

              {/* Hover overlay button */}
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Caption */}
              <div className="p-3.5 bg-white border-t border-neutral-100 dark:bg-neutral-900/95 dark:border-neutral-800">
                <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors dark:text-white dark:group-hover:text-amber-400">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Symmetrical Bottom banner for scheduling visit */}
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
          <div>
            <h4 className="text-base sm:text-lg font-serif-display text-neutral-900 dark:text-white">Gostaria de conhecer o salão de perto?</h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
              Agende uma visita sem compromisso na Rua Bataiporã, 12 - Jardim Líder (São Paulo).
            </p>
          </div>
          <a
            href={`https://wa.me/5511966150471?text=${encodeURIComponent('Olá! Vi as fotos do espaço LM Eventos e gostaria de agendar uma visita presencial para conhecer o salão.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 dark:bg-amber-500 px-5 py-2.5 text-xs font-semibold text-white dark:text-neutral-950 hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors shrink-0 shadow-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Agendar Visita pelo WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <span className="text-xs text-neutral-400 tabular-nums">
              {activeLightboxIndex + 1} de {GALLERY_ITEMS.length}
            </span>
            <button
              onClick={closeLightbox}
              className="rounded-lg bg-neutral-800/80 p-2 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
              aria-label="Fechar galeria"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 z-50 rounded-full bg-neutral-900/80 p-2.5 text-white hover:bg-amber-500 hover:text-neutral-950 transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 z-50 rounded-full bg-neutral-900/80 p-2.5 text-white hover:bg-amber-500 hover:text-neutral-950 transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Lightbox Content */}
          <div 
            className="max-h-[85vh] max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-900 max-h-[70vh]">
              <img
                src={GALLERY_ITEMS[activeLightboxIndex].imageUrl}
                alt={GALLERY_ITEMS[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-3 text-center max-w-xl">
              <h3 className="text-base font-serif-display text-white">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h3>
              <p className="mt-0.5 text-xs text-neutral-400">
                {GALLERY_ITEMS[activeLightboxIndex].description}
              </p>
              <div className="mt-2.5">
                <a
                  href={`https://wa.me/5511966150471?text=${encodeURIComponent(`Olá! Vi a foto "${GALLERY_ITEMS[activeLightboxIndex].title}" no site do LM Eventos e gostaria de mais detalhes para o meu evento.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Consultar disponibilidade para este formato</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
