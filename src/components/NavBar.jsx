import { useEffect, useState } from 'react'

const TABS = [
  { label: 'PROFILE', id: 'profile' },
  { label: 'EXPERIENCE', id: 'experience' },
  { label: 'SKILLSETS', id: 'skillsets' },
  { label: 'PROJECTS', id: 'projects' },
]

export default function NavBar() {
  const [activeId, setActiveId] = useState(null)

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

  function handleHomeClick(e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleTabClick(e, id) {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <a href="#" className="nav-btn back-link" onClick={handleHomeClick}>
        HOME
      </a>
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
    </nav>
  )
}
