import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCalendly = () => {
    const element = document.getElementById('contatti');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden" id="home">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/ec49cc31-4f9f-446e-b596-e7560c71dba4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,46,0.85)] backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-3xl md:text-6xl font-bold font-montserrat animate-fade-in">
            EasySafe: lavorare in sicurezza è facile
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 animate-fade-in delay-200">
            La prima soluzione efficace a 360 gradi per la sicurezza sul lavoro
          </p>
          
          <div className="space-y-4 animate-fade-in delay-300">
            <Button 
              size="lg" 
              className="bg-[rgba(242,181,45,255)] hover:bg-[rgba(242,181,45,0.9)] text-white px-6 py-5 text-sm md:text-lg md:px-8 md:py-6"
              onClick={scrollToCalendly}
            >
              Scopri come proteggere la tua azienda
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;