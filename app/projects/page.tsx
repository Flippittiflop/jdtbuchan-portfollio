import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Klara: E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    link: "/projects/klara"
  },
  {
    title: "Weather App",
    description: "A responsive weather application using React and OpenWeatherMap API.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    link: "/projects/weather-app"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management tool built with Vue.js and Firebase.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    link: "/projects/task-management"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts and nutrition using React Native.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    link: "/projects/fitness-tracker"
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by machine learning and natural language processing.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    link: "/projects/ai-chatbot"
  }
]

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <p className="text-lg mb-8">
        Here you'll find a showcase of my most significant projects, detailing the technologies used and the problems solved.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
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
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link href={project.link}>
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}