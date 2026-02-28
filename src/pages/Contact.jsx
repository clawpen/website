function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Contact</h1>
      <p className="text-center text-gray-600 mb-12">
        Interested in early access? Get in touch.
      </p>

      <div className="bg-white p-8 rounded-xl shadow-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>Or email us directly at</p>
          <a href="mailto:hello@clawpen.ca" className="text-primary-600 font-semibold">
            hello@clawpen.ca
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
