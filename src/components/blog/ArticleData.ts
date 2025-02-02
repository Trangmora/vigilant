import { wearableArticle } from "./articles/WearableArticle";
import { safetyArticle2025 } from "./articles/SafetyArticle2025";
import { reputationArticle } from "./articles/ReputationArticle";
import { monitoringArticle } from "./articles/MonitoringArticle";
import { preventionArticle } from "./articles/PreventionArticle";
import { safetyArticle } from "./articles/SafetyArticle";
import { trainingArticle } from "./articles/TrainingArticle";
import { emergencyArticle } from "./articles/EmergencyArticle";
import { futureArticle2024 } from "./articles/FutureArticle2024";

// Helper function to add the common CTA to all articles
const addCommonCTA = (content: string) => {
  const ctaHtml = `
    <div class="bg-[rgba(0,0,46,0.05)] p-8 rounded-xl mb-12">
      <h3 class="text-2xl font-bold text-[rgba(0,0,46,255)] mb-4">Scopri come proteggere la tua azienda</h3>
      <p class="mb-6">Prenota una chiamata gratuita per conoscere Vigilant e scoprire come può incrementare la sicurezza in azienda in maniera molto facile.</p>
      <a href="/#contatti" class="inline-block bg-[rgba(0,0,46,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgba(0,0,46,0.9)] transition-colors">Prenota una chiamata gratuita</a>
    </div>
  `;

  // Remove any existing CTA boxes before adding the final one
  const contentWithoutCTAs = content.replace(/<div class="bg-\[rgba\(0,0,46,0\.05\)\].*?<\/div>\s*<\/div>/gs, '');
  
  // Add CTA before the closing </article> tag
  return contentWithoutCTAs.replace('</article>', `${ctaHtml}</article>`);
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
    ...futureArticle2024,
    content: addCommonCTA(futureArticle2024.content)
  }
};