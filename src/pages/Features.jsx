function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Features</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Container Isolation</h3>
          <p className="text-gray-600">Each agent runs in its own secure container with resource limits.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">GPU Access</h3>
          <p className="text-gray-600">Optional NVIDIA GPU support for AI inference and training.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Persistent Storage</h3>
          <p className="text-gray-600">SSD storage for agent state, logs, and data.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">SSH Access</h3>
          <p className="text-gray-600">Direct SSH into your containers for debugging and customization.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">API & CLI</h3>
          <p className="text-gray-600">Manage agents programmatically with our REST API and CLI tools.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
          <p className="text-gray-600">Real-time metrics and logging for all your agents.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
