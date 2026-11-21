"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 4000;

const fieldClass =
  "w-full rounded-xl border border-line bg-transparent px-4 py-3 text-[15px] placeholder:text-faint transition-colors focus:border-fg focus:outline-none";

function validate(name: string, email: string, message: string): string | null {
  if (!name.trim()) return "Please add your name.";
  if (!EMAIL_RE.test(email.trim())) return "Please add a valid email.";
  if (message.trim().length < 10) return "A little more detail in the message, please.";
  if (message.length > MAX_MESSAGE) return "Message is too long.";
  return null;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const problem = validate(name, email, message);
    if (problem) {
      setError(problem);
      return;
    }
    if (!ACCESS_KEY) {
      setError(`The form is offline right now. Email me at ${profile.email}.`);
      return;
    }

    setError(null);
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${name.trim()}`,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          botcheck: data.get("botcheck") ? "on" : "",
        }),
      });
      const result: unknown = await res.json();
      const ok = typeof result === "object" && result !== null && "success" in result && result.success === true;
      if (!ok) throw new Error("Submission rejected");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(`Couldn't send that. Try again, or email me at ${profile.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="rounded-2xl border border-line p-6 text-muted">
        Thanks, message received. I usually reply within a day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Name</span>
          <input name="name" autoComplete="name" placeholder="Name" className={fieldClass} required />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="Email" className={fieldClass} required />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          rows={5}
          maxLength={MAX_MESSAGE}
          placeholder="What are you hiring for?"
          className={`${fieldClass} resize-y`}
          required
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {error ? (
          <p role="alert" className="text-sm text-muted">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
