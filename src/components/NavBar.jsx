import { useNavigate, useLocation } from 'react-router-dom'
import { glitchText } from '../utils/textGlitch.js'

const TABS = [
  { label: 'PROFILE', to: '/profile' },
  { label: 'EXPERIENCE', to: '/experience' },
  { label: 'SKILLSETS', to: '/skillsets' },
  { label: 'PROJECTS', to: '/projects' },
]

export default function NavBar({ showBack = true }) {
  const navigate = useNavigate()
  const location = useLocation()

  function handleBack(e) {
    e.preventDefault()
    const el = e.currentTarget
    el.classList.add('text-blue')
    glitchText(el, {
      duration: 380,
      onComplete: () => navigate('/', { state: { fromBack: true } }),
    })
  }

  function handleTabClick(e, to) {
    e.preventDefault()
    if (location.pathname === to) return
    glitchText(e.currentTarget, {
      duration: 380,
      onComplete: () => navigate(to),
    })
  }

  return (
    <nav>
      {showBack ? (
        <a href="/" className="nav-btn back-link" onClick={handleBack}>
          HOME
        </a>
      ) : (
        <span />
      )}
      <div className="nav-tabs">
        {TABS.map((tab) => (
          <a
            key={tab.to}
            href={tab.to}
            className={`nav-tab${location.pathname === tab.to ? ' active' : ''}`}
            onClick={(e) => handleTabClick(e, tab.to)}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
