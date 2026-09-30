import type { ReactNode } from 'react'

type SectionWrapperProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  tone?: 'paper' | 'surface'
}

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = 'paper',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-b border-base-300 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${tone === 'surface' ? 'bg-base-100' : 'bg-base-200'}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_1fr] md:items-end lg:mb-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
            <h2 className="font-display max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-base-content sm:text-5xl">{title}</h2>
          </div>
          {description ? <p className="max-w-xl text-base leading-7 text-base-content/65 md:justify-self-end">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
