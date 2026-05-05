const items = [
  'Изучение аэрографа (разборка/сборка, заправка, очищение)',
  'Отработка схем нанесения ручкой',
  'Отработка схем нанесения аэрографом на ватмане',
]

export default function Slide18Practice() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 5 · Практика</p>
        <h1 className="slide-title mb-12" style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.1 }}>
          <em className="accent-italic">Практика</em>
        </h1>

        <div className="flex flex-col gap-4" style={{ maxWidth: '680px' }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="card flex items-start gap-4"
              style={{ padding: '24px 32px' }}
            >
              <span
                style={{
                  color: 'var(--accent)',
                  fontSize: '18px',
                  lineHeight: 1,
                  marginTop: '2px',
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <p className="font-inter" style={{ fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
