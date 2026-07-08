"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-card">
        <div className="form-sent">
          Thanks — your message is on its way. We reply to every enquiry within
          two working days.
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="What are you building?" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="A sentence or two about your product and timeline." />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => setSent(true)}>
        Send message <ArrowRightIcon />
      </button>
      <p className="form-note">
        This is a demo form — wire it to your email service or a form backend to
        go live.
      </p>
    </div>
  );
}
