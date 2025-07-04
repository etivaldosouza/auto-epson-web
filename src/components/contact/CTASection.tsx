
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const phoneNumber = "5598989116486";
  const message = "Olá! Gostaria de saber mais sobre os serviços da Display Informática.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Nossa Filial - Mais Uma Opção Para Você
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Agora você tem ainda mais facilidade para cuidar dos seus equipamentos! 
          Nossa nova filial oferece mais uma opção conveniente para que você possa 
          trazer seus equipamentos para manutenção, suporte técnico e atendimento especializado.
        </p>
      </div>

      {/* Imagem da filial */}
      <div className="mb-8 flex justify-center">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 w-fit">
          <div className="h-64 md:h-80 lg:h-96 overflow-hidden">
            <img 
              src="/lovable-uploads/80bffb9e-d389-4eef-a5b2-d643dbe8c231.png" 
              alt="Fachada da Filial Display Informática - Olho D'água"
              className="h-full object-contain bg-slate-50"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Informações da Filial */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🏢</span>
            <h3 className="text-2xl font-semibold">Filial Turu</h3>
          </div>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start">
              <span className="text-brand-400 mr-3 mt-1">📍</span>
              <div>
                <p className="font-medium">Rua Um - Olho D'agua, São Luís - MA, 65070-000</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-brand-400 mr-3">⏰</span>
              <p>Horário de funcionamento: Segunda a Sexta</p>
            </div>
            <div className="flex items-center">
              <span className="text-brand-400 mr-3">🔧</span>
              <p>Atendimento técnico especializado</p>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Visite Nossa Filial</h4>
            <a 
              href="https://maps.app.goo.gl/ZbuUFJQEpST2ku2c6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium text-lg mb-6"
            >
              📍 Ver Localização no Maps
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <h4 className="text-lg font-semibold mb-4 text-center">Entre em contato conosco</h4>
            <div className="flex justify-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 text-white hover:bg-green-700 shadow-lg">
                  💬 WhatsApp: (98) 98911-6486
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
