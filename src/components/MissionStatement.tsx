import { useEffect, useState } from "react";
import { Shield, Heart, TrendingDown } from "lucide-react";

const MissionStatement = () => {
  const [counts, setCounts] = useState({
    incidents: 0,
    lives: 0,
    reduction: 0,
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const interval = duration / steps;

    const targetValues = {
      incidents: 1250,
      lives: 85,
      reduction: 90,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep === steps) {
        setCounts(targetValues);
        clearInterval(timer);
        return;
      }

      setCounts({
        incidents: Math.floor((targetValues.incidents / steps) * currentStep),
        lives: Math.floor((targetValues.lives / steps) * currentStep),
        reduction: Math.floor((targetValues.reduction / steps) * currentStep),
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#1a365d] animate-fade-in">
            Crediamo che nel 2024 nessuno debba più morire o farsi male sul lavoro
          </h2>
          
          <p className="text-xl text-gray-600 animate-fade-in delay-200">
            Grazie alla tecnologia insieme possiamo raggiungere questo obiettivo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-300">
              <Shield className="w-12 h-12 text-[#2ecc71] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#1a365d] mb-2">
                {counts.incidents}+
              </div>
              <div className="text-gray-600">Incidenti prevenuti</div>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-400">
              <Heart className="w-12 h-12 text-[#2ecc71] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#1a365d] mb-2">
                {counts.lives}+
              </div>
              <div className="text-gray-600">Vite salvate</div>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-500">
              <TrendingDown className="w-12 h-12 text-[#2ecc71] mx-auto mb-4" />
              <div className="text-4xl font-bold text-[#1a365d] mb-2">
                {counts.reduction}%
              </div>
              <div className="text-gray-600">Riduzione rischi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;