import { BlogPost } from "@/types/blog";
import { safetyArticle2024 } from "./articles/SafetyArticle2024";
import { wearableArticle } from "./articles/WearableArticle";
import { reputationArticle } from "./articles/ReputationArticle";
import { monitoringArticle } from "./articles/MonitoringArticle";
import { preventionArticle } from "./articles/PreventionArticle";

export const blogPosts: { [key: string]: BlogPost } = {
  "sicurezza-lavoro-2024": {
    ...safetyArticle2024,
    slug: "sicurezza-lavoro-2024"
  },
  "tecnologia-wearable-riduzione-incidenti": {
    ...wearableArticle,
    slug: "tecnologia-wearable-riduzione-incidenti"
  },
  "blocco-attivita-danni-reputazionali": {
    ...reputationArticle,
    slug: "blocco-attivita-danni-reputazionali"
  },
  "monitoraggio-real-time-controllo-costante": {
    ...monitoringArticle,
    slug: "monitoraggio-real-time-controllo-costante"
  },
  "prevenzione-proattiva-anticipare-rischi": {
    ...preventionArticle,
    slug: "prevenzione-proattiva-anticipare-rischi"
  }
};