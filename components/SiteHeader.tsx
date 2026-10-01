"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, categorySlug } from "@/lib/articles";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";

type SiteHeaderProps = {
  editionDate: string;
};

export function SiteHeader({ editionDate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="edition-bar">
        <div className="site-width edition-bar__inner">
          <span className="edition-bar__label">Nairobi edition</span>
          <span className="edition-bar__date">{editionDate}</span>
          <span className="edition-bar__promise">Independent journalism for Kenya and the region</span>
          <Link className="edition-bar__link" href="/#morning-brief">
            The morning brief <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="masthead">
        <div className="site-width masthead__inner">
          <div className="masthead__edition" aria-label="The Nairobi Tribune morning edition">
            <span>VOL. 01</span>
            <span>KENYA AND EAST AFRICA</span>
          </div>

          <Link className="brand" href="/" aria-label="The Nairobi Tribune home">
            <BrandMark />
            <span className="brand__wordmark">
              <span className="brand__overline">THE NAIROBI</span>
              <span className="brand__name">TRIBUNE</span>
            </span>
          </Link>

          <div className="masthead__actions">
            <button
              className="icon-button search-trigger"
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              aria-expanded={searchOpen}
              aria-label={searchOpen ? "Close search" : "Open search"}
              title={searchOpen ? "Close search" : "Search stories"}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
            </button>
            <ThemeToggle />
            <Link className="subscribe-link" href="/#morning-brief">Subscribe</Link>
          </div>

          <button
            className="menu-trigger"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span className="menu-trigger__icon" aria-hidden="true"><span /><span /></span>
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="site-width search-panel">
          <form className="search-form" action="/search" method="get" role="search">
            <label className="visually-hidden" htmlFor="site-search">Search The Nairobi Tribune</label>
            <input id="site-search" name="q" type="search" placeholder="Search stories, places or topics" autoFocus />
            <button type="submit">
              Search <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      )}

      <div className={`navigation-shell${menuOpen ? " navigation-shell--open" : ""}`}>
        <nav className="site-width category-nav" id="main-navigation" aria-label="Main sections">
          <Link className="category-nav__home" href="/" onClick={closeMenu}>Front page</Link>
          {categories.map((category) => (
            <Link key={category} href={`/section/${categorySlug(category)}`} onClick={closeMenu}>
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
