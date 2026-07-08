import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="mb-11 text-center">
          <h2 className="font-display text-[28px] font-semibold md:text-[34px]">Where I've Worked</h2>
        </div>

        <div className="space-y-5">
          {experience.map((job, i) => (
            <div key={job.role} className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6 transition hover:border-copper/40 md:flex-row md:gap-6">
              <span className="font-mono text-sm font-semibold text-copper md:w-12">{String(i + 1).padStart(2, '0')}</span>
              <div className="md:w-64 md:flex-shrink-0">
                <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                <p className="font-mono text-xs text-ink-faint">{job.company}</p>
                <p className="mt-1 font-mono text-xs text-teal">{job.period}</p>
              </div>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{job.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
