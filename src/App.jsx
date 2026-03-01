import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Templates from './pages/Templates'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import WhyIBuiltClawPen from './pages/blog/WhyIBuiltClawPen'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* App dashboard - full screen, no navbar/footer */}
          <Route path="/app/*" element={<Dashboard />} />
          
          {/* Blog - no navbar/footer for readability */}
          <Route path="/blog/why-i-built-claw-pen" element={<WhyIBuiltClawPen />} />
          
          {/* Public pages */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
