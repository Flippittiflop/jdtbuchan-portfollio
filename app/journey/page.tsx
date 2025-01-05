import Timeline from '@/components/Timeline'
import journeyData from '@/data/journey.json'

export default function Journey() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Journey</h1>
      <p className="text-lg mb-8">
        Explore the key milestones in my development journey, from my first lines of code to my current projects and beyond.
      </p>
      <Timeline items={journeyData.timelineData} />
    </div>
  )
}