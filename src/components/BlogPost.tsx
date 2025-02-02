import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MessageSquare, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = {
  "dlgs-81-2008-guida-completa-aziende-adeguarsi-facilmente": {
    title: "Come migliorare la sicurezza sul lavoro: Guida Completa 2024",
    metaDescription: "Guida completa alla sicurezza sul lavoro secondo il D.Lgs 81/2008. Scopri come implementare un sistema di sicurezza efficace e conforme alle normative vigenti.",
    content: `
      <article class="prose prose-lg max-w-none">
        <h1 class="text-4xl font-bold text-[rgba(0,0,46,255)] mb-8">La Sicurezza sul Lavoro nel 2024: Guida Definitiva al D.Lgs 81/2008</h1>
        
        <div class="bg-[#F1F0FB] p-6 rounded-lg mb-8">
          <p class="font-bold mb-2">In questo articolo scoprirai:</p>
          <ul>
            <li>✓ Come implementare correttamente il D.Lgs 81/2008</li>
            <li>✓ Le migliori pratiche per la sicurezza aziendale</li>
            <li>✓ Strumenti e tecnologie per la prevenzione</li>
            <li>✓ Strategie per la formazione del personale</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Introduzione alla Sicurezza sul Lavoro</h2>
        
        <p>La sicurezza sul lavoro non è solo un obbligo legale, ma un investimento fondamentale per il successo aziendale. Il D.Lgs 81/2008 rappresenta il pilastro normativo della sicurezza sul lavoro in Italia, stabilendo un quadro completo per la tutela della salute e sicurezza dei lavoratori.</p>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Il Quadro Normativo: D.Lgs 81/2008</h2>
        
        <h3 class="text-2xl font-bold mb-4">Principi Fondamentali</h3>
        <p>Il decreto stabilisce principi fondamentali per garantire:</p>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Prevenzione dei rischi</strong> attraverso valutazione e monitoraggio costante</li>
          <li><strong>Formazione continua</strong> del personale a tutti i livelli</li>
          <li><strong>Protezione dei lavoratori</strong> mediante dispositivi e procedure adeguate</li>
          <li><strong>Gestione emergenze</strong> con piani e protocolli specifici</li>
        </ul>

        <h3 class="text-2xl font-bold mb-4">Responsabilità del Datore di Lavoro</h3>
        <p>Le principali responsabilità includono:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Valutazione dei rischi e redazione del DVR</li>
          <li>Nomina delle figure responsabili (RSPP, medico competente)</li>
          <li>Fornitura dei DPI necessari</li>
          <li>Organizzazione della formazione</li>
        </ul>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Implementazione Pratica della Sicurezza</h2>

        <h3 class="text-2xl font-bold mb-4">Valutazione dei Rischi</h3>
        <p>Un'efficace valutazione dei rischi richiede:</p>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Analisi dettagliata</strong> di ogni processo lavorativo</li>
          <li><strong>Identificazione dei pericoli</strong> potenziali</li>
          <li><strong>Valutazione della probabilità</strong> e gravità dei rischi</li>
          <li><strong>Definizione delle misure</strong> di prevenzione e protezione</li>
        </ul>

        <h3 class="text-2xl font-bold mb-4">Formazione del Personale</h3>
        <p>La formazione deve essere:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Specifica per mansione e rischi</li>
          <li>Periodicamente aggiornata</li>
          <li>Documentata e verificabile</li>
          <li>Efficace e coinvolgente</li>
        </ul>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Innovazione e Tecnologia nella Sicurezza</h2>
        
        <p>L'evoluzione tecnologica offre nuovi strumenti per migliorare la sicurezza:</p>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Sistemi di monitoraggio IoT</strong> per il controllo ambientale</li>
          <li><strong>Software di gestione</strong> della sicurezza</li>
          <li><strong>Dispositivi wearable</strong> per il controllo dei parametri vitali</li>
          <li><strong>Realtà virtuale</strong> per la formazione</li>
        </ul>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Gestione delle Emergenze</h2>
        
        <p>Un piano di emergenza efficace deve prevedere:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Procedure chiare e documentate</li>
          <li>Squadre di emergenza formate</li>
          <li>Esercitazioni periodiche</li>
          <li>Sistemi di comunicazione efficienti</li>
        </ul>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Benefici di una Gestione Efficace della Sicurezza</h2>
        
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Riduzione degli infortuni</strong> e delle malattie professionali</li>
          <li><strong>Miglioramento del clima aziendale</strong> e della produttività</li>
          <li><strong>Risparmio sui costi</strong> assicurativi e legali</li>
          <li><strong>Rafforzamento dell'immagine aziendale</strong></li>
        </ul>

        <div class="bg-[#F1F0FB] p-8 rounded-lg mt-12 mb-8">
          <h3 class="text-2xl font-bold mb-4">Trasforma la Sicurezza nella Tua Azienda con Vigilant</h3>
          <p class="mb-6">Vigilant offre una soluzione completa per la gestione della sicurezza sul lavoro:</p>
          <ul class="mb-6 space-y-2">
            <li>✓ Monitoraggio in tempo reale dei parametri di sicurezza</li>
            <li>✓ Gestione documentale automatizzata</li>
            <li>✓ Dashboard interattive per il controllo</li>
            <li>✓ Supporto specializzato 24/7</li>
          </ul>
          <Link to="/#contatti" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">
            Richiedi una Demo Gratuita
          </Link>
        </div>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Conclusioni</h2>
        
        <p>La sicurezza sul lavoro è un investimento fondamentale per il successo aziendale. Un approccio strutturato, supportato da tecnologie moderne e una formazione adeguata, permette di creare un ambiente di lavoro sicuro e produttivo.</p>

        <div class="border-t border-gray-200 mt-12 pt-8">
          <h4 class="font-bold mb-4">Riferimenti Normativi:</h4>
          <ul class="list-disc pl-6 mb-6">
            <li>D.Lgs 81/2008 - Testo Unico sulla Sicurezza sul Lavoro</li>
            <li>ISO 45001 - Sistema di Gestione per la Salute e Sicurezza sul Lavoro</li>
            <li>Linee guida INAIL per la gestione della sicurezza</li>
          </ul>
        </div>
      </article>
    `,
  },
  "incidenti-sul-lavoro-costi-nascosti-prevenzione-produttivita": {
    title: "I Costi Nascosti degli Incidenti sul Lavoro: Guida Completa 2024",
    metaDescription: "Analisi approfondita dei costi diretti e indiretti degli incidenti sul lavoro. Scopri come prevenirli e proteggere la tua azienda.",
    content: `
      <article class="prose prose-lg max-w-none">
        <h1 class="text-4xl font-bold text-[rgba(0,0,46,255)] mb-8">I Costi Nascosti degli Incidenti sul Lavoro: Impatto Finanziario e Soluzioni</h1>
        
        <div class="bg-[#F1F0FB] p-6 rounded-lg mb-8">
          <p class="font-bold mb-2">In questo articolo scoprirai:</p>
          <ul>
            <li>✓ L'impatto finanziario completo degli incidenti sul lavoro</li>
            <li>✓ Come calcolare i costi nascosti degli infortuni</li>
            <li>✓ Strategie efficaci di prevenzione e gestione del rischio</li>
            <li>✓ ROI dell'investimento in sicurezza sul lavoro</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">L'Impatto Finanziario degli Incidenti sul Lavoro</h2>
        
        <p>Gli incidenti sul lavoro comportano costi significativi che spesso vanno ben oltre le spese immediate e visibili. Un'analisi approfondita rivela l'ampio spettro di impatti finanziari che possono compromettere la sostenibilità aziendale.</p>

        <h3 class="text-2xl font-bold mb-4">Costi Diretti</h3>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Spese mediche e riabilitative</strong></li>
          <li><strong>Indennità di infortunio</strong></li>
          <li><strong>Aumenti dei premi assicurativi</strong></li>
          <li><strong>Sanzioni e spese legali</strong></li>
        </ul>

        <h3 class="text-2xl font-bold mb-4">Costi Indiretti</h3>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Perdita di produttività</strong></li>
          <li><strong>Danni all'immagine aziendale</strong></li>
          <li><strong>Costi di sostituzione del personale</strong></li>
          <li><strong>Impatto sul morale dei dipendenti</strong></li>
        </ul>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Il Vero Costo degli Incidenti</h2>
        
        <p>Studi recenti dimostrano che per ogni euro di costo diretto, un'azienda sostiene mediamente 4-5 euro di costi indiretti. Questo "effetto iceberg" può avere un impatto devastante sulla redditività aziendale.</p>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Prevenzione: Un Investimento Strategico</h2>
        
        <p>Investire nella prevenzione non è solo un obbligo legale, ma una scelta strategica che può generare significativi ritorni sull'investimento:</p>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Riduzione dei costi assicurativi</strong></li>
          <li><strong>Miglioramento della produttività</strong></li>
          <li><strong>Rafforzamento della reputazione aziendale</strong></li>
          <li><strong>Maggiore competitività sul mercato</strong></li>
        </ul>

        <div class="bg-[#F1F0FB] p-8 rounded-lg mt-12 mb-8">
          <h3 class="text-2xl font-bold mb-4">Proteggi la Tua Azienda con Vigilant</h3>
          <p class="mb-6">Vigilant offre una soluzione completa per la prevenzione degli incidenti sul lavoro:</p>
          <ul class="mb-6 space-y-2">
            <li>✓ 90% di copertura dei rischi aziendali</li>
            <li>✓ Monitoraggio real-time dei parametri di sicurezza</li>
            <li>✓ Sistema di prevenzione proattiva</li>
            <li>✓ 80% più efficace dei sistemi tradizionali</li>
          </ul>
          <Link to="/#contatti" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">
            Richiedi una Demo Gratuita
          </Link>
        </div>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Conclusioni</h2>
        
        <p>La prevenzione degli incidenti sul lavoro è un investimento che genera valore per l'azienda, i dipendenti e gli stakeholder. Con le giuste strategie e strumenti, è possibile creare un ambiente di lavoro più sicuro e produttivo.</p>

        <div class="border-t border-gray-200 mt-12 pt-8">
          <h4 class="font-bold mb-4">Riferimenti e Approfondimenti:</h4>
          <ul class="list-disc pl-6 mb-6">
            <li>Statistiche INAIL sugli infortuni sul lavoro</li>
            <li>Studi sul ROI della sicurezza sul lavoro</li>
            <li>Analisi dei costi degli incidenti in ambito industriale</li>
          </ul>
        </div>
      </article>
    `,
  },
  "smartwatch-sicurezza-lavoro-easysafe-prevenzione-infortuni": {
    title: "EasySafe: Lo Smartwatch che Salva Vite",
    content: `
      <article class="prose prose-lg max-w-none">
        <h1 class="text-4xl font-bold text-[rgba(0,0,46,255)] mb-8">EasySafe: La Rivoluzione nella Sicurezza sul Lavoro</h1>
        
        <div class="bg-[#F1F0FB] p-6 rounded-lg mb-8">
          <p class="font-bold mb-2">In questo articolo scoprirai:</p>
          <ul>
            <li>✓ Come EasySafe può prevenire incidenti sul lavoro</li>
            <li>✓ Funzionalità chiave dello smartwatch</li>
            <li>✓ Vantaggi per le aziende e i lavoratori</li>
            <li>✓ Testimonianze di chi lo utilizza</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Innovazione nella Sicurezza</h2>
        
        <p>EasySafe Smartwatch è progettato per monitorare i parametri vitali e garantire la sicurezza dei lavoratori. Con funzionalità avanzate, rappresenta un passo avanti nella prevenzione degli infortuni.</p>

        <h3 class="text-2xl font-bold mb-4">Funzionalità Chiave</h3>
        <ul class="list-disc pl-6 mb-6">
          <li><strong>Tasto SOS:</strong> Richiesta di aiuto immediata in caso di emergenza.</li>
          <li><strong>Rilevamento Cadute:</strong> Allerta automatica in caso di incidenti.</li>
          <li><strong>Monitoraggio Vitali:</strong> Controllo continuo della salute del lavoratore.</li>
        </ul>

        <h3 class="text-2xl font-bold mb-4">Vantaggi per le Aziende</h3>
        <p>Implementare EasySafe significa investire nella sicurezza e nel benessere dei propri dipendenti, riducendo i rischi e migliorando la produttività.</p>

        <div class="bg-[#F1F0FB] p-8 rounded-lg mt-12 mb-8">
          <h3 class="text-2xl font-bold mb-4">Scopri EasySafe</h3>
          <p class="mb-6">Vigilant offre una soluzione completa per la sicurezza sul lavoro:</p>
          <ul class="mb-6 space-y-2">
            <li>✓ Monitoraggio in tempo reale dei parametri vitali</li>
            <li>✓ Sistema di allerta immediata in caso di emergenza</li>
            <li>✓ Facilità d'uso e implementazione</li>
            <li>✓ Supporto e formazione continua</li>
          </ul>
          <Link to="/#contatti" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">
            Richiedi una Demo Gratuita
          </Link>
        </div>

        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mt-12 mb-6">Conclusioni</h2>
        
        <p>EasySafe rappresenta un'innovazione fondamentale per la sicurezza sul lavoro, contribuendo a creare un ambiente di lavoro più sicuro e protetto.</p>

        <div class="border-t border-gray-200 mt-12 pt-8">
          <h4 class="font-bold mb-4">Testimonianze:</h4>
          <ul class="list-disc pl-6 mb-6">
            <li>"EasySafe ha rivoluzionato la gestione della sicurezza nella nostra azienda." - Marco V., Direttore Operativo</li>
            <li>"Riduzione del 75% degli incidenti sul lavoro nel primo anno di utilizzo." - Laura G., Responsabile Sicurezza</li>
            <li>"Un investimento che ha migliorato sia la sicurezza che la produttività." - Giuseppe A., CEO</li>
          </ul>
        </div>
      </article>
    `,
  },
  // Additional articles would follow the same structure...
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Articolo non trovato</h1>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna al blog
          </Button>
        </Link>
      </div>
    );
  }

  const handleDemoClick = () => {
    window.location.href = '/#contatti';
  };

  const processedContent = post.content.replace(
    /<Link to="\/#contatti"([^>]*)>/g,
    '<button onclick="window.location.href=\'/#contatti\'" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">'
  ).replace(
    /<\/Link>/g,
    '</button>'
  );

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#F1F0FB] to-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="text-[rgba(0,0,46,255)]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna al blog
              </Button>
            </Link>
          </div>

          <div className="mb-3 text-sm text-gray-600 flex items-center gap-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              15 min
            </span>
            <span className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              86
            </span>
          </div>
          
          <h1 className="text-5xl font-bold mb-8 text-[rgba(0,0,46,255)] font-montserrat">
            {post.title}
          </h1>

          <div className="flex gap-4 mb-12">
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </div>
    </div>
  );
};

export default BlogPost;