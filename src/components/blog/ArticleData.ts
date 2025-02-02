import { safetyArticle2024 } from "./articles/SafetyArticle2024";
import { wearableArticle } from "./articles/WearableArticle";

export const blogPosts: Record<string, { title: string; content: string; excerpt: string }> = {
  "tecnologia-wearable-azienda-ridurre-incidenti": wearableArticle,
  "sicurezza-lavoro-2024-evitare-sanzioni": safetyArticle2024
};