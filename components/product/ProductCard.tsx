import { Produto } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductCard({ product }: { product: Produto }) {
  return (
    <Card>
      <CardContent className="p-4">
        {/* Contêiner da imagem com posição relativa e altura definida */}
        <div className="relative h-48 w-full mb-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"  // Usando layout='fill' para ocupar o contêiner
            objectFit="cover"  // Assegura que a imagem cubra completamente a área
            className="rounded-xl"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-blue-600 font-bold">
          R$ {Number(product.price).toFixed(2).replace(".", ",")}
        </p>
      </CardContent>
    </Card>
  );
}
