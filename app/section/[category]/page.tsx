import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, categories, categorySlug, getArticlesByCategory } from "@/lib/articles";
import { StoryCard } from "@/components/StoryCard";
import { SectionHeading } from "@/components/SectionHeading";

const sectionDescriptions: Record<string, string> = {
  Kenya: "Reporting on the places, decisions and daily lives shaping the country.",
  Politics: "A clear look at public life, leadership and the choices that shape our shared future.",
  Business: "Ideas, enterprise and the people building value across the region.",
  Culture: "The art, food, memory and everyday creativity that make a place its own.",
  "East Africa": "Stories connecting neighbours across a region of many voices and histories.",
  Environment: "Reporting on landscapes, wildlife and the communities living alongside them.",
  Opinion: "Thoughtful arguments and fresh perspectives from our editorial desks."
};

type SectionPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { category: categoryParam } = await params;
  const category = categories.find((item) => categorySlug(item) === categoryParam);
  if (!category) return { title: "Section not found" };

  return {
    title: category,
    description: sectionDescriptions[category] ?? "Stories from The Nairobi Tribune."
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({ category: categorySlug(category) }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { category: categoryParam } = await params;
  const category = categories.find((item) => categorySlug(item) === categoryParam);
  if (!category) notFound();

  const stories = getArticlesByCategory(category);
  if (category === "Kenya") {
    const kenyaStories = articles.filter((article) => article.location.endsWith("Kenya"));
    return (
      <main id="main-content" className="standard-page site-width">
        <div className="section-intro">
          <span className="eyebrow">The Nairobi Tribune sections</span>
          <h1>{category}</h1>
          <p>{sectionDescriptions[category]}</p>
        </div>
        <SectionHeading eyebrow="From across the country" title="The latest from Kenya" />
        <div className="story-card-grid story-card-grid--archive">
          {kenyaStories.map((article) => <StoryCard article={article} key={article.slug} />)}
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="standard-page site-width">
      <div className="section-intro">
        <span className="eyebrow">The Nairobi Tribune sections</span>
        <h1>{category}</h1>
        <p>{sectionDescriptions[category]}</p>
      </div>
      <SectionHeading eyebrow={`Stories from ${category}`} title={`The latest in ${category.toLowerCase()}`} />
      {stories.length > 0 ? (
        <div className="story-card-grid story-card-grid--archive">
          {stories.map((article) => <StoryCard article={article} key={article.slug} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-state__symbol" aria-hidden="true">✳</span>
          <h2>More stories are on the way</h2>
          <p>Our editors are preparing the next selection for this section.</p>
        </div>
      )}
    </main>
  );
}
