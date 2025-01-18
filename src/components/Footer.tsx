import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a365d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-montserrat">Vigilant</h3>
            <p className="text-gray-300">
              Innovazione nella sicurezza sul lavoro
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-[#2ecc71]" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-[#2ecc71]" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-[#2ecc71]" />
              <Mail className="h-5 w-5 cursor-pointer hover:text-[#2ecc71]" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-[#2ecc71]">Home</button></li>
              <li><button onClick={() => scrollToSection('chi-siamo')} className="hover:text-[#2ecc71]">Chi Siamo</button></li>
              <li><button onClick={() => scrollToSection('soluzione')} className="hover:text-[#2ecc71]">Servizi</button></li>
              <li><button onClick={() => scrollToSection('contatti')} className="hover:text-[#2ecc71]">Contatti</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('soluzione')} className="hover:text-[#2ecc71]">Monitoraggio</button></li>
              <li><button onClick={() => scrollToSection('soluzione')} className="hover:text-[#2ecc71]">Consulenza</button></li>
              <li><button onClick={() => scrollToSection('soluzione')} className="hover:text-[#2ecc71]">Formazione</button></li>
              <li><button onClick={() => scrollToSection('soluzione')} className="hover:text-[#2ecc71]">Supporto</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-300">
              <li>MPCT</li>
              <li>Via Zanetti 1</li>
              <li>34133 Trieste (TS)</li>
              <li>Email: info@vigilantpro.it</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vigilant. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;