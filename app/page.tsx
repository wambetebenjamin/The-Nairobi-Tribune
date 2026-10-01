import Image from "next/image";
import Link from "next/link";
import { articles, categorySlug, formatArticleDate } from "@/lib/articles";
import { StoryCard } from "@/components/StoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import { RegionGlobe } from "@/components/RegionGlobe";

const lead = articles[0];
const selectedStories = [articles[1], articles[3], articles[4]];
const latestStories = [articles[2], articles[5], articles[6], articles[7]];
const kenyaStories = [articles[0], articles[1], articles[2]];
const regionalStories = [articles[3], articles[4], articles[7]];
const photoStories = [articles[3], articles[4], articles[5], articles[7]];

export default function HomePage() {
  return (
    <main id="main-content" className="home-page">
      <div className="site-width">
        <section className="lead-section" aria-labelledby="lead-section-title">
          <div className="lead-section__topline">
            <div className="lead-section__headline">
              <span className="eyebrow">The morning edition · Vol. 01</span>
              <h1 id="lead-section-title">The stories behind the headlines.</h1>
            </div>
            <p>
              Reporting on people, place and ideas across Kenya and East Africa.
              <span className="lead-section__promise">Read closely. See the whole picture.</span>
            </p>
            <div className="lead-section__illustration"><RegionGlobe /></div>
          </div>

          <div className="lead-grid">
            <article className="lead-story">
              <Link className="lead-story__image" href={`/news/${lead.slug}`} aria-label={lead.title}>
                <Image src={lead.image} alt={lead.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 68vw" />
              </Link>
              <div className="lead-story__shade" />
              <div className="lead-story__content">
                <Link className="category-label category-label--light" href={`/section/${categorySlug(lead.category)}`}>{lead.category}</Link>
                <h2><Link href={`/news/${lead.slug}`}>{lead.title}</Link></h2>
                <p>{lead.excerpt}</p>
                <div className="lead-story__meta">
                  <span>{lead.author}</span>
                  <span className="meta-dot" aria-hidden="true">•</span>
                  <time dateTime={lead.publishedAt}>{formatArticleDate(lead.publishedAt)}</time>
                  <span className="lead-story__readtime">{lead.readTime}</span>
                </div>
              </div>
              <span className="lead-story__number" aria-hidden="true">01</span>
            </article>

            <div className="lead-side">
              <div className="lead-side__heading">
                <span className="eyebrow">The editors' selection</span>
              </div>
              {selectedStories.map((article, index) => (
                <article className="selected-story" key={article.slug}>
                  <Link className="selected-story__image" href={`/news/${article.slug}`} aria-label={article.title}>
                    <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) 30vw, 170px" />
                  </Link>
                  <div className="selected-story__body">
                    <Link className="story-card__category" href={`/section/${categorySlug(article.category)}`}>{article.category}</Link>
                    <h3><Link href={`/news/${article.slug}`}>{article.title}</Link></h3>
                    <span className="selected-story__index">0{index + 2}</span>
                  </div>
                </article>
              ))}
              <Link className="lead-side__more" href="/search">Browse the latest stories <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="latest-layout" aria-labelledby="latest-heading">
          <div className="latest-main">
            <SectionHeading eyebrow="Across the newsroom" title="Latest stories" href="/search" linkLabel="Explore the archive" id="latest-heading" />
            <div className="latest-list">
              {latestStories.map((article) => <StoryCard article={article} variant="list" key={article.slug} />)}
            </div>
          </div>

          <aside className="reading-aside" aria-label="Editors' selections">
            <div className="reading-aside__top">
              <span className="eyebrow">A note from the editors</span>
              <h2>News with a sense of place.</h2>
              <p>We look beyond the announcement to the people, choices and everyday details that give a story its meaning.</p>
              <Link className="text-link" href="/section/opinion">Read our perspective <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="reading-aside__newsletter" id="morning-brief">
              <span className="eyebrow">The morning brief</span>
              <h2>A thoughtful start to your day.</h2>
              <p>A considered selection of stories from Kenya and the region, delivered to your inbox.</p>
              <NewsletterForm />
              <span className="form-note">A quiet note from our newsroom. No noise.</span>
            </div>
          </aside>
        </section>

        <section className="story-band" aria-labelledby="kenya-heading">
          <SectionHeading eyebrow="From the streets to the highlands" title="Kenya, up close" href="/section/kenya" linkLabel="More from Kenya" id="kenya-heading" />
          <div className="story-card-grid">
            {kenyaStories.map((article) => <StoryCard article={article} key={article.slug} />)}
          </div>
        </section>

        <section className="photo-journal" aria-labelledby="photo-journal-heading">
          <div className="photo-journal__header">
            <div>
              <span className="eyebrow">A view of the region</span>
              <h2 id="photo-journal-heading">East Africa in focus</h2>
            </div>
            <Link className="text-link" href="/section/east-africa">More regional stories <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="photo-journal__grid">
            {photoStories.map((article, index) => (
              <Link className={`photo-tile photo-tile--${index + 1}`} href={`/news/${article.slug}`} key={article.slug}>
                <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) 50vw, 30vw" />
                <span className="photo-tile__shade" />
                <span className="photo-tile__caption">
                  <span>{article.location}</span>
                  <strong>{article.title}</strong>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="regional-band" aria-labelledby="regional-heading">
          <div className="regional-band__intro">
            <span className="eyebrow">Beyond the capital</span>
            <h2 id="regional-heading">Across East Africa</h2>
            <p>Shared histories, changing landscapes and the ideas connecting our neighbours.</p>
            <Link className="text-link" href="/section/east-africa">Read the region <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="regional-band__stories">
            {regionalStories.map((article) => <StoryCard article={article} variant="compact" key={article.slug} />)}
          </div>
        </section>

        <section className="newsletter-banner" aria-labelledby="newsletter-title">
          <div className="newsletter-banner__mark" aria-hidden="true">
            <svg viewBox="0 0 88 88"><path d="M44 8v72M8 44h72M18.5 18.5l51 51m0-51-51 51" /><circle cx="44" cy="44" r="19" /></svg>
          </div>
          <div className="newsletter-banner__copy">
            <span className="eyebrow">Make room for good reporting</span>
            <h2 id="newsletter-title">Get the morning brief delivered.</h2>
            <p>Start with a clear view of what matters in Kenya and across the region.</p>
          </div>
          <div className="newsletter-banner__form"><NewsletterForm /></div>
        </section>

        <div className="edition-note">
          <span className="edition-note__mark">NT</span>
          <p>Read closely. See the whole picture. Stay curious about the region we share.</p>
          <span className="edition-note__date">The Nairobi Tribune · {new Date().getFullYear()}</span>
        </div>
      </div>
    </main>
  );
}
