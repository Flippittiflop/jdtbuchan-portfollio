"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'
import { useEffect, useRef } from "react"
import { TechnologyGraph } from '@/components/TechnologyGraph'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.pause()
    }
  }, [])

  return (
    <>
      <TechnologyGraph />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="text-center">
          <div
            className="relative w-80 h-80 mx-auto mb-8 rounded-full overflow-hidden"
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
          >
            <video
              ref={videoRef}
              src="/profile/profile_movie.mp4"
              muted
              loop
              playsInline
              style={{width: "100%", height: "100%", objectFit: "cover"}}
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore my journey, projects, and adventures in the world of development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/journey" className="w-full sm:w-auto">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                Start My Journey
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                View My Projects
              </Button>
            </Link>
            <a href="/path-to-your-resume.pdf" download className="w-full sm:w-auto">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                <FileDown className="mr-2 h-4 w-4"/> Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
