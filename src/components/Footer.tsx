
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/097f8e1d-be2b-4d59-aa44-4f4b1da9cb72.png" 
                alt="Display Informática Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-xl font-bold">
                  <span className="text-red-500">Display</span>{" "}
                  <span className="text-blue-500">Informática</span>
                </span>
                <span className="text-sm text-gray-300 block">Soluções em TI</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas em soluções de tecnologia da informação. 
              Oferecemos produtos e serviços de qualidade com suporte técnico especializado.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/epsonmaranhao?igsh=ZDN1cWdnMmR5dXBh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 hover:border-pink-600 transition-colors bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500">
                <Instagram size={20} className="text-white" />
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
              <p>displayautomacao_adm@outlook.com</p>
              <p>Rua R, Quadra 8, Nº 20<br />Planalto Anil 3 - São Luís - MA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Display Informática. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
