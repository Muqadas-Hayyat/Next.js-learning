// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav className="mt-2">
            <a href="/" className="mr-4 hover:underline">Home</a>
            <a href="/about" className="mr-4 hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
          &copy; 2025 My Website
        </footer>
      </body>
    </html>
  )
}
