import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Deploy AI Agents.
              <br />
              <span className="text-primary-100">Your Infrastructure. Your Control.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Your AI agents run on YOUR hardware.
              <br />
              We just make them easy to deploy and manage.
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
            The Problem with AI Services Today
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-700 mb-2">Cloud AI Services</h3>
              <p className="text-gray-600">Upload your data to their servers. They see everything. You're locked into their provider and pricing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-700 mb-2">Local Agents</h3>
              <p className="text-gray-600">The agent has full access to your machine. One bug or bad prompt = potential disaster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Pen Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Pen Model</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A containerized agent that only sees what you explicitly give it.
              Bring your own API keys. When you're done, the container is destroyed.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-12 max-w-4xl mx-auto">
            <div className="font-mono text-sm space-y-2">
              <div className="text-gray-400"># Deploy a code review agent</div>
              <div>
                <span className="text-green-400">$</span> pen run coder --mount ./my-project:/workspace
              </div>
              <div className="text-gray-400 mt-4"># Run analysis on a dataset</div>
              <div>
                <span className="text-green-400">$</span> pen run analyst --mount s3://data/reports:/data
              </div>
              <div className="text-gray-400 mt-4"># Mount via Tailscale (your NAS, anywhere)</div>
              <div>
                <span className="text-green-400">$</span> pen run researcher --mount tailscale://nas/docs:/docs
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
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Sovereignty</h3>
              <p className="text-gray-600">Your files never leave your machine. Process sensitive documents, code, and data without uploading to third-party clouds.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Container Isolation</h3>
              <p className="text-gray-600">Each agent runs in its own isolated container using our Exo runtime. Linux namespaces, seccomp, capability dropping. The agent can't escape even if it tries.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bring Your Own Keys</h3>
              <p className="text-gray-600">Use your own API keys from z.ai, OpenAI, Anthropic, or any provider. You own the relationship — no vendor lock-in.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Agent Teams</h3>
              <p className="text-gray-600">Deploy specialized agents that work together. Code reviewers, researchers, writers — all orchestrated from one dashboard.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Light</h3>
              <p className="text-gray-600">Containers start in &lt;1 second. No VM overhead. Run on your laptop, homelab, or VPS.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Vendor Lock-In</h3>
              <p className="text-gray-600">Standard containers, standard protocols. Move your agents anywhere. We make deployment easy, not proprietary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pen vs Alternatives</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4"></th>
                  <th className="py-3 px-4 text-primary-600 font-bold">Pen</th>
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
                  <td className="py-3 px-4 font-medium">Bring your own API keys</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-red-500">✗</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
                  <td className="py-3 px-4 text-green-600">✓</td>
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
            Self-host for free. Your data never leaves your control. Bring your own API keys.
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
