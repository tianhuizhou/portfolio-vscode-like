declare interface Project {
  version: string
  path: string
  name: string
  avatar: string
  cover: string
  intro: string
  url: string
  github: string
  details: ProjectDetails[]
  architecture: ProjectArchitecture[]
}

declare interface ProjectDetails {
  title: string
  description: string
  images: string[]
}

declare interface ProjectArchitecture {
  name: string
  icons: string[]
  description: string
  images: string[]
}
