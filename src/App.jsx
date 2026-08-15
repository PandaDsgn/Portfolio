import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import CustomCursor from './components/CustomCursor.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Experience from './pages/Experience.jsx'
import Skillsets from './pages/Skillsets.jsx'
import Projects from './pages/Projects.jsx'

function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    // Original site: <body class="projects-page"> on every sub-page, plain <body> on home.
    document.body.className = location.pathname === '/' ? '' : 'projects-page'
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operations" element={<Navigate to="/" replace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skillsets" element={<Skillsets />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}
