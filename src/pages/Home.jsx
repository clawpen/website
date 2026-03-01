import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Open-Source Platform
              <br />
              <span className="text-primary-100">for Private AI Agents</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Run AI agents on your own hardware. Browse templates, deploy in minutes.
              <br />
              Or let us host them for you.
            </p>
            
            <div className="flex justify-center gap-4">
              <Link
                to="/docs"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Download Free
              </Link>
              <Link
                to="/templates"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Claw Pen */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Claw Pen?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Self-Host for Free</h3>
              <p className="text-gray-600">Download the OSS orchestrator, run agents on your own machine. Your data, your hardware, your control.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">One-Click Templates</h3>
              <p className="text-gray-600">Browse pre-built agents for business, research, productivity. Tested, documented, ready to deploy.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optional Hosting</h3>
              <p className="text-gray-600">Don't want to manage infrastructure? We'll run it for you — on sustainable hydro power in Northern Ontario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Templates</h2>
            <p className="text-xl text-gray-600">Pre-built agents ready to deploy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-green-600 text-sm font-semibold mb-2">FREE</div>
              <h3 className="text-xl font-semibold mb-2">Tutor Box</h3>
              <p className="text-gray-600 mb-4">Learn anything with guided lessons and personalized explanations.</p>
              <Link to="/templates/tutor-box" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-primary-600 text-sm font-semibold mb-2">$29</div>
              <h3 className="text-xl font-semibold mb-2">Lead Hunter</h3>
              <p className="text-gray-600 mb-4">Find business leads on Kijiji automatically. Filter, export, repeat.</p>
              <Link to="/templates/lead-hunter" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-primary-600 text-sm font-semibold mb-2">$29</div>
              <h3 className="text-xl font-semibold mb-2">Brief Synthesizer</h3>
              <p className="text-gray-600 mb-4">Turn documents into cited summaries, case briefs, and outlines.</p>
              <Link to="/templates/brief-synthesizer" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/templates"
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              View All Templates →
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          
          <div className="flex justify-center gap-8 mb-8 text-gray-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">1.</div>
              <div>Download Claw Pen</div>
              <div className="text-sm">(free, open source)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">2.</div>
              <div>Browse templates</div>
              <div className="text-sm">or build your own</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">3.</div>
              <div>Deploy locally</div>
              <div className="text-sm">or on our hosting</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              to="/docs"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700"
            >
              Download Now
            </Link>
            <a
              href="https://discord.gg/clawd"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
