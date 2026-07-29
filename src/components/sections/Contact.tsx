"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";

const objectives = [
  "Performance sportive",
  "Remise en forme",
  "Coaching individuel",
  "Club sportif",
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Nouvelle demande — TG Performance");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-surface py-16 md:py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <span className="text-sm font-medium tracking-wide text-accent">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Construisons ensemble votre prochaine progression
          </h2>
          <p className="mt-4 text-base leading-relaxed text-anthracite-soft">
            Décrivez votre objectif, je reviens vers vous rapidement pour
            échanger sur votre accompagnement.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                />
              </Field>

              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@exemple.fr"
                  className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Téléphone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06 00 00 00 00"
                  className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                />
              </Field>

              <Field label="Objectif" htmlFor="objective">
                <select
                  id="objective"
                  name="objective"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                >
                  <option value="" disabled>
                    Sélectionnez un objectif
                  </option>
                  {objectives.map((objective) => (
                    <option key={objective} value={objective}>
                      {objective}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Parlez-moi de votre objectif et de votre situation actuelle"
                className="w-full resize-none rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
              />
            </Field>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-colors hover:bg-[#0b52e0] disabled:opacity-60"
            >
              {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-ink">
                Votre demande a bien été envoyée. Je reviens vers vous
                rapidement.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-anthracite-soft">
                Une erreur est survenue. Vous pouvez aussi écrire directement
                à contact@tg-performance.fr.
              </p>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
