"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Ideas into Reality?</h2>
          <p className="text-xl mb-8">Let's discuss how I can help bring your vision to life</p>
          <Link href="/contact">
            <Button
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}