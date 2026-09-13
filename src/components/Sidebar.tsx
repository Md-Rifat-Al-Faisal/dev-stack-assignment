import { FiX } from 'react-icons/fi'
import type { Technology } from '../types'

interface SidebarProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
  return (
    <aside className="sticky top-24 flex flex-col rounded-[32px] bg-slate-50 p-8 shadow-sm">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Your<br/>Stack</h2>
      
      {stack.length === 0 ? (
        <p className="text-[15px] leading-relaxed text-slate-500">
          You haven't added any technologies yet. Click "Add to Stack" on a card above to start building!
        </p>
      ) : (
        <>
          <p className="mb-4 text-sm font-medium text-slate-500">{stack.length} Technology Selected</p>
          
          <div className="mb-6 flex flex-col gap-3">
            {stack.map((tech) => (
              <div 
                key={tech.id} 
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="h-6 w-6 object-contain" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{tech.name}</span>
                    <span className="text-[10px] font-medium text-slate-400">{tech.category}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(tech.id)}
                  className="text-slate-400 transition-colors hover:text-slate-700"
                  aria-label={`Remove ${tech.name}`}
                >
                  <FiX size={20} />
                </button>
              </div>
            ))}
          </div>

          <button 
            onClick={onRemoveAll}
            className="w-full rounded-xl border border-red-200 bg-white py-3 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default Sidebar