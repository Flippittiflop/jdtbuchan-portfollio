"use client"

import { useTransform, useScroll, motion } from "framer-motion"
import { HeroSection } from "@/components/home/HeroSection"
import { StatsSection } from "@/components/home/StatsSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { CTASection } from "@/components/home/CTASection"

const jonTypes = ["Fun Jon", "Intelligent Jon", "Casual Jon", "Professional Jon", "Teacher Jon", "Fun Jon"];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="flex flex-col items-center">
      <HeroSection jonTypes={jonTypes} />
      <motion.div style={{ y }} className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}