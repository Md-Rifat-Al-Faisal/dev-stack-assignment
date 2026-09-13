import { FiX } from 'react-icons/fi'
import type { Technology } from '../types'

interface SidebarProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
  return (
    <aside className="flex flex-col rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Your Stack</h2>
      
      {stack.length === 0 ? (
        <>
          <p className="mb-6 mt-1 text-sm text-slate-400">No technologies selected yet.</p>
          <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-10">
            <span className="text-sm font-medium text-slate-400">Your stack is empty.</span>
          </div>
        </>
      ) : (
        <>
          <p className="mb-6 mt-1 text-sm text-slate-400">{stack.length} Technology Selected</p>
          
          <div className="mb-6 flex flex-col gap-3">
            {stack.map((tech) => (
              <div 
                key={tech.id} 
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{tech.name}</span>
                    <span className="text-[11px] font-medium text-slate-400">{tech.category}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(tech.id)}
                  className="cursor-pointer text-slate-400 transition-colors hover:text-slate-700"
                  aria-label={`Remove ${tech.name}`}
                >
                  <FiX size={20} />
                </button>
              </div>
            ))}
          </div>

          <button 
            onClick={onRemoveAll}
            className="w-full cursor-pointer rounded-xl border border-red-200 bg-white py-3 text-sm font-semibold text-red-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-50 hover:shadow-sm"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default Sidebar