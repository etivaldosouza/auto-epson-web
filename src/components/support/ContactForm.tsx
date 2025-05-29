
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
