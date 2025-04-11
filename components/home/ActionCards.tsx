// components/home/ActionCards.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ActionCardsProps {
  onCadastrarProduto: () => void;
}

export default function ActionCards({ onCadastrarProduto }: ActionCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Sou Criador</h2>
          <p className="text-sm text-gray-600 mb-4">
            Cadastre sua impressora ou produtos 3D e comece a vender ou alugar.
          </p>
          <Button className="w-full" onClick={onCadastrarProduto}>
            Cadastrar Produto
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Quero Imprimir</h2>
          <p className="text-sm text-gray-600 mb-4">
            Encontre impressoras 3D perto de você ou compre produtos personalizados.
          </p>
          <Button className="w-full" variant="outline">
            Ver Catálogo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
