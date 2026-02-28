import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              ClawPen
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-primary-600">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary-600">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary-600">
              Contact
            </Link>
            <a
              href="https://github.com/clawpen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
