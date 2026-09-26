'use client'

// Lightweight static SVG progress chart (green line + bars on dark),
// matching STRIKE's "Track Your Progress" card. No animation loop.

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// Normalised progress values (0-1) rising across the week.
const VALUES = [0.28, 0.36, 0.48, 0.56, 0.66, 0.78, 0.94]

const W = 560
const H = 300
const PAD_L = 44
const PAD_R = 16
const PAD_T = 16
const PAD_B = 34

export function ProgressChart() {
  const innerW = W - PAD_L - PAD_R
  const innerH = H - PAD_T - PAD_B

  const x = (i: number) => PAD_L + (innerW * i) / (DAYS.length - 1)
  const y = (v: number) => PAD_T + innerH * (1 - v)

  const linePoints = VALUES.map((v, i) => `${x(i)},${y(v)}`).join(' ')
  const areaPoints = `${PAD_L},${PAD_T + innerH} ${linePoints} ${x(
    DAYS.length - 1,
  )},${PAD_T + innerH}`

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-foreground sm:text-lg md:text-xl">
            Track Your Progress
          </h3>
          <p className="text-xs text-lime sm:text-sm">Grow With Strike</p>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Weekly learning progress trending upward from Monday to Sunday"
      >
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#84FF4A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#84FF4A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="barFill" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#CFFF9B" />
            <stop offset="100%" stopColor="#84FF4A" />
          </linearGradient>
        </defs>

        {/* Y grid + labels */}
        {[1, 0.75, 0.5, 0.25].map((g) => (
          <g key={g}>
            <line
              x1={PAD_L}
              x2={W - PAD_R}
              y1={y(g)}
              y2={y(g)}
              stroke="rgba(255,255,255,0.06)"
            />
            <text
              x={PAD_L - 10}
              y={y(g) + 4}
              textAnchor="end"
              className="fill-white/35"
              fontSize="11"
            >
              {g * 100}%
            </text>
          </g>
        ))}

        {/* Bars */}
        {VALUES.map((v, i) => {
          const bw = 16
          const bh = innerH * v * 0.62
          return (
            <rect
              key={i}
              x={x(i) - bw / 2}
              y={PAD_T + innerH - bh}
              width={bw}
              height={bh}
              rx={5}
              fill="url(#barFill)"
              opacity={0.85}
            />
          )
        })}

        {/* Area + line */}
        <polygon points={areaPoints} fill="url(#areaFill)" />
        <polyline
          points={linePoints}
          fill="none"
          stroke="#84FF4A"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {VALUES.map((v, i) => (
          <circle
            key={i}
            cx={x(i)}
            cy={y(v)}
            r={4}
            fill="#84FF4A"
            stroke="#0a0a0b"
            strokeWidth={2}
          />
        ))}

        {/* X labels */}
        {DAYS.map((d, i) => (
          <text
            key={d}
            x={x(i)}
            y={H - 10}
            textAnchor="middle"
            className="fill-white/45"
            fontSize="11"
          >
            {d}
          </text>
        ))}
      </svg>
    </div>
  )
}
