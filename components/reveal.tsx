'use client'

import { cn } from '@/lib/utils'
import { useReveal } from '@/hooks/use-reveal'
import type { ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Stagger the animation by delaying the transition. */
  delay?: number
}

/** Wraps children so they fade/slide up the first time they enter the viewport. */
export function Reveal({ children, className, as: Tag = 'div', delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
