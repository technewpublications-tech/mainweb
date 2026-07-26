"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          manuscript: data.get("manuscript"),
          website: data.get("website"),
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Full Name*<input required name="name" type="text" maxLength={120} autoComplete="name" placeholder="Dr. Sarah Jenkins" /></label>
      <label>Academic Email*<input required name="email" type="email" maxLength={254} autoComplete="email" placeholder="s.jenkins@university.edu" /></label>
      <label>Manuscript Abstract &amp; Target Journal*<textarea required name="manuscript" minLength={20} maxLength={8000} placeholder="Please provide your abstract and any specific journals you are targeting..." /></label>
      <label className="form-honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <button className="button button-amber" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending securely…" : "Submit Manuscript for Evaluation"}</button>
      {status === "success" && <p className="form-success" role="status">Thank you. Your evaluation request has been received.</p>}
      {status === "error" && <p className="form-error" role="alert">We could not send your request. Please try again or email support@technewpublication.com.</p>}
    </form>
  );
}
