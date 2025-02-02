import { wearableArticle } from "./articles/WearableArticle";
import { safetyArticle2024 } from "./articles/SafetyArticle2024";

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
  }
];