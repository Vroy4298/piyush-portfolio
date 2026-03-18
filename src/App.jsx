import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  // Check local storage for theme, default dark
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="hero-gradient fixed inset-0 z-[-1] pointer-events-none" />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 space-y-32 pb-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
