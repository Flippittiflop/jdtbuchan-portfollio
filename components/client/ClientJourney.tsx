import { Badge } from "@/components/ui/badge"

interface ClientJourneyProps {
  journey: {
    description: string
    skills: string[]
  }
}

export function ClientJourney({ journey }: ClientJourneyProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Role Overview</h2>
      <p className="text-gray-700 mb-6">{journey.description}</p>
      
      <h3 className="text-xl font-semibold mb-3">Skills & Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {journey.skills.map((skill, index) => (
          <Badge key={index} variant="outline">{skill}</Badge>
        ))}
      </div>
    </div>
  )
}