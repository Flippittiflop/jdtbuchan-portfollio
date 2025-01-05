import { notFound } from 'next/navigation'
import { ProjectHeader } from '@/components/project/ProjectHeader'
import { ProjectGallery } from '@/components/project/ProjectGallery'
import { ProjectDescription } from '@/components/project/ProjectDescription'
import projectsData from '@/data/projects.json'

// Generate static params for all possible project routes
export function generateStaticParams() {
  return projectsData.categories.flatMap(category =>
    category.projects.map(project => ({
      project: project.link.split('/').pop(),
    }))
  )
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  // Find the project across all categories
  const project = projectsData.categories.flatMap(category => 
    category.projects
  ).find(p => p.link.endsWith(params.project))

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProjectHeader project={project} />
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <ProjectGallery images={project.images || []} />
        <ProjectDescription description={project.longDescription || []} />
      </div>
    </div>
  )
}