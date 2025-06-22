
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AdditionalProduct {
  name: string;
  description: string;
}

interface AdditionalProductsSectionProps {
  products: AdditionalProduct[];
}

const AdditionalProductsSection = ({ products }: AdditionalProductsSectionProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const handleQuoteRequest = () => {
    if (!selectedProduct) return;
    
    const phoneNumber = "5598989116486"; // Número atualizado
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${selectedProduct}. Poderia me enviar mais informações sobre preços e condições?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        Produtos Adicionais
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Encontre tintas EcoTank Epson originais e bobinas térmicas para suas necessidades específicas
      </p>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900 text-center">
            Selecione um Produto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Escolha o produto desejado:
            </label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um produto..." />
              </SelectTrigger>
              <SelectContent>
                {products.map((product, index) => (
                  <SelectItem key={index} value={product.name}>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {selectedProduct && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Produto Selecionado:</h4>
              <p className="text-slate-700">{selectedProduct}</p>
            </div>
          )}
          
          <div className="flex justify-center">
            <Button 
              onClick={handleQuoteRequest}
              disabled={!selectedProduct}
              className="bg-blue-400 text-slate-900 hover:bg-blue-500 disabled:opacity-50"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionalProductsSection;
