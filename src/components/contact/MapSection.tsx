
const MapSection = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Nossa Localização</h2>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 max-w-4xl mx-auto">
          {/* Imagem da loja */}
          <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
            <img 
              src="/lovable-uploads/91fc9a72-f690-4a96-841d-d700d4233065.png" 
              alt="Fachada da Display Informática"
              className="w-full h-full object-contain bg-slate-50"
            />
          </div>
          
          {/* Conteúdo existente */}
          <div className="p-8 text-center text-gray-600">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Matriz - São Luís</h3>
            <p className="text-lg mb-4 text-slate-600">Clique para abrir no Google Maps</p>
            <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200">
              <p className="text-sm text-slate-700 font-medium">Rua R, Quadra 8, Nº 20</p>
              <p className="text-sm text-slate-600">Planalto Anil 3 - São Luís - MA</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/6sw7xF2dVEa5HHDL7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand text-white px-8 py-3 rounded-lg hover:bg-brand-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
            >
              📍 Ver no Google Maps
            </a>
          </div>
          <a 
            href="https://maps.app.goo.gl/6sw7xF2dVEa5HHDL7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Abrir localização no Google Maps"
          />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
