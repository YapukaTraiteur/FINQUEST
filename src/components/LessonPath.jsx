import { useNavigate } from 'react-router-dom'

const NODE_SIZE = 64
const VERTICAL_GAP = 104
const TOP_PADDING = 48
const AMPLITUDE = 78
const VIEW_WIDTH = 300

function xOffsetFor(index) {
  return AMPLITUDE * Math.sin((index * Math.PI) / 2)
}

function buildSmoothPath(points) {
  if (points.length === 0) return ''
  let d = `M ${points[0].x},${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const midY = (prev.y + curr.y) / 2
    d += ` C ${prev.x},${midY} ${curr.x},${midY} ${curr.x},${curr.y}`
  }
  return d
}

export default function LessonPath({ lessons, color, isLessonCompleted }) {
  const navigate = useNavigate()

  const points = lessons.map((_, index) => ({
    x: VIEW_WIDTH / 2 + xOffsetFor(index),
    y: TOP_PADDING + index * VERTICAL_GAP,
  }))

  let completedPrefixCount = 0
  while (completedPrefixCount < lessons.length && isLessonCompleted(lessons[completedPrefixCount].id)) {
    completedPrefixCount++
  }

  const trackPath = buildSmoothPath(points)
  const progressPath = buildSmoothPath(points.slice(0, Math.max(1, completedPrefixCount + 1)))
  const viewHeight = TOP_PADDING * 2 + (lessons.length - 1) * VERTICAL_GAP

  let currentFound = false

  return (
    <div className="relative mx-auto" style={{ width: VIEW_WIDTH, height: viewHeight }}>
      <svg
        className="absolute inset-0"
        width={VIEW_WIDTH}
        height={viewHeight}
        viewBox={`0 0 ${VIEW_WIDTH} ${viewHeight}`}
      >
        <path d={trackPath} stroke="rgba(255,255,255,0.1)" strokeWidth={8} fill="none" strokeLinecap="round" />
        {completedPrefixCount > 0 && (
          <path d={progressPath} stroke={color} strokeWidth={8} fill="none" strokeLinecap="round" />
        )}
      </svg>

      {lessons.map((lesson, index) => {
        const completed = isLessonCompleted(lesson.id)
        const previousCompleted = index === 0 || isLessonCompleted(lessons[index - 1].id)
        const locked = !completed && !previousCompleted
        const isCurrent = !locked && !completed && !currentFound
        if (isCurrent) currentFound = true

        const point = points[index]

        return (
          <div
            key={lesson.id}
            className="absolute flex flex-col items-center"
            style={{
              left: point.x - NODE_SIZE / 2,
              top: point.y - NODE_SIZE / 2,
              width: NODE_SIZE,
            }}
          >
            <button
              type="button"
              disabled={locked}
              onClick={() => navigate(`/lesson/${lesson.id}`)}
              aria-label={`${lesson.title}${locked ? ' (verrouillée)' : ''}`}
              className={`flex items-center justify-center rounded-full text-2xl border-4 transition-transform active:scale-95 ${
                locked ? 'cursor-not-allowed' : ''
              } ${isCurrent ? 'animate-pulse-glow' : ''}`}
              style={{
                width: NODE_SIZE,
                height: NODE_SIZE,
                backgroundColor: locked ? 'rgba(255,255,255,0.06)' : completed ? color : `${color}22`,
                borderColor: locked ? 'rgba(255,255,255,0.08)' : color,
              }}
            >
              {locked ? '🔒' : completed ? '✅' : lesson.emoji}
            </button>
            <p
              className={`mt-2 w-24 text-center text-[11px] font-bold leading-tight ${
                locked ? 'text-white/30' : 'text-white/80'
              }`}
            >
              {lesson.title}
            </p>
            {!locked && (
              <p className="text-[10px] font-bold" style={{ color }}>
                {lesson.xp} XP
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
