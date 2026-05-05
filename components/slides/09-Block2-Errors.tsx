export default function Slide09Errors() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 2 · Физика</p>
        <h1 className="slide-title mb-10" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          <em className="accent-italic">Ошибки</em> колористики
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="card"
            style={{ borderLeft: '3px solid var(--accent)' }}
          >
            <h3
              className="font-playfair mb-4"
              style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)' }}
            >
              «Эффект грязи»
            </h3>
            <p className="font-inter mb-4" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Возникает, если выбран слишком темный лосьон на очень светлой коже. Тень выглядит не как рельеф, а как несмытая пыль.
            </p>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
              <p className="font-inter" style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                <strong>Решение:</strong> Никогда не прыгайте через 2 уровня (например, с 8% сразу на 16%).
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{ borderLeft: '3px solid var(--accent)' }}
          >
            <h3
              className="font-playfair mb-4"
              style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)' }}
            >
              Желтизна при сходе
            </h3>
            <p className="font-inter mb-4" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Контуринг — это зона повышенной концентрации DHA. Если клиент плохо увлажняет кожу, тень начнет «трескаться» и желтеть быстрее основного тона.
            </p>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
              <p className="font-inter" style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                <strong>Факт:</strong> Контуринг всегда требует более тщательного пост-ухода.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
