function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Pricing</h1>
      <p className="text-center text-gray-600 mb-12">Simple, transparent pricing for AI agent hosting.</p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-2">Basic</h3>
          <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-gray-500">/mo</span></div>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li>1 vCPU</li>
            <li>2 GB RAM</li>
            <li>20 GB SSD</li>
            <li>Shared GPU</li>
            <li>1 agent</li>
          </ul>
          <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Coming Soon
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary-500">
          <div className="text-primary-600 text-sm font-semibold mb-2">POPULAR</div>
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-500">/mo</span></div>
          
          <ul className="space-y-3 text-gray-600 mb-8">
            <li>4 vCPU</li>
            <li>16 GB RAM</li>
            <li>100 GB SSD</li>
            <li>Dedicated GPU slice</li>
            <li>5 agents</li>
            <li>Priority support</li>
          </ul>
          <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700">
            Join Waitlist
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <div className="text-4xl font-bold mb-4">Custom</div>
          
          <ul className="space-y-3 text-gray-600 mb-8">
            <li>Dedicated servers</li>
            <li>Custom GPU configurations</li>
            <li>Unlimited agents</li>
            <li>SLA guarantee</li>
            <li>24/7 support</li>
          </ul>
          <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
