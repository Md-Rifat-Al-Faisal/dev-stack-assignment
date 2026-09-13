import TechCard from './TechCard'
import type { Technology } from '../types'

interface TechListProps {
  technologies: Technology[]
}

const TechList = ({ technologies }: TechListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </div>
  )
}

export default TechList