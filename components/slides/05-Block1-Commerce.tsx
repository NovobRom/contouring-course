const cards = [
  {
    n: '01',
    title: 'Формирование прайса',
    body: (
      <>
        <p style={{ marginBottom: '12px' }}>
          Контуринг не должен входить в стоимость базового загара. Это отдельная интеллектуальная и техническая работа.
        </p>
        <p style={{ marginBottom: '8px' }}>
          <strong>Trade-off:</strong> Если вы ставите низкую цену, клиент обесценивает сложность процесса. Если слишком высокую — услуга станет разовой «для особых случаев».
        </p>
        <p>
          <strong>Рекомендация:</strong> Установите стоимость контуринга в размере 20-30% от цены основного загара.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'Психология продаж',
    body: (
      <>
        <p style={{ marginBottom: '12px' }}>
          Не спрашивайте «Нужен ли вам контуринг?». Используйте экспертную оценку.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
          «Для вашего типа платья я рекомендую подчеркнуть линию ключиц и зону декольте, это сделает образ более дорогим и вечерним».
        </p>
      </>
    ),
  },
  {
    n: '03',
    title: 'Демонстрация результата',
    body: (
      <>
        <p style={{ marginBottom: '12px' }}>
          Самая большая ошибка — выкладывать только фото полного загара.
        </p>
        <p>
          <strong>Нужно:</strong> Делать видео-процесс прорисовки и фото «До/После» конкретных зон (например, только одна нога с контурингом, вторая — без). Это наглядно объясняет клиенту, за что он платит.
        </p>
      </>
    ),
  },
]

export default function Slide05Commerce() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 1 · Введение</p>
        <h1 className="slide-title mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Как <em className="accent-italic">продать</em> услугу
        </h1>

        <p
          className="font-inter mb-8"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '700px' }}
        >
          Контуринг — это инструмент для повышения среднего чека и отстройки от конкурентов. Это услуга для клиентов, которые ценят детали и готовы платить за премиальный результат.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div key={c.n} className="card flex flex-col gap-3">
              <span className="card-number">{c.n}</span>
              <h3
                className="font-playfair"
                style={{ fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)' }}
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
