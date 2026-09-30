export type ProjectScope = 'Work' | 'Personal' | 'Project'

export type ProjectScreenshot = {
  src: string
  alt: string
}

export type Capability = {
  title: string
  description: string
  tools: string[]
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export type ProofPoint = {
  value: string
  label: string
}

export type Project = {
  id: string
  title: string
  summary: string
  overview: string
  scope: ProjectScope
  role: string
  period?: string
  icon?: string
  thumbnail: string
  hero: string
  tools: string[]
  highlights: string[]
  screenshots: ProjectScreenshot[]
  takeaways: string[]
}
