import { profile } from "@/data/profile";
import { Ink } from "./ink";
import { PipelineSketch } from "./pipeline-sketch";
import { Reveal } from "./reveal";

function splitLastWord(text: string): [string, string] {
  const i = text.trimEnd().lastIndexOf(" ");
  return i === -1 ? ["", text] : [text.slice(0, i + 1), text.slice(i + 1)];
}

export function Hero() {
  const [lead, last] = splitLastWord(profile.headline);

  return (
    <section id="top" className="relative pt-16 pb-12 sm:pt-24">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute -inset-x-24 -top-10 bottom-0 -z-10" />

      <Reveal>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </p>
      </Reveal>

      <Reveal delay={0.05} className="relative mt-10">
        <p className="-rotate-2 font-hand text-2xl text-accent sm:text-[28px]">
          hi, I&apos;m {profile.name.split(" ")[0]}
        </p>
        <Ink
          mark="arrow"
          delay={0.5}
          className="absolute top-1 left-36 hidden w-14 rotate-12 text-accent sm:block"
        />
        <h1 className="mt-3 font-serif text-[3.25rem] leading-[0.98] tracking-tight text-balance sm:text-[5.5rem]">
          {lead}
          <span className="relative inline-block whitespace-nowrap">
            <span className="italic">{last}</span>
            <Ink
              mark="scribble"
              delay={0.7}
              strokeWidth={3}
              className="absolute -bottom-3 left-0 w-full text-accent sm:-bottom-4"
            />
          </span>
        </h1>
      </Reveal>

      {/* Not animated: this paragraph is the LCP element. */}
      <div>
        <p className="mt-8 font-mono text-xs tracking-wide text-faint">
          {profile.role} · {profile.location}
        </p>
        <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-muted text-pretty">
          {profile.intro}
        </p>
      </div>

      <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg shadow-[2px_3px_0_var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_5px_0_var(--accent)]"
        >
          Get in touch
        </a>
        <a
          href={profile.resume}
          download
          className="rounded-full border border-fg/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          Download CV
        </a>
        <ul className="ml-1 flex items-center gap-4 text-sm text-muted">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.2} className="mt-16 rounded-3xl border border-dashed border-line bg-bg/60 px-5 pt-5 pb-3 sm:px-8 sm:pt-6">
        <p className="mb-4 -rotate-1 font-hand text-xl text-muted">
          the shape of most things I build:
        </p>
        <PipelineSketch />
      </Reveal>
    </section>
  );
}
