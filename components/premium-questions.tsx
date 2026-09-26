'use client'

import { FAANG } from '@/data/site'
import { Reveal } from '@/components/reveal'

export function PremiumQuestions() {
  // Duplicate the list so the marquee loops seamlessly.
  const logos = [...FAANG, ...FAANG]

  return (
    <section id="faang" className="relative py-20 sm:py-28">
      <div className="strike-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Get All <span className="font-display">Premium</span> Questions
            Asked In <span className="font-display">FAANG Companies</span>
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="marquee relative mt-12 flex h-[70px] items-center overflow-hidden sm:h-[100px] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div
            className="marquee-track items-center gap-10 sm:gap-16"
            style={{ ['--marquee-duration' as string]: '32s' }}
          >
            {logos.map((brand, i) => (
              <img
                key={`${brand.name}-${i}`}
                src={brand.logo || '/placeholder.svg'}
                alt={brand.name}
                title={brand.name}
                width={brand.width}
                height={brand.height}
                loading="lazy"
                className="block h-8 w-auto shrink-0 object-contain transition-transform duration-300 ease-out hover:scale-125 sm:h-12"
                aria-hidden={i >= FAANG.length}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#232323] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#2f2f2f] active:scale-95"
          >
            Go Ahead
          </button>
        </Reveal>
      </div>
    </section>
  )
}
