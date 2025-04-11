// services/productService.ts
import { Produto } from "@/types/product";

const API_URL = "https://2o053a01p0.execute-api.us-east-1.amazonaws.com/prod/produtos";

export async function fetchProducts(): Promise<Produto[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
}

export async function createProduct(product: Produto): Promise<void> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error("Erro ao criar produto");
}
