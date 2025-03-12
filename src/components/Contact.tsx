
import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-primary" />,
      title: "Telefone",
      details: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <Mail size={20} className="text-primary" />,
      title: "Email",
      details: "contato@nutrivida.com.br",
      link: "mailto:contato@nutrivida.com.br"
    },
    {
      icon: <MapPin size={20} className="text-primary" />,
      title: "Endereço",
      details: "Av. Paulista, 1000 - São Paulo, SP",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <div 
            className="animated-element"
            ref={el => elementsRef.current[0] = el}
          >
            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              Contato
            </span>
            <h2 className="section-title">Vamos começar sua<br />jornada nutricional</h2>
            <p className="section-subtitle mx-auto">
              Estamos aqui para responder suas dúvidas e ajudar você a dar o primeiro passo
              em direção a uma vida mais saudável e equilibrada.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div 
            className="lg:col-span-2 animated-element"
            ref={el => elementsRef.current[1] = el}
          >
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a 
                    href={item.link}
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl transition-colors hover:bg-white/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-foreground/70">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Horário de atendimento</h4>
                <p className="text-foreground/70 text-sm">Segunda à Sexta: 8h às 19h</p>
                <p className="text-foreground/70 text-sm">Sábado: 8h às 13h</p>
              </div>
            </div>
          </div>

          <div 
            className="lg:col-span-3 animated-element"
            ref={el => elementsRef.current[2] = el}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Agende sua consulta</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Mensagem enviada!</h4>
                  <p className="text-foreground/70 max-w-md">
                    Agradecemos seu contato. Retornaremos em breve para agendar sua consulta.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1.5">
                        Serviço de interesse
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="clinical">Nutrição Clínica</option>
                        <option value="weightloss">Emagrecimento Saudável</option>
                        <option value="sports">Nutrição Esportiva</option>
                        <option value="family">Nutrição Familiar</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Como podemos ajudar você?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Enviar mensagem
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
