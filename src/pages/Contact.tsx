import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Entre em <span className="text-brand-400">Contato</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco e nossa equipe especializada 
            irá atendê-lo com a máxima agilidade e qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Envie sua Mensagem</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="Seu nome" />
                </div>
                <div>
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Seu sobrenome" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" placeholder="Nome da sua empresa" />
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
                <Label htmlFor="subject">Assunto</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o assunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="orcamento">Solicitar Orçamento</SelectItem>
                    <SelectItem value="suporte">Suporte Técnico</SelectItem>
                    <SelectItem value="produtos">Informações sobre Produtos</SelectItem>
                    <SelectItem value="servicos">Informações sobre Serviços</SelectItem>
                    <SelectItem value="parceria">Oportunidade de Parceria</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos como podemos ajudar você..."
                  rows={5}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <Label htmlFor="newsletter" className="text-sm">
                  Quero receber novidades e ofertas por e-mail
                </Label>
              </div>

              <Button className="w-full bg-brand text-white hover:bg-brand-700 text-lg py-3">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Informações de Contato</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <span className="text-xl text-white">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Exemplo, 123 - Sala 45<br />
                      Centro - São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <span className="text-xl text-white">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Telefones</h3>
                    <p className="text-gray-600">
                      (11) 99999-9999 (WhatsApp)<br />
                      (11) 3333-4444 (Fixo)<br />
                      (11) 9999-8888 (Emergência)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <span className="text-xl text-white">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">E-mail</h3>
                    <p className="text-gray-600">
                      contato@autoepson.com.br<br />
                      vendas@autoepson.com.br<br />
                      suporte@autoepson.com.br
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <span className="text-xl text-white">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-brand transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-600 hover:text-brand transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-600 hover:text-brand transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-600 hover:text-brand transition-colors">
                    YouTube
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Nossa Localização</h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-lg">Mapa do Google Maps será integrado aqui</p>
              <p className="text-sm mt-2">Rua Exemplo, 123 - Centro - São Paulo - SP</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Precisa de Atendimento Urgente?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Para questões urgentes relacionadas ao suporte técnico, 
            entre em contato conosco diretamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand text-white hover:bg-brand-700">
              Ligar Agora: (11) 99999-9999
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              WhatsApp: (11) 99999-9999
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
