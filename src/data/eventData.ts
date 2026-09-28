export interface GalleryItem {
  id: string;
  title: string;
  category: 'salao' | 'decoracao' | 'buffet' | 'fachada';
  imageUrl: string;
  description: string;
  isRealLocationPhoto?: boolean;
}

export const VENUE_INFO = {
  name: "LM Eventos",
  legalName: "L&M Eventos e Festas",
  phone: "011966150471",
  formattedPhone: "(11) 96615-0471",
  whatsappUrl: "https://wa.me/5511966150471",
  address: "Rua Bataiporã, 12 - Jardim Lider, São Paulo - SP, 02983-100",
  neighborhood: "Jardim Líder",
  city: "São Paulo - SP",
  postalCode: "02983-100",
  coordinates: {
    lat: -23.4500224,
    lng: -46.7177282
  },
  googleMapsUrl: "https://www.google.com/maps/place/L%26M+EVENTOS/@-23.4500224,-46.718372,19z/data=!4m14!1m7!3m6!1s0x94cef969b7b54de3:0x8e68457db81d285f!2sArt+Marketing+Digital!8m2!3d-23.4464622!4d-46.7165201!16s%2Fg%2F11jjqsb03y!3m5!1s0x94cefb157ffef245:0x65758022988c54c0!8m2!3d-23.4500224!4d-46.7177282!16s%2Fg%2F11v0k41lyj",
  capacity: "Até 150 pessoas",
  hours: "Disponível para diurno e noturno",
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Fachada & Entrada do Espaço",
    category: "fachada",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TVk3NSNhkn8fW5He3Ij8O35ncRBsZ92lJ1kaLUzTrapMokZ1d-Cc2npMYu2t2ia8-KOg6mRdwVckaribd1yGBLfw7vS5aPtrXaYWnxbkCgxFJMieitf_VWwiCnk8wNCXvv9adiq1tbgNmX=s1200",
    description: "Recepção acolhedora e fachada ampla na Rua Bataiporã, Jardim Líder.",
    isRealLocationPhoto: true
  },
  {
    id: "g-2",
    title: "Salão Principal com Mesas e Ambientação",
    category: "salao",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QdKHdOmIi8b58MERX2okUo0WzDh99Yo7UKkAQyyn0BXXU1ZXd-SffTCCAUSzmIhZyrShoAZtk6ofrQiXJ_lM6walnQSDbQ43K9HXBIbU60o39mxff294Ao5ds4ggjquvZnFjo4=s1200",
    description: "Espaço amplo com mesas decoradas, cortinado e estrutura para eventos confortáveis.",
    isRealLocationPhoto: true
  },
  {
    id: "g-3",
    title: "Área de Celebração e Pista de Dança",
    category: "decoracao",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SeU0-QIoXNuWANH4Xd2JDrQkGSBB_z_Xir808C0O9jOnvyTlYhUYPo_e1VhJFPAJicMKmSnoJdSD0NcDucnjzXyGvf1wgDqM0ASoMRluT7kkeNjtwuwvX18u3iNRc19jKhoB4=s1200",
    description: "Ambiente para fotos, pista de dança com iluminação e painel de festa.",
    isRealLocationPhoto: true
  },
  {
    id: "g-4",
    title: "Iluminação Cênica & Banquete Festivo",
    category: "salao",
    imageUrl: "/src/assets/images/hero_party_venue_1790608046361.jpg",
    description: "Configuração do salão com iluminação aconchegante, mesas elegantes e atmosfera premium.",
    isRealLocationPhoto: false
  },
  {
    id: "g-5",
    title: "Área de Buffet & Mesa Gourmet",
    category: "buffet",
    imageUrl: "/src/assets/images/event_decor_buffet_1790608062909.jpg",
    description: "Infraestrutura completa de cozinha de apoio e bancadas para buffet, doces e bar.",
    isRealLocationPhoto: false
  },
  {
    id: "g-6",
    title: "Lounge e Espaço Social",
    category: "decoracao",
    imageUrl: "/src/assets/images/celebration_lounge_1790608076251.jpg",
    description: "Ambiente descontraído para integração dos convidados, coquetéis e fotos memoráveis.",
    isRealLocationPhoto: false
  }
];

