# The Nairobi Tribune

A responsive digital newspaper built with the Next.js App Router. The uploaded `newsbox-master.zip` was used as a visual and layout reference for the masthead, ticker, lead story, editorial columns and section cards. The site itself is a fresh implementation with a Kenya and East Africa focus.

## Run locally

```bash
npm install
npm run dev
```

The development server runs on port 3000. The project is ready for Vercel with the default Next.js build settings.

## Features

• Editorial home page with a lead story, selected reading, latest stories and regional sections
• Dynamic article routes at `/news/[slug]`
• Section pages and full text search
• Responsive mobile navigation, dark theme toggle and story sharing
• Newsletter preview form
• Article metadata, structured data, sitemap and robots route
• Locally served editorial photographs from Pexels

## Content and newsletter

The initial story collection lives in `lib/articles.ts` as sample editorial copy. Replace it with verified newsroom reporting before publishing. The newsletter form is a front end preview and stores an address only in the visitor's browser. Connect a mailing list provider before using it to collect subscriptions.

Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL to keep sitemap and social metadata canonical. Vercel also supplies `VERCEL_URL` automatically for preview deployments.

## Deploy on Vercel

Import the GitHub repository at the link below, keep the framework preset as Next.js, and deploy. No additional environment variables are required for the preview.

`https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwambetebenjamin%2FThe-Nairobi-Tribune%2Ftree%2Farena%2F01a0f832-the-nairobi-tribune`

See `PHOTO_CREDITS.md` for image source links.
