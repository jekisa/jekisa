export interface Project {
  id: number
  name: string
  description: string
  techStack: string[]
  category: 'Web Development' | 'Digital Marketing' | 'AI Integration' | 'IT Support' | 'HR System'
  status: 'Completed' | 'In Progress' | 'Planned'
  year: number
  url?: string
  github?: string
}

export interface Experience {
  id: number
  period: string
  startDate: string
  endDate: string | null
  company: string
  role: string
  description: string
  badge?: string
  tags: string[]
}

export interface Skill {
  id: number
  icon: string
  name: string
  description: string
  tags: string[]
}

export interface Education {
  id: number
  year: string
  degree: string
  institution: string
  field: string
  location?: string
}

export interface Achievement {
  id: number
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
  description: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactLink {
  icon: string
  label: string
  value: string
  href: string
}

export type Theme = 'dark' | 'light'

export interface ProjectsApiResponse {
  data: Project[]
  total: number
  page: number
  pageSize: number
}
