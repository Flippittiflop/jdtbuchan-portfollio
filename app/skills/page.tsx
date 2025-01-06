"use client"

import { TechnologyGraph } from '@/components/TechnologyGraph'

export default function Skills() {
  return (
    <div className="relative min-h-[calc(100vh-16rem)] w-full">
      <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
        <TechnologyGraph />
      </div>
    </div>
  )
}