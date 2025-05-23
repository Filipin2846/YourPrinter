'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import Sidebar from '@/components/dashboard/SideBar';

interface DecodedToken {
  userId: string;
  name: string;
  email: string;
  location: string;
  role: string;
  iat: number;
  exp: number;
}

export default function ConfiguracoesPage() {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwt_decode<DecodedToken>(token);
        setUser(decoded);
      } catch (err) {
        console.error('Erro ao decodificar token:', err);
      }
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Configurações</h2>
        <p className="text-gray-700">Aqui você pode atualizar suas informações e preferências.</p>
      </main>
    </div>
  );
}
