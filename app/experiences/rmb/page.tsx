import WorkExperience from '@/components/WorkExperience'

export default function RMBExperience() {
  const experienceData = {
    title: "Started Coding Journey",
    deliverable: "During this period, I laid the foundation for my programming career by learning Python and web development basics. I completed several online courses and personal projects to build a strong understanding of core programming concepts.",
    projects: [
      { name: "Klara E-commerce", link: "/projects/klara" },
      { name: "Weather App", link: "/projects/weather-app" },
    ],
    skills: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript basics",
      "Git version control",
      "Command line interface",
      "Problem-solving",
      "Algorithmic thinking",
    ],
  }

  return <WorkExperience {...experienceData} />
}