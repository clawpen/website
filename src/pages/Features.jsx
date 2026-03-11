function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">How Capsule Works</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        A secure, containerized environment where your data visits the agent — 
        not the other way around.
      </p>

      {/* The Security Model */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">The Security Model</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 text-white p-8 rounded-xl mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-400">❌ Traditional Model</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Agent has full system access</li>
                  <li>• Can read any file, run any command</li>
                  <li>• One bug = potential data breach</li>
                  <li>• Trust the agent completely</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">✓ Capsule Model</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Agent sees only what you mount</li>
                  <li>• Can't escape the container</li>
                  <li>• Destroyed when task is done</li>
                  <li>• Trust is optional</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-semibold">Namespaces</h4>
              <p className="text-sm text-gray-600">PID, mount, UTS, IPC isolation</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-semibold">Seccomp</h4>
              <p className="text-sm text-gray-600">Syscall filtering, attack surface reduced</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold">Capabilities</h4>
              <p className="text-sm text-gray-600">Dropped all but essential</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl mb-2">👤</div>
              <h4 className="font-semibold">Rootless</h4>
              <p className="text-sm text-gray-600">No root on host, ever</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Connectors */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Bring Your Data</h2>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-3xl mb-3">📁</div>
            <h3 className="font-semibold mb-1">Local Files</h3>
            <p className="text-sm text-gray-600">Mount any folder from your machine</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="font-semibold mb-1">S3 / R2</h3>
            <p className="text-sm text-gray-600">Cloud storage without the transfer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-semibold mb-1">Tailscale</h3>
            <p className="text-sm text-gray-600">Your NAS, anywhere on the planet</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold mb-1">WebDAV</h3>
            <p className="text-sm text-gray-600">Nextcloud, ownCloud, etc.</p>
          </div>
        </div>
      </div>

      {/* Agent Types */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Built-in Agents</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">👨‍💻</span>
              <h3 className="text-xl font-semibold">Coder</h3>
            </div>
            <p className="text-gray-600 mb-3">Code review, refactoring, debugging. Mount your repo, get expert analysis.</p>
            <div className="text-sm text-gray-400">4GB RAM • 2 CPU • $0.01/min</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📊</span>
              <h3 className="text-xl font-semibold">Analyst</h3>
            </div>
            <p className="text-gray-600 mb-3">Data analysis, visualization, reporting. Mount datasets, get insights.</p>
            <div className="text-sm text-gray-400">8GB RAM • 4 CPU • $0.01/min</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🔍</span>
              <h3 className="text-xl font-semibold">Researcher</h3>
            </div>
            <p className="text-gray-600 mb-3">Web search, summarization, citations. Give it a topic, get a report.</p>
            <div className="text-sm text-gray-400">2GB RAM • 1 CPU • $0.01/min</div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Or <a href="/docs" className="text-primary-600 font-semibold">bring your own container image →</a>
          </p>
        </div>
      </div>

      {/* The Runtime */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Powered by Exo</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-lg text-gray-700 mb-6">
              Exo is our open-source container runtime — a single binary that runs OCI containers
              without root, without a daemon, without Docker.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Security</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>✓ Rootless by default</li>
                  <li>✓ No daemon (attack surface)</li>
                  <li>✓ Rust (memory safe)</li>
                  <li>✓ Seccomp + capabilities</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Performance</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>✓ &lt;1s container start</li>
                  <li>✓ No runtime overhead</li>
                  <li>✓ OCI image compatible</li>
                  <li>✓ ~10MB binary</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://github.com/clawpen/exo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                View Exo on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Self-Host */}
      <div className="bg-green-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Self-Host for Free</h2>
        <p className="text-green-700 mb-4 max-w-2xl mx-auto">
          Run Exo on your own hardware. No limits, no tracking, no fees.
          Same security model, same isolation, your infrastructure.
        </p>
        <a
          href="/docs"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
        >
          Download Exo
        </a>
      </div>
    </div>
  )
}

export default Features
