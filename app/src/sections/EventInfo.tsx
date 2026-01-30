import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Car, Globe } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const infoCards = [
  {
    icon: Calendar,
    title: 'Data do Evento',
    content: '18 e 19 de Abril de 2026',
    subContent: 'Sábado e Domingo',
    highlight: '2 dias intensivos',
  },
  {
    icon: MapPin,
    title: 'Local',
    content: 'Toyota City Cultural Hall',
    subContent: 'Toyota - Aichi, Japão',
    highlight: 'Estacionamento disponível',
  },
  {
    icon: Users,
    title: 'Vagas Limitadas',
    content: '80 participantes',
    subContent: 'Turma exclusiva e intimista',
    highlight: 'Apenas 80 vagas',
  },
  {
    icon: Clock,
    title: 'Horário',
    content: 'Das 9h às 18h',
    subContent: 'Nos dois dias',
    highlight: 'Intervalo para almoço',
  },
  {
    icon: Car,
    title: 'Estacionamento',
    content: 'Disponível no local',
    subContent: 'Sem custo adicional',
    highlight: 'Fácil acesso',
  },
  {
    icon: Globe,
    title: 'Idioma',
    content: 'Português',
    subContent: 'Material em português',
    highlight: 'Certificado internacional',
  },
];

const EventInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            INFORMAÇÕES DO EVENTO
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-off-white mb-4">
            Tudo que você precisa saber
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma experiência presencial única, cuidadosamente planejada para oferecer 
            o máximo de aprendizado e transformação
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <card.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-off-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gold-light font-semibold text-lg">
                      {card.content}
                    </p>
                    <p className="text-gray-400 text-sm mb-2">
                      {card.subContent}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                      {card.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-gold/10 to-blue-night/50 border border-gold/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl text-off-white mb-2">
                Evento 100% Presencial
              </h3>
              <p className="text-gray-400">
                Não haverá transmissão online. A experiência presencial é fundamental 
                para a prática das técnicas de hipnose clínica.
              </p>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gold/20 border border-gold/40">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold font-semibold">Confirmação automática</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventInfo;
