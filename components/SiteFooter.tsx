import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { categories, categorySlug } from "@/lib/articles";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-width">
        <div className="site-footer__main">
          <div className="site-footer__brand-block">
            <Link className="brand brand--footer" href="/">
              <BrandMark compact />
              <span className="brand__wordmark">
                <span className="brand__overline">THE NAIROBI</span>
                <span className="brand__name">TRIBUNE</span>
              </span>
            </Link>
            <p>Independent journalism with a clear eye on Kenya and East Africa.</p>
            <Link className="site-footer__brief-link" href="/#morning-brief">Get the morning brief <span aria-hidden="true">↗</span></Link>
          </div>

          <div className="site-footer__column">
            <h2>Explore</h2>
            <div className="site-footer__links">
              <Link href="/">Front page</Link>
              {categories.slice(0, 4).map((category) => (
                <Link key={category} href={`/section/${categorySlug(category)}`}>{category}</Link>
              ))}
            </div>
          </div>

          <div className="site-footer__column">
            <h2>More from us</h2>
            <div className="site-footer__links">
              {categories.slice(4).map((category) => (
                <Link key={category} href={`/section/${categorySlug(category)}`}>{category}</Link>
              ))}
              <Link href="/search">Search the archive</Link>
            </div>
          </div>

          <div className="site-footer__note">
            <span className="eyebrow">Our point of view</span>
            <p>Closer to the people, places and ideas moving our region forward.</p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} The Nairobi Tribune</span>
          <span>Made for readers across Kenya and East Africa</span>
          <Link href="#top">Back to top <span aria-hidden="true">↑</span></Link>
        </div>
      </div>
    </footer>
  );
}
