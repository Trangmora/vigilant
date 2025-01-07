import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Marco",
      role: "Product Manager",
      quote: "10 anni di esperienza in soluzioni IoT per la sicurezza",
      image: "/placeholder.svg",
      initials: "MP"
    },
    {
      name: "Federico",
      role: "Strategy Manager",
      quote: "Background in risk management e operations",
      image: "/placeholder.svg",
      initials: "FS"
    },
    {
      name: "Simona",
      role: "Business Development Manager",
      quote: "Esperta in implementazione soluzioni enterprise",
      image: "/placeholder.svg",
      initials: "SB"
    }
  ];

  return (
    <section className="py-24 bg-white">
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
                <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-[#2ecc71]">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-[#1a365d] text-white text-xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-montserrat font-bold text-xl mb-2">
                  {member.name}
                </h3>
                <p className="text-[#2ecc71] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 italic">
                  "{member.quote}"
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