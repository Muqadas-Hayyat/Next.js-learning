// app/layout.js

import Header from './components/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gray-100 font-sans'>
        {/* Header */}

        <Header />
        {/* Page Content */}
        <main className='p-6'>{children}</main>

        {/* Footer */}
        <footer className='bg-gray-800 text-white text-center p-4 mt-10'>
          &copy; 2025 My Website
        </footer>
      </body>
    </html>
  )
}
