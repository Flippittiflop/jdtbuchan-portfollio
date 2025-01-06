"use client"

import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:jonathan.buchan@jdtbuchan.com',
    text: 'jonathan.buchan@jdtbuchan.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jdtbuchan/',
    text: 'linkedin.com/in/jdtbuchan'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Flippittiflop',
    text: 'github.com/Flippittiflop'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/jdtbuchan',
    text: '@jdtbuchan'
  }
]

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      
      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <link.icon className="h-6 w-6 text-indigo-600 mr-3" />
            <div>
              <div className="font-semibold">{link.label}</div>
              <div className="text-gray-600">{link.text}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
        <form action="https://formsubmit.co/jonathan.buchan@jdtbuchan.com" method="POST" className="space-y-6">
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_subject" value="New portfolio contact!" />
          
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
