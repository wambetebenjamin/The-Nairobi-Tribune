import type { Metadata } from "next";
import Link from "next/link";
import { articles, searchArticles } from "@/lib/articles";
import { RegionGlobe } from "@/components/RegionGlobe";
import { StoryCard } from "@/components/StoryCard";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Search",
  description: "Search stories from The Nairobi Tribune."
};

const searchTopics = ["Nairobi", "Markets", "The coast", "Wildlife", "Culture", "Public space"];

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = searchArticles(query);
  const discoverStories = articles.slice(0, 3);

  return (
    <main id="main-content" className="standard-page search-page site-width">
      <section className="standard-page__heading search-hero">
        <div className="search-hero__copy">
          <span className="eyebrow">The Tribune archive · Search</span>
          <h1>{query ? <>Stories for <em>“{query}”</em></> : <>Find your next <em>good read.</em></>}</h1>
          <p>Explore reporting, ideas and perspectives from across Kenya and East Africa.</p>
        </div>
        <div className="search-hero__art" aria-hidden="true"><RegionGlobe /></div>
        <span className="search-hero__edition" aria-hidden="true">NT · 001</span>
      </section>

      <form className="archive-search" action="/search" method="get" role="search">
        <label className="visually-hidden" htmlFor="archive-query">Search terms</label>
        <input id="archive-query" type="search" name="q" defaultValue={query} placeholder="Try Nairobi, culture or the coast" />
        <button type="submit">Search <span aria-hidden="true">↗</span></button>
      </form>

      {query ? (
        <section className="archive-results" aria-live="polite">
          <div className="archive-results__summary">
            <div>
              <span className="eyebrow">A search of the archive</span>
              <h2>{results.length} {results.length === 1 ? "story" : "stories"} found</h2>
            </div>
            <span>For “{query}”</span>
          </div>
          {results.length > 0 ? (
            <div className="story-card-grid story-card-grid--archive">
              {results.map((article) => <StoryCard article={article} key={article.slug} />)}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-state__symbol" aria-hidden="true">?</span>
              <h2>No stories found this time</h2>
              <p>Try one of these themes, or search for a place, a section or a broader idea.</p>
              <div className="search-topics search-topics--centered">
                {searchTopics.map((topic) => <Link href={`/search?q=${encodeURIComponent(topic)}`} key={topic}>{topic}<span aria-hidden="true">↗</span></Link>)}
              </div>
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="search-discovery" aria-labelledby="search-discovery-heading">
            <div className="search-discovery__intro">
              <span className="eyebrow">A good place to begin</span>
              <h2 id="search-discovery-heading">Follow a thread.</h2>
              <p>Search a place, an idea or one of the conversations our newsroom is following.</p>
              <div className="search-topics">
                {searchTopics.map((topic) => <Link href={`/search?q=${encodeURIComponent(topic)}`} key={topic}>{topic}<span aria-hidden="true">↗</span></Link>)}
              </div>
              <div className="search-discovery__caption"><span className="search-discovery__spark" /> A living archive of people, place and possibility.</div>
            </div>
            <div className="search-discovery__stories">
              <div className="search-discovery__heading">
                <div>
                  <span className="eyebrow">The editors' selection</span>
                  <h2>Start here</h2>
                </div>
                <span className="search-discovery__issue">01 — 03</span>
              </div>
              <div className="search-discovery__grid">
                {discoverStories.map((article) => <StoryCard article={article} key={article.slug} />)}
              </div>
            </div>
          </section>

          <section className="search-note">
            <div className="search-note__copy">
              <span className="eyebrow">The morning brief</span>
              <h2>One thoughtful email, each morning.</h2>
              <p>A clear view of the stories shaping Kenya and the region, selected by our newsroom.</p>
            </div>
            <div className="search-note__newsletter"><NewsletterForm /></div>
            <span className="search-note__orbit" aria-hidden="true" />
          </section>
        </>
      )}
    </main>
  );
}
