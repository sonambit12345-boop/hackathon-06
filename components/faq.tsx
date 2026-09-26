'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '@/data/site'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="strike-container max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl sm:text-5xl">
            Your Questions, Answered
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get instant answers to most common questions about Strike.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border bg-surface transition-colors',
                    isOpen ? 'border-white/20' : 'border-white/10',
                  )}
                >
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-base font-medium text-foreground">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300',
                        isOpen && 'rotate-45 text-gold',
                      )}
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
