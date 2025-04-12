import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TestimonialCarousel from "@/components/ui/TestimonialCarousel"

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Printer - Conectando criadores com o mercado 3D</title>
        <meta
          name="description"
          content="Cadastre sua impressora 3D ou encontre criadores próximos para imprimir suas ideias."
        />
      </Head>

      <main className="min-h-screen bg-background text-foreground px-6 md:px-20 py-12 space-y-20">
        {/* HERO */}
        <AnimatedSection>
          <section className="text-center space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Conecte sua Impressora 3D com o Mundo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme sua impressora em uma fonte de renda ou encontre criadores para dar vida às suas ideias.
            </p>
            <Link href="/register">
              <Button size="lg">Comece Agora</Button>
            </Link>
          </section>
        </AnimatedSection>

        {/* AÇÕES */}
        <AnimatedSection>
          <section className="grid gap-8 md:grid-cols-2">
            <ActionCard
              title="Sou Criador"
              description="Cadastre sua impressora ou produtos 3D e comece a vender ou alugar."
              buttonText="Cadastrar Produto"
              href="/dashboard/impressoras"
            />
            <ActionCard
              title="Quero Imprimir"
              description="Encontre impressoras 3D perto de você ou compre produtos personalizados."
              buttonText="Ver Catálogo"
              href="/produtos"
              variant="outline"
            />
          </section>
        </AnimatedSection>

        {/* PRODUTOS EM DESTAQUE */}
        <AnimatedSection>
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Produtos em Destaque</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Atualizando a imagem para um caminho válido */}
              <div className="rounded-lg border bg-card p-4 shadow-sm space-y-2">
                <Image
                  src="/images/produto-teste.png"  // Alterado para um caminho correto
                  alt="Produto Teste"
                  width={400}
                  height={300}
                  className="rounded-md object-cover w-full"
                />
                <h3 className="text-lg font-semibold">Produto Teste</h3>
                <p className="text-sm text-muted-foreground">Esse é um produto de teste</p>
                <p className="font-medium">R$ 99,90</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* COMO FUNCIONA */}
        <AnimatedSection>
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Como Funciona</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[  // Passando as etapas do processo
                {
                  title: "1. Cadastre",
                  description: "Adicione sua impressora 3D ou produtos em poucos cliques.",
                  icon: "🖨️",
                },
                {
                  title: "2. Conecte",
                  description: "Seja encontrado por clientes com base na sua localização.",
                  icon: "📍",
                },
                {
                  title: "3. Imprima",
                  description: "Produza os itens sob demanda e entregue com praticidade.",
                  icon: "📦",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border bg-muted/30 shadow-sm"
                >
                  <div className="text-5xl">{step.icon}</div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* CTA DESTAQUE */}
        <AnimatedSection>
          <section className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 dark:from-purple-800 dark:via-indigo-700 dark:to-blue-700">
            <div className="max-w-lg space-y-4 z-10">
              <h2 className="text-3xl font-bold">Tem uma impressora 3D parada?</h2>
              <p className="text-md text-white/90">
                Cadastre-se e comece a lucrar agora mesmo imprimindo para outras pessoas.
              </p>
              <Link href="/register">
                <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
                  Quero começar
                </Button>
              </Link>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 z-0 opacity-60 md:opacity-90">
              <Image
                src="/images/printer-illustration.png" // Alterado para um caminho correto
                alt="Impressora 3D"
                width={300}
                height={300}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </section>
        </AnimatedSection>

        {/* DEPOIMENTOS */}
        <AnimatedSection>
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Depoimentos</h2>
            <TestimonialCarousel />
          </section>
        </AnimatedSection>
      </main>
    </>
  )
}

function ActionCard({
  title,
  description,
  buttonText,
  href,
  variant,
}: {
  title: string
  description: string
  buttonText: string
  href: string
  variant?: "outline" | "default"
}) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      <Link href={href}>
        <Button className="w-full" variant={variant}>
          {buttonText}
        </Button>
      </Link>
    </div>
  )
}
