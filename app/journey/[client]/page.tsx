import { notFound } from 'next/navigation'
import { ClientHeader } from '@/components/client/ClientHeader'
import { ClientJourney } from '@/components/client/ClientJourney'
import { ClientProjects } from '@/components/client/ClientProjects'
import journeyData from '@/data/journey.json'
import projectsData from '@/data/projects.json'

// Generate static params for all possible client routes
export function generateStaticParams() {
  return journeyData.timelineData.map((entry) => ({
    client: entry.client.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default function ClientPage({ params }: { params: { client: string } }) {
  // Decode the URL-encoded client name
  const clientName = decodeURIComponent(params.client)
  
  // Find the journey entry for this client
  const journeyEntry = journeyData.timelineData.find(
    entry => entry.client.toLowerCase().replace(/\s+/g, '-') === clientName
  )

  // If no journey entry found, return 404
  if (!journeyEntry) {
    notFound()
  }

  // Get all projects for this client
  const clientProjects = projectsData.categories.flatMap(category =>
    category.projects.filter(project => project.client === journeyEntry.client)
  )

  return (
    <div className="max-w-4xl mx-auto px-4">
      <ClientHeader client={journeyEntry} />
      <ClientJourney journey={journeyEntry} />
      <ClientProjects projects={clientProjects} />
    </div>
  )
}