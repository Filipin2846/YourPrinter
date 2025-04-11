import Cookies from "js-cookie";

export interface LoginResponse {
  token: string;
  user: {
    userId: string;
    name: string;
    email: string;
    location: string;
    role: string;
  };
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  location: string;
  role: string;
}

export interface RegisterResponse {
  message: string;
  userId: string;
  verificationLink?: string;
}

const LOGIN_URL = "https://2o053a01p0.execute-api.us-east-1.amazonaws.com/prod/login";
const REGISTER_URL = "https://2o053a01p0.execute-api.us-east-1.amazonaws.com/prod/register";

// 🔐 Função de login com gravação do token no cookie
export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 403 && data.message?.includes("E-mail não verificado")) {
      throw new Error("email_not_verified");
    }
    throw new Error(data.message || "Erro ao fazer login");
  }

  // ✅ Salvar token em cookie por 1 dia
  Cookies.set("token", data.token, { expires: 1 });

  return data;
}

// 📝 Função de cadastro
export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  const response = await fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao registrar usuário");
  }

  return data;
}

// 🚪 Função de logout
export function logoutUser() {
  Cookies.remove("token");
  window.location.href = "/login";
}
