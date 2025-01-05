import { Badge } from "@/components/ui/badge"
import achievementsData from '@/data/achievements.json'

export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Achievements</h1>
      <p className="text-lg mb-8">
        Here are some of the key milestones and achievements in my professional journey as a developer.
      </p>
      <div className="space-y-6">
        {achievementsData.achievements.map((achievement, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold">{achievement.title}</h2>
              <Badge>{achievement.category}</Badge>
            </div>
            <p className="text-sm text-gray-600 mb-2">{achievement.date}</p>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}