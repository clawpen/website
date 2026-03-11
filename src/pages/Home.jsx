import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Data Visits the Agent.
              <br />
              <span className="text-primary-100">Not the Other Way Around.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Containerized AI agents in secure sandboxes.
              <br />
              You mount your data, the agent works, then it's destroyed.
            </p>
            
            <div className="flex justify-center gap-4">
              <Link
                to="/docs"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Get Started Free
              </Link>
              <Link
                to="/features"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Problem with AI Agents Today
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-700 mb-2">Cloud AI (ChatGPT, Claude)</h3>
              <p className="text-gray-600">You upload your data to their servers. They see everything. You trust them completely.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-700 mb-2">Local Agents</h3>
              <p className="text-gray-600">The agent has full access to your machine. One bug or bad prompt = potential disaster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Capsule Model</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A containerized agent that only sees what you explicitly give it.
              When you're done, the container is destroyed.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-12 max-w-4xl mx-auto">
            <div className="font-mono text-sm space-y-2">
              <div className="text-gray-400"># Mount your project, run a code review agent</div>
              <div>
                <span className="text-green-400">$</span> capsule run coder --mount ./my-project:/workspace
              </div>
              <div className="text-gray-400 mt-4"># Mount a dataset, run analysis</div>
              <div>
                <span className="text-green-400">$</span> capsule run analyst --mount s3://data/reports:/data
              </div>
              <div className="text-gray-400 mt-4"># Mount via Tailscale (your NAS, anywhere)</div>
              <div>
                <span className="text-green-400">$</span> capsule run researcher --mount tailscale://nas/docs:/docs
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold mb-2">1. Choose Agent</h3>
              <p className="text-gray-600 text-sm">Coder, Analyst, Researcher, or your custom image</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="font-semibold mb-2">2. Mount Data</h3>
              <p className="text-gray-600 text-sm">Local folder, S3, Tailscale, WebDAV — your choice</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">3. Work Happens</h3>
              <p className="text-gray-600 text-sm">Agent runs in isolated container, writes to output</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-semibold mb-2">4. Destroy</h3>
              <p className="text-gray-600 text-sm">Container deleted. Only your output files remain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Claw Pen */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Claw Pen?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">True Isolation</h3>
              <p className="text-gray-600">Linux namespaces, seccomp, capability dropping. The agent can't escape even if it tries.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Light</h3>
              <p className="text-gray-600">Containers start in &lt;1 second. No VM overhead. Pay only for what you use.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Source Core</h3>
              <p className="text-gray-600">Exo runtime is MIT licensed. Self-host for free, or use our managed cloud.</p>
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

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Capsule vs Alternatives</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4"></th>
                  <th className="py-3 px-4 text-primary-600 font-bold">Capsule</th>
                  <th className="py-3 px-4 text-gray-500">Cloud AI</th>
                  <th className="py-3 px-4 text-gray-500">Local Agent</th>
                  <th className="py-3 px-4 text-gray-500">VM</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Your data stays yours</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-red-500">✗</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Isolated from your system</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-red-500">✗</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Starts in &lt;1 second</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-red-500">✗</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Pay per minute</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-yellow-500">~</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Full filesystem access</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-red-500">✗</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Running Secure Agents</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Self-host for free, or use our managed cloud. Either way, your data never leaves your control.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/docs"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700"
            >
              Self-Host (Free)
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
            >
              Cloud Pricing
            </Link>
          </div>
          
          <div className="mt-8 text-gray-400 text-sm">
            Powered by <span className="text-white font-semibold">Exo</span> — our open-source container runtime
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
