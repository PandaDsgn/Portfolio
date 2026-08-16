import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const TABS = [
  { label: 'PROFILE', id: 'profile' },
  { label: 'EXPERIENCE', id: 'experience' },
  { label: 'SKILLSETS', id: 'skillsets' },
  { label: 'PROJECTS', id: 'projects' },
]

export default function NavBar() {
  const [activeId, setActiveId] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      // Treat a section as "active" once it's crossed the upper-middle of
      // the viewport, and stop tracking it before it reaches the bottom.
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleTabClick(e, id) {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav>
        <div className="nav-tabs">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`nav-tab${activeId === tab.id ? ' active' : ''}`}
              onClick={(e) => handleTabClick(e, tab.id)}
            >
              {tab.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {TABS.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`nav-mobile-link${activeId === tab.id ? ' active' : ''}`}
            onClick={(e) => handleTabClick(e, tab.id)}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </>
  )
}
