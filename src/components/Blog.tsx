import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MessageSquare, Bookmark, Shield } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = [
  {
    title: "Come migliorare la sicurezza",
    slug: "dlgs-81-2008-guida-completa-aziende-adeguarsi-facilmente",
    excerpt: "Il Decreto Legislativo 81/2008, noto anche come Testo Unico sulla Salute e Sicurezza sul Lavoro, rappresenta la pietra miliare normativa per la sicurezza in Italia...",
  },
  {
    title: "I Costi Nascosti degli Incidenti sul Lavoro",
    slug: "incidenti-sul-lavoro-costi-nascosti-prevenzione-produttivita",
    excerpt: "Oltre al dolore umano, gli infortuni comportano costi significativi spesso sottovalutati che possono compromettere la sostenibilità aziendale...",
  },
  {
    title: "EasySafe: Lo Smartwatch che Salva Vite",
    slug: "smartwatch-sicurezza-lavoro-easysafe-prevenzione-infortuni",
    excerpt: "Una rivoluzione nella sicurezza sul lavoro: scopri come un semplice dispositivo può prevenire incidenti e salvare vite...",
  },
  {
    title: "Monitoraggio in Tempo Reale: Il Futuro è Qui",
    slug: "monitoraggio-costante-sicurezza-essenziale-2025-implementare",
    excerpt: "Il monitoraggio real-time sta trasformando la sicurezza sul lavoro. Scopri perché è diventato indispensabile nel 2025...",
  },
  {
    title: "Prevenire è Meglio che Curare: La Nuova Era della Sicurezza",
    slug: "prevenzione-attiva-infortuni-oltre-reazione-approccio-proattivo",
    excerpt: "Un approccio proattivo alla sicurezza non è più un'opzione: è una necessità per il successo aziendale...",
  },
  {
    title: "Sicurezza Accessibile per Tutti",
    slug: "sicurezza-sul-lavoro-facile-accessibile-vigilant-democratizza",
    excerpt: "La sicurezza sul lavoro non deve essere un privilegio delle grandi aziende. Scopri come Vigilant la rende accessibile a tutti...",
  },
  {
    title: "Storie di Sicurezza: Impariamo dagli Errori",
    slug: "storie-vere-aziende-sottovalutato-sicurezza-impara-errori",
    excerpt: "Casi reali di aziende che hanno sottovalutato la sicurezza: lezioni preziose per non commettere gli stessi errori...",
  },
  {
    title: "Il Futuro Digitale della Sicurezza",
    slug: "futuro-sicurezza-lavoro-digitale-innovazioni-vigilant",
    excerpt: "IoT, AI e cloud computing stanno rivoluzionando la sicurezza sul lavoro. Scopri le innovazioni che stanno plasmando il futuro...",
  },
  {
    title: "Come Scegliere il Software di Sicurezza Ideale",
    slug: "guida-scelta-software-sicurezza-lavoro-criteri-essenziali-vigilant",
    excerpt: "Una guida pratica per scegliere il software di sicurezza perfetto per la tua azienda...",
  },
  {
    title: "Sicurezza e Benessere: Un Binomio Vincente",
    slug: "migliorare-benessere-aziendale-sicurezza-circolo-virtuoso-successo",
    excerpt: "Scopri come la sicurezza sul lavoro può trasformarsi in un potente strumento per il benessere aziendale e il successo...",
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Shield className="w-8 h-8 text-[rgba(0,0,46,255)]" />
          <h1 className="text-5xl font-bold text-[rgba(0,0,46,255)] font-montserrat">
            Blog sulla Sicurezza
          </h1>
        </div>

        <Tabs defaultValue="recent" className="mb-12">
          <TabsList className="bg-[#F1F0FB] w-full md:w-auto">
            <TabsTrigger value="recent" className="text-lg">Più Letti</TabsTrigger>
            <TabsTrigger value="popular" className="text-lg">Ultimi</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-none shadow-none hover:bg-gray-50 transition-colors">
              <CardContent className="p-6">
                <div className="mb-3 text-sm text-gray-600 flex items-center gap-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    10 min
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    86
                  </span>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-4 text-[rgba(0,0,46,255)] hover:text-[rgba(0,0,46,0.8)] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="text-[rgba(0,0,46,255)] hover:text-[rgba(0,0,46,0.8)] p-0">
                      Leggi di più <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;