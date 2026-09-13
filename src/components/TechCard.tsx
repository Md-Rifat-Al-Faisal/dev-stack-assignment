import type { Technology } from '../types'

interface TechCardProps {
  tech: Technology
}

const getBadgeStyles = (badge?: string) => {
  switch (badge) {
    case 'Popular':
    case 'Top SQL':
    case 'Essential':
    case 'Typed':
    case 'Robust':
    case 'Containers':
    case 'Versioning':
      return 'bg-blue-50 text-blue-500'
    case 'Versatile':
    case 'Standard':
    case 'Flexible':
      return 'bg-emerald-50 text-emerald-600'
    case 'Fast':
    case 'Ubiquitous':
    case 'Minimal':
      return 'bg-orange-50 text-orange-500'
    case 'Cache':
    case 'Full Stack':
      return 'bg-rose-50 text-rose-500'
    case 'Modern':
      return 'bg-cyan-50 text-cyan-600'
    default:
      return 'bg-slate-50 text-slate-500'
  }
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-12 w-12 object-contain" />
        {tech.badge && (
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${getBadgeStyles(tech.badge)}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">{tech.name}</h3>
      
      <p className="mt-3 flex-grow text-base leading-relaxed text-slate-500">
        {tech.description}
      </p>
      
      <hr className="my-5 border-slate-100" />
      
      <div className="flex items-center justify-between text-base">
        <span className="rounded-lg bg-slate-50 px-3 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-500 text-sm">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1.5 font-bold text-slate-700">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button className="mt-6 w-full rounded-xl bg-[#0f1117] py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90">
        Add to Stack
      </button>
      
    </div>
  )
}

export default TechCard