'use client'

import { Play, TerminalSquare, FileCode2 } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

// Static, syntax-highlighted representation of the STRIKE hero editor.
// Rendered as plain markup (no heavy highlighter dependency) to keep it fast.

const KEYWORD = 'text-[#c586c0]'
const FN = 'text-[#dcdcaa]'
const STR = 'text-[#ce9178]'
const CONST = 'text-[#4fc1ff]'
const COMMENT = 'text-[#6a9955]'
const PLAIN = 'text-[#d4d4d4]'

const SUGGESTIONS = [
  {
    title: 'Refactor welcome()',
    body: 'Extract user fetch and logging into separate utils for better testability.',
  },
  {
    title: 'Add input validation',
    body: 'Validate user.level against enum: Beginner | Advanced | Expert.',
  },
  {
    title: 'Improve typing',
    body: 'Define User type and return type for getUser and welcome functions.',
  },
  {
    title: 'Implement error handling',
    body: 'Add try-catch blocks and custom error messages for async operations.',
  },
]

export function CodeMock() {
  const revealRef = useReveal<HTMLDivElement>()

  return (
    <div
      ref={revealRef}
      className="code-scroll overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0d] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#111114] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-1 text-xs text-muted-foreground">
          <FileCode2 className="h-3.5 w-3.5 text-[#dcdcaa]" />
          <span className="text-foreground/90">strike.js</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5c451]" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="rounded bg-[#a3e635]/15 px-2 py-1 text-[10px] font-semibold tracking-wide text-[#a3e635]">
            READY
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-white/15"
          >
            <Play className="h-3.5 w-3.5" />
            Run Code
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-[1.35fr_1fr]">
        {/* Editor + terminal */}
        <div className="border-b border-white/10 md:border-b-0 md:border-r">
          <pre className="thin-scroll overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6">
            <code className="block">
              <Line n={1}>
                <span className={COMMENT}>{'// Strike Platform - Welcome Code'}</span>
              </Line>
              <Line n={2}>
                <span className={KEYWORD}>const </span>
                <span className={FN}>welcome</span>
                <span className={PLAIN}> = </span>
                <span className={KEYWORD}>async</span>
                <span className={PLAIN}> {'() => {'}</span>
              </Line>
              <Line n={3}>
                {'    '}
                <span className={KEYWORD}>const </span>
                <span className={CONST}>user</span>
                <span className={PLAIN}> = </span>
                <span className={KEYWORD}>await </span>
                <span className={FN}>getUser</span>
                <span className={PLAIN}>();</span>
              </Line>
              <Line n={4}>
                {'    '}
                <span className={PLAIN}>console.</span>
                <span className={FN}>log</span>
                <span className={PLAIN}>(</span>
                <span className={STR}>{'`Welcome ${user.name}!`'}</span>
                <span className={PLAIN}>);</span>
              </Line>
              <Line n={5}>
                {'    '}
                <span className={PLAIN}>console.</span>
                <span className={FN}>log</span>
                <span className={PLAIN}>(</span>
                <span className={STR}>{'`Level: ${user.level}`'}</span>
                <span className={PLAIN}>);</span>
              </Line>
              <Line n={6}>
                {'    '}
                <span className={KEYWORD}>return</span>
                <span className={PLAIN}> {'{ status: '}</span>
                <span className={STR}>&quot;success&quot;</span>
                <span className={PLAIN}> {'};'}</span>
              </Line>
              <Line n={7}>
                <span className={PLAIN}>{'};'}</span>
              </Line>
              <Line n={8}> </Line>
              <Line n={9}>
                <span className={KEYWORD}>const </span>
                <span className={FN}>getUser</span>
                <span className={PLAIN}> = </span>
                <span className={KEYWORD}>async</span>
                <span className={PLAIN}> {'() => ({'}</span>
              </Line>
              <Line n={10}>
                {'    '}
                <span className={CONST}>name</span>
                <span className={PLAIN}>: </span>
                <span className={STR}>&quot;Guest User&quot;</span>
                <span className={PLAIN}>,</span>
              </Line>
              <Line n={11}>
                {'    '}
                <span className={CONST}>level</span>
                <span className={PLAIN}>: </span>
                <span className={STR}>&quot;Beginner&quot;</span>
              </Line>
              <Line n={12}>
                <span className={PLAIN}>{'});'}</span>
              </Line>
              <Line n={13}> </Line>
              <Line n={14}>
                <span className={FN}>welcome</span>
                <span className={PLAIN}>();</span>
                <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-[#f5c451]" />
              </Line>
            </code>
          </pre>

          {/* Terminal */}
          <div className="border-t border-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-muted-foreground">
              <TerminalSquare className="h-4 w-4 text-[#a3e635]" />
              TERMINAL
            </div>
            <div className="px-4 py-3 font-mono text-xs">
              <p className="code-line text-[#a3e635]" style={{ '--n': 15 } as React.CSSProperties}>
                Welcome to Strike Terminal! ✨
              </p>
              <p
                className="code-line mt-2 flex items-center gap-2 text-muted-foreground"
                style={{ '--n': 16 } as React.CSSProperties}
              >
                <span className="text-[#a3e635]">$</span>
                <span className="inline-block h-3.5 w-1.5 animate-pulse bg-white/60" />
              </p>
            </div>
          </div>
        </div>

        {/* AI assistant panel */}
        <div className="bg-[#0d0d10]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm">
            <span className="rounded-md bg-white/10 px-3 py-1.5 font-medium text-foreground">
              AI Assistant
            </span>
            <span className="px-2 py-1.5 text-muted-foreground">Bug Shots</span>
            <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground">
              Static
            </span>
          </div>

          <div className="thin-scroll max-h-[360px] overflow-y-auto px-4 py-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Suggestions
            </h4>
            <ul className="mt-3 space-y-2.5">
              {SUGGESTIONS.map((s) => (
                <li
                  key={s.title}
                  className="rounded-lg border border-white/8 bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06]"
                >
                  <p className="text-sm font-medium text-foreground">{s.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>

            <h4 className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Thoughts
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>• Consider debouncing setDisplayedCode typing to save renders.</li>
              <li>• Memoize highlightCode with code length as key for performance.</li>
              <li>• Split regex patterns into precompiled list outside component.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <span
      className="code-line grid grid-cols-[2ch_1fr] gap-4"
      style={{ '--n': n } as React.CSSProperties}
    >
      <span className="select-none text-right text-white/25">{n}</span>
      <span className="whitespace-pre">{children}</span>
    </span>
  )
}
