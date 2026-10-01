import type { Metadata } from "next";
import { searchArticles } from "@/lib/articles";
import { StoryCard } from "@/components/StoryCard";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Search",
  description: "Search stories from The Nairobi Tribune."
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = searchArticles(query);

  return (
    <main id="main-content" className="standard-page site-width">
      <div className="standard-page__heading">
        <span className="eyebrow">The Tribune archive</span>
        <h1>{query ? `Search results for “${query}”` : "Search the Tribune"}</h1>
        <p>Find reporting and perspectives from across Kenya and East Africa.</p>
      </div>

      <form className="archive-search" action="/search" method="get" role="search">
        <label className="visually-hidden" htmlFor="archive-query">Search terms</label>
        <input id="archive-query" type="search" name="q" defaultValue={query} placeholder="Try Nairobi, culture or the coast" />
        <button type="submit">Search <span aria-hidden="true">↗</span></button>
      </form>

      {query ? (
        <section className="archive-results" aria-live="polite">
          <div className="archive-results__summary">
            <h2>{results.length} {results.length === 1 ? "story" : "stories"} found</h2>
            <span>For “{query}”</span>
          </div>
          {results.length > 0 ? (
            <div className="story-card-grid story-card-grid--archive">
              {results.map((article) => <StoryCard article={article} key={article.slug} />)}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-state__symbol" aria-hidden="true">?</span>
              <h2>No stories found</h2>
              <p>Try a place, a section or another search term.</p>
            </div>
          )}
        </section>
      ) : (
        <section className="search-note">
          <span className="eyebrow">A good place to begin</span>
          <h2>Stories with a sense of place.</h2>
          <p>Search a city, a subject or one of our newsroom sections to find a story.</p>
          <div className="search-note__newsletter">
            <div>
              <span className="eyebrow">The morning brief</span>
              <h3>One thoughtful email, each morning.</h3>
            </div>
            <NewsletterForm />
          </div>
        </section>
      )}
    </main>
  );
}
