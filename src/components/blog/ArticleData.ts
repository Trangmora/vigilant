import { wearableArticle } from "./articles/WearableArticle";
import { safetyArticle2024 } from "./articles/SafetyArticle2024";
import { reputationArticle } from "./articles/ReputationArticle";
import { monitoringArticle } from "./articles/MonitoringArticle";

export type BlogPost = {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    ...wearableArticle,
    slug: "tecnologia-wearable-azienda-ridurre-incidenti"
  },
  {
    ...safetyArticle2024,
    slug: "sicurezza-lavoro-2024-evitare-sanzioni"
  },
  {
    ...reputationArticle,
    slug: "blocco-attivita-danni-reputazionali"
  },
  {
    ...monitoringArticle,
    slug: "monitoraggio-real-time-controllo-costante"
  }
];