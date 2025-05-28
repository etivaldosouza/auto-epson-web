
import ProductCategory from "@/components/products/ProductCategory";
import SuppliesSection from "@/components/products/SuppliesSection";
import FeaturesSection from "@/components/products/FeaturesSection";
import CTASection from "@/components/products/CTASection";
import { printerCategories, supplies } from "@/data/productsData";

const Products = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-3 sm:gap-4">
            Produtos
            <img 
              src="/lovable-uploads/7a41c804-46bb-4526-8185-70afad160802.png" 
              alt="Epson" 
              className="h-8 sm:h-10 md:h-12 lg:h-16 object-contain"
            />
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linha completa de impressoras, scanners e suprimentos Epson originais 
            com garantia oficial e suporte técnico especializado
          </p>
        </div>

        {/* Product Categories */}
        {printerCategories.map((category, categoryIndex) => (
          <ProductCategory key={categoryIndex} category={category} />
        ))}

        {/* Supplies Section */}
        <SuppliesSection supplies={supplies} />

        {/* Features Section */}
        <FeaturesSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
};

export default Products;
