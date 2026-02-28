import { StatusLabels, StatusColors, ProviderDisplayNames, LocalProviders } from '../types'

export default function AgentCard({ agent, onChat, onStart, onStop }) {
  const isLocal = LocalProviders.includes(agent.config.llm_provider)
  const canChat = agent.status === 'running'
  const isRunning = agent.status === 'running'
  const isStopped = agent.status === 'stopped'

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{agent.name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs text-white ${StatusColors[agent.status]}`}>
          {StatusLabels[agent.status]}
        </span>
      </div>

      {/* Info */}
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex justify-between">
          <span className="font-medium">Provider:</span>
          <span className={isLocal ? 'text-purple-600' : ''}>
            {ProviderDisplayNames[agent.config.llm_provider] || agent.config.llm_provider}
          </span>
        </div>
        {agent.config.llm_model && (
          <div className="flex justify-between">
            <span className="font-medium">Model:</span>
            <span>{agent.config.llm_model}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="font-medium">Memory:</span>
          <span>{agent.config.memory_mb} MB</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">CPU:</span>
          <span>{agent.config.cpu_cores} cores</span>
        </div>
        {agent.tailscale_ip && (
          <div className="flex justify-between">
            <span className="font-medium">Tailscale:</span>
            <span className="text-blue-600 font-mono text-xs">{agent.tailscale_ip}</span>
          </div>
        )}
        {agent.resource_usage && (
          <div className="flex justify-between">
            <span className="font-medium">Usage:</span>
            <span>{agent.resource_usage.cpu_percent.toFixed(1)}% CPU, {agent.resource_usage.memory_mb.toFixed(0)} MB</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        {canChat && (
          <button
            onClick={() => onChat(agent)}
            className="flex-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Chat
          </button>
        )}
        {isRunning && (
          <button
            onClick={() => onStop(agent.id)}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            Stop
          </button>
        )}
        {isStopped && (
          <button
            onClick={() => onStart(agent.id)}
            className="flex-1 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Start
          </button>
        )}
      </div>
    </div>
  )
}
