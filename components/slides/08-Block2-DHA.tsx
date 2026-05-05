const cards = [
  {
    n: '01',
    title: 'Разрыв в процентах',
    body: (
      <>
        <p style={{ marginBottom: '10px' }}>
          Для прорисовки теней используйте лосьон, в котором содержание DHA на <strong>2–4% выше</strong>, чем в основном составе.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '13px' }}>
          Пример: Если основной загар — 10%, для контуринга берем 12% или 14%.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'Бустеры',
    body: (
      <p>
        Если у вас нет лосьона нужной концентрации, используйте капли-бустеры (DHA drops). Добавляйте их в небольшое количество базового лосьона (5–10 мл) непосредственно перед процедурой.
      </p>
    ),
  },
  {
    n: '03',
    title: 'Подтон (Undertone)',
    body: (
      <p>
        Контур должен иметь тот же подтон, что и основной загар (зеленая, фиолетовая или шоколадная база). Смешивание разных баз может дать непредсказуемый грязный оттенок при смытии.
      </p>
    ),
  },
]

export default function Slide08DHA() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 2 · Физика</p>
        <h1 className="slide-title mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Работа с <em className="accent-italic">DHA</em>
        </h1>

        <p
          className="font-inter mb-8"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '760px' }}
        >
          Успех контуринга зависит от того, насколько естественно тень сливается с основным загаром.
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
