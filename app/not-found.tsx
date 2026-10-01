import Link from "next/link";
import { articles } from "@/lib/articles";
import { RegionGlobe } from "@/components/RegionGlobe";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard } from "@/components/StoryCard";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found site-width">
      <section className="not-found__hero">
        <div className="not-found__copy">
          <span className="eyebrow">The Nairobi Tribune · 404</span>
          <h1>This page has moved on.</h1>
          <p>The story you are looking for is not here, but there is more to read across Kenya and the region.</p>
          <div className="not-found__actions">
            <Link className="button-link" href="/">Return to the front page <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/search">Search the archive <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="not-found__art" aria-hidden="true"><RegionGlobe /></div>
        <span className="not-found__number" aria-hidden="true">N° 404</span>
      </section>

      <section className="not-found__reading" aria-labelledby="not-found-reading-heading">
        <SectionHeading eyebrow="A few good places to start" title="Keep exploring" href="/search" linkLabel="Browse the archive" id="not-found-reading-heading" />
        <div className="story-card-grid">
          {articles.slice(0, 3).map((article) => <StoryCard article={article} key={article.slug} />)}
        </div>
      </section>
    </main>
  );
}
