import type { Locale } from "@/lib/i18n";

export function formatDate(dateString: Date, locale: Locale) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateTime(dateString: Date) {
  const date = new Date(dateString);
  const dateFormatted = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeFormatted = `${hours}h${minutes}`;
  return `${dateFormatted} à ${timeFormatted}`;
}
