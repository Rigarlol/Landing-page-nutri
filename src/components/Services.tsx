
import React, { useEffect, useRef } from 'react';
import { AppleIcon, Heart, Brain, Users, ArrowRight } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <AppleIcon className="h-8 w-8 text-nutrition-500" />,
      title: "Nutrição Clínica",
      description: "Avaliação detalhada e plano alimentar personalizado para melhorar sua saúde e bem-estar geral.",
      features: ["Análise de composição corporal", "Plano alimentar personalizado", "Educação nutricional"],
      color: "bg-nutrition-50"
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Emagrecimento Saudável",
      description: "Estratégias personalizadas para perda de peso sustentável e desenvolvimento de hábitos saudáveis.",
      features: ["Reeducação alimentar", "Estratégias comportamentais", "Acompanhamento semanal"],
      color: "bg-rose-50"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Nutrição Esportiva",
      description: "Potencialize seu desempenho esportivo com estratégias nutricionais específicas para seus objetivos.",
      features: ["Plano pré e pós-treino", "Suplementação adequada", "Periodização nutricional"],
      color: "bg-blue-50"
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: "Nutrição Familiar",
      description: "Planos alimentares para toda a família, com foco em desenvolvimento de hábitos saudáveis em conjunto.",
      features: ["Cardápios adaptados", "Dicas de preparo", "Orientação para todas as idades"],
      color: "bg-amber-50"
    }
  ];

  return (
    <section id="services" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <div 
            className="animated-element"
            ref={el => elementsRef.current[0] = el}
          >
            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Nossos Serviços
            </span>
            <h2 className="section-title">Soluções nutricionais para<br />cada fase da sua vida</h2>
            <p className="section-subtitle mx-auto">
              Oferecemos atendimento personalizado para diferentes objetivos e necessidades,
              sempre com base na ciência e respeitando sua individualidade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`animated-element card-hover rounded-xl p-6 border transition-all ${service.color}`}
              ref={el => elementsRef.current[index + 1] = el}
            >
              <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center shadow-sm mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70 text-sm mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Saber mais
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-nutrition-50 to-nutrition-100 animated-element"
          ref={el => elementsRef.current[5] = el}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h3>
              <p className="text-foreground/80 mb-6">
                Oferecemos atendimentos para necessidades específicas como gestantes, 
                vegetarianos, pessoas com restrições alimentares e muito mais.
              </p>
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Entre em contato
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Alimentos saudáveis" 
                className="rounded-xl shadow-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
