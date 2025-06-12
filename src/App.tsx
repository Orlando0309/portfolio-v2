import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import NotFound from './components/NotFound'
import contentData from './content.json'

function Portfolio() {
  const [content] = useState(contentData)

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      <CustomCursor />
      
      {/* Main Portfolio Content */}
      <main>
        <Hero content={content} />
        <About content={content} />
        <Skills content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Testimonials content={content} />
        <Contact content={content} />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800/50">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {content.bio.name}. Built with ❤️ using React, TypeScript, and Three.js
          </p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
