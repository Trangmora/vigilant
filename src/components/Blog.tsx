import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MessageSquare, Bookmark, Shield, TrendingUp, Sparkles } from "lucide-react";
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

const recentPosts = [...blogPosts].sort((a, b) => 0.5 - Math.random()); // Simulating different order for recent posts
const popularPosts = blogPosts.slice(0, 5); // Most read posts (first 5)

const Blog = () => {
  const [currentTab, setCurrentTab] = React.useState("recent");
  const displayedPosts = currentTab === "recent" ? recentPosts : popularPosts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-[#8B5CF6]" />
            </div>
            <h1 className="text-6xl font-bold text-[rgba(0,0,46,255)] font-montserrat mb-4">
              Blog sulla Sicurezza
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Esplora le ultime novità, approfondimenti e best practice sulla sicurezza sul lavoro
            </p>
          </div>

          {/* Tabs Section */}
          <div className="flex justify-center mb-12">
            <Tabs defaultValue="recent" className="w-full max-w-md" onValueChange={setCurrentTab}>
              <TabsList className="grid w-full grid-cols-2 bg-[#F1F0FB]">
                <TabsTrigger value="popular" className="text-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Più Letti
                </TabsTrigger>
                <TabsTrigger value="recent" className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Ultimi
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {displayedPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="mb-4 text-sm text-gray-600 flex items-center gap-6">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#8B5CF6]" />
                      10 min lettura
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-[#8B5CF6]" />
                      86 commenti
                    </span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-4 text-[rgba(0,0,46,255)] group-hover:text-[#8B5CF6] transition-colors line-clamp-2 font-montserrat">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link to={`/blog/${post.slug}`}>
                      <Button 
                        variant="ghost" 
                        className="text-[#8B5CF6] hover:text-[#7C3AED] hover:bg-[#F1F0FB] p-0 group"
                      >
                        Leggi di più 
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-[#F1F0FB] text-gray-400 hover:text-[#8B5CF6]"
                    >
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
