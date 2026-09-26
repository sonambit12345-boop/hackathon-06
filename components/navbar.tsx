'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/data/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [active, setActive] = useState<string>('Home')
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="strike-container">
        <nav className="nav-pill flex items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-6 sm:py-3">
          <a
            href="#home"
            className="font-display text-lg tracking-[0.2em] text-foreground sm:text-xl"
            aria-label="Strike home"
          >
            STRIKE
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active === item
                      ? 'bg-white/10 text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5',
                  )}
                  aria-current={active === item ? 'page' : undefined}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
            >
              Get Started
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="strike-container lg:hidden">
          <div className="nav-pill mt-2 rounded-2xl p-3">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(item)
                      setMobileOpen(false)
                    }}
                    className={cn(
                      'w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors',
                      active === item
                        ? 'bg-white/10 text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  type="button"
                  className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
