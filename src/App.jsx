import { Routes, Route, Navigate } from 'react-router-dom'

import CustomCursor from './components/CustomCursor.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operations" element={<Navigate to="/" replace />} />
        <Route path="/profile" element={<Navigate to="/" replace />} />
        <Route path="/experience" element={<Navigate to="/" replace />} />
        <Route path="/skillsets" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
