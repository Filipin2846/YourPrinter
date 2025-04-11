// pages/dashboard.tsx
'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Menu,
  Printer,
  Package,
  Settings,
  LogOut,
  LayoutDashboard,
} from 'lucide-react';

interface DecodedToken {
  userId: string;
  name: string;
  email: string;
  location: string;
  role: string;
  iat: number;
  exp: number;
}

export default function Dashboard() {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUser(decoded);
      } catch (err) {
        console.error('Erro ao decodificar token:', err);
      }
    } else {
      router.push('/login');
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 p-4 shadow-md space-y-6 fixed top-0 left-0 h-full z-20 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6">YourPrinter</h2>
        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/impressoras"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <Printer className="w-5 h-5" />
            <span>Minhas Impressoras</span>
          </Link>
          <Link
            href="/pedidos"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <Package className="w-5 h-5" />
            <span>Meus Pedidos</span>
          </Link>
          <Link
            href="/configuracoes"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <Settings className="w-5 h-5" />
            <span>Configurações</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 mt-4"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 ml-0 md:ml-64 p-6">
        {/* Botão para abrir sidebar em telas pequenas */}
        <div className="flex justify-between items-center mb-6">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Informações do usuário */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Olá, {user?.name?.split(' ')[0]} 👋
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>E-mail:</strong> {user?.email}
            </p>
            <p>
              <strong>Função:</strong> {user?.role}
            </p>
            <p>
              <strong>Localização:</strong> {user?.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
