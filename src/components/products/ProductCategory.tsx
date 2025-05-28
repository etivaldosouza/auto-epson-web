
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
  popular: boolean;
}

interface Category {
  category: string;
  products: Product[];
}

interface ProductCategoryProps {
  category: Category;
}

const ProductCategory = ({ category }: ProductCategoryProps) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        {category.category}
      </h2>
      <div className={`grid gap-8 ${category.category === "Impressoras Multifuncionais" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
        {category.products.map((product, productIndex) => (
          <ProductCard key={productIndex} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
