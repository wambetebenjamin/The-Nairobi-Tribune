import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categorySlug, findArticle, formatArticleDate } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";
import { StoryCard } from "@/components/StoryCard";
import { ShareActions } from "@/components/ShareActions";
import { SectionHeading } from "@/components/SectionHeading";
import { RegionGlobe } from "@/components/RegionGlobe";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return { title: "Story not found" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [{ url: article.image, alt: article.imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image]
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const relatedStories = articles
    .filter((story) => story.slug !== article.slug && (story.category === article.category || story.location !== article.location))
    .slice(0, 3);
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "The Nairobi Tribune",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.svg`
      }
    },
    image: [`${siteUrl}${article.image}`],
    mainEntityOfPage: `${siteUrl}/news/${article.slug}`
  };

  return (
    <main id="main-content" className="article-page site-width">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Front page</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/section/${categorySlug(article.category)}`}>{article.category}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Story</span>
      </nav>

      <article>
        <header className="article-header">
          <div className="article-header__illustration" aria-hidden="true"><RegionGlobe /></div>
          <Link className="category-label" href={`/section/${categorySlug(article.category)}`}>{article.category}</Link>
          <p className="article-header__location">{article.location}</p>
          <h1>{article.title}</h1>
          <p className="article-header__excerpt">{article.excerpt}</p>
          <div className="article-byline">
            <span className="article-byline__avatar" aria-hidden="true">NT</span>
            <div>
              <strong>{article.author}</strong>
              <span>Reporting from {article.location}</span>
            </div>
            <span className="article-byline__divider" aria-hidden="true" />
            <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
            <span className="meta-dot" aria-hidden="true">•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <figure className="article-figure">
          <div className="article-figure__image">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 1100px" />
          </div>
          <figcaption>
            <span>{article.imageAlt}</span>
            <a href={article.imageSource} target="_blank" rel="noreferrer">Photo via {article.imageCredit} <span aria-hidden="true">↗</span></a>
          </figcaption>
        </figure>

        <div className="article-reading-layout">
          <aside className="article-share-rail">
            <ShareActions title={article.title} />
          </aside>
          <div className="article-body">
            <p className="article-body__opening">{article.body[0]}</p>
            {article.body.slice(1).map((paragraph, index) => (
              <p key={`${article.slug}-paragraph-${index}`}>{paragraph}</p>
            ))}
            <div className="article-signoff">
              <span className="article-signoff__mark">NT</span>
              <p>Thank you for reading The Nairobi Tribune.</p>
            </div>
          </div>
          <aside className="article-context">
            <span className="eyebrow">From the newsroom</span>
            <h2>A wider view starts with the details.</h2>
            <p>Our desks follow the people, places and ideas that give each story its context.</p>
            <Link className="text-link" href="/section/east-africa">Explore the region <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </article>

      <section className="related-section" aria-labelledby="related-heading">
        <SectionHeading eyebrow="Keep reading" title="More from the Tribune" href="/search" linkLabel="Browse all stories" />
        <div className="story-card-grid story-card-grid--archive" id="related-heading">
          {relatedStories.map((story) => <StoryCard article={story} key={story.slug} />)}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
