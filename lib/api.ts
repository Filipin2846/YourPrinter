// lib/api.ts
import { Produto } from "./types";

const BASE_URL = "https://2o053a01p0.execute-api.us-east-1.amazonaws.com/prod";

export const fetchProdutos = async (): Promise<Produto[]> => {
  const res = await fetch(`${BASE_URL}/produtos`);
  return res.json();
};

export const criarProduto = async (produto: Produto): Promise<Response> => {
  return fetch(`${BASE_URL}/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
};
