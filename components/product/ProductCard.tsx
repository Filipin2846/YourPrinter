import { Produto } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductCard({ product }: { product: Produto }) {
  return (
    <Card key={product.productId}>
      <CardContent className="p-4">
        <div className="relative h-48 w-full mb-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-blue-600 font-bold">R$ {Number(product.price).toFixed(2)}</p>
      </CardContent>
    </Card>
  );
}
