
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Sobre a <span className="text-brand">Display Informática</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma empresa especializada em soluções de tecnologia da informação, 
            comprometida em oferecer soluções tecnológicas de qualidade
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História</h2>
            <p className="text-gray-600 mb-4">
              Fundada em 19/11/1992, a Display Informática nasceu da visão de democratizar o acesso à tecnologia 
              para empresas do Maranhão. Com mais de três décadas de 
              experiência no mercado, nos consolidamos como referência em soluções tecnológicas e assistência técnica.
            </p>
            <p className="text-gray-600">
              Nossa expertise nos permite oferecer produtos de qualidade, 
              suporte técnico especializado e garantia estendida, sempre com foco na 
              satisfação e no sucesso dos nossos clientes.
            </p>
          </div>
          <div>
            <img alt="Prêmio Melhor Assistência Técnica Epson Brasil 2022/2023" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/f3941455-c4d0-4e45-a935-a1fdebb6dff2.png" />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                Fornecer soluções completas em tecnologia da informação, 
                contribuindo para o crescimento e modernização dos negócios dos nossos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal referência em soluções tecnológicas 
                na região, destacando-se pela excelência no atendimento.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>
              <p className="text-gray-600">
                Qualidade, inovação, transparência, comprometimento com o cliente e 
                busca contínua pela excelência em todos os nossos serviços.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Numbers */}
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-12">Display Informática em Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">30+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">500+</div>
              <div className="text-gray-300">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">1000+</div>
              <div className="text-gray-300">Equipamentos Instalados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default About;
