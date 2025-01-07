import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/ec49cc31-4f9f-446e-b596-e7560c71dba4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat animate-fade-in">
            EasySafe: lavorare in sicurezza è facile
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in delay-200">
            La prima soluzione efficace a 360 gradi per la sicurezza sul lavoro
          </p>
          
          <div className="space-y-6 animate-fade-in delay-300">
            <Button size="lg" className="bg-[#2ecc71] hover:bg-[#2ecc71]/90 text-white px-8 py-6 text-lg">
              Scopri come proteggere i tuoi lavoratori
            </Button>
            
            <div className="text-sm md:text-base text-gray-200">
              <span className="font-semibold">100+ aziende</span> ci hanno già scelto
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;