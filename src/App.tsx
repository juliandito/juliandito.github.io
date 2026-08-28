import { useState } from 'react'
import { ExternalLink, FileText, FolderGit2, Mail } from 'lucide-react'

import { Badge } from './components/Badge'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { contactLinks, profilePhoto, projects, resumeHref } from './data/portfolio'
import type { Project } from './types'

const contactIcons = {
  Email: Mail,
  LinkedIn: ExternalLink,
  GitHub: FolderGit2,
}

const skillTools = [
  'React',
  'TypeScript',
  'Vue.js',
  'Python Django',
  'NestJS',
  'Golang',
  'PHP Laravel',
  'PostgreSQL',
  'MySQL',
  'MSSQL',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'Agile Scrum',
]

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div data-theme="portfolio" className="min-h-screen bg-base-200 text-base-content">
      <main>
        {/* Cover banner */}
        <div
          className="relative h-52 w-full overflow-hidden sm:h-64"
          style={{
            background:
              'linear-gradient(135deg, rgba(200,111,77,0.18) 0%, rgba(247,242,233,0.76) 46%, rgba(87,121,156,0.18) 100%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,transparent,transparent 31px,rgba(111,102,95,0.55) 31px,rgba(111,102,95,0.55) 32px),repeating-linear-gradient(90deg,transparent,transparent 63px,rgba(111,102,95,0.35) 63px,rgba(111,102,95,0.35) 64px)',
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Page title */}
          <div className="mb-10 mt-8">
            <h1 className="font-display text-4xl font-semibold text-base-content sm:text-5xl">Hi There! ✨</h1>
          </div>

          {/* About section */}
          <div className="mb-14 grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Left: profile photo + contact */}
            <div className="flex flex-col gap-6">
              <div className="glow-ring mx-auto w-full max-w-55 overflow-hidden rounded-2xl border border-base-300/70 sm:max-w-62.5 lg:mx-0 lg:max-w-none">
                <img
                  src={profilePhoto}
                  alt="Portrait of Kevin Juliandito"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold text-base-content">Let&apos;s Connect</h3>
                <div className="flex flex-col gap-2">
                  {contactLinks.map((item) => {
                    const Icon = contactIcons[item.label as keyof typeof contactIcons]
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="flex items-center gap-3 rounded-2xl border border-base-300/70 bg-base-100/70 px-4 py-3 transition duration-200 hover:border-info/40 hover:bg-base-100"
                      >
                        <Icon size={15} className="shrink-0 text-info" />
                        <span className="truncate text-sm text-base-content/80">{item.value}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right: About Me */}
            <div className="glow-ring rounded-2xl border border-base-300/70 bg-base-100/70 p-6 sm:p-8">
              <h2 className="font-display mb-5 text-2xl font-semibold text-base-content">About Me</h2>
              <p className="text-base leading-8 text-base-content/80">
                Hi! I&apos;m <strong className="text-base-content">Kevin Juliandito</strong>, a Senior
                Fullstack Developer at <strong className="text-base-content">Brighty Official</strong> with
                over <strong className="text-base-content">5 years of experience</strong> building scalable
                SaaS products, enterprise applications, and modern web platforms. I specialize in
                developing production-grade software using Go, TypeScript, Python, PHP, React, and
                Vue.js, with expertise in backend architecture, authentication, cloud infrastructure,
                CI/CD, observability, and application security.
              </p>
              <p className="mt-4 text-base leading-8 text-base-content/80">
                I enjoy building SaaS products that are secure, scalable, and maintainable.
                Throughout my career, I&apos;ve delivered features across the entire product lifecycle,
                from system design and implementation to deployment and operational improvements,
                working on SaaS platforms, data intelligence systems, ERP solutions, and Learning
                Management Systems (LMS).
              </p>
              <p className="mt-4 text-base leading-8 text-base-content/80">
                Beyond engineering, I collaborate closely with product, design, and QA teams in
                Agile environments and have served as a
                <strong className="text-base-content"> Scrum Master</strong>, helping teams improve
                collaboration, streamline delivery, and continuously ship high-quality software.
              </p>

              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-base-content/65">
                  Skills &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillTools.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-sm text-base-content/65">
                Want to know more about me? Check out my resume here!
              </p>
              <a
                href={resumeHref}
                download
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-base-300/70 bg-base-200/60 px-4 py-2.5 text-sm text-base-content/80 transition duration-200 hover:border-info/40 hover:bg-base-200"
              >
                <FileText size={15} className="text-info" />
                My Resume
              </a>
            </div>
          </div>

          {/* Projects section */}
          <div className="mb-16">
            <h2 className="font-display mb-5 text-2xl font-semibold text-base-content">My Featured Projects 🚀</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="px-4 pb-10 pt-2 text-center text-sm text-base-content/60 sm:px-6 lg:px-8">
        Built with React, TypeScript, Tailwind CSS, and DaisyUI for GitHub Pages.
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
