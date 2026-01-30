import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CreditCard, Monitor, Users, Award } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: CreditCard,
    title: 'Inscrição Online',
    description: 'Realize sua inscrição de forma rápida e segura através da nossa plataforma de pagamento. O valor com imposto já está calculado no checkout.',
    details: ['Pagamento 100% seguro', 'Confirmação automática', 'Ticket digital enviado por e-mail'],
  },
  {
    number: '02',
    icon: Monitor,
    title: 'Módulo Preparatório',
    description: 'Após a confirmação, você recebe acesso imediato ao Módulo Preparatório Online para nivelar seus conhecimentos antes do evento.',
    details: ['Acesso imediato', 'Material em vídeo', 'Obrigatório antes do evento'],
  },
  {
    number: '03',
    icon: Users,
    title: 'Dia 1 - Presencial (18/04)',
    description: 'Chegou o grande dia! Aprenda as técnicas fundamentais da hipnose clínica com práticas supervisionadas e networking com outros alunos.',
    details: ['Das 9h às 18h', 'Práticas em grupo', 'Coffee break incluso'],
  },
  {
    number: '04',
    icon: Award,
    title: 'Dia 2 + Certificação (19/04)',
    description: 'Aprofunde nas técnicas avançadas e receba seu certificado internacional IMTA ao final do dia.',
    details: ['Técnicas avançadas', 'Práticas finais', 'Entrega do certificado'],
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            COMO FUNCIONA
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-off-white mb-4">
            Sua jornada de transformação
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Um processo simples e estruturado para garantir sua formação completa
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className={`p-8 rounded-2xl glass border border-gold/20 hover:border-gold/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                } max-w-lg`}>
                  <div className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="p-3 rounded-xl bg-gold/10">
                      <step.icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="font-serif text-4xl text-gold/30 font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl text-off-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'lg:justify-end' : ''
                  }`}>
                    {step.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-gold/10 text-gold-light text-xs"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-lg">
                  <span className="text-indigo-deep font-bold text-xl">{step.number}</span>
                </div>
              </div>

              {/* Empty Space for Layout */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl glass border border-gold/30">
            <p className="font-serif text-2xl text-off-white mb-4">
              Pronto para começar sua transformação?
            </p>
            <p className="text-gray-400 mb-6">
              Vagas limitadas - Garanta sua participação agora mesmo
            </p>
            <button
              onClick={() => document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-gradient-gold text-indigo-deep font-bold text-lg shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
            >
              QUERO ME INSCREVER AGORA
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
