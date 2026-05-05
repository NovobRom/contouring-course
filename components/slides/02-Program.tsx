const blocks = [
  { n: '01', title: 'Введение и коммерция',              sub: 'Ценность услуги, прайс, продажи' },
  { n: '02', title: 'Физика светотени и колористика',    sub: 'Оптические иллюзии, работа с DHA' },
  { n: '03', title: 'Анатомия контуринга',               sub: 'Лицо, ключицы, пресс, руки и спина' },
  { n: '04', title: 'Технология нанесения',              sub: 'Схема «Сначала Тень»' },
  { n: '05', title: 'Практика',                          sub: 'Аэрограф, схемы, отработка' },
]

export default function Slide02Program() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Программа</p>
        <h1 className="slide-title mb-10" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1 }}>
          Пять <em className="accent-italic">блоков</em>
        </h1>

        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {blocks.map((b) => (
            <div key={b.n} className="card flex flex-col gap-3">
              <span className="card-number">{b.n}</span>
              <h3
                className="font-playfair"
                style={{ fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.3 }}
              >
                {b.title}
              </h3>
              <p className="font-inter" style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {b.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
