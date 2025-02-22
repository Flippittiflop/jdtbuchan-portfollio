"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from '@/lib/utils'
import confetti from 'canvas-confetti'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileDown, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  jonTypes: string[]
}

export function HeroSection({ jonTypes }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [jonType, setJonType] = useState(jonTypes[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

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
    const video = videoRef.current;
    if (video) {
      const loadVideo = async () => {
        try {
          await video.load();
          video.currentTime = 2;
          setIsVideoLoaded(true);
        } catch (error) {
          console.error('Error loading video:', error);
        }
      };

      loadVideo();
      video.playsInline = true;
      video.setAttribute('webkit-playsinline', '');
      
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="relative w-96 h-96 mx-auto mb-8">
          <div className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r from-purple-500 to-indigo-500",
            isAnimating && "animate-pulse-ring"
          )} />
          
          <div
            className="absolute inset-4 rounded-full overflow-hidden cursor-pointer bg-gray-100"
            onClick={playRandomFrames}
          >
            {!isVideoLoaded && (
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            )}
            <video
              ref={videoRef}
              preload="auto"
              muted
              playsInline
              className={cn(
                "w-full h-full object-cover",
                !isVideoLoaded && "opacity-0",
                isVideoLoaded && "opacity-100 transition-opacity duration-300"
              )}
            >
              <source src="/profile/profile-3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Solutions Architect & Integration Specialist</h1>
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
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Transforming business challenges into elegant technical solutions. 
          Specializing in enterprise integration, cloud architecture, and custom web applications.
        </p>
        
        <div className="flex flex-col items-center space-y-4 mb-16">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                Hire Me <ArrowRight className="ml-2 h-5 w-5"/>
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                View Projects
              </Button>
            </Link>
          </div>
          
          <div className="w-full sm:w-auto max-w-xs">
            <a 
              href="https://jdtbuchan-media.s3.eu-central-1.amazonaws.com/JBuchan_Resume.pdf" 
              target="_blank" 
              download 
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                <FileDown className="mr-2 h-5 w-5"/> Download Resume
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}