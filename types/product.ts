export interface Produto {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Payload para criação de produto
export interface ProdutoCreate {
  name: string;
  description: string;
}
