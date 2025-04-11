// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

type DecodedToken = {
  id: string;
  email: string;
  exp: number;
};

const PUBLIC_PATHS = ['/', '/login', '/register', '/verificar-email'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value || '';
  const { pathname } = req.nextUrl;

  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as DecodedToken;

      if (isPublic) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      return NextResponse.next();
    } catch (err) {
      const response = NextResponse.redirect(new URL('/login', req.url));
      response.cookies.delete('token');
      return response;
    }
  }

  if (!isPublic) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
