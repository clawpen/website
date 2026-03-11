function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, Consumption-Based Pricing</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Pay only for what you use. No VM sitting idle, no hourly minimums.
        When your agent finishes, the container is destroyed and billing stops.
      </p>

      {/* Consumption Pricing */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6 text-center">Per-Session Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">$0.01</div>
              <div className="text-gray-600">per minute</div>
              <div className="text-sm text-gray-400 mt-1">Agent runtime</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">$0.001</div>
              <div className="text-gray-600">per GB-minute</div>
              <div className="text-sm text-gray-400 mt-1">Memory</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600">$0.01</div>
              <div className="text-gray-600">per GB</div>
              <div className="text-sm text-gray-400 mt-1">Data egress</div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Example Sessions</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span>Code review (15 min, 4GB)</span>
                <span className="font-semibold">$0.21</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Data analysis (2 hours, 8GB)</span>
                <span className="font-semibold">$2.16</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Research session (30 min, 2GB)</span>
                <span className="font-semibold">$0.33</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Long agent task (8 hours, 4GB)</span>
                <span className="font-semibold">$6.72</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Or Save with Subscriptions</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Hobby</h3>
            <div className="text-3xl font-bold mb-2">$9<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ 20 hours included</li>
              <li>✓ 5GB storage</li>
              <li>✓ Standard agents</li>
            </ul>
            <button className="w-full border border-primary-600 text-primary-600 py-2 rounded-lg font-semibold hover:bg-primary-50">
              Start Free
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-200">
            <div className="text-xs text-primary-600 font-semibold mb-1">MOST POPULAR</div>
            <h3 className="text-lg font-semibold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-2">$29<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ 100 hours included</li>
              <li>✓ 50GB storage</li>
              <li>✓ Priority queue</li>
              <li>✓ Custom agents</li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700">
              Get Started
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Team</h3>
            <div className="text-3xl font-bold mb-2">$99<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ 500 hours included</li>
              <li>✓ 200GB storage</li>
              <li>✓ Team sharing</li>
              <li>✓ API access</li>
            </ul>
            <button className="w-full border border-primary-600 text-primary-600 py-2 rounded-lg font-semibold hover:bg-primary-50">
              Contact Sales
            </button>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">Custom</div>
            <ul className="text-sm text-gray-300 space-y-2 mb-4">
              <li>✓ Dedicated nodes</li>
              <li>✓ On-prem option</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Custom integrations</li>
            </ul>
            <button className="w-full border border-white text-white py-2 rounded-lg font-semibold hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Self-Hosted */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-green-50 p-8 rounded-xl border border-green-200">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🆓</div>
            <div>
              <h3 className="text-xl font-semibold text-green-800">Self-Hosted: Always Free</h3>
              <p className="text-green-700">
                Run the Exo runtime on your own hardware. No limits, no tracking, no fees.
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-green-600">
            <a href="/docs" className="underline">Download Exo →</a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">How does billing work?</h3>
            <p className="text-gray-600">You're billed per minute of agent runtime. When the container is destroyed, billing stops. No hourly minimums, no idle charges.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">What counts as "data egress"?</h3>
            <p className="text-gray-600">Data flowing out of the container to the internet. Mounting local files or S3 buckets doesn't count — only when the agent sends data externally.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Can I use my own agent images?</h3>
            <p className="text-gray-600">Yes. Pro plans and above can run custom container images. Self-hosted has no restrictions.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Where is my data stored?</h3>
            <p className="text-gray-600">Cloud sessions run in Canada (Montreal/Toronto). Your mounted data stays in your storage — we don't copy it. When the container is destroyed, nothing remains.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
