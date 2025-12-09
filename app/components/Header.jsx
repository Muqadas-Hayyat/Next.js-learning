import React from 'react'
import Link  from 'next/link'

const Header = () => {
  return (
     <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav className="mt-2">
            <Link  href="/" className="mr-4 hover:underline">Home</Link>
            <Link  href="/about" className="mr-4 hover:underline">About</Link>
            <Link  href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>
  )
}

export default Header