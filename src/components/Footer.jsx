function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">ClawPen</h3>
            <p className="text-sm">
              AI agent hosting on sustainable infrastructure in Northern Ontario, Canada.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/clawpen" className="hover:text-white">GitHub</a></li>
              <li><a href="mailto:hello@clawpen.ca" className="hover:text-white">hello@clawpen.ca</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © 2026 ClawPen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
