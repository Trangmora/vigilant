import { useEffect } from "react";
import { Shield, Heart, TrendingDown } from "lucide-react";

const MissionStatement = () => {
  return (
    <section className="py-20 bg-white" id="mission">
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
              <div className="text-gray-600">Protezione Completa</div>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-400">
              <Heart className="w-12 h-12 text-[#2ecc71] mx-auto mb-4" />
              <div className="text-gray-600">Monitoraggio Costante</div>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-500">
              <TrendingDown className="w-12 h-12 text-[#2ecc71] mx-auto mb-4" />
              <div className="text-gray-600">Prevenzione Attiva</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;