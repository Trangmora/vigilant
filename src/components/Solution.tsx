import { Shield, Activity, Bell, Phone, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#2ecc71]" />,
    title: "90% Copertura Rischi",
    description: "Protezione completa per la tua azienda e i tuoi dipendenti"
  },
  {
    icon: <Activity className="w-8 h-8 text-[#2ecc71]" />,
    title: "Monitoraggio Real-time",
    description: "Controllo costante dei parametri di sicurezza"
  },
  {
    icon: <Bell className="w-8 h-8 text-[#2ecc71]" />,
    title: "Prevenzione Proattiva",
    description: "Identificazione anticipata dei potenziali rischi"
  },
  {
    icon: <ArrowUp className="w-8 h-8 text-[#2ecc71]" />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="mt-16 text-center">
          <img 
            src="/lovable-uploads/748e7bee-a138-4392-995b-89688d6468a1.png" 
            alt="EasySafe Smartwatch" 
            className="max-w-md mx-auto mb-8 rounded-lg shadow-xl animate-fade-in"
          />
          <Button 
            className="bg-[#2ecc71] text-white px-16 py-8 text-xl rounded-full font-semibold hover:bg-[#2ecc71]/90 transition-colors"
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