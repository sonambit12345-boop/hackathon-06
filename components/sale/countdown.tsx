'use client'

import { pad, type Remaining } from '@/lib/sale'

// Displays the remaining time as HH : MM : SS with labelled digit blocks.
export function Countdown({ remaining }: { remaining: Remaining }) {
  const blocks = [
    { label: 'Hours', value: pad(remaining.hours) },
    { label: 'Mins', value: pad(remaining.minutes) },
    { label: 'Secs', value: pad(remaining.seconds) },
  ]

  return (
    <div
      className="flex items-stretch justify-center gap-2"
      role="timer"
      aria-live="off"
      aria-label={`Offer ends in ${remaining.hours} hours ${remaining.minutes} minutes ${remaining.seconds} seconds`}
    >
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-stretch gap-2">
          <div className="flex min-w-[3.25rem] flex-col items-center rounded-xl border border-gold/25 bg-black/50 px-2 py-2">
            <span className="font-display text-2xl tabular-nums text-gold">
              {b.value}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
              {b.label}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span
              className="self-center font-display text-xl text-gold/60"
              aria-hidden
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
