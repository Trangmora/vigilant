import { Shield, Activity, Bell, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#0EA5E9]" />,
    title: "90% Copertura Rischi",
    description: "Protezione completa per la tua azienda e i tuoi dipendenti"
  },
  {
    icon: <Activity className="w-8 h-8 text-[#0EA5E9]" />,
    title: "Monitoraggio Real-time",
    description: "Controllo costante dei parametri di sicurezza"
  },
  {
    icon: <Bell className="w-8 h-8 text-[#0EA5E9]" />,
    title: "Prevenzione Proattiva",
    description: "Identificazione anticipata dei potenziali rischi"
  },
  {
    icon: <ArrowUp className="w-8 h-8 text-[#0EA5E9]" />,
    title: "Prevenzione attiva",
    description: "Risposta immediata in caso di incidenti"
  }
];

const Solution = () => {
  const scrollToCalendly = () => {
    const element = document.getElementById('contatti');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white" id="soluzione">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-[#1a365d]">
            La Soluzione EasySafe
          </h2>
          <p className="text-xl text-gray-600">
            Tecnologia all'avanguardia per la sicurezza sul lavoro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[200px]">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1a365d]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#f8f9fa] rounded-xl p-8 mb-16 transform hover:scale-105 transition-all duration-300 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left space-y-6">
              <h3 className="text-3xl font-bold text-[#1a365d] bg-gradient-to-r from-[#0EA5E9] to-[#F59E0B] bg-clip-text text-transparent">
                Facile, sicuro e accessibile
              </h3>
              <p className="text-gray-600 text-lg">
                Protegge, previene e gestisce rapidamente l'emergenza. È l'80% più efficace del dispositivo uomo a terra
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/20 to-[#F59E0B]/20 rounded-full blur-xl"></div>
                <img 
                  src="/lovable-uploads/b6d05c89-3cc0-417f-a40c-dc727159c26a.png" 
                  alt="EasySafe Smartwatch" 
                  className="relative z-10 max-w-[300px] animate-fade-in hover:rotate-12 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-[#0EA5E9] text-white px-8 py-6 text-lg md:text-xl rounded-full font-semibold hover:bg-[#0EA5E9]/90 transition-colors"
            onClick={scrollToCalendly}
          >
            Scopri tutte le funzionalità
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;