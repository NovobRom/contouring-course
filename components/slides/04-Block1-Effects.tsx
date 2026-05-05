const effects = [
  {
    name: 'Slim-эффект',
    mechanic: 'Затемнение боковых линий торса',
    result: 'Визуальная потеря 2–5 кг',
  },
  {
    name: 'Lifting-эффект',
    mechanic: 'Прорисовка скул и линии челюсти',
    result: 'Омоложение лица, более четкий овал',
  },
  {
    name: 'Fitness-эффект',
    mechanic: 'Акцент на «линии альфы» (пресс) и дельтовидных мышцах',
    result: 'Вид подтянутого, тренированного тела',
  },
  {
    name: 'Push-up',
    mechanic: 'Создание тени над грудной мышцей',
    result: 'Визуальное увеличение объема и коррекция формы',
  },
]

export default function Slide04Effects() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 1 · Введение</p>
        <h1 className="slide-title mb-10" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Что <em className="accent-italic">даёт</em> контуринг
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {effects.map((e) => (
            <div key={e.name} className="card flex flex-col gap-3">
              <h3
                className="font-playfair"
                style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, color: 'var(--accent)' }}
              >
                {e.name}
              </h3>
              <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {e.mechanic}
              </p>
              <div
                style={{
                  borderTop: '1px solid var(--line)',
                  paddingTop: '12px',
                  marginTop: '4px',
                }}
              >
                <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  → {e.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
