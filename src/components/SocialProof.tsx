import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "EasySafe ha rivoluzionato la gestione della sicurezza nella nostra azienda.",
    author: "Marco V.",
    role: "Direttore Operativo",
    company: "TechnoLogistics SpA"
  },
  {
    quote: "Riduzione del 75% degli incidenti sul lavoro nel primo anno di utilizzo.",
    author: "Laura G.",
    role: "Responsabile Sicurezza",
    company: "Industrial Solutions"
  },
  {
    quote: "Un investimento che ha migliorato sia la sicurezza che la produttività.",
    author: "Giuseppe A.",
    role: "CEO",
    company: "Costruzioni Moderne"
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Le aziende che si fidano di noi
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="space-y-4">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-[rgba(242,181,45,255)]">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;