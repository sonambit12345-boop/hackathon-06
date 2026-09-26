'use client'

import { CodeMock } from '@/components/code-mock'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-32 sm:pt-40"
    >
      {/* Radial glow behind hero — matches STRIKE's centered spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full opacity-70 blur-[120px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(80,80,90,0.35), rgba(0,0,0,0))',
        }}
      />

      <div className="strike-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl leading-[1.15] sm:text-5xl md:text-6xl">
            <span className="block bg-gradient-to-b from-white/55 to-white/25 bg-clip-text text-transparent">
              Take control of your
            </span>
            <span className="mt-1 block text-[125%] sm:text-[125%] md:text-[125%]">
              Future With{' '}
              <span
                className="text-white"
                style={{ textShadow: '0 0 40px rgba(255,255,255,0.35)' }}
              >
                Strike
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Master DSA, System Design &amp; AI with interactive coding
            environments
          </p>

          <div className="mt-9 flex justify-center">
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#2a2a2e] to-[#0c0c0e] px-9 py-4 text-base font-semibold text-foreground shadow-[0_10px_40px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/10 transition-transform hover:scale-[1.03] active:scale-95"
            >
              Join Us
            </button>
          </div>
        </div>

        {/* Code editor mock */}
        <div className="mx-auto mt-16 max-w-5xl">
          <CodeMock />
        </div>
      </div>
    </section>
  )
}
