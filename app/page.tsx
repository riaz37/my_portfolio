import { ContactForm } from "@/components/contact-form";
import { ExperienceList } from "@/components/experience-list";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { WorkList } from "@/components/work-list";
import { profile } from "@/data/profile";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to work
      </a>
      <Header />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />

        <Section id="work" label="Selected work">
          <WorkList />
        </Section>

        <Section id="experience" label="Experience">
          <ExperienceList />
        </Section>

        <Section id="contact" label="Contact">
          <p className="mb-8 max-w-[52ch] font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            Hiring for an AI or full-stack role? I&apos;d like to hear about it.
          </p>
          <p className="mb-8 text-muted">
            Email{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
            >
              {profile.email}
            </a>{" "}
            or use the form.
          </p>
          <ContactForm />
        </Section>
      </main>

      <footer className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-10 font-mono text-[11px] text-faint">
        <span>
          © {year} {profile.name}
        </span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}
