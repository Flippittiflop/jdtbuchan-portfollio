import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import projectsData from '@/data/projects.json'

export default function Projects() {
    const isExternal = (url: string) => {
        return url.startsWith("http://") || url.startsWith("https://");
    };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <p className="text-lg mb-4">
        Here you'll find a showcase of my most significant projects, detailing the technologies used and the problems solved.
      </p>
      
      {/* Quick Navigation */}
      <div className="flex flex-wrap gap-4 mb-8">
        {projectsData.categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300"
          >
            {category.label}
          </a>
        ))}
      </div>

      {/* Projects by Category */}
      {projectsData.categories.map((category) => (
        <div key={category.id} id={category.id} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 pt-4 border-t">
            {category.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                    <Link
                        href={project.link}
                        target={isExternal(project.link) ? "_blank" : undefined}
                        rel={isExternal(project.link) ? "noopener noreferrer" : undefined}
                    >
                        <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
