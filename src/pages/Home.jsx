import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import HudChrome from '../components/HudChrome.jsx'
import NavBar from '../components/NavBar.jsx'
import Profile from './Profile.jsx'
import Experience from './Experience.jsx'
import Skillsets from './Skillsets.jsx'
import Projects from './Projects.jsx'

// Module-level (not component state) so it survives StrictMode's double
// mount in dev — only a full page refresh resets it.
let scrollHintDismissed = false

function Chars({ text }) {
  return text.split('').map((ch, i) => (
    <span className="char" key={i}>
      {ch === ' ' ? ' ' : ch}
    </span>
  ))
}

export default function Home() {
  const heroRef = useRef(null)
  const imagineRef = useRef(null)
  const executeRef = useRef(null)
  const lineRightRef = useRef(null)
  const lineLeftRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let dismissHint = null

    const ctx = gsap.context(() => {
      const imagineChars = imagineRef.current.querySelectorAll('.char')
      const executeChars = executeRef.current.querySelectorAll('.char')

      if (reduceMotion) {
        gsap.set([...imagineChars, ...executeChars], { opacity: 1 })
        gsap.set([lineRightRef.current, lineLeftRef.current], { scaleX: 1 })
        gsap.set(scrollRef.current, { opacity: scrollHintDismissed ? 0 : 1 })
      } else {
        gsap.set(imagineChars, { opacity: 0 })
        gsap.set(executeChars, { opacity: 0 })
        gsap.set(scrollRef.current, { opacity: 0 })

        // Plays once on mount, independent of scroll position.
        const tl = gsap
          .timeline()
          .to(lineRightRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' })
          .to(imagineChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')
          .to(lineLeftRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' }, '-=0.4')
          .to(executeChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')

        if (!scrollHintDismissed) {
          tl.to(scrollRef.current, { opacity: 1, duration: 0.4 }, '+=0.2')
        }
      }

      if (!scrollHintDismissed) {
        dismissHint = () => {
          scrollHintDismissed = true
          gsap.to(scrollRef.current, { opacity: 0, duration: 0.3 })
          window.removeEventListener('scroll', dismissHint)
        }
        window.addEventListener('scroll', dismissHint, { passive: true })
      }
    }, heroRef)

    return () => {
      ctx.revert()
      if (dismissHint) window.removeEventListener('scroll', dismissHint)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HudChrome />
      <NavBar />
      <main>
        <section className="hero" ref={heroRef}>
          <div className="hero-row">
            <h1 ref={imagineRef}>
              <Chars text="IMAGINE." />
            </h1>
            <div className="deco-lines from-right" ref={lineRightRef}></div>
          </div>
          <div className="hero-row right-align">
            <div className="deco-lines from-left" ref={lineLeftRef}></div>
            <h1 className="text-blue" ref={executeRef}>
              <Chars text="EXECUTE." />
            </h1>
          </div>

          <span className="scroll-hint" ref={scrollRef}>
            SCROLL DOWN
          </span>
        </section>

        <div className="project-container" style={{ paddingTop: '15vh' }}>
          <Profile />
          <Experience />
          <Skillsets />
          <Projects />
        </div>
      </main>
    </>
  )
}
