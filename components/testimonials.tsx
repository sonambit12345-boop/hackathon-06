'use client'

import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/data/site'
import { Reveal } from '@/components/reveal'

export function Testimonials() {
  const mid = Math.ceil(TESTIMONIALS.length / 2)
  const rowA = TESTIMONIALS.slice(0, mid)
  const rowB = TESTIMONIALS.slice(mid)

  return (
    <section id="reviews" className="relative overflow-hidden py-20 sm:py-28">
      <div className="strike-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Star className="h-3 w-3 fill-gold text-gold" />
            Reviews
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">
            Trusted by Visionaries
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear from real users who achieved success with our platform
          </p>
        </Reveal>
      </div>

      <div className="mt-14 space-y-5">
        <Reveal>
          <MarqueeRow items={rowA} duration="52s" />
        </Reveal>
        <Reveal delay={100}>
          <MarqueeRow items={rowB} duration="46s" reverse />
        </Reveal>
      </div>
    </section>
  )
}

function MarqueeRow({
  items,
  duration,
  reverse,
}: {
  items: { name: string; text: string }[]
  duration: string
  reverse?: boolean
}) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className="marquee-track gap-5"
        style={{
          ['--marquee-duration' as string]: duration,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-surface p-5 sm:w-[380px]"
          >
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-foreground/85">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-display text-sm text-foreground">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
