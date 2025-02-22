export const dynamic = 'force-static'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ProjectHeader } from '@/components/project/ProjectHeader'
import { ProjectGallery } from '@/components/project/ProjectGallery'
import { ProjectDescription } from '@/components/project/ProjectDescription'
import { Button } from "@/components/ui/button"
import projectsData from '@/data/projects.json'

export function generateStaticParams() {
  return projectsData.categories.flatMap(category =>
    category.projects.map(project => ({
      project: project.link.split('/').pop(),
    }))
  ).filter(param => param.project !== undefined && !param.project.includes('http'))
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  const project = projectsData.categories.flatMap(category => 
    category.projects
  ).find(p => p.link.split('/').pop() === params.project)

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
      
      {/* Hire CTA */}
      <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need Similar Solutions for Your Business?</h2>
        <p className="text-lg mb-6">
          I specialize in creating custom solutions tailored to your specific needs. 
          Let's discuss how I can help your business succeed.
        </p>
        <Link href="/contact">
          <Button
            className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Hire Me for Your Project
          </Button>
        </Link>
      </div>
    </div>
  )
}