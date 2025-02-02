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

export const blogPosts: Record<string, { title: string; content: string; excerpt: string }> = {
  "tecnologia-wearable-azienda-ridurre-incidenti": wearableArticle,
  "sicurezza-lavoro-2024-evitare-sanzioni": safetyArticle2024,
  "blocco-attivita-danni-reputazionali": reputationArticle,
  "monitoraggio-real-time-controllo-costante": monitoringArticle,
  "prevenzione-proattiva-anticipare-rischi": preventionArticle,
  "sicurezza-360-soluzione-integrata": solution360Article,
  "formazione-tecnologia-binomio-vincente": trainingArticle,
  "risparmiare-sicurezza-calcola-costo": savingsArticle,
  "emergenze-lavoro-gestione-tre-passaggi": emergencyArticle,
  "futuro-sicurezza-lavoro-trend-innovazioni": futureArticle
};