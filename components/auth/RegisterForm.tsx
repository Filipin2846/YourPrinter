"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface RegisterFormProps {
  onSuccess: () => void;
}

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    name: "",
    location: ""
  });

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      const response = await fetch("https://2o053a01p0.execute-api.us-east-1.amazonaws.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Erro no cadastro");

      alert("Usuário cadastrado com sucesso!");
      onSuccess();
    } catch (err: any) {
      setErro(err.message || "Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input name="name" required onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" name="email" required onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor="senha">Senha</Label>
        <Input type="password" name="senha" required onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor="location">Localização</Label>
        <Input name="location" required onChange={handleChange} />
      </div>

      {erro && <p className="text-red-500">{erro}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
}
