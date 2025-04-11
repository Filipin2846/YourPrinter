// components/ui/TestimonialCarousel.tsx
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ana Souza",
    feedback:
      "Comecei a vender peças personalizadas com minha impressora 3D e já tenho clientes recorrentes. A plataforma facilitou tudo!",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "João Martins",
    feedback:
      "Precisei de uma impressão para um projeto e encontrei um criador a 5km de casa. Entrega rápida e excelente qualidade.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Camila Oliveira",
    feedback:
      "Com a Your Printer consegui alugar minha impressora parada e agora tenho uma renda extra todo mês.",
    avatar: "https://i.pravatar.cc/150?img=30",
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div
            className="min-w-full flex flex-col items-center text-center space-y-4 px-8 py-6"
            key={index}
          >
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="text-sm text-muted-foreground italic">"{testimonial.feedback}"</p>
            <span className="font-medium text-sm">{testimonial.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 w-2 rounded-full bg-muted-foreground transition-all duration-300",
              selectedIndex === i ? "bg-primary" : "opacity-40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
