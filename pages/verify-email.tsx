'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export default function VerificarEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  // Redireciona se já estiver autenticado
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const exp = decoded.exp * 1000;
        if (Date.now() < exp) {
          router.push('/dashboard');
          return;
        }
      } catch (e) {
        Cookies.remove('token'); // limpa se inválido
      }
    }

    const queryEmail = router.query.email;
    if (typeof queryEmail === 'string') {
      setEmail(queryEmail);
    }
  }, [router]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Verifique seu e-mail</h1>
        <p className="mb-4 text-gray-600">
          Enviamos um link de verificação para o e-mail:
        </p>
        <p className="mb-4 font-semibold text-blue-700">{email}</p>
        <button
          onClick={handleCopy}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {copied ? 'Copiado!' : 'Copiar e-mail'}
        </button>
        <p className="mt-6 text-sm text-gray-500">
          Após verificar, você poderá acessar sua conta normalmente.
        </p>
      </div>
    </main>
  );
}
