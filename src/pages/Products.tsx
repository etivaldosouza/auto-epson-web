import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const printerCategories = [
    {
      category: "Impressoras Multifuncionais",
      products: [
        {
          name: "Epson L3250",
          description: "Impressora multifuncional com tanque de tinta, ideal para home office e pequenos escritórios.",
          features: ["Tanque de tinta", "Wi-Fi", "Cópia/Impressão/Scanner", "Baixo custo por página"],
          price: "A partir de R$ 590,00",
          image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&h=300",
          popular: true,
        },
        {
          name: "Epson M2170",
          description: "Impressora monocromática com tanque de tinta para alto volume de impressão.",
          features: ["Tanque de tinta", "Monocromática", "Wi-Fi", "Alta capacidade"],
          price: "A partir de R$ 890,00",
          image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&h=300",
          popular: false,
        },
        {
          name: "Epson WorkForce WF-2860",
          description: "Impressora multifuncional com cartucho individual, perfeita para escritórios.",
          features: ["Cartucho individual", "Wi-Fi Direct", "Impressão duplex", "Scanner ADF"],
          price: "A partir de R$ 750,00",
          image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&h=300",
          popular: true,
        },
        {
          name: "Epson XP-4101",
          description: "Impressora compacta multifuncional com conectividade wireless e design elegante.",
          features: ["Compacta", "Wi-Fi", "Impressão móvel", "Display LCD"],
          price: "A partir de R$ 450,00",
          image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&h=300",
          popular: false,
        },
        {
          name: "Epson SureColor T3170",
          description: "Impressora profissional para grandes formatos, ideal para projetos gráficos.",
          features: ["Formato A1", "Qualidade fotográfica", "Rede Ethernet", "Tintas pigmentadas"],
          price: "A partir de R$ 3.890,00",
          image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&h=300",
          popular: false,
        },
      ],
    },
    {
      category: "Impressoras Matriciais",
      products: [
        {
          name: "Epson LX-350",
          description: "Impressora matricial robusta para documentos em formulário contínuo.",
          features: ["9 agulhas", "347 cps", "USB/Paralela", "Formulário contínuo"],
          price: "A partir de R$ 1.150,00",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
          popular: true,
        },
        {
          name: "Epson FX-890II",
          description: "Impressora matricial de alta velocidade para grandes volumes.",
          features: ["24 agulhas", "680 cps", "USB/Paralela/Serial", "Multi-cópia"],
          price: "A partir de R$ 1.890,00",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
          popular: false,
        },
      ],
    },
    {
      category: "Scanners",
      products: [
        {
          name: "Epson WorkForce DS-530",
          description: "Scanner de mesa com alimentador automático para documentos.",
          features: ["600x600 dpi", "35 ppm", "ADF 50 folhas", "USB 3.0"],
          price: "A partir de R$ 2.290,00",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
          popular: false,
        },
        {
          name: "Epson WorkForce ES-400",
          description: "Scanner portátil de alta qualidade para escritório.",
          features: ["600x600 dpi", "25 ppm", "Duplex", "Wi-Fi Direct"],
          price: "A partir de R$ 1.690,00",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300",
          popular: true,
        },
      ],
    },
  ];

  const supplies = [
    {
      name: "Tinta Original Epson",
      description: "Tintas originais para impressoras multifuncionais Epson",
      specifications: ["Cores vibrantes", "Longa duração", "Compatível com série L"],
      price: "R$ 25,90",
    },
    {
      name: "Fita para LX-350",
      description: "Fita original para impressora matricial Epson LX-350",
      specifications: ["Preta", "Longa duração", "Excelente qualidade de impressão"],
      price: "R$ 45,90",
    },
    {
      name: "Cartucho WorkForce",
      description: "Cartucho original para impressoras WorkForce",
      specifications: ["Individual por cor", "Alto rendimento", "Qualidade profissional"],
      price: "R$ 89,90",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Produtos <span className="text-yellow-400">Epson</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linha completa de impressoras, scanners e suprimentos Epson originais 
            com garantia oficial e suporte técnico especializado
          </p>
        </div>

        {/* Product Categories */}
        {printerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              {category.category}
            </h2>
            <div className={`grid gap-8 ${category.category === "Impressoras Multifuncionais" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
              {category.products.map((product, productIndex) => (
                <Card key={productIndex} className="hover:shadow-lg transition-shadow duration-300 relative">
                  {product.popular && (
                    <Badge className="absolute top-4 right-4 bg-yellow-400 text-slate-900">
                      Mais Vendido
                    </Badge>
                  )}
                  <CardHeader>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
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
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                      <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Supplies Section */}
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
                  <div className="text-2xl font-bold text-slate-900 mb-4">{supply.price}</div>
                  <Button variant="outline" className="w-full">
                    Adicionar ao Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Produtos Originais</h3>
              <p className="text-gray-600">
                Todos os produtos são originais Epson com garantia oficial e certificação de qualidade
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Entrega Rápida</h3>
              <p className="text-gray-600">
                Entregamos em toda a região com agilidade e segurança, produtos em estoque saem no mesmo dia
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Instalação Inclusa</h3>
              <p className="text-gray-600">
                Instalação e configuração gratuita realizada por técnicos especializados Epson
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Encontrou o Produto Ideal?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para receber um orçamento personalizado 
            com os melhores preços e condições especiais
          </p>
          <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
            Solicitar Orçamento Completo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
