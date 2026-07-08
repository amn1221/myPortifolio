import { GraduationCap, Network, Code2 } from 'lucide-react'

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'BSc in Software Engineering from Arba Minch University (2016 – 2021).',
  },
  {
    icon: Network,
    title: 'IT Operations',
    text: '4+ years maintaining hardware, systems, network deployments, and databases in high-stakes insurance environments.',
  },
  {
    icon: Code2,
    title: 'Development',
    text: 'Proficient with JavaScript, React.js, Node.js, PHP, and relational databases (MySQL).',
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <h2 className="text-center font-display text-[28px] font-semibold md:text-[34px]">About Me</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-line bg-surface p-7 text-center transition hover:-translate-y-1 hover:border-copper/50">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-copper-soft text-copper">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="mx-auto flex-shrink-0 rounded-2xl bg-gradient-to-br from-copper to-teal p-[3px] shadow-xl shadow-copper/20 sm:mx-0">
              <img
                src="/profile.jpg"
                alt="Portrait of Yesgat Mulu Tsehay"
                onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
                className="h-44 w-44 rounded-[14px] border-2 border-paper object-cover"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                I'm Yesgat Mulu Tsehay, an IT professional based in Addis Ababa with over four years of experience
                in IT support and system administration. My work spans network installation and troubleshooting,
                database management, hardware and software maintenance, and keeping infrastructure running with
                minimal downtime.
              </p>
              <p>
                Alongside IT support, I build fullstack web applications with React and Node.js — from internal
                tools like ticketing and asset-management systems to interface-focused practice projects. I'm
                passionate about continuous learning and staying current with new technology.
              </p>
            </div>
          </div>

          <dl className="overflow-hidden rounded-xl border border-line bg-surface">
            <Row k="Based in" v="Addis Ababa, Ethiopia" />
            <Row k="Focus" v="IT Support & Fullstack Dev" />
            <Row k="Experience" v="4+ years" />
            <Row k="Availability" v={<><span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal align-middle" />Open to new roles</>} />
            <Row k="Resume" v={<a href="/resume.pdf" className="text-copper underline" download>Download PDF</a>} last />
          </dl>
        </div>
      </div>
    </section>
  )
}

function Row({ k, v, last }) {
  return (
    <div className={`flex items-center justify-between gap-4 px-5 py-3.5 font-mono text-[12.5px] ${last ? '' : 'border-b border-line'}`}>
      <dt className="uppercase tracking-wide text-ink-faint">{k}</dt>
      <dd className="text-right text-ink">{v}</dd>
    </div>
  )
}
