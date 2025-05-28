
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
