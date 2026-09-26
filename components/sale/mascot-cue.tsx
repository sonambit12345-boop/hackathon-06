'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, X, Zap } from 'lucide-react'
import { SALE } from '@/lib/sale'

interface MascotCueProps {
  onOpen: () => void
  onDismiss: () => void
  seen: boolean
}

// Big, loud, "hey you, look here" copy shown OUTSIDE the chip — this is the
// actual attention-grabber, distinct from the chip's calmer branding text.
const ATTENTION_LINES = [
  'Wait…',
  'A little something for you ⚡',
  'Your student surprise is hiding here…',
  'One tap. One special deal.',
]

// Floating discovery cue — a mascot with a pulsing, lightning-flickering
// "Thunder Deal" chip, topped with loud attention-grabbing copy. Feels like
// a native STRIKE feature rather than an ad popup, and uses rotating copy +
// periodic flashes to build curiosity.
export function MascotCue({ onOpen, onDismiss, seen }: MascotCueProps) {
  const [lineIndex, setLineIndex] = useState(0)

  // Cycle the attention copy while the offer is still unseen.
  useEffect(() => {
    if (seen) return
    const t = setInterval(() => {
      setLineIndex((i) => (i + 1) % ATTENTION_LINES.length)
    }, 2600)
    return () => clearInterval(t)
  }, [seen])

  return (
    <div className="relative flex flex-col items-end">
      {/* Loud attention-grabber — a dynamic popup box that sits above the
          mascot and the "Thunder Sale Exclusive" chip, distinct from both */}
      {!seen && (
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open Thunder Sale offer"
          className="cue-popup-box relative mb-3 mr-2 max-w-[260px] rounded-2xl border border-gold/50 bg-gradient-to-br from-surface-2/95 to-surface/95 px-4 py-3 text-right shadow-[0_0_30px_-4px_rgba(245,196,81,0.5)] backdrop-blur sm:max-w-[320px]"
        >
          <span
            key={lineIndex}
            className="shimmer-text block font-display text-lg font-bold leading-tight sm:text-xl"
            style={{ animation: 'strike-fade-up 0.35s ease-out, strike-shimmer 2.6s linear infinite' }}
          >
            {ATTENTION_LINES[lineIndex]}
          </span>
          <ChevronDown className="ml-auto mt-1 h-5 w-5 animate-bounce text-gold" aria-hidden />
          <span className="cue-popup-tail" aria-hidden />
        </button>
      )}

      {/* Speech-bubble chip */}
      <div className="relative mb-1 mr-2">
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss offer"
          className="absolute -left-3 -top-3 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-surface-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          onClick={onOpen}
          className="group flex items-center gap-2 rounded-xl border border-gold/40 bg-surface-2/90 px-3.5 py-2.5 text-left shadow-[0_0_20px_-4px_rgba(245,196,81,0.35)] backdrop-blur transition-transform hover:scale-[1.04]"
          aria-label="Open Thunder Sale offer"
        >
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Zap className="lightning-flicker h-3.5 w-3.5 fill-gold text-gold" />
            {SALE.name}
          </span>
          <span className="rounded-md bg-gold px-1.5 py-0.5 text-[10px] font-bold text-black">
            {SALE.discountLabel}
          </span>
        </button>
      </div>

      {/* Mascot */}
      <button
        type="button"
        onClick={onOpen}
        aria-label="Chat with Rohit Bhaiya to reveal your Thunder Sale discount"
        className="pulse-ring float relative h-72 w-72 overflow-visible rounded-full transition-transform hover:scale-105 sm:h-[22rem] sm:w-[22rem]"
      >
        <Image
          src="/mascot.png"
          alt="Rohit Bhaiya mascot"
          fill
          sizes="320px"
          className="lightning-flicker object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          priority={false}
        />
      </button>
    </div>
  )
}
