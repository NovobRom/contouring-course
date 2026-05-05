const steps = [
  {
    n: '01',
    title: 'Контуринг',
    body: 'Наносим темные линии на чистую подготовленную кожу.',
  },
  {
    n: '02',
    title: 'Растушевка (опционально)',
    body: 'Сразу после нанесения линии можно слегка прихлопнуть края сухим спонжем.',
  },
  {
    n: '03',
    title: 'Основной слой',
    body: 'Покрываем всё тело основным лосьоном. Это «запечатывает» контур и делает переходы мягкими.',
  },
]

export default function Slide17Technique() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 4 · Технология</p>
        <h1 className="slide-title mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Схема <em className="accent-italic">«Сначала Тень»</em>
        </h1>

        <p
          className="font-inter mb-10"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px' }}
        >
          Рекомендуемая методика для минимизации ошибок.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col md:flex-row items-start gap-4 flex-1">
              <div className="card flex flex-col gap-3 flex-1">
                <span className="card-number">{s.n}</span>
                <h3
                  className="font-playfair"
                  style={{ fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)' }}
                >
                  {s.title}
                </h3>
                <p className="font-inter" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center self-center flex-shrink-0 mt-8"
                  style={{ color: 'var(--accent)', fontSize: '20px' }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
