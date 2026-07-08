import { certifications } from '../data/certifications'
import { BadgeCheck } from 'lucide-react'

export default function Certification() {
  return (
    <section id="certifications" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="mb-11 text-center">
          <h2 className="font-display text-[28px] font-semibold md:text-[34px]">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-5">
              <BadgeCheck size={18} className="mt-0.5 flex-shrink-0 text-teal" />
              <div>
                <h3 className="font-display text-sm font-semibold leading-snug">{cert.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  {cert.issuer}{cert.year ? ` · ${cert.year}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
