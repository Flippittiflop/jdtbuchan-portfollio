"use client"

import { motion } from "framer-motion"
import { Code, Cloud, Layers, Rocket } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: "Solutions Architecture",
    description: "Expert design and implementation of scalable enterprise solutions"
  },
  {
    icon: Code,
    title: "Integration Services",
    description: "Seamless system integration using modern technologies and best practices"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud-native architecture and infrastructure optimization"
  },
  {
    icon: Rocket,
    title: "Web Development",
    description: "Custom web applications and responsive website development"
  }
];

export function ServicesSection() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your technical needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}