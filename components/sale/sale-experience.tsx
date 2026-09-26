'use client'

import { useEffect, useState } from 'react'
import { useSaleTimer } from '@/hooks/use-sale-timer'
import { MascotCue } from '@/components/sale/mascot-cue'
import { SalePanel } from '@/components/sale/sale-panel'
import { RevealModal } from '@/components/sale/reveal-modal'

/**
 * Orchestrates the Thunder Sale journey:
 *   NOTICE  → the mascot appears (discovery cue)
 *   CURIOSITY / INTERACTION → user taps the mascot, charges the bolt
 *   DISCOVERY / REVEAL → the offer unlocks in a big centered modal
 *   OFFER / COUPON / REDEMPTION → discount, countdown, copyable code
 *
 * States: cue (idle) · open (panel) · dismissed (hidden) · plus revealed
 * and the expired state driven by the persistent timer.
 */
export function SaleExperience() {
  const { remaining, ready } = useSaleTimer()

  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [seen, setSeen] = useState(false)

  // Delay the first appearance so it reads as a discovery, not an instant ad.
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1400)
    return () => clearTimeout(t)
  }, [])

  // Allow Escape to close the open panel.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (dismissed || !mounted || !ready) return null

  // Once revealed (or the sale has expired), the win moves into a big
  // centered modal instead of the small corner card.
  const showOfferModal = open && (revealed || remaining.expired)
  const showChargePanel = open && !revealed && !remaining.expired

  return (
    <>
      {showOfferModal && (
        <RevealModal remaining={remaining} expired={remaining.expired} onClose={() => setOpen(false)} />
      )}

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
        {showChargePanel ? (
          <SalePanel onReveal={() => setRevealed(true)} onClose={() => setOpen(false)} />
        ) : !open ? (
          <MascotCue
            seen={seen}
            onOpen={() => {
              setOpen(true)
              setSeen(true)
            }}
            onDismiss={() => setDismissed(true)}
          />
        ) : null}
      </div>
    </>
  )
}
