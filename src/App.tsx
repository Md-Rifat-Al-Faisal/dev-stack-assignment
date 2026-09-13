import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechList from './components/TechList'
import type { Technology } from './types'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        // A tiny artificial delay so you can actually see the loading state
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const response = await fetch('/data.json')
        const data: Technology[] = await response.json()
        setTechnologies(data)
      } catch (error) {
        console.error("Failed to fetch technologies:", error)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  return (
    <div id="home" className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="technologies">
        <div className="mb-10 text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-lg text-slate-600">
            Add any technologies you like &mdash; each one can be added only once.
          </p>
        </div>

        {loading ? (
          <div className="flex h-64 flex-col items-center justify-center gap-4">
            <p className="text-lg font-medium text-slate-500">Loading technologies...</p>
            <svg className="h-8 w-8 animate-spin text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <TechList technologies={technologies} />
        )}
      </main>
    </div>
  )
}

export default App