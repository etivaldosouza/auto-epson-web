
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
