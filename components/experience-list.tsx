import { experience } from "@/data/experience";
import { certifications, education, skills } from "@/data/profile";
import { Reveal } from "./reveal";

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

      <Reveal>
        <dl className="grid gap-x-8 gap-y-3 border-t border-dashed border-line pt-10 text-sm sm:grid-cols-[7rem_1fr]">
          {skills.map((skill) => (
            <div key={skill.group} className="contents">
              <dt className="font-mono text-xs leading-6 text-faint">{skill.group}</dt>
              <dd className="leading-6 text-muted">{skill.items}</dd>
            </div>
          ))}
          <dt className="mt-4 font-mono text-xs leading-6 text-faint sm:mt-0">Education</dt>
          <dd className="leading-6 text-muted">
            {education.degree}, {education.school}, {education.year}
          </dd>
          <dt className="font-mono text-xs leading-6 text-faint">Certificates</dt>
          <dd className="leading-6 text-muted">{certifications}</dd>
        </dl>
      </Reveal>
    </div>
  );
}
