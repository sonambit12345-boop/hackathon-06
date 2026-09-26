// Thunder Sale — configuration + persistence helpers.
// The sale stores an ABSOLUTE expiry timestamp (not remaining seconds) so a
// page refresh never resets the countdown.

export const SALE = {
  name: 'THUNDER STUDENT DEAL',
  headline: 'A special student deal is waiting for you',
  discountLabel: '25% OFF',
  discountPercent: 25,
  appliesTo: 'Strike Ultra — 4 Year Membership',
  coupon: 'THUNDER25',
  // How long the sale runs from the moment it is first seen in this browser.
  durationMs: 24 * 60 * 60 * 1000, // 24 hours
  // Versioned key: bumping this (v2) intentionally orphans any stale/expired
  // timestamp left over from earlier testing, so real visitors always get a
  // fresh, correctly-running countdown instead of an instantly-expired one.
  storageKey: 'strike_hackathon_sale_expiry_v2',
} as const

/**
 * Returns the absolute expiry timestamp for this browser, creating and
 * persisting one on first visit. Guards against corrupted/legacy values,
 * including a stored timestamp that is somehow further out than the sale's
 * own duration could ever produce (clock tampering, bad test data, etc).
 */
export function getOrCreateExpiry(now: number = Date.now()): number {
  if (typeof window === 'undefined') return now + SALE.durationMs

  const raw = window.localStorage.getItem(SALE.storageKey)
  const parsed = raw ? Number(raw) : NaN
  const maxValidExpiry = now + SALE.durationMs

  if (Number.isFinite(parsed) && parsed > 0 && parsed <= maxValidExpiry) {
    return parsed
  }

  const expiry = now + SALE.durationMs
  window.localStorage.setItem(SALE.storageKey, String(expiry))
  return expiry
}

export interface Remaining {
  total: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

/** Never returns negative values; clamps to zero and flags expiry. */
export function getRemaining(expiry: number, now: number = Date.now()): Remaining {
  const total = Math.max(0, expiry - now)
  const expired = total <= 0
  return {
    total,
    hours: Math.floor(total / (1000 * 60 * 60)),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    expired,
  }
}

export const pad = (n: number) => String(n).padStart(2, '0')
