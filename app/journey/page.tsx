import Timeline from '@/components/Timeline'

export default function Journey() {
  const timelineData = [
    {
      title: "Started Coding Journey",
      date: "2018",
      description: "Began learning programming with Python and web development basics.",
      skills: ["Python", "HTML", "CSS"],
      ctaLink: "/journey/coding-start"
    },
    {
      title: "First Internship",
      date: "2019",
      description: "Interned at a local tech startup, working on their web application.",
      skills: ["JavaScript", "React", "Node.js"],
      ctaLink: "/journey/first-internship"
    },
    {
      title: "Graduated from University",
      date: "2020",
      description: "Completed my Computer Science degree with honors.",
      skills: ["Algorithms", "Data Structures", "Software Engineering"],
      ctaLink: "/journey/graduation"
    },
    {
      title: "First Full-time Job",
      date: "2021",
      description: "Joined a mid-size tech company as a full-stack developer.",
      skills: ["TypeScript", "Angular", "MongoDB"],
      ctaLink: "/journey/first-job"
    },
    {
      title: "Started Freelancing",
      date: "2022",
      description: "Began taking on freelance projects while working full-time.",
      skills: ["Vue.js", "AWS", "Docker"],
      ctaLink: "/journey/freelancing"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Journey</h1>
      <p className="text-lg mb-8">
        Explore the key milestones in my development journey, from my first lines of code to my current projects and beyond.
      </p>
      <Timeline items={timelineData} />
    </div>
  )
}