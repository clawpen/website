function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Features</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Claw Pen gives you everything you need to run private AI agents — 
        self-hosted or managed.
      </p>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Self-Hosting</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Container Isolation</h3>
            <p className="text-gray-600">Each agent runs in its own secure container with resource limits. No cross-contamination.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Local GPU Support</h3>
            <p className="text-gray-600">Use your own NVIDIA GPU for fast inference. No cloud, no latency.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Persistent Storage</h3>
            <p className="text-gray-600">Agent state, memory, and data persist across restarts.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">REST API & CLI</h3>
            <p className="text-gray-600">Manage agents programmatically. Automate deployments.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Desktop App</h3>
            <p className="text-gray-600">Native Tauri app for managing agents without touching the terminal.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Multi-Agent</h3>
            <p className="text-gray-600">Run multiple agents simultaneously. Each with its own model, config, and tools.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Templates</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">One-Click Deploy</h3>
            <p className="text-gray-600">Browse templates, click deploy. No configuration required.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Pre-Tested</h3>
            <p className="text-gray-600">Every template is tested and documented. It just works.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-gray-600">Start from a template, tweak the prompt, add your own tools.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Optional Hosting</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
            <p className="text-gray-600">100% hydroelectric power in Northern Ontario. Cool climate, low cooling costs.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Canadian Data</h3>
            <p className="text-gray-600">Your data stays in Canada. No cross-border transfers, no third-party access.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Zero Management</h3>
            <p className="text-gray-600">We handle updates, monitoring, backups. You just use your agents.</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Open Source</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Claw Pen is fully open source. Audit the code, contribute features, 
          or fork it for your own needs. No vendor lock-in.
        </p>
        <a
          href="https://github.com/clawpen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 font-semibold hover:text-primary-700"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  )
}

export default Features
