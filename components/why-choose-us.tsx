'use client'

import { Reveal } from '@/components/reveal'
import { ProgressChart } from '@/components/progress-chart'

const INTERVIEW_IMAGE =
  'https://dolia18uq98lp.cloudfront.net/sale-icons/7ebc7314-dcfe-4e82-a2cb-677df6f9c57e.jpg'
const AI_SUPPORT_VIDEO = 'https://dolia18uq98lp.cloudfront.net/Videos/website_video.mp4'
const PROJECTS_VIDEO = 'https://dolia18uq98lp.cloudfront.net/Videos/website_video2.mp4'

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="strike-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Why Choose Us</h2>
          <p className="mt-5 text-balance text-muted-foreground">
            Learn smarter with modern tools, guided mentors, and a platform built
            to help you grow your skills faster, setting a new benchmark for
            modern coding excellence.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {/* Interview Preparation */}
          <Reveal className="w-full sm:w-[480px] md:w-[500px] lg:w-[520px]">
            <div className="group relative h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors duration-300 hover:border-white/20 sm:h-[320px] md:h-[350px]">
              <img
                src={INTERVIEW_IMAGE || '/placeholder.svg'}
                alt="Mentor guiding a student through interview preparation"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
              <div className="relative z-10 flex h-full flex-col items-start justify-start p-4 sm:p-6 md:p-8">
                <h3 className="text-xl font-normal text-white drop-shadow sm:text-2xl">
                  <span className="font-display">Inter</span>
                  <span className="font-mono">view</span> Preparation
                </h3>
                <p className="mt-2 max-w-[32ch] text-xs text-neutral-300 sm:text-sm md:text-base">
                  Learn faster with hands‑on tracks and mentor feedback.
                </p>
              </div>
            </div>
          </Reveal>

          {/* AI Support */}
          <Reveal delay={100} className="w-full sm:w-[480px] md:w-[500px] lg:w-[520px]">
            <div className="group relative h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors duration-300 hover:border-white/20 sm:h-[320px] md:h-[350px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={AI_SUPPORT_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 flex h-full items-start justify-center">
                <h3 className="mt-4 px-2 text-center text-base text-white drop-shadow-lg sm:mt-6 sm:text-lg md:mt-8 md:text-xl">
                  AI Support
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Projects Based Learning */}
          <Reveal className="w-full sm:w-[320px] md:w-[340px] lg:w-[350px]">
            <div className="group relative h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors duration-300 hover:border-white/20 sm:h-[320px] md:h-[350px] lg:h-[384px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={PROJECTS_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-start justify-center">
                <h3 className="mt-4 px-2 text-center text-base text-white drop-shadow-lg sm:mt-6 sm:text-lg md:mt-8 md:text-xl">
                  <span className="text-lg sm:text-xl">Projects</span>{' '}
                  <span className="font-display">Based Learning</span>
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Track Your Progress */}
          <Reveal
            delay={100}
            className="w-full sm:w-[620px] md:w-[680px] lg:w-[720px]"
          >
            <div className="group relative h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-surface p-5 transition-colors duration-300 hover:border-lime/30 sm:h-[320px] sm:p-6 md:h-[350px] lg:h-[400px]">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div
                  className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-45"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(132,255,74,0.28) 0%, rgba(132,255,74,0.08) 35%, transparent 70%)',
                  }}
                />
              </div>
              <div className="relative z-10 flex h-full flex-col">
                <ProgressChart />
                <span className="mt-auto inline-flex w-fit items-center gap-1.5 self-end rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-medium text-lime">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
                  </span>
                  Live Progress Tracking
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
