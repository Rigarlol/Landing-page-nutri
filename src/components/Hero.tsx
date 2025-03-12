
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      ref={heroRef}
    >
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-nutrition-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="inline-flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium">
              <Leaf size={16} className="text-nutrition-600" />
              <span className="text-foreground/80">Nutrição que transforma</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
              Alimente sua saúde, <br />
              <span className="text-primary">transforme sua vida</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              Descubra um plano nutricional personalizado que respeita seu corpo e 
              estilo de vida. Comece sua jornada para uma vida mais saudável hoje.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Agende uma Consulta
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium 
                transition-colors focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 
                disabled:pointer-events-none ring-offset-background border border-input 
                hover:bg-accent hover:text-accent-foreground h-11 px-6"
              >
                Conheça os Serviços
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-accent rounded-full blur-xl opacity-60"></div>
            <div className="relative overflow-hidden rounded-2xl border shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607081692721-efe27049cf2e?q=80&w=1000&auto=format&fit=crop" 
                alt="Nutricionista preparando alimentos saudáveis" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="glass-effect absolute -left-12 -bottom-6 p-6 rounded-xl shadow-lg max-w-xs animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 rounded-full p-2">
                  <Leaf size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Planos Personalizados</h3>
                  <p className="text-sm text-foreground/70">Criados especialmente para suas necessidades e objetivos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
