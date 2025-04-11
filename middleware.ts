// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const PUBLIC_PATHS = ['/', '/login', '/register', '/verificar-email'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value || '';

  const { pathname } = req.nextUrl;

  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  if (token) {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);

      // Se autenticado e acessando rota pública → redirecionar para /dashboard
      if (isPublic) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // Autenticado e em rota protegida → permitir
      return NextResponse.next();
    } catch (err) {
      // Token inválido → remover e redirecionar para /login
      const response = NextResponse.redirect(new URL('/login', req.url));
      response.cookies.delete('token');
      return response;
    }
  }

  // Não autenticado
  if (!isPublic) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
