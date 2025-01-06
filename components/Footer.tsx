import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Jonathan Buchan. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/impressum" className="hover:text-gray-300 transition-colors duration-300">
              Impressum
            </Link>
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-300 transition-colors duration-300">
              Terms and Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
