import Link from "next/link";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  href?: string;
  linkLabel?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, href, linkLabel = "View all stories", id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      {href && <Link className="text-link" href={href}>{linkLabel}<span aria-hidden="true">↗</span></Link>}
    </div>
  );
}
