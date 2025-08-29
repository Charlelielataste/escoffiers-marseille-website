import { client } from "./sanity";
import type { Article, Tag, Event, Member, Settings, Partner } from "./sanity";

export async function getAllArticles(): Promise<Article[]> {
  return await client.fetch(`
    *[_type == "article"] | order(date desc) {
      _id,
      title,
      slug,
      tags[]-> {
        _id,
        title,
        slug
      },
      image,
      date,
      intro,
      body
    }
  `);
}

export async function getArticleBySlug(
  slug: string,
  locale: string = "fr"
): Promise<Article | null> {
  return await client.fetch(
    `
    *[_type == "article" && slug.${locale}.current == $slug][0] {
      _id,
      title,
      slug,
      tags[]-> {
        _id,
        title,
        slug
      },
      image,
      date,
      intro,
      body
    }
  `,
    { slug }
  );
}

export async function getAllTags(): Promise<Tag[]> {
  return await client.fetch(`
    *[_type == "tag"] | order(title.fr asc) {
      _id,
      title,
      slug
    }
  `);
}

export async function getAllEvents(): Promise<Event[]> {
  return await client.fetch(`
    *[_type == "event"] | order(date desc) {
      _id,
      title,
      slug,
      image,
      date,
      intro,
      body,
      location,
      link
    }
  `);
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  return await client.fetch(
    `
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      image,
      date,
      intro,
      body,
      location,
      link
    }
  `,
    { slug }
  );
}

export async function getAllMembers(): Promise<Member[]> {
  return await client.fetch(`
    *[_type == "member"] | order(name asc) {
      _id,
      name,
      color,
      image,
      role,
      description,
      workplace,
      email,
      isHonored
    }
  `);
}

export async function getAllPartners(): Promise<Partner[]> {
  return await client.fetch(`
    *[_type == "partner"] | order(name asc) {
      _id,
      name,
      image,
      description,
      link,
      isHonored
    }
  `);
}

export async function getSettings(): Promise<Settings | null> {
  return await client.fetch(`
    *[_type == "settings"][0] {
      _id,
      featuredArticle-> {
        _id,
        title,
        slug,
        tags[]-> {
          _id,
          title,
          slug
        },
        image,
        date,
        intro,
        body
      },
      lastEventVideo
    }
  `);
}
