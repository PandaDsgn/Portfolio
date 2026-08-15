import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { glitchText } from '../utils/textGlitch.js'

export default function NavBar({ showBack = true }) {
  const navigate = useNavigate()
  const backRef = useRef(null)
  const shutdownRef = useRef(null)

  function handleBack(e) {
    e.preventDefault()
    const el = backRef.current
    el.classList.add('text-blue')
    glitchText(el, {
      duration: 380,
      onComplete: () => navigate('/operations'),
    })
  }

  function handleShutdown(e) {
    e.preventDefault()
    const el = shutdownRef.current
    el.classList.add('shutdown-mode')
    glitchText(el, {
      duration: 380,
      onComplete: () => navigate('/'),
    })
  }

  return (
    <nav>
      <div className="logo">PORTFOLIO</div>
      <div className="nav-links">
        {showBack && (
          <a href="/operations" className="back-link" ref={backRef} onClick={handleBack}>
            BACK
          </a>
        )}
        <a href="/" id="shutdown-btn" ref={shutdownRef} onClick={handleShutdown}>
          SHUTDOWN
        </a>
      </div>
    </nav>
  )
}
