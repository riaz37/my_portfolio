import clsx from "clsx";
import { certifications, education, skills } from "@/data/profile";

// Skills, education and certificates as an index card taped to the page.
export function ToolboxCard() {
  return (
    <div className="taped -rotate-[0.6deg] rounded-md border border-line bg-surface px-5 pt-9 pb-6 shadow-[0_1px_2px_rgb(0_0_0/0.06),0_12px_28px_-14px_rgb(0_0_0/0.35)] sm:px-8">
      <p className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">Toolbox</p>

      <dl className="mt-3 divide-y divide-line">
        {skills.map((skill) => (
          <div key={skill.group} className="grid gap-x-6 gap-y-2 py-4 sm:grid-cols-[6.5rem_1fr]">
            <dt className="font-hand text-[26px] leading-none text-fg">{skill.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-2 gap-y-2.5">
                {skill.items.map((item) => {
                  const key = skill.highlight?.includes(item);
                  return (
                    <li
                      key={item}
                      className={clsx(
                        "tape-chip font-mono text-[12px] leading-5",
                        key ? "tape-chip-key font-medium text-fg" : "text-muted",
                      )}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-2 grid gap-6 border-t border-dashed border-faint/40 pt-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
        <div>
          <p className="stamp font-mono text-[12px] font-semibold tracking-[0.18em] uppercase">
            B.Sc. · MIST · {education.year}
          </p>
          <p className="mt-3 max-w-[26ch] text-[13px] leading-snug text-muted">
            {education.degree}
            <span className="mt-1 block text-faint">{education.school}</span>
          </p>
        </div>

        <div>
          <p className="font-hand text-[22px] leading-none text-fg">Certificates</p>
          <ul className="mt-3 space-y-1.5 text-[13px] leading-snug">
            {certifications.map((cert) => (
              <li key={cert.name} className="grid grid-cols-[auto_1fr] items-baseline gap-x-2">
                <span aria-hidden="true" className="font-hand text-accent">✓</span>
                <span>
                  <span className="mr-2 text-muted">{cert.name}</span>
                  <span className="font-mono text-[11px] whitespace-nowrap text-faint">{cert.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
