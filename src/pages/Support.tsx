import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Support = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Suporte <span className="text-brand-400">Técnico</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe de suporte está sempre pronta para ajudar. 
            Acesso remoto, atendimento por telefone e visitas técnicas quando necessário
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📞</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Atendimento por Telefone</h3>
              <p className="text-gray-600 mb-6">
                Suporte técnico especializado via telefone de segunda a sexta das 8h às 18h
              </p>
              <div className="space-y-2 text-slate-900 font-semibold">
                <p>(11) 99999-9999</p>
                <p>(11) 3333-4444</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Acesso Remoto</h3>
              <p className="text-gray-600 mb-6">
                Diagnóstico e resolução de problemas através de acesso remoto seguro
              </p>
              <Button className="bg-slate-900 text-white hover:bg-slate-800">
                Solicitar Acesso Remoto
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visita Técnica</h3>
              <p className="text-gray-600 mb-6">
                Atendimento presencial quando o problema não pode ser resolvido remotamente
              </p>
              <Button variant="outline">
                Agendar Visita
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contato Rápido</h2>
            <p className="text-gray-600 mb-8">
              Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nome da empresa" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div>
                <Label htmlFor="priority">Prioridade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a prioridade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixa">Baixa</SelectItem>
                    <SelectItem value="media">Média</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="urgente">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="equipment">Equipamento</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o equipamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tm-t20x">Epson TM-T20X</SelectItem>
                    <SelectItem value="tm-t88vi">Epson TM-T88VI</SelectItem>
                    <SelectItem value="lx-350">Epson LX-350</SelectItem>
                    <SelectItem value="fx-890">Epson FX-890II</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Descrição do Problema</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva detalhadamente o problema que está enfrentando..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-brand text-white hover:bg-brand-700">
                Enviar Solicitação
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">FAQ - Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como configurar minha impressora fiscal?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nossa equipe oferece instalação e configuração gratuita. Entre em contato 
                    conosco para agendar uma visita técnica ou solicitar acesso remoto.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Minha impressora não está funcionando</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Verifique se os cabos estão conectados corretamente e se há papel na impressora. 
                    Se o problema persistir, entre em contato conosco imediatamente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como fazer backup das configurações?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Recomendamos fazer backup regular das configurações. Nossa equipe pode 
                    orientá-lo sobre o processo específico para seu equipamento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Preciso de treinamento para usar o sistema?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Oferecemos treinamento completo para toda sua equipe. O treinamento pode 
                    ser presencial ou online, conforme sua preferência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Suporte de Emergência</h2>
          <p className="text-red-600 mb-6">
            Para problemas urgentes que afetam o funcionamento do seu negócio, 
            entre em contato conosco imediatamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Ligar: (11) 99999-9999
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              WhatsApp: (11) 99999-9999
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
