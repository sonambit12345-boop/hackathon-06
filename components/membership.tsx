'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Sparkles } from 'lucide-react'
import { PLANS, type Plan, type PlanDuration } from '@/data/site'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const PLAN_BANNER: Record<Plan['id'], string> = {
  plus: '/plan-plus.png',
  ultra: '/plan-ultra.png',
}

const DURATIONS: PlanDuration[] = ['2 Years', '3 Years', '4 Years']

export function Membership() {
  return (
    <section id="membership" className="relative py-20 sm:py-28">
      <div className="strike-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            The Strike Membership
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Membership
            <br />
            Plans
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-muted-foreground">
            One focused investment in your engineering career. Every course.
            Present and future. Pay once, learn forever.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 120}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices inclusive of GST · One-time payment · No renewals
        </p>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const [duration, setDuration] = useState<PlanDuration>('4 Years')
  const { price, original } = plan.pricing[duration]
  const off = Math.round(((original - price) / original) * 100)
  const gold = plan.theme === 'gold'

  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-surface p-1.5 transition-colors',
        gold ? 'border-gold/25 hover:border-gold/50' : 'border-white/10 hover:border-white/25',
      )}
    >
      {/* Banner */}
      <div className="relative h-44 overflow-hidden rounded-[1.35rem] sm:h-52">
        <Image
          src={PLAN_BANNER[plan.id] || '/placeholder.svg'}
          alt={`${plan.name} mentors`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            'object-cover transition-transform duration-500 group-hover:scale-[1.03]',
            gold && 'saturate-[0.85] brightness-95',
          )}
          priority={false}
        />

        {plan.bestValue && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black">
            <Sparkles className="h-3 w-3" />
            Best Value
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {plan.tag}
        </p>
        <h3 className="mt-1.5 font-display text-2xl">{plan.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {plan.description}
        </p>

        {/* Duration toggle */}
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Select Duration
        </p>
        <div
          className={cn(
            'mt-2 inline-flex w-fit rounded-full border p-1',
            gold ? 'border-gold/30 bg-gold/5' : 'border-white/10 bg-white/5',
          )}
          role="group"
          aria-label={`Select duration for ${plan.name}`}
        >
          {DURATIONS.map((d) => {
            const activeD = d === duration
            return (
              <button
                key={d}
                type="button"
                onClick={() => setDuration(d)}
                aria-pressed={activeD}
                className={cn(
                  'relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors sm:px-4',
                  activeD
                    ? gold
                      ? 'bg-gold text-black'
                      : 'bg-white text-black'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {d}
                {d === '4 Years' && (
                  <span
                    className={cn(
                      'ml-1 text-[9px]',
                      activeD ? 'text-black/70' : 'text-gold',
                    )}
                  >
                    Popular
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Price */}
        <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-2">
          <div className="flex items-start">
            <span className="mt-1 text-xl text-muted-foreground">₹</span>
            <span className="font-display text-4xl leading-none sm:text-5xl">
              {price.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-sm text-muted-foreground line-through">
            ₹{original.toLocaleString('en-IN')}
          </span>
          <span
            className={cn(
              'rounded-md px-2 py-1 text-xs font-bold',
              gold ? 'bg-gold text-black' : 'bg-white/10 text-foreground',
            )}
          >
            {off}% OFF
          </span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {duration} · one-time · no renewals
        </p>

        <hr className="my-5 border-white/8" />

        {/* Features */}
        <ul className="grid gap-2.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm">
              <span
                className={cn(
                  'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                  gold ? 'bg-gold/15 text-gold' : 'bg-white/10 text-foreground',
                )}
              >
                <Check className="h-3 w-3" />
              </span>
              <span className="text-foreground/90">{f}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={cn(
            'mt-6 w-full rounded-xl px-5 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.01] active:scale-[0.99]',
            gold
              ? 'bg-gold text-black shadow-[0_10px_40px_-12px_rgba(245,196,81,0.6)]'
              : 'bg-white text-black',
          )}
        >
          Get {plan.name}
        </button>
      </div>
    </div>
  )
}
