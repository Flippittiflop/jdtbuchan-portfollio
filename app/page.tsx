"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'
import {useEffect, useRef, useState} from "react"
import { TechnologyGraph } from '@/components/TechnologyGraph'
import {timeout} from "d3"
import { cn } from '@/lib/utils'
import confetti from 'canvas-confetti'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const jonTypes = ["Fun Jon", "Intelligent Jon", "Casual Jon", "Professional Jon", "Teacher Jon", "Fun Jon"];
  const [jonType, setJonType] = useState(jonTypes[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const playRandomFrames = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsAnimating(true);
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
          setIsAnimating(false);
          setIsAnimated(true);
          // Trigger confetti
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      }, 1000);
    }
  };

  useEffect(() => {
    // playRandomFrames();
      if (videoRef.current) {
        videoRef.current.currentTime = 2;
      }
  }, []);


  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="relative w-96 h-96 mx-auto mb-8">
            {/* Pulsating ring */}
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r from-purple-500 to-indigo-500",
              isAnimating && "animate-pulse-ring"
            )} />
            
            {/* Video container */}
            <div
              className="absolute inset-4 rounded-full overflow-hidden cursor-pointer"
              onClick={playRandomFrames}
            >
              <video
                ref={videoRef}
                src="/profile/profile-3.mp4"
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          {(isAnimated || isAnimating) && (
              <h2 className="text-4xl font-bold mb-4 text-emerald-600">
                You got{' '}
                <span className={cn(
                    "transition-all duration-300",
                    isAnimating ? "text-gray-400 font-normal" : "text-indigo-600 font-bold"
                )}>
                  {jonType}
                </span>
              </h2>
          )}
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
            <a href="https://jdtbuchan-media.s3.eu-central-1.amazonaws.com/JBuchan_Resume.pdf" target="_blank" download className="w-full sm:w-auto">
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
