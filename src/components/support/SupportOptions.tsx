
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupportOptions = () => {
  return (
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
  );
};

export default SupportOptions;
