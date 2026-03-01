import { Link } from 'react-router-dom'

function Templates() {
  const templates = [
    {
      id: 'tutor-box',
      name: 'Tutor Box',
      price: 'Free',
      priceNum: 0,
      description: 'Learn anything with guided lessons and personalized explanations.',
      features: ['Adaptive learning', 'Multiple subjects', 'Progress tracking', 'Socratic method'],
      status: 'available'
    },
    {
      id: 'lead-hunter',
      name: 'Lead Hunter',
      price: '$29',
      priceNum: 29,
      description: 'Find business leads on Kijiji automatically. Filter, export, repeat.',
      features: ['Playwright automation', 'Custom keywords', 'Competitor filtering', 'CSV/JSON export'],
      status: 'available'
    },
    {
      id: 'brief-synthesizer',
      name: 'Brief Synthesizer',
      price: '$29',
      priceNum: 29,
      description: 'Turn documents into cited summaries, case briefs, and outlines.',
      features: ['PDF/Word support', 'Citation extraction', 'Argument mapping', 'Multiple formats'],
      status: 'coming-soon'
    },
    {
      id: 'research-tool',
      name: 'Research Tool',
      price: '$29',
      priceNum: 29,
      description: 'Deep research with persistent context and cited sources.',
      features: ['Multi-source search', 'Annotated bibliography', 'Session persistence', 'Fact verification'],
      status: 'coming-soon'
    },
    {
      id: 'billing-assistant',
      name: 'Billing Assistant',
      price: '$39/mo',
      priceNum: 39,
      description: 'Automatic time tracking for billable hours with cursor focus detection.',
      features: ['Window tracking', 'Voice commands', 'Invoice generation', 'Clio/QuickBooks export'],
      status: 'coming-soon'
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Templates</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Pre-built AI agents, tested and documented. One-time purchase, yours forever.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className={`bg-white p-6 rounded-xl shadow-sm border ${
              template.status === 'coming-soon' ? 'opacity-75' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{template.name}</h3>
              <span className={`text-sm font-semibold ${
                template.priceNum === 0 ? 'text-green-600' : 'text-primary-600'
              }`}>
                {template.price}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{template.description}</p>
            
            <ul className="space-y-1 mb-6">
              {template.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {template.status === 'available' ? (
              template.priceNum === 0 ? (
                <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200">
                  Included Free
                </button>
              ) : (
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700">
                  Buy {template.price}
                </button>
              )
            ) : (
              <button className="w-full bg-gray-100 text-gray-500 py-2 rounded-lg font-semibold cursor-not-allowed">
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Want a custom template?</h2>
        <p className="text-gray-600 mb-6">
          We build custom agents for specific workflows and industries.
        </p>
        <Link
          to="/contact"
          className="text-primary-600 font-semibold hover:text-primary-700"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  )
}

export default Templates
