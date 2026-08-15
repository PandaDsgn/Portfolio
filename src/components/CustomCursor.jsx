import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, .card, .nav-btn, .nav-tab, .cert-thumb-link, .project-thumb-link, .resume-thumb-link, .tech-link, .social-icon-link, input, textarea, select, [role="button"]'

export default function CustomCursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    document.documentElement.classList.add('custom-cursor-active')

    let hovering = false
    const setHover = (isHovering) => {
      if (hovering === isHovering) return
      hovering = isHovering
      dot.classList.toggle('custom-cursor--hover', isHovering)
    }

    const move = (e) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      dot.classList.remove('custom-cursor--hidden')
    }
    const over = (e) => {
      if (e.target.closest?.(INTERACTIVE_SELECTOR)) setHover(true)
    }
    const out = (e) => {
      const stillInside = e.relatedTarget?.closest?.(INTERACTIVE_SELECTOR)
      if (e.target.closest?.(INTERACTIVE_SELECTOR) && !stillInside) setHover(false)
    }
    const hide = () => dot.classList.add('custom-cursor--hidden')

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', hide)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <svg
      ref={dotRef}
      className="custom-cursor custom-cursor--hidden"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
    </svg>
  )
}
