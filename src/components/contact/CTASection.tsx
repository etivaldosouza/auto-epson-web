
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Precisa de Atendimento Urgente?
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Para questões urgentes relacionadas ao suporte técnico, 
        entre em contato conosco diretamente
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-brand text-white hover:bg-brand-700">
          Ligar Agora: (11) 99999-9999
        </Button>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
          WhatsApp: (11) 99999-9999
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
