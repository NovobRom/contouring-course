const cards = [
  {
    n: '01',
    title: 'Симметрия',
    body: 'Сделали штрих справа — сразу повторите его слева. Не дорисовывайте всю правую сторону, а потом левую — вы потеряете симметрию.',
  },
  {
    n: '02',
    title: 'Дистанция',
    body: 'Держите аэрограф на расстоянии 5–7 см. Если поднесете ближе — будет четкая «грязная» линия, если дальше — тень распылится слишком широко и не даст рельефа.',
  },
  {
    n: '03',
    title: 'Растушевка «в ноль»',
    body: 'Начало и конец каждой линии должны быть максимально прозрачными. Тень не должна начинаться из ниоткуда.',
  },
]

export default function Slide16GoldenRules() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 3 · Анатомия</p>
        <h1 className="slide-title mb-10" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          <em className="accent-italic">Золотые</em> правила прорисовки
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div key={c.n} className="card flex flex-col gap-3">
              <span className="card-number">{c.n}</span>
              <h3
                className="font-playfair"
                style={{ fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)' }}
              >
                {c.title}
              </h3>
              <p className="font-inter" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
