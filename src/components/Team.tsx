import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Marco",
      role: "Product Manager",
      quote: "Consulente IT e tech con 10 anni di esperienza",
      image: "/lovable-uploads/847843db-90c8-44b0-abfc-a02bcd84cbb5.png",
      initials: "MP"
    },
    {
      name: "Federico",
      role: "Strategy",
      quote: "Imprenditore con 10 anni di esperienza nell'immobiliare e nelle app",
      image: "/lovable-uploads/d72d797d-feb9-4b1c-b092-e38c77b811bf.png",
      initials: "FS"
    },
    {
      name: "Simona",
      role: "Business Development Manager",
      quote: "Esperta in implementazione soluzioni enterprise e di Startup",
      image: "/lovable-uploads/3a916c49-5f9a-40d9-ab75-b28523b2a154.png",
      initials: "SB"
    }
  ];

  return (
    <section className="py-16 bg-white" id="chi-siamo">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-4">
          Chi Siamo
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Un team di esperti dedicati alla sicurezza sul lavoro
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-[rgba(242,181,45,255)]">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-[rgba(0,0,46,255)] text-white text-xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-montserrat font-bold text-xl mb-2">
                  {member.name}
                </h3>
                <p className="text-[rgba(242,181,45,255)] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;