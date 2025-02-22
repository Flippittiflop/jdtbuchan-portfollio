"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Anique",
    role: "Product Owner, DB",
    content: "Jonathan improved our billing efficiency and accuracy by up to 50% with new intuitive web app designs and backend services"
  },
  {
    name: "Larchelle",
    role: "Principle, Little Sparrows",
    content: "Jonathan created a stunning website for our Nursery school that gave us an online presence to drive up business and was always available for new enhancements"
  },
  {
    name: "Stephan",
    role: "Director, Ignite Solutions",
    content: "Jonathan was a highly valued team member, known for his adaptability, technical leadership, and commitment to delivering high-quality solutions"
  }
];

export function TestimonialsSection() {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">What clients say about working with me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-indigo-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
