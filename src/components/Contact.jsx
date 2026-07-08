import { socialLinks } from '../data/nav'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="rounded-2xl border border-line bg-surface px-7 py-14 text-center shadow-2xl shadow-black/20 md:px-16 md:py-20">
          <h2 className="font-display text-[28px] font-semibold md:text-[36px]">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-ink-soft">
            Available for technical discussions, engineering vacancies, or advanced IT support and web
            development work reach out and I'll get back to you promptly.
          </p>

          <div className="mx-auto mt-9 flex max-w-md flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between gap-3 rounded-lg border border-line px-5 py-3.5 font-mono text-[13.5px] text-ink-soft transition hover:border-copper hover:text-copper"
              >
                <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-ink-faint">{link.label}</span>
                  <span className="truncate">{link.value}</span>
                </span>
                <span className="flex-shrink-0 text-copper">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
