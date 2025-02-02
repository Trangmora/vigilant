import { wearableArticle } from "./articles/WearableArticle";
import { safetyArticle2025 } from "./articles/SafetyArticle2025";
import { reputationArticle } from "./articles/ReputationArticle";
import { monitoringArticle } from "./articles/MonitoringArticle";
import { preventionArticle } from "./articles/PreventionArticle";
import { safetyArticle } from "./articles/SafetyArticle";
import { trainingArticle } from "./articles/TrainingArticle";
import { emergencyArticle } from "./articles/EmergencyArticle";

// Helper function to add the common CTA to all articles
const addCommonCTA = (content: string) => {
  const ctaHtml = `
    <div class="bg-[rgba(0,0,46,0.05)] p-8 rounded-xl mb-12">
      <h3 class="text-2xl font-bold text-[rgba(0,0,46,255)] mb-4">Scopri come proteggere la tua azienda</h3>
      <p class="mb-6">Prenota una chiamata gratuita per conoscere Vigilant e scoprire come può incrementare la sicurezza in azienda in maniera molto facile.</p>
      <a href="#contatti" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">Prenota una chiamata gratuita</a>
    </div>
  `;

  // Add CTA before the closing </article> tag
  return content.replace('</article>', `${ctaHtml}</article>`);
};

// Define the new future article
const futureArticle = {
  title: "Il Futuro della Sicurezza sul Lavoro: Trend e Innovazioni 2024",
  excerpt: "Scopri le tecnologie emergenti che rivoluzioneranno la sicurezza aziendale. L'IA, IoT e Big Data stanno trasformando il settore.",
  content: `
    <article class="prose prose-lg max-w-none">
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mb-6">Introduzione</h2>
        <p>Il mondo della sicurezza sul lavoro è in continua evoluzione, spinto dall'innovazione tecnologica e dalle nuove normative. L'intelligenza artificiale, l'Internet of Things (IoT) e l'analisi dei big data stanno rivoluzionando il modo in cui le aziende gestiscono i rischi, offrendo soluzioni sempre più sofisticate per prevenire incidenti e proteggere i lavoratori. In questo articolo esploreremo i trend e le innovazioni che definiranno il futuro della sicurezza sul lavoro nel 2024, evidenziando come Vigilant sia già all'avanguardia in questo processo di trasformazione.</p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mb-6">IA, IoT e Big Data: Come Stanno Cambiando il Settore</h2>
        <p>Le nuove tecnologie stanno modificando radicalmente il panorama della sicurezza:</p>
        <div class="bg-[#F1F0FB] p-6 rounded-lg mb-6">
          <ul class="list-disc pl-6">
            <li>
              <strong>Intelligenza Artificiale (IA):</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Gli algoritmi di IA analizzano grandi volumi di dati per identificare pattern e prevedere incidenti.</li>
                <li>L'IA consente interventi personalizzati e proattivi, migliorando l'efficacia delle misure di sicurezza.</li>
              </ul>
            </li>
            <li>
              <strong>Internet of Things (IoT):</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Sensori connessi monitorano continuamente le condizioni ambientali e i parametri vitali dei lavoratori, trasmettendo dati in tempo reale.</li>
                <li>L'IoT permette la centralizzazione dei dati provenienti da diverse fonti, offrendo una visione d'insieme della sicurezza.</li>
              </ul>
            </li>
            <li>
              <strong>Big Data:</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>L'analisi dei big data fornisce insight preziosi per ottimizzare le procedure di sicurezza e prendere decisioni informate.</li>
                <li>I dati aggregati aiutano a identificare trend e a prevedere potenziali rischi, migliorando la pianificazione preventiva.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mb-6">Perché Vigilant è Già Allineato alle Prossime Normative</h2>
        <div class="bg-[#F1F0FB] p-6 rounded-lg mb-6">
          <ul class="list-disc pl-6">
            <li><strong>Aggiornamenti Continui:</strong> Il sistema si evolve costantemente, integrando le ultime novità normative e le best practice del settore.</li>
            <li><strong>Flessibilità e Personalizzazione:</strong> Vigilant si adatta alle specifiche esigenze di ogni azienda, offrendo soluzioni su misura che possono essere scalate facilmente.</li>
            <li><strong>Innovazione Costante:</strong> Grazie alla continua ricerca e sviluppo, la piattaforma incorpora tecnologie emergenti, garantendo che l'azienda rimanga competitiva e conforme.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mb-6">Come Prepararsi Oggi per le Sfide di Domani</h2>
        <div class="bg-[#F1F0FB] p-6 rounded-lg mb-6">
          <ul class="list-disc pl-6">
            <li><strong>Investire in Tecnologia:</strong> Integra soluzioni avanzate come Vigilant per monitorare, analizzare e prevenire i rischi, sfruttando l'IA, l'IoT e i big data.</li>
            <li><strong>Formare il Personale:</strong> Aggiorna continuamente le competenze dei dipendenti attraverso formazione digitale e simulazioni pratiche, preparandoli ad affrontare le sfide future.</li>
            <li><strong>Adottare una Visione Strategica:</strong> Considera la sicurezza come un investimento a lungo termine, che protegge il patrimonio aziendale e rafforza la reputazione del brand.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mb-6">Domande frequenti</h2>
        <div class="space-y-6">
          <div class="bg-[#F1F0FB] p-6 rounded-lg">
            <h3 class="font-bold mb-2">Quali settori avranno più benefici dalle nuove tecnologie?</h3>
            <p>I settori ad alto rischio come l'industria, la logistica e la sanità trarranno i maggiori benefici dall'adozione di tecnologie avanzate per la sicurezza, grazie alla capacità di monitorare e intervenire in tempo reale.</p>
          </div>
          <div class="bg-[#F1F0FB] p-6 rounded-lg">
            <h3 class="font-bold mb-2">Come posso rimanere aggiornato sulle innovazioni nel campo della sicurezza?</h3>
            <p>Iscriviti alle newsletter di settore, partecipa a webinar e richiedi una consulenza gratuita con esperti di Vigilant per scoprire le ultime novità.</p>
          </div>
          <div class="bg-[#F1F0FB] p-6 rounded-lg">
            <h3 class="font-bold mb-2">L'innovazione comporta rischi?</h3>
            <p>Come per ogni nuova tecnologia, è importante valutare attentamente l'implementazione. Tuttavia, l'adozione di soluzioni innovative come Vigilant riduce significativamente i rischi grazie alla prevenzione e all'analisi predittiva.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-[rgba(0,0,46,255)] mb-6">Conclusioni</h2>
        <p>Il futuro della sicurezza sul lavoro è già qui. Le tecnologie emergenti stanno rivoluzionando il modo in cui le aziende gestiscono i rischi, rendendo la sicurezza più efficiente, proattiva e integrata. Investire in soluzioni innovative come Vigilant significa prepararsi oggi per le sfide di domani, garantendo ambienti di lavoro sicuri, efficienti e conformi alle normative. Non rimanere indietro: il futuro della sicurezza è digitale, intelligente e proattivo.</p>
      </section>
    </article>
  `
};

