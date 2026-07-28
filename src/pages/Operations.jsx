import { useNavigate } from 'react-router-dom'
import HudChrome from '../components/HudChrome.jsx'
import NavBar from '../components/NavBar.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SplitText from '../components/SplitText.jsx'

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
        <PageHeader text="MAIN MENU" />
        <section className="grid-layout">
          {CARDS.map((card) => (
            <div className="card" key={card.to} onClick={() => navigate(card.to)}>
              <SplitText as="h2" text={card.title} className="split-me" />
              <SplitText as="p" text={card.desc} className="split-me" />
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
