
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-xl font-bold">Display Informática</span>
                <span className="text-sm text-gray-300 block">Soluções em TI</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas em soluções de tecnologia da informação. 
              Oferecemos produtos e serviços de qualidade com suporte técnico especializado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-300 hover:text-brand-400 transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-brand-400 transition-colors">Serviços</Link></li>
              <li><Link to="/produtos" className="text-gray-300 hover:text-brand-400 transition-colors">Produtos</Link></li>
              <li><Link to="/suporte" className="text-gray-300 hover:text-brand-400 transition-colors">Suporte</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>(98) 98802-3736</p>
              <p>contato@displayinformatica.com.br</p>
              <p>Rua R, Quadra 8, Nº 20<br />Planalto Anil 3 - São Luís - MA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Display Informática. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
