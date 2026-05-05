const cards = [
  {
    title: 'Скулы',
    body: (
      <>
        <p style={{ marginBottom: '10px' }}>
          Находим скуловую кость. Тень наносится <strong>под</strong> нее, начиная от козелка уха и двигаясь к уголку рта.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '13px' }}>
          Секрет: Останавливайтесь на середине щеки (под внешним уголком глаза), чтобы не «провалить» лицо.
        </p>
      </>
    ),
  },
  {
    title: 'Линия челюсти',
    body: (
      <p>
        Проходим мягкой тенью вдоль края нижней челюсти. Это скрывает второй подбородок и делает профиль более четким.
      </p>
    ),
  },
  {
    title: 'Виски',
    body: (
      <p>
        Легкое затемнение в области висков визуально сужает лоб и собирает образ воедино.
      </p>
    ),
  },
]

export default function Slide12Face() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 3 · Анатомия · Зона 1</p>
        <h1 className="slide-title mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Лицо: скулы и <em className="accent-italic">овал</em>
        </h1>

        <p
          className="font-inter mb-8"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '700px' }}
        >
          Это самая востребованная зона. Правильный контуринг лица заменяет ежедневный макияж и дает эффект лифтинга.
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
