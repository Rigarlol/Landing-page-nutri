
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={18} />, url: "#" },
    { icon: <Instagram size={18} />, url: "#" },
    { icon: <Twitter size={18} />, url: "#" },
    { icon: <Linkedin size={18} />, url: "#" },
  ];

  const footerLinks = [
    {
      title: "Serviços",
      links: [
        { name: "Nutrição Clínica", url: "#services" },
        { name: "Emagrecimento", url: "#services" },
        { name: "Nutrição Esportiva", url: "#services" },
        { name: "Nutrição Familiar", url: "#services" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", url: "#about" },
        { name: "Depoimentos", url: "#testimonials" },
        { name: "Política de Privacidade", url: "#" },
        { name: "Termos de Serviço", url: "#" },
      ],
    },
    {
      title: "Contato",
      links: [
        { name: "Agende sua consulta", url: "#contact" },
        { name: "Perguntas frequentes", url: "#" },
        { name: "Localização", url: "#" },
        { name: "Envie um email", url: "mailto:contato@nutrivida.com.br" },
      ],
    },
  ];

  return (
    <footer className="bg-nutrition-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-8 border-b border-white/10">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-playfair font-bold">NutriVida</span>
            </a>
            <p className="text-white/70 text-sm max-w-xs mb-6">
              Transformando vidas através da alimentação consciente 
              e planos nutricionais personalizados.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="Social media link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Receba dicas de nutrição e bem-estar
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">&copy; {currentYear} NutriVida. Todos os direitos reservados.</p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/50 hover:text-white text-sm">Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white text-sm">Termos</a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white text-sm">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
