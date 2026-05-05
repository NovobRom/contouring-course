const cards = [
  {
    title: 'Механика',
    body: (
      <p>
        Клиент слегка подает плечи вперед, чтобы кость выделилась, и слегка соединяет грудь локтями.
      </p>
    ),
  },
  {
    title: 'Прорисовка',
    body: (
      <p>
        Мы создаем тень в углублениях <strong>над</strong> ключицей и <strong>под</strong> ней. Саму кость оставляем светлой. Так же <strong>над</strong> грудью прорисовываем V-силуэт, добавляя этим объем.
      </p>
    ),
  },
  {
    title: 'Направление',
    body: (
      <p>
        Движения аэрографом должны быть короткими и мягкими, повторяя изгибы кости и груди.
      </p>
    ),
  },
]

export default function Slide13Collarbones() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 3 · Анатомия · Зона 2</p>
        <h1 className="slide-title mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Ключицы и <em className="accent-italic">V-зона</em>
        </h1>

        <p
          className="font-inter mb-8"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '720px' }}
        >
          Контуринг ключиц придает образу хрупкость, изящество и «дорогой» вид. Это обязательный элемент для невест и выходов в открытых платьях.
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