// Update the blogPosts object with all articles
export const blogPosts = {
  "tecnologia-wearable-azienda-ridurre-incidenti": {
    ...wearableArticle,
    content: addCommonCTA(wearableArticle.content)
  },
  "sicurezza-lavoro-2025-evitare-sanzioni": {
    ...safetyArticle2025,
    content: addCommonCTA(safetyArticle2025.content)
  },
  "blocco-attivita-danni-reputazionali": {
    ...reputationArticle,
    content: addCommonCTA(reputationArticle.content)
  },
  "monitoraggio-real-time-controllo-costante": {
    ...monitoringArticle,
    content: addCommonCTA(monitoringArticle.content)
  },
  "prevenzione-proattiva-anticipare-rischi": {
    ...preventionArticle,
    content: addCommonCTA(preventionArticle.content)
  },
  "sicurezza-360-soluzione-integrata-2025": {
    ...safetyArticle,
    content: addCommonCTA(safetyArticle.content)
  },
  "formazione-tecnologia-binomio-vincente": {
    ...trainingArticle,
    content: addCommonCTA(trainingArticle.content)
  },
  "gestione-emergenze-tre-passaggi": {
    ...emergencyArticle,
    content: addCommonCTA(emergencyArticle.content)
  },
  "futuro-sicurezza-lavoro-trend-innovazioni-2024": {
    ...futureArticle,
    content: addCommonCTA(futureArticle.content)
  }
};