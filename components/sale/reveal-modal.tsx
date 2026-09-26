'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, Copy, X, Zap } from 'lucide-react'
import { SALE, type Remaining } from '@/lib/sale'
import { Countdown } from '@/components/sale/countdown'
import { cn } from '@/lib/utils'

interface RevealModalProps {
  remaining: Remaining
  expired: boolean
  onClose: () => void
}

const CONFETTI_COLORS = ['var(--gold)', 'var(--lime)', 'var(--silver)', '#ffffff']

// Big, centered, gamified "you unlocked it" moment — replaces the small
// corner card once the offer is revealed so the win actually feels like one.
export function RevealModal({ remaining, expired, onClose }: RevealModalProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Stable confetti burst generated once per mount (client-only, post-interaction).
  const confetti = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1.1 + Math.random() * 0.9,
        size: 5 + Math.random() * 5,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        rotate: Math.random() * 360,
      })),
    [],
  )

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    },
    [],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const copy = async () => {
    if (expired) return
    try {
      await navigator.clipboard.writeText(SALE.coupon)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = SALE.coupon
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta)
    }
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 2000)
  }

  const redeem = async () => {
    await copy()
    onClose()
    document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
      style={{ animation: 'strike-modal-backdrop 0.3s ease-out' }}
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Thunder Sale offer unlocked"
        onClick={(e) => e.stopPropagation()}
        className="modal-pop relative flex w-full max-w-xl flex-col overflow-hidden rounded-3xl border-2 border-gold/40 bg-surface-2 p-6 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.95)] sm:min-h-[65vh] sm:p-10"
      >
        {/* Confetti burst */}
        {!expired && (
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {confetti.map((c, i) => (
              <span
                key={i}
                className="confetti-piece absolute top-[-10%] rounded-sm"
                style={{
                  left: `${c.left}%`,
                  width: c.size,
                  height: c.size * 1.6,
                  backgroundColor: c.color,
                  animationDelay: `${c.delay}s`,
                  animationDuration: `${c.duration}s`,
                  transform: `rotate(${c.rotate}deg)`,
                }}
              />
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close offer"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-[1] flex flex-1 flex-col items-center justify-center text-center">
          {expired ? (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-muted-foreground">
                <Zap className="h-7 w-7" />
              </div>
              <p className="mt-5 font-display text-2xl text-foreground sm:text-3xl">Offer expired</p>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground sm:text-base">
                The Thunder Sale has ended. Keep an eye out — the next drop is
                coming soon.
              </p>
              <div className="mt-6 select-none rounded-xl border border-white/10 bg-black/40 px-6 py-4 text-center opacity-50">
                <span className="font-display text-xl tracking-[0.2em] text-muted-foreground line-through sm:text-2xl">
                  {SALE.coupon}
                </span>
              </div>
              <button
                type="button"
                disabled
                className="mt-6 w-full max-w-sm cursor-not-allowed rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-muted-foreground"
              >
                Redemption closed
              </button>
            </>
          ) : (
            <>
              <span
                className="shimmer-text font-display text-sm font-bold uppercase tracking-[0.3em]"
                style={{ animation: 'strike-fade-up 0.4s ease-out, strike-shimmer 2.8s linear infinite' }}
              >
                Unlocked!
              </span>

              <p
                className="mt-3 font-display text-6xl leading-none text-gold sm:text-7xl"
                style={{
                  textShadow: '0 0 50px rgba(245,196,81,0.6)',
                  animation: 'strike-fade-up 0.45s ease-out',
                }}
              >
                {SALE.discountLabel}
              </p>
              <p className="mt-2 text-sm text-foreground/90 sm:text-base">
                on <span className="font-semibold text-foreground">{SALE.appliesTo}</span>
              </p>

              <div className="mt-7 w-full max-w-sm">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Offer ends in
                </p>
                <Countdown remaining={remaining} />
              </div>

              <div className="mt-7 w-full max-w-sm">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Your coupon code
                </p>
                <div className="flex items-stretch gap-2">
                  <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-gold/40 bg-black/40 px-4 py-3.5">
                    <span className="font-display text-xl tracking-[0.25em] text-gold">{SALE.coupon}</span>
                  </div>
                  <button
                    type="button"
                    onClick={copy}
                    aria-label={copied ? 'Coupon code copied' : 'Copy coupon code'}
                    className={cn(
                      'inline-flex min-w-[112px] items-center justify-center gap-1.5 rounded-xl px-4 py-3.5 text-sm font-bold transition-all active:scale-95',
                      copied ? 'bg-lime text-black' : 'bg-gold text-black hover:scale-[1.02]',
                    )}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copy code
                      </>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={redeem}
                className="mt-6 w-full max-w-sm rounded-xl bg-gold px-5 py-3.5 text-[15px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-95"
              >
                Redeem on {SALE.appliesTo.split(' — ')[0]}
              </button>

              <p aria-live="polite" className="sr-only">
                {copied ? 'Coupon code copied to clipboard' : ''}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
