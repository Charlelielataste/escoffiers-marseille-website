import MissionSection from "@/components/about/MissionSection.astro";

// Traductions pour la navigation
export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      articles: "Articles",
      events: "Événements",
      members: "Les Disciples",
      partners: "Nos Partenaires",
      contact: "Nous Rejoindre",
      contactUs: "Contactez-nous",
      switchToEn: "English",
      switchToFr: "Français",
    },
    footer: {
      description:
        "Association culinaire dédiée à la promotion de l'art culinaire et à la transmission des valeurs d'excellence d'Auguste Escoffier.",
      usefulLinks: "Liens utiles",
      legalMentions: "Mentions légales",
      privacyPolicy: "Politique de confidentialité",
      navigation: "Navigation",
      disableCursor: "Désactiver curseur personnalisé",
      enableCursor: "Activer curseur personnalisé",
      allRightsReserved: "Tous droits réservés",
    },
    home: {
      associationsSection: {
        title: "Au Service de la Gastronomie",
        description:
          "Nous soutenons activement par notre expertise culinaire la Gastronomie sous toutes ses formes.",
        dinnerTitle: "Dîners de Gala",
        dinnerDescription:
          "Organisation d'événements gastronomiques en faveur des associations caritatives",
        culinaryTrainingTitle: "Formation Culinaire",
        culinaryTrainingDescription:
          "Ateliers culinaires pour transmettre notre passion et nos valeurs et ainsi susciter les vocations.",
        supportTitle: "Soutien aux Etablissements d’Enseignement",
        supportDescription:
          "Accompagner la transmission des savoirs et des savoirs faire de la Gastronomie auprès des jeunes générations.",
      },
      volunteeringSection: {
        title: "Engagement",
        description:
          "Nos Chefs et nos Maitres d’Hôtel mettent leur expertise au service des causes et des événements de la région Provençale.",
        charityTitle: "Bénévolat",
        charityDescription:
          "Des professionnels expérimentés qui donnent de leur temps et de leur savoir-faire.",
        partnershipTitle: "Partenariats",
        partnershipDescription:
          "Collaboration avec les associations locales pour des événements caritatifs et gastronomiques.",
        gastronomyTitle: "Gastronomie",
        gastronomyDescription:
          "Organisation de dîners de gala et d'événements culinaires pour défendre la Gastronomie.",
      },
      lastActionsSection: {
        title: "Nos Actions Récentes",
      },
      nextEventsSection: {
        title: "Nos Événements à venir",
      },
      internationalBanner: "Nous sommes une délégation de l'association",
      partnersBanner: "Nos Partenaires",
      institutionSection: {
        title: "Une Institution Culinaire",
        description:
          "Les Disciples d’Escoffier représentent l'excellence culinaire française depuis plus de soixante-dix ans. Notre Délégation Provence Mediterranée perpétue cette tradition d'excellence depuis 2016.",
        nextParagraph:
          "Nous sommes fiers de porter haut les valeurs communes de tous les Disciples d'Escoffier, héritées du grand Auguste Escoffier.",
        boucleAlt: "Boucle d'Escoffier",
        values: {
          title: "Nos Valeurs",
          honor: "Honorer la mémoire et l'héritage d'Auguste Escoffier.",
          promote: "Promouvoir les métiers de cuisinier et de bouches.",
          bringTogether: "Rapprocher la cuisine et les métiers de la salle.",
          transmit: "Assurer la transmission des savoirs.",
          organize: "Organiser des manifestations gastronomiques.",
          value: "Valoriser les produits de qualité.",
        },
      },
    },
    about: {
      teamSection: {
        title: "Notre Équipe",
        description:
          "Notre équipe est composée de professionnels passionnés, formés tant aux techniques culinaires traditionnelles qu’aux plus modernes et innovantes et engagés dans la transmission de notre savoir-faire.",
        nextParagraph:
          "Chaque membre apporte son expertise unique, créant une synergie qui nous permet de réaliser des événements culinaires d'exception au service d’actions caritatives.",
        yearsOfExperience: "Années d'expérience",
        eventsPerYear: "Événements par an",
      },
      valuesSection: {
        title: "Nos Valeurs",
        description: "Les principes qui guident notre action au quotidien",
      },
      missionSection: {
        title: "Notre Mission",
        description:
          "En tant que disciples d'Auguste Escoffier, nous nous engageons à perpétuer l'excellence de la cuisine française tout en servant notre communauté provençale avec passion et dévouement.",
        nextParagraph:
          "Notre institution bénévole met son expertise culinaire au service des causes locales, créant des moments de partage et de convivialité autour de la gastronomie.",
        excellence: "Excellence culinaire",
        charity: "Bénévolat",
        tradition: "Tradition française",
      },
    },
    articles: {
      category: "Filtres par catégories",
      allArticles: "Tous les articles",
      featuredArticle: "Article à la une",
      readArticle: "Lire l'article",
      noArticlesCategory: "Aucun article correspondant à cette catégorie",
    },
    MobileFacebookSection: {
      title: "Suivez-nous sur Facebook !",
      description:
        "Rejoignez notre communauté des Disciples d'Escoffier Provence Méditerranée et découvrez nos actualités, événements et initiatives culinaires.",
      button: "Nous suivre",
    },
    events: {
      seeMore: "En savoir plus",
    },
    members: {
      contact: "Contactez-moi",
    },
    contact: {
      contactEmail:
        "Pour toutes autres demandes, n'hésitez pas à nous contacter :",
      form: {
        firstName: "Prénom",
        firstNamePlaceholder: "Votre prénom",
        lastName: "Nom",
        lastNamePlaceholder: "Votre nom",
        email: "Adresse email",
        emailPlaceholder: "votre.email@exemple.com",
        phone: "Téléphone",
        phonePlaceholder: "06 12 34 56 78",
        profession: "Profession",
        professionPlaceholder: "Quelle est votre profession ?",
        city: "Ville",
        cityPlaceholder: "Votre ville",
        zipCode: "Code postal",
        zipCodePlaceholder: "Votre code postal",
        message: "Parlez-nous de votre motivation",
        messagePlaceholder:
          "Expliquez-nous pourquoi vous souhaitez rejoindre les Disciples d'Escoffier et comment vous envisagez de contribuer à notre mission...",
        submit: "Envoyer ma candidature",
      },
    },
    notFound: {
      title: "Page non trouvée",
      heading: "Oups ! Cette page n'existe pas...",
      description:
        "Pas de panique ! Il semble que vous ayez cherché une page qui n'est pas ou n'est plus disponible sur notre site !",
      homeButton: "Retour à l'accueil",
      reportButton: "Signaler un problème",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      articles: "Articles",
      events: "Events",
      members: "The Disciples",
      partners: "Our Partners",
      contact: "Join Us",
      contactUs: "Contact Us",
      switchToEn: "English",
      switchToFr: "Français",
    },
    footer: {
      description:
        "Culinary association dedicated to the promotion of the culinary art and to the transmission of the values of excellence of Auguste Escoffier.",
      usefulLinks: "Useful links",
      legalMentions: "Legal mentions",
      privacyPolicy: "Privacy policy",
      navigation: "Navigation",
      disableCursor: "Disable custom cursor",
      enableCursor: "Enable custom cursor",
      allRightsReserved: "All rights reserved",
    },
    home: {
      associationsSection: {
        title: "At the Service of Gastronomy",
        description:
          "We actively support local associations by putting our culinary expertise at the service of their causes.",
        dinnerTitle: "Dîners de Gala",
        dinnerDescription:
          "Organisation of gastronomic events in favor of charitable associations",
        culinaryTrainingTitle: "Culinary Training",
        culinaryTrainingDescription:
          "Culinary workshops to transmit our passion and our values and thus stimulate vocations.",
        supportTitle: "Support for Educational Institutions",
        supportDescription:
          "Accompany the transmission of knowledge and know-how of gastronomy among young generations.",
      },
      volunteeringSection: {
        title: "Volunteering",
        description:
          "Our chefs and hotel managers put their expertise at the service of causes and events in the Provence region.",
        charityTitle: "Volunteering",
        charityDescription:
          "Experienced professionals who give their time and expertise.",
        partnershipTitle: "Partnerships",
        partnershipDescription:
          "Collaboration with local associations for charitable and gastronomic events.",
        gastronomyTitle: "Gastronomy",
        gastronomyDescription:
          "Gastronomy is an art that must be treated with respect and passion.",
      },
      lastActionsSection: {
        title: "Our Recent Actions",
      },
      nextEventsSection: {
        title: "Our Upcoming Events",
      },
      internationalBanner: "We are a delegation of the association",
      partnersBanner: "Our Partners",
      institutionSection: {
        title: "A Culinary Institution",
        description:
          "The Disciples d’Escoffier represent the excellence of French cuisine since more than seventy years. Our Provence Mediterranée delegation perpetuate this excellence since 2016.",
        nextParagraph:
          "We are proud to uphold the values common to all Disciples d'Escoffier, inherited from the great Auguste Escoffier.",
        boucleAlt: "Escoffier's Loop",
        values: {
          title: "Our Values",
          honor: "Honor the memory and the legacy of Auguste Escoffier.",
          promote: "Promote the professions of chef and of the kitchen.",
          bringTogether: "Bring together cuisine and service.",
          transmit: "Ensure the transmission of knowledge.",
          organize: "Organize gastronomic manifestations.",
          value: "Value the quality of products.",
        },
      },
    },
    about: {
      teamSection: {
        title: "Our Team",
        description:
          "Our team is composed of passionate professionals, trained in both traditional and modern culinary techniques and committed to transmitting our know-how.",
        nextParagraph:
          "Each member brings their unique expertise, creating a synergy that allows us to organize exceptional culinary events in the service of charitable causes.",
        yearsOfExperience: "Years of experience",
        eventsPerYear: "Events per year",
      },
      valuesSection: {
        title: "Our Values",
        description: "The principles that guide our daily action",
      },
      missionSection: {
        title: "Our Mission",
        description:
          "As Disciples of Auguste Escoffier, we commit to perpetuating the excellence of French cuisine while serving our Marseille community with passion and dedication.",
        nextParagraph:
          "Our volunteer institution puts its culinary expertise at the service of local associations, creating moments of sharing and conviviality around gastronomy.",
        excellence: "Culinary excellence",
        charity: "Volunteering",
        tradition: "French tradition",
      },
    },
    articles: {
      category: "Filters by categories",
      allArticles: "All articles",
      featuredArticle: "Featured article",
      readArticle: "Read the article",
      noArticlesCategory: "No articles corresponding to this category",
    },
    MobileFacebookSection: {
      title: "Follow us on Facebook !",
      description:
        "Join our community of Disciples d'Escoffier Provence Méditerranée and discover our news, events and culinary initiatives.",
      button: "Follow us",
    },
    events: {
      seeMore: "See more",
    },
    members: {
      contact: "Contact me",
    },
    contact: {
      contactEmail: "For all other requests, please contact us:",
      form: {
        firstName: "First name",
        firstNamePlaceholder: "Your first name",
        lastName: "Last name",
        lastNamePlaceholder: "Your last name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        phone: "Phone",
        phonePlaceholder: "06 12 34 56 78",
        profession: "Profession",
        professionPlaceholder: "What is your profession ?",
        city: "City",
        cityPlaceholder: "Your city",
        zipCode: "Zip code",
        zipCodePlaceholder: "Your zip code",
        message: "Tell us about your motivation",
        messagePlaceholder:
          "Tell us why you want to join the Disciples d'Escoffier and how you intend to contribute to our mission...",
        submit: "Send",
      },
    },
    notFound: {
      title: "Page not found",
      heading: "Oops! This page doesn't exist...",
      description:
        "Don't panic! It seems you've been looking for a page that's not or is no longer available on our site!",
      homeButton: "Back to home",
      reportButton: "Report a problem",
    },
  },
} as const;
