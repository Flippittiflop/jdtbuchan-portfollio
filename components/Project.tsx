import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface ProjectProps {
  title: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
}

export default function Project({ title, imageUrl, description, githubUrl }: ProjectProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      <div className="mb-6">
        <Image
          src={imageUrl}
          alt={`${title} Architecture Diagram`}
          width={800}
          height={600}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
        <p className="text-lg">{description}</p>
      </section>
      
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="w-full sm:w-auto">
          View on GitHub
        </Button>
      </Link>
    </div>
  )
}