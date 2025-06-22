
import ProductCategory from "@/components/products/ProductCategory";
import FeaturesSection from "@/components/products/FeaturesSection";
import CTASection from "@/components/products/CTASection";
import AdditionalProductsSection from "@/components/products/AdditionalProductsSection";
import { printerCategories, additionalProducts } from "@/data/productsData";

const Products = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Produtos <span className="text-brand-400 font-bold">EPSON</span> Originais
            <span className="block text-2xl lg:text-3xl mt-2 text-gray-600">
              em São Luís - MA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linha completa de <strong>impressoras Epson EcoTank</strong>, multifuncionais, scanners e suprimentos originais 
            com garantia oficial de fábrica e suporte técnico especializado. Somos a assistência técnica Epson autorizada 
            em São Luís premiada como melhor do Brasil.
          </p>
          
          {/* Breadcrumb for SEO */}
          <nav aria-label="Breadcrumb" className="mt-6">
            <ol className="flex justify-center space-x-2 text-sm text-gray-500">
              <li><a href="/" className="hover:text-brand-400">Início</a></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Produtos Epson</li>
            </ol>
          </nav>
        </header>

        {/* Product Categories - apenas Impressoras Multifuncionais e Tintas e Garrafas */}
        {printerCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} aria-labelledby={`category-${categoryIndex}`}>
            <ProductCategory category={category} />
          </section>
        ))}

        {/* Additional Products Section */}
        <section aria-labelledby="additional-products">
          <AdditionalProductsSection products={additionalProducts} />
        </section>

        {/* Features Section */}
        <section aria-labelledby="features">
          <FeaturesSection />
        </section>

        {/* FAQ Schema for Products */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quais impressoras Epson vocês vendem em São Luís?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vendemos toda linha Epson EcoTank, impressoras multifuncionais, scanners e suprimentos originais com garantia oficial."
                }
              },
              {
                "@type": "Question", 
                "name": "Vocês fazem instalação das impressoras?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, fazemos instalação e configuração gratuita de todos os produtos Epson por técnicos especializados."
                }
              },
              {
                "@type": "Question",
                "name": "Tem garantia nos produtos Epson?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Todos os produtos têm garantia oficial Epson e somos assistência técnica autorizada para atendimento pós-venda."
                }
              }
            ]
          })
        }} />

        {/* CTA Section */}
        <section aria-labelledby="cta">
          <CTASection />
        </section>
      </div>
    </div>
  );
};

export default Products;
