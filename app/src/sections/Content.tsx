import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Brain, Sparkles, Moon, Heart, Star } from 'lucide-react';

const modulos = [
  {
    dia: 'Módulo Preparatório',
    titulo: 'Fundamentos da Hipnose Clínica',
    icon: Moon,
    topicos: [
      'História da Hipnose',
      'Pre Talk - Como preparar o paciente',
      'Rapport - Criando conexão',
      'Yes Set - Técnica de indução',
      'Níveis de Transe',
      'Modelo da Mente',
    ],
  },
  {
    dia: 'Dia 1 - Presencial',
    titulo: 'Técnicas Fundamentais',
    icon: Brain,
    topicos: [
      'Os 16 Pressupostos da Hipnose',
      'Estratégias para Consulta de Avaliação',
      'Ficha de Anamnese',
      'Testes de Suscetibilidade',
      'Os 4 Passos da Hipnose',
      'Princípios das Induções',
      'Principais Induções Hipnóticas',
      'Adaptações para Atendimento Online',
    ],
  },
  {
    dia: 'Dia 2 - Presencial',
    titulo: 'Técnicas Avançadas',
    icon: Sparkles,
    topicos: [
      'Padrões Hipnóticos de Linguagem',
      'Princípios das Sugestões Hipnóticas',
      'Auto-Hipnose no Modelo Lucas Naves',
      'Pirâmide de Lucas Naves',
      'Os 4 Passos da Reprogramação Mental',
      'Técnicas de Ressignificação',
      'Cancelamento de Crenças Limitantes',
      'Técnica de Anestesia Hipnótica',
      'Técnicas para Controle de Dor',
      'Metáforas e Histórias Hipnóticas',
      'Técnicas de PNL para Hipnoterapia',
      'Protocolo de Regressão por Emoção',
      'Técnica de Progressão de Idade',
      'Técnica de Reforço Positivo',
    ],
  },
];

const Content = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            CONTEÚDO PROGRAMÁTICO
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-off-white mb-4">
            O que você vai aprender
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Um currículo completo e estruturado para transformar você em um 
            hipnoterapeuta de excelência
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {modulos.map((modulo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden glass border border-gold/20"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gold/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gold/10">
                    <modulo.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-gold text-sm font-medium block mb-1">
                      {modulo.dia}
                    </span>
                    <h3 className="font-serif text-xl text-off-white">
                      {modulo.titulo}
                    </h3>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gold transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gold/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {modulo.topicos.map((topico, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gold/5"
                        >
                          <Star className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{topico}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-gold" />
            <h3 className="font-serif text-2xl text-off-white">
              Bônus Exclusivos
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Módulo Preparatório Online (valor: ¥8.000)',
              'Mini Curso "A Terapia Sob Medida" (valor: ¥8.000)',
              'Ficha de Anamnese pronta para uso (valor: ¥3.000)',
              'Kit do Instituto Lucas Naves (valor: ¥1.500)',
            ].map((bonus, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-off-white/90 text-sm">{bonus}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gold/20">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Valor total dos bônus:</span>
              <span className="text-gold font-bold text-lg">¥20.500</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-off-white font-semibold">Você paga:</span>
              <span className="text-green-400 font-bold text-xl">¥0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
