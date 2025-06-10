
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Automação Comercial Completa",
      description: "Sistemas integrados de gestão, PDV, controle de estoque e automação fiscal.",
      features: [
        "Sistemas de PDV (Ponto de Venda)",
        "Controle de estoque automatizado",
        "Emissão de cupons fiscais",
        "Integração com sistemas de gestão",
        "Relatórios gerenciais",
      ],
      icon: "🔧",
    },
    {
      title: "Instalação de Sistemas",
      description: "Instalação e configuração de equipamentos e softwares para automação comercial.",
      features: [
        "Instalação de impressoras fiscais",
        "Configuração de sistemas PDV",
        "Setup de redes e conectividade",
        "Treinamento da equipe",
        "Teste e validação dos sistemas",
      ],
      icon: "⚙️",
    },
    {
      title: "Manutenção Preventiva",
      description: "Manutenção regular para garantir o funcionamento otimizado dos equipamentos.",
      features: [
        "Limpeza e calibração de impressoras",
        "Atualização de softwares",
        "Verificação de conectividade",
        "Backup de configurações",
        "Relatórios de manutenção",
      ],
      icon: "🛠️",
    },
    {
      title: "Suporte Técnico",
      description: "Atendimento técnico especializado com acesso remoto e suporte presencial.",
      features: [
        "Atendimento via telefone e WhatsApp",
        "Acesso remoto para diagnóstico",
        "Visita técnica quando necessário",
        "Garantia de peças e serviços",
        "Tempo de resposta otimizado",
      ],
      icon: "📞",
    },
    {
      title: "Consultoria Tecnológica",
      description: "Análise e planejamento de soluções tecnológicas personalizadas para seu negócio.",
      features: [
        "Diagnóstico de necessidades",
        "Planejamento de infraestrutura",
        "Projeto de implementação",
        "Acompanhamento pós-implementação",
      ],
      icon: "💡",
    },
    {
      title: "Treinamento e Capacitação",
      description: "Cursos e treinamentos para maximizar o uso dos sistemas implementados.",
      features: [
        "Treinamento presencial",
        "Material didático especializado",
        "Suporte pós-treinamento",
        "Certificação de conclusão",
        "Treinamento personalizado",
      ],
      icon: "🎓",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nossos <span className="text-brand">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços em automação comercial e soluções tecnológicas 
            para atender todas as necessidades do seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{service.icon}</span>
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-brand mr-2 mt-1">•</span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Como Trabalhamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Análise</h3>
              <p className="text-gray-600 text-sm">
                Avaliamos suas necessidades e processos atuais
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Planejamento</h3>
              <p className="text-gray-600 text-sm">
                Desenvolvemos a solução ideal para seu negócio
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Implementação</h3>
              <p className="text-gray-600 text-sm">
                Instalamos e configuramos todos os sistemas
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Suporte</h3>
              <p className="text-gray-600 text-sm">
                Oferecemos suporte contínuo e manutenção
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Precisa de um Orçamento Personalizado?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e nossa equipe técnica irá avaliar suas necessidades 
            e propor a melhor solução para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand text-white hover:bg-brand-700">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
