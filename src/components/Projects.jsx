import { projects } from '../data/projects'
import { Ticket, Boxes, Users, Bot, LayoutGrid, Clapperboard, Github, ExternalLink } from 'lucide-react'

const iconMap = { Ticket, Boxes, Users, Bot, LayoutGrid, Clapperboard }

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 md:px-8">
        <div className="mb-11 text-center">
          <h2 className="font-display text-[28px] font-semibold md:text-[34px]">Developed Applications</h2>
          <p className="mx-auto mt-3 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">
           Explore my portfolio of full-stack applications, front-end clones, and collaborative platforms built with modern JavaScript frameworks and scalable back-end systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] ?? Boxes
            return (
              <article
                key={project.title}
                className="flex flex-col rounded-xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-copper/50 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-copper-soft text-copper">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-paper-alt px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-ink-faint">
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.source !== '#' || project.live !== '#') && (
                  <div className="mt-5 flex gap-3 border-t border-line pt-4">
                    {project.source !== '#' && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft transition hover:text-copper"
                      >
                        <Github size={15} />
                        Code
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft transition hover:text-copper"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
