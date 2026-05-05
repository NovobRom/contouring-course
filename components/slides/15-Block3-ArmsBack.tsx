export default function Slide15ArmsBack() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 3 · Анатомия · Зона 4 (опционально)</p>
        <h1 className="slide-title mb-12" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Руки и <em className="accent-italic">спина</em>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: '800px' }}>
          <div className="card flex flex-col gap-3">
            <h3
              className="font-playfair"
              style={{ fontSize: '22px', fontWeight: 400, color: 'var(--accent)' }}
            >
              Руки (Дельты)
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Рисуем букву «V» на внешней стороне плеча. Это подчеркивает спортивность рук.
            </p>
          </div>

          <div className="card flex flex-col gap-3">
            <h3
              className="font-playfair"
              style={{ fontSize: '22px', fontWeight: 400, color: 'var(--accent)' }}
            >
              Спина
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Прорисовываем тень вдоль позвоночника. Это делает спину визуально более узкой и прямой.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
