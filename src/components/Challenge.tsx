import { AlertTriangle, Scale, Shield, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Challenge = () => {
  const challenges = [
    {
      icon: <Building2 className="w-12 h-12 text-[#2ecc71]" />,
      title: "Blocco dell'azienda",
      description: "Ispezioni delle autorità e interruzione delle attività"
    },
    {
      icon: <Scale className="w-12 h-12 text-[#2ecc71]" />,
      title: "Azioni legali",
      description: "Non conformità al D.Lgs 81/2008 e sanzioni"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#2ecc71]" />,
      title: "Strumenti inadeguati",
      description: "Obbligo di strumenti di sicurezza conformi"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-[#2ecc71]" />,
      title: "Danni reputazionali",
      description: "Perdita di clienti e credibilità sul mercato"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#1a365d] animate-fade-in">
            La Sfida della Sicurezza sul Lavoro
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in delay-200">
            Ignorare questi rischi può portare a conseguenze devastanti per la tua azienda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;