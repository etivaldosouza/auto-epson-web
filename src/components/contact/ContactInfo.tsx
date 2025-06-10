
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram } from "lucide-react";

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
                <strong>Matriz:</strong><br />
                Rua R, Quadra 8, Nº 20<br />
                Planalto Anil 3 - São Luís - MA<br /><br />
                <strong>Filial:</strong><br />
                Rua Um - Olho D'água<br />
                São Luís - MA, 65070-000
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
                displayautomacao_adm@outlook.com
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
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-600 hover:border-blue-700 transition-colors bg-blue-600 hover:bg-blue-700">
              <Facebook size={20} className="text-white" />
            </a>
            <a href="https://www.instagram.com/epsonmaranhao?igsh=ZDN1cWdnMmR5dXBh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 hover:border-pink-600 transition-colors bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500">
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
