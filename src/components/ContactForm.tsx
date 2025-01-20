import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

declare global {
  interface Window {
    Calendly: any;
  }
}

const ContactForm = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/federico-lonza/easysafe',
          parentElement: document.getElementById('calendly-embed'),
          prefill: {},
          utm: {}
        });
      }
    };

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
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-24 bg-gray-50 relative" id="contatti">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[rgba(0,0,46,255)] mb-4 text-center">
            Richiedi una Demo
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Prenota una videochiamata dimostrativa di Vigilant
          </p>
          <div 
            id="calendly-embed" 
            className="relative w-full overflow-hidden"
            style={{ 
              minWidth: '320px',
              height: '700px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              WebkitOverflowScrolling: 'touch'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;