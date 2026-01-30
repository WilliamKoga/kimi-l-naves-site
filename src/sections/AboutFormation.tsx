import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Award, Brain, Heart, Sparkles, Globe, BookOpen } from 'lucide-react';

const beneficios = [
  'Técnica breve e eficaz - resultados em poucas sessões',
  'Não necessita formação acadêmica prévia',
  'Reconhecida pela maioria dos conselhos profissionais',
  'Certificação internacional válida mundialmente',
  'Método exclusivo desenvolvido por Lucas Naves',
  'Alto valor de mercado como hipnoterapeuta',
];

const diferenciais = [
  {
    icon: Brain,
    title: 'Neurociência Aplicada',
    description: 'Técnicas baseadas em evidências científicas e neurociência contemporânea',
  },
  {
    icon: Heart,
    title: 'Transformação Real',
    description: 'Protocolos testados e validados com milhares de alunos ao redor do mundo',
  },
  {
    icon: Globe,
    title: 'Certificação Internacional',
    description: 'Certificado reconhecido pela IMTA - International Mind Training Academy',
  },
  {
    icon: BookOpen,
    title: 'Material Completo',
    description: 'Acesso a todo material didático e recursos exclusivos do método',
  },
];

const AboutFormation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
              SOBRE A FORMAÇÃO
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl text-off-white mb-6 leading-tight">
              Uma Formação que
              <span className="text-gradient-gold block">Transcende Fronteiras</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              A Hipnose Clínica é reconhecida pela ciência como uma terapia breve e eficaz. 
              Em poucas sessões, você consegue obter resultados duradouros com seus pacientes, 
              sem depender de inumeráveis sessões como na terapia tradicional.
            </p>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              O <span className="text-gold font-semibold">Método Naves de Reprogramação Mental®</span> é 
              o resultado de anos de pesquisa e prática clínica, combinando neurociência, 
              hipnose e PNL em um sistema completo e aplicável.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-off-white/90">{beneficio}</span>
                </motion.div>
              ))}
            </div>

            {/* IMTA Badge */}
            <div className="p-6 rounded-2xl glass border border-gold/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold/10">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-off-white mb-2">
                    Certificação Internacional IMTA
                  </h4>
                  <p className="text-gray-400 text-sm">
                    A International Mind Training Academy® é uma empresa americana 
                    regularmente constituída nos Estados Unidos, em Miami, FL. 
                    Seu certificado é reconhecido mundialmente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {diferenciais.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl glass border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-gold/10 w-fit mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-off-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-gold" />
                <span className="text-gold font-semibold">Números que Inspiram</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-serif text-3xl text-off-white mb-1">40.000+</div>
                  <div className="text-gray-400 text-xs">Alunos formados</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl text-off-white mb-1">#1</div>
                  <div className="text-gray-400 text-xs">Na Hotmart</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl text-off-white mb-1">15+</div>
                  <div className="text-gray-400 text-xs">Países</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFormation;
