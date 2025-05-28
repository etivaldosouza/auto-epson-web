
const MapSection = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Nossa Localização</h2>
      <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
        <div className="text-center text-gray-600">
          <div className="text-4xl mb-4">🗺️</div>
          <p className="text-lg mb-4">Clique para abrir no Google Maps</p>
          <p className="text-sm">Rua R, Quadra 8, Nº 20 - Planalto Anil 3 - São Luís - MA</p>
          <a 
            href="https://maps.app.goo.gl/6sw7xF2dVEa5HHDL7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
          >
            Ver no Google Maps
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
  );
};

export default MapSection;
