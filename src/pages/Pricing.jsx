function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Pricing</h1>
      <p className="text-center text-gray-600 mb-12">
        Self-host for free. Buy templates à la carte. Add hosting when you need it.
      </p>
      
      {/* Self-Hosted */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-primary-500">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Self-Hosted</h3>
            <div className="text-4xl font-bold mb-4">Free</div>
            <p className="text-gray-600 mb-6">
              Download Claw Pen and run agents on your own hardware. Forever free.
            </p>
            <ul className="text-left space-y-2 text-gray-600 mb-6">
              <li>✓ Unlimited agents</li>
              <li>✓ Full container control</li>
              <li>✓ Local GPU support</li>
              <li>✓ REST API & CLI</li>
              <li>✓ Desktop app</li>
              <li>✓ Community support</li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700">
              Download Free
            </button>
          </div>
        </div>
      </div>

      {/* Templates */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Templates</h2>
        <p className="text-center text-gray-600 mb-8">
          One-time purchase. Yours forever. Use on self-hosted or hosted.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-green-600 text-sm font-semibold mb-2">FREE</div>
            <h3 className="text-lg font-semibold mb-1">Tutor Box</h3>
            <p className="text-gray-500 text-sm mb-4">Learn anything</p>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200 text-sm">
              Included
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-primary-600 text-sm font-semibold mb-2">$29</div>
            <h3 className="text-lg font-semibold mb-1">Lead Hunter</h3>
            <p className="text-gray-500 text-sm mb-4">Kijiji scraper</p>
            <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 text-sm">
              Buy
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-primary-600 text-sm font-semibold mb-2">$29</div>
            <h3 className="text-lg font-semibold mb-1">Brief Synthesizer</h3>
            <p className="text-gray-500 text-sm mb-4">Document analysis</p>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200 text-sm">
              Coming Soon
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-primary-600 text-sm font-semibold mb-2">$29</div>
            <h3 className="text-lg font-semibold mb-1">Research Tool</h3>
            <p className="text-gray-500 text-sm mb-4">Deep research</p>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200 text-sm">
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      {/* Hosting */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Optional Hosting</h2>
        <p className="text-center text-gray-600 mb-8">
          Don't want to manage infrastructure? We'll run it for you.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Basic</h3>
            <div className="text-3xl font-bold mb-4">$9<span className="text-base text-gray-500">/mo</span></div>
            <ul className="space-y-2 text-gray-600 text-sm mb-6">
              <li>1 agent</li>
              <li>2 GB RAM</li>
              <li>Shared GPU</li>
              <li>Email support</li>
            </ul>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200">
              Coming Soon
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary-500">
            <div className="text-primary-600 text-sm font-semibold mb-2">POPULAR</div>
            <h3 className="text-lg font-semibold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">$29<span className="text-base text-gray-500">/mo</span></div>
            <ul className="space-y-2 text-gray-600 text-sm mb-6">
              <li>5 agents</li>
              <li>8 GB RAM</li>
              <li>Dedicated GPU slice</li>
              <li>Priority support</li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700">
              Coming Soon
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600 text-sm mb-6">
              <li>Unlimited agents</li>
              <li>Dedicated servers</li>
              <li>SLA guarantee</li>
              <li>24/7 support</li>
            </ul>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Do I have to pay to use Claw Pen?</h3>
            <p className="text-gray-600">No. Claw Pen is free and open source. You only pay for premium templates or optional hosting.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Can I use templates on self-hosted?</h3>
            <p className="text-gray-600">Yes. Once you buy a template, it works on self-hosted or hosted deployments.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Is my data private?</h3>
            <p className="text-gray-600">Yes. Self-hosted means your data never leaves your machine. If you use our hosting, it stays in Canada on servers we control.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
