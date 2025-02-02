import { wearableArticle } from "./articles/WearableArticle";
import { safetyArticle2025 } from "./articles/SafetyArticle2025";
import { reputationArticle } from "./articles/ReputationArticle";
import { monitoringArticle } from "./articles/MonitoringArticle";
import { preventionArticle } from "./articles/PreventionArticle";
import { safetyArticle } from "./articles/SafetyArticle";

export const blogPosts: Record<string, { title: string; content: string; excerpt: string }> = {
  "tecnologia-wearable-azienda-ridurre-incidenti": wearableArticle,
  "sicurezza-lavoro-2025-evitare-sanzioni": safetyArticle2025,
  "blocco-attivita-danni-reputazionali": reputationArticle,
  "monitoraggio-real-time-controllo-costante": monitoringArticle,
  "prevenzione-proattiva-anticipare-rischi": preventionArticle,
  "sicurezza-360-soluzione-integrata-2025": safetyArticle
};