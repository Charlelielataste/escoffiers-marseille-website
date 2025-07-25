import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tagsCollection = defineCollection({
  type: "content",
  schema: z.object({
    fr: z.object({
      title: z.string(),
    }),
    en: z.object({
      title: z.string(),
    }),
  }),
});

const articlesCollection = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/articles",
  }),
  schema: z.object({
    fr: z.object({
      title: z.string(),
      intro: z.string(),
      image: z.string(),
      date: z.string().or(z.date()),
      tags: z.array(z.string()).optional(),
      body: z.string(),
    }),
    en: z.object({
      title: z.string(),
      intro: z.string(),
      image: z.string(),
      date: z.string().or(z.date()),
      tags: z.array(z.string()).optional(),
      body: z.string(),
    }),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/events",
  }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.date(),
    intro: z.string(),
    location: z.string(),
    link: z.string().optional(),
  }),
});

const settingsCollection = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/settings",
  }),
  schema: z.object({
    slug: z.string(),
  }),
});

const membersCollection = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/members",
  }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    role: z.string(),
    description: z.string(),
    workplace: z.string().optional(),
    email: z.string().optional(),
    is_honored: z.boolean().optional(),
    color: z.string(),
  }),
});

// Export des collections
export const collections = {
  articles: articlesCollection,
  tags: tagsCollection,
  events: eventsCollection,
  settings: settingsCollection,
  members: membersCollection,
};
