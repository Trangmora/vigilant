import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

declare global {
  interface Window {
    Calendly: any;
  }
}

const ContactForm = () => {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/federico-lonza/easysafe',
        parentElement: document.getElementById('calendly-embed'),
        prefill: {},
        utm: {}
      });
    }

    const handleCalendlyEvent = (e: any) => {
      if (e.data.event === 'calendly.event_scheduled') {
        toast({
          title: "Appuntamento Confermato",
          description: "Grazie per aver prenotato una demo di EasySafe. Riceverai una email di conferma.",
        });
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="py-24 bg-gray-50" id="contatti">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
            Richiedi una Demo
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Prenota una videochiamata dimostrativa di EasySafe
          </p>
          <div 
            id="calendly-embed" 
            className="overflow-hidden rounded-lg shadow-lg"
            style={{ 
              minWidth: '320px',
              height: '700px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;