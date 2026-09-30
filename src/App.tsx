import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Download,
  ExternalLink,
  FolderGit2,
  Mail,
  ServerCog,
  Workflow,
} from 'lucide-react'

import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { SectionWrapper } from './components/SectionWrapper'
import {
  capabilities,
  contactLinks,
  experience,
  profilePhoto,
  projects,
  proofPoints,
  resumeHref,
} from './data/portfolio'
import type { Project } from './types'

const contactIcons = {
  Email: Mail,
  LinkedIn: ExternalLink,
  GitHub: FolderGit2,
}

const capabilityIcons = [Boxes, ServerCog, Workflow]

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div data-theme="portfolio" className="min-h-screen bg-base-200 text-base-content">
      <header className="site-header">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <a href="#top" className="font-display text-xl font-semibold tracking-normal text-base-content">
            KJ<span className="text-primary">.</span>
          </a>
          <div className="flex items-center gap-1 sm:gap-3">
            <a href="#expertise" className="nav-link hidden sm:inline-flex">Expertise</a>
            <a href="#experience" className="nav-link hidden md:inline-flex">Experience</a>
            <a href="#work" className="nav-link">Work</a>
            <a href={resumeHref} download className="nav-resume">
              <Download size={15} aria-hidden="true" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero-grid relative overflow-hidden border-b border-base-300">
          <div className="mx-auto grid min-h-[calc(88svh-4rem)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-20">
            <div className="hero-copy max-w-3xl">
              <p className="section-kicker">Senior Fullstack Developer · Indonesia</p>
              <h1 className="font-display mt-6 text-5xl font-semibold leading-[0.96] tracking-normal text-base-content sm:text-7xl lg:text-[5.6rem]">
                Kevin Juliandito
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-base-content/75 sm:text-2xl sm:leading-9">
                I design and build reliable software products and platforms, spanning user-facing features, backend architecture, deployment infrastructure, CI/CD, and observability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="primary-action">
                  View selected work <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a href={resumeHref} download className="secondary-action">
                  <Download size={16} aria-hidden="true" /> Download resume
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-base-300 pt-5">
                {contactLinks.map((item) => {
                  const Icon = contactIcons[item.label as keyof typeof contactIcons]
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium text-base-content/65 transition-colors hover:text-info"
                    >
                      <Icon size={15} aria-hidden="true" /> {item.label}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="hero-portrait mx-auto w-full max-w-sm lg:justify-self-end">
              <div className="relative border border-base-300 bg-base-100 p-2 shadow-[12px_12px_0_var(--blue)]">
                <img src={profilePhoto} alt="Kevin Juliandito" className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Career overview" className="border-b border-base-300 bg-base-100">
          <div className="mx-auto grid max-w-6xl divide-y divide-base-300 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {proofPoints.map((point) => (
              <div key={point.label} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <p className="font-display text-3xl font-semibold text-primary">{point.value}</p>
                <p className="mt-1 text-sm text-base-content/65">{point.label}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionWrapper
          id="expertise"
          eyebrow="Fullstack, beyond the feature"
          title="Engineering across product and production."
          description="My strongest work connects user-facing product decisions with durable backend and delivery systems."
        >
          <div className="grid border-y border-base-300 md:grid-cols-3 md:divide-x md:divide-base-300">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index]
              return (
                <article key={capability.title} className="border-b border-base-300 py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
                  <Icon size={26} strokeWidth={1.6} className="text-primary" aria-hidden="true" />
                  <h3 className="font-display mt-5 text-2xl font-semibold">{capability.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-base-content/70">{capability.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label={`${capability.title} tools`}>
                    {capability.tools.map((tool) => (
                      <li key={tool} className="tech-label">{tool}</li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="experience"
          eyebrow="Experience"
          title="From feature delivery to systems ownership."
          description="A compact view of the roles that shaped how I build, deploy, and improve production software."
          tone="surface"
        >
          <div className="border-t border-base-300">
            {experience.map((item, index) => (
              <article key={`${item.company}-${item.role}`} className="experience-row">
                <div className="md:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.period}</p>
                  <p className="mt-2 text-sm text-base-content/55">{item.location}</p>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-semibold">{item.role}</h3>
                  <p className="mt-1 font-semibold text-info">{item.company}</p>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-base-content/70 md:col-span-5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="font-mono text-xs text-primary" aria-hidden="true">0{index + 1}</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="work"
          eyebrow="Selected work"
          title="Systems built for real constraints."
          description="Product case studies spanning data intelligence, ERP, learning platforms, and reporting automation."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} featured={index === 0} onSelect={setSelectedProject} />
            ))}
          </div>
        </SectionWrapper>

        <section id="contact" className="border-t border-base-300 bg-base-content text-base-100">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-100/55">Let&apos;s build something durable</p>
              <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
                Looking for a fullstack engineer who stays for production?
              </h2>
            </div>
            <a href="mailto:sjuliandito@gmail.com" className="contact-action">
              Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-base-100/10 bg-base-content text-base-100/55">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Kevin Juliandito Suhartono</p>
          <p>Fullstack engineering · Platform delivery · Indonesia</p>
        </div>
      </footer>

      <ProjectModal
        key={selectedProject?.id ?? 'project-modal'}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App