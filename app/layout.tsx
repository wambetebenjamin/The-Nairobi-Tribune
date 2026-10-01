import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { NewsTicker } from "@/components/NewsTicker";
import { SiteFooter } from "@/components/SiteFooter";
import { formatEditionDate } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://the-nairobi-tribune.vercel.app")),
  title: {
    default: "The Nairobi Tribune",
    template: "%s | The Nairobi Tribune"
  },
  description: "Independent journalism from Kenya and East Africa. Stories, perspective and reporting with a clear eye on the region.",
  applicationName: "The Nairobi Tribune",
  manifest: "/manifest.webmanifest",
  keywords: ["Kenya", "East Africa", "Nairobi", "news", "culture", "business"],
  openGraph: {
    title: "The Nairobi Tribune",
    description: "Independent journalism from Kenya and East Africa.",
    siteName: "The Nairobi Tribune",
    locale: "en_KE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Nairobi Tribune",
    description: "Independent journalism from Kenya and East Africa."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f1e8"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const editionDate = formatEditionDate();

  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="top" />
        <SiteHeader editionDate={editionDate} />
        <NewsTicker />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
