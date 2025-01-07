import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      company: "ThyssenKrupp",
      location: "Torino 2022",
      incident: "Incendio fatale in stabilimento",
      consequences: [
        "7 vittime",
        "Condanne penali ai dirigenti",
        "€7M+ in danni",
        "Crollo reputazionale internazionale"
      ]
    },
    {
      company: "Bartex S.r.l.",
      location: "Bari 2017",
      incident: "Crollo strutturale",
      consequences: [
        "Vittime multiple",
        "Fallimento aziendale",
        "€2M+ in danni",
        "Chiusura definitiva"
      ]
    },
    {
      company: "Quarry Srl",
      location: "Trieste",
      incident: "Incidente sul lavoro",
      consequences: [
        "13 anni di blocco attività",
        "Processo penale",
        "Perdita beni personali",
        "Vendita all'asta"
      ]
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-20 bg-[#1a365d] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat animate-fade-in">
            Trascurare la Sicurezza può farti fallire
          </h2>
          <p className="text-xl opacity-80 animate-fade-in delay-200">
            Storie vere di aziende che hanno sottovalutato la sicurezza
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white"
            onClick={prevCase}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Card className="bg-white/10 backdrop-blur-md border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-[#2ecc71]" />
                <div>
                  <h3 className="text-2xl font-bold">{cases[activeCase].company}</h3>
                  <p className="text-white/60">{cases[activeCase].location}</p>
                </div>
              </div>
              
              <p className="text-xl mb-6 font-semibold">{cases[activeCase].incident}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cases[activeCase].consequences.map((consequence, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 rounded-lg animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {consequence}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white"
            onClick={nextCase}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeCase ? "bg-[#2ecc71]" : "bg-white/30"
                }`}
                onClick={() => setActiveCase(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;