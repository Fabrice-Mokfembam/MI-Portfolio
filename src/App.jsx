import { useState } from 'react'
import Navbar from './components/NAVBAR/Navbar'
import Hero from './components/HERO/Hero'
import About from './components/ABOUT/About'
import Skills from './components/SKILLS/Skills'
import Services from './components/SERVICES/Services'
import Projects from './components/PROJECTS/Projects'
import Contact from './components/CONTACT/Contact'
import Footer from './components/FOOTER/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
