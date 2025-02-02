import { wearableArticle } from "./articles/WearableArticle";
import { safetyArticle2024 } from "./articles/SafetyArticle2024";
import { reputationArticle } from "./articles/ReputationArticle";
import { monitoringArticle } from "./articles/MonitoringArticle";
import { preventionArticle } from "./articles/PreventionArticle";
import { solution360Article } from "./articles/Solution360Article";
import { trainingArticle } from "./articles/TrainingArticle";
import { savingsArticle } from "./articles/SavingsArticle";
import { emergencyArticle } from "./articles/EmergencyArticle";
import { futureArticle } from "./articles/FutureArticle";

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
  },
  {
    ...preventionArticle,
    slug: "prevenzione-proattiva-anticipare-rischi"
  },
  {
    ...solution360Article,
    slug: "sicurezza-360-soluzione-integrata"
  },
  {
    ...trainingArticle,
    slug: "formazione-tecnologia-binomio-vincente"
  },
  {
    ...savingsArticle,
    slug: "risparmiare-sicurezza-calcola-costo"
  },
  {
    ...emergencyArticle,
    slug: "emergenze-lavoro-gestione-tre-passaggi"
  },
  {
    ...futureArticle,
    slug: "futuro-sicurezza-lavoro-trend-innovazioni"
  }
];