// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <span>&copy; {new Date().getFullYear()} Your Printer. Todos os direitos reservados.</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:underline">
            Política de Privacidade
          </a>
          <a href="#" className="hover:underline">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
