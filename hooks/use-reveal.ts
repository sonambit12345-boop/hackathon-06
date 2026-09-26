'use client'

import { useEffect, useRef } from 'react'

/**
 * Adds `.is-visible` to the element the first time it scrolls into view.
 * One shared observer per element, disconnected after it fires — no
 * continuous scroll listeners, so it stays cheap on low-end devices.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect users who prefer no motion — reveal immediately.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}
