'use client'

import Image from 'next/image'
import { MENTORS, type Mentor } from '@/data/site'
import { Reveal } from '@/components/reveal'

export function Mentors() {
  return (
    <section id="mentors" className="relative py-20 sm:py-28">
      <div className="strike-container">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl sm:text-5xl">
            Meet With Our Mentors
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {MENTORS.map((mentor, i) => (
            <Reveal key={mentor.name} delay={i * 120}>
              <MentorCard mentor={mentor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article className="group flex h-full flex-col items-center rounded-3xl border border-white/10 bg-surface p-8 text-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]">
      <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-white/10">
        <Image
          src={mentor.image || '/placeholder.svg'}
          alt={mentor.name}
          fill
          sizes="128px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-5 font-display text-2xl">{mentor.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{mentor.role}</p>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        {mentor.bio}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {mentor.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95"
        >
          Start Learning
        </button>
        <button
          type="button"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
        >
          Know More
        </button>
      </div>
    </article>
  )
}
