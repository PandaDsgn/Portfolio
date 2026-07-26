import HudChrome from './HudChrome.jsx'
import NavBar from './NavBar.jsx'

export default function PageShell({ children, showBack = true }) {
  return (
    <>
      <HudChrome />
      <NavBar showBack={showBack} />
      <main className="project-container">{children}</main>
    </>
  )
}
