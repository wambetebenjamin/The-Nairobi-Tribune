import type { MetadataRoute } from "next";
import { articles, categories, categorySlug } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/section/${categorySlug(category)}`,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  return [
    { url: baseUrl, changeFrequency: "daily", priority: 1 },
    ...categoryRoutes,
    ...articleRoutes
  ];
}
