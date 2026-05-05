'use client'

interface ArrowControlsProps {
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

export default function ArrowControls({ onPrev, onNext, hasPrev, hasNext }: ArrowControlsProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="Предыдущий слайд"
        className="flex items-center justify-center w-11 h-11 border rounded-sm transition-all duration-200 disabled:opacity-20"
        style={{
          borderColor: 'var(--line)',
          color: hasPrev ? 'var(--text-secondary)' : 'var(--line)',
          background: 'transparent',
        }}
        onMouseEnter={e => {
          if (hasPrev) (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--line)'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Следующий слайд"
        className="flex items-center justify-center w-11 h-11 border rounded-sm transition-all duration-200 disabled:opacity-20"
        style={{
          borderColor: 'var(--line)',
          color: hasNext ? 'var(--text-secondary)' : 'var(--line)',
          background: 'transparent',
        }}
        onMouseEnter={e => {
          if (hasNext) (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--line)'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
