const cards = [
  {
    title: 'Центральная линия',
    body: (
      <p>
        Прорисовываем мягкую вертикаль от солнечного сплетения до пупка. Это создает разделение мышц пресса.
      </p>
    ),
  },
  {
    title: 'Косые мышцы',
    body: (
      <p>
        Рисуем две дугообразные линии по бокам живота. Они визуально «срезают» лишние сантиметры с талии и делают живот плоским.
      </p>
    ),
  },
  {
    title: 'Золотое правило',
    body: (
      <p>
        Избегайте горизонтальных линий («кубиков»), если у клиента нет выраженного мышечного рельефа. Вертикали всегда выглядят естественнее и стройнят.
      </p>
    ),
  },
]

export default function Slide14Abs() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 3 · Анатомия · Зона 3</p>
        <h1 className="slide-title mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Пресс: <em className="accent-italic">линии Альфы</em>
        </h1>

        <p
          className="font-inter mb-8"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '720px' }}
        >
          Самая популярная зона для визуального похудения. Мы работаем над созданием вертикального рельефа. Просим клиентку слегка напрячь пресс.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="card flex flex-col gap-3">
              <h3
                className="font-playfair"
                style={{ fontSize: '20px', fontWeight: 400, color: 'var(--accent)' }}
              >
                {c.title}
              </h3>
              <div className="font-inter" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
