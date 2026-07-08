import { skillLayers } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="mb-11 text-center">
          <h2 className="font-display text-[28px] font-semibold md:text-[34px]">The Layers I Work In</h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
      
          </p>
        </div>

        <div className="space-y-8">
          {skillLayers.map((group) => (
            <div key={group.layer}>
              <div className="mb-3.5 flex items-baseline gap-3">
                <h3 className="font-display text-[17px] font-semibold">{group.layer}</h3>
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">— {group.note}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={
                      group.accent
                        ? 'rounded-full border border-copper-soft bg-copper-soft/40 px-3.5 py-2 font-mono text-[12.5px] text-copper'
                        : 'rounded-full border border-line-strong bg-surface px-3.5 py-2 font-mono text-[12.5px] text-ink-soft'
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
