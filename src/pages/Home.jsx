import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import HudChrome from '../components/HudChrome.jsx'

function Chars({ text }) {
  return text.split('').map((ch, i) => (
    <span className="char" key={i}>
      {ch === ' ' ? ' ' : ch}
    </span>
  ))
}

const CARDS = [
  { title: 'PROFILE', desc: 'IDENTITY, EDUCATION and CONTACT', to: '/profile' },
  { title: 'EXPERIENCE', desc: 'Professional HISTORY and Creds', to: '/experience' },
  { title: 'SKILLSETS', desc: 'LANGUAGES, TOOLS & FRAMEWORKS', to: '/skillsets' },
  { title: 'PROJECTS &\nPUBLICATIONS', desc: 'ACADemic and Hobbyist projects', to: '/projects' },
]

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const heroRef = useRef(null)
  const imagineRef = useRef(null)
  const executeRef = useRef(null)
  const lineRightRef = useRef(null)
  const lineLeftRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const arrivingFromBack = Boolean(location.state?.fromBack)

    const ctx = gsap.context(() => {
      const imagineChars = imagineRef.current.querySelectorAll('.char')
      const executeChars = executeRef.current.querySelectorAll('.char')

      if (arrivingFromBack) {
        // Land straight on the menu, not the hero from scratch — jump
        // instantly (no smooth scroll) so it reads as "already there".
        window.scrollTo(0, cardsRef.current.offsetTop)
        window.history.replaceState({}, '')
      }

      if (reduceMotion || arrivingFromBack) {
        gsap.set([...imagineChars, ...executeChars], { opacity: 1 })
        gsap.set([lineRightRef.current, lineLeftRef.current], { scaleX: 1 })
        return
      }

      gsap.set(imagineChars, { opacity: 0 })
      gsap.set(executeChars, { opacity: 0 })

      // Plays once on mount, independent of scroll position.
      gsap
        .timeline()
        .to(lineRightRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' })
        .to(imagineChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')
        .to(lineLeftRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' }, '-=0.4')
        .to(executeChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')
    }, heroRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HudChrome />
      <main>
        <section className="hero" ref={heroRef}>
          <div className="hero-row">
            <h1 className="split-me" ref={imagineRef}>
              <Chars text="IMAGINE." />
            </h1>
            <div className="deco-lines from-right" ref={lineRightRef}></div>
          </div>
          <div className="hero-row right-align">
            <div className="deco-lines from-left" ref={lineLeftRef}></div>
            <h1 className="split-me text-blue" ref={executeRef}>
              <Chars text="EXECUTE." />
            </h1>
          </div>
        </section>

        <div
          className="project-container"
          style={{ paddingTop: '15vh', minHeight: '130vh', background: 'var(--black)', position: 'relative' }}
          ref={cardsRef}
        >
          <header className="sub-page-header">
            <h1>GO TO</h1>
          </header>
          <section className="grid-layout">
            {CARDS.map((card) => (
              <div className="card" key={card.to} onClick={() => navigate(card.to)}>
                <h2 style={{ whiteSpace: 'pre-line' }}>{card.title}</h2>
                <p>{card.desc}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  )
}
