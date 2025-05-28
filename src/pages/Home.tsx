import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Assistência Técnica
                <span className="text-brand-400 flex items-baseline gap-2 sm:gap-3">
                  Autorizada
                  <svg 
                    viewBox="0 0 120 40" 
                    className="h-[0.8em] inline-block"
                    fill="none"
                  >
                    <text 
                      x="10" 
                      y="28" 
                      fontSize="24" 
                      fontWeight="bold" 
                      fill="#7d93ff"
                      fontFamily="Arial, sans-serif"
                    >
                      EPSON
                    </text>
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Soluções completas em tecnologia para o seu negócio. 
                Produtos Epson originais com suporte técnico especializado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand text-white hover:bg-brand-700">
                  <Link to="/produtos">Ver Produtos</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Link to="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600"
                alt="Tecnologia e Automação"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em automação comercial com produtos e serviços de qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Automação Comercial</h3>
                <p className="text-gray-600">
                  Sistemas completos de automação para aumentar a eficiência do seu negócio
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🖨️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Produtos Epson</h3>
                <p className="text-gray-600">
                  Impressoras, scanners e equipamentos Epson originais com garantia
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Suporte Técnico</h3>
                <p className="text-gray-600">
                  Manutenção preventiva e corretiva com técnicos especializados
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Epson Partnership */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 flex items-baseline gap-2 sm:gap-3">
                Parceria <span className="text-brand-400">Oficial</span>
                <svg 
                  viewBox="0 0 120 40" 
                  className="h-[0.7em] inline-block"
                  fill="none"
                >
                  <text 
                    x="10" 
                    y="28" 
                    fontSize="24" 
                    fontWeight="bold" 
                    fill="#7d93ff"
                    fontFamily="Arial, sans-serif"
                  >
                    EPSON
                  </text>
                </svg>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Como revendedor autorizado Epson, garantimos produtos originais, 
                assistência técnica especializada e os melhores preços do mercado.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-brand-400 mr-3">✓</span>
                  Produtos com garantia oficial
                </li>
                <li className="flex items-center">
                  <span className="text-brand-400 mr-3">✓</span>
                  Assistência técnica autorizada
                </li>
                <li className="flex items-center">
                  <span className="text-brand-400 mr-3">✓</span>
                  Peças originais disponíveis
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600"
                alt="Equipamentos Epson"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para Modernizar seu Negócio?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a crescer com tecnologia de ponta
          </p>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
            <Link to="/contato">Solicitar Orçamento</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
