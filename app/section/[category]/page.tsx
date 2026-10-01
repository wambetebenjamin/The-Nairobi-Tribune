import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories, categorySlug, formatArticleDate, getArticlesByCategory } from "@/lib/articles";
import { RegionGlobe } from "@/components/RegionGlobe";
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
  const [featuredStory, ...sectionStories] = stories;
  const archiveStories = sectionStories.length > 0
    ? sectionStories
    : articles.filter((article) => article.slug !== featuredStory?.slug).slice(0, 3);

  return (
    <main id="main-content" className="standard-page section-page site-width">
      <section className="section-intro" aria-labelledby="section-title">
        <div className="section-intro__copy">
          <span className="eyebrow">The Nairobi Tribune · {category} desk</span>
          <h1 id="section-title">{category}</h1>
          <p>{sectionDescriptions[category]}</p>
          <div className="section-intro__meta">
            <span><i aria-hidden="true" /> Considered reporting, rooted in place</span>
            <span>{stories.length} stories in this edition</span>
          </div>
        </div>
        <div className="section-intro__art" aria-hidden="true">
          <span className="section-intro__art-label">THE REGION · IN FOCUS</span>
          <RegionGlobe />
          <span className="section-intro__art-note">01°17′ S — 36°49′ E</span>
        </div>
      </section>

      {featuredStory && (
        <article className="section-feature">
          <Link className="section-feature__image" href={`/news/${featuredStory.slug}`} aria-label={featuredStory.title}>
            <Image src={featuredStory.image} alt={featuredStory.imageAlt} fill priority sizes="(max-width: 760px) 100vw, 52vw" />
            <span className="section-feature__image-shade" />
            <span className="section-feature__image-label">The lead story</span>
          </Link>
          <div className="section-feature__copy">
            <span className="eyebrow">{featuredStory.category} · {featuredStory.location}</span>
            <h2><Link href={`/news/${featuredStory.slug}`}>{featuredStory.title}</Link></h2>
            <p>{featuredStory.excerpt}</p>
            <div className="section-feature__meta">
              <span>{featuredStory.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={featuredStory.publishedAt}>{formatArticleDate(featuredStory.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{featuredStory.readTime}</span>
            </div>
            <Link className="button-link" href={`/news/${featuredStory.slug}`}>Read the story <span aria-hidden="true">↗</span></Link>
          </div>
          <span className="section-feature__number" aria-hidden="true">01</span>
        </article>
      )}

      <section className="section-archive" aria-labelledby="section-archive-heading">
        <SectionHeading
          eyebrow={`More from the ${category} desk`}
          title="A deeper read"
          href={`/search?q=${encodeURIComponent(category)}`}
          linkLabel="Search the archive"
          id="section-archive-heading"
        />
        <div className="story-card-grid story-card-grid--archive">
          {archiveStories.map((article) => <StoryCard article={article} key={article.slug} />)}
        </div>
      </section>

      <section className="section-follow" aria-label="Explore more sections">
        <div>
          <span className="eyebrow">Follow another thread</span>
          <h2>More of the region, from every angle.</h2>
        </div>
        <nav className="section-follow__links" aria-label="Other sections">
          {categories.filter((item) => item !== category).map((item) => (
            <Link href={`/section/${categorySlug(item)}`} key={item}>{item}<span aria-hidden="true">↗</span></Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
