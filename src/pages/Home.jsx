import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HudChrome from '../components/HudChrome.jsx'

gsap.registerPlugin(ScrollTrigger)

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
  const wrapperRef = useRef(null)
  const heroRef = useRef(null)
  const imagineRef = useRef(null)
  const executeRef = useRef(null)
  const lineRightRef = useRef(null)
  const lineLeftRef = useRef(null)
  const scrollRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const arrivingFromBack = Boolean(location.state?.fromBack)

    const ctx = gsap.context(() => {
      const imagineChars = imagineRef.current.querySelectorAll('.char')
      const executeChars = executeRef.current.querySelectorAll('.char')

      function markRevealComplete() {
        gsap.set([...imagineChars, ...executeChars], { opacity: 1 })
        gsap.set([lineRightRef.current, lineLeftRef.current], { scaleX: 1 })
        gsap.set(scrollRef.current, { opacity: 0 })
      }

      // The hero is pinned (held in place) for the wrapper's extra scroll
      // distance so the page genuinely doesn't move until the reveal has
      // played out — scrolling from the top drives the animation, not the
      // page position. This pin is set up unconditionally, even when the
      // reveal animation itself is skipped (reduced motion, or arriving via
      // BACK already fully revealed) — otherwise that extra scroll distance
      // is never actually consumed by anything and just sits there as a
      // blank gap in the document between the hero and the menu.
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: heroRef.current,
      })

      if (reduceMotion || arrivingFromBack) {
        markRevealComplete()
        if (arrivingFromBack) {
          // Land straight on the menu, not the hero from scratch — jump
          // instantly (no smooth scroll) so it reads as "already there".
          window.scrollTo(0, cardsRef.current.offsetTop)
          window.history.replaceState({}, '')
        }
        return
      }

      gsap.set(imagineChars, { opacity: 0 })
      gsap.set(executeChars, { opacity: 0 })
      gsap.set(scrollRef.current, { opacity: 1 })

      // The reveal itself is a second, independent ScrollTrigger on the same
      // trigger/range — a pure-scrub one that gets disabled — without
      // reverting, kill() would snap the tween's styles back to their start
      // state — the instant it first completes. With scrub active, just
      // overriding tl.progress(1) inside onUpdate isn't enough on its own:
      // scrub keeps continuously easing the tween back toward the real
      // (lower) scroll-based progress on every subsequent tick, so the
      // override has to be paired with actually disabling that trigger to
      // make it stick. Only a refresh resets it. Keeping this separate from
      // the pin trigger above means disabling it never touches the pin, so
      // scrolling back up still un-pins/re-pins the hero completely
      // normally — no black gaps.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (self.progress >= 1) {
              tl.progress(1)
              self.disable(false)
            }
          },
        },
      })

      tl.to(lineRightRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' })
        .to(imagineChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')
        .to(lineLeftRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' }, '-=0.4')
        .to(executeChars, { opacity: 1, stagger: 0.03, duration: 0.6, ease: 'none' }, '<0.15')
        .to(scrollRef.current, { opacity: 0, duration: 0.3 }, '+=0.2')
    }, wrapperRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HudChrome />
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
            <div className="scroll-indicator" ref={scrollRef}>
              <span>SCROLL DOWN</span>
              <span className="scroll-arrow" aria-hidden="true"></span>
            </div>
          </section>
        </div>

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
