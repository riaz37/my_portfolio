import { experience } from "@/data/experience";
import { Reveal } from "./reveal";
import { ToolboxCard } from "./toolbox-card";

export function ExperienceList() {
  return (
    <div className="space-y-14">
      {experience.map((job) => (
        <Reveal key={job.company}>
          <article>
            <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-2xl tracking-tight">
                {job.company}
                <span className="ml-2 font-normal text-muted">{job.role}</span>
              </h3>
              <span className="font-mono text-xs text-faint">
                {job.period} · {job.location}
              </span>
            </header>
            <ul className="mt-5 space-y-3">
              {job.highlights.map((item) => (
                <li key={item.text} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden="true" className="shrink-0 font-hand text-xl leading-[1.3] text-accent">~</span>
                  <span className="text-pretty">
                    {item.text}
                    {item.metric ? (
                      <span className="marker ml-2 text-[13px] font-medium whitespace-nowrap text-fg">
                        {item.metric}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}

      <Reveal className="pt-4">
        <ToolboxCard />
      </Reveal>
    </div>
  );
}
