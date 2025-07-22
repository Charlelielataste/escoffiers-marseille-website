import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tagsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const articlesCollection = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.date(),
    intro: z.string(),
    tags: z.array(z.string()),
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
    link: z.string(),
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

// Export des collections
export const collections = {
  articles: articlesCollection,
  tags: tagsCollection,
  events: eventsCollection,
  settings: settingsCollection,
};
