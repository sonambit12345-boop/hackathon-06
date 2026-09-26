'use client'

import { useEffect, useState } from 'react'
import { X, Zap } from 'lucide-react'
import { SALE } from '@/lib/sale'
import { cn } from '@/lib/utils'

interface SalePanelProps {
  onReveal: () => void
  onClose: () => void
}

const CHARGE_STEPS = 3 // taps needed to fully charge the bolt

// The small corner card for the "charge the bolt" mini-game. Once fully
// charged, the win moves into the big centered RevealModal.
export function SalePanel({ onReveal, onClose }: SalePanelProps) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Thunder Sale offer"
      className="w-[calc(100vw-2rem)] max-w-md origin-bottom-right overflow-hidden rounded-2xl border border-gold/30 bg-surface-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
      style={{ animation: 'strike-fade-up 0.4s cubic-bezier(0.22,1,0.36,1)' }}
    >
      {/* Header — themed like a native STRIKE feature */}
      <div className="relative flex items-center gap-2.5 border-b border-gold/20 bg-gradient-to-r from-gold/15 to-transparent px-4.5 py-4">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gold/20 text-gold">
          <Zap className="h-4.5 w-4.5 fill-gold" />
        </span>
        <div className="leading-tight">
          <p
            className="font-display text-base font-bold tracking-wide text-gold sm:text-lg"
            style={{ textShadow: '0 0 18px rgba(245,196,81,0.45)', animation: 'strike-fade-up 0.35s ease-out' }}
          >
            {SALE.name}
          </p>
          <p
            className="mt-0.5 text-xs text-muted-foreground"
            style={{ animation: 'strike-fade-up 0.5s ease-out' }}
          >
            {SALE.headline}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close offer"
          className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="p-6">
        <ChargeView onReveal={onReveal} />
      </div>
    </div>
  )
}

/* ---------- interactive "charge the bolt" mini-game ---------- */

// Short, escalating hype lines shown as the bolt fills up.
const CHARGE_LINES = ['Tap to charge', 'Getting warmer…', 'Almost there…', 'One more tap!']

function ChargeView({ onReveal }: { onReveal: () => void }) {
  const [taps, setTaps] = useState(0)
  const [sparkKey, setSparkKey] = useState(0)
  const pct = Math.min(100, (taps / CHARGE_STEPS) * 100)
  const done = taps >= CHARGE_STEPS

  // When fully charged, briefly hold the full bolt, then reveal the offer.
  useEffect(() => {
    if (!done) return
    const t = setTimeout(onReveal, 550)
    return () => clearTimeout(t)
  }, [done, onReveal])

  const charge = () => {
    if (done) return
    setTaps((t) => Math.min(CHARGE_STEPS, t + 1))
    setSparkKey((k) => k + 1) // re-trigger the spark burst animation
  }

  return (
    <div className="text-center">
      <p className="text-[15px] leading-relaxed text-foreground/90">
        Psst — Rohit Bhaiya hid a{' '}
        <span className="font-semibold text-gold">Thunder deal</span> for you.
        Charge the bolt to unlock it.
      </p>

      {/* Bolt meter */}
      <div className="relative mx-auto mt-5 flex h-32 w-32 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-gold/20" />
        <div
          className="absolute inset-0 rounded-full transition-all duration-300"
          style={{
            background: `conic-gradient(var(--gold) ${pct}%, transparent ${pct}%)`,
            opacity: 0.35,
          }}
        />
        {sparkKey > 0 && (
          <span
            key={sparkKey}
            aria-hidden
            className="spark-pop absolute inset-2 rounded-full"
            style={{
              boxShadow: '0 0 24px 6px rgba(245,196,81,0.55)',
            }}
          />
        )}
        <Zap
          className={cn(
            'h-14 w-14 transition-all duration-300',
            done ? 'scale-110 fill-gold text-gold' : 'text-gold/70',
          )}
          style={{ filter: done ? 'drop-shadow(0 0 16px rgba(247, 187, 49, 0.8))' : undefined }}
        />
      </div>

      <p className="mt-3 text-xs font-medium tabular-nums text-muted-foreground">
        {done ? 'Charged!' : `${Math.round(pct)}% charged`}
      </p>

      <button
        type="button"
        onClick={charge}
        disabled={done}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-[15px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70"
      >
        <Zap className="h-4.5 w-4.5 fill-black" />
        {done ? 'Unlocking…' : CHARGE_LINES[Math.min(taps, CHARGE_LINES.length - 1)]}
      </button>
    </div>
  )
}
