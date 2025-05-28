
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Supply {
  name: string;
  description: string;
  specifications: string[];
}

interface SuppliesSectionProps {
  supplies: Supply[];
}

const SuppliesSection = ({ supplies }: SuppliesSectionProps) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-12 mb-20">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
        Suprimentos Originais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {supplies.map((supply, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{supply.name}</h3>
              <p className="text-gray-600 mb-4">{supply.description}</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                {supply.specifications.map((spec, specIndex) => (
                  <li key={specIndex}>• {spec}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Adicionar ao Orçamento
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuppliesSection;
