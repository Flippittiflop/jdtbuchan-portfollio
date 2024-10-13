import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    title: "Best Developer Award",
    date: "2023",
    description: "Received the Best Developer Award at the annual tech conference for outstanding contributions to open-source projects.",
    category: "Professional"
  },
  {
    title: "Hackathon Winner",
    date: "2022",
    description: "Led a team to victory in a 48-hour hackathon, developing an innovative solution for sustainable urban transportation.",
    category: "Competition"
  },
  {
    title: "1000+ GitHub Stars",
    date: "2021",
    description: "One of my open-source projects reached over 1000 stars on GitHub, marking a significant milestone in community recognition.",
    category: "Open Source"
  },
  {
    title: "Tech Blog Milestone",
    date: "2020",
    description: "My tech blog reached 10,000 monthly active readers, showcasing growing influence in the developer community.",
    category: "Community"
  }
]

export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Achievements</h1>
      <p className="text-lg mb-8">
        Here are some of the key milestones and achievements in my professional journey as a developer.
      </p>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
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