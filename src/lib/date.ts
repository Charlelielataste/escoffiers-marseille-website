import type { Locale } from "@/lib/i18n";

export function formatDate(dateString: Date, locale: Locale) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
