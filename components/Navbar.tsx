"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Journey', href: '/journey' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  // { name: 'Adventures', href: '/adventures' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">Jonathan Buchan</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-100 hover:bg-indigo-500 hover:text-white transition-colors duration-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'bg-indigo-700 text-white'
                    : 'text-indigo-100 hover:bg-indigo-500 hover:text-white transition-colors duration-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}