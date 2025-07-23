import { translations } from "@/lib/translations";
import { getRelativeLocaleUrl } from "astro:i18n";

// Types pour les langues supportées
export type Locale = "fr" | "en";

/**
 * Détecte la langue courante à partir de l'URL
 */
export function getCurrentLocale(pathname: string): Locale {
  if (pathname.startsWith("/en")) {
    return "en";
  }
  return "fr";
}

/**
 * Génère l'URL pour changer de langue en gardant la même page
 */
export function getAlternateLanguageUrl(
  pathname: string,
  targetLocale: Locale
): string {
  const currentLocale = getCurrentLocale(pathname);

  if (currentLocale === targetLocale) {
    return pathname;
  }

  // Si on est en français (pas de préfixe), ajouter /en
  if (currentLocale === "fr" && targetLocale === "en") {
    return `/en${pathname}`;
  }

  // Si on est en anglais (avec /en), enlever le préfixe
  if (currentLocale === "en" && targetLocale === "fr") {
    return pathname.replace(/^\/en/, "") || "/";
  }

  return pathname;
}

/**
 * Génère les URLs de navigation adaptées à la langue courante
 */
export function getNavUrls(currentLocale: Locale) {
  return {
    home: currentLocale === "fr" ? "/" : "/en",
    about: getRelativeLocaleUrl(currentLocale, "/about"),
    articles: getRelativeLocaleUrl(currentLocale, "/articles"),
    events: getRelativeLocaleUrl(currentLocale, "/events"),
    members: getRelativeLocaleUrl(currentLocale, "/members"),
    contact: getRelativeLocaleUrl(currentLocale, "/contact"),
  };
}

/**
 * Obtient les traductions pour la langue courante
 */
export function getTranslations(locale: Locale) {
  return translations[locale];
}
