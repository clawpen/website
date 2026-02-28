// Claw Pen Types

export const AgentStatus = {
  Running: 'running',
  Stopped: 'stopped',
  Starting: 'starting',
  Stopping: 'stopping',
  Error: 'error'
}

export const LlmProvider = {
  // Cloud
  OpenAI: 'openai',
  Anthropic: 'anthropic',
  Gemini: 'gemini',
  Kimi: 'kimi',
  Zai: 'zai',
  Huggingface: 'huggingface',
  // Local
  Ollama: 'ollama',
  LlamaCpp: 'llamacpp',
  Vllm: 'vllm',
  Lmstudio: 'lmstudio'
}

export const ProviderDisplayNames = {
  [LlmProvider.OpenAI]: 'OpenAI',
  [LlmProvider.Anthropic]: 'Anthropic',
  [LlmProvider.Gemini]: 'Gemini',
  [LlmProvider.Kimi]: 'Kimi (Moonshot)',
  [LlmProvider.Zai]: 'Zhipu AI (GLM)',
  [LlmProvider.Huggingface]: 'Hugging Face',
  [LlmProvider.Ollama]: 'Ollama (Local)',
  [LlmProvider.LlamaCpp]: 'llama.cpp (Local)',
  [LlmProvider.Vllm]: 'vLLM (Local)',
  [LlmProvider.Lmstudio]: 'LM Studio (Local)'
}

export const LocalProviders = [
  LlmProvider.Ollama,
  LlmProvider.LlamaCpp,
  LlmProvider.Vllm,
  LlmProvider.Lmstudio
]

export const StatusLabels = {
  [AgentStatus.Running]: 'Running',
  [AgentStatus.Stopped]: 'Stopped',
  [AgentStatus.Starting]: 'Starting...',
  [AgentStatus.Stopping]: 'Stopping...',
  [AgentStatus.Error]: 'Error'
}

export const StatusColors = {
  [AgentStatus.Running]: 'bg-green-500',
  [AgentStatus.Stopped]: 'bg-gray-400',
  [AgentStatus.Starting]: 'bg-yellow-500',
  [AgentStatus.Stopping]: 'bg-yellow-500',
  [AgentStatus.Error]: 'bg-red-500'
}
