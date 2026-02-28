import { useState, useEffect } from 'react'
import { fetchAgents, startAgent, stopAgent, createAgent } from '../api'
import AgentCard from '../components/AgentCard'
import ChatPanel from '../components/ChatPanel'

export default function Dashboard() {
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [chatAgent, setChatAgent] = useState(null)
  const [showCreate, setShowCreate] = useState(false)

  // Load agents
  useEffect(() => {
    loadAgents()
  }, [])

  const loadAgents = async () => {
    try {
      setLoading(true)
      const data = await fetchAgents()
      setAgents(data)
      setError(null)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleStart = async (id) => {
    try {
      const updated = await startAgent(id)
      setAgents(agents.map(a => a.id === id ? updated : a))
    } catch (e) {
      setError(e.message)
    }
  }

  const handleStop = async (id) => {
    try {
      const updated = await stopAgent(id)
      setAgents(agents.map(a => a.id === id ? updated : a))
    } catch (e) {
      setError(e.message)
    }
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {
      const newAgent = await createAgent({
        name: formData.get('name'),
        template: formData.get('template'),
        provider: formData.get('provider'),
        model: formData.get('model'),
      })
      setAgents([...agents, newAgent])
      setShowCreate(false)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">🦀 Claw Pen</h1>
            <p className="text-sm text-gray-500">Agent Dashboard</p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            + New Agent
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
            <button onClick={() => setError(null)} className="float-right font-bold">×</button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-gray-400 py-20">Loading agents...</div>
        ) : agents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-4">No agents yet. Create one to get started!</p>
            <button
              onClick={() => setShowCreate(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create Your First Agent
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map(agent => (
              <AgentCard
                key={agent.id}
                agent={agent}
                onChat={setChatAgent}
                onStart={handleStart}
                onStop={handleStop}
              />
            ))}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create New Agent</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="My Agent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Template</label>
                <select
                  name="template"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="openclaw-agent">OpenClaw Agent (default)</option>
                  <option value="coding-assistant">Coding Assistant</option>
                  <option value="researcher">Researcher</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
                <select
                  name="provider"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="huggingface">HuggingFace (Free)</option>
                  <option value="openai">OpenAI</option>
                  <option value="anthropic">Anthropic</option>
                  <option value="zai">Z.AI (GLM)</option>
                  <option value="ollama">Ollama (Local)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                <input
                  name="model"
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Qwen/Qwen3-8B (optional)"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Chat Panel */}
      {chatAgent && (
        <ChatPanel
          agent={chatAgent}
          onClose={() => setChatAgent(null)}
        />
      )}
    </div>
  )
}
