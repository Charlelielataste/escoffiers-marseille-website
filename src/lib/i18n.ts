import { translations } from "@/lib/translations";
import { getRelativeLocaleUrl } from "astro:i18n";

export type Locale = "fr" | "en";

const slugMap: Record<string, Record<Locale, string>> = {
  "/a-propos/": { fr: "/a-propos/", en: "/en/about/" },
  "/en/about/": { fr: "/a-propos/", en: "/en/about/" },
  "/articles/": { fr: "/articles/", en: "/en/articles/" },
  "/en/articles/": { fr: "/articles/", en: "/en/articles/" },
  "/en/articles": {
    fr: "/articles/",
    en: "/en/articles/",
  },
  "/articles": {
    fr: "/articles/",
    en: "/en/articles/",
  },
  "/les-disciples/": { fr: "/les-disciples/", en: "/en/members/" },
  "/en/members/": { fr: "/les-disciples/", en: "/en/members/" },
  "/partenaires/": { fr: "/partenaires/", en: "/en/partners/" },
  "/en/partners/": { fr: "/partenaires/", en: "/en/partners/" },
  "/evenements/": { fr: "/evenements/", en: "/en/events/" },
  "/en/events": {
    fr: "/evenements/",
    en: "/en/events/",
  },
  "/evenements": {
    fr: "/evenements/",
    en: "/en/events/",
  },
  "/en/events/": { fr: "/evenements/", en: "/en/events/" },
  "/nous-rejoindre/": { fr: "/nous-rejoindre/", en: "/en/contact/" },
  "/en/contact/": { fr: "/nous-rejoindre/", en: "/en/contact/" },
  "/nous-rejoindre": { fr: "/nous-rejoindre/", en: "/en/contact/" },
  "/en/contact": { fr: "/nous-rejoindre/", en: "/en/contact/" },
  "/": { fr: "/", en: "/en" },
  "/en": { fr: "/", en: "/en" },
};

/**
 * Return the corresponding URL in the target language
 */
export function getAlternateLanguageUrl(
  pathname: string,
  targetLocale: Locale
): string {
  const mapped = slugMap[pathname];
  if (mapped) return mapped[targetLocale];

  return targetLocale === "fr" ? "/" : "/en";
}

/**
 * Generate the navigation URLs adapted to the current language
 */
export function getNavUrls(currentLocale: Locale) {
  return {
    home: getRelativeLocaleUrl(currentLocale, "/"),
    about: getRelativeLocaleUrl(
      currentLocale,
      currentLocale === "fr" ? "/a-propos" : "/about"
    ),
    articles: getRelativeLocaleUrl(currentLocale, "/articles"),
    events: getRelativeLocaleUrl(
      currentLocale,
      currentLocale === "fr" ? "/evenements" : "/events"
    ),
    members: getRelativeLocaleUrl(
      currentLocale,
      currentLocale === "fr" ? "/les-disciples" : "/members"
    ),
    partners: getRelativeLocaleUrl(
      currentLocale,
      currentLocale === "fr" ? "/partenaires" : "/partners"
    ),
    contact: getRelativeLocaleUrl(
      currentLocale,
      currentLocale === "fr" ? "/nous-rejoindre" : "/contact"
    ),
  };
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}
