import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import adventuresData from '@/data/adventures.json'

export default function Adventures() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Adventures</h1>
      <p className="text-lg mb-8">
        Join me as I recount my exciting journey through the tech world, from hackathons to conferences and everything in between.
      </p>
      <div className="space-y-12">
        {adventuresData.adventures.map((adventure, index) => (
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