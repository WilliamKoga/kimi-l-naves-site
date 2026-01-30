import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Zap, Ticket, AlertCircle, Lock, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const lotes = [
  {
    id: 1,
    name: 'LOTE 1 - EARLY ACCESS',
    badge: 'ESGOTADO',
    badgeColor: 'bg-red-500/20 text-red-500 border-red-500/40',
    vagas: 30,
    precoBase: 50000,
    imposto: 10,
    precoFinal: 55000,
    disponivel: false,
    destaque: false,
    features: [
      'Acesso aos 2 dias do evento presencial',
      'Módulo Preparatório Online',
      'Certificado Internacional IMTA',
      'Método Naves de Reprogramação Mental®',
      'Material didático completo',
      'Coffee break nos dois dias',
      'Kit do participante',
    ],
    cta: 'ESGOTADO',
    link: '/checkout/lote-1',
  },
  {
    id: 2,
    name: 'LOTE 2 - VALOR INTEGRAL',
    badge: 'RESTAM POUCAS VAGAS',
    badgeColor: 'bg-gold/20 text-gold border-gold/40',
    vagas: 20, // Adjusted to give urgency
    precoBase: 70000,
    imposto: 10,
    precoFinal: 77000,
    disponivel: true,
    destaque: true,
    features: [
      'Acesso aos 2 dias do evento presencial',
      'Módulo Preparatório Online',
      'Certificado Internacional IMTA',
      'Método Naves de Reprogramação Mental®',
      'Material didático completo',
      'Coffee break nos dois dias',
      'Kit do participante',
    ],
    cta: 'GARANTIR VAGA',
    link: '/checkout/lote-2',
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 0,
  }).format(value);
};

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="ingressos" className="py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            INGRESSOS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-off-white mb-4">
            Escolha seu lote
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Virada de lote automática por quantidade.
            Não haverá descontos posteriores.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {lotes.map((lote, index) => (
            <motion.div
              key={lote.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${lote.destaque ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Destaque Badge */}
              {lote.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-indigo-deep font-bold text-sm shadow-gold">
                    <Star className="w-4 h-4" />
                    RECOMENDADO
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-3xl overflow-hidden ${lote.destaque
                  ? 'border-2 border-gold shadow-gold-lg'
                  : 'border border-gray-500/30 opacity-70'
                  }`}
              >
                {/* Card Header */}
                <div className={`p-8 ${lote.destaque ? 'bg-gold/10' : 'glass'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${lote.badgeColor}`}>
                      {lote.badge}
                    </span>
                    <div className={`flex items-center gap-2 text-sm ${lote.disponivel ? 'text-gray-400' : 'text-gray-500'}`}>
                      {lote.disponivel ? (
                        <>
                          <Ticket className="w-4 h-4" />
                          {lote.vagas} vagas
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Indisponível
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className={`font-serif text-2xl mb-2 ${lote.disponivel ? 'text-off-white' : 'text-gray-400'}`}>
                    {lote.name}
                  </h3>

                  {/* Price - Only for available lot */}
                  {lote.disponivel ? (
                    <div className="mt-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-400 text-sm line-through">
                          {formatCurrency(lote.precoFinal! + 20000)}
                        </span>
                        <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold">
                          ECONOMIA DE {formatCurrency(22000)}
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="text-gray-400 text-sm">
                          {formatCurrency(lote.precoBase!)} + {lote.imposto}% imposto
                        </span>
                      </div>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-bold text-gradient-gold">
                          {formatCurrency(lote.precoFinal!)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        Valor final com imposto incluso
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6">
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-500/10 border border-gray-500/30">
                        {lote.badge === 'ESGOTADO' ? (
                          <>
                            <AlertCircle className="w-6 h-6 text-red-500" />
                            <div>
                              <p className="text-red-500 font-bold">VENDAS ENCERRADAS</p>
                              <p className="text-gray-400 text-sm">Este lote não está mais disponível.</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <Clock className="w-6 h-6 text-gray-400" />
                            <div>
                              <p className="text-gray-400 text-sm">Abertura do lote:</p>
                              <p className="text-off-white font-semibold">
                                Após venda dos 30 ingressos do Early Access
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="mt-4 text-center">
                        {lote.badge !== 'ESGOTADO' && <span className="text-gray-500 text-lg">Preço a definir</span>}
                      </div>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className={`p-8 ${lote.disponivel ? 'glass-light' : 'glass opacity-60'}`}>
                  <p className={`font-semibold mb-4 flex items-center gap-2 ${lote.disponivel ? 'text-off-white' : 'text-gray-400'}`}>
                    <Zap className={`w-5 h-5 ${lote.disponivel ? 'text-gold' : 'text-gray-500'}`} />
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {lote.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-3 ${lote.disponivel ? 'text-gray-300' : 'text-gray-500'}`}>
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${lote.disponivel ? 'text-gold' : 'text-gray-600'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {lote.disponivel && lote.link ? (
                    <Button
                      className="w-full mt-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 bg-gradient-gold text-indigo-deep hover:shadow-gold-lg hover:scale-[1.02]"
                      onClick={() => navigate(lote.link!)}
                    >
                      {lote.cta}
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className="w-full mt-8 py-6 text-lg font-bold rounded-xl bg-gray-500/20 text-gray-500 border border-gray-500/30 cursor-not-allowed"
                    >
                      <Lock className="w-5 h-5 mr-2" />
                      {lote.cta}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-red-jp/10 border border-red-jp/30">
            <AlertCircle className="w-6 h-6 text-red-jp flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-red-jp font-semibold mb-1">
                Importante
              </h4>
              <p className="text-gray-400 text-sm">
                O ingresso é individual e intransferível. A virada de lote é automática
                assim que os ingressos do lote anterior esgotarem. Recomendamos garantir
                sua vaga no Lote 1 para garantir o melhor preço.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Pagamento online seguro • Confirmação automática de inscrição •
            Valor com imposto já calculado no checkout
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
