import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, AlertCircle, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-indigo-medium to-indigo-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-jp/20 border border-red-jp/40 text-red-jp font-semibold">
              <AlertCircle className="w-5 h-5" />
              VAGAS LIMITADAS
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-off-white mb-6 leading-tight">
            Não perca esta
            <span className="text-gradient-gold block">oportunidade única</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Uma experiência presencial exclusiva no Japão para transformar sua vida 
            e sua carreira com a Hipnose Clínica
          </p>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl glass border border-gold/30">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-off-white">18 e 19 de Abril de 2026</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl glass border border-gold/30">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-off-white">Toyota City, Aichi - Japão</span>
            </div>
          </motion.div>

          {/* Price Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-gray-400 mb-2">A partir de</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-6xl font-bold text-gradient-gold">
                ¥55.000
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Lote 1 - Early Access (imposto incluso)
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <Button
              onClick={() => document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-gold text-indigo-deep font-bold px-12 py-8 text-xl rounded-2xl shadow-gold-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              GARANTIR MINHA VAGA AGORA
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Pagamento 100% seguro
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Confirmação automática
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Certificado internacional
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
