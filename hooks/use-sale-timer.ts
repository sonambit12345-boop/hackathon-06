'use client'

import { useEffect, useRef, useState } from 'react'
import { getOrCreateExpiry, getRemaining, type Remaining } from '@/lib/sale'

const EMPTY: Remaining = {
  total: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: false,
}

/**
 * Drives the sale countdown from an ABSOLUTE expiry timestamp persisted in
 * localStorage, so refreshing the page continues (never restarts) the clock.
 *
 * Robustness guarantees required by the brief:
 * - reads/creates a single persisted absolute timestamp
 * - ticks once per second with exactly ONE interval
 * - values never go negative (clamped in getRemaining)
 * - stops itself the moment it expires
 * - handles an already-expired timestamp on load
 * - cleans up the interval on unmount
 */
export function useSaleTimer() {
  const [expiry, setExpiry] = useState<number | null>(null)
  const [remaining, setRemaining] = useState<Remaining>(EMPTY)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const exp = getOrCreateExpiry()
    setExpiry(exp)
    setRemaining(getRemaining(exp))

    // If it is already expired on load, don't even start an interval.
    if (getRemaining(exp).expired) return

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    intervalRef.current = setInterval(() => {
      const r = getRemaining(exp)
      setRemaining(r)
      if (r.expired) stop()
    }, 1000)

    return stop
  }, [])

  return { expiry, remaining, ready: expiry !== null }
}
