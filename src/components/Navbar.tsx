import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navigationLinks = [
  'Home',
  'Technologies',
  'Projects',
  'About',
  'Contact',
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto grid min-h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? (
            <FiX size={24} aria-hidden="true" />
          ) : (
            <FiMenu size={24} aria-hidden="true" />
          )}
        </button>

        <a
          href="#home"
          className="flex items-center gap-2 justify-self-center"
          aria-label="Dev Stack home"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
            DS
          </div>

          <span className="hidden text-xl font-extrabold text-slate-900 sm:inline">
                        Dev<span className="font-medium text-brand-gradient">Stack</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm transition-colors hover:text-pink-600 ${
                link === 'Home' ? 'font-bold text-[#C13584]' : 'font-medium text-slate-600'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end sm:gap-5">
          <button
            type="button"
            className="min-h-11 cursor-pointer whitespace-nowrap text-xs font-medium text-slate-600 hover:text-pink-600 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
                        className="brand-gradient min-h-11 cursor-pointer whitespace-nowrap rounded-full px-6 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
          >
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`block rounded-lg px-3 py-3 text-sm transition-colors ${
                link === 'Home'
                  ? 'bg-pink-50 font-bold text-[#C13584]'
                  : 'font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar