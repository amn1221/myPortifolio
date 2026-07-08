import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="mb-11 text-center">
          <h2 className="font-display text-[28px] font-semibold md:text-[34px]">Education</h2>
        </div>

        <div className="space-y-5">
          {education.map((ed) => (
            <div key={ed.degree} className="rounded-xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{ed.degree}</h3>
                <span className="font-mono text-xs text-teal">{ed.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint">{ed.school}</p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{ed.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
