import { translations } from "@/lib/translations";

export type Locale = "fr" | "en";

const slugMap: Record<string, Record<Locale, string>> = {
  "/a-propos": { fr: "/a-propos", en: "/en/about" },
  "/en/about": { fr: "/a-propos", en: "/en/about" },

  "/en/articles": {
    fr: "/articles",
    en: "/en/articles",
  },
  "/articles": {
    fr: "/articles",
    en: "/en/articles",
  },

  "/les-disciples": { fr: "/les-disciples", en: "/en/the-disciples" },
  "/en/the-disciples": { fr: "/les-disciples", en: "/en/the-disciples" },

  "/partenaires": { fr: "/partenaires", en: "/en/partners" },
  "/en/partners": { fr: "/partenaires", en: "/en/partners" },

  "/en/events": {
    fr: "/evenements",
    en: "/en/events",
  },
  "/evenements": {
    fr: "/evenements",
    en: "/en/events",
  },

  "/nous-rejoindre": { fr: "/nous-rejoindre", en: "/en/join-us" },
  "/en/join-us": { fr: "/nous-rejoindre", en: "/en/join-us" },

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
  const baseUrl = currentLocale === "fr" ? "" : "/en";

  return {
    home: currentLocale === "fr" ? "/" : "/en",
    about: `${baseUrl}${currentLocale === "fr" ? "/a-propos" : "/about"}`,
    articles: `${baseUrl}/articles`,
    events: `${baseUrl}${currentLocale === "fr" ? "/evenements" : "/events"}`,
    members: `${baseUrl}${
      currentLocale === "fr" ? "/les-disciples" : "/the-disciples"
    }`,
    partners: `${baseUrl}${
      currentLocale === "fr" ? "/partenaires" : "/partners"
    }`,
    contact: `${baseUrl}${
      currentLocale === "fr" ? "/nous-rejoindre" : "/join-us"
    }`,
  };
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}
