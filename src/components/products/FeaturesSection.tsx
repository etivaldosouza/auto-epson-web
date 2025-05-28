
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "✅",
      title: "Produtos Originais",
      description: "Todos os produtos são originais Epson com garantia oficial e certificação de qualidade"
    },
    {
      icon: "🚚",
      title: "Entrega Rápida",
      description: "Entregamos em toda a região com agilidade e segurança, produtos em estoque saem no mesmo dia"
    },
    {
      icon: "🔧",
      title: "Instalação Inclusa",
      description: "Instalação e configuração gratuita realizada por técnicos especializados Epson"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {features.map((feature, index) => (
        <Card key={index} className="text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeaturesSection;
