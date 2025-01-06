"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSwipeable } from 'react-swipeable'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface GalleryImage {
  imageUrl: string
  description: string
}

interface ProjectGalleryProps {
  images: GalleryImage[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') previousImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') setShowModal(false)
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  if (!images?.length) {
    return null
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div 
          {...handlers}
          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <Image
            src={images[currentIndex].imageUrl}
            alt={`Gallery image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300"
          />
          
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                previousImage()
              }}
              className="rounded-full bg-white/80 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="rounded-full bg-white/80 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">{images[currentIndex].description}</p>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
            >
              <Image
                src={image.imageUrl}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <DialogTitle className="sr-only">
            Image Gallery - {images[currentIndex].description}
          </DialogTitle>
          <div className="relative w-full h-[80vh]">
            <Image
              src={images[currentIndex].imageUrl}
              alt={`Gallery image ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="bg-black"
            />
            <div className="absolute top-0 right-0 left-0 flex justify-end p-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowModal(false)}
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="outline"
                size="icon"
                onClick={previousImage}
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextImage}
                className="rounded-full bg-white/80 hover:bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="text-gray-700">{images[currentIndex].description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}