import type { Technology } from '../types'

interface TechCardProps {
  tech: Technology
  isAdded: boolean
  onAdd: (tech: Technology) => void
}

const getBadgeStyles = (badge?: string) => {
  switch (badge) {
    case 'Popular': case 'Top SQL': case 'Essential': case 'Typed': case 'Robust': case 'Containers': case 'Versioning': return 'bg-blue-50 text-blue-500'
    case 'Versatile': case 'Standard': case 'Flexible': return 'bg-emerald-50 text-emerald-600'
    case 'Fast': case 'Ubiquitous': case 'Minimal': return 'bg-orange-50 text-orange-500'
    case 'Cache': case 'Full Stack': return 'bg-rose-50 text-rose-500'
    case 'Modern': return 'bg-cyan-50 text-cyan-600'
    default: return 'bg-slate-50 text-slate-500'
  }
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-12 w-12 object-contain" />
        {tech.badge && (
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${getBadgeStyles(tech.badge)}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-500">{tech.description}</p>
      
      <hr className="my-4 border-slate-100" />
      
      {/* whitespace-nowrap prevents "Beginner-Friendly" from splitting */}
      <div className="flex items-center justify-between text-[13px]">
        <span className="whitespace-nowrap rounded-lg bg-slate-50 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="whitespace-nowrap text-slate-500">
          {tech.difficulty}
        </span>
        <span className="whitespace-nowrap flex items-center gap-1 font-bold text-slate-700">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button 
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
          isAdded 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : 'bg-[#0f1117] text-white hover:opacity-90'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechCard