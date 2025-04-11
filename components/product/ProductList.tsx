import ProductCard from "./ProductCard";

interface Produto {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductListProps {
  products: Produto[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
}
