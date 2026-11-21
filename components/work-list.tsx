import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { CountUp } from "./count-up";
import { Ink } from "./ink";
import { Reveal } from "./reveal";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const host = new URL(project.url).host.replace(/^www\./, "");
  const tilt = index % 2 === 0 ? "-rotate-[1.2deg]" : "rotate-[1deg]";

  return (
    <a href={project.url} target="_blank" rel="noreferrer" className="group block py-10">
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="relative grid h-11 w-14 shrink-0 place-items-center font-hand text-2xl text-accent">
          {index + 1}
          <Ink mark="circle" delay={0.2} strokeWidth={2} className="absolute inset-0 size-full" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-4xl tracking-tight">{project.title}</h3>
            <span className="font-mono text-xs text-faint">
              {project.context} · {project.year}
            </span>
          </div>
          <p className="mt-1 font-hand text-[22px] text-muted">{project.tagline}</p>

          <figure
            className={`taped mt-6 ${tilt} rounded-md border border-line bg-surface p-2 shadow-[0_1px_2px_rgb(0_0_0/0.06),0_12px_28px_-14px_rgb(0_0_0/0.35)] transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-0`}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={800}
              sizes="(min-width: 768px) 640px, 92vw"
              className="h-auto w-full rounded-[3px]"
            />
          </figure>

          <p className="mt-7 max-w-[62ch] leading-relaxed text-muted text-pretty">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
            <CountUp text={project.metric} className="marker font-medium text-fg" />
            <span className="font-mono text-[11px] text-faint">{project.stack.join(" · ")}</span>
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-fg underline decoration-line underline-offset-4 group-hover:decoration-accent">
            {host}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}

export function WorkList() {
  return (
    <ol className="divide-y divide-dashed divide-line">
      {projects.map((project, index) => (
        <li key={project.slug}>
          <Reveal>
            <ProjectRow project={project} index={index} />
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
