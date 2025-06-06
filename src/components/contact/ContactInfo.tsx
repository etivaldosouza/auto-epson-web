
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
                Rua R, Quadra 8, Nº 20<br />
                Planalto Anil 3 - São Luís - MA
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
                (98) 99116-6486 (WhatsApp)<br />
                (98) 3238-9292 (Fixo)<br />
                (98) 3239-1068 (Fixo)<br />
                (98) 3239-0954 (Fixo)
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
                displayautomacao_adm@outlook.com<br />
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