export const EVENT_TYPES = [
  {
    id: "aniversarios",
    title: "Aniversários & 15 Anos",
    tagline: "Celebrações inesquecíveis para todas as idades",
    description: "Estrutura completa para festas de 15 anos com debutante, aniversários de adultos e festas infantis com espaço para brinquedos e pista de dança.",
    highlights: ["Pista com iluminação especial", "Mesa para bolo e doces decorada", "Espaço livre para recreação"],
    icon: "Cake"
  },
  {
    id: "casamentos",
    title: "Casamentos & Mini Weddings",
    tagline: "O cenário ideal para dizer o sim",
    description: "Recepções elegantes e cerimônias intimistas com aconchego, layout personalizado para mesas de família e espaço para ensaios fotográficos.",
    highlights: ["Ambiente climatizado e aconchegante", "Área para cerimônia ou coquetel", "Cozinha de apoio para o buffet escolhido"],
    icon: "Heart"
  },
  {
    id: "corporativos",
    title: "Eventos Corporativos & Festas de Fim de Ano",
    tagline: "Profissionalismo e integração para sua equipe",
    description: "Confraternizações empresariais, palestras, workshops, jantares de metas e premiações com estrutura acústica e pontos de energia.",
    highlights: ["Sonorização e microfone", "Fácil acesso para colaboradores", "Flexibilidade de horários e layouts"],
    icon: "Briefcase"
  },
  {
    id: "familiares",
    title: "Batizados, Chás & Confraternizações",
    tagline: "Momentos especiais cercados de quem você ama",
    description: "Chá revelação, chá de bebê, bodas, almoços de domingo e reuniões familiares com a privacidade que sua família merece.",
    highlights: ["Ambiente reservado e seguro", "Liberdade para personalizar a decoração", "Horários diurnos flexíveis"],
    icon: "Users"
  }
];

export const AMENITIES = [
  {
    title: "Capacidade Ideal",
    description: "Acomoda confortavelmente até 150 convidados sentados ou em formato coquetel com circulação livre.",
    icon: "UsersRound"
  },
  {
    title: "Climatização Eficiente",
    description: "Ar-condicionado e ventilação projetada para manter temperatura agradável em qualquer estação.",
    icon: "AirVent"
  },
  {
    title: "Cozinha de Apoio Completa",
    description: "Equipada com geladeira, freezer, fogão industrial, bancadas higiênicas em inox e pia ampla.",
    icon: "UtensilsCrossed"
  },
  {
    title: "Iluminação & Pista",
    description: "Estrutura para DJ e iluminação cênica de destaque para transformar a vibe da sua festa.",
    icon: "Sparkles"
  },
  {
    title: "Mesas e Cadeiras Inclusas",
    description: "Mobiliário resistente e moderno pronto para receber a decoração do seu gosto.",
    icon: "Armchair"
  },
  {
    title: "Banheiros Modernos & Acessibilidade",
    description: "Sanitários individuais limpos, higienizados e adaptados para garantir comodidade a todos.",
    icon: "ShieldCheck"
  }
];

export const REVIEWS = [
  {
    author: "Juliana Santos",
    eventType: "Festa de 15 Anos",
    rating: 5,
    date: "Há 1 mês",
    comment: "Fiz a festa de 15 anos da minha filha no LM Eventos e foi tudo perfeito! O espaço é muito bem cuidado, a iluminação ficou linda e o atendimento desde a primeira visita foi impecável. Recomendo de olhos fechados!"
  },
  {
    author: "Ricardo Alencar",
    eventType: "Aniversário de 40 Anos",
    rating: 5,
    date: "Há 2 meses",
    comment: "Espaço super agradável, limpo e bem localizado no Jardim Líder. Nossos convidados elogiaram muito o conforto e a estrutura da cozinha para o nosso churrasco e buffet. Nota 10!"
  },
  {
    author: "Mariana & Carlos",
    eventType: "Recepção de Casamento",
    rating: 5,
    date: "Há 3 meses",
    comment: "Local acolhedor e aconchegante para nossa celebração. A equipe nos deu toda a assistência necessária com horários de montagem e desmontagem. Foi um dia inesquecível!"
  }
];

export const FAQS = [
  {
    q: "Qual é a capacidade máxima de convidados no LM Eventos?",
    a: "O espaço comporta confortavelmente até 150 pessoas com mesas, cadeiras e pista de dança liberada, garantindo excelente circulação e conforto para todos."
  },
  {
    q: "Posso levar meu próprio buffet, bolo, bebidas e decoração?",
    a: "Sim! Você tem total liberdade para contratar o fornecedor de sua preferência ou trazer sua própria comida e bebida. Nossa cozinha de apoio conta com freezer, geladeira e bancadas para uso da sua equipe."
  },
  {
    q: "O que já está incluso na locação do salão?",
    a: "A locação inclui o espaço totalmente limpo e higienizado, mesas e cadeiras para os convidados, climatização, cozinha de apoio equipada, banheiros masculino, feminino e acessível, além do suporte para montagem."
  },
  {
    q: "Como faço para agendar uma visita para conhecer o espaço pessoalmente?",
    a: "Basta clicar em 'Agendar Visita' ou nos chamar no WhatsApp pelo número (11) 96615-0471. Combinamos um dia e horário conveniente para você conhecer cada detalhe do salão sem compromisso."
  },
  {
    q: "Quais são as formas de pagamento para reserva?",
    a: "Facilitamos o pagamento com sinal para reserva da data e saldo parcelado até a semana do evento via PIX, transferência ou cartão de crédito."
  }
];
