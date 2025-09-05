import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function fileUrl(file: any): string {
  if (!file?.asset?._ref) return "";

  const ref = file.asset._ref;
  const [, id, extension] = ref.split("-");

  return `https://cdn.sanity.io/files/gjn1r1ck/production/${id}.${extension}`;
}

// Types for TypeScript
export interface Article {
  _id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: {
    fr: {
      current: string;
    };
    en: {
      current: string;
    };
  };
  tags: Tag[];
  image: any;
  date: string;
  intro: {
    fr: string;
    en: string;
  };
  body: {
    fr: any[];
    en: any[];
  };
}

export interface Tag {
  _id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: {
    current: string;
  };
}

export interface Event {
  _id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: {
    fr: {
      current: string;
    };
    en: {
      current: string;
    };
  };
  image: any;
  date: string;
  intro: {
    fr: string;
    en: string;
  };
  body: {
    fr: any[];
    en: any[];
  };
  location: string;
  link?: string;
}

export interface Member {
  _id: string;
  name: string;
  color: string;
  image: any;
  role: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  workplace?: string;
  email?: string;
  isHonored: boolean;
}

export interface Partner {
  _id: string;
  name: string;
  image: any;
  description: {
    fr: string;
    en: string;
  };
  link: string;
  isHonored: boolean;
}

export interface LastActions {
  _id: string;
  title: {
    fr: string;
    en: string;
  };
  date: string;
  intro: {
    fr: string;
    en: string;
  };
}

export interface NextEvents {
  _id: string;
  title: {
    fr: string;
    en: string;
  };
  date: string;
  intro: {
    fr: string;
    en: string;
  };
}

export interface Settings {
  _id: string;
  featuredArticle: Article;
  lastEventVideo: any; // Sanity file object
}
