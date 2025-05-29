
import { Button } from "@/components/ui/button";

const EmergencyContact = () => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold text-red-800 mb-4">Entre em contato conosco</h2>
      <p className="text-red-600 mb-6">
        Para problemas urgentes que afetam o funcionamento do seu negócio, 
        entre em contato conosco imediatamente
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-red-600 text-white hover:bg-red-700">
          Ligar: (98) 3238-9292
        </Button>
        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
          WhatsApp: (98) 98911-6486
        </Button>
      </div>
    </div>
  );
};

export default EmergencyContact;
