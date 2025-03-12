import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award, Clock } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Abordagem Personalizada",
      description: "Cada plano nutricional é adaptado às suas necessidades específicas, preferências e histórico de saúde."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Profissional Qualificado",
      description: "Atendimento com nutricionista especializada, formada e com constante atualização científica."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Acompanhamento Contínuo",
      description: "Suporte regular para ajustar seu plano e garantir resultados duradouros em sua jornada."
    }
  ];

  return (
    <section id="about" className="section bg-secondary/30" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <div 
            className="animated-element"
            ref={el => elementsRef.current[0] = el}
          >
            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Sobre Nós
            </span>
            <h2 className="section-title">Nutrição com base científica <br />e abordagem humana</h2>
            <p className="section-subtitle mx-auto">
              Combinamos ciência de ponta com uma abordagem personalizada para criar planos nutricionais 
              que respeitam sua individualidade e promovem saúde duradoura.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="animated-element" 
            ref={el => elementsRef.current[1] = el}
          >
            <div className="relative">
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-nutrition-100 rounded-full blur-3xl opacity-80"></div>
              <img 
                src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Nutricionista em consultório" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="glass-effect absolute -right-6 -bottom-6 p-5 rounded-xl shadow-lg max-w-xs">
                <p className="text-sm font-medium">
                  "Minha missão é guiar você através de uma jornada nutritiva que respeite seu corpo, sua mente e seu estilo de vida."
                </p>
                <div className="mt-3 flex items-center">
                  <span className="font-bold text-primary">Dra. Ana Silva</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs text-foreground/70">Nutricionista</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div 
              className="animated-element" 
              ref={el => elementsRef.current[2] = el}
            >
              <h3 className="text-2xl font-semibold mb-4">Conheça nossa abordagem</h3>
              <p className="text-foreground/80 leading-relaxed">
                Com mais de 10 anos de experiência em nutrição clínica, trabalhamos para 
                desmistificar dietas da moda e criar planos alimentares baseados em evidências 
                científicas que se adaptam ao seu dia a dia, não o contrário.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Acreditamos que a alimentação saudável deve ser prazerosa e sustentável. 
                Por isso, desenvolvemos estratégias que respeitam suas preferências e realidade, 
                promovendo uma relação harmoniosa com a comida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="animated-element stagger-delay-1 bg-white p-6 rounded-xl shadow-sm"
                  ref={el => elementsRef.current[3 + index] = el}
                >
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
