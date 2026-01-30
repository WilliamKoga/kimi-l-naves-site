import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Sparkles, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Background Image - 1920x650 */}
      <div className="hidden lg:block absolute inset-0">
        <img
          src="https://storage.googleapis.com/msgsndr/i63H4RmsfFeVMc87xSaI/media/697b77934d56831256aea600.png"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-deep/70 via-indigo-deep/50 to-indigo-deep/90" />
      </div>

      {/* Mobile Background - Gradient only */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-indigo-deep via-indigo-medium to-blue-night" />

      {/* Decorative Circles - Only on mobile */}
      <div className="lg:hidden absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="lg:hidden absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Grid Pattern - Only on mobile */}
      <div
        className="lg:hidden absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              EVENTO PRESENCIAL EXCLUSIVO
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-off-white mb-6 leading-tight"
          >
            Formação em
            <br />
            <span className="text-gradient-gold">Hipnose Clínica</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gold-light/90 mb-8 font-light"
          >
            Uma experiência transformadora no coração do Japão
          </motion.p>

          {/* Event Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-off-white/80">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-sm sm:text-base">18 e 19 de Abril de 2026</span>
            </div>
            <div className="flex items-center gap-2 text-off-white/80">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-sm sm:text-base">Toyota City, Aichi - Japão</span>
            </div>
            <div className="flex items-center gap-2 text-off-white/80">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-sm sm:text-base">80 vagas limitadas</span>
            </div>
          </motion.div>

          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-red-jp/20 border border-red-jp/40">
              <div className="w-3 h-3 rounded-full bg-red-jp animate-pulse" />
              <span className="text-red-jp font-semibold text-sm sm:text-base">
                Apenas 30 ingressos no Lote Early Access
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <Button
              onClick={() => scrollToSection('ingressos')}
              className="bg-gradient-gold text-indigo-deep font-semibold px-8 py-6 text-lg rounded-xl shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
            <Button
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              className="border-gold/50 text-gold hover:bg-gold/10 px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              CONHECER O EVENTO
            </Button>
          </motion.div>

          {/* Decorative Element - Enso Circle - Only on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="0.5"
                strokeDasharray="400 565"
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#e8d5b7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gold/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
