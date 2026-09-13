import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainLayout from './components/MainLayout'
import type { Technology } from './types'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    const loadData = async () => {
      try {
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

  const handleAddToStack = (tech: Technology) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warning('This technology is already in your stack!')
      return
    }
    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id))
    toast.info('Technology removed from stack.')
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.error('All technologies removed from stack.')
  }

  return (
    <div id="home" className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MainLayout 
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAdd={handleAddToStack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}

export default App