import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "D.Lgs 81/2008: Guida Completa per Aziende nel 2025 + Come Adeguarsi Facilmente",
    slug: "dlgs-81-2008-guida-completa-aziende-adeguarsi-facilmente",
    excerpt: "Il Decreto Legislativo 81/2008, noto anche come Testo Unico sulla Salute e Sicurezza sul Lavoro, rappresenta la pietra miliare normativa per la sicurezza in Italia...",
  },
  {
    title: "Incidenti sul Lavoro: Costi Nascosti e Come la Prevenzione Aumenta la Produttività",
    slug: "incidenti-sul-lavoro-costi-nascosti-prevenzione-produttivita",
    excerpt: "Gli incidenti sul lavoro rappresentano una tragica realtà che colpisce non solo i lavoratori e le loro famiglie, ma anche le aziende...",
  },
  {
    title: "Smartwatch per la Sicurezza sul Lavoro: EasySafe Rivoluziona la Prevenzione Infortuni",
    slug: "smartwatch-sicurezza-lavoro-easysafe-prevenzione-infortuni",
    excerpt: "Nel panorama della sicurezza sul lavoro, l'innovazione tecnologica gioca un ruolo sempre più cruciale...",
  },
  {
    title: "Monitoraggio Costante della Sicurezza: Perché è Essenziale nel 2025 e Come Implementarlo",
    slug: "monitoraggio-costante-sicurezza-essenziale-2025-implementare",
    excerpt: "In un contesto lavorativo sempre più dinamico e complesso, il monitoraggio costante della sicurezza è diventato un elemento imprescindibile...",
  },
  {
    title: "Prevenzione Attiva degli Infortuni: Oltre la Reazione, Verso un Approccio Proattivo",
    slug: "prevenzione-attiva-infortuni-oltre-reazione-approccio-proattivo",
    excerpt: "Troppo spesso, la sicurezza sul lavoro è affrontata con un approccio reattivo: si interviene solo dopo che l'incidente è avvenuto...",
  },
  {
    title: "Sicurezza sul Lavoro Facile e Accessibile: Vigilant Democratizza la Protezione Aziendale",
    slug: "sicurezza-sul-lavoro-facile-accessibile-vigilant-democratizza",
    excerpt: "Per troppo tempo, la sicurezza sul lavoro è stata percepita come un ambito complesso, costoso e riservato solo alle grandi aziende...",
  },
  {
    title: "Storie Vere di Aziende che Hanno Sottovalutato la Sicurezza: Impara dai Loro Errori",
    slug: "storie-vere-aziende-sottovalutato-sicurezza-impara-errori",
    excerpt: "Le statistiche e le normative sulla sicurezza sul lavoro sono importanti, ma spesso sono le storie vere, crude e reali di aziende che hanno sottovalutato la sicurezza a lasciare il segno più profondo...",
  },
  {
    title: "Il Futuro della Sicurezza sul Lavoro è Digitale: Scopri le Innovazioni di Vigilant",
    slug: "futuro-sicurezza-lavoro-digitale-innovazioni-vigilant",
    excerpt: "La sicurezza sul lavoro sta vivendo una profonda trasformazione, guidata dalla digitalizzazione e dall'innovazione tecnologica...",
  },
  {
    title: "Guida alla Scelta del Software di Sicurezza sul Lavoro: 5 Criteri Essenziali e Perché Vigilant è la Scelta Giusta",
    slug: "guida-scelta-software-sicurezza-lavoro-criteri-essenziali-vigilant",
    excerpt: "Nell'era digitale, il software di sicurezza sul lavoro è diventato uno strumento indispensabile per le aziende che vogliono gestire la sicurezza in modo efficace...",
  },
  {
    title: "Migliorare il Benessere Aziendale con la Sicurezza: Un Circolo Virtuoso per il Successo",
    slug: "migliorare-benessere-aziendale-sicurezza-circolo-virtuoso-successo",
    excerpt: "Spesso si pensa alla sicurezza sul lavoro come a un obbligo normativo, un costo da sostenere per evitare sanzioni e problemi legali...",
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[rgba(0,0,46,255)] font-montserrat">
          Blog EasySafe
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-[rgba(0,0,46,255)] line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`}>
                  <Button className="w-full bg-[rgba(242,181,45,255)] hover:bg-[rgba(242,181,45,255)]/90 text-[rgba(0,0,46,255)]">
                    Leggi di più <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
