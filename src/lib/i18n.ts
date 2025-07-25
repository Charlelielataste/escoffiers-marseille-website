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
  } else if (pathname.startsWith("/fr")) {
    return "fr";
  }
  // Par défaut français si pas de préfixe reconnu
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

  // Enlever le préfixe de langue actuel
  let cleanPath = pathname.replace(/^\/[a-z]{2}/, "");
  if (!cleanPath.startsWith("/")) {
    cleanPath = "/" + cleanPath;
  }

  // Ajouter le nouveau préfixe de langue
  return `/${targetLocale}${cleanPath}`;
}

/**
 * Génère les URLs de navigation adaptées à la langue courante
 */
export function getNavUrls(currentLocale: Locale) {
  return {
    home: getRelativeLocaleUrl(currentLocale, "/"),
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
