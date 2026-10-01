import { useId } from "react";

type RegionGlobeProps = {
  className?: string;
};

export function RegionGlobe({ className = "" }: RegionGlobeProps) {
  const clipId = `region-globe-${useId().replace(/:/g, "")}`;

  return (
    <div className={`region-globe${className ? ` ${className}` : ""}`} aria-hidden="true">
      <span className="region-globe__orbit region-globe__orbit--wide" />
      <span className="region-globe__orbit region-globe__orbit--upright" />
      <span className="region-globe__orbit-dot" />
      <div className="region-globe__sphere">
        <svg viewBox="0 0 240 240" role="presentation">
          <defs>
            <clipPath id={clipId}>
              <circle cx="120" cy="120" r="103" />
            </clipPath>
            <linearGradient id={`${clipId}-sea`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#244d42" />
              <stop offset="0.58" stopColor="#15362f" />
              <stop offset="1" stopColor="#0c211e" />
            </linearGradient>
            <linearGradient id={`${clipId}-land`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#e8c88f" />
              <stop offset="1" stopColor="#b78e59" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r="103" fill={`url(#${clipId}-sea)`} />
          <g clipPath={`url(#${clipId})`} fill="none" stroke="rgba(255,248,230,.25)" strokeWidth=".8">
            <ellipse cx="120" cy="120" rx="44" ry="103" />
            <ellipse cx="120" cy="120" rx="82" ry="103" />
            <ellipse cx="120" cy="120" rx="103" ry="35" />
            <ellipse cx="120" cy="120" rx="103" ry="71" />
            <path d="M18 120h204M26 81h188M29 160h182" />
          </g>
          <g clipPath={`url(#${clipId})`} fill={`url(#${clipId}-land)`}>
            <path d="m75 33 19-9 18 4 10 11 17 3 13 12-4 13 15 9 2 12 13 8-3 13-11 6-5 15-13 8-5 16-12 12-5 20-11 23-9 5-4-13-9-8-5-17-12-10-5-15-13-8-2-14-13-10 1-12 13-7 1-12 12-8 1-11 13-7 8-14z" />
            <path d="m45 93 12-8 13 4 5 10-7 8-2 14-10 2-7-8-10-2z" opacity=".78" />
            <path d="m154 137 5-7 5 2-1 11-5 8-3-4z" fill="#f3d79e" />
            <path d="m170 167 4 1 2 8-4 5-3-5z" opacity=".68" />
          </g>
          <circle cx="165" cy="133" r="3.5" fill="#f5d287" />
          <circle cx="165" cy="133" r="8" fill="none" stroke="rgba(245,210,135,.58)" strokeWidth="1" />
        </svg>
        <span className="region-globe__shine" />
      </div>
      <span className="region-globe__coordinate">01°17′ S <i /> 36°49′ E</span>
      <span className="region-globe__caption">East Africa, in focus</span>
    </div>
  );
}
