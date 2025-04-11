// services/authService.ts
const BASE_URL = "https://2o053a01p0.execute-api.us-east-1.amazonaws.com/prod";

interface LoginResponse {
  token: string;
  user: {
    userId: string;
    name: string;
    email: string;
    location: string;
    role: string;
  };
  message: string;
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Erro ao fazer login");
  }

  return res.json();
}
