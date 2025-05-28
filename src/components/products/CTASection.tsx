
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        Encontrou o Produto Ideal?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Entre em contato conosco para receber um orçamento personalizado 
        com os melhores preços e condições especiais
      </p>
      <Button size="lg" className="bg-blue-400 text-slate-900 hover:bg-blue-500">
        Solicitar Orçamento Completo
      </Button>
    </div>
  );
};

export default CTASection;
