'use client'

import { useState } from 'react'
import { SLIDES, BLOCK_GROUPS } from '@/lib/slides-config'

interface SideNavProps {
  current: number
  onNavigate: (index: number) => void
}

export default function SideNav({ current, onNavigate }: SideNavProps) {
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navContent = (
    <div className="flex flex-col gap-4">
      {BLOCK_GROUPS.map((group) => (
        <div key={group.block} className="flex flex-col items-center gap-1.5 mb-3">
          <span
            className="font-inter mb-1"
            style={{
              fontSize: '8px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              writingMode: 'horizontal-tb',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
          >
            {group.label}
          </span>
          {group.slides.map((slideId) => {
            const slide = SLIDES.find(s => s.id === slideId)!
            const isActive = current === slideId
            const isHovered = hoveredSlide === slideId
            return (
              <div key={slideId} className="relative flex items-center justify-end group">
                {isHovered && (
                  <div
                    className="absolute right-8 whitespace-nowrap font-inter text-xs py-1 px-2 rounded-sm"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--line)',
                      color: 'var(--text-secondary)',
                      fontSize: '11px',
                    }}
                  >
                    {slide.title}
                  </div>
                )}
                <button
                  onClick={() => { onNavigate(slideId); setMobileOpen(false) }}
                  onMouseEnter={() => setHoveredSlide(slideId)}
                  onMouseLeave={() => setHoveredSlide(null)}
                  aria-label={slide.title}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width: isActive ? '10px' : '6px',
                    height: isActive ? '10px' : '6px',
                    background: isActive ? 'var(--accent)' : 'var(--line)',
                    flexShrink: 0,
                  }}
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Desktop side nav */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center"
        aria-label="Навигация по слайдам"
      >
        {navContent}
      </nav>

      {/* Mobile burger + drawer */}
      <button
        className="fixed top-5 right-5 z-[60] flex flex-col gap-1.5 p-2 lg:hidden"
        onClick={() => setMobileOpen(o => !o)}
        aria-label="Меню навигации"
      >
        <span
          className="block w-5 h-px transition-all"
          style={{ background: 'var(--text-secondary)', transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : '' }}
        />
        <span
          className="block w-5 h-px transition-all"
          style={{ background: 'var(--text-secondary)', opacity: mobileOpen ? 0 : 1 }}
        />
        <span
          className="block w-5 h-px transition-all"
          style={{ background: 'var(--text-secondary)', transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : '' }}
        />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="h-full w-64 p-8 flex flex-col justify-center"
            style={{ background: 'var(--bg-base)', borderLeft: '1px solid var(--line)' }}
            onClick={e => e.stopPropagation()}
          >
            {SLIDES.map((slide) => (
              <button
                key={slide.id}
                onClick={() => { onNavigate(slide.id); setMobileOpen(false) }}
                className="text-left py-2 font-inter text-sm transition-colors"
                style={{
                  color: current === slide.id ? 'var(--accent)' : 'var(--text-secondary)',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <span style={{ color: 'var(--text-muted)', marginRight: '8px', fontSize: '11px' }}>
                  {String(slide.id).padStart(2, '0')}
                </span>
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
