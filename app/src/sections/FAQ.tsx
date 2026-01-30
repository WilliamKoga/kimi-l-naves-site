import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle, CreditCard, RefreshCw, Award, Car, UserCheck } from 'lucide-react';

const faqs = [
  {
    icon: CreditCard,
    pergunta: 'Quais são as formas de pagamento?',
    resposta: 'O pagamento é realizado 100% online através da nossa plataforma segura. Aceitamos cartões de crédito, débito e outras formas de pagamento digital. O valor final com imposto (10%) já está calculado no checkout, não havendo custos adicionais.',
  },
  {
    icon: RefreshCw,
    pergunta: 'Qual é a política de reembolso?',
    resposta: 'Você tem até 7 dias após a compra para solicitar reembolso, desde que o evento ainda não tenha ocorrido. Após este prazo ou início do evento, não será possível realizar reembolsos. Em caso de cancelamento do evento por parte da organização, o valor integral será devolvido.',
  },
  {
    icon: Award,
    pergunta: 'Como funciona o certificado internacional?',
    resposta: 'O certificado é emitido pela International Mind Training Academy (IMTA), empresa americana regularmente constituída em Miami, FL. O certificado é reconhecido internacionalmente e comprova sua formação no Método Naves de Reprogramação Mental®. Será entregue ao final do segundo dia de evento.',
  },
  {
    icon: Car,
    pergunta: 'Há estacionamento disponível no local?',
    resposta: 'Sim, o Toyota City Cultural Hall possui estacionamento disponível para participantes do evento sem custo adicional. Recomendamos chegar com antecedência para garantir vaga.',
  },
  {
    icon: UserCheck,
    pergunta: 'Preciso ter formação acadêmica para participar?',
    resposta: 'Não é necessário formação acadêmica prévia para participar da formação. A Hipnose Clínica é uma área livre e você poderá atuar como hipnoterapeuta após a conclusão do curso. Se já possuir formação em áreas relacionadas (psicologia, medicina, etc.), a hipnoterapia é reconhecida como ferramenta legítima pela maioria dos conselhos profissionais.',
  },
  {
    icon: HelpCircle,
    pergunta: 'O ingresso pode ser transferido para outra pessoa?',
    resposta: 'Não, o ingresso é individual e intransferível. O nome do participante na inscrição deve corresponder ao documento de identificação apresentado no dia do evento.',
  },
  {
    icon: HelpCircle,
    pergunta: 'O que acontece se o lote esgotar?',
    resposta: 'A virada de lote é automática assim que os ingressos de um lote esgotarem. Quando os 30 ingressos do Lote 1 (Early Access) acabarem, o valor passa automaticamente para o Lote 2 (Valor Integral). Recomendamos garantir sua vaga o quanto antes.',
  },
  {
    icon: HelpCircle,
    pergunta: 'Haverá material de apoio durante o evento?',
    resposta: 'Sim, todos os participantes recebem material didático completo, incluindo apostilas, scripts de hipnose, ficha de anamnese e o kit exclusivo do Instituto Lucas Naves (caderno, caneta e itens personalizados).',
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-off-white mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira as respostas para as perguntas mais comuns sobre o evento
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl overflow-hidden glass border border-gold/10 hover:border-gold/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center gap-4 text-left"
              >
                <div className="p-2 rounded-lg bg-gold/10 flex-shrink-0">
                  <faq.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="flex-1 font-serif text-lg text-off-white">
                  {faq.pergunta}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-12 border-l-2 border-gold/20">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <a
            href="mailto:contato@lucasnaves.com.br"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gold/50 text-gold hover:bg-gold/10 transition-colors"
          >
            FALAR COM O SUPORTE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
