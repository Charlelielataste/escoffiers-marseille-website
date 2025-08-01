// Traductions pour la navigation
export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      articles: "Articles",
      events: "Événements",
      members: "Les Disciples",
      contact: "Nous Rejoindre",
      switchToEn: "English",
      switchToFr: "Français",
    },
    error404: {
      title: "Oups ! Cette page n'existe pas...",
      subtitle:
        "Pas de panique ! Il semble que vous ayez cherché une page qui n'est pas ou n'est plus disponible sur notre site !",
      backHome: "Retour à l'accueil",
      reportProblem: "Signaler un problème",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      articles: "Articles",
      events: "Events",
      members: "The Disciples",
      contact: "Join Us",
      switchToEn: "English",
      switchToFr: "Français",
    },
    error404: {
      title: "Oops! This page doesn't exist...",
      subtitle:
        "Don't panic! It seems you've been looking for a page that's not or is no longer available on our site!",
      backHome: "Back to home",
      reportProblem: "Report a problem",
    },
  },
} as const;
