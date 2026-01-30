import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, GraduationCap, Star, Trophy } from 'lucide-react';

const conquistas = [
  {
    icon: GraduationCap,
    title: 'Mestre em Neurociências',
    description: 'University of Orlando (UNIORLANDO)',
  },
  {
    icon: Award,
    title: 'Pós-graduado',
    description: 'Neurociência pela PUC',
  },
  {
    icon: Trophy,
    title: 'Doutor Honoris Causa',
    description: 'Em Psicanálise',
  },
  {
    icon: Star,
    title: 'Master Trainer em PNL',
    description: 'Formação direta com John Grinder e Richard Bandler',
  },
];

const livros = [
  'Hipnose Clínica com PNL',
  'PNL na Prática',
  'Auto-Hipnose Terapêutica',
  'Arquétipos na Prática',
  'Afortunadamente',
  'Visualizar, Sentir e Agir',
];

const Instructor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Area */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/30 to-gold/5" />

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              {/* Lucas Naves Photo */}
              <img
                src="https://storage.googleapis.com/msgsndr/i63H4RmsfFeVMc87xSaI/media/697b779ba74ce67d518e8807.jpg"
                alt="Lucas Naves"
                className="w-full h-full object-cover object-top"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/80 via-transparent to-transparent" />

              {/* Name Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-xl glass border border-gold/30">
                  <p className="font-serif text-2xl text-off-white mb-1">Lucas Naves</p>
                  <p className="text-gold text-sm">Criador do Método Naves de Reprogramação Mental®</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl bg-gradient-gold shadow-gold-lg"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-deep">40K+</div>
                <div className="text-indigo-deep/80 text-xs">Alunos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
              SEU INSTRUTOR
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-off-white mb-6 leading-tight">
              Aprenda com a
              <span className="text-gradient-gold block">Maior Autoridade da América Latina</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Lucas Naves é reconhecido como a maior autoridade em Hipnose Clínica da América Latina,
              tendo formado mais de 40.000 alunos em cursos e treinamentos no Brasil e no exterior.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              É também o professor com o maior número de alunos na área e número 1 na Hotmart
              em avaliações e vendas, plataforma referência mundial em educação online.
            </p>

            {/* Conquistas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {conquistas.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl glass border border-gold/10"
                >
                  <div className="p-2 rounded-lg bg-gold/10 flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-off-white font-semibold text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Livros */}
            <div className="p-6 rounded-2xl glass border border-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-gold" />
                <h4 className="font-serif text-lg text-off-white">
                  Autor de 6 Best-sellers
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {livros.map((livro, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-gold/10 text-gold-light text-sm"
                  >
                    {livro}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
