'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import ThemeToggle from '../ThemeToggle';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const links = [
  { href: '/dashboard', label: 'Início' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/impressoras', label: 'Impressoras' },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="h-screen w-64 bg-muted text-muted-foreground border-r p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-6 text-foreground">Your Printer</h2>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2 rounded hover:bg-primary/10 transition',
                router.pathname === link.href && 'bg-primary/10 text-primary font-medium'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-2 border-t pt-4">
        {/* Botão de Logout com ícone */}
        <Link href="/logout">
          <Button variant="ghost" className="justify-start w-full text-left gap-2">
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </Link>

        <ThemeToggle />
      </div>
    </aside>
  );
}
