"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";

export function NewsletterForm() {
  const inputId = useId().replace(/:/g, "");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    window.localStorage.setItem("tribune-newsletter-preview", email.trim());
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="newsletter-success" role="status">
        <span className="newsletter-success__mark" aria-hidden="true">✓</span>
        <div>
          <strong>Thank you for reading with us.</strong>
          <p>Your address is saved on this device for the newsletter preview.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor={inputId}>Your email address</label>
      <input
        id={inputId}
        type="email"
        name="email"
        placeholder="Your email address"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button type="submit">Join the list <span aria-hidden="true">↗</span></button>
    </form>
  );
}
