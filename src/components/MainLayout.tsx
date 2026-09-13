import TechList from './TechList'
import Sidebar from './Sidebar'
import type { Technology } from '../types'

interface MainLayoutProps {
  technologies: Technology[]
  loading: boolean
  stack: Technology[]
  onAdd: (tech: Technology) => void
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

const MainLayout = ({ technologies, loading, stack, onAdd, onRemove, onRemoveAll }: MainLayoutProps) => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="technologies">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                    Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="text-lg text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
        {/* Left Side: Tech Grid (3 columns on desktop) */}
        <div className="lg:col-span-3">
          {loading ? (
             <div className="flex h-64 flex-col items-center justify-center gap-4">
               <p className="text-lg font-medium text-slate-500">Loading technologies...</p>
               <svg className="h-8 w-8 animate-spin text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
             </div>
          ) : (
            <TechList technologies={technologies} stack={stack} onAdd={onAdd} />
          )}
        </div>

        {/* Right Side: Sidebar (1 column on desktop) */}
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          <Sidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      </div>
    </main>
  )
}

export default MainLayout