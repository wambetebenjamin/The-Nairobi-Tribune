import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { categorySlug, formatArticleDate } from "@/lib/articles";

type StoryCardProps = {
  article: Article;
  variant?: "standard" | "compact" | "list";
  priority?: boolean;
};

export function StoryCard({ article, variant = "standard", priority = false }: StoryCardProps) {
  return (
    <article className={`story-card story-card--${variant}`}>
      <Link className="story-card__image" href={`/news/${article.slug}`} aria-label={article.title}>
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority={priority}
          sizes={variant === "compact" ? "(max-width: 700px) 34vw, 150px" : variant === "list" ? "(max-width: 700px) 32vw, 220px" : "(max-width: 700px) 100vw, 360px"}
        />
      </Link>
      <div className="story-card__body">
        <Link className="story-card__category" href={`/section/${categorySlug(article.category)}`}>
          {article.category}
        </Link>
        <h3><Link href={`/news/${article.slug}`}>{article.title}</Link></h3>
        {variant !== "compact" && <p className="story-card__excerpt">{article.excerpt}</p>}
        <p className="story-card__meta">
          <span>{article.author}</span>
          <span aria-hidden="true" className="meta-dot">•</span>
          <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
        </p>
      </div>
    </article>
  );
}
