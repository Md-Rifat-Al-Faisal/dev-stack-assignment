import TechCard from './TechCard'
import type { Technology } from '../types'

interface TechListProps {
  technologies: Technology[]
  stack: Technology[]
  onAdd: (tech: Technology) => void
}

const TechList = ({ technologies, stack, onAdd }: TechListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard 
          key={tech.id} 
          tech={tech} 
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={onAdd} 
        />
      ))}
    </div>
  )
}

export default TechList