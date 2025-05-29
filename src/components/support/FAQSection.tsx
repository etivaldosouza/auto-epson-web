
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
