import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Recreates the original site's ".split-me" behavior:
 * each character is wrapped in a ".char" span (opacity:0, black bg — see index.css),
 * then GSAP reveals them left-to-right with a stagger, "wiping" the black
 * mask off as it goes. Re-runs every time this component mounts, so it
 * fires fresh on every route change since each page is its own component.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.025,
  duration = 0.5,
  onComplete,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const chars = node.querySelectorAll('.char')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(chars, { opacity: 1 })
      onComplete && onComplete()
      return
    }

    gsap.set(chars, { opacity: 0 })
    const tween = gsap.to(chars, {
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: 'power1.out',
      onComplete,
    })

    return () => tween.kill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {text.split('').map((ch, i) => (
        <span className="char" key={i}>
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </Tag>
  )
}
