export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-20 md:pt-24">
      <div>
        <span className="inline-block rounded-full bg-copper-soft px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-copper">
          Software Engineer &amp; IT Specialist
        </span>
        <h1 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[50px]">
          Hi I am <span className="bg-gradient-to-r from-copper to-teal bg-clip-text text-transparent">Yesgat Mulu</span>
        </h1>
        <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft">
          Dedicated Software Engineering graduate and IT professional with over 4 years of experience managing
          robust network infrastructure, systems, and building fullstack web applications.
        </p>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="rounded-md bg-copper px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-copper/25 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line-strong px-6 py-3 font-display text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-copper hover:text-copper"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-surface shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <span className="window-dots flex gap-1.5"><span /><span /><span /></span>
          <span className="ml-2 font-mono text-xs text-ink-faint">yesgat_profile.js</span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-[1.9]">
          <code>
            <span style={{ color: 'var(--copper)' }}>const</span>{' '}
            <span style={{ color: 'var(--teal)' }}>professional</span> = {'{'}
            {'\n'}  <span style={{ color: 'var(--teal)' }}>name</span>:{' '}
            <span style={{ color: '#e6b673' }}>'Yesgat Mulu'</span>,
            {'\n'}  <span style={{ color: 'var(--teal)' }}>degree</span>:{' '}
            <span style={{ color: '#e6b673' }}>'BSc. Software Engineering'</span>,
            {'\n'}  <span style={{ color: 'var(--teal)' }}>location</span>:{' '}
            <span style={{ color: '#e6b673' }}>'Addis Ababa, Ethiopia'</span>,
            {'\n'}  <span style={{ color: 'var(--teal)' }}>core_skills</span>: [
            <span style={{ color: '#e6b673' }}>'React'</span>,{' '}
            <span style={{ color: '#e6b673' }}>'Node'</span>,{' '}
            <span style={{ color: '#e6b673' }}>'Networking'</span>],
            {'\n'}  <span style={{ color: 'var(--teal)' }}>infrastructure</span>:{' '}
            <span style={{ color: 'var(--copper)' }}>true</span>
            {'\n'}
            {'}'}
          </code>
        </pre>
      </div>
    </section>
  )
}
