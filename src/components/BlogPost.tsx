import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MessageSquare, Bookmark, Share2, Shield } from "lucide-react";
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
    title: "I Costi Nascosti degli Incidenti sul Lavoro",
    content: `
      <h2>Costi Diretti e Indiretti</h2>
      
      <p>Oltre al dolore umano, gli infortuni comportano costi significativi spesso sottovalutati che possono compromettere la sostenibilità aziendale. È fondamentale comprendere i costi diretti e indiretti associati agli incidenti sul lavoro.</p>

      <h3>Costi Diretti</h3>
      <ul>
        <li>Spese mediche e indennità di infortunio</li>
        <li>Costi legali e sanzioni</li>
      </ul>

      <h3>Costi Indiretti</h3>
      <ul>
        <li>Interruzione della produzione</li>
        <li>Danni reputazionali</li>
        <li>Perdita di clienti e contratti</li>
      </ul>

      <h3>Investire nella Prevenzione</h3>
      <p>Investire in misure di prevenzione non è solo un obbligo legale, ma un'opportunità strategica per migliorare la produttività e il benessere aziendale.</p>
    `,
  },
  "smartwatch-sicurezza-lavoro-easysafe-prevenzione-infortuni": {
    title: "EasySafe: Lo Smartwatch che Salva Vite",
    content: `
      <h2>Innovazione nella Sicurezza</h2>
      
      <p>Una rivoluzione nella sicurezza sul lavoro: scopri come un semplice dispositivo può prevenire incidenti e salvare vite. EasySafe Smartwatch è progettato per monitorare i parametri vitali e garantire la sicurezza dei lavoratori.</p>

      <h3>Funzionalità Chiave</h3>
      <ul>
        <li><strong>Tasto SOS:</strong> Richiesta di aiuto immediata in caso di emergenza.</li>
        <li><strong>Rilevamento Cadute:</strong> Allerta automatica in caso di incidenti.</li>
        <li><strong>Monitoraggio Vitali:</strong> Controllo continuo della salute del lavoratore.</li>
      </ul>

      <h3>Vantaggi per le Aziende</h3>
      <p>Implementare EasySafe significa investire nella sicurezza e nel benessere dei propri dipendenti, riducendo i rischi e migliorando la produttività.</p>
    `,
  },
  "monitoraggio-costante-sicurezza-essenziale-2025-implementare": {
    title: "Monitoraggio in Tempo Reale: Il Futuro è Qui",
    content: `
      <h2>Importanza del Monitoraggio Costante</h2>
      
      <p>Il monitoraggio real-time sta trasformando la sicurezza sul lavoro. Scopri perché è diventato indispensabile nel 2025 per garantire un ambiente di lavoro sicuro.</p>

      <h3>Benefici del Monitoraggio</h3>
      <ul>
        <li><strong>Identificazione Immediata dei Rischi:</strong> Interventi tempestivi per prevenire incidenti.</li>
        <li><strong>Analisi Dati:</strong> Miglioramento continuo delle procedure di sicurezza.</li>
        <li><strong>Conformità Normativa:</strong> Rispetto delle normative sulla sicurezza sul lavoro.</li>
      </ul>

      <h3>Soluzioni Tecnologiche</h3>
      <p>Utilizzare tecnologie avanzate per il monitoraggio costante è fondamentale per la sicurezza dei lavoratori e la continuità operativa delle aziende.</p>
    `,
  },
  "prevenzione-attiva-infortuni-oltre-reazione-approccio-proattivo": {
    title: "Prevenire è Meglio che Curare: La Nuova Era della Sicurezza",
    content: `
      <h2>Approccio Proattivo alla Sicurezza</h2>
      
      <p>Un approccio proattivo alla sicurezza non è più un'opzione: è una necessità per il successo aziendale. La prevenzione attiva è fondamentale per ridurre gli infortuni.</p>

      <h3>Vantaggi della Prevenzione Attiva</h3>
      <ul>
        <li><strong>Riduzione degli Incidenti:</strong> Interventi prima che si verifichino problemi.</li>
        <li><strong>Cultura della Sicurezza:</strong> Promuovere un ambiente di lavoro sicuro e responsabile.</li>
        <li><strong>Efficienza e Produttività:</strong> Ambienti di lavoro sicuri sono anche più produttivi.</li>
      </ul>

      <h3>Implementazione di Soluzioni</h3>
      <p>Adottare tecnologie e procedure per la prevenzione attiva è essenziale per garantire la sicurezza dei lavoratori e il successo dell'azienda.</p>
    `,
  },
  "sicurezza-sul-lavoro-facile-accessibile-vigilant-democratizza": {
    title: "Sicurezza Accessibile per Tutti",
    content: `
      <h2>Democratizzazione della Sicurezza</h2>
      
      <p>La sicurezza sul lavoro non deve essere un privilegio delle grandi aziende. Scopri come Vigilant la rende accessibile a tutti, anche alle PMI.</p>

      <h3>Vantaggi di Vigilant</h3>
      <ul>
        <li><strong>Soluzioni Intuitive:</strong> Facili da usare e implementare.</li>
        <li><strong>Costi Accessibili:</strong> Piani tariffari flessibili per tutte le aziende.</li>
        <li><strong>Supporto e Formazione:</strong> Assistenza continua per l'adozione delle soluzioni.</li>
      </ul>

      <h3>Investire nella Sicurezza</h3>
      <p>Investire nella sicurezza è un passo fondamentale per garantire un ambiente di lavoro sicuro e produttivo per tutti.</p>
    `,
  },
  "storie-vere-aziende-sottovalutato-sicurezza-impara-errori": {
    title: "Storie di Sicurezza: Impariamo dagli Errori",
    content: `
      <h2>Lezioni da Casi Reali</h2>
      
      <p>Casi reali di aziende che hanno sottovalutato la sicurezza: lezioni preziose per non commettere gli stessi errori. La sicurezza è fondamentale per il successo aziendale.</p>

      <h3>Esempi di Errori Comuni</h3>
      <ul>
        <li><strong>Sottovalutazione dei Rischi:</strong> Ignorare i pericoli presenti nell'ambiente di lavoro.</li>
        <li><strong>Mancanza di Formazione:</strong> Non fornire ai lavoratori le informazioni necessarie.</li>
        <li><strong>Strumenti Inadeguati:</strong> Utilizzare attrezzature non conformi alle normative.</li>
      </ul>

      <h3>Prevenzione e Sicurezza</h3>
      <p>Imparare dagli errori altrui è fondamentale per costruire un ambiente di lavoro sicuro e responsabile.</p>
    `,
  },
  "futuro-sicurezza-lavoro-digitale-innovazioni-vigilant": {
    title: "Il Futuro Digitale della Sicurezza",
    content: `
      <h2>Innovazioni Tecnologiche</h2>
      
      <p>IoT, AI e cloud computing stanno rivoluzionando la sicurezza sul lavoro. Scopri le innovazioni che stanno plasmando il futuro della sicurezza.</p>

      <h3>Tecnologie Emergenti</h3>
      <ul>
        <li><strong>Internet of Things (IoT):</strong> Sensori e dispositivi connessi per monitorare la sicurezza.</li>
        <li><strong>Intelligenza Artificiale:</strong> Analisi predittiva per prevenire incidenti.</li>
        <li><strong>Wearable Technology:</strong> Dispositivi indossabili per la sicurezza dei lavoratori.</li>
      </ul>

      <h3>Vigilant come Pioniere</h3>
      <p>Vigilant è all'avanguardia nella trasformazione digitale della sicurezza sul lavoro, offrendo soluzioni innovative e integrate.</p>
    `,
  },
  "guida-scelta-software-sicurezza-lavoro-criteri-essenziali-vigilant": {
    title: "Come Scegliere il Software di Sicurezza Ideale",
    content: `
      <h2>Guida alla Scelta del Software</h2>
      
      <p>Una guida pratica per scegliere il software di sicurezza perfetto per la tua azienda. Considera questi 5 criteri essenziali.</p>

      <h3>Criteri Essenziali</h3>
      <ul>
        <li><strong>Completezza delle Funzionalità:</strong> Coprire tutte le aree chiave della gestione della sicurezza.</li>
        <li><strong>Facilità d'Uso:</strong> Interfaccia intuitiva e user-friendly.</li>
        <li><strong>Integrazione:</strong> Compatibilità con i sistemi esistenti.</li>
        <li><strong>Scalabilità:</strong> Adattabilità alle esigenze aziendali in crescita.</li>
        <li><strong>Supporto Clienti:</strong> Assistenza continua e risorse utili.</li>
      </ul>

      <h3>Perché Scegliere Vigilant</h3>
      <p>Vigilant soddisfa tutti i criteri e offre una soluzione completa per la gestione della sicurezza sul lavoro.</p>
    `,
  },
  "migliorare-benessere-aziendale-sicurezza-circolo-virtuoso-successo": {
    title: "Sicurezza e Benessere: Un Binomio Vincente",
    content: `
      <h2>Circolo Virtuoso di Sicurezza e Benessere</h2>
      
      <p>Scopri come la sicurezza sul lavoro può trasformarsi in un potente strumento per il benessere aziendale e il successo. Investire nella sicurezza è un investimento strategico.</p>

      <h3>Impatto della Sicurezza sul Benessere</h3>
      <ul>
        <li><strong>Riduzione dello Stress:</strong> Un ambiente di lavoro sicuro riduce l'ansia.</li>
        <li><strong>Aumento della Fiducia:</strong> I lavoratori si sentono protetti e valorizzati.</li>
        <li><strong>Miglioramento della Produttività:</strong> Ambienti sicuri sono anche più produttivi.</li>
      </ul>

      <h3>Vigilant come Partner Strategico</h3>
      <p>Vigilant supporta le aziende nel creare un circolo virtuoso di sicurezza e benessere, contribuendo al successo a lungo termine.</p>
    `,
  },
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

  return (
    <article className="min-h-screen">
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
              10 min
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
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
