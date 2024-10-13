import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const adventures = [
  {
    title: "Attending My First Hackathon",
    date: "June 15, 2022",
    description: "I participated in my first 24-hour hackathon, building a project that aimed to solve local community issues. The experience was intense, challenging, and incredibly rewarding.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/adventures/first-hackathon"
  },
  {
    title: "Speaking at a Tech Conference",
    date: "September 3, 2022",
    description: "I had the opportunity to speak at a major tech conference about my experience in transitioning from a junior to a senior developer. Sharing my journey and insights with others was both nerve-wracking and exhilarating.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/adventures/tech-conference-talk"
  },
  {
    title: "Contributing to Open Source",
    date: "January 20, 2023",
    description: "I made my first significant contribution to a popular open-source project. The process of collaborating with developers from around the world and seeing my code merged into a project used by thousands was incredibly fulfilling.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/adventures/open-source-contribution"
  }
]

export default function Adventures() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Adventures</h1>
      <p className="text-lg mb-8">
        Join me as I recount my exciting journey through the tech world, from hackathons to conferences and everything in between.
      </p>
      <div className="space-y-12">
        {adventures.map((adventure, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src={adventure.image}
                alt={adventure.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{adventure.title}</h2>
              <p className="text-gray-600 mb-4">{adventure.date}</p>
              <p className="text-gray-800 mb-6">{adventure.description}</p>
              <Link href={adventure.link}>
                <Button variant="outline" className="w-full sm:w-auto">Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}