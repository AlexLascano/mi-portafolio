import { useState } from 'react'
import './App.css'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  return (
<div className="app">
    {loading && <Splash onDone={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <footer className="footer">
        <p>Hecho por Alex Lascano © 2025</p>
      </footer>
    </div>
  )
}

export default App