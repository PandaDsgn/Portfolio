const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#$%&01'

/**
 * Scrambles an element's text through random glyphs, resolving character-by-character
 * (left to right) back into its own label. Used as a "press" feedback on the
 * BACK / SHUTDOWN / ACCESS_PROFILE controls.
 *
 * Returns a cancel function.
 */
export function glitchText(el, { duration = 420, steps = 3, onComplete } = {}) {
  if (!el) return () => {}

  const finalText = el.dataset.glitchLabel || el.textContent
  if (!el.dataset.glitchLabel) el.dataset.glitchLabel = finalText

  const length = finalText.length
  const startTime = performance.now()
  let frame

  function randomChar() {
    return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
  }

  function update(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    // How many characters (from the left) have "locked in" to their final value
    const lockedCount = Math.floor(progress * length)

    let output = ''
    for (let i = 0; i < length; i++) {
      if (i < lockedCount) {
        output += finalText[i]
      } else {
        // still-scrambling chars flicker every ~1/steps of a frame window
        output += finalText[i] === ' ' ? ' ' : randomChar()
      }
    }
    el.textContent = output

    if (progress < 1) {
      frame = requestAnimationFrame(update)
    } else {
      el.textContent = finalText
      onComplete && onComplete()
    }
  }

  frame = requestAnimationFrame(update)
  return () => cancelAnimationFrame(frame)
}
