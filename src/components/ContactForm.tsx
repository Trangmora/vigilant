import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui andrebbe l'integrazione con Typeform
    toast({
      title: "Richiesta inviata",
      description: "Grazie per averci contattato. Ti risponderemo al più presto!",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
            Richiedi una Demo
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Compila il form sottostante per prenotare una demo personalizzata di EasySafe
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-2">
              <Label htmlFor="name">Nome e Cognome</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Azienda</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Messaggio</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Descrivici brevemente le tue esigenze..."
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-[#2ecc71] hover:bg-[#2ecc71]/90"
            >
              Invia Richiesta
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;