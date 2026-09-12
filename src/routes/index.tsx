import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart,
  Baby,
  Apple,
  Clock,
  ShieldCheck,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Calendar,
  CheckCircle2,
  Smile,
  HeartHandshake,
  Activity,
  FileCheck,
  Users,
  Award
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: JulianaLinharesLandingPage,
});

export default function JulianaLinharesLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("Recém-nascido (até 28 dias)");
  const [consultReason, setConsultReason] = useState("Puericultura / Primeira Consulta do Bebê");
  const [preferredShift, setPreferredShift] = useState("Manhã");
  const [notes, setNotes] = useState("");

  const phone = "5521993139913";
  const phoneDisplay = "(21) 99313-9913";
  const address = "Edifício Comercial Cosmopolitan — R. Pref. Sebastião Teixeira, 354 - Sala 112, Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta, das 08:30 às 17:00 (Com hora marcada)";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Andressa! Vim pelo site da Dra. Juliana Linhares e gostaria de agendar uma consulta.

*Nome do Responsável:* ${parentName || "Não informado"}
*Nome da Criança:* ${childName || "Não informado"}
*Idade do Paciente:* ${childAge}
*Motivo da Consulta:* ${consultReason}
*Turno de Preferência:* ${preferredShift}
${notes ? `*Observações adicionais:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, Andressa! Vim pelo site oficial da Dra. Juliana Linhares e gostaria de informações sobre agendamento de consulta pediátrica."
  )}`;

  const specialtyPillars = [
    {
      title: "Puericultura do 1º Ano de Vida",
      tag: "Acompanhamento Mês a Mês",
      icon: Baby,
      desc: "Consultas mensais no primeiro ano para acompanhar o ganho de peso, curvas de crescimento OMS, marcos do desenvolvimento neuropsicomotor, apoio integral à amamentação e rotina de sono do bebê."
    },
    {
      title: "Nutrologia Pediátrica & Introdução Alimentar",
      tag: "Alimentação Saudável",
      icon: Apple,
      desc: "Planejamento personalizado a partir dos 6 meses. Orientações práticas para os métodos BLW, tradicional ou participativo, prevenção de engasgos e formação de uma relação positiva com a comida de verdade."
    },
    {
      title: "Manejo de Alergias & Digestão (APLV & Refluxo)",
      tag: "Gastroenterologia & Alergias",
      icon: ShieldCheck,
      desc: "Diagnóstico sensível e acolhedor de Alergia à Proteína do Leite de Vaca (APLV), refluxo gastroesofágico, cólicas intensas, constipação intestinal e desconfortos digestivos da primeira infância."
    },
    {
      title: "Seletividade Alimentar Infantil",
      tag: "Dificuldades à Mesa",
      icon: Smile,
      desc: "Abordagem multidisciplinar e paciente para crianças que recusam grupos alimentares inteiros, com estratégias lúdicas e sem imposições estressantes para a família."
    },
    {
      title: "Consulta Pré-Natal Pediátrica",
      tag: "3º Trimestre de Gestação",
      icon: HeartHandshake,
      desc: "Encontro com os futuros pais antes do nascimento para esclarecer dúvidas sobre os primeiros dias na maternidade, amamentação, enxoval farmacêutico e acolhimento emocional."
    },
    {
      title: "Check-up Pediátrico & Rotina de Saúde",
      tag: "Prevenção & Imunidade",
      icon: Activity,
      desc: "Avaliação preventiva global do pré-escolar e escolar, monitoramento postural, orientação do calendário vacinal e solicitação criteriosa de exames laboratoriais."
    }
  ];

  const consultationPillars = [
    {
      title: "Consultas Longas de Cerca de 1 Hora",
      desc: "Sem pressa e sem correria. Tempo suficiente para examinar o pequeno com tranquilidade, acolher o choro e ouvir todas as dúvidas dos pais."
    },
    {
      title: "Ambiente Lúdico no Cosmopolitan (Sala 112)",
      desc: "Consultório preparado para encantar os pequenos, com brinquedos higienizados, trocador e climatização acolhedora que quebram o medo do jaleco."
    },
    {
      title: "Acolhimento Especial da Secretária Andressa",
      desc: "Desde o primeiro contato via WhatsApp até a recepção no consultório, você e sua família recebem atendimento doce, atencioso e prestativo."
    },
    {
      title: "Rigor Científico com Olhar Afetivo",
      desc: "Pediatria fundamentada nas melhores evidências médicas mundiais, aliada à sensibilidade materna e respeito ao ritmo de cada criança."
    }
  ];

  const testimonials = [
    {
      name: "Marcela Rodrigues",
      child: "Mãe do Ethan",
      stars: 5,
      content: "A melhor pediatra que meu filho poderia ter! A Dra. Juliana Linhares sempre acolhe o Ethan com muito amor, acompanha cada detalhe do desenvolvimento dele e esclarece todas as nossas dúvidas com paciência e profissionalismo. Dá pra sentir que ela realmente gosta do que faz. Confio 100% e recomendo a todos os pais!"
    },
    {
      name: "Ana Paula Cordeiro",
      child: "Mãe de bebê em acompanhamento",
      stars: 5,
      content: "Foi a minha primeira experiência com a Dra. Juliana e amei! Muito carinhosa com minha bebê, muito atenciosa, muito paciente pra explicar as medicações! Foram quase uma hora de atendimento sem pressa alguma! Dra. Juliana é maravilhosa, uma profissional rara."
    },
    {
      name: "Giselle Vaz",
      child: "Mãe de paciente",
      stars: 5,
      content: "Só tenho que agradecer a Dra. Juliana Linhares, que nos recebeu com muito carinho e profissionalismo. Nos sentimos acolhidos de forma humana e com toda a segurança necessária para o tratamento da minha filha. Ambiente impecável e recepção da Andressa nota 10!"
    }
  ];

  const faqs = [
    {
      q: "Qual é o tempo de duração de cada consulta?",
      a: "As consultas com a Dra. Juliana Linhares têm duração média de 60 minutos (1 hora). Esse tempo estendido é um dos maiores diferenciais do consultório, permitindo uma escuta atenta dos pais, avaliação física completa e sem pressa da criança e elaboração de um plano de cuidados detalhado."
    },
    {
      q: "Quando os pais devem agendar a primeira consulta do recém-nascido?",
      a: "O recomendado pela Sociedade Brasileira de Pediatria é realizar a primeira consulta de puericultura entre o 7º e o 10º dia de vida do bebê. Nesse primeiro encontro avaliamos o ganho de peso, a adaptação da amamentação, a cicatrização do coto umbilical e orientamos os pais em todas as inseguranças iniciais."
    },
    {
      q: "A Dra. Juliana atende convênios médicos ou fornece recibo para reembolso?",
      a: "O atendimento é particular para garantir o tempo de 1 hora por paciente e dedicação exclusiva. Fornecemos recibo médico detalhado com CRM e RQE de Pediatria para que os pais possam solicitar o reembolso total ou parcial junto aos seus planos de saúde (Bradesco, SulAmérica, Unimed, Amil, Petrobras, entre outros)."
    },
    {
      q: "Como funciona o suporte para Introdução Alimentar (BLW / Tradicional)?",
      a: "A partir dos 5 a 6 meses de vida, realizamos uma consulta completa de introdução alimentar. A Dra. Juliana avalia os sinais de prontidão do bebê, ensina sobre cortes seguros de alimentos para prevenção de engasgos (diferença entre engasgo e reflexo de gag) e orienta o método que melhor se adapta à rotina da família."
    },
    {
      q: "O que é a Consulta Pré-Natal com o Pediatra?",
      a: "É uma consulta realizada no terceiro trimestre de gestação (entre 32 e 36 semanas). Ela serve para os pais conhecerem a médica previamente, alinharem as expectativas para a sala de parto, prepararem o ambiente seguro do recém-nascido em casa e tirarem dúvidas cruciais sobre amamentação antes da chegada do bebê."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 pb-24 lg:pb-0">
      {/* 1. HEADER LIMPA E INSTITUCIONAL - SEM ÍCONE */}
      <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Apenas o nome da profissional, sem ícone */}
          <a href="#" className="group flex flex-col justify-center">
            <span className="text-xl font-bold tracking-tight text-slate-900 transition group-hover:text-emerald-700 sm:text-2xl">
              Dra. Juliana Linhares
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-emerald-700 uppercase sm:text-xs">
              Pediatria & Nutrologia Pediátrica • Edifício Cosmopolitan
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#diferenciais" className="text-sm font-medium text-slate-600 transition hover:text-emerald-700">
              Diferenciais
            </a>
            <a href="#especialidades" className="text-sm font-medium text-slate-600 transition hover:text-emerald-700">
              Especialidades
            </a>
            <a href="#consultorio" className="text-sm font-medium text-slate-600 transition hover:text-emerald-700">
              O Consultório
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-slate-600 transition hover:text-emerald-700">
              Depoimentos
            </a>
            <a href="#triagem" className="text-sm font-medium text-slate-600 transition hover:text-emerald-700">
              Agendamento
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition hover:text-emerald-700">
              Dúvidas
            </a>
          </nav>

          {/* Direct WhatsApp CTA Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Falar com a Andressa</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 lg:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Diferenciais da Consulta
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Especialidades & Nutrologia
              </a>
              <a
                href="#consultorio"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                O Consultório (Sala 112)
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Depoimentos das Mães
              </a>
              <a
                href="#triagem"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Agendamento Pré-Filtrado
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Perguntas Frequentes
              </a>
              <div className="mt-2 pt-2 border-t border-slate-100">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Falar no WhatsApp com a Andressa</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION COM ACOLHIMENTO E PRESTÍGIO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4FBF7] to-[#FAFAF9] pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Texto Principal */}
            <div className="lg:col-span-7">
              {/* Badge de Aprovação Máxima */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
                <div className="flex text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span>100% 5 Estrelas no Google (79 Avaliações Verificadas)</span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
                Cuidado pediátrico com{" "}
                <span className="text-emerald-700">afeto materno</span>, consultas de 1 hora e ciência.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Acompanhamento atencioso desde os primeiros dias do recém-nascido até a infância. Consultório acolhedor no 
                <strong> Edifício Cosmopolitan (Sala 112)</strong>, unindo <strong>Puericultura do 1º Ano</strong>, 
                <strong> Nutrologia Pediátrica</strong>, introdução alimentar consciente (BLW) e tratamento de alergias com tempo de sobra para ouvir os pais.
              </p>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#triagem"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 active:scale-95"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Agendar Consulta do Bebê</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>Falar com a Secretária Andressa</span>
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-emerald-700">~60 min</span>
                  <span className="text-xs text-slate-600 font-medium">Por consulta, sem pressa</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-emerald-700">79 ★</span>
                  <span className="text-xs text-slate-600 font-medium">Avaliações 5,0 no Google</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-emerald-700">Sala 112</span>
                  <span className="text-xs text-slate-600 font-medium">Ed. Cosmopolitan</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-emerald-700">RQE & CRM</span>
                  <span className="text-xs text-slate-600 font-medium">Pediatria com Reembolso</span>
                </div>
              </div>
            </div>

            {/* Card Visual Destacado */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700">
                  <Heart className="h-3.5 w-3.5 fill-current text-pink-500" />
                  <span>Pediatria Afetiva & Nutrologia</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  O que torna o atendimento único para seu filho:
                </h3>

                <ul className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-emerald-100 p-1 text-emerald-700">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span><strong>Consultas de 1 hora inteira:</strong> exame minucioso sem fila corrida e espaço para todos os questionamentos da mãe e do pai.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-pink-100 p-1 text-pink-700">
                      <Smile className="h-4 w-4" />
                    </div>
                    <span><strong>Abordagem respeitosa com a criança:</strong> exame no colo dos pais quando necessário, respeitando o tempo e o choro do bebê.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-emerald-100 p-1 text-emerald-700">
                      <Apple className="h-4 w-4" />
                    </div>
                    <span><strong>Nutrologia & Introdução Alimentar:</strong> método BLW e participativo seguro para prevenir seletividade e carências nutricionais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-emerald-100 p-1 text-emerald-700">
                      <HeartHandshake className="h-4 w-4" />
                    </div>
                    <span><strong>Suporte acolhedor da Andressa:</strong> organização pontual e gentileza constante na marcação das consultas.</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "Dá pra sentir que ela realmente gosta do que faz. Foram quase uma hora de atendimento sem pressa alguma!"
                  </p>
                  <p className="mt-2 text-right text-xs font-semibold text-emerald-700">
                    — Marcela Rodrigues & Ana Paula Cordeiro (Google)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DIFERENCIAIS: A EXPERIÊNCIA DE 1 HORA */}
      <section id="diferenciais" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Padrão de Excelência em Pediatria
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Por que mães e pais escolhem a Dra. Juliana Linhares?
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A infância passa rápido e cada fase exige um olhar atento. Descubra os pilares que tornam o consultório uma referência máxima em Teresópolis.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {consultationPillars.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ESPECIALIDADES & PILARES CLÍNICOS */}
      <section id="especialidades" className="py-16 bg-[#FAFAF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Cuidado Integral da Infância
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Especialidades, Puericultura & Nutrologia
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Atendimento focado na saúde física, nutricional e emocional da criança, com planos de acompanhamento específicos para cada idade.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialtyPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{pillar.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href="#triagem"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      <span>Solicitar agendamento</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONSULTÓRIO & LOCALIZAÇÃO (SALA 112 COSMOPOLITAN) */}
      <section id="consultorio" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
                Ambiente Preparado para Famílias
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Consultório no Edifício Cosmopolitan (Sala 112)
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Localizado no coração da Várzea, em Teresópolis, o <strong>Edifício Comercial Cosmopolitan</strong> oferece 
                fácil acesso, elevadores modernos e infraestrutura segura. A <strong>Sala 112</strong> foi projetada 
                especialmente para proporcionar acolhimento pediátrico:
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-700">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span><strong>Endereço:</strong> R. Pref. Sebastião Teixeira, 354 - Sala 112 - Várzea, Teresópolis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-700">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span><strong>Horários:</strong> Segunda a Sexta, das 08:30 às 17:00 (Com hora marcada)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-700">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <span><strong>Recepção Andressa:</strong> Atendimento caloroso e acolhimento desde a porta de entrada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-700">
                    <FileCheck className="h-4 w-4" />
                  </div>
                  <span><strong>Reembolso Facilitado:</strong> Emissão de nota e recibo médico completo com CRM e RQE</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver Rotas no Google Maps</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-3 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp da Recepção: (21) 99313-9913</span>
                </a>
              </div>
            </div>

            {/* Mapa Embutido Interativo */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-md">
                <iframe
                  title="Localização Dra Juliana Linhares - Edifício Cosmopolitan"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7788410214354!2d-42.97341992383561!3d-22.41857942154406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b45781a7ee5f%3A0x8898165cf25dc8be!2sR.%20Pref.%20Sebasti%C3%A3o%20Teixeira%2C%20354%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-201!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROVA SOCIAL: 79 AVALIAÇÕES 5 ESTRELAS */}
      <section id="depoimentos" className="py-16 bg-[#FAFAF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <span className="block text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Depoimentos Reais do Google Maps
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              100% de Avaliações 5 Estrelas de Mães e Pais
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A tranquilidade de colocar a saúde do seu filho nas mãos de uma profissional com reputação consagrada em toda a Região Serrana.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-emerald-700 font-medium">{t.child}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 border border-emerald-200/70 text-xs font-medium text-emerald-800">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span>Destaque nas avaliações: "Consultas de 1 hora sem pressa, carinho com os bebês e atendimento atencioso da secretária Andressa."</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIMULADOR DE TRIAGEM & AGENDAMENTO PRÉ-FILTRADO */}
      <section id="triagem" className="py-16 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-b from-[#F4FBF7] to-white p-6 shadow-lg sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
                Agendamento Rápido & Personalizado
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Triagem para Consulta Pediátrica
              </h2>
              <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                Preencha os dados abaixo para enviar uma mensagem estruturada diretamente para a secretária Andressa no WhatsApp, agilizando seu agendamento.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nome do Responsável (Mãe/Pai)
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Ex: Marcela Rodrigues"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nome da Criança
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Ex: Ethan"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Idade da Criança
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="Recém-nascido (até 28 dias)">Recém-nascido (até 28 dias)</option>
                    <option value="Bebê de 1 a 6 meses">Bebê de 1 a 6 meses</option>
                    <option value="Bebê de 6 a 12 meses (Introdução Alimentar)">Bebê de 6 a 12 meses (Introdução Alimentar)</option>
                    <option value="1 a 3 anos (Primeira Infância)">1 a 3 anos (Primeira Infância)</option>
                    <option value="4 a 7 anos (Pré-escolar)">4 a 7 anos (Pré-escolar)</option>
                    <option value="8 anos ou mais (Escolar)">8 anos ou mais (Escolar)</option>
                    <option value="Ainda gestante (Consulta Pré-Natal)">Ainda gestante (Consulta Pré-Natal)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Motivo da Consulta
                  </label>
                  <select
                    value={consultReason}
                    onChange={(e) => setConsultReason(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="Puericultura / Primeira Consulta do Bebê">Puericultura / Primeira Consulta do Bebê</option>
                    <option value="Acompanhamento Mensal de Crescimento">Acompanhamento Mensal de Crescimento</option>
                    <option value="Introdução Alimentar / Nutrologia (BLW)">Introdução Alimentar / Nutrologia (BLW)</option>
                    <option value="Seletividade Alimentar / Dificuldade para Comer">Seletividade Alimentar / Dificuldade para Comer</option>
                    <option value="Suspeita de Alergia / Refluxo / APLV">Suspeita de Alergia / Refluxo / APLV</option>
                    <option value="Check-up de Rotina / Avaliação Escolar">Check-up de Rotina / Avaliação Escolar</option>
                    <option value="Consulta Pré-Natal com Pediatra">Consulta Pré-Natal com Pediatra</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Turno de Preferência
                </label>
                <div className="mt-2 flex gap-4">
                  {["Manhã", "Tarde", "Qualquer Horário"].map((shift) => (
                    <label
                      key={shift}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border py-2.5 text-xs font-medium transition ${
                        preferredShift === shift
                          ? "border-emerald-600 bg-emerald-50 text-emerald-800 font-bold"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredShift"
                        value={shift}
                        checked={preferredShift === shift}
                        onChange={() => setPreferredShift(shift)}
                        className="sr-only"
                      />
                      <span>{shift}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Observações ou Queixas Principais (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Gostaria de alinhar a introdução alimentar e tirar dúvidas sobre ganho de peso."
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 py-4 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Enviar para a Secretária Andressa no WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Atendimento rápido de segunda a sexta até 17h. Seus dados são confidenciais e utilizados apenas para a triagem.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FAQ COMPLETO PARA PAIS */}
      <section id="faq" className="py-16 bg-[#FAFAF9] border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Perguntas Frequentes sobre as Consultas
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-emerald-700"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ INSTITUCIONAL */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-base font-bold text-slate-900">
                Dra. Juliana Linhares
              </span>
              <p className="mt-1 text-xs text-emerald-700 font-semibold">
                Pediatria & Nutrologia Pediátrica
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Cuidado pediátrico afetivo com rigor científico. Puericultura do 1º ano, introdução alimentar e acolhimento humanizado para toda a família.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                O Consultório
              </span>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Edifício Comercial Cosmopolitan<br />
                R. Pref. Sebastião Teixeira, 354 - Sala 112<br />
                Várzea, Teresópolis - RJ, 25953-201
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Contato & Recepção
              </span>
              <p className="mt-2 text-xs text-slate-600">
                Secretária: Andressa<br />
                WhatsApp: {phoneDisplay}<br />
                Segunda a Sexta até às 17:00
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Informações Legais
              </span>
              <p className="mt-2 text-xs text-slate-600">
                CRM-RJ • RQE Pediatria<br />
                Consultas particulares com emissão de recibo para reembolso no plano de saúde.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Dra. Juliana Linhares — Pediatria e Nutrologia Pediátrica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* 10. BARRA FLUTUANTE FIXA MOBILE (1 TOQUE NO WHATSAPP COM A ANDRESSA) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-900/10 bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="block text-xs font-bold text-slate-900">Dra. Juliana Linhares</span>
            <span className="block text-[11px] text-emerald-700 font-medium">Recepção: Andressa</span>
          </div>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Agendar Consulta</span>
          </a>
        </div>
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Dra.%20Juliana%20Linhares%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
