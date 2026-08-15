import { useNavigate } from 'react-router-dom'
import HudChrome from '../components/HudChrome.jsx'
import NavBar from '../components/NavBar.jsx'

const CARDS = [
  { title: 'PROFILE', desc: 'IDENTITY & EDUCATION', to: '/profile' },
  { title: 'EXPERIENCE', desc: 'JOB HISTORY & TIMELINE', to: '/experience' },
  { title: 'SKILLSETS', desc: 'LANGUAGES, TOOLS & FRAMEWORKS', to: '/skillsets' },
  { title: 'PROJECTS &\nPUBLICATIONS', desc: 'COMPILED BUILDS & CASE STUDIES', to: '/projects' },
  { title: 'NETWORK', desc: 'SOCIAL GRID AND EXTERNAL LINKS', to: '/network' },
  { title: 'CONTACT', desc: 'DIRECT COMMUNICATION', to: '/uplink' },
]

export default function Operations() {
  const navigate = useNavigate()

  return (
    <>
      <HudChrome />
      <NavBar showBack={false} />
      <main className="project-container">
        <header className="sub-page-header">
          <h1>MAIN MENU</h1>
        </header>
        <section className="grid-layout">
          {CARDS.map((card) => (
            <div className="card" key={card.to} onClick={() => navigate(card.to)}>
              <h2 style={{ whiteSpace: 'pre-line' }}>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
