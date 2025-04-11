'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import ThemeToggle  from '../ThemeToggle';

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

      <div className="pt-4 border-t">
        <ThemeToggle />
      </div>
    </aside>
  );
}
