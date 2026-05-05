import Image from 'next/image'

export default function Slide11Rule() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full h-full flex items-center gap-12">
        {/* Text column */}
        <div className="flex-1 min-w-0">
          <p className="eyebrow mb-6">Блок 3 · Анатомия</p>
          <h1 className="slide-title mb-8" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1 }}>
            Подчёркиваем то, что <em className="accent-italic">заложено</em>
          </h1>

          <p
            className="font-inter mb-6"
            style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-primary)', lineHeight: 1.7 }}
          >
            Помните главное правило: <strong>мы не рисуем новое тело, мы подчеркиваем то, что заложено природой</strong>. Если нарисовать кубики пресса там, где нет мышечного каркаса, при движении тела рисунок «сломается», и загар будет выглядеть комично.
          </p>

          <div
            style={{
              borderTop: '1px solid var(--line)',
              paddingTop: '24px',
              marginTop: '8px',
            }}
          >
            <p
              className="font-playfair"
              style={{
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              Ваша задача как эксперта — найти естественные тени клиента и усилить их.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
          style={{ width: '420px', height: '480px', position: 'relative' }}
        >
          <Image
            src="/course-image.svg"
            alt="Схема контуринга тела — анатомические зоны"
            fill
            style={{ objectFit: 'contain', opacity: 0.9 }}
            priority
          />
        </div>
      </div>
    </div>
  )
}
