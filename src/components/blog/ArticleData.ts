import { BlogPost } from "@/types/blog";

export const reputationArticle = {
  title: "Blocco Attività e Danni Reputazionali: Come Evitare il Disastro",
  excerpt: "Scopri come prevenire interruzioni attività e perdita clienti con strumenti di sicurezza proattiva. Prenota una demo oggi.",
  content: `
    <article class="prose prose-lg max-w-none">
      <section class="mb-12">
        <h2>Introduzione</h2>
        <p>La sicurezza sul lavoro non riguarda solo la protezione fisica dei dipendenti, ma anche la salvaguardia della continuità operativa e della reputazione aziendale. Un incidente o una violazione delle normative può bloccare le attività e arrecare danni economici e reputazionali considerevoli.</p>
      </section>

      <section class="mb-12">
        <h2>Il costo della negligenza: quando la sicurezza viene trascurata</h2>
        <p>Quando le misure di sicurezza non sono adeguate, le conseguenze possono essere disastrose:</p>
        <ul>
          <li>Interruzioni delle Attività: Un incidente grave o un'ispezione negativa possono costringere l'azienda a fermare le operazioni.</li>
          <li>Sanzioni e Penalità: La mancata conformità al D.Lgs 81/2008 comporta multe e responsabilità penali.</li>
          <li>Danni Reputazionali: La fiducia dei clienti e dei partner può essere seriamente compromessa.</li>
        </ul>
      </section>

      <div class="bg-[rgba(0,0,46,0.05)] p-8 rounded-xl mb-12">
        <h3 class="text-2xl font-bold text-[rgba(0,0,46,255)] mb-4">Non aspettare che sia troppo tardi</h3>
        <p class="mb-6">Prenota una consulenza gratuita per valutare il livello di conformità della tua azienda.</p>
        <a href="/#contatti" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">Richiedi una demo gratuita</a>
      </div>
    </article>
  `
};

export const monitoringArticle = {
  title: "Monitoraggio Real-Time: Perché il Controllo Costante Salva Vite",
  excerpt: "Scopri come il monitoraggio 24/7 di Vigilant previene incidenti e garantisce conformità. Richiedi una prova gratuita.",
  content: `
    <article class="prose prose-lg max-w-none">
      <section class="mb-12">
        <h2>Introduzione</h2>
        <p>In ambienti ad alto rischio, il monitoraggio in tempo reale rappresenta la chiave per prevenire incidenti e garantire la sicurezza. Il sistema Vigilant offre un controllo costante attraverso tecnologie all'avanguardia che monitorano ogni aspetto dell'ambiente di lavoro.</p>
      </section>

      <section class="mb-12">
        <h2>Cosa significa "controllo costante" in ambienti ad alto rischio?</h2>
        <p>Il monitoraggio in tempo reale non è solo un termine tecnico, ma una realtà che trasforma la gestione della sicurezza:</p>
        <ul>
          <li>Sorveglianza 24/7: Vigilant controlla ininterrottamente ogni parametro critico.</li>
          <li>Rilevazione Immediata delle Anomalie: Qualsiasi variazione viene rilevata immediatamente.</li>
          <li>Centralizzazione dei Dati: Visione d'insieme della sicurezza aziendale.</li>
        </ul>
      </section>

      <div class="bg-[rgba(0,0,46,0.05)] p-8 rounded-xl mb-12">
        <h3 class="text-2xl font-bold text-[rgba(0,0,46,255)] mb-4">Scopri il potere del monitoraggio real-time</h3>
        <p class="mb-6">Richiedi una demo per vedere come il controllo costante può proteggere la tua azienda.</p>
        <a href="/#contatti" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">Richiedi una demo gratuita</a>
      </div>
    </article>
  `
};

export const blogPosts: { [key: string]: BlogPost } = {
  "blocco-attivita-danni-reputazionali": {
    ...reputationArticle,
    slug: "blocco-attivita-danni-reputazionali"
  },
  "monitoraggio-real-time-controllo-costante": {
    ...monitoringArticle,
    slug: "monitoraggio-real-time-controllo-costante"
  }
};