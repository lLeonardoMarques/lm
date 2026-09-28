import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle2, MessageCircle, MapPin } from 'lucide-react';
import { VENUE_INFO } from '../data/eventData';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timePreference, setTimePreference] = useState('tarde');
  const [eventType, setEventType] = useState('Aniversário');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const timeLabel = timePreference === 'manha' 
      ? 'Manhã (09h - 12h)' 
      : timePreference === 'tarde' 
      ? 'Tarde (13h - 17h)' 
      : 'Noite (18h - 20h)';

    const msg = `Olá LM Eventos! Gostaria de agendar uma visita presencial para conhecer o salão:
*Nome:* ${name}
*Telefone/Whats:* ${phone || 'Mesmo do envio'}
*Data Pretendida para Visita:* ${date || 'A combinar esta semana'}
*Preferência de Horário:* ${timeLabel}
*Meu Evento:* ${eventType}
${notes ? `*Observações:* ${notes}\n` : ''}
Endereço: Rua Bataiporã, 12 - Jardim Líder`;

    window.open(`https://wa.me/5511966150471?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7 shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-colors dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
          aria-label="Fechar formulário"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600 dark:text-emerald-400 animate-bounce" />
            <h3 className="mt-3 text-xl font-serif-display text-neutral-900 dark:text-white">Solicitação Enviada!</h3>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
              Abrimos a conversa no WhatsApp para confirmar o seu horário. Aguardamos sua visita no LM Eventos!
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <Calendar className="h-4 w-4" />
              <span>Visita Presencial Gratuita</span>
            </div>
            
            <h3 className="mt-1 text-xl sm:text-2xl font-serif-display text-neutral-900 dark:text-white">
              Conheça o LM Eventos
            </h3>
            
            <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
              Venha ver pessoalmente o salão, a acústica, o espaço de cozinha e tirar todas as suas dúvidas.
            </p>

            <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-600 bg-neutral-100/80 p-2.5 rounded-lg border border-neutral-200 dark:text-neutral-400 dark:bg-neutral-900/80 dark:border-neutral-800">
              <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Rua Bataiporã, 12 - Jardim Líder, São Paulo - SP</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  Seu Nome Completo *
                </label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Carolina Ferreira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-300 bg-white pl-9 pr-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    WhatsApp / Telefone
                  </label>
                  <div className="mt-1 relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 bg-white pl-9 pr-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Tipo do seu Evento
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-amber-500"
                  >
                    <option value="Aniversário Adulto">Aniversário Adulto</option>
                    <option value="Festa de 15 Anos">Festa de 15 Anos</option>
                    <option value="Casamento / Noivado">Casamento / Noivado</option>
                    <option value="Confraternização">Confraternização</option>
                    <option value="Batizado / Chá">Batizado / Chá</option>
                    <option value="Evento Corporativo">Evento Corporativo</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Melhor dia para você vir
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Período preferido
                  </label>
                  <select
                    value={timePreference}
                    onChange={(e) => setTimePreference(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-amber-500"
                  >
                    <option value="manha">Manhã (09h às 12h)</option>
                    <option value="tarde">Tarde (13h às 17h)</option>
                    <option value="noite">Noite (18h às 20h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  Alguma dúvida ou detalhe especial? (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Quero saber sobre horário para montagem da decoração..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-amber-600 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Confirmar Agendamento no WhatsApp</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
