import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HudChrome from '../components/HudChrome.jsx'
import { glitchText } from '../utils/textGlitch.js'

gsap.registerPlugin(ScrollTrigger)

function Chars({ text }) {
  return text.split('').map((ch, i) => (
    <span className="char" key={i}>
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ))
}

export default function Home() {
  const navigate = useNavigate()
  const wrapperRef = useRef(null)
  const heroRef = useRef(null)
  const imagineRef = useRef(null)
  const executeRef = useRef(null)
  const lineRightRef = useRef(null)
  const lineLeftRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const imagineChars = imagineRef.current.querySelectorAll('.char')
      const executeChars = executeRef.current.querySelectorAll('.char')

      if (reduceMotion) {
        gsap.set([...imagineChars, ...executeChars], { opacity: 1 })
        gsap.set([lineRightRef.current, lineLeftRef.current], { scaleX: 1 })
        gsap.set(btnRef.current, { opacity: 1, y: 0 })
        return
      }

      gsap.set(imagineChars, { opacity: 0 })
      gsap.set(executeChars, { opacity: 0 })

      // Pinned scroll-scrubbed reveal: the wrapper is 180vh tall, the hero
      // itself is sticky/pinned for the full viewport, and the timeline is
      // scrubbed against the extra 80vh of scroll distance.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: heroRef.current,
        },
      })

      tl.to(lineRightRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' })
        .to(imagineChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')
        .to(lineLeftRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' }, '-=0.4')
        .to(executeChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')
        .to(btnRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '+=0.1')
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <HudChrome />
      <nav>
        <div className="logo">PORTFOLIO_V1.0</div>
      </nav>
      <main>
        <div className="hero-pin-wrapper" ref={wrapperRef}>
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
            <div className="btn-container">
              <button
                id="enter-btn"
                ref={btnRef}
                onClick={(e) => {
                  const el = e.currentTarget
                  el.classList.add('text-success')
                  glitchText(el, {
                    duration: 380,
                    onComplete: () => navigate('/operations'),
                  })
                }}
              >
                ACCESS_PROFILE
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
