import React, { useState } from 'react';
import { MapPin, Navigation, MessageCircle, Copy, Check, ExternalLink, Car, Clock } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(VENUE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const wazeUrl = `https://waze.com/ul?ll=${VENUE_INFO.coordinates.lat},${VENUE_INFO.coordinates.lng}&navigate=yes`;

  return (
    <section id="localizacao" className="py-12 lg:py-16 bg-white border-b border-neutral-200/80 transition-colors dark:bg-neutral-950 dark:border-neutral-900 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <MapPin className="h-4 w-4" />
            <span>Localização Privilegiada</span>
          </div>
          <h2 className="mt-1 font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
            Como Chegar ao LM Eventos
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Localizado no bairro Jardim Líder, Zona Norte de São Paulo, em rua tranquila e de fácil acesso para todos os seus convidados.
          </p>
        </div>

        {/* Content Box - Symmetrical 5/7 columns matching heights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Information & Route Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/70">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 dark:text-amber-400">Endereço Oficial</span>
              <h3 className="mt-1 text-lg font-serif-display text-neutral-900 dark:text-white">
                {VENUE_INFO.legalName}
              </h3>
              
              <div className="mt-3 rounded-xl border border-neutral-200 bg-white p-3.5 dark:border-neutral-800 dark:bg-neutral-950 shadow-xs">
                <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {VENUE_INFO.address}
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 hover:border-amber-500/50 hover:text-neutral-900 transition-colors dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400 text-[11px]">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
                        <span className="text-[11px]">Copiar Endereço</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Transit & Access Points */}
              <div className="mt-5 space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <Car className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 dark:text-white block font-medium">Acesso Facilitado na Zona Norte</strong>
                    <span className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                      Rua calma com facilidade de parada para vans, carros de convidados e desembarque seguro.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 dark:text-white block font-medium">Visitas com Horário Marcado</strong>
                    <span className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                      Agende previamente no WhatsApp para encontrarmos você no espaço com atendimento exclusivo.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Map Links */}
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2.5">
              <a
                href={VENUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 dark:bg-amber-500 px-4 py-2.5 text-xs font-semibold text-white dark:text-neutral-950 hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors shadow-xs"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Abrir no Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  <Navigation className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                  <span>Traçar no Waze</span>
                </a>

                <a
                  href={`https://wa.me/5511966150471?text=${encodeURIComponent('Olá! Gostaria de receber a localização do LM Eventos pelo WhatsApp para facilitar minha rota.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-600/40 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800 hover:bg-emerald-100 dark:border-emerald-700/50 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-900/40"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Whats Rota</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 min-h-[360px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 relative shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <iframe
              title="Localização LM Eventos Google Maps"
              src="https://maps.google.com/maps?q=-23.4500224,-46.7177282&hl=pt-BR&z=17&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Overlay badge at bottom */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md border border-neutral-200 px-3.5 py-2 rounded-xl shadow-md flex items-center justify-between gap-3 dark:bg-neutral-950/90 dark:border-neutral-800">
              <div>
                <p className="text-xs font-semibold text-neutral-900 dark:text-white">L&M EVENTOS</p>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Rua Bataiporã, 12 - Jardim Líder</p>
              </div>
              <a
                href={VENUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-700 hover:underline inline-flex items-center gap-1 dark:text-amber-400"
              >
                <span>Ver rota</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
