import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

import { Badge } from './Badge'
import type { Project } from '../types'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const previousActiveElement = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'),
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements.at(-1)

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      previousActiveElement?.focus()
    }
  }, [onClose, project])

  if (!project) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-base-content/45 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="case-dialog max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-base-300 bg-base-100 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-5 py-5 sm:px-8 sm:py-7 lg:px-10">
          {/* Close */}
          <div className="mb-5 flex justify-end">
            <button
              type="button"
              ref={closeButtonRef}
              onClick={onClose}
              className="grid size-9 place-items-center border border-base-300 bg-base-200 text-base-content/70 transition-colors hover:border-info hover:text-info"
              aria-label="Close project details"
            >
              <X size={16} />
            </button>
          </div>

          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.scope} · {project.role}</p>
            <h3 id="project-modal-title" className="font-display mt-4 text-3xl font-semibold leading-tight tracking-normal text-base-content sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-4 text-lg leading-8 text-base-content/65">{project.summary}</p>
            {project.period ? <p className="mt-3 text-sm font-semibold text-info">{project.period}</p> : null}
          </div>

          <div className="mb-10 overflow-hidden border border-base-300 bg-base-200">
            <img src={project.hero} alt="" className="w-full object-cover" />
          </div>

          <div className="mb-10 grid gap-8 border-y border-base-300 py-8 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">The system</h4>
              <p className="mt-4 text-base leading-8 text-base-content/75">{project.overview}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Delivery highlights</h4>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="tech-label">{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Technology</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Selected screens</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.screenshots.map((screenshot) => (
                <figure
                  key={screenshot.src}
                  className="overflow-hidden border border-base-300 bg-base-200"
                >
                  <img src={screenshot.src} alt={screenshot.alt} className="h-full w-full object-cover" />
                </figure>
              ))}
            </div>
          </div>

          <div className="border-t border-base-300 pt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Engineering lessons</h4>
            <ul className="mt-5 grid gap-4 text-base-content/75 md:grid-cols-2">
              {project.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-2">
                  <span className="font-mono text-xs text-info">→</span>
                  <span className="text-sm leading-6">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
