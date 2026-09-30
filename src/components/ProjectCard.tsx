import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
  featured?: boolean
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, featured = false, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      aria-haspopup="dialog"
      className={`project-card group h-full overflow-hidden border border-base-300 bg-base-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info/70 ${featured ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]' : ''}`}
    >
      <figure className={`overflow-hidden bg-base-200 ${featured ? 'aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'}`}>
        <img src={project.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
      </figure>
      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.scope} · {project.role}</span>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
        <h3 className="font-display mt-5 text-2xl font-semibold leading-tight tracking-normal sm:text-3xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-base-content/65">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label="Project highlights">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="tech-label">{highlight}</li>
          ))}
        </ul>
      </div>
    </button>
  )
}
