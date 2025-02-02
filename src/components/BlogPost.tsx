import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MessageSquare, Bookmark, Share2, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = {
  "dlgs-81-2008-guida-completa-aziende-adeguarsi-facilmente": {
    title: "Come migliorare la sicurezza",
    content: `
      <h2>La Sicurezza sul Lavoro nel 2025</h2>
      
      <p>Il Decreto Legislativo 81/2008 rappresenta la pietra miliare normativa per la sicurezza in Italia. Nel <strong>2025</strong>, la sua importanza rimane cruciale per tutte le aziende, indipendentemente dal settore o dalle dimensioni.</p>

      <h3>Principi Fondamentali</h3>
      
      <p>Il decreto stabilisce le misure per la tutela della salute e della sicurezza dei lavoratori in tutti i settori di attività. L'obiettivo primario è <strong>prevenire infortuni e malattie professionali</strong>, garantendo un ambiente di lavoro sicuro e salubre.</p>

      <h3>Obblighi del Datore di Lavoro</h3>
      
      <p><strong>Valutazione dei Rischi:</strong> Identificare e valutare tutti i rischi presenti nell'ambiente di lavoro, elaborando il Documento di Valutazione dei Rischi (DVR).</p>
      
      <p><strong>Formazione e Informazione:</strong> Fornire ai lavoratori una formazione adeguata e specifica sui rischi e sulle misure di prevenzione.</p>
      
      <p><strong>Dispositivi di Protezione:</strong> Fornire DPI adeguati ai rischi e assicurarsi che siano utilizzati correttamente.</p>

      <h3>Conseguenze delle Inadempienze</h3>
      
      <p>Le sanzioni previste includono multe pecuniarie, sanzioni penali e possibile blocco dell'attività in caso di gravi violazioni.</p>

      <h3>Soluzioni Tecnologiche</h3>
      
      <p><strong>Vigilant offre:</strong></p>
      <ul>
        <li>Monitoraggio costante dei parametri di sicurezza</li>
        <li>Reportistica automatizzata</li>
        <li>Gestione documentale centralizzata</li>
        <li>Prevenzione proattiva</li>
      </ul>
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
