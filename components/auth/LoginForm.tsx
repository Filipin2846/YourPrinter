// components/auth/LoginForm.tsx

"use client";
import { useState } from "react";
import { loginUser } from "@/services/auth"; // 👈 importa aqui
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    try {
      const res = await loginUser(email, password);
      localStorage.setItem("token", res.token); // opcional
      router.push("/dashboard"); // ou redireciona para onde quiser
    } catch (err: any) {
      if (err.message === "email_not_verified") {
        router.push("/verificar-email");
      } else {
        setErro("Email ou senha incorretos");
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="btn-primary">Entrar</button>
      {erro && <p className="text-red-500">{erro}</p>}
    </form>
  );
}
