import Link from "next/link";
import { articles } from "@/lib/articles";

export function NewsTicker() {
  const headlines = [...articles.slice(0, 4), ...articles.slice(0, 4)];

  return (
    <div className="ticker-bar" role="region" aria-label="Stories in focus">
      <div className="ticker-bar__label"><span className="ticker-pulse" />IN FOCUS</div>
      <div className="ticker-window">
        <div className="ticker-track">
          {headlines.map((article, index) => (
            <Link
              className="ticker-item"
              href={`/news/${article.slug}`}
              key={`${article.slug}-${index}`}
              aria-hidden={index >= 4 ? true : undefined}
              tabIndex={index >= 4 ? -1 : undefined}
            >
              <span className="ticker-item__category">{article.category}</span>
              <span>{article.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <Link className="ticker-bar__all" href="/search">Explore stories <span aria-hidden="true">↗</span></Link>
    </div>
  );
}
