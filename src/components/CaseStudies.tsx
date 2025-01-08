import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveCase((prev) => (prev + 1) % cases.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoplay, cases.length]);

  const nextCase = () => {
    setAutoplay(false);
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setAutoplay(false);
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-16 bg-[#0EA5E9]/10" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[rgba(0,0,46,255)] animate-fade-in">
            Storie vere
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in delay-200">
            Storie vere di aziende che hanno sottovalutato la sicurezza
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[rgba(0,0,46,255)] hover:bg-[rgba(242,181,45,255)]/10"
            onClick={prevCase}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Card className="bg-white shadow-xl border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-[rgba(242,181,45,255)]" />
                <div>
                  <h3 className="text-2xl font-bold text-[rgba(0,0,46,255)]">{cases[activeCase].company}</h3>
                  <p className="text-gray-600">{cases[activeCase].location}</p>
                </div>
              </div>
              
              <p className="text-xl mb-6 font-semibold text-[rgba(0,0,46,255)]">{cases[activeCase].incident}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cases[activeCase].consequences.map((consequence, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[rgba(242,181,45,255)]/5 rounded-lg animate-fade-in hover:bg-[rgba(242,181,45,255)]/10 transition-colors text-gray-700"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[rgba(0,0,46,255)] hover:bg-[rgba(242,181,45,255)]/10"
            onClick={nextCase}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeCase ? "bg-[rgba(242,181,45,255)]" : "bg-[rgba(242,181,45,255)]/30"
                }`}
                onClick={() => {
                  setAutoplay(false);
                  setActiveCase(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;