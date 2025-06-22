
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
              <header>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Assistência Técnica
                  <span className="text-brand-400">
                    Autorizada EPSON
                  </span>
                  <span className="block text-2xl lg:text-3xl mt-2 text-gray-300">
                    em São Luís - MA
                  </span>
                </h1>
              </header>
              <p className="text-xl text-gray-300 mb-8">
                <strong>Display Informática</strong> - Somos Assistência Técnica Autorizada Epson em São Luís-MA. 
                Eleita por dois anos consecutivos como a <em>melhor assistência técnica autorizada Epson do Brasil</em>. 
                Especialistas em impressoras EcoTank, multifuncionais e automação comercial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand text-white hover:bg-brand-700">
                  <Link to="/produtos" title="Produtos Epson - Impressoras e Scanners">Ver Produtos Epson</Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-colors">
                  <Link to="/contato" title="Entre em contato com a Display Informática">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                alt="Display Informática - Assistência Técnica Epson Autorizada em São Luís MA" 
                className="rounded-lg shadow-2xl max-w-full h-auto" 
                src="/lovable-uploads/0e142029-33f3-433e-83ad-d41be65a790d.png"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Serviços Especializados em Tecnologia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em automação comercial, assistência técnica Epson e produtos originais 
              com mais de 30 anos de experiência no mercado maranhense
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article>
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white" role="img" aria-label="Automação">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Automação Comercial</h3>
                  <p className="text-gray-600">
                    Sistemas completos de PDV, controle de estoque e automação fiscal para aumentar a eficiência do seu negócio em São Luís e região
                  </p>
                </CardContent>
              </Card>
            </article>

            <article>
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white" role="img" aria-label="Impressoras">🖨️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Produtos Epson Originais</h3>
                  <p className="text-gray-600">
                    Impressoras EcoTank, multifuncionais, scanners e equipamentos Epson originais com garantia oficial e instalação gratuita
                  </p>
                </CardContent>
              </Card>
            </article>

            <article>
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white" role="img" aria-label="Suporte">🛠️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Assistência Técnica Especializada</h3>
                  <p className="text-gray-600">
                    Manutenção preventiva e corretiva com técnicos certificados Epson. Melhor assistência técnica do Brasil 2022/2023
                  </p>
                </CardContent>
              </Card>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicos" title="Conheça todos os serviços da Display Informática">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Epson Partnership */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Parceria <span className="text-brand-400">Oficial EPSON</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Como <strong>revendedor autorizado Epson em São Luís</strong>, garantimos produtos originais, 
                assistência técnica especializada e os melhores preços do Maranhão. Somos a única assistência técnica 
                Epson autorizada em São Luís premiada nacionalmente.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-brand-400 mr-3">✓</span>
                  Produtos Epson com garantia oficial de fábrica
                </li>
                <li className="flex items-center">
                  <span className="text-brand-400 mr-3">✓</span>
                  Assistência técnica autorizada certificada
                </li>
                <li className="flex items-center">
                  <span className="text-brand-400 mr-3">✓</span>
                  Peças originais Epson sempre disponíveis
                </li>
                <li className="flex items-center">
                  <span className="text-brand-400 mr-3">✓</span>
                  Instalação e configuração gratuita
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b8b26b3c-fe3f-4967-97ad-17aa44a7d9d4.png" 
                alt="Equipe Display Informática - Melhor Assistência Técnica Epson Brasil" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para Modernizar seu Negócio em São Luís?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-3xl mx-auto">
            Entre em contato com a <strong>Display Informática</strong> e descubra como podemos ajudar sua empresa 
            a crescer com tecnologia Epson de ponta. Atendemos São Luís e toda a região metropolitana.
          </p>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
            <Link to="/contato" title="Solicite seu orçamento gratuito">Solicitar Orçamento Gratuito</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
