
import { Button } from "@/components/ui/button";

const CTASection = () => {
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
              <Button className="bg-green-600 text-white hover:bg-green-700 shadow-lg">
                💬 WhatsApp: (98) 98802-3736
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
