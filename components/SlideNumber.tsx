'use client'

interface SlideNumberProps {
  current: number
  total: number
}

export default function SlideNumber({ current, total }: SlideNumberProps) {
  return (
    <div
      className="fixed top-6 right-20 z-50 font-inter text-sm"
      style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}
    >
      {String(current).padStart(2, '0')}{' '}
      <span style={{ color: 'var(--line)' }}>/</span>{' '}
      {String(total).padStart(2, '0')}
    </div>
  )
}
