'use client'

import { ArrowUp } from 'lucide-react'

const COLUMNS = [
  { title: 'Platform', links: ['Home', 'Practice', 'DSA Sheet'] },
  { title: 'Company', links: ['Contact'] },
  { title: 'Legal', links: ['Terms of Service', 'Privacy Policy'] },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background py-16">
      <div className="strike-container">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
              STRIKE
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/90">
              Empowering developers with cutting-edge tools and resources.
              Powered by Coder Army, Strike is your gateway to a world of endless
              coding with guided lessons, real projects, level up your skills.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="inline-block text-sm text-foreground/90 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 STRIKE. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="hidden xs:inline">Back to</span> Top
          </a>
        </div>
      </div>
    </footer>
  )
}
