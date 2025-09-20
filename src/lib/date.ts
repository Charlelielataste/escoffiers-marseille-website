import type { Locale } from "@/lib/i18n";

export function formatDate(dateString: Date, locale: Locale) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateTime(
  dateString: Date,
  locale: "fr-FR" | "en-US" = "fr-FR"
) {
  const date = new Date(dateString);
  const dateFormatted = date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (locale === "en-US") {
    const timeFormatted = date.toLocaleTimeString(locale, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${dateFormatted} at ${timeFormatted}`;
  } else {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const timeFormatted = `${hours}h${minutes}`;
    return `${dateFormatted} à ${timeFormatted}`;
  }
}

export function getAssociationAge(): number {
  const foundationDate = new Date(2016, 9, 10);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - foundationDate.getFullYear();

  if (currentDate.getMonth() < 3) {
    age--;
  }

  return age;
}
