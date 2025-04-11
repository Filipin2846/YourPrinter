// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main className="pt-20 min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
