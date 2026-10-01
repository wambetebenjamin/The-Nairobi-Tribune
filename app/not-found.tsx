import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found site-width">
      <span className="eyebrow">The Nairobi Tribune</span>
      <h1>This page has moved on.</h1>
      <p>The story you are looking for is not here, but there is more to read.</p>
      <Link className="button-link" href="/">Return to the front page <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
