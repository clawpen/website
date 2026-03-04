function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Pricing</h1>
      <p className="text-center text-gray-600 mb-12">
        We're finalizing our pricing plans. Check back soon!
      </p>
      
      {/* Self-Hosted - Only option available */}
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

      {/* Coming Soon Notice */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gray-50 p-8 rounded-xl border">
          <h2 className="text-2xl font-bold mb-4">Templates & Hosting</h2>
          <p className="text-gray-600 mb-4">
            Premium templates and managed hosting are coming soon.
          </p>
          <p className="text-gray-500 text-sm">
            Join our newsletter to be notified when they're available.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Do I have to pay to use Claw Pen?</h3>
            <p className="text-gray-600">No. Claw Pen is free and open source. You only pay for premium templates or optional hosting when they become available.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">When will templates be available?</h3>
            <p className="text-gray-600">Soon! We're finalizing the template marketplace. Sign up for updates.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Is my data private?</h3>
            <p className="text-gray-600">Yes. Self-hosted means your data never leaves your machine. When hosting becomes available, it will stay in Canada on servers we control.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
