"use client";

import { useState } from "react";

type ShareActionsProps = {
  title: string;
};

export function ShareActions({ title }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this story link", window.location.href);
    }
  }

  async function shareStory() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: window.location.href });
      } catch {
        return;
      }
      return;
    }

    await copyLink();
  }

  function shareOnWhatsApp() {
    const message = `${title} ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="share-actions" aria-label="Share this story">
      <span className="share-actions__label">Share this story</span>
      <button className="share-button" type="button" onClick={shareStory}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 13v6h14v-6" /></svg>
        Share
      </button>
      <button className="share-button" type="button" onClick={shareOnWhatsApp}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20l.9-4.7a8.5 8.5 0 1 1 16.6-3.6Z" /><path d="M8.7 8.5c.4 2 2.8 4.4 4.8 4.8l1.1-1.1 2 .9c-.2 1.4-1.2 2.2-2.7 2-3-.4-6.9-4.3-7.3-7.3-.2-1.5.6-2.5 2-2.7l.9 2z" /></svg>
        WhatsApp
      </button>
      <button className="share-button share-button--copy" type="button" onClick={copyLink}>
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
