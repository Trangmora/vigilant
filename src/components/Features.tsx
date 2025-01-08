import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Bell, Activity } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-[rgba(0,0,46,255)]">
            Funzionalità Complete
          </h2>
          <p className="text-xl text-gray-600">
            Scopri tutte le caratteristiche che rendono EasySafe la soluzione più completa
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger 
                value="personal" 
                className="px-2 py-2 text-xs md:text-base whitespace-normal h-auto min-h-[48px] max-w-[120px] mx-auto"
              >
                Sicurezza Personale
              </TabsTrigger>
              <TabsTrigger 
                value="emergency" 
                className="px-2 py-2 text-xs md:text-base whitespace-normal h-auto min-h-[48px] max-w-[120px] mx-auto"
              >
                Gestione Emergenze
              </TabsTrigger>
              <TabsTrigger 
                value="prevention" 
                className="px-2 py-2 text-xs md:text-base whitespace-normal h-auto min-h-[48px] max-w-[120px] mx-auto"
              >
                Prevenzione
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="w-8 h-8 text-[rgba(242,181,45,255)] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[rgba(0,0,46,255)]">Tasto SOS</h3>
                  <p className="text-gray-600">Attivazione immediata delle procedure di emergenza con un solo tocco</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Activity className="w-8 h-8 text-[rgba(242,181,45,255)] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[rgba(0,0,46,255)]">Rilevamento cadute</h3>
                  <p className="text-gray-600">Sistema automatico di rilevamento cadute con alert immediato</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Bell className="w-8 h-8 text-[rgba(242,181,45,255)] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[rgba(0,0,46,255)]">Monitoraggio parametri vitali</h3>
                  <p className="text-gray-600">Controllo continuo dei parametri vitali del lavoratore</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="emergency" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="w-8 h-8 text-[#F59E0B] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#1a365d]">Coordinamento soccorsi</h3>
                  <p className="text-gray-600">Gestione automatizzata delle chiamate di emergenza e coordinamento</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Activity className="w-8 h-8 text-[#F59E0B] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#1a365d]">Localizzazione real-time</h3>
                  <p className="text-gray-600">Tracciamento preciso della posizione del lavoratore in tempo reale</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Bell className="w-8 h-8 text-[#F59E0B] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#1a365d]">Notifiche team</h3>
                  <p className="text-gray-600">Sistema di notifiche immediate per tutto il team di sicurezza</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prevention" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="w-8 h-8 text-[#F59E0B] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#1a365d]">Aree pericolose</h3>
                  <p className="text-gray-600">Mappatura e monitoraggio delle zone a rischio nell'ambiente di lavoro</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Activity className="w-8 h-8 text-[#F59E0B] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#1a365d]">Analisi predittiva</h3>
                  <p className="text-gray-600">Algoritmi di machine learning per prevedere potenziali rischi</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Bell className="w-8 h-8 text-[#F59E0B] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#1a365d]">Alert preventivi</h3>
                  <p className="text-gray-600">Sistema di allerta anticipata per prevenire situazioni pericolose</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Features;