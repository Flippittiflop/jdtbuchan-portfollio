"use client"

import { useRef } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion } from 'framer-motion'

interface TimelineItem {
  title: string
  date: string
  description: string
  skills: string[]
  ctaLink: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={timelineRef}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="mb-8 flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex flex-col items-center md:w-32">
            <div className="w-px h-full bg-gray-300 pointer-events-none"></div>
            <div className="w-8 h-8 rounded-full border-2 border-indigo-500 bg-white flex items-center justify-center">
              <span className="text-indigo-500 font-bold">{index + 1}</span>
            </div>
          </div>
          <div className="flex-grow pl-4 md:pl-8 pb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.date}</p>
              <p className="mb-4">{item.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                ))}
              </div>
              <Link href={index === 0 ? "/experiences/rmb" : item.ctaLink}>
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}