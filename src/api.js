// Claw Pen API Client

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export async function fetchAgents() {
  const response = await fetch(`${API_BASE}/agents`)
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}

export async function startAgent(id) {
  const response = await fetch(`${API_BASE}/agents/${id}/start`, {
    method: 'POST'
  })
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}

export async function stopAgent(id) {
  const response = await fetch(`${API_BASE}/agents/${id}/stop`, {
    method: 'POST'
  })
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}

export async function createAgent(config) {
  const response = await fetch(`${API_BASE}/agents`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config)
  })
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}

export async function deleteAgent(id) {
  const response = await fetch(`${API_BASE}/agents/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
}

export function createChatWebSocket(agentId, onMessage, onOpen, onClose) {
  const ws = new WebSocket(`ws://localhost:3000/api/agents/${agentId}/chat`)
  
  ws.onopen = () => onOpen?.()
  ws.onclose = () => onClose?.()
  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)
      onMessage?.(data)
    } catch (e) {
      console.error('Failed to parse WebSocket message:', e)
    }
  }
  
  return ws
}

export async function fetchProviders() {
  const response = await fetch(`${API_BASE}/providers`)
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}

export async function fetchTemplates() {
  const response = await fetch(`${API_BASE}/templates`)
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}
