"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'
import {useEffect, useRef, useState} from "react"
import { TechnologyGraph } from '@/components/TechnologyGraph'
import {timeout} from "d3";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const jonTypes = ["Unknown Jon", "Intelligent Jon", "Casual Jon", "Professional Jon", "Teacher Jon", "Fun Jon"];
  const [jonType, setJonType] = useState(jonTypes[0]);

  const playRandomFrames = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      let count = 0;
      const interval = setInterval(() => {
        if (count < 3) {
          video.currentTime = Math.floor(Math.random() * 6);
          switch (true) {
            case (video.currentTime >= 0 && video.currentTime < 1):
              setJonType(jonTypes[1]);
              break;
            case (video.currentTime >= 1 && video.currentTime < 2):
              setJonType(jonTypes[2]);
              break;
            case (video.currentTime >= 2 && video.currentTime < 3):
              setJonType(jonTypes[3]);
              break;
            case (video.currentTime >= 3 && video.currentTime < 4):
              setJonType(jonTypes[4]);
              break;
            case (video.currentTime >= 4 && video.currentTime < 5):
              setJonType(jonTypes[5]);
              break;
            default:
              setJonType(jonTypes[0]);
          }
          count++;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    playRandomFrames();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center">
          <div
              className="relative w-80 h-80 mx-auto mb-8 rounded-full overflow-hidden"
              onClick={playRandomFrames}
          >
            <video
                ref={videoRef}
                src="/profile/profile-3.mp4"
                muted
                loop
                playsInline
                style={{width: "100%", height: "100%", objectFit: "cover"}}
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <h2 className="text-4xl font-bold mb-4">You got {jonType}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore my journey, projects, and adventures in the world of development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/journey" className="w-full sm:w-auto">
              <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                Start My Journey
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                View My Projects
              </Button>
            </Link>
            <a href="/path-to-your-resume.pdf" download className="w-full sm:w-auto">
              <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                <FileDown className="mr-2 h-4 w-4"/> Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
