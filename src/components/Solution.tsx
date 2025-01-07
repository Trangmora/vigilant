import { Shield, Activity, Bell, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    icon: <Phone className="w-8 h-8 text-[#2ecc71]" />,
    title: "Gestione Emergenze",
    description: "Risposta immediata in caso di incidenti"
  }
];

const Solution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
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
              <CardContent className="p-6 text-center">
                <div className="mb-6 flex justify-center">
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
            src="/placeholder.svg" 
            alt="EasySafe Smartwatch" 
            className="max-w-md mx-auto mb-8 rounded-lg shadow-xl animate-fade-in"
          />
          <button className="bg-[#2ecc71] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#27ae60] transition-colors">
            Scopri tutte le funzionalità
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;