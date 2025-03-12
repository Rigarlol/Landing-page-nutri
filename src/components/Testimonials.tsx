
import React, { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Marina Costa",
      role: "Emagrecimento Saudável",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "O acompanhamento mudou completamente minha relação com a comida. Consegui perder 15kg de forma saudável e sustentável, sem dietas restritivas.",
      rating: 5
    },
    {
      id: 2,
      name: "Pedro Almeida",
      role: "Nutrição Esportiva",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Como atleta, sempre tive dificuldade para balancear minha alimentação. O plano nutricional melhorou meu desempenho e recuperação significativamente.",
      rating: 5
    },
    {
      id: 3,
      name: "Carla Mendes",
      role: "Nutrição Clínica",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Após anos lutando com problemas digestivos, finalmente encontrei uma abordagem que funciona. Os sintomas melhoraram drasticamente em poucas semanas.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section bg-secondary/30" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <div 
            className="animated-element"
            ref={el => elementsRef.current[0] = el}
          >
            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Depoimentos
            </span>
            <h2 className="section-title">O que nossos clientes<br />estão dizendo</h2>
            <p className="section-subtitle mx-auto">
              Histórias reais de pessoas que transformaram sua saúde e qualidade de vida
              através de nossos serviços de nutrição personalizada.
            </p>
          </div>
        </div>

        <div 
          className="relative max-w-4xl mx-auto animated-element"
          ref={el => elementsRef.current[1] = el}
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-nutrition-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <div className="relative">
                          <Quote className="absolute -top-6 -left-2 w-12 h-12 text-nutrition-100 opacity-50" />
                          <p className="text-lg italic text-foreground/80 mb-4 relative z-10">
                            "{testimonial.quote}"
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/60">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 right-8 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-nutrition-50 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-nutrition-50 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
