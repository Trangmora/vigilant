import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-montserrat">EasySafe</h3>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#2ecc71]">Home</a></li>
              <li><a href="#" className="hover:text-[#2ecc71]">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-[#2ecc71]">Servizi</a></li>
              <li><a href="#" className="hover:text-[#2ecc71]">Contatti</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#2ecc71]">Monitoraggio</a></li>
              <li><a href="#" className="hover:text-[#2ecc71]">Consulenza</a></li>
              <li><a href="#" className="hover:text-[#2ecc71]">Formazione</a></li>
              <li><a href="#" className="hover:text-[#2ecc71]">Supporto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Via dell'Innovazione, 123</li>
              <li>20100 Milano (MI)</li>
              <li>Tel: +39 02 1234567</li>
              <li>Email: info@easysafe.it</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EasySafe. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;