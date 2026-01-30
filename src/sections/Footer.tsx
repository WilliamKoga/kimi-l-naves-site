import { Mail, Instagram, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-off-white mb-4">
              Instituto <span className="text-gold">Lucas Naves</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              A maior autoridade em Hipnose Clínica da América Latina, 
              formando hipnoterapeutas de excelência desde 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lucasnaves"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/lucasnaves"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://lucasnaves.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-off-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Sobre o Evento
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Ingressos
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Termos de Compra
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-off-white mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@lucasnaves.com.br"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contato@lucasnaves.com.br
              </a>
              <p className="text-gray-400 text-sm">
                <span className="block text-gold mb-1">Local do Evento:</span>
                Toyota City Cultural Hall<br />
                Toyota - Aichi, Japão
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Instituto Lucas Naves LTDA - CNPJ 28.681.968/0001-40
              <br />
              Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs">
                Certificação internacional IMTA
              </span>
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold text-xs font-bold">IMTA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
