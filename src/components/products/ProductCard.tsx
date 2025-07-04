
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
  popular: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleQuoteRequest = () => {
    const phoneNumber = "5598989116486"; // Número atualizado
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${product.name}. Poderia me enviar mais informações sobre preços e condições?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 relative">
      {product.popular && (
        <Badge className="absolute top-4 right-4 bg-blue-400 text-slate-900">
          Mais Vendido
        </Badge>
      )}
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded-lg mb-4 bg-gray-50"
        />
        <CardTitle className="text-xl text-slate-900">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 mb-2">Características:</h4>
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature, featureIndex) => (
              <Badge key={featureIndex} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Button 
            onClick={handleQuoteRequest}
            className="bg-blue-400 text-slate-900 hover:bg-blue-500"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
