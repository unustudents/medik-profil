/**
 * ============================================================
 * @/services — Barrel Export
 * ============================================================
 *
 * Satu pintu masuk untuk semua service functions.
 *
 *   import { getHomePage, getDoctors, getArticles } from "@/services";
 */

export { getHomePage } from "./homepage.service";
export { getDoctors, getDoctorBySlug } from "./doctors.service";
export { getArticles, getArticleBySlug } from "./articles.service";
export { getAgendaEvents, getAgendaBySlug } from "./agenda.service";
export { getRooms, getRoomBySlug } from "./rooms.service";
export { getPartners } from "./partners.service";
export { getPaymentMethods } from "./payment.service";
