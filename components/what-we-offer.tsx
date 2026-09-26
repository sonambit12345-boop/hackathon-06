'use client'

import Image from 'next/image'
import { Clock, Users } from 'lucide-react'
import { COURSES, type Course } from '@/data/site'
import { Reveal } from '@/components/reveal'

export function WhatWeOffer() {
  return (
    <section id="courses" className="relative py-20 sm:py-28">
      <div className="strike-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl">What We Offer</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our comprehensive courses designed to elevate your skills
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => (
            <Reveal key={course.title} delay={(i % 3) * 100}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <a
      href="#courses"
      aria-label={`View ${course.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image || '/placeholder.svg'}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          LIVE
        </span>
        {course.badge && (
          <span className="absolute bottom-3 left-3 rounded-md bg-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-black">
            {course.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.stack}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1">
            <Clock className="h-3 w-3" />
            {course.duration}
          </span>
          {course.hours && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1">
              <Users className="h-3 w-3" />
              {course.hours}
            </span>
          )}
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-gold">
          Explore Course
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  )
}
