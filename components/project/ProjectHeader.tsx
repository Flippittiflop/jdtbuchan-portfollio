import { Badge } from "@/components/ui/badge"

interface ProjectHeaderProps {
  project: {
    title: string
    date: string
    client?: string // Make client optional
    technologies: string[]
  }
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <Badge variant="secondary">{project.date}</Badge>
      </div>
      {project.client && ( // Only show client section if client exists
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <span>Client:</span>
          <span className="font-medium">{project.client}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="outline">{tech}</Badge>
        ))}
      </div>
    </div>
  )
}