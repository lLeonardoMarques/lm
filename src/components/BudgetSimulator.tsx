import React, { useState, useId } from 'react';
import { Calculator, MessageCircle } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';

interface BudgetSimulatorProps {
  initialEventType?: string;
}

export const BudgetSimulator: React.FC<BudgetSimulatorProps> = ({ initialEventType = 'aniversarios' }) => {
  const [eventType, setEventType] = useState<string>(initialEventType);
  const [dayType, setDayType] = useState<string>('sabado');
  const [period, setPeriod] = useState<string>('noturno');
  const [guestCount, setGuestCount] = useState<number>(80);
  const [includeLighting, setIncludeLighting] = useState<boolean>(true);
  const [includeCleaning, setIncludeCleaning] = useState<boolean>(true);
  const [includeLinens, setIncludeLinens] = useState<boolean>(false);
  const [preferredMonth, setPreferredMonth] = useState<string>('Próximos 3 meses');
  const [contactName, setContactName] = useState<string>('');

  const guestsInputId = useId();

  const calculateEstimate = () => {
    let basePrice = 1200;

    if (dayType === 'sabado') {
      basePrice = 2200;
    } else if (dayType === 'sexta' || dayType === 'domingo') {
      basePrice = 1800;
    }

    if (period === 'completo') {
      basePrice += 600;
    }

    if (eventType === 'casamentos') {
      basePrice += 400;
    } else if (eventType === 'corporativos') {
      basePrice += 300;
    }

    let extras = 0;
    if (includeLighting) extras += 350;
    if (includeCleaning) extras += 250;
    if (includeLinens) extras += Math.ceil(guestCount / 6) * 15;

    const totalEstimateMin = basePrice + extras;
    const totalEstimateMax = totalEstimateMin + 300;

    return { totalEstimateMin, totalEstimateMax, basePrice, extras };
  };

  const { totalEstimateMin, totalEstimateMax } = calculateEstimate();

  const handleSendToWhatsApp = () => {
    const eventLabels: Record<string, string> = {
      aniversarios: 'Aniversário / 15 Anos',
      casamentos: 'Casamento / Recepção',
      corporativos: 'Evento Corporativo',
      familiares: 'Festa Familiar / Chá / Batizado'
    };

    const dayLabels: Record<string, string> = {
      semana: 'Segunda a Quinta-feira',
      sexta: 'Sexta-feira',
      sabado: 'Sábado (Dia Nobre)',
      domingo: 'Domingo'
    };

    const periodLabels: Record<string, string> = {
      diurno: 'Diurno (Almoço/Tarde)',
      noturno: 'Noturno (Balada/Festa)',
      completo: 'Dia Inteiro'
    };

    const extrasList = [];
    if (includeLighting) extrasList.push('Iluminação & Pista');
    if (includeCleaning) extrasList.push('Taxa de Limpeza');
    if (includeLinens) extrasList.push('Toalhas de Mesa');

    const message = `Olá LM Eventos! Simulei meu evento no site:
${contactName ? `*Nome:* ${contactName}\n` : ''}
*Tipo:* ${eventLabels[eventType] || eventType}
*Convidados:* ~${guestCount} pessoas
*Dia Preferido:* ${dayLabels[dayType]}
*Período:* ${periodLabels[period]}
*Previsão de Data:* ${preferredMonth}
*Opcionais:* ${extrasList.length > 0 ? extrasList.join(', ') : 'Nenhum'}
*Estimativa gerada:* R$ ${totalEstimateMin.toLocaleString('pt-BR')} a R$ ${totalEstimateMax.toLocaleString('pt-BR')}

Gostaria de verificar a disponibilidade de datas e agendar uma visita ao salão na Rua Bataiporã!`;

    window.open(`https://wa.me/5511966150471?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="simulador" className="py-12 lg:py-16 bg-white border-b border-neutral-200/80 transition-colors dark:bg-neutral-900/40 dark:border-neutral-900 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Calculator className="h-4 w-4" />
            <span>Transparência & Praticidade</span>
          </div>
          <h2 className="mt-1 font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
            Simulador de Orçamento para o seu Evento
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Monte a configuração ideal da sua festa e obtenha uma estimativa instantânea. Envie diretamente para o WhatsApp do LM Eventos para confirmar sua data.
          </p>
        </div>

        {/* Symmetrical Simulator Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-950">
            
            {/* Step 1: Event Type */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
                1. Qual é a sua comemoração?
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  { id: 'aniversarios', label: 'Aniversário / 15 Anos' },
                  { id: 'casamentos', label: 'Casamento / Noivado' },
                  { id: 'corporativos', label: 'Corporativo / Confrat.' },
                  { id: 'familiares', label: 'Batizado / Chá / Família' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setEventType(type.id)}
                    className={`rounded-xl border p-2.5 text-left text-xs font-medium transition-all ${
                      eventType === type.id
                        ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold shadow-xs dark:border-amber-500 dark:bg-amber-500/10 dark:text-amber-300'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Day of Week */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
                2. Dia da Semana Preferido
              </label>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'sabado', label: 'Sábado (Mais buscado)' },
                  { id: 'sexta', label: 'Sexta-feira' },
                  { id: 'domingo', label: 'Domingo' },
                  { id: 'semana', label: 'Seg a Qui' }
                ].map((day) => (
                  <button
                    key={day.id}
                    type="button"
                    onClick={() => setDayType(day.id)}
                    className={`rounded-xl border p-2 text-center text-xs font-medium transition-all ${
                      dayType === day.id
                        ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold dark:border-amber-500 dark:bg-amber-500/10 dark:text-amber-300'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Guest count slider */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor={guestsInputId} className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
                  3. Quantidade Estimada de Convidados
                </label>
                <span className="text-sm font-bold text-amber-700 dark:text-amber-400 tabular-nums">
                  {guestCount} pessoas
                </span>
              </div>
              
              <div className="mt-2">
                <input
                  id={guestsInputId}
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-600 dark:bg-neutral-800 dark:accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 tabular-nums">
                  <span>20 pessoas (Íntimo)</span>
                  <span>80 pessoas (Médio)</span>
                  <span>150 pessoas (Capacidade máx.)</span>
                </div>
              </div>
            </div>

            {/* Step 4: Shift / Período */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
                4. Período do Evento
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[
                  { id: 'noturno', label: 'Noturno (Balada/Festa)' },
                  { id: 'diurno', label: 'Diurno (Almoço/Tarde)' },
                  { id: 'completo', label: 'Dia Todo (Especial)' }
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPeriod(p.id)}
                    className={`rounded-xl border p-2 text-center text-xs font-medium transition-all ${
                      period === p.id
                        ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold dark:border-amber-500 dark:bg-amber-500/10 dark:text-amber-300'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Extras toggles */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
                5. Serviços & Estruturas Opcionais
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center justify-between p-2.5 rounded-xl border border-neutral-200 bg-white cursor-pointer hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeLighting}
                      onChange={(e) => setIncludeLighting(e.target.checked)}
                      className="h-4 w-4 rounded border-neutral-300 bg-white text-amber-600 focus:ring-amber-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-amber-500"
                    />
                    <div>
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">Iluminação Cênica & Pista DJ</p>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Efeitos de luzes, pontos cênicos e tomadas dedicadas</p>
                    </div>
                  </div>
                  <span className="text-xs text-amber-700 dark:text-amber-400 font-medium">+ R$ 350</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl border border-neutral-200 bg-white cursor-pointer hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeCleaning}
                      onChange={(e) => setIncludeCleaning(e.target.checked)}
                      className="h-4 w-4 rounded border-neutral-300 bg-white text-amber-600 focus:ring-amber-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-amber-500"
                    />
                    <div>
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">Taxa de Limpeza Pós-Evento</p>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Equipe cuida de toda a higienização após a sua festa</p>
                    </div>
                  </div>
                  <span className="text-xs text-amber-700 dark:text-amber-400 font-medium">+ R$ 250</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl border border-neutral-200 bg-white cursor-pointer hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeLinens}
                      onChange={(e) => setIncludeLinens(e.target.checked)}
                      className="h-4 w-4 rounded border-neutral-300 bg-white text-amber-600 focus:ring-amber-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-amber-500"
                    />
                    <div>
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">Toalhas para Mesas dos Convidados</p>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Toalhas higienizadas na cor escolhida</p>
                    </div>
                  </div>
                  <span className="text-xs text-amber-700 dark:text-amber-400 font-medium">Por mesa</span>
                </label>
              </div>
            </div>

          </div>

          {/* Results & WhatsApp Dispatch Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-amber-600/30 bg-stone-50/90 p-5 sm:p-6 shadow-md dark:border-amber-500/30 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">Resumo da Simulação</span>
                <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Valores Estimados</span>
              </div>

              {/* Price Display */}
              <div className="mt-4 text-center py-3.5 bg-white dark:bg-neutral-950/80 rounded-xl border border-neutral-200 dark:border-neutral-800/80 shadow-xs">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">Investimento estimado da locação:</span>
                <div className="mt-1 text-2xl sm:text-3xl font-serif-display font-medium text-amber-800 dark:text-amber-300 tabular-nums">
                  R$ {totalEstimateMin.toLocaleString('pt-BR')} <span className="text-xs font-normal text-neutral-500">a</span> R$ {totalEstimateMax.toLocaleString('pt-BR')}
                </div>
                <p className="mt-1 text-[10px] text-neutral-500 dark:text-neutral-400 px-3">
                  *Valores aproximados sujeitos à confirmação conforme data exata.
                </p>
              </div>

              {/* Summary bullet list */}
              <div className="mt-4 space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                <div className="flex justify-between py-1 border-b border-neutral-200/80 dark:border-neutral-800/60">
                  <span className="text-neutral-500 dark:text-neutral-400">Espaço Físico:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">LM Eventos (Jardim Líder)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/80 dark:border-neutral-800/60">
                  <span className="text-neutral-500 dark:text-neutral-400">Capacidade Selecionada:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white tabular-nums">Até {guestCount} pessoas</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/80 dark:border-neutral-800/60">
                  <span className="text-neutral-500 dark:text-neutral-400">Mobiliário:</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">Mesas & Cadeiras Inclusas</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/80 dark:border-neutral-800/60">
                  <span className="text-neutral-500 dark:text-neutral-400">Cozinha:</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">Freezer, Fogão & Apoio</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/80 dark:border-neutral-800/60">
                  <span className="text-neutral-500 dark:text-neutral-400">Climatização:</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">Ar-Condicionado Incluso</span>
                </div>
              </div>

              {/* User Inputs */}
              <div className="mt-4 space-y-2.5">
                <div>
                  <label className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400 block mb-0.5">
                    Seu Nome (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Silva"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-800 placeholder-neutral-400 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400 block mb-0.5">
                    Mês / Data Prevista
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Novembro / 2026 ou 15/11"
                    value={preferredMonth}
                    onChange={(e) => setPreferredMonth(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-800 placeholder-neutral-400 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="mt-5 pt-2">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 transition-all focus-visible:outline-2 focus-visible:outline-emerald-400"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Enviar Orçamento para o WhatsApp</span>
              </button>
              
              <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-neutral-500 dark:text-neutral-400">
                <span>Atendimento direto pelo telefone:</span>
                <span className="text-amber-700 dark:text-amber-400 font-medium">{VENUE_INFO.formattedPhone}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
