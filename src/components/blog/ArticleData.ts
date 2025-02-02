import { wearableArticle } from "./articles/WearableArticle";
import { safetyArticle2025 } from "./articles/SafetyArticle2025";
import { reputationArticle } from "./articles/ReputationArticle";

export const blogPosts: Record<string, { title: string; content: string; excerpt: string }> = {
  "tecnologia-wearable-azienda-ridurre-incidenti": wearableArticle,
  "sicurezza-lavoro-2025-evitare-sanzioni": safetyArticle2025,
  "blocco-attivita-danni-reputazionali": reputationArticle
};