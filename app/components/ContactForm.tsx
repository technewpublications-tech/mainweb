"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Full Name*<input required type="text" placeholder="Dr. Sarah Jenkins" /></label>
      <label>Academic Email*<input required type="email" placeholder="s.jenkins@university.edu" /></label>
      <label>Manuscript Abstract &amp; Target Journal*<textarea required placeholder="Please provide your abstract and any specific journals you are targeting..." /></label>
      <button className="button button-amber" type="submit">Submit Manuscript for Evaluation</button>
      {sent && <p className="form-success" role="status">Thank you. Your evaluation request has been received.</p>}
    </form>
  );
}
